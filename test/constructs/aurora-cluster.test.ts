import * as cdk from 'aws-cdk-lib';
import { aws_rds as rds, aws_ec2 as ec2 } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AuroraCluster } from '../../lib/constructs/aurora-cluster';
import { Networking } from '../../lib/constructs/networking';

describe('Constructs/PostgresInstance', () => {
  test('Creates a single Aurora cluster', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    const network = new Networking(stack, 'Networking', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      vpcName: 'TestVpc',
    });
    new AuroraCluster(stack, 'Database', {
      engine: rds.DatabaseClusterEngine.auroraPostgres({
        version: rds.AuroraPostgresEngineVersion.VER_15_2,
      }),
      vpc: network.vpc,
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::RDS::DBCluster', {
      Engine: 'aurora-postgresql',
      EngineVersion: '15.2',
      StorageEncrypted: true,
    });
    template.resourceCountIs('AWS::RDS::DBInstance', 2);
    template.hasResourceProperties('AWS::RDS::DBInstance', {
      DBInstanceClass: 'db.t3.small',
      Engine: 'aurora-postgresql',
    });

    template.hasResourceProperties('AWS::SecretsManager::Secret', {
      Name: 'TestStack/Database/secret',
    });
  });

  test('Can change the engine', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    const network = new Networking(stack, 'Networking', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      vpcName: 'TestVpc',
    });
    new AuroraCluster(stack, 'Database', {
      engine: rds.DatabaseClusterEngine.aurora({
        version: rds.AuroraEngineVersion.VER_1_23_4,
      }),
      vpc: network.vpc,
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
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    const network = new Networking(stack, 'Networking', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      vpcName: 'TestVpc',
    });
    new AuroraCluster(stack, 'Database', {
      engine: rds.DatabaseClusterEngine.auroraPostgres({
        version: rds.AuroraPostgresEngineVersion.VER_15_2,
      }),
      vpc: network.vpc,
      credentialsSecretName: 'TestClusterSecret',
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::SecretsManager::Secret', {
      Name: 'TestClusterSecret',
    });
  });
});
