package condensetechcdkconstructs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/condensetech/cdk-constructs/condensetechcdkconstructs/jsii"

	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsrds"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/condensetech/cdk-constructs/condensetechcdkconstructs/internal"
)

// The RdsInstanceMonitoringAspect iterates over the RDS instances and adds monitoring widgets and alarms.
// Experimental.
type RdsInstanceMonitoringAspect interface {
	awscdk.IAspect
	// Overrides the default configuration for the RDS instance.
	// Experimental.
	OverrideConfig(node awsrds.DatabaseInstance, config *RdsInstanceMonitoringConfig)
	// All aspects can visit an IConstruct.
	// Experimental.
	Visit(node constructs.IConstruct)
}

// The jsii proxy struct for RdsInstanceMonitoringAspect
type jsiiProxy_RdsInstanceMonitoringAspect struct {
	internal.Type__awscdkIAspect
}

// Experimental.
func NewRdsInstanceMonitoringAspect(monitoringFacade ICondenseMonitoringFacade) RdsInstanceMonitoringAspect {
	_init_.Initialize()

	if err := validateNewRdsInstanceMonitoringAspectParameters(monitoringFacade); err != nil {
		panic(err)
	}
	j := jsiiProxy_RdsInstanceMonitoringAspect{}

	_jsii_.Create(
		"@condensetech/cdk-constructs.RdsInstanceMonitoringAspect",
		[]interface{}{monitoringFacade},
		&j,
	)

	return &j
}

// Experimental.
func NewRdsInstanceMonitoringAspect_Override(r RdsInstanceMonitoringAspect, monitoringFacade ICondenseMonitoringFacade) {
	_init_.Initialize()

	_jsii_.Create(
		"@condensetech/cdk-constructs.RdsInstanceMonitoringAspect",
		[]interface{}{monitoringFacade},
		r,
	)
}

func (r *jsiiProxy_RdsInstanceMonitoringAspect) OverrideConfig(node awsrds.DatabaseInstance, config *RdsInstanceMonitoringConfig) {
	if err := r.validateOverrideConfigParameters(node, config); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"overrideConfig",
		[]interface{}{node, config},
	)
}

func (r *jsiiProxy_RdsInstanceMonitoringAspect) Visit(node constructs.IConstruct) {
	if err := r.validateVisitParameters(node); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		r,
		"visit",
		[]interface{}{node},
	)
}

