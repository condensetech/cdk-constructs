import * as cdk from 'aws-cdk-lib';
import { aws_cloudwatch as cw, aws_elasticloadbalancingv2 as elbv2 } from 'aws-cdk-lib';
import {
  alertAnnotations,
  dashboardGenericAxis,
  dashboardSecondsAxis,
  dashboardSectionTitle,
} from '../widgets';
import { buildAlarms } from '../alarms';
import { IConstruct } from 'constructs';
import { ICondenseMonitoringFacade } from '../interfaces';

export interface ApplicationLoadBalancerMonitoringMetrics {
  readonly responseTime: cw.IMetric;
  readonly redirectUrlLimitExceeded: cw.IMetric;
  readonly rejectedConnections: cw.IMetric;
  readonly activeConnections: cw.IMetric;
  readonly targetConnectionErrors: cw.IMetric;
  readonly target5xxErrors: cw.IMetric;
}

export interface ApplicationLoadBalancerMonitoringConfig {
  readonly responseTimeThreshold?: cdk.Duration;
  readonly redirectUrlLimitExceededThreshold?: number;
  readonly rejectedConnectionsThreshold?: number;
  readonly targetConnectionErrorsThreshold?: number;
  readonly target5xxErrorsThreshold?: number;
}

export class ApplicationLoadBalancerMonitoringAspect implements cdk.IAspect {
  private readonly overriddenConfig: Record<string, ApplicationLoadBalancerMonitoringConfig> = {};
  private readonly defaultConfig: ApplicationLoadBalancerMonitoringConfig = {
    redirectUrlLimitExceededThreshold: 0,
    rejectedConnectionsThreshold: 0,
    targetConnectionErrorsThreshold: 0,
  };

  constructor(private readonly monitoringFacade: ICondenseMonitoringFacade) {}

  visit(node: IConstruct): void {
    if (!(node instanceof elbv2.ApplicationLoadBalancer)) {
      return;
    }
    const config = this.readConfig(node);
    const metrics = this.metrics(node);
    this.monitoringFacade.dashboard.addWidgets(...this.widgets(node, config, metrics));
    this.alarms(node, config, metrics).forEach((a) => this.monitoringFacade.addAlarm(a));
  }

  overrideConfig(
    node: elbv2.ApplicationLoadBalancer,
    config: ApplicationLoadBalancerMonitoringConfig,
  ) {
    this.overriddenConfig[node.node.path] = config;
  }

  private readConfig(node: elbv2.ApplicationLoadBalancer): ApplicationLoadBalancerMonitoringConfig {
    return {
      ...this.defaultConfig,
      ...(this.overriddenConfig[node.node.path] || {}),
    };
  }

  private widgets(
    node: elbv2.ApplicationLoadBalancer,
    config: ApplicationLoadBalancerMonitoringConfig,
    metrics: ApplicationLoadBalancerMonitoringMetrics,
  ): cw.IWidget[] {
    return [
      dashboardSectionTitle(`Load Balancer ${node.loadBalancerName}`),
      new cw.GraphWidget({
        title: 'Response Time',
        left: [metrics.responseTime],
        leftYAxis: dashboardSecondsAxis,
        leftAnnotations: alertAnnotations([
          {
            value: config.responseTimeThreshold?.toSeconds({ integral: false }),
          },
        ]),
        width: 12,
      }),
      new cw.GraphWidget({
        title: 'Redirect URL Limit Exceeded',
        left: [metrics.redirectUrlLimitExceeded],
        leftYAxis: dashboardGenericAxis,
        leftAnnotations: alertAnnotations([{ value: config.redirectUrlLimitExceededThreshold }]),
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
        leftAnnotations: alertAnnotations([{ value: config.targetConnectionErrorsThreshold }]),
        width: 12,
      }),
      new cw.GraphWidget({
        title: '5xx Errors',
        left: [metrics.target5xxErrors],
        leftYAxis: dashboardGenericAxis,
        leftAnnotations: alertAnnotations([{ value: config.target5xxErrorsThreshold }]),
        width: 12,
      }),
    ];
  }

  private alarms(
    node: elbv2.ApplicationLoadBalancer,
    config: ApplicationLoadBalancerMonitoringConfig,
    metrics: ApplicationLoadBalancerMonitoringMetrics,
  ): cw.Alarm[] {
    return buildAlarms({
      node,
      nodeIdentifier: node.loadBalancerName,
      alarms: [
        {
          alarmId: `LoadBalancer-ResponseTimeAlarm`,
          metric: metrics.responseTime,
          evaluationPeriods: 5,
          threshold: config.responseTimeThreshold?.toSeconds({ integral: false }),
          alarmDescription: `Response time is too high on ${node.loadBalancerName}`,
        },
        {
          alarmId: `LoadBalancer-RedirectUrlLimitExceeded`,
          metric: metrics.redirectUrlLimitExceeded,
          evaluationPeriods: 5,
          threshold: config.redirectUrlLimitExceededThreshold,
          alarmDescription: `Some redirect actions couldn't be completed on ${node.loadBalancerName}`,
          comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
        },
        {
          alarmId: `LoadBalancer-RejectedConnectionsAlarm`,
          metric: metrics.rejectedConnections,
          evaluationPeriods: 5,
          threshold: config.rejectedConnectionsThreshold,
          alarmDescription: `Rejected connections on ${node.loadBalancerName}`,
          comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
        },
        {
          alarmId: `LoadBalancer-TargetConnectionErrorsAlarm`,
          metric: metrics.targetConnectionErrors,
          evaluationPeriods: 5,
          threshold: config.targetConnectionErrorsThreshold,
          alarmDescription: `Target connection errors on ${node.loadBalancerName}`,
          comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
        },
        {
          alarmId: `LoadBalancer-Target5xxErrorsAlarm`,
          metric: metrics.target5xxErrors,
          evaluationPeriods: 5,
          threshold: config.target5xxErrorsThreshold,
          alarmDescription: `5xx errors on ${node.loadBalancerName}`,
          comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
        },
      ],
    });
  }

  private metrics(node: elbv2.ApplicationLoadBalancer): ApplicationLoadBalancerMonitoringMetrics {
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
