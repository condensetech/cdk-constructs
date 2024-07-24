import { aws_cloudwatch as cw } from 'aws-cdk-lib';
import { WidgetAlertAnnotationProps } from './interfaces';

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

export const alertAnnotations = (
  thresholds: WidgetAlertAnnotationProps[],
): cw.HorizontalAnnotation[] =>
  thresholds
    .map(({ label, value, color }) =>
      value ? { label, value, color: color ?? '#ff0000' } : undefined,
    )
    .filter(Boolean) as cw.HorizontalAnnotation[];
