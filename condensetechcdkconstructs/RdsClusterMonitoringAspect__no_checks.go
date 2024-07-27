//go:build no_runtime_type_checking

package condensetechcdkconstructs

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RdsClusterMonitoringAspect) validateOverrideConfigParameters(node awsrds.DatabaseCluster, config *RdsClusterMonitoringConfig) error {
	return nil
}

func (r *jsiiProxy_RdsClusterMonitoringAspect) validateVisitParameters(node constructs.IConstruct) error {
	return nil
}

func validateNewRdsClusterMonitoringAspectParameters(monitoringFacade ICondenseMonitoringFacade) error {
	return nil
}

