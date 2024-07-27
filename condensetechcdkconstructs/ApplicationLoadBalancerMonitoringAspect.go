package condensetechcdkconstructs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/condensetech/cdk-constructs/condensetechcdkconstructs/jsii"

	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awselasticloadbalancingv2"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/condensetech/cdk-constructs/condensetechcdkconstructs/internal"
)

// The ApplicationLoadBalancerMonitoringAspect iterates over the Application Load Balancers and adds monitoring widgets and alarms.
// Experimental.
type ApplicationLoadBalancerMonitoringAspect interface {
	awscdk.IAspect
	// Overrides the default configuration for a specific Application Load Balancer.
	// Experimental.
	OverrideConfig(node awselasticloadbalancingv2.ApplicationLoadBalancer, config *ApplicationLoadBalancerMonitoringConfig)
	// All aspects can visit an IConstruct.
	// Experimental.
	Visit(node constructs.IConstruct)
}

// The jsii proxy struct for ApplicationLoadBalancerMonitoringAspect
type jsiiProxy_ApplicationLoadBalancerMonitoringAspect struct {
	internal.Type__awscdkIAspect
}

// Experimental.
func NewApplicationLoadBalancerMonitoringAspect(monitoringFacade ICondenseMonitoringFacade) ApplicationLoadBalancerMonitoringAspect {
	_init_.Initialize()

	if err := validateNewApplicationLoadBalancerMonitoringAspectParameters(monitoringFacade); err != nil {
		panic(err)
	}
	j := jsiiProxy_ApplicationLoadBalancerMonitoringAspect{}

	_jsii_.Create(
		"@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringAspect",
		[]interface{}{monitoringFacade},
		&j,
	)

	return &j
}

// Experimental.
func NewApplicationLoadBalancerMonitoringAspect_Override(a ApplicationLoadBalancerMonitoringAspect, monitoringFacade ICondenseMonitoringFacade) {
	_init_.Initialize()

	_jsii_.Create(
		"@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringAspect",
		[]interface{}{monitoringFacade},
		a,
	)
}

func (a *jsiiProxy_ApplicationLoadBalancerMonitoringAspect) OverrideConfig(node awselasticloadbalancingv2.ApplicationLoadBalancer, config *ApplicationLoadBalancerMonitoringConfig) {
	if err := a.validateOverrideConfigParameters(node, config); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"overrideConfig",
		[]interface{}{node, config},
	)
}

func (a *jsiiProxy_ApplicationLoadBalancerMonitoringAspect) Visit(node constructs.IConstruct) {
	if err := a.validateVisitParameters(node); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"visit",
		[]interface{}{node},
	)
}

