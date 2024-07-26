import * as cdk from 'aws-cdk-lib';
import { aws_cloudwatch as cw, aws_elasticloadbalancingv2 as elbv2 } from 'aws-cdk-lib';
import { IConstruct } from 'constructs';
import { buildAlarms } from '../alarms';
import { ICondenseMonitoringFacade } from '../interfaces';
import { alertAnnotations, dashboardGenericAxis, dashboardSecondsAxis, dashboardSectionTitle } from '../widgets';

interface TargetGroupMonitoringMetrics {
  readonly responseTime: cw.IMetric;
  readonly minHealthyHosts: cw.IMetric;
}

/**
 * The TargetGroupMonitoringConfig defines the thresholds for the target group monitoring.
 */
export interface TargetGroupMonitoringConfig {
  /**
   * The Response Time threshold.
   * @default - No threshold.
   */
  readonly responseTimeThreshold?: cdk.Duration;

  /**
   * The Min Healthy Hosts threshold.
   * @default 1
   */
  readonly minHealthyHostsThreshold?: number;
}

/**
 * The TargetGroupMonitoringAspect iterates over the target groups and adds monitoring widgets and alarms.
 */
export class TargetGroupMonitoringAspect implements cdk.IAspect {
  private readonly overriddenConfig: Record<string, TargetGroupMonitoringConfig> = {};
  private readonly defaultConfig: TargetGroupMonitoringConfig = {
    minHealthyHostsThreshold: 1,
  };

  constructor(readonly monitoringFacade: ICondenseMonitoringFacade) {}

  visit(node: IConstruct): void {
    if (!(node instanceof elbv2.ApplicationTargetGroup)) {
      return;
    }
    const config = this.readConfig(node);
    const metrics = this.metrics(node);
    this.monitoringFacade.dashboard.addWidgets(...this.widgets(node, config, metrics));
    this.alarms(node, config, metrics).forEach((a) => this.monitoringFacade.addAlarm(a));
  }

  /**
   * Overrides the default configuration for a specific target group.
   * @param node The target group to monitor.
   * @param config The configuration to apply.
   */
  overrideConfig(node: elbv2.ApplicationTargetGroup, config: TargetGroupMonitoringConfig) {
    this.overriddenConfig[node.node.path] = config;
  }

  private readConfig(node: elbv2.ApplicationTargetGroup): TargetGroupMonitoringConfig {
    return {
      ...this.defaultConfig,
      ...(this.overriddenConfig[node.node.path] || {}),
    };
  }

  private widgets(
    node: elbv2.ApplicationTargetGroup,
    config: TargetGroupMonitoringConfig,
    metrics: TargetGroupMonitoringMetrics,
  ): cw.IWidget[] {
    return [
      dashboardSectionTitle(`TargetGroup ${node.targetGroupName}`),
      new cw.GraphWidget({
        title: 'Response Time',
        left: [metrics.responseTime],
        leftYAxis: dashboardSecondsAxis,
        leftAnnotations: alertAnnotations([{ value: config.responseTimeThreshold?.toSeconds({ integral: false }) }]),
        width: 12,
      }),
      new cw.GraphWidget({
        title: 'Healthy Hosts',
        left: [metrics.minHealthyHosts],
        leftYAxis: dashboardGenericAxis,
        leftAnnotations: alertAnnotations([{ value: config.minHealthyHostsThreshold }]),
        width: 12,
      }),
    ];
  }

  private alarms(
    node: elbv2.ApplicationTargetGroup,
    config: TargetGroupMonitoringConfig,
    metrics: TargetGroupMonitoringMetrics,
  ): cw.Alarm[] {
    return buildAlarms({
      node,
      nodeIdentifier: node.targetGroupName,
      alarms: [
        {
          alarmId: 'TargetGroup-ResponseTimeAlarm',
          metric: metrics.responseTime,
          evaluationPeriods: 5,
          threshold: config.responseTimeThreshold?.toSeconds({ integral: false }),
          alarmDescription: `Response time is too high on ${node.targetGroupName}`,
        },
        {
          alarmId: 'TargetGroup-MinHealthyHostsAlarm',
          metric: metrics.minHealthyHosts,
          evaluationPeriods: 5,
          threshold: config.minHealthyHostsThreshold,
          comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
          alarmDescription: `Not enough healthy hosts on ${node.targetGroupName}`,
        },
      ],
    });
  }

  private metrics(node: elbv2.ApplicationTargetGroup): TargetGroupMonitoringMetrics {
    return {
      responseTime: node.metrics.targetResponseTime({
        period: cdk.Duration.minutes(1),
        statistic: 'tm99',
      }),
      minHealthyHosts: node.metrics.healthyHostCount({
        period: cdk.Duration.minutes(1),
      }),
    };
  }
}
