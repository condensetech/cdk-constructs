package condensetechcdkconstructs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/aws/aws-cdk-go/awscdk/v2/awsec2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsrds"
	"github.com/aws/aws-cdk-go/awscdk/v2/awssecretsmanager"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/condensetech/cdk-constructs/condensetechcdkconstructs/internal"
)

// The IDatabase interface allows to write stacks and constructs that depend on a database without being tied to the specific database implementation.
//
// Example:
//   // In this example, MyConstruct is used across several IDatabase implementations without being tied to a specific construct or stack
//
//   interface MyProps {
//     database: IDatabase;
//   }
//
//   class MyConstruct extends Construct {
//     constructor(scope: Construct, id: string, props: MyProps) {
//      super(scope, id);
//      new CfnOutput(this, 'DatabaseEndpoint', { value: props.database.endpoint.hostname });
//     }
//   }
//
//   interface MyStackProps {
//     database3: IDatabase;
//   }
//
//   class MyStack extends cdk.Stack {
//     constructor(scope: Construct, id: string, props: MyStackProps) {
//       super(scope, id, props);
//       new MyConstruct(this, 'MyConstruct1', {
//         database: new AuroraCluster(this, 'Database', { ... })
//       });
//       new MyConstruct(this, 'MyConstruct2', {
//         database: new DatabaseInstance(this, 'Database', { ... })
//       });
//       new MyConstruct(this, 'MyConstruct3', {
//          database: props.database3
//       });
//     }
//   }
//
//   const database3 = new AuroraClustrStack(app, 'AuroraClusterStack', { ... });
//   new MyStack(app, 'MyStack', { database3 });
//
// Experimental.
type IDatabase interface {
	awsec2.IConnectable
	// Utility method that returns the secret with the credentials to access the database in a cross-stack compatible way.
	// Experimental.
	FetchSecret(scope constructs.Construct, id *string) awssecretsmanager.ISecret
	// The endpoint of the database.
	// Experimental.
	Endpoint() awsrds.Endpoint
}

// The jsii proxy for IDatabase
type jsiiProxy_IDatabase struct {
	internal.Type__awsec2IConnectable
}

func (i *jsiiProxy_IDatabase) FetchSecret(scope constructs.Construct, id *string) awssecretsmanager.ISecret {
	if err := i.validateFetchSecretParameters(scope); err != nil {
		panic(err)
	}
	var returns awssecretsmanager.ISecret

	_jsii_.Invoke(
		i,
		"fetchSecret",
		[]interface{}{scope, id},
		&returns,
	)

	return returns
}

func (j *jsiiProxy_IDatabase) Endpoint() awsrds.Endpoint {
	var returns awsrds.Endpoint
	_jsii_.Get(
		j,
		"endpoint",
		&returns,
	)
	return returns
}

