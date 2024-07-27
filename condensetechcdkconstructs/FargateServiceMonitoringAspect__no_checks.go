//go:build no_runtime_type_checking

package condensetechcdkconstructs

// Building without runtime type checking enabled, so all the below just return nil

func (f *jsiiProxy_FargateServiceMonitoringAspect) validateOverrideConfigParameters(node awsecs.FargateService, config *FargateServiceMonitoringConfig) error {
	return nil
}

func (f *jsiiProxy_FargateServiceMonitoringAspect) validateVisitParameters(node constructs.IConstruct) error {
	return nil
}

func validateNewFargateServiceMonitoringAspectParameters(monitoringFacade ICondenseMonitoringFacade) error {
	return nil
}

