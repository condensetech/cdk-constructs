import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { aws_ec2 as ec2, aws_secretsmanager as sm, aws_rds as rds } from 'aws-cdk-lib';
import { IDatabase, INetworking } from '../interfaces';

export interface DatabaseInstanceProps {
  readonly networking: INetworking;
  readonly engine: rds.IInstanceEngine;
  readonly instanceName?: string;
  readonly databaseName?: string;
  readonly credentialsSecretName?: string;
  readonly instanceType?: ec2.InstanceType;
  readonly allocatedStorage?: number;
  readonly multiAz?: boolean;
  readonly backupRetention?: cdk.Duration;
}

export class DatabaseInstance extends Construct implements IDatabase {
  private readonly databaseInstance: rds.IDatabaseInstance;
  readonly endpoint: rds.Endpoint;

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
      vpc: props.networking.vpc,
      vpcSubnets: props.networking.isolatedSubnets,
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
    this.endpoint = this.databaseInstance.instanceEndpoint;
  }

  get connections(): ec2.Connections {
    return this.databaseInstance.connections;
  }

  public fetchSecret(scope: Construct, id = 'DatabaseSecret'): sm.ISecret {
    return sm.Secret.fromSecretNameV2(scope, id, `${this.node.path}/secret`);
  }
}
