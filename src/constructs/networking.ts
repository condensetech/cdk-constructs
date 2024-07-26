import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { INetworking } from '../interfaces';

/**
 * Properties for the Networking construct.
 */
export interface NetworkingProps {
  readonly ipAddresses: ec2.IIpAddresses;
  readonly vpcName?: string;
  readonly natGateways?: number;
  readonly bastionName?: string;
  readonly bastionHostEnabled?: boolean;
  readonly bastionHostAmi?: ec2.IMachineImage;
  readonly bastionHostInstanceType?: ec2.InstanceType;
  readonly maxAzs?: number;
}

/**
 * The Networking construct creates a VPC which can have public, private, and isolated subnets.
 * It enforces to define a CIDR block for the VPC, which is a best practice.
 *
 * If the `natGateways` property is set to a positive integer, the VPC will be created with private subnets that have access to the internet through NAT gateways.
 * If instead the `natGateways` property is set to 0, the VPC will have only public and isolated subnets. In this case, the subnets will anyway use a cidrMask of `24`, so that changing the number of NAT gateways will not require to re-provision the VPC.
 *
 * In addition, this construct can also take care of creating a bastion host in the VPC by using the latest Amazon Linux AMI with the smallest available instance (t4g.nano), if the `bastionHostEnabled` property is set to `true`.
 */
export class Networking extends Construct implements INetworking {
  readonly vpc: ec2.IVpc;
  readonly bastionHost?: ec2.BastionHostLinux;
  readonly hasPrivateSubnets: boolean;

  constructor(scope: Construct, id: string, props: NetworkingProps) {
    super(scope, id);

    this.hasPrivateSubnets = props.natGateways !== 0;
    this.vpc = this.buildVpc(props);
    if (props.bastionHostEnabled) {
      this.bastionHost = new ec2.BastionHostLinux(scope, 'Bastion', {
        vpc: this.vpc,
        instanceName: props.bastionName ?? (props.vpcName ? `${props.vpcName}-bastion` : undefined),
        machineImage:
          props.bastionHostAmi ??
          ec2.MachineImage.latestAmazonLinux2023({
            cpuType: ec2.AmazonLinuxCpuType.ARM_64,
          }),
        instanceType:
          props.bastionHostInstanceType ?? ec2.InstanceType.of(ec2.InstanceClass.T4G, ec2.InstanceSize.NANO),
        subnetSelection: this.privateSubnets ?? this.publicSubnets,
      });
      cdk.Tags.of(this.bastionHost.instance).add('Resource', 'Bastion');
    }
  }

  get publicSubnets(): ec2.SubnetSelection {
    return { subnetType: ec2.SubnetType.PUBLIC };
  }

  get privateSubnets(): ec2.SubnetSelection | undefined {
    if (!this.hasPrivateSubnets) {
      return undefined;
    }
    return { subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS };
  }

  get isolatedSubnets(): ec2.SubnetSelection {
    return { subnetType: ec2.SubnetType.PRIVATE_ISOLATED };
  }

  private buildVpc(props: NetworkingProps) {
    const subnetConfiguration: ec2.SubnetConfiguration[] = [
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
    if (this.hasPrivateSubnets) {
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
      maxAzs: props.maxAzs,
    });
  }
}
