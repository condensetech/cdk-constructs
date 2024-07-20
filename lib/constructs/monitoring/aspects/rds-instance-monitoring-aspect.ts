import * as cdk from 'aws-cdk-lib';
import { aws_cloudwatch as cw, aws_rds as rds } from 'aws-cdk-lib';
import {
  alertAnnotations,
  dashboardGenericAxis,
  dashboardPercentAxis,
  dashboardSectionTitle,
} from '../widgets';
import { buildAlarms } from '../alarms';
import { ICondenseMonitoringFacade } from '../interfaces';
import { IConstruct } from 'constructs';

export interface RdsInstanceMonitoringConfig {
  readonly cpuUtilizationThreshold?: number;
  readonly maxConnectionsThreshold?: number;
  readonly ebsByteBalanceThreshold?: number;
  readonly ebsIoBalanceThreshold?: number;
  readonly freeableMemoryThreshold?: cdk.Size;
  readonly freeStorageSpaceThreshold?: cdk.Size;
  readonly readLatencyThreshold?: number;
}

export interface RdsInstanceMonitoringMetrics {
  readonly cpuUtilization: cw.IMetric;
  readonly maxConnections: cw.IMetric;
  readonly freeableMemory: cw.IMetric;
  readonly freeStorageSpace: cw.IMetric;
  readonly readLatency: cw.IMetric;
  readonly ebsIOBalance: cw.IMetric;
  readonly ebsByteBalance: cw.IMetric;
}

export class RdsInstanceMonitoringAspect implements cdk.IAspect {
  private readonly overriddenConfig: Record<string, RdsInstanceMonitoringConfig> = {};
  private readonly defaultConfig: RdsInstanceMonitoringConfig = {
    cpuUtilizationThreshold: 90,
    maxConnectionsThreshold: 50,
    ebsByteBalanceThreshold: 10,
    ebsIoBalanceThreshold: 10,
    freeableMemoryThreshold: cdk.Size.mebibytes(100),
    freeStorageSpaceThreshold: cdk.Size.mebibytes(100),
    readLatencyThreshold: 20,
  };

  constructor(private readonly monitoringFacade: ICondenseMonitoringFacade) {}

  visit(node: IConstruct): void {
    if (!(node instanceof rds.DatabaseInstance)) {
      return;
    }
    const config = this.readConfig(node);
    const metrics = this.metrics(node);
    this.monitoringFacade.dashboard.addWidgets(...this.widgets(node, config, metrics));
    this.alarms(node, config, metrics).forEach((a) => this.monitoringFacade.addAlarm(a));
  }

  overrideConfig(node: rds.DatabaseInstance, config: RdsInstanceMonitoringConfig) {
    this.overriddenConfig[node.node.path] = config;
  }

  private readConfig(node: rds.DatabaseInstance): RdsInstanceMonitoringConfig {
    return {
      ...this.defaultConfig,
      ...(this.overriddenConfig[node.node.path] || {}),
    };
  }

  private widgets(
    node: rds.DatabaseInstance,
    config: RdsInstanceMonitoringConfig,
    metrics: RdsInstanceMonitoringMetrics,
  ): cw.IWidget[] {
    return [
      dashboardSectionTitle(`RDS ${node.node.path}`),
      new cw.GraphWidget({
        title: 'CPU Utilization',
        left: [metrics.cpuUtilization],
        leftYAxis: dashboardPercentAxis,
        leftAnnotations: alertAnnotations([{ value: config.cpuUtilizationThreshold }]),
      }),
      new cw.GraphWidget({
        title: 'Connections',
        left: [metrics.maxConnections],
        leftYAxis: dashboardGenericAxis,
        leftAnnotations: alertAnnotations([{ value: config.maxConnectionsThreshold }]),
      }),
      new cw.GraphWidget({
        title: 'Storage and Memory',
        left: [metrics.freeStorageSpace, metrics.freeableMemory],
        leftYAxis: dashboardGenericAxis,
        leftAnnotations: alertAnnotations([
          { value: config.freeStorageSpaceThreshold?.toBytes(), label: 'Free Storage Space' },
          { value: config.freeableMemoryThreshold?.toBytes(), label: 'Freeable Memory' },
        ]),
      }),
      new cw.GraphWidget({
        title: 'EBS Byte & IO Balance',
        left: [metrics.ebsByteBalance, metrics.ebsIOBalance],
        leftYAxis: dashboardPercentAxis,
        leftAnnotations: alertAnnotations([
          { value: config.ebsByteBalanceThreshold, label: 'EBS Byte Balance' },
          { value: config.ebsIoBalanceThreshold, label: 'EBS IO Balance' },
        ]),
      }),
      new cw.GraphWidget({
        title: 'Read Latency',
        left: [metrics.readLatency],
        leftYAxis: dashboardGenericAxis,
        leftAnnotations: alertAnnotations([{ value: config.readLatencyThreshold }]),
      }),
    ];
  }

