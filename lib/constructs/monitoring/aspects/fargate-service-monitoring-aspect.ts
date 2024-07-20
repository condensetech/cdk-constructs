import * as cdk from 'aws-cdk-lib';
import { aws_cloudwatch as cw, aws_ecs as ecs } from 'aws-cdk-lib';
import { AbstractMonitoringAspect } from '../abstract-monitoring-aspect';
import {
  alertAnnotations,
  dashboardGenericAxis,
  dashboardSecondsAxis,
  dashboardSectionTitle,
} from '../widgets';
import { buildAlarms } from '../alarms';

export interface FargateServiceMonitoringMetrics {
  readonly cpuUtilization: cw.IMetric;
  readonly memoryUtilization: cw.IMetric;
}

export interface FargateServiceMonitoringConfig {
  readonly cpuUtilizationThreshold?: number;
  readonly memoryUtilization?: number;
}

export class FargateServiceMonitoringAspect extends AbstractMonitoringAspect<
  ecs.FargateService,
  FargateServiceMonitoringConfig,
  FargateServiceMonitoringMetrics
> {
  protected instanceType = ecs.FargateService;
  protected defaultConfig: FargateServiceMonitoringConfig = {
    cpuUtilizationThreshold: 90,
    memoryUtilization: 90,
  };

  protected widgets(
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

  protected alarms(
    node: ecs.FargateService,
    config: FargateServiceMonitoringConfig,
    metrics: FargateServiceMonitoringMetrics,
  ): cw.Alarm[] {
    return buildAlarms({
      node,
      nodeIdentifier: node.serviceName,
      alarms: [
        {
          alarmId: `FargateService-CPUUtilizationAlarm`,
          metric: metrics.cpuUtilization,
          evaluationPeriods: 5,
          threshold: config.cpuUtilizationThreshold,
          alarmDescription: `CPU Utilization high on ${node.serviceName}`,
        },
        {
          alarmId: `FargateService-MemoryUtilizationAlarm`,
          metric: metrics.memoryUtilization,
          evaluationPeriods: 5,
          threshold: config.memoryUtilization,
          alarmDescription: `Memory Utilization high on ${node.serviceName}`,
        },
      ],
    });
  }

  protected metrics(node: ecs.FargateService): FargateServiceMonitoringMetrics {
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
