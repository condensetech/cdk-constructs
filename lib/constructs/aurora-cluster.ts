import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { aws_ec2 as ec2, aws_secretsmanager as sm, aws_rds as rds } from 'aws-cdk-lib';
import { IDatabase } from '../interfaces';

export interface AuroraClusterProps {
  vpc: ec2.IVpc;
  engine: rds.IClusterEngine;
  clusterName?: string;
  databaseName?: string;
  credentialsSecretName?: string;
  instanceType?: ec2.InstanceType;
  multiAz?: boolean;
  allowedSecurityGroups?: ec2.ISecurityGroup[];
  backupRetention?: cdk.Duration;
}

export class AuroraCluster extends Construct implements IDatabase {
  private readonly databaseCluster: rds.IDatabaseCluster;

  constructor(scope: Construct, id: string, props: AuroraClusterProps) {
    super(scope, id);

    const parameterGroup = new rds.ParameterGroup(this, 'ParameterGroup', {
      engine: props.engine,
      description: this.node.path,
    });

    const minimumInstanceType =
      props.engine.engineType === 'aurora-postgresql'
        ? ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.MEDIUM)
        : ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.SMALL);

    const instanceType = props.instanceType ?? minimumInstanceType;

    const backup = props.backupRetention ? { retention: props.backupRetention } : undefined;

    const credentials = rds.Credentials.fromUsername('db_user', {
      secretName: props.credentialsSecretName ?? `${this.node.path}/secret`,
    });

    this.databaseCluster = new rds.DatabaseCluster(this, 'DB', {
      clusterIdentifier: props.clusterName,
      engine: props.engine,
      credentials,
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
  }

  public fetchSecret(scope: Construct, id = 'DatabaseSecret'): sm.ISecret {
    return sm.Secret.fromSecretNameV2(scope, id, `${this.node.path}/secret`);
  }

  public getSecurityGroup(scope: Construct, id: string): ec2.ISecurityGroup {
    const securityGroup = this.databaseCluster.connections.securityGroups[0];
    return ec2.SecurityGroup.fromSecurityGroupId(scope, id, securityGroup.securityGroupId);
  }
}
