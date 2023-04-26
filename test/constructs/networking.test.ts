import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Template } from 'aws-cdk-lib/assertions';
import * as CdkLib from '../../lib/index';

describe('Constructs/Networking', () => {
  test('Creates a VPC', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new CdkLib.Networking(stack, 'Networking', {
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
    new CdkLib.Networking(stack, 'Networking', {
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
    new CdkLib.Networking(stack, 'Networking', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      bastionHost: true,
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
});
