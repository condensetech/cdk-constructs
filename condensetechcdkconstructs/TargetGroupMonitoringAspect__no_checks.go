//go:build no_runtime_type_checking

package condensetechcdkconstructs

// Building without runtime type checking enabled, so all the below just return nil

func (t *jsiiProxy_TargetGroupMonitoringAspect) validateOverrideConfigParameters(node awselasticloadbalancingv2.ApplicationTargetGroup, config *TargetGroupMonitoringConfig) error {
	return nil
}

func (t *jsiiProxy_TargetGroupMonitoringAspect) validateVisitParameters(node constructs.IConstruct) error {
	return nil
}

func validateNewTargetGroupMonitoringAspectParameters(monitoringFacade ICondenseMonitoringFacade) error {
	return nil
}

