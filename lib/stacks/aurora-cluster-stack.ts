import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { aws_ec2 as ec2, aws_secretsmanager as sm, aws_rds as rds } from 'aws-cdk-lib';
import { AuroraCluster, AuroraClusterProps } from '../constructs';
import { IDatabase } from '../interfaces';

export type AuroraClusterStackProps = AuroraClusterProps & cdk.StackProps;

export class AuroraClusterStack extends cdk.Stack implements IDatabase {
  private readonly construct: IDatabase;

  constructor(scope: Construct, id: string, props: AuroraClusterStackProps) {
    super(scope, id, props);
    this.construct = new AuroraCluster(this, 'DatabaseCluster', {
      ...props,
    });
  }

  get endpoint(): rds.Endpoint {
    return this.construct.endpoint;
  }

  get connections(): ec2.Connections {
    return this.construct.connections;
  }

  public fetchSecret(scope: Construct, id?: string | undefined): sm.ISecret {
    return this.construct.fetchSecret(scope, id);
  }
}
