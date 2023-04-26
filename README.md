# Condense Opinionated CDK Library

This library contains constructs and stacks we use across our projects.

## Networking

[Networking](lib/networking.ts) provides a VPC already configured with public, private and isolated subnets.

It requires setting a cidr or IPAM allocation, to avoid accidental usage of default CIDR.

Optionally, it also creates a bastion host.

It is available as a construct:

```ts
class MyStack extends cdk.Stack {
  constructor(scope: Construct, id :string, props?: cdk.StackProps) {
    super(scope, id, props);
    const networking = new Networking(this, 'Networking', {
      cidr: ec2.IpAddresses.cidr('10.0.0.0/16'),
    });
  }
}
```

or as a stack:

```ts
const app = new cdk.App();

const networking = new NetworkingStack(app, 'networking', {
  cidr: ec2.IpAddresses.cidr('10.0.0.0/16'),
})
```

Both of them implements the [INetworking](lib/interfaces.ts) interface, allowing to easily compose your infrastructure.
