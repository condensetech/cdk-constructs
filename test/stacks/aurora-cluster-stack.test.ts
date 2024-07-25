import * as cdk from 'aws-cdk-lib';
import { aws_ec2 as ec2, aws_rds as rds } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AuroraClusterStack } from '../../lib/stacks/aurora-cluster-stack';
import { NetworkingStack } from '../../lib/stacks/networking-stack';

describe('Stacks/PostgresInstanceStack', () => {
  test('does not set the cluster identifier', () => {
    const app = new cdk.App();
    const networking = new NetworkingStack(app, 'TestStack', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
    });
    const stack = new AuroraClusterStack(app, 'TestDbStack', {
      networking,
      engine: rds.DatabaseClusterEngine.auroraPostgres({
        version: rds.AuroraPostgresEngineVersion.VER_15_2,
      }),
    });

    const template = Template.fromStack(stack);

    Object.values(template.findResources('AWS::RDS::DBCluster')).map((resource) => {
      expect(Object.keys(resource.Properties)).not.toContain('DBClusterIdentifier');
    });
  });
});
