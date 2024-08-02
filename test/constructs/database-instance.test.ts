import * as cdk from 'aws-cdk-lib';
import { aws_rds as rds } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { DatabaseInstance, DatabaseInstanceProps } from '../../lib/constructs/database-instance';
import { Networking } from '../../lib/constructs/networking';

describe('Constructs/DatabaseInstance', () => {
  interface TestStackOutput {
    stack: cdk.Stack;
    networking: Networking;
    testTarget: DatabaseInstance;
  }

  const createTestStack = (additionalProps: Partial<DatabaseInstanceProps> = {}): TestStackOutput => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    const networking = new Networking(stack, 'Networking', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      vpcName: 'TestVpc',
    });
    const testTarget = new DatabaseInstance(stack, 'Database', {
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_15_2,
      }),
      networking,
      ...additionalProps,
    });
    return { stack, testTarget, networking };
  };

  test('Creates a single RDS Instance', () => {
    const { stack } = createTestStack();
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::RDS::DBInstance', {
      DBInstanceClass: 'db.t3.small',
      Engine: 'postgres',
      EngineVersion: '15.2',
      AllocatedStorage: '20',
      StorageType: 'gp3',
      MultiAZ: false,
      StorageEncrypted: true,
    });
  });

  test('Can use a different engine', () => {
    const { stack } = createTestStack({
      engine: rds.DatabaseInstanceEngine.mariaDb({
        version: rds.MariaDbEngineVersion.VER_10_6_8,
      }),
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::RDS::DBInstance', {
      Engine: 'mariadb',
      EngineVersion: '10.6.8',
    });
  });

  test('Can change the allocated storage', () => {
    const { stack } = createTestStack({
      allocatedStorage: 100,
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::RDS::DBInstance', {
      AllocatedStorage: '100',
    });
  });

  test('Can change the backup retention', () => {
    const { stack } = createTestStack({
      backupRetention: cdk.Duration.days(7),
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::RDS::DBInstance', {
      BackupRetentionPeriod: 7,
    });
  });

  test('Can change the instance type', () => {
    const { stack } = createTestStack({
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::RDS::DBInstance', {
      DBInstanceClass: 'db.t3.micro',
    });
  });

  test('Can define the credentials secret name', () => {
    const { stack } = createTestStack({
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
      credentialsSecretName: 'TestSecret',
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::SecretsManager::Secret', {
      Name: 'TestSecret',
    });
  });

  test('Can allow connections from a security group', () => {
    const { stack, testTarget, networking } = createTestStack();
    const securityGroup = new ec2.SecurityGroup(stack, 'TestSecurityGroup', {
      vpc: networking.vpc,
      description: 'Test security group',
      allowAllOutbound: false,
    });
    testTarget.connections.allowDefaultPortFrom(securityGroup);
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::EC2::SecurityGroup', 2);
    template.hasResourceProperties('AWS::EC2::SecurityGroupEgress', {
      Description: 'to TestStackDatabaseSecurityGroup3A325A86:{IndirectPort}',
      DestinationSecurityGroupId: { 'Fn::GetAtt': ['DatabaseSecurityGroup5C91FDCB', 'GroupId'] },
      FromPort: { 'Fn::GetAtt': ['DatabaseDBB23F3D83', 'Endpoint.Port'] },
      GroupId: { 'Fn::GetAtt': ['TestSecurityGroup880B57C0', 'GroupId'] },
      IpProtocol: 'tcp',
      ToPort: { 'Fn::GetAtt': ['DatabaseDBB23F3D83', 'Endpoint.Port'] },
    });
  });
});
