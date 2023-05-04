import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { aws_ec2 as ec2, aws_secretsmanager as sm, aws_rds as rds } from 'aws-cdk-lib';
import { IDatabase } from '../interfaces';

export interface DatabaseInstanceProps {
  vpc: ec2.IVpc;
  engine: rds.IInstanceEngine;
  instanceName?: string;
  databaseName?: string;
  credentialsSecretName?: string;
  instanceType?: ec2.InstanceType;
  allocatedStorage?: number;
  multiAz?: boolean;
  allowedSecurityGroups?: ec2.ISecurityGroup[];
  backupRetention?: cdk.Duration;
}

export class DatabaseInstance extends Construct implements IDatabase {
  private readonly databaseInstance: rds.IDatabaseInstance;

  constructor(scope: Construct, id: string, props: DatabaseInstanceProps) {
    super(scope, id);

    const parameterGroup = new rds.ParameterGroup(this, 'ParameterGroup', {
      engine: props.engine,
      description: this.node.path,
    });

    const instanceType =
      props.instanceType ??
      ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.SMALL);

    const credentials = rds.Credentials.fromUsername('db_user', {
      secretName: props.credentialsSecretName ?? `${this.node.path}/secret`,
    });

    this.databaseInstance = new rds.DatabaseInstance(this, 'DB', {
      instanceIdentifier: props.instanceName,
      vpc: props.vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      },
      engine: props.engine,
      databaseName: props.databaseName,
      credentials,
      parameterGroup: parameterGroup,
      instanceType,
      allocatedStorage: props.allocatedStorage ?? 20,
      storageType: rds.StorageType.GP3,
      multiAz: props.multiAz ?? false,
      storageEncrypted: true,
      backupRetention: props.backupRetention,
    });

    (props.allowedSecurityGroups ?? []).forEach((sg) => {
      this.databaseInstance.connections.allowDefaultPortFrom(sg);
    });
  }

  public fetchSecret(scope: Construct, id = 'DatabaseSecret'): sm.ISecret {
    return sm.Secret.fromSecretNameV2(scope, id, `${this.node.path}/secret`);
  }

  public getSecurityGroup(scope: Construct, id: string): ec2.ISecurityGroup {
    const securityGroup = this.databaseInstance.connections.securityGroups[0];
    return ec2.SecurityGroup.fromSecurityGroupId(scope, id, securityGroup.securityGroupId);
  }
}
