import * as cdk from 'aws-cdk-lib';
import { aws_cloudwatch as cw, aws_elasticache as elasticache } from 'aws-cdk-lib';
import {
  alertAnnotations,
  dashboardGenericAxis,
  dashboardMillisecondsAxis,
  dashboardPercentAxis,
  dashboardSectionTitle,
} from '../widgets';
import { buildAlarms } from '../alarms';
import { ICondenseMonitoringFacade } from '../interfaces';
import { IConstruct } from 'constructs';

export interface CacheClusterMonitoringMetrics {
  readonly cpuUtilization: cw.IMetric[];
  readonly maxConnections: cw.IMetric[];
  readonly memoryUsage: cw.IMetric;
  readonly engineCpuUtilization: cw.IMetric;
  readonly replicationLag: cw.IMetric;
}

export interface CacheClusterMonitoringConfig {
  readonly cpuUtilizationThreshold?: number;
  readonly maxConnectionsThreshold?: number;
  readonly memoryUsageThreshold?: number;
  readonly engineCpuUtilizationThreshold?: number;
  readonly replicationLagThreshold?: cdk.Duration;
}

export class CacheClusterMonitoringAspect implements cdk.IAspect {
  private readonly overriddenConfig: Record<string, CacheClusterMonitoringConfig> = {};
  private readonly defaultConfig: CacheClusterMonitoringConfig = {
    cpuUtilizationThreshold: 90,
    maxConnectionsThreshold: 60_000,
    memoryUsageThreshold: 90,
    engineCpuUtilizationThreshold: 95,
  };

  constructor(readonly monitoringFacade: ICondenseMonitoringFacade) {}

  visit(node: IConstruct): void {
    if (!(node instanceof elasticache.CfnCacheCluster)) {
      return;
    }
    const config = this.readConfig(node);
    const metrics = this.metrics(node);
    this.monitoringFacade.dashboard.addWidgets(...this.widgets(node, config, metrics));
    this.alarms(node, config, metrics).forEach((a) => this.monitoringFacade.addAlarm(a));
  }

  overrideConfig(node: elasticache.CfnCacheCluster, config: CacheClusterMonitoringConfig) {
    this.overriddenConfig[node.node.path] = config;
  }

  private readConfig(node: elasticache.CfnCacheCluster): CacheClusterMonitoringConfig {
    return {
      ...this.defaultConfig,
      ...(this.overriddenConfig[node.node.path] || {}),
    };
  }

  private widgets(
    node: elasticache.CfnCacheCluster,
    config: CacheClusterMonitoringConfig,
    metrics: CacheClusterMonitoringMetrics,
  ): cw.IWidget[] {
    const cpuWidth = Math.max(Math.round(24 / metrics.cpuUtilization.length), 3);
    const connectionsWidth = Math.max(Math.round(24 / metrics.maxConnections.length), 3);
    return [
      dashboardSectionTitle(`Elasticache ${node.node.path}`),
      new cw.GraphWidget({
        title: 'Memory Usage',
        left: [metrics.memoryUsage],
        leftYAxis: dashboardPercentAxis,
        leftAnnotations: alertAnnotations([{ value: config.memoryUsageThreshold }]),
        width: 8,
      }),
      new cw.GraphWidget({
        title: 'CPU Utilization',
        left: [metrics.engineCpuUtilization],
        leftYAxis: dashboardPercentAxis,
        leftAnnotations: alertAnnotations([{ value: config.engineCpuUtilizationThreshold }]),
        width: 8,
      }),
      new cw.GraphWidget({
        title: 'Replication Lag',
        left: [metrics.replicationLag],
        leftYAxis: dashboardMillisecondsAxis,
        leftAnnotations: alertAnnotations([
          { value: config.replicationLagThreshold?.toMilliseconds() },
        ]),
        width: 8,
      }),
      new cw.TextWidget({
        markdown: `## Node Metrics`,
        width: 24,
      }),
      ...metrics.cpuUtilization.map(
        (metric, i) =>
          new cw.GraphWidget({
            title: `CPU Utilization Node ${i}`,
            left: [metric],
            leftYAxis: dashboardPercentAxis,
            leftAnnotations: alertAnnotations([{ value: config.cpuUtilizationThreshold }]),
            width: cpuWidth,
          }),
      ),
      ...metrics.maxConnections.map(
        (metric, i) =>
          new cw.GraphWidget({
            title: `Connections Node ${i}`,
            left: [metric],
            leftYAxis: dashboardGenericAxis,
            leftAnnotations: alertAnnotations([{ value: config.maxConnectionsThreshold }]),
            width: connectionsWidth,
          }),
      ),
    ];
  }

