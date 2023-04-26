import * as ec2 from 'aws-cdk-lib/aws-ec2';

export interface INetworking {
  readonly vpc: ec2.IVpc;
  readonly bastionHost?: ec2.IInstance;
}