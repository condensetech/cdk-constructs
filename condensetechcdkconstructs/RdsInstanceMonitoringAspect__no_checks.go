//go:build no_runtime_type_checking

package condensetechcdkconstructs

// Building without runtime type checking enabled, so all the below just return nil

func (r *jsiiProxy_RdsInstanceMonitoringAspect) validateOverrideConfigParameters(node awsrds.DatabaseInstance, config *RdsInstanceMonitoringConfig) error {
	return nil
}

func (r *jsiiProxy_RdsInstanceMonitoringAspect) validateVisitParameters(node constructs.IConstruct) error {
	return nil
}

func validateNewRdsInstanceMonitoringAspectParameters(monitoringFacade ICondenseMonitoringFacade) error {
	return nil
}

