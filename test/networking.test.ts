import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Template } from 'aws-cdk-lib/assertions';
import * as CdkLib from '../lib/index';

function testCreateVpc(stack: cdk.Stack) {
  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::EC2::VPC', 1);
  template.hasResourceProperties('AWS::EC2::VPC', {
    CidrBlock: "10.0.0.0/16",
  });
}

function testCreateVpcWithName(stack: cdk.Stack) {
  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::EC2::VPC', {
    Tags: [{
      Key: 'Name',
      Value: 'TestVpc',
    }],
  });
}

function testCreateBastion(stack: cdk.Stack) {
  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::EC2::Instance', 1);
  template.hasResourceProperties('AWS::EC2::Instance', {
    InstanceType: 't4g.nano',
    Tags: [{
      Key: 'Name',
      Value: 'BastionHost',
    }],
  });
}

describe('Constructs/Networking', () => {
  test('Creates a VPC', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "TestStack");
    new CdkLib.Networking(stack, "Networking", {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
    });
    testCreateVpc(stack);
  });

  test('Creates a VPC with a name', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "TestStack");
    new CdkLib.Networking(stack, "Networking", {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      vpcName: 'TestVpc',
    });
    testCreateVpcWithName(stack);
  });

  test('Creates a Bastion Host', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, "TestStack");
    new CdkLib.Networking(stack, "Networking", {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      bastionHost: true,
    });
    testCreateBastion(stack);
  });
});

describe('Stacks/Networking', () => {
  test('Creates a VPC', () => {
    const app = new cdk.App();
    const stack = new CdkLib.NetworkingStack(app, "TestStack", {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
    });
    testCreateVpc(stack);
  });

  test('Creates a VPC with a name', () => {
    const app = new cdk.App();
    const stack = new CdkLib.NetworkingStack(app, "TestStack", {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      vpcName: 'TestVpc',
    });
    testCreateVpcWithName(stack);
  });

  test('Creates a Bastion Host', () => {
    const app = new cdk.App();
    const stack = new CdkLib.NetworkingStack(app, "TestStack", {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      bastionHost: true,
    });
    testCreateBastion(stack);
  });
});