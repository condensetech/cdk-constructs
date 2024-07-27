package condensetechcdkconstructs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/condensetech/cdk-constructs/condensetechcdkconstructs/jsii"

	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsecs"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/condensetech/cdk-constructs/condensetechcdkconstructs/internal"
)

// The FargateServiceMonitoringAspect iterates over the Fargate services and adds monitoring widgets and alarms.
// Experimental.
type FargateServiceMonitoringAspect interface {
	awscdk.IAspect
	// Overrides the default configuration for a specific Fargate service.
	// Experimental.
	OverrideConfig(node awsecs.FargateService, config *FargateServiceMonitoringConfig)
	// All aspects can visit an IConstruct.
	// Experimental.
	Visit(node constructs.IConstruct)
}

// The jsii proxy struct for FargateServiceMonitoringAspect
type jsiiProxy_FargateServiceMonitoringAspect struct {
	internal.Type__awscdkIAspect
}

// Experimental.
func NewFargateServiceMonitoringAspect(monitoringFacade ICondenseMonitoringFacade) FargateServiceMonitoringAspect {
	_init_.Initialize()

	if err := validateNewFargateServiceMonitoringAspectParameters(monitoringFacade); err != nil {
		panic(err)
	}
	j := jsiiProxy_FargateServiceMonitoringAspect{}

	_jsii_.Create(
		"@condensetech/cdk-constructs.FargateServiceMonitoringAspect",
		[]interface{}{monitoringFacade},
		&j,
	)

	return &j
}

// Experimental.
func NewFargateServiceMonitoringAspect_Override(f FargateServiceMonitoringAspect, monitoringFacade ICondenseMonitoringFacade) {
	_init_.Initialize()

	_jsii_.Create(
		"@condensetech/cdk-constructs.FargateServiceMonitoringAspect",
		[]interface{}{monitoringFacade},
		f,
	)
}

func (f *jsiiProxy_FargateServiceMonitoringAspect) OverrideConfig(node awsecs.FargateService, config *FargateServiceMonitoringConfig) {
	if err := f.validateOverrideConfigParameters(node, config); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		f,
		"overrideConfig",
		[]interface{}{node, config},
	)
}

func (f *jsiiProxy_FargateServiceMonitoringAspect) Visit(node constructs.IConstruct) {
	if err := f.validateVisitParameters(node); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		f,
		"visit",
		[]interface{}{node},
	)
}

