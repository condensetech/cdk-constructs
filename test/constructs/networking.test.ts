import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { Networking } from '../../lib/constructs/networking';

describe('Constructs/Networking', () => {
  test('Creates a VPC', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Networking(stack, 'Networking', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
    });
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::EC2::VPC', 1);
    template.hasResourceProperties('AWS::EC2::VPC', {
      CidrBlock: '10.0.0.0/16',
    });
  });

  test('Creates a VPC with a name', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Networking(stack, 'Networking', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      vpcName: 'TestVpc',
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::VPC', {
      Tags: [
        {
          Key: 'Name',
          Value: 'TestVpc',
        },
      ],
    });
  });

  test('Creates a Bastion Host', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Networking(stack, 'Networking', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      bastionHostEnabled: true,
    });
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::EC2::Instance', 1);
    template.hasResourceProperties('AWS::EC2::Instance', {
      InstanceType: 't4g.nano',
      Tags: [
        {
          Key: 'Name',
          Value: 'BastionHost',
        },
        {
          Key: 'Resource',
          Value: 'Bastion',
        },
      ],
    });
  });

  test('Creates a Bastion Host in private subnets when nat gateways are defined', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Networking(stack, 'Networking', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      bastionHostEnabled: true,
    });
    const template = Template.fromStack(stack);
    const subnetIds = Object.keys(
      template.findResources('AWS::EC2::Subnet', {
        Properties: {
          Tags: Match.arrayWith([
            {
              Key: 'aws-cdk:subnet-type',
              Value: 'Private',
            },
          ]),
        },
      }),
    );
    const bastionProps = Object.values(template.findResources('AWS::EC2::Instance'))[0].Properties;
    expect(subnetIds.includes(bastionProps.SubnetId.Ref)).toBe(true);
  });

  test('Creates a Bastion Host in public subnets when nat gateway is not present', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new Networking(stack, 'Networking', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      bastionHostEnabled: true,
      natGateways: 0,
    });
    const template = Template.fromStack(stack);
    const subnetIds = Object.keys(
      template.findResources('AWS::EC2::Subnet', {
        Properties: {
          Tags: Match.arrayWith([
            {
              Key: 'aws-cdk:subnet-type',
              Value: 'Public',
            },
          ]),
        },
      }),
    );
    const bastionProps = Object.values(template.findResources('AWS::EC2::Instance'))[0].Properties;
    expect(subnetIds.includes(bastionProps.SubnetId.Ref)).toBe(true);
  });
});
