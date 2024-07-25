import * as cdk from 'aws-cdk-lib';
import { aws_cloudwatch as cw, aws_ecs as ecs } from 'aws-cdk-lib';
import { IConstruct } from 'constructs';
import { buildAlarms } from '../alarms';
import { ICondenseMonitoringFacade } from '../interfaces';
import { alertAnnotations, dashboardGenericAxis, dashboardSecondsAxis, dashboardSectionTitle } from '../widgets';

export interface FargateServiceMonitoringMetrics {
  readonly cpuUtilization: cw.IMetric;
  readonly memoryUtilization: cw.IMetric;
}

export interface FargateServiceMonitoringConfig {
  readonly cpuUtilizationThreshold?: number;
  readonly memoryUtilization?: number;
}

export class FargateServiceMonitoringAspect implements cdk.IAspect {
  private readonly overriddenConfig: Record<string, FargateServiceMonitoringConfig> = {};
  private readonly defaultConfig: FargateServiceMonitoringConfig = {
    cpuUtilizationThreshold: 90,
    memoryUtilization: 90,
  };

  constructor(private readonly monitoringFacade: ICondenseMonitoringFacade) {}

  visit(node: IConstruct): void {
    if (!(node instanceof ecs.FargateService)) {
      return;
    }
    const config = this.readConfig(node);
    const metrics = this.metrics(node);
    this.monitoringFacade.dashboard.addWidgets(...this.widgets(node, config, metrics));
    this.alarms(node, config, metrics).forEach((a) => this.monitoringFacade.addAlarm(a));
  }

  overrideConfig(node: ecs.FargateService, config: FargateServiceMonitoringConfig) {
    this.overriddenConfig[node.node.path] = config;
  }

  private readConfig(node: ecs.FargateService): FargateServiceMonitoringConfig {
    return {
      ...this.defaultConfig,
      ...(this.overriddenConfig[node.node.path] || {}),
    };
  }

  private widgets(
    node: ecs.FargateService,
    config: FargateServiceMonitoringConfig,
    metrics: FargateServiceMonitoringMetrics,
  ): cw.IWidget[] {
    return [
      dashboardSectionTitle(`ECS Fargate Service ${node.serviceName}`),
      new cw.GraphWidget({
        title: 'CPU Utilization',
        left: [metrics.cpuUtilization],
        leftYAxis: dashboardSecondsAxis,
        leftAnnotations: alertAnnotations([{ value: config.cpuUtilizationThreshold }]),
        width: 12,
      }),
      new cw.GraphWidget({
        title: 'Memory Utilization',
        left: [metrics.memoryUtilization],
        leftYAxis: dashboardGenericAxis,
        leftAnnotations: alertAnnotations([{ value: config.memoryUtilization }]),
        width: 12,
      }),
    ];
  }

  private alarms(
    node: ecs.FargateService,
    config: FargateServiceMonitoringConfig,
    metrics: FargateServiceMonitoringMetrics,
  ): cw.Alarm[] {
    return buildAlarms({
      node,
      nodeIdentifier: node.serviceName,
      alarms: [
        {
          alarmId: 'FargateService-CPUUtilizationAlarm',
          metric: metrics.cpuUtilization,
          evaluationPeriods: 5,
          threshold: config.cpuUtilizationThreshold,
          alarmDescription: `CPU Utilization high on ${node.serviceName}`,
        },
        {
          alarmId: 'FargateService-MemoryUtilizationAlarm',
          metric: metrics.memoryUtilization,
          evaluationPeriods: 5,
          threshold: config.memoryUtilization,
          alarmDescription: `Memory Utilization high on ${node.serviceName}`,
        },
      ],
    });
  }

  private metrics(node: ecs.FargateService): FargateServiceMonitoringMetrics {
    return {
      cpuUtilization: node.metricCpuUtilization({
        period: cdk.Duration.minutes(1),
      }),
      memoryUtilization: node.metricMemoryUtilization({
        period: cdk.Duration.minutes(1),
      }),
    };
  }
}
