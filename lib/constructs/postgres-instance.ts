import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { aws_ec2 as ec2, aws_secretsmanager as sm, aws_rds as rds } from 'aws-cdk-lib';
import { IDatabase } from '../interfaces';
import { Ref } from './ref';

export interface PostgresInstanceProps {
  vpc: ec2.IVpc;
  version: rds.PostgresEngineVersion;
  instanceName?: string;
  databaseName?: string;
  instanceType?: ec2.InstanceType;
  allocatedStorage?: number;
  multiAz?: boolean;
  allowedSecurityGroups?: ec2.ISecurityGroup[];
  backupRetention?: cdk.Duration;
}

export class PostgresInstance extends Construct implements IDatabase {
  private readonly databaseInstance: rds.IDatabaseInstance;
  private readonly refEndpointAddress: Ref;
  private readonly refEndpointPort: Ref;

  constructor(scope: Construct, id: string, props: PostgresInstanceProps) {
    super(scope, id);

    const engine = rds.DatabaseInstanceEngine.postgres({
      version: props.version,
    });

    const parameterGroup = new rds.ParameterGroup(this, 'ParameterGroup', {
      engine,
      description: this.node.path,
    });

    const instanceType =
      props.instanceType ??
      ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.SMALL);

    this.databaseInstance = new rds.DatabaseInstance(this, 'DB', {
      instanceIdentifier: props.instanceName,
      vpc: props.vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      },
      engine,
      databaseName: props.databaseName,
      credentials: rds.Credentials.fromUsername('db_user', {
        secretName: `${this.node.path}/secret`,
      }),
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

    this.refEndpointAddress = new Ref(
      this,
      'EndpointAddressRef',
      this.databaseInstance.dbInstanceEndpointAddress
    );
    this.refEndpointPort = new Ref(
      this,
      'EndpointPortRef',
      this.databaseInstance.dbInstanceEndpointPort
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
    const securityGroup = this.databaseInstance.connections.securityGroups[0];
    return ec2.SecurityGroup.fromSecurityGroupId(scope, id, securityGroup.securityGroupId);
  }
}
