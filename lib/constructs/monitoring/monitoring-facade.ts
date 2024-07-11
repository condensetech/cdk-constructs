import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import {
  aws_cloudwatch as cw,
  aws_cloudwatch_actions as cwActions,
  aws_elasticache as elasticache,
  aws_sns as sns,
  aws_elasticloadbalancingv2 as elbv2,
  aws_ecs as ecs,
  aws_rds as rds,
} from 'aws-cdk-lib';
import {
  RdsInstanceMonitoringAspect,
  FargateServiceMonitoringAspect,
  CacheClusterMonitoringAspect,
  TargetGroupMonitoringAspect,
  ApplicationLoadBalancerMonitoringAspect,
  RdsInstanceMonitoringConfig,
  TargetGroupMonitoringConfig,
  CacheClusterMonitoringConfig,
  FargateServiceMonitoringConfig,
  ApplicationLoadBalancerMonitoringConfig,
  RdsClusterMonitoringAspect,
} from './aspects';

export interface MonitoringFacadeProps {
  readonly dashboardName?: string;
  readonly topicArn: string;
}

export class MonitoringFacade {
  private static instances = new Map<string, MonitoringFacade>();

  readonly dashboard: cw.Dashboard;
  readonly alarmTopic: sns.ITopic;
  private readonly cacheClusterAspect: CacheClusterMonitoringAspect;
  private readonly rdsInstanceAspect: RdsInstanceMonitoringAspect;
  private readonly targetGroupAspect: TargetGroupMonitoringAspect;
  private readonly fargateServiceAspect: FargateServiceMonitoringAspect;
  private readonly albAspect: ApplicationLoadBalancerMonitoringAspect;
  private readonly rdsClusterAspect: RdsClusterMonitoringAspect;

  constructor(scope: cdk.Stack, props: MonitoringFacadeProps) {
    if (MonitoringFacade.instances.has(scope.node.path)) {
      throw new Error(`CondenseMonitoringFacade already exists for ${scope.node.path}`);
    }
    MonitoringFacade.instances.set(scope.node.path, this);

    this.dashboard = new cw.Dashboard(scope, 'Dashboard', {
      dashboardName: props?.dashboardName,
    });
    this.alarmTopic = sns.Topic.fromTopicArn(scope, 'ObservabilityTopic', props.topicArn);
    const aspects = cdk.Aspects.of(scope);
    aspects.add((this.rdsInstanceAspect = new RdsInstanceMonitoringAspect(this)));
    aspects.add((this.cacheClusterAspect = new CacheClusterMonitoringAspect(this)));
    aspects.add((this.targetGroupAspect = new TargetGroupMonitoringAspect(this)));
    aspects.add((this.fargateServiceAspect = new FargateServiceMonitoringAspect(this)));
    aspects.add((this.albAspect = new ApplicationLoadBalancerMonitoringAspect(this)));
    aspects.add((this.rdsClusterAspect = new RdsClusterMonitoringAspect(this)));
  }

  static of(scope: Construct): MonitoringFacade | undefined {
    return MonitoringFacade.instances.get(cdk.Stack.of(scope).node.path);
  }

  addAlarm(alarm: cw.Alarm) {
    alarm.addAlarmAction(new cwActions.SnsAction(this.alarmTopic));
  }

  configCacheCluster(
    resource: elasticache.CfnCacheCluster,
    config: Partial<CacheClusterMonitoringConfig>,
  ) {
    this.cacheClusterAspect.overrideConfig(resource, config);
  }
  configTargetGroup(
    resource: elbv2.ApplicationTargetGroup,
    config: Partial<TargetGroupMonitoringConfig>,
  ) {
    this.targetGroupAspect.overrideConfig(resource, config);
  }
  configRdsInstance(resource: rds.DatabaseInstance, config: Partial<RdsInstanceMonitoringConfig>) {
    this.rdsInstanceAspect.overrideConfig(resource, config);
  }
  configFargateService(
    resource: ecs.FargateService,
    config: Partial<FargateServiceMonitoringConfig>,
  ) {
    this.fargateServiceAspect.overrideConfig(resource, config);
  }
  configApplicationLoadBalancer(
    resource: elbv2.ApplicationLoadBalancer,
    config: Partial<ApplicationLoadBalancerMonitoringConfig>,
  ) {
    this.albAspect.overrideConfig(resource, config);
  }
  configRdsCluster(resource: rds.DatabaseCluster, config: Partial<RdsInstanceMonitoringConfig>) {
    this.rdsClusterAspect.overrideConfig(resource, config);
  }
}
