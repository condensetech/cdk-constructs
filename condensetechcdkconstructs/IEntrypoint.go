package condensetechcdkconstructs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/aws/aws-cdk-go/awscdk/v2/awselasticloadbalancingv2"
	"github.com/aws/constructs-go/constructs/v10"
)

// The Entrypoint LoadBalancer is an Application Load Balancer (ALB) that serves as the centralized entry point for all applications.
//
// This ALB is shared across multiple applications, primarily to optimize infrastructure costs by reducing the need for multiple load balancers.
//
// The IEntrypoint interface defines the common behaviors and properties that various implementations must adhere to.
// This allows stacks and constructs to interact with the entry point without being dependent on a specific implementation, ensuring greater flexibility and maintainability.
// Experimental.
type IEntrypoint interface {
	// Utility method that returns the HTTPS listener of the entrypoint in a cross-stack compatible way.
	// Experimental.
	ReferenceListener(scope constructs.Construct, id *string) awselasticloadbalancingv2.IApplicationListener
	// The ALB that serves as the entrypoint.
	// Experimental.
	Alb() awselasticloadbalancingv2.IApplicationLoadBalancer
	// The domain name to which the entrypoint is associated.
	// Experimental.
	DomainName() *string
}

// The jsii proxy for IEntrypoint
type jsiiProxy_IEntrypoint struct {
	_ byte // padding
}

func (i *jsiiProxy_IEntrypoint) ReferenceListener(scope constructs.Construct, id *string) awselasticloadbalancingv2.IApplicationListener {
	if err := i.validateReferenceListenerParameters(scope, id); err != nil {
		panic(err)
	}
	var returns awselasticloadbalancingv2.IApplicationListener

	_jsii_.Invoke(
		i,
		"referenceListener",
		[]interface{}{scope, id},
		&returns,
	)

	return returns
}

func (j *jsiiProxy_IEntrypoint) Alb() awselasticloadbalancingv2.IApplicationLoadBalancer {
	var returns awselasticloadbalancingv2.IApplicationLoadBalancer
	_jsii_.Get(
		j,
		"alb",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEntrypoint) DomainName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"domainName",
		&returns,
	)
	return returns
}

