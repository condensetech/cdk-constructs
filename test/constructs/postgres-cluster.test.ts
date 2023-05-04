import * as cdk from 'aws-cdk-lib';
import { aws_rds as rds, aws_ec2 as ec2 } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { PostgresCluster } from '../../lib/constructs/postgres-cluster';
import { Networking } from '../../lib/constructs/networking';

describe('Constructs/PostgresInstance', () => {
  test('Creates a single RDS Instance', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    const network = new Networking(stack, 'Networking', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      vpcName: 'TestVpc',
    });
    new PostgresCluster(stack, 'Database', {
      version: rds.AuroraPostgresEngineVersion.VER_15_2,
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
  });
});
