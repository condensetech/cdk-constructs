import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elb from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as sm from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';

export interface INetworking {
  readonly vpc: ec2.IVpc;
  readonly bastionHost?: ec2.BastionHostLinux;
  readonly hasPrivateSubnets: boolean;
  readonly isolatedSubnets: ec2.SubnetSelection;
  readonly privateSubnets?: ec2.SubnetSelection;
  readonly publicSubnets: ec2.SubnetSelection;
}

export interface IDatabase extends ec2.IConnectable {
  readonly endpoint: rds.Endpoint;
  fetchSecret(scope: Construct, id?: string): sm.ISecret;
}

export interface IEntrypoint {
  readonly domainName: string;
  readonly alb: elb.IApplicationLoadBalancer;
  referenceListener(scope: Construct, id: string): elb.IApplicationListener;
}
