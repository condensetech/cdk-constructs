package condensetechcdkconstructs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/condensetech/cdk-constructs/condensetechcdkconstructs/jsii"

	"github.com/aws/aws-cdk-go/awscdk/v2/awsec2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awselasticloadbalancingv2"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/condensetech/cdk-constructs/condensetechcdkconstructs/internal"
)

// The Entrypoint construct creates an Application Load Balancer (ALB) that serves as the centralized entry point for all applications.
//
// This ALB is shared across multiple applications, primarily to optimize infrastructure costs by reducing the need for multiple load balancers.
// It implements the IEntrypoint interface so that it can be used in other constructs and stacks without requiring to access to the underlying construct.
//
// It creates an HTTPS certificate, bound to the domain name and all subdomains (unless wildcardCertificate is set to false).
// It creates an ALB with:
// - an HTTP listener that redirects all traffic to HTTPS.
// - an HTTPS listener that returns a 403 Forbidden response by default.
// - a custom security group. This allows to expose the security group as a property of the entrypoint construct, making it easier to reference it in other constructs.
// Finally, it creates the Route 53 A and AAAA record that point to the ALB.
// Experimental.
type Entrypoint interface {
	constructs.Construct
	IEntrypoint
	// The ALB that serves as the entrypoint.
	// Experimental.
	Alb() awselasticloadbalancingv2.IApplicationLoadBalancer
	// The domain name to which the entrypoint is associated.
	// Experimental.
	DomainName() *string
	// Experimental.
	Listener() awselasticloadbalancingv2.IApplicationListener
	// The tree node.
	// Experimental.
	Node() constructs.Node
	// Experimental.
	SecurityGroup() awsec2.ISecurityGroup
	// Utility method that returns the HTTPS listener of the entrypoint in a cross-stack compatible way.
	// Experimental.
	ReferenceListener(scope constructs.Construct, id *string) awselasticloadbalancingv2.IApplicationListener
	// Returns a string representation of this construct.
	// Experimental.
	ToString() *string
}

// The jsii proxy struct for Entrypoint
type jsiiProxy_Entrypoint struct {
	internal.Type__constructsConstruct
	jsiiProxy_IEntrypoint
}

func (j *jsiiProxy_Entrypoint) Alb() awselasticloadbalancingv2.IApplicationLoadBalancer {
	var returns awselasticloadbalancingv2.IApplicationLoadBalancer
	_jsii_.Get(
		j,
		"alb",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Entrypoint) DomainName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"domainName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Entrypoint) Listener() awselasticloadbalancingv2.IApplicationListener {
	var returns awselasticloadbalancingv2.IApplicationListener
	_jsii_.Get(
		j,
		"listener",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Entrypoint) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Entrypoint) SecurityGroup() awsec2.ISecurityGroup {
	var returns awsec2.ISecurityGroup
	_jsii_.Get(
		j,
		"securityGroup",
		&returns,
	)
	return returns
}


// Experimental.
func NewEntrypoint(scope constructs.Construct, id *string, props *EntrypointProps) Entrypoint {
	_init_.Initialize()

	if err := validateNewEntrypointParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_Entrypoint{}

	_jsii_.Create(
		"@condensetech/cdk-constructs.Entrypoint",
		[]interface{}{scope, id, props},
		&j,
	)

	return &j
}

// Experimental.
func NewEntrypoint_Override(e Entrypoint, scope constructs.Construct, id *string, props *EntrypointProps) {
	_init_.Initialize()

	_jsii_.Create(
		"@condensetech/cdk-constructs.Entrypoint",
		[]interface{}{scope, id, props},
		e,
	)
}

// Checks if `x` is a construct.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
// Deprecated: use `x instanceof Construct` instead.
func Entrypoint_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateEntrypoint_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@condensetech/cdk-constructs.Entrypoint",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_Entrypoint) ReferenceListener(scope constructs.Construct, id *string) awselasticloadbalancingv2.IApplicationListener {
	if err := e.validateReferenceListenerParameters(scope, id); err != nil {
		panic(err)
	}
	var returns awselasticloadbalancingv2.IApplicationListener

	_jsii_.Invoke(
		e,
		"referenceListener",
		[]interface{}{scope, id},
		&returns,
	)

	return returns
}

func (e *jsiiProxy_Entrypoint) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		e,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

