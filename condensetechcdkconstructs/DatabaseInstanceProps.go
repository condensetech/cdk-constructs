package condensetechcdkconstructs

import (
	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsec2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsrds"
)

// Properties for the DatabaseInstance construct.
// Experimental.
type DatabaseInstanceProps struct {
	// The engine of the database instance.
	// Experimental.
	Engine awsrds.IInstanceEngine `field:"required" json:"engine" yaml:"engine"`
	// The networking configuration for the database instance.
	// Experimental.
	Networking INetworking `field:"required" json:"networking" yaml:"networking"`
	// The allocated storage of the database instance.
	// Default: 20.
	//
	// Experimental.
	AllocatedStorage *float64 `field:"optional" json:"allocatedStorage" yaml:"allocatedStorage"`
	// The backup retention period.
	// Default: - It uses the default applied by [rds.DatabaseInstanceProps#backupRetention]https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds.DatabaseInstanceProps.html#backupretention).
	//
	// Experimental.
	BackupRetention awscdk.Duration `field:"optional" json:"backupRetention" yaml:"backupRetention"`
	// The name of the secret that stores the credentials of the database.
	// Default: `${construct.node.path}/secret`
	//
	// Experimental.
	CredentialsSecretName *string `field:"optional" json:"credentialsSecretName" yaml:"credentialsSecretName"`
	// The name of the database.
	// Default: - No default database is created.
	//
	// Experimental.
	DatabaseName *string `field:"optional" json:"databaseName" yaml:"databaseName"`
	// The identifier of the database instance.
	// Default: - No identifier is specified.
	//
	// Experimental.
	InstanceIdentifier *string `field:"optional" json:"instanceIdentifier" yaml:"instanceIdentifier"`
	// The name of the database instance.
	// Default: - No name is specified.
	//
	// Deprecated: Use `instanceIdentifier` instead.
	InstanceName *string `field:"optional" json:"instanceName" yaml:"instanceName"`
	// The instance type of the database instance.
	// Default: - db.t3.small.
	//
	// Experimental.
	InstanceType awsec2.InstanceType `field:"optional" json:"instanceType" yaml:"instanceType"`
	// If the database instance is multi-AZ.
	// Default: false.
	//
	// Experimental.
	MultiAz *bool `field:"optional" json:"multiAz" yaml:"multiAz"`
	// The storage type of the database instance.
	// Default: rds.StorageType.GP3
	//
	// Experimental.
	StorageType awsrds.StorageType `field:"optional" json:"storageType" yaml:"storageType"`
}

