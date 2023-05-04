import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { aws_ec2 as ec2, aws_secretsmanager as sm } from 'aws-cdk-lib';
import { PostgresCluster, PostgresClusterProps } from '../constructs';
import { IDatabase } from '../interfaces';

export type PostgresClusterStackProps = PostgresClusterProps & cdk.StackProps;

export class PostgresClusterStack extends cdk.Stack implements IDatabase {
  private readonly construct: IDatabase;

  constructor(scope: Construct, id: string, props: PostgresClusterStackProps) {
    super(scope, id, props);
    this.construct = new PostgresCluster(this, 'DatabaseCluster', {
      clusterName: `${this.node.path}/DatabaseCluster`,
      ...props,
    });
  }

  public getEndpointAddress(scope: Construct): string {
    return this.construct.getEndpointAddress(scope);
  }

  public getEndpointPort(scope: Construct): string {
    return this.construct.getEndpointPort(scope);
  }

  public fetchSecret(scope: Construct, id?: string | undefined): sm.ISecret {
    return this.construct.fetchSecret(scope, id);
  }

  public getSecurityGroup(scope: Construct, id: string): ec2.ISecurityGroup {
    return this.construct.getSecurityGroup(scope, id);
  }
}
