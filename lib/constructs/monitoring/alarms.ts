import { aws_cloudwatch as cw } from 'aws-cdk-lib';
import { BuildAlarmsProps } from './interfaces';

export const buildAlarms = (props: BuildAlarmsProps): cw.Alarm[] => {
  const alarms = [];
  for (const alarm of props.alarms) {
    if (alarm.threshold === undefined) {
      continue;
    }
    alarms.push(
      new cw.Alarm(props.node, alarm.alarmId, {
        alarmName: alarm.alarmName ?? `${alarm.alarmId}-${props.nodeIdentifier}`,
        metric: alarm.metric,
        evaluationPeriods: alarm.evaluationPeriods,
        threshold: alarm.threshold,
        comparisonOperator: alarm.comparisonOperator,
        alarmDescription: alarm.alarmDescription,
      }),
    );
  }
  return alarms;
};
