package condensetechcdkconstructs

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awsroute53"
	"github.com/aws/aws-cdk-go/awscdk/v2/awss3"
)

// Properties for the Entrypoint construct.
// Experimental.
type EntrypointProps struct {
	// The domain name to which the entrypoint is associated.
	// Experimental.
	DomainName *string `field:"required" json:"domainName" yaml:"domainName"`
	// The Route 53 hosted zone attributes for the domain name.
	// Experimental.
	HostedZoneProps *awsroute53.HostedZoneAttributes `field:"required" json:"hostedZoneProps" yaml:"hostedZoneProps"`
	// The networking configuration for the entrypoint.
	// Experimental.
	Networking INetworking `field:"required" json:"networking" yaml:"networking"`
	// The name of the entrypoint.
	//
	// This value is used as the name of the underlying Application Load Balancer (ALB)
	// and as the prefix for the name of the associated security group.
	// Default: - No name is specified.
	//
	// Experimental.
	EntrypointName *string `field:"optional" json:"entrypointName" yaml:"entrypointName"`
	// The name of the security group for the entrypoint.
	// Default: `${entrypointName}-sg`.
	//
	// Deprecated: Use `securityGroupName` instead.
	EntrypointSecurityGroupName *string `field:"optional" json:"entrypointSecurityGroupName" yaml:"entrypointSecurityGroupName"`
	// The S3 bucket to store the logs of the ALB.
	//
	// Setting this will enable the access logs for the ALB.
	// Default: - Logging is disabled.
	//
	// Experimental.
	LogsBucket awss3.IBucket `field:"optional" json:"logsBucket" yaml:"logsBucket"`
	// The name of the security group for the entrypoint.
	// Default: `${entrypointName}-sg` if `entrypointName` is specified, otherwise no name is specified.
	//
	// Experimental.
	SecurityGroupName *string `field:"optional" json:"securityGroupName" yaml:"securityGroupName"`
	// Indicates whether the HTTPS certificate should be bound to all subdomains.
	// Default: true.
	//
	// Experimental.
	WildcardCertificate *bool `field:"optional" json:"wildcardCertificate" yaml:"wildcardCertificate"`
}

