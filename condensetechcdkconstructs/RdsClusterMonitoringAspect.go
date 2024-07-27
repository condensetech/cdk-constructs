package condensetechcdkconstructs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/condensetech/cdk-constructs/condensetechcdkconstructs/jsii"

	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsrds"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/condensetech/cdk-constructs/condensetechcdkconstructs/internal"
)

// The RdsClusterMonitoringAspect iterates over the RDS clusters and adds monitoring widgets and alarms.
// Experimental.
type RdsClusterMonitoringAspect interface {
	awscdk.IAspect
	// Overrides the default configuration for a specific RDS cluster.
	// Experimental.
	OverrideConfig(node awsrds.DatabaseCluster, config *RdsClusterMonitoringConfig)
	// All aspects can visit an IConstruct.
	// Experimental.
	Visit(node constructs.IConstruct)
}

// The jsii proxy struct for RdsClusterMonitoringAspect
type jsiiProxy_RdsClusterMonitoringAspect struct {
	internal.Type__awscdkIAspect
}

// Experimental.
func NewRdsClusterMonitoringAspect(monitoringFacade ICondenseMonitoringFacade) RdsClusterMonitoringAspect {
	_init_.Initialize()

	if err := validateNewRdsClusterMonitoringAspectParameters(monitoringFacade); err != nil {
		panic(err)
	}
	j := jsiiProxy_RdsClusterMonitoringAspect{}

	_jsii_.Create(
		"@condensetech/cdk-constructs.RdsClusterMonitoringAspect",
		[]interface{}{monitoringFacade},
		&j,
	)

	return &j
}

// Experimental.
func NewRdsClusterMonitoringAspect_Override(r RdsClusterMonitoringAspect, monitoringFacade ICondenseMonitoringFacade) {
	_init_.Initialize()

	_jsii_.Create(
		"@condensetech/cdk-constructs.RdsClusterMonitoringAspect",
		[]interface{}{monitoringFacade},
		r,
	)
}

func (r *jsiiProxy_RdsClusterMonitoringAspect) OverrideConfig(node awsrds.DatabaseCluster, config *RdsClusterMonitoringConfig) {
	if err := r.validateOverrideConfigParameters(node, config); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideConfig",
		[]interface{}{node, config},
	)
}

func (r *jsiiProxy_RdsClusterMonitoringAspect) Visit(node constructs.IConstruct) {
	if err := r.validateVisitParameters(node); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"visit",
		[]interface{}{node},
	)
}

