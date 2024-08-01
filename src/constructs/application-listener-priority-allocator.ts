import * as cdk from 'aws-cdk-lib';
import {
  aws_dynamodb as ddb,
  aws_elasticloadbalancingv2 as elbv2,
  aws_lambda as lambda,
  aws_lambda_nodejs as lambdaNode,
  custom_resources as customResources,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * Properties for allocating a priority to an application listener rule.
 */
export interface AllocatePriorityProps {
  /**
   * The listener to allocate the priority to.
   */
  readonly listener: elbv2.IApplicationListener;

  /**
   * The priority to allocate.
   * @default a priority will be allocated automatically.
   */
  readonly priority?: number;
}

/**
 * Properties for the ApplicationListenerPriorityAllocator construct.
 */
export interface ApplicationListenerPriorityAllocatorProps {
  /**
   * The initial priority value to start from.
   * @default 1
   */
  readonly priorityInitialValue?: number;
}

/**
 * This custom resource allows to generate unique priorities for application listener rules.
 *
 * Consumers can allocate a priority to a listener rule by calling the `allocatePriority` method, ensuring that:
 * - if no priority is set, one will be generated
 * - if a priority is set, an error will be thrown if the priority is already taken
 */
export class ApplicationListenerPriorityAllocator extends Construct {
  /**
   * Returns the singleton instance of the ApplicationListenerPriorityAllocator for the stack.
   * @param scope The scope of the construct.
   * @returns The singleton instance of the ApplicationListenerPriorityAllocator for the stack.
   */
  static of(scope: Construct): ApplicationListenerPriorityAllocator {
    const stack = cdk.Stack.of(scope);
    const globallyUniqueId = 'ApplicationListenerPriorityAllocator';
    return (
      (stack.node.tryFindChild(globallyUniqueId) as ApplicationListenerPriorityAllocator) ??
      new ApplicationListenerPriorityAllocator(stack, globallyUniqueId)
    );
  }

  /**
   * The service token to use to reference the custom resource.
   */
  readonly serviceToken: string;

  constructor(scope: Construct, id: string, props?: ApplicationListenerPriorityAllocatorProps) {
    super(scope, id);

    const table = new ddb.Table(this, 'Table', {
      partitionKey: { name: 'pk', type: ddb.AttributeType.STRING },
      sortKey: { name: 'sk', type: ddb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const onEventHandler = new lambdaNode.NodejsFunction(this, 'handler', {
      runtime: lambda.Runtime.NODEJS_20_X,
      environment: {
        TABLE_NAME: table.tableName,
        PRIORITY_INIT: props?.priorityInitialValue?.toString() ?? '1',
      },
    });
    table.grantReadWriteData(onEventHandler);

    const provider = new customResources.Provider(this, 'Provider', {
      onEventHandler,
    });
    this.serviceToken = provider.serviceToken;
  }

  /**
   * Allocates a priority to an application listener rule.
   * @param scope The scope of the construct.
   * @param id The ID of the listener rule to allocate the priority to.
   * @param props
   * @returns The allocated priority.
   */
  allocatePriority(scope: Construct, id: string, props: AllocatePriorityProps): number {
    const cr = new cdk.CustomResource(scope, id, {
      serviceToken: this.serviceToken,
      properties: {
        rulePath: `${scope.node.path}/${id}`,
        listenerArn: props.listener.listenerArn,
        priority: props.priority,
      },
    });
    return cdk.Token.asNumber(cr.getAtt('priority'));
  }
}
