import * as cdk from 'aws-cdk-lib';
import { aws_cloudwatch as cw, aws_elasticloadbalancingv2 as elbv2 } from 'aws-cdk-lib';
import { AbstractMonitoringAspect } from '../abstract-monitoring-aspect';
import {
  alertAnnotation,
  dashboardGenericAxis,
  dashboardSecondsAxis,
  dashboardSectionTitle,
} from '../widgets';

export interface ApplicationLoadBalancerMonitoringMetrics {
  responseTime: cw.IMetric;
  redirectUrlLimitExceeded: cw.IMetric;
  rejectedConnections: cw.IMetric;
  activeConnections: cw.IMetric;
  targetConnectionErrors: cw.IMetric;
  target5xxErrors: cw.IMetric;
}

export interface ApplicationLoadBalancerMonitoringConfig {
  responseTimeThreshold?: cdk.Duration;
  redirectUrlLimitExceededThreshold: number;
  rejectedConnectionsThreshold: number;
  targetConnectionErrorsThreshold: number;
  target5xxErrorsThreshold?: number;
}

export class ApplicationLoadBalancerMonitoringAspect extends AbstractMonitoringAspect<
  elbv2.ApplicationLoadBalancer,
  ApplicationLoadBalancerMonitoringConfig,
  ApplicationLoadBalancerMonitoringMetrics
> {
  protected instanceType = elbv2.ApplicationLoadBalancer;
  protected defaultConfig = {
    redirectUrlLimitExceededThreshold: 0,
    rejectedConnectionsThreshold: 0,
    targetConnectionErrorsThreshold: 0,
  };

  protected widgets(
    node: elbv2.ApplicationLoadBalancer,
    config: ApplicationLoadBalancerMonitoringConfig,
    metrics: ApplicationLoadBalancerMonitoringMetrics
  ): cw.IWidget[] {
    return [
      dashboardSectionTitle(`Load Balancer ${node.loadBalancerName}`),
      new cw.GraphWidget({
        title: 'Response Time',
        left: [metrics.responseTime],
        leftYAxis: dashboardSecondsAxis,
        leftAnnotations: config.responseTimeThreshold
          ? [alertAnnotation(config.responseTimeThreshold.toSeconds({ integral: false }))]
          : [],
        width: 12,
      }),
      new cw.GraphWidget({
        title: 'Redirect URL Limit Exceeded',
        left: [metrics.redirectUrlLimitExceeded],
        leftYAxis: dashboardGenericAxis,
        leftAnnotations: [alertAnnotation(config.redirectUrlLimitExceededThreshold)],
        width: 12,
      }),
      new cw.GraphWidget({
        title: 'Connections',
        left: [metrics.activeConnections, metrics.rejectedConnections],
        stacked: true,
        leftYAxis: dashboardGenericAxis,
        width: 12,
      }),
      new cw.GraphWidget({
        title: 'Target Connection Errors',
        left: [metrics.targetConnectionErrors],
        leftYAxis: dashboardGenericAxis,
        leftAnnotations: [alertAnnotation(config.targetConnectionErrorsThreshold)],
        width: 12,
      }),
      new cw.GraphWidget({
        title: '5xx Errors',
        left: [metrics.target5xxErrors],
        leftYAxis: dashboardGenericAxis,
        leftAnnotations:
          config.target5xxErrorsThreshold !== undefined
            ? [alertAnnotation(config.target5xxErrorsThreshold)]
            : [],
        width: 12,
      }),
    ];
  }

  protected alarms(
    node: elbv2.ApplicationLoadBalancer,
    config: ApplicationLoadBalancerMonitoringConfig,
    metrics: ApplicationLoadBalancerMonitoringMetrics
  ): cw.Alarm[] {
    return [
      ...(config.responseTimeThreshold !== undefined
        ? [
            new cw.Alarm(node, 'LoadBalancerResponseTimeAlarm', {
              alarmName: `LoadBalancerResponseTimeAlarm-${node.loadBalancerName}`,
              metric: metrics.responseTime,
              evaluationPeriods: 5,
              threshold: config.responseTimeThreshold.toSeconds({ integral: false }),
              alarmDescription: `Response time is too high on ${node.loadBalancerName}`,
            }),
          ]
        : []),
      new cw.Alarm(node, 'LoadBalancerRedirectUrlLimitExceeded', {
        alarmName: `LoadBalancerRedirectUrlLimitExceeded-${node.loadBalancerName}`,
        metric: metrics.redirectUrlLimitExceeded,
        evaluationPeriods: 5,
        threshold: config.redirectUrlLimitExceededThreshold,
        alarmDescription: `Some redirect actions couldn't be completed on ${node.loadBalancerName}`,
        comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
      }),
      new cw.Alarm(node, 'LoadBalancerRejectedConnectionsAlarm', {
        alarmName: `LoadBalancerRejectedConnectionsAlarm-${node.loadBalancerName}`,
        metric: metrics.rejectedConnections,
        evaluationPeriods: 5,
        threshold: config.rejectedConnectionsThreshold,
        alarmDescription: `Rejected connections on ${node.loadBalancerName}`,
        comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
      }),
      new cw.Alarm(node, 'LoadBalancerTargetConnectionErrorsAlarm', {
        alarmName: `LoadBalancerTargetConnectionErrorsAlarm-${node.loadBalancerName}`,
        metric: metrics.targetConnectionErrors,
        evaluationPeriods: 5,
        threshold: config.targetConnectionErrorsThreshold,
        alarmDescription: `Target connection errors on ${node.loadBalancerName}`,
        comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
      }),
      ...(config.target5xxErrorsThreshold !== undefined
        ? [
            new cw.Alarm(node, 'LoadBalancerTarget5xxErrorsAlarm', {
              alarmName: `LoadBalancerTarget5xxErrorsAlarm-${node.loadBalancerName}`,
              metric: metrics.target5xxErrors,
              evaluationPeriods: 5,
              threshold: config.target5xxErrorsThreshold,
              alarmDescription: `5xx errors on ${node.loadBalancerName}`,
              comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
            }),
          ]
        : []),
    ];
  }

  protected metrics(node: elbv2.ApplicationLoadBalancer): ApplicationLoadBalancerMonitoringMetrics {
    return {
      responseTime: node.metrics.targetResponseTime({
        period: cdk.Duration.minutes(1),
      }),
      redirectUrlLimitExceeded: node.metrics.httpRedirectUrlLimitExceededCount({
        period: cdk.Duration.minutes(1),
      }),
      rejectedConnections: node.metrics.rejectedConnectionCount({
        period: cdk.Duration.minutes(1),
      }),
      activeConnections: node.metrics.activeConnectionCount({
        period: cdk.Duration.minutes(1),
      }),
      targetConnectionErrors: node.metrics.targetConnectionErrorCount({
        period: cdk.Duration.minutes(1),
      }),
      target5xxErrors: node.metrics.httpCodeTarget(elbv2.HttpCodeTarget.TARGET_5XX_COUNT, {
        period: cdk.Duration.minutes(1),
      }),
    };
  }
}
