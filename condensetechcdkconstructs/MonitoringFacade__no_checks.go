//go:build no_runtime_type_checking

package condensetechcdkconstructs

// Building without runtime type checking enabled, so all the below just return nil

func (m *jsiiProxy_MonitoringFacade) validateAddAlarmParameters(alarm awscloudwatch.Alarm) error {
	return nil
}

func (m *jsiiProxy_MonitoringFacade) validateConfigApplicationLoadBalancerParameters(resource awselasticloadbalancingv2.ApplicationLoadBalancer, config *ApplicationLoadBalancerMonitoringConfig) error {
	return nil
}

func (m *jsiiProxy_MonitoringFacade) validateConfigCacheClusterParameters(resource awselasticache.CfnCacheCluster, config *CacheClusterMonitoringConfig) error {
	return nil
}

func (m *jsiiProxy_MonitoringFacade) validateConfigFargateServiceParameters(resource awsecs.FargateService, config *FargateServiceMonitoringConfig) error {
	return nil
}

func (m *jsiiProxy_MonitoringFacade) validateConfigRdsClusterParameters(resource awsrds.DatabaseCluster, config *RdsClusterMonitoringConfig) error {
	return nil
}

func (m *jsiiProxy_MonitoringFacade) validateConfigRdsInstanceParameters(resource awsrds.DatabaseInstance, config *RdsInstanceMonitoringConfig) error {
	return nil
}

func (m *jsiiProxy_MonitoringFacade) validateConfigTargetGroupParameters(resource awselasticloadbalancingv2.ApplicationTargetGroup, config *TargetGroupMonitoringConfig) error {
	return nil
}

func validateMonitoringFacade_OfParameters(scope constructs.Construct) error {
	return nil
}

func validateNewMonitoringFacadeParameters(scope awscdk.Stack, props *MonitoringFacadeProps) error {
	return nil
}

