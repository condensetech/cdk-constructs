import { aws_cloudwatch as cw } from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * The ICondenseMonitoringFacade interface defines the methods that the monitoring facade must implement.
 */
export interface ICondenseMonitoringFacade {
  /**
   * Returns the Cloudwatch dashboard to be used for this stack monitoring.
   */
  readonly dashboard: cw.Dashboard;

  /**
   * Add an alarm to the monitoring facade, by linking it to the alarms topic.
   * @param alarm The alarm to add.
   */
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
