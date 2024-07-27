package condensetechcdkconstructs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/aws/aws-cdk-go/awscdk/v2/awsec2"
)

// The INetworking interface allows to write stacks and constructs that depend on networking without being tied to the specific networking implementation.
//
// This allows to write composable infrastructures that, depending on the scenario, can split the networking layer in a separate stack or in a construct.
//
// In addition, the INetworking interface imposes a set of properties to ease the development of constructs that depend on networking resources.
// Experimental.
type INetworking interface {
	// Returns the bastion host instance of the VPC, if any.
	// Experimental.
	BastionHost() awsec2.BastionHostLinux
	// Returns if the VPC has private subnets (with access to internet through a NAT gateway).
	// Experimental.
	HasPrivateSubnets() *bool
	// Returns the isolated subnets of the VPC (without access to internet).
	// Experimental.
	IsolatedSubnets() *awsec2.SubnetSelection
	// Returns the private subnets of the VPC (with access to internet through a NAT gateway).
	// Experimental.
	PrivateSubnets() *awsec2.SubnetSelection
	// Returns the public subnets of the VPC.
	// Experimental.
	PublicSubnets() *awsec2.SubnetSelection
	// The VPC where the networking resources are created.
	// Experimental.
	Vpc() awsec2.IVpc
}

// The jsii proxy for INetworking
type jsiiProxy_INetworking struct {
	_ byte // padding
}

func (j *jsiiProxy_INetworking) BastionHost() awsec2.BastionHostLinux {
	var returns awsec2.BastionHostLinux
	_jsii_.Get(
		j,
		"bastionHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworking) HasPrivateSubnets() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"hasPrivateSubnets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworking) IsolatedSubnets() *awsec2.SubnetSelection {
	var returns *awsec2.SubnetSelection
	_jsii_.Get(
		j,
		"isolatedSubnets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworking) PrivateSubnets() *awsec2.SubnetSelection {
	var returns *awsec2.SubnetSelection
	_jsii_.Get(
		j,
		"privateSubnets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworking) PublicSubnets() *awsec2.SubnetSelection {
	var returns *awsec2.SubnetSelection
	_jsii_.Get(
		j,
		"publicSubnets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworking) Vpc() awsec2.IVpc {
	var returns awsec2.IVpc
	_jsii_.Get(
		j,
		"vpc",
		&returns,
	)
	return returns
}

