import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as sm from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';

export interface INetworking {
  readonly vpc: ec2.IVpc;
  readonly bastionHost?: ec2.IInstance;
  readonly hasPrivateSubnets: boolean;
  readonly isolatedSubnets: ec2.SubnetSelection;
  readonly privateSubnets?: ec2.SubnetSelection;
  readonly publicSubnets: ec2.SubnetSelection;
}

export interface IDatabase extends ec2.IConnectable {
  fetchSecret(scope: Construct, id?: string): sm.ISecret;
}
