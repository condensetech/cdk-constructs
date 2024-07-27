//go:build no_runtime_type_checking

package condensetechcdkconstructs

// Building without runtime type checking enabled, so all the below just return nil

func (c *jsiiProxy_CacheClusterMonitoringAspect) validateOverrideConfigParameters(node awselasticache.CfnCacheCluster, config *CacheClusterMonitoringConfig) error {
	return nil
}

func (c *jsiiProxy_CacheClusterMonitoringAspect) validateVisitParameters(node constructs.IConstruct) error {
	return nil
}

func validateNewCacheClusterMonitoringAspectParameters(monitoringFacade ICondenseMonitoringFacade) error {
	return nil
}

