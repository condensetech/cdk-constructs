package condensetechcdkconstructs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/condensetech/cdk-constructs/condensetechcdkconstructs/jsii"

	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awselasticloadbalancingv2"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/condensetech/cdk-constructs/condensetechcdkconstructs/internal"
)

// The TargetGroupMonitoringAspect iterates over the target groups and adds monitoring widgets and alarms.
// Experimental.
type TargetGroupMonitoringAspect interface {
	awscdk.IAspect
	// Experimental.
	MonitoringFacade() ICondenseMonitoringFacade
	// Overrides the default configuration for a specific target group.
	// Experimental.
	OverrideConfig(node awselasticloadbalancingv2.ApplicationTargetGroup, config *TargetGroupMonitoringConfig)
	// All aspects can visit an IConstruct.
	// Experimental.
	Visit(node constructs.IConstruct)
}

// The jsii proxy struct for TargetGroupMonitoringAspect
type jsiiProxy_TargetGroupMonitoringAspect struct {
	internal.Type__awscdkIAspect
}

func (j *jsiiProxy_TargetGroupMonitoringAspect) MonitoringFacade() ICondenseMonitoringFacade {
	var returns ICondenseMonitoringFacade
	_jsii_.Get(
		j,
		"monitoringFacade",
		&returns,
	)
	return returns
}


// Experimental.
func NewTargetGroupMonitoringAspect(monitoringFacade ICondenseMonitoringFacade) TargetGroupMonitoringAspect {
	_init_.Initialize()

	if err := validateNewTargetGroupMonitoringAspectParameters(monitoringFacade); err != nil {
		panic(err)
	}
	j := jsiiProxy_TargetGroupMonitoringAspect{}

	_jsii_.Create(
		"@condensetech/cdk-constructs.TargetGroupMonitoringAspect",
		[]interface{}{monitoringFacade},
		&j,
	)

	return &j
}

// Experimental.
func NewTargetGroupMonitoringAspect_Override(t TargetGroupMonitoringAspect, monitoringFacade ICondenseMonitoringFacade) {
	_init_.Initialize()

	_jsii_.Create(
		"@condensetech/cdk-constructs.TargetGroupMonitoringAspect",
		[]interface{}{monitoringFacade},
		t,
	)
}

func (t *jsiiProxy_TargetGroupMonitoringAspect) OverrideConfig(node awselasticloadbalancingv2.ApplicationTargetGroup, config *TargetGroupMonitoringConfig) {
	if err := t.validateOverrideConfigParameters(node, config); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		t,
		"overrideConfig",
		[]interface{}{node, config},
	)
}

func (t *jsiiProxy_TargetGroupMonitoringAspect) Visit(node constructs.IConstruct) {
	if err := t.validateVisitParameters(node); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		t,
		"visit",
		[]interface{}{node},
	)
}

