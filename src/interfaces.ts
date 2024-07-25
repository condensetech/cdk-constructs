import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elb from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as sm from 'aws-cdk-lib/aws-secretsmanager';
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
  readonly bastionHost?: ec2.BastionHostLinux;

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
  fetchSecret(scope: Construct, id?: string): sm.ISecret;
}

export interface IEntrypoint {
  readonly domainName: string;
  readonly alb: elb.IApplicationLoadBalancer;
  referenceListener(scope: Construct, id: string): elb.IApplicationListener;
}
