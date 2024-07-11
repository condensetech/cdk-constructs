import * as cdk from 'aws-cdk-lib';
import { aws_cloudwatch as cw, aws_elasticache as elasticache } from 'aws-cdk-lib';
import { AbstractMonitoringAspect } from '../abstract-monitoring-aspect';
import {
  alertAnnotation,
  dashboardGenericAxis,
  dashboardMillisecondsAxis,
  dashboardPercentAxis,
  dashboardSectionTitle,
} from '../widgets';

export interface CacheClusterMonitoringMetrics {
  cpuUtilization: cw.IMetric[];
  maxConnections: cw.IMetric[];
  memoryUsage: cw.IMetric;
  engineCpuUtilization: cw.IMetric;
  replicationLag: cw.IMetric;
}

export interface CacheClusterMonitoringConfig {
  cpuUtilizationThreshold: number;
  maxConnectionsThreshold: number;
  memoryUsageThreshold: number;
  engineCpuUtilizationThreshold: number;
  replicationLagThreshold?: cdk.Duration;
}

export class CacheClusterMonitoringAspect extends AbstractMonitoringAspect<
  elasticache.CfnCacheCluster,
  CacheClusterMonitoringConfig,
  CacheClusterMonitoringMetrics
> {
  protected instanceType = elasticache.CfnCacheCluster;
  protected defaultConfig = {
    cpuUtilizationThreshold: 90,
    maxConnectionsThreshold: 60_000,
    memoryUsageThreshold: 90,
    engineCpuUtilizationThreshold: 95,
  };

  protected widgets(
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
        leftAnnotations: [alertAnnotation(config.memoryUsageThreshold)],
        width: 8,
      }),
      new cw.GraphWidget({
        title: 'CPU Utilization',
        left: [metrics.engineCpuUtilization],
        leftYAxis: dashboardPercentAxis,
        leftAnnotations: [alertAnnotation(config.engineCpuUtilizationThreshold)],
        width: 8,
      }),
      new cw.GraphWidget({
        title: 'Replication Lag',
        left: [metrics.replicationLag],
        leftYAxis: dashboardMillisecondsAxis,
        leftAnnotations:
          config.replicationLagThreshold !== undefined
            ? [alertAnnotation(config.replicationLagThreshold.toMilliseconds())]
            : [],
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
            leftAnnotations: [alertAnnotation(config.cpuUtilizationThreshold)],
            width: cpuWidth,
          }),
      ),
      ...metrics.maxConnections.map(
        (metric, i) =>
          new cw.GraphWidget({
            title: `Connections Node ${i}`,
            left: [metric],
            leftYAxis: dashboardGenericAxis,
            leftAnnotations: [alertAnnotation(config.maxConnectionsThreshold)],
            width: connectionsWidth,
          }),
      ),
    ];
  }

  protected alarms(
    node: elasticache.CfnCacheCluster,
    config: CacheClusterMonitoringConfig,
    metrics: CacheClusterMonitoringMetrics,
  ): cw.Alarm[] {
    return [
      ...metrics.cpuUtilization.map(
        (metric, i) =>
          new cw.Alarm(node, `CacheClusterCpuUsageAlarm${i}`, {
            alarmName: `CacheClusterCpuUsageAlarm-${node.ref}-${i + 1}`,
            metric,
            evaluationPeriods: 5,
            threshold: config.cpuUtilizationThreshold,
            alarmDescription: `CPU Utilization high on ${node.ref}, node ${i + 1}`,
          }),
      ),
      ...metrics.maxConnections.map(
        (metric, i) =>
          new cw.Alarm(node, `CacheClusterMaxConnectionsAlarm${i}`, {
            alarmName: `CacheClusterMaxConnectionsAlarm-${node.ref}-${i + 1}`,
            metric,
            evaluationPeriods: 10,
            threshold: config.maxConnectionsThreshold,
            alarmDescription: `Max Connections high on ${node.ref}, node ${i + 1}`,
          }),
      ),
      new cw.Alarm(node, 'CacheClusterMemoryUsageAlarm', {
        alarmName: `CacheClusterMemoryUsageAlarm-${node.ref}`,
        metric: metrics.memoryUsage,
        evaluationPeriods: 5,
        threshold: config.memoryUsageThreshold,
        alarmDescription: `Memory Usage high on ${node.ref}`,
      }),
      new cw.Alarm(node, 'CacheClusterEngineCpuUsageAlarm', {
        alarmName: `CacheClusterEngineCpuUsageAlarm-${node.ref}`,
        metric: metrics.engineCpuUtilization,
        evaluationPeriods: 5,
        threshold: config.engineCpuUtilizationThreshold,
        alarmDescription: `Engine CPU Utilization high on ${node.ref}`,
      }),
      ...(config.replicationLagThreshold !== undefined
        ? [
            new cw.Alarm(node, 'CacheClusterReplicationLagAlarm', {
              alarmName: `CacheClusterReplicationLagAlarm-${node.ref}`,
              metric: metrics.replicationLag,
              evaluationPeriods: 15,
              threshold: config.replicationLagThreshold.toMilliseconds(),
              alarmDescription: `Replication Lag high on ${node.ref}`,
            }),
          ]
        : []),
    ];
  }

  protected metrics(node: elasticache.CfnCacheCluster): CacheClusterMonitoringMetrics {
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
