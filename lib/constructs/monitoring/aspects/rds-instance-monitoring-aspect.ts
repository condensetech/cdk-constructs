import * as cdk from 'aws-cdk-lib';
import { aws_cloudwatch as cw, aws_rds as rds } from 'aws-cdk-lib';
import { AbstractMonitoringAspect } from '../abstract-monitoring-aspect';
import {
  alertAnnotation,
  dashboardGenericAxis,
  dashboardPercentAxis,
  dashboardSectionTitle,
} from '../widgets';

export interface RdsInstanceMonitoringConfig {
  cpuUtilizationThreshold: number;
  maxConnectionsThreshold: number;
  ebsByteBalanceThreshold: number;
  ebsIoBalanceThreshold: number;
  freeableMemoryThreshold: cdk.Size;
  freeStorageSpaceThreshold: cdk.Size;
  readLatencyThreshold: number;
}

export interface RdsInstanceMonitoringMetrics {
  cpuUtilization: cw.IMetric;
  maxConnections: cw.IMetric;
  freeableMemory: cw.IMetric;
  freeStorageSpace: cw.IMetric;
  readLatency: cw.IMetric;
  ebsIOBalance: cw.IMetric;
  ebsByteBalance: cw.IMetric;
}

export class RdsInstanceMonitoringAspect extends AbstractMonitoringAspect<
  rds.DatabaseInstance,
  RdsInstanceMonitoringConfig,
  RdsInstanceMonitoringMetrics
> {
  protected instanceType = rds.DatabaseInstance;
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
        leftAnnotations: [alertAnnotation(config.cpuUtilizationThreshold)],
      }),
      new cw.GraphWidget({
        title: 'Connections',
        left: [metrics.maxConnections],
        leftYAxis: dashboardGenericAxis,
        leftAnnotations: [alertAnnotation(config.maxConnectionsThreshold)],
      }),
      new cw.GraphWidget({
        title: 'Storage and Memory',
        left: [metrics.freeStorageSpace, metrics.freeableMemory],
        leftYAxis: dashboardGenericAxis,
        leftAnnotations: [
          alertAnnotation(config.freeStorageSpaceThreshold.toBytes(), 'Free Storage Space'),
          alertAnnotation(config.freeableMemoryThreshold.toBytes(), 'Freeable Memory'),
        ],
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
    node: rds.DatabaseInstance,
    config: RdsInstanceMonitoringConfig,
    metrics: RdsInstanceMonitoringMetrics,
  ): cw.Alarm[] {
    return [
      new cw.Alarm(node, 'DatabaseInstanceCpuUsageAlarm', {
        alarmName: `DatabaseInstanceCpuUsageAlarm-${node.instanceIdentifier}`,
        metric: metrics.cpuUtilization,
        evaluationPeriods: 5,
        threshold: config.cpuUtilizationThreshold,
        alarmDescription: `CPU Utilization high on ${node.instanceIdentifier}`,
      }),
      new cw.Alarm(node, 'DatabaseInstanceMaxConnectionsAlarm', {
        alarmName: `DatabaseInstanceMaxConnectionsAlarm-${node.instanceIdentifier}`,
        metric: metrics.maxConnections,
        evaluationPeriods: 5,
        threshold: config.maxConnectionsThreshold, // FIXME: This depends on the database
        alarmDescription: `Max Connections high on ${node.instanceIdentifier}`,
      }),
      new cw.Alarm(node, 'DatabaseInstanceEBSByteBalanceAlarm', {
        alarmName: `DatabaseInstanceEBSByteBalanceAlarm-${node.instanceIdentifier}`,
        metric: metrics.ebsByteBalance,
        evaluationPeriods: 3,
        threshold: config.ebsByteBalanceThreshold,
        comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
        alarmDescription: `EBS Byte Balance too low on ${node.instanceIdentifier}`,
      }),
      new cw.Alarm(node, 'DatabaseInstanceEBSIOBalanceAlarm', {
        alarmName: `DatabaseInstanceEBSIOBalanceAlarm-${node.instanceIdentifier}`,
        metric: metrics.ebsIOBalance,
        evaluationPeriods: 3,
        threshold: config.ebsIoBalanceThreshold,
        comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
        alarmDescription: `EBS IO Balance too low on ${node.instanceIdentifier}`,
      }),
      new cw.Alarm(node, 'DatabaseInstanceFreeableMemoryAlarm', {
        alarmName: `DatabaseInstanceFreeableMemoryAlarm-${node.instanceIdentifier}`,
        metric: metrics.freeableMemory,
        evaluationPeriods: 15,
        threshold: config.freeableMemoryThreshold.toBytes(),
        comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
        alarmDescription: `Freeable Memory low on ${node.instanceIdentifier}`,
      }),
      // Not all instances have these metrics. To lest instance types with support:
      // aws ec2 describe-instance-types \
      // --filters "Name=instance-type,Values=*" "Name=instance-storage-supported,Values=true" \
      // --query "InstanceTypes[].[InstanceType, InstanceStorageInfo.TotalSizeInGB]" \
      // --output table
      // new cw.Alarm(node, 'DatabaseInstanceFreeLocalStorageAlarm', {
      //   metric: node.metric('FreeLocalStorage', {
      //     period: cdk.Duration.minutes(1),
      //   }),
      //   evaluationPeriods: 5,
      //   threshold: cdk.Size.mebibytes(100).toBytes(),
      //   comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
      // }),
      new cw.Alarm(node, 'DatabaseInstanceFreeStorageSpaceAlarm', {
        alarmName: `DatabaseInstanceFreeStorageSpaceAlarm-${node.instanceIdentifier}`,
        metric: metrics.freeStorageSpace,
        evaluationPeriods: 5,
        threshold: config.freeStorageSpaceThreshold.toBytes(),
        comparisonOperator: cw.ComparisonOperator.LESS_THAN_THRESHOLD,
        alarmDescription: `Storage Space low on ${node.instanceIdentifier}`,
      }),
      // These metrics are only available for Postgres instances
      // new cw.Alarm(node, 'DatabaseInstanceMaximumUsedTransactionIDsAlarm', {
      //   metric: node.metric('MaximumUsedTransactionIDs', {
      //     period: cdk.Duration.minutes(1),
      //   }),
      //   evaluationPeriods: 1,
      //   threshold: 1.0e9,
      //   comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
      // }),
      new cw.Alarm(node, 'DatabaseInstanceReadLatencyAlarm', {
        alarmName: `DatabaseInstanceReadLatencyAlarm-${node.instanceIdentifier}`,
        metric: metrics.readLatency,
        evaluationPeriods: 5,
        threshold: config.readLatencyThreshold,
        comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
        alarmDescription: `Read Latency high on ${node.instanceIdentifier}`,
      }),
      // This is only for read replica configurations, the amount of time a read replica DB instance lags behind the source DB instance. Applies to MariaDB, Microsoft SQL Server, MySQL, Oracle, and PostgreSQL read replicas.
      // new cw.Alarm(node, 'DatabaseInstanceReplicaLagAlarm', {
      //   metric: node.metric('ReplicaLag', {
      //     period: cdk.Duration.minutes(1),
      //     statistic: 'Maximum',
      //   }),
      //   evaluationPeriods: 10,
      //   threshold: 60,
      //   comparisonOperator: cw.ComparisonOperator.GREATER_THAN_THRESHOLD,
      // }),
      // new cw.Alarm(node, 'DatabaseInstanceWriteLatencyAlarm', {
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

  protected metrics(node: rds.DatabaseInstance): RdsInstanceMonitoringMetrics {
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
