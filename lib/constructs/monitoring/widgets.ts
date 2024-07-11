import { aws_cloudwatch as cw } from 'aws-cdk-lib';

export const dashboardSectionTitle = (title: string) =>
  new cw.TextWidget({
    markdown: `# ${title}`,
    width: 24,
  });

export const dashboardGenericAxis: cw.YAxisProps = {
  min: 0,
  showUnits: false,
};

export const dashboardPercentAxis: cw.YAxisProps = {
  ...dashboardGenericAxis,
  max: 100,
  label: '%',
};

export const dashboardSecondsAxis: cw.YAxisProps = {
  ...dashboardGenericAxis,
  label: 's',
};

export const dashboardMillisecondsAxis: cw.YAxisProps = {
  ...dashboardGenericAxis,
  label: 'ms',
};

export const alertAnnotation = (threshold: number, label?: string): cw.HorizontalAnnotation => ({
  label,
  value: threshold,
  color: '#ff0000',
});
