//go:build no_runtime_type_checking

package condensetechcdkconstructs

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_ApplicationLoadBalancerMonitoringAspect) validateOverrideConfigParameters(node awselasticloadbalancingv2.ApplicationLoadBalancer, config *ApplicationLoadBalancerMonitoringConfig) error {
	return nil
}

func (a *jsiiProxy_ApplicationLoadBalancerMonitoringAspect) validateVisitParameters(node constructs.IConstruct) error {
	return nil
}

func validateNewApplicationLoadBalancerMonitoringAspectParameters(monitoringFacade ICondenseMonitoringFacade) error {
	return nil
}

