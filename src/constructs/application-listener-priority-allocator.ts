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
   * The priority to allocate.
   * @default a priority will be allocated automatically.
   */
  readonly priority?: number;
}

/**
 * Overridden config for the ApplicationListenerPriorityAllocator construct.
 */
export interface ApplicationListenerPriorityAllocatorConfig {
  /**
   * The initial priority value to start from.
   * @default 1
   */
  readonly priorityInitialValue?: number;

  /**
   * The removal policy to apply to the DynamoDB table.
   * @default - `RemovalPolicy.DESTROY`
   */
  readonly removalPolicy?: cdk.RemovalPolicy;
}

/**
 * Properties for the ApplicationListenerPriorityAllocator construct.
 */
export interface ApplicationListenerPriorityAllocatorProps extends ApplicationListenerPriorityAllocatorConfig {
  /**
   * Application Load Balancer Listener to allocate priorities for.
   */
  readonly listener: elbv2.IApplicationListener;
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
   * The service token to use to reference the custom resource.
   */
  readonly serviceToken: string;

  constructor(scope: Construct, id: string, props: ApplicationListenerPriorityAllocatorProps) {
    super(scope, id);

    const table = new ddb.Table(this, 'Table', {
      tableName: `app_listener_priorities_${cdk.Names.uniqueResourceName(props.listener, { maxLength: 220 })}`,
      partitionKey: { name: 'pk', type: ddb.AttributeType.STRING },
      removalPolicy: props.removalPolicy ?? cdk.RemovalPolicy.DESTROY,
    });

    const onEventHandler = new lambdaNode.NodejsFunction(this, 'handler', {
      functionName: `app_listener_priority_alloc_${cdk.Names.uniqueResourceName(props.listener, { maxLength: 220 })}`,
      runtime: lambda.Runtime.NODEJS_20_X,
      environment: {
        LISTENER_ARN: props.listener.listenerArn,
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
   * Allocates the priority of an application listener rule
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
        priority: props.priority,
      },
    });
    return cdk.Token.asNumber(cr.getAtt('priority'));
  }
}