  private alarms(
    node: elasticache.CfnCacheCluster,
    config: CacheClusterMonitoringConfig,
    metrics: CacheClusterMonitoringMetrics,
  ): cw.Alarm[] {
    return buildAlarms({
      node,
      nodeIdentifier: node.ref,
      alarms: [
        ...metrics.cpuUtilization.map((metric, i) => ({
          alarmId: `CacheCluster-CpuUsageAlarm-${i}`,
          alarmName: `CacheCluster-CpuUsageAlarm-${node.ref}-${i + 1}`,
          metric,
          evaluationPeriods: 5,
          threshold: config.cpuUtilizationThreshold,
          alarmDescription: `CPU Utilization high on ${node.ref}, node ${i + 1}`,
        })),
        ...metrics.maxConnections.map((metric, i) => ({
          alarmId: `CacheCluster-MaxConnectionsAlarm-${i}`,
          alarmName: `CacheCluster-MaxConnectionsAlarm-${node.ref}-${i + 1}`,
          metric,
          evaluationPeriods: 10,
          threshold: config.maxConnectionsThreshold,
          alarmDescription: `Max Connections high on ${node.ref}, node ${i + 1}`,
        })),
        {
          alarmId: 'CacheCluster-MemoryUsageAlarm',
          metric: metrics.memoryUsage,
          evaluationPeriods: 5,
          threshold: config.memoryUsageThreshold,
          alarmDescription: `Memory Usage high on ${node.ref}`,
        },
        {
          alarmId: 'CacheCluster-EngineCpuUsageAlarm',
          metric: metrics.engineCpuUtilization,
          evaluationPeriods: 5,
          threshold: config.engineCpuUtilizationThreshold,
          alarmDescription: `Engine CPU Utilization high on ${node.ref}`,
        },
        {
          alarmId: 'CacheCluster-ReplicationLagAlarm',
          metric: metrics.replicationLag,
          evaluationPeriods: 15,
          threshold: config.replicationLagThreshold?.toMilliseconds(),
          alarmDescription: `Replication Lag high on ${node.ref}`,
        },
      ],
    });
  }

  private metrics(node: elasticache.CfnCacheCluster): CacheClusterMonitoringMetrics {
    const cacheNodeIds = this.getCacheNodeIds(node);
    const cpuUtilization = cacheNodeIds.map(
      (cacheNodeId) =>
        new cw.Metric({
          metricName: 'CPUUtilization',
          namespace: 'AWS/ElastiCache',
          dimensionsMap: {
            CacheClusterId: node.ref,
            CacheNodeId: cacheNodeId,
          },
          period: cdk.Duration.minutes(1),
        }),
    );
    const maxConnections = cacheNodeIds.map(
      (cacheNodeId) =>
        new cw.Metric({
          metricName: 'CurrConnections',
          namespace: 'AWS/ElastiCache',
          dimensionsMap: {
            CacheClusterId: node.ref,
            CacheNodeId: cacheNodeId,
          },
          period: cdk.Duration.minutes(1),
        }),
    );
    const memoryUsage = new cw.Metric({
      metricName: 'DatabaseMemoryUsagePercentage',
      namespace: 'AWS/ElastiCache',
      dimensionsMap: {
        CacheClusterId: node.ref,
      },
      period: cdk.Duration.minutes(1),
    });
    const engineCpuUtilization = new cw.Metric({
      metricName: 'EngineCPUUtilization',
      namespace: 'AWS/ElastiCache',
      dimensionsMap: {
        CacheClusterId: node.ref,
      },
      period: cdk.Duration.minutes(1),
    });
    const replicationLag = new cw.Metric({
      metricName: 'ReplicationLag',
      namespace: 'AWS/ElastiCache',
      dimensionsMap: {
        CacheClusterId: node.ref,
      },
      period: cdk.Duration.minutes(1),
    });
    return {
      cpuUtilization,
      maxConnections,
      memoryUsage,
      engineCpuUtilization,
      replicationLag,
    };
  }

  private getCacheNodeId(idx: number): string {
    return (idx + 1).toString().padStart(4, '0');
  }

  private getCacheNodeIds(node: elasticache.CfnCacheCluster): string[] {
    const cacheNodeIds: string[] = [];
    for (let i = 0; i < node.numCacheNodes; i++) {
      cacheNodeIds.push(this.getCacheNodeId(i));
    }
    return cacheNodeIds;
  }
}
