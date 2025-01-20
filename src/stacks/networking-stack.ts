import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { Networking, NetworkingProps } from '../constructs/networking';
import { INetworking } from '../interfaces';

/**
 * Properties for the NetworkingStack.
 */
export interface NetworkingStackProps extends NetworkingProps, cdk.StackProps {}

/**
 * The NetworkingStack creates a [Networking](#@condensetech/cdk-constructs.Networking) construct.
 * It implements the INetworking interface so that it can be used in other constructs and stacks without requiring to access to the underlying construct.
 */
export class NetworkingStack extends cdk.Stack implements INetworking {
  private readonly construct: INetworking;

  constructor(scope: Construct, id: string, props: NetworkingStackProps) {
    super(scope, id, props);
    this.construct = new Networking(this, 'Networking', {
      vpcName: `${this.node.path}/VPC`,
      ...props,
    });
  }

  get hasPrivateSubnets(): boolean {
    return this.construct.hasPrivateSubnets;
  }

  get isolatedSubnets(): ec2.SubnetSelection {
    return this.construct.isolatedSubnets;
  }

  get privateSubnets(): ec2.SubnetSelection | undefined {
    return this.construct.privateSubnets;
  }

  get publicSubnets(): ec2.SubnetSelection {
    return this.construct.publicSubnets;
  }

  get vpc(): ec2.IVpc {
    return this.construct.vpc;
  }

  get bastionHost(): ec2.IConnectable | undefined {
    return this.construct.bastionHost;
  }
}
