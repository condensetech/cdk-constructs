package condensetechcdkconstructs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/condensetech/cdk-constructs/condensetechcdkconstructs/jsii"

	"github.com/aws/aws-cdk-go/awscdk/v2/awsec2"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/condensetech/cdk-constructs/condensetechcdkconstructs/internal"
)

// The Networking construct creates a VPC which can have public, private, and isolated subnets.
//
// It enforces to define a CIDR block for the VPC, which is a best practice.
//
// If the `natGateways` property is set to a positive integer, the VPC will be created with private subnets that have access to the internet through NAT gateways.
// If instead the `natGateways` property is set to 0, the VPC will have only public and isolated subnets. In this case, the subnets will anyway use a cidrMask of `24`, so that changing the number of NAT gateways will not require to re-provision the VPC.
//
// In addition, this construct can also take care of creating a bastion host in the VPC by using the latest Amazon Linux AMI with the smallest available instance (t4g.nano), if the `bastionHostEnabled` property is set to `true`.
// Experimental.
type Networking interface {
	constructs.Construct
	INetworking
	// Returns the bastion host instance of the VPC, if any.
	// Experimental.
	BastionHost() awsec2.BastionHostLinux
	// Returns if the VPC has private subnets (with access to internet through a NAT gateway).
	// Experimental.
	HasPrivateSubnets() *bool
	// Returns the isolated subnets of the VPC (without access to internet).
	// Experimental.
	IsolatedSubnets() *awsec2.SubnetSelection
	// The tree node.
	// Experimental.
	Node() constructs.Node
	// Returns the private subnets of the VPC (with access to internet through a NAT gateway).
	// Experimental.
	PrivateSubnets() *awsec2.SubnetSelection
	// Returns the public subnets of the VPC.
	// Experimental.
	PublicSubnets() *awsec2.SubnetSelection
	// The VPC where the networking resources are created.
	// Experimental.
	Vpc() awsec2.IVpc
	// Returns a string representation of this construct.
	// Experimental.
	ToString() *string
}

// The jsii proxy struct for Networking
type jsiiProxy_Networking struct {
	internal.Type__constructsConstruct
	jsiiProxy_INetworking
}

func (j *jsiiProxy_Networking) BastionHost() awsec2.BastionHostLinux {
	var returns awsec2.BastionHostLinux
	_jsii_.Get(
		j,
		"bastionHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Networking) HasPrivateSubnets() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"hasPrivateSubnets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Networking) IsolatedSubnets() *awsec2.SubnetSelection {
	var returns *awsec2.SubnetSelection
	_jsii_.Get(
		j,
		"isolatedSubnets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Networking) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Networking) PrivateSubnets() *awsec2.SubnetSelection {
	var returns *awsec2.SubnetSelection
	_jsii_.Get(
		j,
		"privateSubnets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Networking) PublicSubnets() *awsec2.SubnetSelection {
	var returns *awsec2.SubnetSelection
	_jsii_.Get(
		j,
		"publicSubnets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Networking) Vpc() awsec2.IVpc {
	var returns awsec2.IVpc
	_jsii_.Get(
		j,
		"vpc",
		&returns,
	)
	return returns
}


// Experimental.
func NewNetworking(scope constructs.Construct, id *string, props *NetworkingProps) Networking {
	_init_.Initialize()

	if err := validateNewNetworkingParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_Networking{}

	_jsii_.Create(
		"@condensetech/cdk-constructs.Networking",
		[]interface{}{scope, id, props},
		&j,
	)

	return &j
}

// Experimental.
func NewNetworking_Override(n Networking, scope constructs.Construct, id *string, props *NetworkingProps) {
	_init_.Initialize()

	_jsii_.Create(
		"@condensetech/cdk-constructs.Networking",
		[]interface{}{scope, id, props},
		n,
	)
}

// Checks if `x` is a construct.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
// Deprecated: use `x instanceof Construct` instead.
func Networking_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateNetworking_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@condensetech/cdk-constructs.Networking",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (n *jsiiProxy_Networking) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		n,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

