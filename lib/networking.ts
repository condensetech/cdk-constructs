import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { INetworking } from './interfaces';

export interface CondenseVpcProps {
  readonly ipAddresses: ec2.IIpAddresses;
  readonly vpcName?: string;
  readonly natGateways?: number;
}

export interface NetworkingProps extends CondenseVpcProps {
  readonly bastionHost?: boolean;
}

export type NetworkingStackProps = cdk.StackProps & NetworkingProps;

function buildVpc(scope: Construct, { ipAddresses, vpcName, natGateways }: CondenseVpcProps) {
  return new ec2.Vpc(scope, 'VPC', {
    ipAddresses,
    vpcName,
    subnetConfiguration: [
      {
        cidrMask: 24,
        name: 'public',
        subnetType: ec2.SubnetType.PUBLIC,
      },
      {
        cidrMask: 24,
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
      },
      {
        cidrMask: 24,
        name: 'isolated',
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      },
    ],
    natGateways,
  });
}

function buildBastionHost(scope: Construct, vpc: ec2.Vpc) {
  return new ec2.BastionHostLinux(scope, 'BastionHost', {
    vpc,
    machineImage: ec2.MachineImage.latestAmazonLinux2(),
    instanceType: ec2.InstanceType.of(ec2.InstanceClass.T4G, ec2.InstanceSize.NANO),
    subnetSelection: {
      subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
    },
  });
}

export class Networking extends Construct implements INetworking {
  readonly vpc: ec2.Vpc;
  readonly bastionHost?: ec2.BastionHostLinux;

  constructor(scope: Construct, id: string, props: NetworkingStackProps) {
    super(scope, id);

    this.vpc = buildVpc(this, props);
    if (props.bastionHost) {
      this.bastionHost = buildBastionHost(this, this.vpc);
    }
  }
}

export class NetworkingStack extends cdk.Stack implements Networking {
  readonly vpc: ec2.Vpc;
  readonly bastionHost?: ec2.BastionHostLinux;

  constructor(scope: Construct, id: string, props: NetworkingStackProps) {
    super(scope, id, props);

    this.vpc = buildVpc(this, props);
    if (props.bastionHost) {
      this.bastionHost = buildBastionHost(this, this.vpc);
    }
  }
}
