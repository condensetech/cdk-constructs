package condensetechcdkconstructs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/condensetech/cdk-constructs/condensetechcdkconstructs/jsii"

	"github.com/aws/aws-cdk-go/awscdk/v2/awsec2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsrds"
	"github.com/aws/aws-cdk-go/awscdk/v2/awssecretsmanager"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/condensetech/cdk-constructs/condensetechcdkconstructs/internal"
)

// The AuroraCluster Construct creates an opinionated Aurora Cluster.
//
// Under the hood, it creates a [rds.DatabaseCluster](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds-readme.html#starting-a-clustered-database) construct.
// It implements the IDatabase interface so that it can be used in other constructs and stacks without requiring to access to the underlying construct.
//
// It also applies the following changes to the default behavior:
// - A [rds.ParameterGroup](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds-readme.html#parameter-groups) specific for the cluster is always defined.
//   By using a custom parameter group instead of relying on the default one, a later change in the parameter group's parameters wouldn't require a replace of the cluster.
// - The credentials secret name is created after the construct's path. This way, the secret name is more readable and, when working with multiple stacks, can be easily inferred without having to rely on Cloudformation exports.
// - The default instance type for the writer instance is set to a minimum instance type based on the engine type.
// - The storage is always encrypted.
// Experimental.
type AuroraCluster interface {
	constructs.Construct
	IDatabase
	// The network connections associated with this resource.
	// Experimental.
	Connections() awsec2.Connections
	// The database cluster.
	// Experimental.
	DatabaseCluster() awsrds.IDatabaseCluster
	// The endpoint of the database.
	// Experimental.
	Endpoint() awsrds.Endpoint
	// The tree node.
	// Experimental.
	Node() constructs.Node
	// Experimental.
	ParameterGroup() awsrds.ParameterGroup
	// Utility method that returns the secret with the credentials to access the database in a cross-stack compatible way.
	// Experimental.
	FetchSecret(scope constructs.Construct, id *string) awssecretsmanager.ISecret
	// Returns a string representation of this construct.
	// Experimental.
	ToString() *string
}

// The jsii proxy struct for AuroraCluster
type jsiiProxy_AuroraCluster struct {
	internal.Type__constructsConstruct
	jsiiProxy_IDatabase
}

func (j *jsiiProxy_AuroraCluster) Connections() awsec2.Connections {
	var returns awsec2.Connections
	_jsii_.Get(
		j,
		"connections",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AuroraCluster) DatabaseCluster() awsrds.IDatabaseCluster {
	var returns awsrds.IDatabaseCluster
	_jsii_.Get(
		j,
		"databaseCluster",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AuroraCluster) Endpoint() awsrds.Endpoint {
	var returns awsrds.Endpoint
	_jsii_.Get(
		j,
		"endpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AuroraCluster) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_AuroraCluster) ParameterGroup() awsrds.ParameterGroup {
	var returns awsrds.ParameterGroup
	_jsii_.Get(
		j,
		"parameterGroup",
		&returns,
	)
	return returns
}


// Experimental.
func NewAuroraCluster(scope constructs.Construct, id *string, props *AuroraClusterProps) AuroraCluster {
	_init_.Initialize()

	if err := validateNewAuroraClusterParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_AuroraCluster{}

	_jsii_.Create(
		"@condensetech/cdk-constructs.AuroraCluster",
		[]interface{}{scope, id, props},
		&j,
	)

	return &j
}

// Experimental.
func NewAuroraCluster_Override(a AuroraCluster, scope constructs.Construct, id *string, props *AuroraClusterProps) {
	_init_.Initialize()

	_jsii_.Create(
		"@condensetech/cdk-constructs.AuroraCluster",
		[]interface{}{scope, id, props},
		a,
	)
}

// Checks if `x` is a construct.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
// Deprecated: use `x instanceof Construct` instead.
func AuroraCluster_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateAuroraCluster_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@condensetech/cdk-constructs.AuroraCluster",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Returns the minimum instance type supported by the Aurora cluster based on the engine type.
//
// This method is used to set the default instance type for the writer instance if not otherwise specified.
//
// Returns: The minimum instance type supported by the Aurora cluster based on the engine type.
// Experimental.
func AuroraCluster_MinimumInstanceType(engine awsrds.IClusterEngine) awsec2.InstanceType {
	_init_.Initialize()

	if err := validateAuroraCluster_MinimumInstanceTypeParameters(engine); err != nil {
		panic(err)
	}
	var returns awsec2.InstanceType

	_jsii_.StaticInvoke(
		"@condensetech/cdk-constructs.AuroraCluster",
		"minimumInstanceType",
		[]interface{}{engine},
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AuroraCluster) FetchSecret(scope constructs.Construct, id *string) awssecretsmanager.ISecret {
	if err := a.validateFetchSecretParameters(scope); err != nil {
		panic(err)
	}
	var returns awssecretsmanager.ISecret

	_jsii_.Invoke(
		a,
		"fetchSecret",
		[]interface{}{scope, id},
		&returns,
	)

	return returns
}

func (a *jsiiProxy_AuroraCluster) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		a,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

