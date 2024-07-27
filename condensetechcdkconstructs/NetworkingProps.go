package condensetechcdkconstructs

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awsec2"
)

// Properties for the Networking construct.
// Experimental.
type NetworkingProps struct {
	// Experimental.
	IpAddresses awsec2.IIpAddresses `field:"required" json:"ipAddresses" yaml:"ipAddresses"`
	// Experimental.
	BastionHostAmi awsec2.IMachineImage `field:"optional" json:"bastionHostAmi" yaml:"bastionHostAmi"`
	// Experimental.
	BastionHostEnabled *bool `field:"optional" json:"bastionHostEnabled" yaml:"bastionHostEnabled"`
	// Experimental.
	BastionHostInstanceType awsec2.InstanceType `field:"optional" json:"bastionHostInstanceType" yaml:"bastionHostInstanceType"`
	// Experimental.
	BastionName *string `field:"optional" json:"bastionName" yaml:"bastionName"`
	// Experimental.
	MaxAzs *float64 `field:"optional" json:"maxAzs" yaml:"maxAzs"`
	// Experimental.
	NatGateways *float64 `field:"optional" json:"natGateways" yaml:"natGateways"`
	// Experimental.
	VpcName *string `field:"optional" json:"vpcName" yaml:"vpcName"`
}

