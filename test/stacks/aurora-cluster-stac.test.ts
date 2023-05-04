import * as cdk from 'aws-cdk-lib';
import { aws_ec2 as ec2, aws_rds as rds } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { NetworkingStack } from '../../lib/stacks/networking-stack';
import { AuroraClusterStack } from '../../lib/stacks/aurora-cluster-stack';

describe('Stacks/PostgresInstanceStack', () => {
  test('Sets a default Instance name', () => {
    const app = new cdk.App();
    const network = new NetworkingStack(app, 'TestStack', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
    });
    const stack = new AuroraClusterStack(app, 'TestDbStack', {
      vpc: network.vpc,
      engine: rds.DatabaseClusterEngine.auroraPostgres({
        version: rds.AuroraPostgresEngineVersion.VER_15_2,
      }),
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::RDS::DBCluster', {
      DBClusterIdentifier: 'testdbstack/databasecluster',
    });
  });
});
