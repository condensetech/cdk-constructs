import * as cdk from 'aws-cdk-lib';
import { aws_rds as rds, aws_ec2 as ec2 } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AuroraCluster, AuroraClusterProps } from '../../lib/constructs/aurora-cluster';
import { Networking } from '../../lib/constructs/networking';

describe('Constructs/PostgresInstance', () => {
  interface TestStackOutput {
    stack: cdk.Stack;
    networking: Networking;
    testTarget: AuroraCluster;
  }
  const createTestStack = (additionalProps?: Partial<AuroraClusterProps>): TestStackOutput => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    const networking = new Networking(stack, 'Networking', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      vpcName: 'TestVpc',
    });
    const testTarget = new AuroraCluster(stack, 'DatabaseCluster', {
      engine: rds.DatabaseClusterEngine.auroraPostgres({
        version: rds.AuroraPostgresEngineVersion.VER_15_2,
      }),
      networking,
      ...additionalProps,
    });
    return { stack, networking, testTarget };
  };

  test('Creates a single Aurora cluster', () => {
    const { stack } = createTestStack();
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::RDS::DBCluster', {
      Engine: 'aurora-postgresql',
      EngineVersion: '15.2',
      StorageEncrypted: true,
    });
    template.resourceCountIs('AWS::RDS::DBInstance', 2);
    template.hasResourceProperties('AWS::RDS::DBInstance', {
      DBInstanceClass: 'db.t3.medium',
      Engine: 'aurora-postgresql',
    });

    template.hasResourceProperties('AWS::SecretsManager::Secret', {
      Name: 'TestStack/DatabaseCluster/secret',
    });
  });

  test('Can change the engine', () => {
    const { stack } = createTestStack({
      engine: rds.DatabaseClusterEngine.aurora({
        version: rds.AuroraEngineVersion.VER_1_23_4,
      }),
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::RDS::DBCluster', {
      Engine: 'aurora',
      EngineVersion: '5.6.mysql_aurora.1.23.4',
    });
    template.resourceCountIs('AWS::RDS::DBInstance', 2);
    template.hasResourceProperties('AWS::RDS::DBInstance', {
      DBInstanceClass: 'db.t3.small',
      Engine: 'aurora',
    });
  });

  test('Can change the credentials secret name', () => {
    const { stack } = createTestStack({
      credentialsSecretName: 'TestClusterSecret',
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::SecretsManager::Secret', {
      Name: 'TestClusterSecret',
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
      Description: 'to TestStackDatabaseClusterDBSecurityGroupE4F9263A:{IndirectPort}',
      DestinationSecurityGroupId: {
        'Fn::GetAtt': ['DatabaseClusterDBSecurityGroup4C7601D4', 'GroupId'],
      },
      FromPort: { 'Fn::GetAtt': ['DatabaseClusterDB62D9423F', 'Endpoint.Port'] },
      GroupId: { 'Fn::GetAtt': ['TestSecurityGroup880B57C0', 'GroupId'] },
      IpProtocol: 'tcp',
      ToPort: { 'Fn::GetAtt': ['DatabaseClusterDB62D9423F', 'Endpoint.Port'] },
    });
  });
});
