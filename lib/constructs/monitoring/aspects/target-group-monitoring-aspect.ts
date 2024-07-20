import * as cdk from 'aws-cdk-lib';
import { aws_cloudwatch as cw, aws_elasticloadbalancingv2 as elbv2 } from 'aws-cdk-lib';
import { AbstractMonitoringAspect } from '../abstract-monitoring-aspect';
import {
  alertAnnotations,
  dashboardGenericAxis,
  dashboardSecondsAxis,
  dashboardSectionTitle,
} from '../widgets';
import { buildAlarms } from '../alarms';

export interface TargetGroupMonitoringMetrics {
  readonly responseTime: cw.IMetric;
  readonly minHealthyHosts: cw.IMetric;
}

export interface TargetGroupMonitoringConfig {
  readonly responseTimeThreshold?: cdk.Duration;
  readonly minHealthyHostsThreshold?: number;
}

export class TargetGroupMonitoringAspect extends AbstractMonitoringAspect<
  elbv2.ApplicationTargetGroup,
  TargetGroupMonitoringConfig,
  TargetGroupMonitoringMetrics
> {
  protected instanceType = elbv2.ApplicationTargetGroup;
  protected defaultConfig: TargetGroupMonitoringConfig = {
    minHealthyHostsThreshold: 1,
  };

  protected widgets(
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
        leftAnnotations: alertAnnotations([
          { value: config.responseTimeThreshold?.toSeconds({ integral: false }) },
        ]),
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

  protected alarms(
    node: elbv2.ApplicationTargetGroup,
    config: TargetGroupMonitoringConfig,
    metrics: TargetGroupMonitoringMetrics,
  ): cw.Alarm[] {
    return buildAlarms({
      node,
      nodeIdentifier: node.targetGroupName,
      alarms: [
        {
          alarmId: `TargetGroup-ResponseTimeAlarm`,
          metric: metrics.responseTime,
          evaluationPeriods: 5,
          threshold: config.responseTimeThreshold?.toSeconds({ integral: false }),
          alarmDescription: `Response time is too high on ${node.targetGroupName}`,
        },
        {
          alarmId: `TargetGroup-MinHealthyHostsAlarm`,
          metric: metrics.minHealthyHosts,
          evaluationPeriods: 5,
          threshold: config.minHealthyHostsThreshold,
          comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
          alarmDescription: `Not enough healthy hosts on ${node.targetGroupName}`,
        },
      ],
    });
  }

  protected metrics(node: elbv2.ApplicationTargetGroup): TargetGroupMonitoringMetrics {
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
