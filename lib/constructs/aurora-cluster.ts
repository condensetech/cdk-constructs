import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { aws_ec2 as ec2, aws_secretsmanager as sm, aws_rds as rds } from 'aws-cdk-lib';
import { IDatabase, INetworking } from '../interfaces';

export interface AuroraClusterProps {
  networking: INetworking;
  engine: rds.IClusterEngine;
  clusterName?: string;
  databaseName?: string;
  credentialsSecretName?: string;
  multiAz?: boolean;
  backupRetention?: cdk.Duration;
  writer?: rds.IClusterInstance;
  readers?: rds.IClusterInstance[];
}

export class AuroraCluster extends Construct implements IDatabase {
  private readonly databaseCluster: rds.IDatabaseCluster;

  constructor(scope: Construct, id: string, props: AuroraClusterProps) {
    super(scope, id);

    const parameterGroup = new rds.ParameterGroup(this, 'ParameterGroup', {
      engine: props.engine,
      description: this.node.path,
    });

    const backup = props.backupRetention ? { retention: props.backupRetention } : undefined;

    const credentials = rds.Credentials.fromUsername('db_user', {
      secretName: props.credentialsSecretName ?? `${this.node.path}/secret`,
    });

    this.databaseCluster = new rds.DatabaseCluster(this, 'DB', {
      clusterIdentifier: props.clusterName,
      engine: props.engine,
      credentials,
      writer:
        props.writer ??
        rds.ClusterInstance.provisioned('ClusterInstance', {
          instanceType: AuroraCluster.minimumInstanceType(props.engine),
        }),
      readers: props.readers,
      vpc: props.networking.vpc,
      vpcSubnets: props.networking.isolatedSubnets,
      defaultDatabaseName: props.databaseName,
      parameterGroup,
      storageEncrypted: true,
      backup,
    });
  }

  get connections(): ec2.Connections {
    return this.databaseCluster.connections;
  }

  fetchSecret(scope: Construct, id = 'DatabaseSecret'): sm.ISecret {
    return sm.Secret.fromSecretNameV2(scope, id, `${this.node.path}/secret`);
  }

  static minimumInstanceType(engine: rds.IClusterEngine): ec2.InstanceType {
    return engine.engineType === 'aurora-postgresql'
      ? ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.MEDIUM)
      : ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.SMALL);
  }
}
