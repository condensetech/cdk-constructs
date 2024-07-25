import { aws_cloudwatch as cw } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface ICondenseMonitoringFacade {
  dashboard: cw.Dashboard;
  addAlarm(alarm: cw.Alarm): void;
}

export interface WidgetAlertAnnotationProps {
  readonly label?: string;
  readonly value?: number;
  readonly color?: string;
}

export interface AlarmDefinitionProps {
  readonly alarmId: string;
  readonly alarmName?: string;
  readonly metric: cw.IMetric;
  readonly evaluationPeriods: number;
  readonly threshold?: number;
  readonly comparisonOperator?: cw.ComparisonOperator;
  readonly alarmDescription?: string;
}

export interface BuildAlarmsProps {
  readonly node: Construct;
  readonly nodeIdentifier: string;
  readonly alarms: Array<AlarmDefinitionProps>;
}