  private alarms(
    node: rds.DatabaseInstance,
    config: RdsInstanceMonitoringConfig,
    metrics: RdsInstanceMonitoringMetrics,
  ): cw.Alarm[] {
    return buildAlarms({
      node,
      nodeIdentifier: node.instanceIdentifier,
      alarms: [
        {
          alarmId: 'RdsInstance-CpuUsageAlarm',
          metric: metrics.cpuUtilization,
          evaluationPeriods: 5,
          threshold: config.cpuUtilizationThreshold,
          alarmDescription: `CPU Utilization high on ${node.instanceIdentifier}`,
        },
        {
          alarmId: 'RdsInstance-MaxConnectionsAlarm',
          metric: metrics.maxConnections,
          evaluationPeriods: 5,
          threshold: config.maxConnectionsThreshold,
          alarmDescription: `Max Connections high on ${node.instanceIdentifier}`, // FIXME: This depends on the database
        },
        {
          alarmId: 'RdsInstance-EBSByteBalanceAlarm',
          metric: metrics.ebsByteBalance,
          evaluationPeriods: 3,
          threshold: config.ebsByteBalanceThreshold,
          comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
          alarmDescription: `EBS Byte Balance too low on ${node.instanceIdentifier}`,
        },
        {
          alarmId: 'RdsInstance-EBSIOBalanceAlarm',
          metric: metrics.ebsIOBalance,
          evaluationPeriods: 3,
          threshold: config.ebsIoBalanceThreshold,
          comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
          alarmDescription: `EBS IO Balance too low on ${node.instanceIdentifier}`,
        },
        {
          alarmId: 'RdsInstance-FreeableMemoryAlarm',
          metric: metrics.freeableMemory,
          evaluationPeriods: 15,
          threshold: config.freeableMemoryThreshold?.toBytes(),
          comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
          alarmDescription: `Freeable Memory low on ${node.instanceIdentifier}`,
        },
        {
          alarmId: 'RdsInstance-FreeStorageSpaceAlarm',
          metric: metrics.freeStorageSpace,
          evaluationPeriods: 5,
          threshold: config.freeStorageSpaceThreshold?.toBytes(),
          comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
          alarmDescription: `Storage Space low on ${node.instanceIdentifier}`,
        },
        {
          alarmId: 'RdsInstance-ReadLatencyAlarm',
          metric: metrics.readLatency,
          evaluationPeriods: 5,
          threshold: config.readLatencyThreshold,
          comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
          alarmDescription: `Read Latency high on ${node.instanceIdentifier}`,
        },
      ],
    });
  }

  private metrics(node: rds.DatabaseInstance): RdsInstanceMonitoringMetrics {
    return {
      cpuUtilization: node.metricCPUUtilization({
        period: cdk.Duration.minutes(1),
      }),
      maxConnections: node.metricDatabaseConnections({
        period: cdk.Duration.minutes(1),
      }),
      freeableMemory: node.metricFreeableMemory({
        period: cdk.Duration.minutes(1),
      }),
      freeStorageSpace: node.metricFreeStorageSpace({
        period: cdk.Duration.minutes(1),
        statistic: 'Minimum',
      }),
      readLatency: node.metric('ReadLatency', {
        period: cdk.Duration.minutes(1),
        statistic: 'p90',
      }),
      ebsIOBalance: node.metric('EBSIOBalance%', {
        period: cdk.Duration.minutes(1),
      }),
      ebsByteBalance: node.metric('EBSByteBalance%', {
        period: cdk.Duration.minutes(1),
      }),
    };
  }
}
