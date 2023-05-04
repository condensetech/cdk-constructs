import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { aws_ec2 as ec2, aws_secretsmanager as sm, aws_rds as rds } from 'aws-cdk-lib';
import { IDatabase } from '../interfaces';
import { Ref } from './ref';

export interface PostgresClusterProps {
  vpc: ec2.IVpc;
  version: rds.AuroraPostgresEngineVersion;
  clusterName?: string;
  databaseName?: string;
  instanceType?: ec2.InstanceType;
  multiAz?: boolean;
  allowedSecurityGroups?: ec2.ISecurityGroup[];
  backupRetention?: cdk.Duration;
}

export class PostgresCluster extends Construct implements IDatabase {
  private readonly databaseCluster: rds.IDatabaseCluster;
  private readonly refEndpointAddress: Ref;
  private readonly refEndpointPort: Ref;

  constructor(scope: Construct, id: string, props: PostgresClusterProps) {
    super(scope, id);

    const engine = rds.DatabaseClusterEngine.auroraPostgres({
      version: props.version,
    });

    const parameterGroup = new rds.ParameterGroup(this, 'ParameterGroup', {
      engine,
      description: this.node.path,
    });

    const instanceType =
      props.instanceType ??
      ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.SMALL);

    const backup = props.backupRetention ? { retention: props.backupRetention } : undefined;

    this.databaseCluster = new rds.DatabaseCluster(this, 'DB', {
      clusterIdentifier: props.clusterName,
      engine,
      credentials: rds.Credentials.fromUsername('db_user', {
        secretName: `${this.node.path}/secret`,
      }),
      instanceProps: {
        instanceType,
        vpc: props.vpc,
        vpcSubnets: {
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        },
      },
      defaultDatabaseName: props.databaseName,
      parameterGroup,
      storageEncrypted: true,
      backup,
    });

    (props.allowedSecurityGroups ?? []).forEach((sg) => {
      this.databaseCluster.connections.allowDefaultPortFrom(sg);
    });

    this.refEndpointAddress = new Ref(
      this,
      'EndpointAddressRef',
      this.databaseCluster.clusterEndpoint.hostname
    );
    this.refEndpointPort = new Ref(
      this,
      'EndpointPortRef',
      this.databaseCluster.clusterEndpoint.port.toString()
    );
  }

  public getEndpointAddress(scope: Construct): string {
    return this.refEndpointAddress.getValue(scope);
  }

  public getEndpointPort(scope: Construct): string {
    return this.refEndpointPort.getValue(scope);
  }

  public fetchSecret(scope: Construct, id = 'DatabaseSecret'): sm.ISecret {
    return sm.Secret.fromSecretNameV2(scope, id, `${this.node.path}/secret`);
  }

  public getSecurityGroup(scope: Construct, id: string): ec2.ISecurityGroup {
    const securityGroup = this.databaseCluster.connections.securityGroups[0];
    return ec2.SecurityGroup.fromSecurityGroupId(scope, id, securityGroup.securityGroupId);
  }
}
