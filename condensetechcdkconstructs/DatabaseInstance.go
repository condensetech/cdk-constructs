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

// The DatabaseInstance construct creates an RDS database instance.
//
// Under the hood, it creates a [rds.DatabaseInstance](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds-readme.html#starting-an-instance-database) construct.
// It implements the IDatabase interface so that it can be used in other constructs and stacks without requiring to access to the underlying construct.
//
// It also applies the following changes to the default behavior:
// - A [rds.ParameterGroup](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds-readme.html#parameter-groups) specific for the cluster is always defined.
//   By using a custom parameter group instead of relying on the default one, a later change in the parameter group's parameters wouldn't require a replace of the cluster.
// - The credentials secret name is created after the construct's path. This way, the secret name is more readable and, when working with multiple stacks, can be easily inferred without having to rely on Cloudformation exports.
// - It defaults the storage type to GP3 when not specified.
// - It defaults the allocated storage to the minimum storage of 20 GB when not specified.
// - The default instance type is set to t3.small.
// - The storage is always encrypted.
// Experimental.
type DatabaseInstance interface {
	constructs.Construct
	IDatabase
	// The network connections associated with this resource.
	// Experimental.
	Connections() awsec2.Connections
	// The endpoint of the database.
	// Experimental.
	Endpoint() awsrds.Endpoint
	// The tree node.
	// Experimental.
	Node() constructs.Node
	// Utility method that returns the secret with the credentials to access the database in a cross-stack compatible way.
	// Experimental.
	FetchSecret(scope constructs.Construct, id *string) awssecretsmanager.ISecret
	// Returns a string representation of this construct.
	// Experimental.
	ToString() *string
}

// The jsii proxy struct for DatabaseInstance
type jsiiProxy_DatabaseInstance struct {
	internal.Type__constructsConstruct
	jsiiProxy_IDatabase
}

func (j *jsiiProxy_DatabaseInstance) Connections() awsec2.Connections {
	var returns awsec2.Connections
	_jsii_.Get(
		j,
		"connections",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DatabaseInstance) Endpoint() awsrds.Endpoint {
	var returns awsrds.Endpoint
	_jsii_.Get(
		j,
		"endpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DatabaseInstance) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}


// Experimental.
func NewDatabaseInstance(scope constructs.Construct, id *string, props *DatabaseInstanceProps) DatabaseInstance {
	_init_.Initialize()

	if err := validateNewDatabaseInstanceParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_DatabaseInstance{}

	_jsii_.Create(
		"@condensetech/cdk-constructs.DatabaseInstance",
		[]interface{}{scope, id, props},
		&j,
	)

	return &j
}

// Experimental.
func NewDatabaseInstance_Override(d DatabaseInstance, scope constructs.Construct, id *string, props *DatabaseInstanceProps) {
	_init_.Initialize()

	_jsii_.Create(
		"@condensetech/cdk-constructs.DatabaseInstance",
		[]interface{}{scope, id, props},
		d,
	)
}

// Checks if `x` is a construct.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
// Deprecated: use `x instanceof Construct` instead.
func DatabaseInstance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateDatabaseInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@condensetech/cdk-constructs.DatabaseInstance",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DatabaseInstance) FetchSecret(scope constructs.Construct, id *string) awssecretsmanager.ISecret {
	if err := d.validateFetchSecretParameters(scope); err != nil {
		panic(err)
	}
	var returns awssecretsmanager.ISecret

	_jsii_.Invoke(
		d,
		"fetchSecret",
		[]interface{}{scope, id},
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DatabaseInstance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		d,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

