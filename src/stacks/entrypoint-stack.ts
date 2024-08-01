import { Stack, StackProps } from 'aws-cdk-lib';
import * as elb from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';
import { Entrypoint, EntrypointProps } from '../constructs/entrypoint';
import { MonitoringFacade, MonitoringFacadeProps } from '../constructs/monitoring/monitoring-facade';
import { AllocateApplicationListenerRuleProps, IEntrypoint } from '../interfaces';

/**
 * Properties for the EntrypointStack.
 */
export interface EntrypointStackProps extends EntrypointProps, StackProps {
  /**
   * The monitoring configuration to apply to this stack.
   * @default - No monitoring.
   */
  readonly monitoring?: MonitoringFacadeProps;
}

/**
 * The EntrypointStack creates an [Entrypoint](#@condensetech/cdk-constructs.Entrypoint) construct and optionally defines the monitoring configuration.
 * It implements the IEntrypoint interface so that it can be used in other constructs and stacks without requiring to access to the underlying construct.
 */
export class EntrypointStack extends Stack implements IEntrypoint {
  private readonly construct: IEntrypoint;

  constructor(scope: Construct, id: string, props: EntrypointStackProps) {
    super(scope, id, props);
    this.construct = new Entrypoint(this, 'Entrypoint', props);
    if (props.monitoring) {
      new MonitoringFacade(this, props.monitoring);
    }
  }

  allocateListenerRule(
    scope: Construct,
    id: string,
    props: AllocateApplicationListenerRuleProps,
  ): elb.ApplicationListenerRule {
    return this.construct.allocateListenerRule(scope, id, props);
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
