import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { INetworking } from '../interfaces';
import { Networking, NetworkingProps } from '../constructs/networking';

export type NetworkingStackProps = NetworkingProps & cdk.StackProps;

export class NetworkingStack extends cdk.Stack implements INetworking {
  private readonly construct: INetworking;

  constructor(scope: Construct, id: string, props: NetworkingStackProps) {
    super(scope, id, props);
    this.construct = new Networking(this, 'Networking', props);
  }

  get vpc(): ec2.IVpc {
    return this.construct.vpc;
  }

  get bastionHost(): ec2.IInstance | undefined {
    return this.construct.bastionHost;
  }
}
