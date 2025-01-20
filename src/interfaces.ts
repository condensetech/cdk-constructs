import {
  aws_ec2 as ec2,
  aws_elasticloadbalancingv2 as elbv2,
  aws_rds as rds,
  aws_secretsmanager as secrets,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * The INetworking interface allows to write stacks and constructs that depend on networking without being tied to the specific networking implementation.
 * This allows to write composable infrastructures that, depending on the scenario, can split the networking layer in a separate stack or in a construct.
 *
 * In addition, the INetworking interface imposes a set of properties to ease the development of constructs that depend on networking resources.
 */
export interface INetworking {
  /**
   * The VPC where the networking resources are created.
   */
  readonly vpc: ec2.IVpc;

  /**
   * Returns the bastion host instance of the VPC, if any.
   */
  readonly bastionHost?: ec2.IConnectable;

  /**
   * Returns if the VPC has private subnets (with access to internet through a NAT gateway)
   */
  readonly hasPrivateSubnets: boolean;

  /**
   * Returns the isolated subnets of the VPC (without access to internet).
   */
  readonly isolatedSubnets: ec2.SubnetSelection;

  /**
   * Returns the private subnets of the VPC (with access to internet through a NAT gateway).
   */
  readonly privateSubnets?: ec2.SubnetSelection;

  /**
   * Returns the public subnets of the VPC.
   */
  readonly publicSubnets: ec2.SubnetSelection;
}

/**
 * The IDatabase interface allows to write stacks and constructs that depend on a database without being tied to the specific database implementation.
 *
 * @example
 * // In this example, MyConstruct is used across several IDatabase implementations without being tied to a specific construct or stack
 *
 * interface MyProps {
 *   database: IDatabase;
 * }
 *
 * class MyConstruct extends Construct {
 *   constructor(scope: Construct, id: string, props: MyProps) {
 *    super(scope, id);
 *    new CfnOutput(this, 'DatabaseEndpoint', { value: props.database.endpoint.hostname });
 *   }
 * }
 *
 * interface MyStackProps {
 *   database3: IDatabase;
 * }
 *
 * class MyStack extends cdk.Stack {
 *   constructor(scope: Construct, id: string, props: MyStackProps) {
 *     super(scope, id, props);
 *     new MyConstruct(this, 'MyConstruct1', {
 *       database: new AuroraCluster(this, 'Database', { ... })
 *     });
 *     new MyConstruct(this, 'MyConstruct2', {
 *       database: new DatabaseInstance(this, 'Database', { ... })
 *     });
 *     new MyConstruct(this, 'MyConstruct3', {
 *        database: props.database3
 *     });
 *   }
 * }
 *
 * const database3 = new AuroraClustrStack(app, 'AuroraClusterStack', { ... });
 * new MyStack(app, 'MyStack', { database3 });
 */
export interface IDatabase extends ec2.IConnectable {
  /**
   * The endpoint of the database.
   */
  readonly endpoint: rds.Endpoint;

  /**
   * Utility method that returns the secret with the credentials to access the database in a cross-stack compatible way.
   */
  fetchSecret(scope: Construct, id?: string): secrets.ISecret;
}

/**
 * Properties for the ApplicationListenerRule
 */
export interface AllocateApplicationListenerRuleProps {
  /**
   * Priority of the rule
   *
   * The rule with the lowest priority will be used for every request.
   * @default - The rule will be assigned a priority automatically.
   */
  readonly priority?: number;
  /**
   * Target groups to forward requests to.
   *
   * Only one of `action`, `fixedResponse`, `redirectResponse` or `targetGroups` can be specified.
   *
   * Implies a `forward` action.
   *
   * @default - No target groups.
   */
  readonly targetGroups?: elbv2.IApplicationTargetGroup[];
  /**
   * Action to perform when requests are received
   *
   * Only one of `action`, `fixedResponse`, `redirectResponse` or `targetGroups` can be specified.
   *
   * @default - No action
   */
  readonly action?: elbv2.ListenerAction;
  /**
   * Rule applies if matches the conditions.
   *
   * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html
   *
   * @default - No conditions.
   */
  readonly conditions?: elbv2.ListenerCondition[];
}

/**
 * The Entrypoint LoadBalancer is an Application Load Balancer (ALB) that serves as the centralized entry point for all applications.
 * This ALB is shared across multiple applications, primarily to optimize infrastructure costs by reducing the need for multiple load balancers.
 *
 * The IEntrypoint interface defines the common behaviors and properties that various implementations must adhere to.
 * This allows stacks and constructs to interact with the entry point without being dependent on a specific implementation, ensuring greater flexibility and maintainability.
 */
export interface IEntrypoint {
  /**
   * The load balancer custom domain name.
   * @default - No domain name is specified, and the load balancer dns name is used.
   */
  readonly domainName: string;

  /**
   * The ALB that serves as the entrypoint.
   */
  readonly alb: elbv2.IApplicationLoadBalancer;

  /**
   * The Application Listener priority allocator for the entrypoint.
   */
  readonly priorityAllocator: IApplicationListenerPriorityAllocator;

  /**
   * Utility method that returns the HTTPS listener of the entrypoint in a cross-stack compatible way.
   */
  referenceListener(scope: Construct, id: string): elbv2.IApplicationListener;

  /**
   * It creates an ApplicationListenerRule for the HTTPS listener of the Entrypoint.
   * This method doesn't require a priority to be explicitly set, and tracks the allocated priorities on a DynamoDB table to avoid conflicts.
   *
   * @param scope The scope of the construct.
   * @param id The application listener rule
   * @param props Application Listener rule properties
   */
  allocateListenerRule(
    scope: Construct,
    id: string,
    props: AllocateApplicationListenerRuleProps,
  ): elbv2.ApplicationListenerRule;
}

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

export interface IApplicationListenerPriorityAllocator {
  /**
   * The service token to use to reference the custom resource.
   */
  readonly serviceToken: string;

  /**
   * Allocates the priority of an application listener rule
   * @param scope The scope of the construct.
   * @param id The ID of the listener rule to allocate the priority to.
   * @param props
   * @returns The allocated priority.
   */
  allocatePriority(scope: Construct, id: string, props: AllocatePriorityProps): number;
}
