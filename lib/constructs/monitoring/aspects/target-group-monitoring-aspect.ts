import * as cdk from 'aws-cdk-lib';
import { aws_cloudwatch as cw, aws_elasticloadbalancingv2 as elbv2 } from 'aws-cdk-lib';
import { AbstractMonitoringAspect } from '../abstract-monitoring-aspect';
import {
  alertAnnotation,
  dashboardGenericAxis,
  dashboardSecondsAxis,
  dashboardSectionTitle,
} from '../widgets';

export interface TargetGroupMonitoringMetrics {
  responseTime: cw.IMetric;
  minHealthyHosts: cw.IMetric;
}

export interface TargetGroupMonitoringConfig {
  responseTimeThreshold?: cdk.Duration;
  minHealthyHostsThreshold: number;
}

export class TargetGroupMonitoringAspect extends AbstractMonitoringAspect<
  elbv2.ApplicationTargetGroup,
  TargetGroupMonitoringConfig,
  TargetGroupMonitoringMetrics
> {
  protected instanceType = elbv2.ApplicationTargetGroup;
  protected defaultConfig = {
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
        leftAnnotations:
          config.responseTimeThreshold !== undefined
            ? [alertAnnotation(config.responseTimeThreshold.toSeconds({ integral: false }))]
            : [],
        width: 12,
      }),
      new cw.GraphWidget({
        title: 'Healthy Hosts',
        left: [metrics.minHealthyHosts],
        leftYAxis: dashboardGenericAxis,
        leftAnnotations: [alertAnnotation(config.minHealthyHostsThreshold)],
        width: 12,
      }),
    ];
  }

  protected alarms(
    node: elbv2.ApplicationTargetGroup,
    config: TargetGroupMonitoringConfig,
    metrics: TargetGroupMonitoringMetrics,
  ): cw.Alarm[] {
    return [
      ...(config.responseTimeThreshold
        ? [
            new cw.Alarm(node, 'TargetGroupResponseTimeAlarm', {
              alarmName: `TargetGroupResponseTimeAlarm-${node.targetGroupName}`,
              metric: metrics.responseTime,
              evaluationPeriods: 5,
              threshold: config.responseTimeThreshold.toSeconds({ integral: false }),
              alarmDescription: `Response time is too high on ${node.targetGroupName}`,
            }),
          ]
        : []),
      new cw.Alarm(node, 'TargetGroupMinHealthyHostsAlarm', {
        alarmName: `TargetGroupMinHealthyHostsAlarm-${node.targetGroupName}`,
        metric: metrics.minHealthyHosts,
        evaluationPeriods: 5,
        threshold: config.minHealthyHostsThreshold,
        comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
        alarmDescription: `Not enough healthy hosts on ${node.targetGroupName}`,
      }),
    ];
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
