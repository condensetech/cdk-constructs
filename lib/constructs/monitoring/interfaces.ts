import { aws_cloudwatch as cw } from 'aws-cdk-lib';

export interface ICondenseMonitoringFacade {
  dashboard: cw.Dashboard;
  addAlarm(alarm: cw.Alarm): void;
}
