package condensetechcdkconstructs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/condensetech/cdk-constructs/condensetechcdkconstructs/jsii"

	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awselasticache"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/condensetech/cdk-constructs/condensetechcdkconstructs/internal"
)

// The CacheClusterMonitoringAspect iterates over the Elasticache clusters and adds monitoring widgets and alarms.
// Experimental.
type CacheClusterMonitoringAspect interface {
	awscdk.IAspect
	// Experimental.
	MonitoringFacade() ICondenseMonitoringFacade
	// Overrides the default configuration for a specific Elasticache cluster.
	// Experimental.
	OverrideConfig(node awselasticache.CfnCacheCluster, config *CacheClusterMonitoringConfig)
	// All aspects can visit an IConstruct.
	// Experimental.
	Visit(node constructs.IConstruct)
}

// The jsii proxy struct for CacheClusterMonitoringAspect
type jsiiProxy_CacheClusterMonitoringAspect struct {
	internal.Type__awscdkIAspect
}

func (j *jsiiProxy_CacheClusterMonitoringAspect) MonitoringFacade() ICondenseMonitoringFacade {
	var returns ICondenseMonitoringFacade
	_jsii_.Get(
		j,
		"monitoringFacade",
		&returns,
	)
	return returns
}


// Experimental.
func NewCacheClusterMonitoringAspect(monitoringFacade ICondenseMonitoringFacade) CacheClusterMonitoringAspect {
	_init_.Initialize()

	if err := validateNewCacheClusterMonitoringAspectParameters(monitoringFacade); err != nil {
		panic(err)
	}
	j := jsiiProxy_CacheClusterMonitoringAspect{}

	_jsii_.Create(
		"@condensetech/cdk-constructs.CacheClusterMonitoringAspect",
		[]interface{}{monitoringFacade},
		&j,
	)

	return &j
}

// Experimental.
func NewCacheClusterMonitoringAspect_Override(c CacheClusterMonitoringAspect, monitoringFacade ICondenseMonitoringFacade) {
	_init_.Initialize()

	_jsii_.Create(
		"@condensetech/cdk-constructs.CacheClusterMonitoringAspect",
		[]interface{}{monitoringFacade},
		c,
	)
}

func (c *jsiiProxy_CacheClusterMonitoringAspect) OverrideConfig(node awselasticache.CfnCacheCluster, config *CacheClusterMonitoringConfig) {
	if err := c.validateOverrideConfigParameters(node, config); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"overrideConfig",
		[]interface{}{node, config},
	)
}

func (c *jsiiProxy_CacheClusterMonitoringAspect) Visit(node constructs.IConstruct) {
	if err := c.validateVisitParameters(node); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"visit",
		[]interface{}{node},
	)
}

