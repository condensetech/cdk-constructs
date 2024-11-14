import * as cdk from 'aws-cdk-lib';
import { aws_ec2 as ec2, aws_secretsmanager as sm, aws_rds as rds, aws_logs as logs } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { IDatabase, INetworking } from '../interfaces';

/**
 * Properties for the DatabaseInstance construct.
 */
export interface DatabaseInstanceProps {
  /**
   * The networking configuration for the database instance.
   */
  readonly networking: INetworking;

  /**
   * The engine of the database instance.
   */
  readonly engine: rds.IInstanceEngine;

  /**
   * The identifier of the database instance.
   * @default - No identifier is specified.
   */
  readonly instanceIdentifier?: string;

  /**
   * The name of the security group.
   * @default - `${construct.node.path}-sg`.
   */
  readonly securityGroupName?: string;

  /**
   * The name of the database.
   * @default - No default database is created.
   */
  readonly databaseName?: string;

  /**
   * The name of the secret that stores the credentials of the database.
   * @default `${construct.node.path}/secret`
   */
  readonly credentialsSecretName?: string;

  /**
   * The username of the database.
   * @default db_user
   */
  readonly credentialsUsername?: string;

  /**
   * The instance type of the database instance.
   * @default - db.t3.small.
   */
  readonly instanceType?: ec2.InstanceType;

  /**
   * The storage type of the database instance.
   * @default rds.StorageType.GP3
   */
  readonly storageType?: rds.StorageType;

  /**
   * The allocated storage of the database instance.
   * @default 20
   */
  readonly allocatedStorage?: number;

  /**
   * If the database instance is multi-AZ.
   * @default false
   */
  readonly multiAz?: boolean;

  /**
   * The backup retention period.
   * @default - It uses the default applied by [rds.DatabaseInstanceProps#backupRetention]https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds.DatabaseInstanceProps.html#backupretention).
   */
  readonly backupRetention?: cdk.Duration;

  /**
   * The removal policy to apply when the cluster is removed.
   * @default RemovalPolicy.RETAIN
   */
  readonly removalPolicy?: cdk.RemovalPolicy;

  /**
   * The list of log types that need to be enabled for exporting to CloudWatch Logs.
   * @default - No log types are enabled.
   */
  readonly cloudwatchLogsExports?: string[];

  /**
   * The number of days log events are kept in CloudWatch Logs. When updating this property, unsetting it doesn't remove the log retention policy. To remove the retention policy, set the value to Infinity.
   * @default logs never expire
   */
  readonly cloudwatchLogsRetention?: logs.RetentionDays;

  /**
   * The parameters to override in the parameter group.
   * @default - No parameter is overridden.
   */
  readonly parameters?: Record<string, string>;
}

/**
 * The DatabaseInstance construct creates an RDS database instance.
 * Under the hood, it creates a [rds.DatabaseInstance](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds-readme.html#starting-an-instance-database) construct.
 * It implements the IDatabase interface so that it can be used in other constructs and stacks without requiring to access to the underlying construct.
 *
 * It also applies the following changes to the default behavior:
 * - A [rds.ParameterGroup](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds-readme.html#parameter-groups) specific for the cluster is always defined.
 *   By using a custom parameter group instead of relying on the default one, a later change in the parameter group's parameters wouldn't require a replace of the cluster.
 * - The credentials secret name is created after the construct's path. This way, the secret name is more readable and, when working with multiple stacks, can be easily inferred without having to rely on Cloudformation exports.
 * - It defaults the storage type to GP3 when not specified.
 * - It defaults the allocated storage to the minimum storage of 20 GB when not specified.
 * - The default instance type is set to t3.small.
 * - The storage is always encrypted.
 * - If the networking configuration includes a bastion host, the database allows connections from the bastion host.
 * - The default security group name is `${construct.node.path}-sg`. This allows for easier lookups when working with multiple stacks.
 */
export class DatabaseInstance extends Construct implements IDatabase {
  /**
   * The underlying RDS database instance.
   */
  readonly resource: rds.IDatabaseInstance;
  readonly endpoint: rds.Endpoint;
  private readonly credentialsSecretName: string;

  constructor(scope: Construct, id: string, props: DatabaseInstanceProps) {
    super(scope, id);

    const removalPolicy = props.removalPolicy ?? cdk.RemovalPolicy.RETAIN;

    const parameterGroup = new rds.ParameterGroup(this, 'ParameterGroup', {
      engine: props.engine,
      description: this.node.path,
      removalPolicy: [cdk.RemovalPolicy.DESTROY, cdk.RemovalPolicy.RETAIN].includes(removalPolicy)
        ? removalPolicy
        : cdk.RemovalPolicy.DESTROY,
      parameters: props.parameters,
    });

    const instanceType =
      props.instanceType ?? ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.SMALL);

    this.credentialsSecretName = props.credentialsSecretName ?? `${this.node.path}/secret`;
    const credentials = rds.Credentials.fromUsername(props.credentialsUsername ?? 'db_user', {
      secretName: this.credentialsSecretName,
    });

    const securityGroup = new ec2.SecurityGroup(this, 'SecurityGroup', {
      vpc: props.networking.vpc,
      allowAllOutbound: true,
      securityGroupName: props.securityGroupName ?? `${this.node.path.replace(/\//g, '-')}-sg`,
    });

    this.resource = new rds.DatabaseInstance(this, 'DB', {
      instanceIdentifier: props.instanceIdentifier,
      vpc: props.networking.vpc,
      vpcSubnets: props.networking.isolatedSubnets,
      engine: props.engine,
      databaseName: props.databaseName,
      credentials,
      parameterGroup: parameterGroup,
      instanceType,
      allocatedStorage: props.allocatedStorage ?? 20,
      storageType: props.storageType ?? rds.StorageType.GP3,
      multiAz: props.multiAz ?? false,
      securityGroups: [securityGroup],
      storageEncrypted: true,
      backupRetention: props.backupRetention,
      removalPolicy,
      cloudwatchLogsExports: props.cloudwatchLogsExports,
      cloudwatchLogsRetention: props.cloudwatchLogsRetention,
    });
    if (props.networking.bastionHost) {
      this.resource.connections.allowDefaultPortFrom(props.networking.bastionHost);
    }
    this.endpoint = this.resource.instanceEndpoint;
  }

  get connections(): ec2.Connections {
    return this.resource.connections;
  }

  public fetchSecret(scope: Construct, id = 'DatabaseSecret'): sm.ISecret {
    return sm.Secret.fromSecretNameV2(scope, id, this.credentialsSecretName);
  }
}
