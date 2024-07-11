import * as cdk from 'aws-cdk-lib';
import { aws_cloudwatch as cw, aws_rds as rds } from 'aws-cdk-lib';
import { AbstractMonitoringAspect } from '../abstract-monitoring-aspect';
import {
  alertAnnotation,
  dashboardGenericAxis,
  dashboardPercentAxis,
  dashboardSectionTitle,
} from '../widgets';

export interface RdsClusterMonitoringConfig {
  cpuUtilizationThreshold: number;
  maxConnectionsThreshold: number;
  ebsByteBalanceThreshold: number;
  ebsIoBalanceThreshold: number;
  freeableMemoryThreshold: cdk.Size;
  readLatencyThreshold: number;
}

export interface RdsClusterMonitoringMetrics {
  cpuUtilization: cw.IMetric;
  maxConnections: cw.IMetric;
  freeableMemory: cw.IMetric;
  readLatency: cw.IMetric;
  ebsIOBalance: cw.IMetric;
  ebsByteBalance: cw.IMetric;
}

export class RdsClusterMonitoringAspect extends AbstractMonitoringAspect<
  rds.DatabaseCluster,
  RdsClusterMonitoringConfig,
  RdsClusterMonitoringMetrics
> {
  protected instanceType = rds.DatabaseCluster;
  protected defaultConfig = {
    cpuUtilizationThreshold: 90,
    maxConnectionsThreshold: 50,
    ebsByteBalanceThreshold: 10,
    ebsIoBalanceThreshold: 10,
    freeableMemoryThreshold: cdk.Size.mebibytes(100),
    freeStorageSpaceThreshold: cdk.Size.mebibytes(100),
    readLatencyThreshold: 20,
  };

  protected widgets(
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
        leftAnnotations: [alertAnnotation(config.cpuUtilizationThreshold)],
      }),
      new cw.GraphWidget({
        title: 'Connections',
        left: [metrics.maxConnections],
        leftYAxis: dashboardGenericAxis,
        leftAnnotations: [alertAnnotation(config.maxConnectionsThreshold)],
      }),
      new cw.GraphWidget({
        title: 'EBS Byte & IO Balance',
        left: [metrics.ebsByteBalance, metrics.ebsIOBalance],
        leftYAxis: dashboardPercentAxis,
        leftAnnotations: [
          alertAnnotation(config.ebsByteBalanceThreshold, 'EBS Byte Balance'),
          alertAnnotation(config.ebsIoBalanceThreshold, 'EBS IO Balance'),
        ],
      }),
      new cw.GraphWidget({
        title: 'Read Latency',
        left: [metrics.readLatency],
        leftYAxis: dashboardGenericAxis,
        leftAnnotations: [alertAnnotation(config.readLatencyThreshold)],
      }),
    ];
  }

  protected alarms(
    node: rds.DatabaseCluster,
    config: RdsClusterMonitoringConfig,
    metrics: RdsClusterMonitoringMetrics,
  ): cw.Alarm[] {
    return [
      new cw.Alarm(node, 'RdsClusterCpuUsageAlarm', {
        alarmName: `RdsCluster-CpuUsageAlarm-${node.clusterIdentifier}`,
        metric: metrics.cpuUtilization,
        evaluationPeriods: 5,
        threshold: config.cpuUtilizationThreshold,
        alarmDescription: `CPU Utilization high on ${node.clusterIdentifier}`,
      }),
      new cw.Alarm(node, 'RdsClusterMaxConnectionsAlarm', {
        alarmName: `RdsCluster-MaxConnectionsAlarm-${node.clusterIdentifier}`,
        metric: metrics.maxConnections,
        evaluationPeriods: 5,
        threshold: config.maxConnectionsThreshold, // FIXME: This depends on the database
        alarmDescription: `Max Connections high on ${node.clusterIdentifier}`,
      }),
      new cw.Alarm(node, 'RdsClusterEBSByteBalanceAlarm', {
        alarmName: `RdsCluster-EBSByteBalanceAlarm-${node.clusterIdentifier}`,
        metric: metrics.ebsByteBalance,
        evaluationPeriods: 3,
        threshold: config.ebsByteBalanceThreshold,
        comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
        alarmDescription: `EBS Byte Balance too low on ${node.clusterIdentifier}`,
      }),
      new cw.Alarm(node, 'RdsClusterEBSIOBalanceAlarm', {
        alarmName: `RdsCluster-EBSIOBalanceAlarm-${node.clusterIdentifier}`,
        metric: metrics.ebsIOBalance,
        evaluationPeriods: 3,
        threshold: config.ebsIoBalanceThreshold,
        comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
        alarmDescription: `EBS IO Balance too low on ${node.clusterIdentifier}`,
      }),
      new cw.Alarm(node, 'RdsClusterFreeableMemoryAlarm', {
        alarmName: `RdsCluster-FreeableMemoryAlarm-${node.clusterIdentifier}`,
        metric: metrics.freeableMemory,
        evaluationPeriods: 15,
        threshold: config.freeableMemoryThreshold.toBytes(),
        comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
        alarmDescription: `Freeable Memory low on ${node.clusterIdentifier}`,
      }),
      // Not all instances have these metrics. To lest instance types with support:
      // aws ec2 describe-instance-types \
      // --filters "Name=instance-type,Values=*" "Name=instance-storage-supported,Values=true" \
      // --query "InstanceTypes[].[InstanceType, InstanceStorageInfo.TotalSizeInGB]" \
      // --output table
      // new cw.Alarm(node, 'RdsClusterFreeLocalStorageAlarm', {
      //   metric: node.metric('FreeLocalStorage', {
      //     period: cdk.Duration.minutes(1),
      //   }),
      //   evaluationPeriods: 5,
      //   threshold: cdk.Size.mebibytes(100).toBytes(),
      //   comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
      // }),
      // These metrics are only available for Postgres instances
      // new cw.Alarm(node, 'RdsClusterMaximumUsedTransactionIDsAlarm', {
      //   metric: node.metric('MaximumUsedTransactionIDs', {
      //     period: cdk.Duration.minutes(1),
      //   }),
      //   evaluationPeriods: 1,
      //   threshold: 1.0e9,
      //   comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
      // }),
      new cw.Alarm(node, 'RdsClusterReadLatencyAlarm', {
        alarmName: `RdsCluster-ReadLatencyAlarm-${node.clusterIdentifier}`,
        metric: metrics.readLatency,
        evaluationPeriods: 5,
        threshold: config.readLatencyThreshold,
        comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
        alarmDescription: `Read Latency high on ${node.clusterIdentifier}`,
      }),
      // This is only for read replica configurations, the amount of time a read replica DB instance lags behind the source DB instance. Applies to MariaDB, Microsoft SQL Server, MySQL, Oracle, and PostgreSQL read replicas.
      // new cw.Alarm(node, 'RdsClusterReplicaLagAlarm', {
      //   metric: node.metric('ReplicaLag', {
      //     period: cdk.Duration.minutes(1),
      //     statistic: 'Maximum',
      //   }),
      //   evaluationPeriods: 10,
      //   threshold: 60,
      //   comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
      // }),
      // new cw.Alarm(node, 'RdsClusterWriteLatencyAlarm', {
      //   metric: node.metric('ReplicaLag', {
      //     period: cdk.Duration.minutes(1),
      //     statistic: 'p90',
      //   }),
      //   evaluationPeriods: 5,
      //   threshold: 20,
      //   comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
      // }),
    ];
  }

  protected metrics(node: rds.DatabaseCluster): RdsClusterMonitoringMetrics {
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
