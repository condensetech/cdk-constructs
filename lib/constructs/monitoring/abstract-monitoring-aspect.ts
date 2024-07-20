import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { aws_cloudwatch as cw } from 'aws-cdk-lib';
import { ICondenseMonitoringFacade } from './interfaces';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T extends Construct> = new (...args: any[]) => T;

export abstract class AbstractMonitoringAspect<T extends Construct, C, M> implements cdk.IAspect {
  protected abstract get instanceType(): Constructor<T>;
  protected abstract get defaultConfig(): C;

  private readonly overriddenConfig: Record<string, Partial<C>> = {};
  private readonly monitoringFacade: ICondenseMonitoringFacade;

  constructor(monitoringFacade: ICondenseMonitoringFacade) {
    this.monitoringFacade = monitoringFacade;
  }

  visit(node: Construct): void {
    if (!(node instanceof this.instanceType)) {
      return;
    }
    const config = this.readConfig(node);
    const metrics = this.metrics(node);
    this.monitoringFacade.dashboard.addWidgets(...this.widgets(node, config, metrics));
    this.alarms(node, config, metrics).forEach((a) => this.monitoringFacade.addAlarm(a));
  }

  overrideConfig(node: T, config: C) {
    this.overriddenConfig[node.node.path] = config;
  }

  private readConfig(node: T): C {
    return {
      ...this.defaultConfig,
      ...(this.overriddenConfig[node.node.path] || {}),
    };
  }

  protected abstract metrics(node: T): M;

  protected abstract widgets(node: T, config: C, metrics: M): cw.IWidget[];

  protected abstract alarms(node: T, config: C, metrics: M): cw.Alarm[];
}
