import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { NetworkingStack } from '../../lib/stacks/networking-stack';

describe('Stacks/NetworkingStack', () => {
  test('Sets a default VPC name w/o ref the inner Networking construct', () => {
    const app = new cdk.App();
    const stack = new NetworkingStack(app, 'TestStack', {
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
    });
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::EC2::VPC', {
      Tags: [
        {
          Key: 'Name',
          Value: 'TestStack/VPC',
        },
      ],
    });
  });
});
