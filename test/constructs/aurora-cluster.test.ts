import * as cdk from 'aws-cdk-lib';
import { aws_rds as rds, aws_ec2 as ec2 } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AuroraCluster, AuroraClusterProps } from '../../lib/constructs/aurora-cluster';
import { Networking } from '../../lib/constructs/networking';

describe('Constructs/PostgresInstance', () => {
  const createTestStack = (additionalProps?: Partial<AuroraClusterProps>): cdk.Stack => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    const networking = new Networking(stack, 'Networking', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      vpcName: 'TestVpc',
    });
    new AuroraCluster(stack, 'Database', {
      engine: rds.DatabaseClusterEngine.auroraPostgres({
        version: rds.AuroraPostgresEngineVersion.VER_15_2,
      }),
      networking,
      ...additionalProps,
    });
    return stack;
  };

  test('Creates a single Aurora cluster', () => {
    const stack = createTestStack();
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
      Name: 'TestStack/Database/secret',
    });
  });

  test('Can change the engine', () => {
    const stack = createTestStack({
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
    const stack = createTestStack({
      credentialsSecretName: 'TestClusterSecret',
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::SecretsManager::Secret', {
      Name: 'TestClusterSecret',
    });
  });
});
