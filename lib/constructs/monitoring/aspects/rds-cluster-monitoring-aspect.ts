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

export interface RdsClusterMonitoringConfig {
  readonly cpuUtilizationThreshold?: number;
  readonly maxConnectionsThreshold?: number;
  readonly ebsByteBalanceThreshold?: number;
  readonly ebsIoBalanceThreshold?: number;
  readonly freeableMemoryThreshold?: cdk.Size;
  readonly readLatencyThreshold?: number;
}

export interface RdsClusterMonitoringMetrics {
  readonly cpuUtilization: cw.IMetric;
  readonly maxConnections: cw.IMetric;
  readonly freeableMemory: cw.IMetric;
  readonly readLatency: cw.IMetric;
  readonly ebsIOBalance: cw.IMetric;
  readonly ebsByteBalance: cw.IMetric;
}

export class RdsClusterMonitoringAspect implements cdk.IAspect {
  private readonly overriddenConfig: Record<string, Partial<RdsClusterMonitoringConfig>> = {};
  private readonly defaultConfig: RdsClusterMonitoringConfig = {
    cpuUtilizationThreshold: 90,
    maxConnectionsThreshold: 50,
    ebsByteBalanceThreshold: 10,
    ebsIoBalanceThreshold: 10,
    freeableMemoryThreshold: cdk.Size.mebibytes(100),
    readLatencyThreshold: 20,
  };

  constructor(private readonly monitoringFacade: ICondenseMonitoringFacade) {}

  visit(node: IConstruct): void {
    if (!(node instanceof rds.DatabaseCluster)) {
      return;
    }
    const config = this.readConfig(node);
    const metrics = this.metrics(node);
    this.monitoringFacade.dashboard.addWidgets(...this.widgets(node, config, metrics));
    this.alarms(node, config, metrics).forEach((a) => this.monitoringFacade.addAlarm(a));
  }

  overrideConfig(node: rds.DatabaseCluster, config: RdsClusterMonitoringConfig) {
    this.overriddenConfig[node.node.path] = config;
  }

  private readConfig(node: rds.DatabaseCluster): RdsClusterMonitoringConfig {
    return {
      ...this.defaultConfig,
      ...(this.overriddenConfig[node.node.path] || {}),
    };
  }

  private widgets(
    node: rds.DatabaseCluster,
    config: RdsClusterMonitoringConfig,
    metrics: RdsClusterMonitoringMetrics,
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
    node: rds.DatabaseCluster,
    config: RdsClusterMonitoringConfig,
    metrics: RdsClusterMonitoringMetrics,
  ): cw.Alarm[] {
    return buildAlarms({
      node,
      nodeIdentifier: node.clusterIdentifier,
      alarms: [
        {
          alarmId: 'RdsCluster-CpuUsageAlarm',
          metric: metrics.cpuUtilization,
          evaluationPeriods: 5,
          threshold: config.cpuUtilizationThreshold,
          alarmDescription: `CPU Utilization high on ${node.clusterIdentifier}`,
        },
        {
          alarmId: 'RdsCluster-MaxConnectionsAlarm',
          metric: metrics.maxConnections,
          evaluationPeriods: 5,
          threshold: config.maxConnectionsThreshold, // FIXME: This depends on the database
          alarmDescription: `Max Connections high on ${node.clusterIdentifier}`,
        },
        {
          alarmId: 'RdsCluster-EBSByteBalanceAlarm',
          metric: metrics.ebsByteBalance,
          evaluationPeriods: 3,
          threshold: config.ebsByteBalanceThreshold,
          comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
          alarmDescription: `EBS Byte Balance too low on ${node.clusterIdentifier}`,
        },
        {
          alarmId: 'RdsCluster-EBSIOBalanceAlarm',
          metric: metrics.ebsIOBalance,
          evaluationPeriods: 3,
          threshold: config.ebsIoBalanceThreshold,
          comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
          alarmDescription: `EBS IO Balance too low on ${node.clusterIdentifier}`,
        },
        {
          alarmId: 'RdsCluster-FreeableMemoryAlarm',
          metric: metrics.freeableMemory,
          evaluationPeriods: 15,
          threshold: config.freeableMemoryThreshold?.toBytes(),
          comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
          alarmDescription: `Freeable Memory low on ${node.clusterIdentifier}`,
        },
        {
          alarmId: 'RdsCluster-ReadLatencyAlarm',
          metric: metrics.readLatency,
          evaluationPeriods: 5,
          threshold: config.readLatencyThreshold,
          comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
          alarmDescription: `Read Latency high on ${node.clusterIdentifier}`,
        },
      ],
    });
  }

  private metrics(node: rds.DatabaseCluster): RdsClusterMonitoringMetrics {
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
