import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { INetworking } from '../interfaces';

export interface NetworkingProps {
  readonly ipAddresses: ec2.IIpAddresses;
  readonly vpcName?: string;
  readonly natGateways?: number;
  readonly bastionHost?: boolean;
}

export class Networking extends Construct implements INetworking {
  readonly vpc: ec2.Vpc;
  readonly bastionHost?: ec2.BastionHostLinux;

  constructor(scope: Construct, id: string, props: NetworkingProps) {
    super(scope, id);

    this.vpc = this.buildVpc(props);
    if (props.bastionHost) {
      this.bastionHost = new ec2.BastionHostLinux(scope, 'Bastion', {
        vpc: this.vpc,
        machineImage: ec2.MachineImage.latestAmazonLinux2(),
        instanceType: ec2.InstanceType.of(ec2.InstanceClass.T4G, ec2.InstanceSize.NANO),
        subnetSelection: {
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
      });
      cdk.Tags.of(this.bastionHost.instance).add('Resource', 'Bastion');
    }
  }

  private buildVpc(props: NetworkingProps) {
    const subnetConfiguration = [
      {
        cidrMask: 24,
        name: 'public',
        subnetType: ec2.SubnetType.PUBLIC,
      },
      {
        cidrMask: 24,
        name: 'isolated',
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      },
    ];
    if (!props.natGateways || props.natGateways > 0) {
      subnetConfiguration.push({
        cidrMask: 24,
        name: 'private',
        subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
      });
    }
    return new ec2.Vpc(this, 'VPC', {
      ipAddresses: props.ipAddresses,
      vpcName: props.vpcName,
      subnetConfiguration,
      natGateways: props.natGateways,
    });
  }
}
