import { Stack, StackProps } from 'aws-cdk-lib';
import * as elb from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';
import { Entrypoint, EntrypointProps } from '../constructs/entrypoint';
import { IEntrypoint } from '../interfaces';

export type EntrypointStackProps = EntrypointProps & StackProps;

export class EntrypointStack extends Stack implements IEntrypoint {
  private readonly construct: IEntrypoint;

  constructor(scope: Construct, id: string, props: EntrypointStackProps) {
    super(scope, id, props);
    this.construct = new Entrypoint(this, 'Entrypoint', props);
  }

  get alb(): elb.IApplicationLoadBalancer {
    return this.construct.alb;
  }

  get domainName(): string {
    return this.construct.domainName;
  }

  referenceListener(scope: Construct, id: string): elb.IApplicationListener {
    return this.construct.referenceListener(scope, id);
  }
}
