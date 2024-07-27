package condensetechcdkconstructs

import (
	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsrds"
)

// Properties for the AuroraCluster construct.
// Experimental.
type AuroraClusterProps struct {
	// The engine of the Aurora cluster.
	// Experimental.
	Engine awsrds.IClusterEngine `field:"required" json:"engine" yaml:"engine"`
	// The networking configuration for the Aurora cluster.
	// Experimental.
	Networking INetworking `field:"required" json:"networking" yaml:"networking"`
	// The backup retention period.
	// Default: - It uses the default applied by [rds.DatabaseClusterProps#backup](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds.DatabaseClusterProps.html#backup).
	//
	// Experimental.
	BackupRetention awscdk.Duration `field:"optional" json:"backupRetention" yaml:"backupRetention"`
	// The identifier of the cluster.
	//
	// If not specified, it relies on the underlying default naming.
	// Experimental.
	ClusterIdentifier *string `field:"optional" json:"clusterIdentifier" yaml:"clusterIdentifier"`
	// The name of the cluster.
	//
	// If not specified, it relies on the underlying default naming.
	// Deprecated: Use `clusterIdentifier` instead.
	ClusterName *string `field:"optional" json:"clusterName" yaml:"clusterName"`
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
	// If the Aurora cluster is multi-AZ.
	// Default: false.
	//
	// Experimental.
	MultiAz *bool `field:"optional" json:"multiAz" yaml:"multiAz"`
	// The parameters to override in the parameter group.
	// Default: - No parameter is overridden.
	//
	// Experimental.
	Parameters *map[string]*string `field:"optional" json:"parameters" yaml:"parameters"`
	// The reader instances of the Aurora cluster.
	// Default: - No reader instances are created.
	//
	// Experimental.
	Readers *[]awsrds.IClusterInstance `field:"optional" json:"readers" yaml:"readers"`
	// The removal policy to apply when the cluster is removed.
	// Default: RemovalPolicy.RETAIN
	//
	// Experimental.
	RemovalPolicy awscdk.RemovalPolicy `field:"optional" json:"removalPolicy" yaml:"removalPolicy"`
	// The writer instance of the Aurora cluster.
	// Default: - A provisioned instance with the minimum instance type based on the engine type.
	//
	// Experimental.
	Writer awsrds.IClusterInstance `field:"optional" json:"writer" yaml:"writer"`
}

