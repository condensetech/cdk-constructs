package condensetechcdkconstructs

import (
	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsroute53"
	"github.com/aws/aws-cdk-go/awscdk/v2/awss3"
)

// Properties for the EntrypointStack.
// Experimental.
type EntrypointStackProps struct {
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
	// Include runtime versioning information in this Stack.
	// Default: `analyticsReporting` setting of containing `App`, or value of
	// 'aws:cdk:version-reporting' context key.
	//
	// Experimental.
	AnalyticsReporting *bool `field:"optional" json:"analyticsReporting" yaml:"analyticsReporting"`
	// Enable this flag to allow native cross region stack references.
	//
	// Enabling this will create a CloudFormation custom resource
	// in both the producing stack and consuming stack in order to perform the export/import
	//
	// This feature is currently experimental.
	// Default: false.
	//
	// Experimental.
	CrossRegionReferences *bool `field:"optional" json:"crossRegionReferences" yaml:"crossRegionReferences"`
	// A description of the stack.
	// Default: - No description.
	//
	// Experimental.
	Description *string `field:"optional" json:"description" yaml:"description"`
	// The AWS environment (account/region) where this stack will be deployed.
	//
	// Set the `region`/`account` fields of `env` to either a concrete value to
	// select the indicated environment (recommended for production stacks), or to
	// the values of environment variables
	// `CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
	// depend on the AWS credentials/configuration that the CDK CLI is executed
	// under (recommended for development stacks).
	//
	// If the `Stack` is instantiated inside a `Stage`, any undefined
	// `region`/`account` fields from `env` will default to the same field on the
	// encompassing `Stage`, if configured there.
	//
	// If either `region` or `account` are not set nor inherited from `Stage`, the
	// Stack will be considered "*environment-agnostic*"". Environment-agnostic
	// stacks can be deployed to any environment but may not be able to take
	// advantage of all features of the CDK. For example, they will not be able to
	// use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
	// automatically translate Service Principals to the right format based on the
	// environment's AWS partition, and other such enhancements.
	//
	// Example:
	//   // Use a concrete account and region to deploy this stack to:
	//   // `.account` and `.region` will simply return these values.
	//   new Stack(app, 'Stack1', {
	//     env: {
	//       account: '123456789012',
	//       region: 'us-east-1'
	//     },
	//   });
	//
	//   // Use the CLI's current credentials to determine the target environment:
	//   // `.account` and `.region` will reflect the account+region the CLI
	//   // is configured to use (based on the user CLI credentials)
	//   new Stack(app, 'Stack2', {
	//     env: {
	//       account: process.env.CDK_DEFAULT_ACCOUNT,
	//       region: process.env.CDK_DEFAULT_REGION
	//     },
	//   });
	//
	//   // Define multiple stacks stage associated with an environment
	//   const myStage = new Stage(app, 'MyStage', {
	//     env: {
	//       account: '123456789012',
	//       region: 'us-east-1'
	//     }
	//   });
	//
	//   // both of these stacks will use the stage's account/region:
	//   // `.account` and `.region` will resolve to the concrete values as above
	//   new MyStack(myStage, 'Stack1');
	//   new YourStack(myStage, 'Stack2');
	//
	//   // Define an environment-agnostic stack:
	//   // `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
	//   // which will only resolve to actual values by CloudFormation during deployment.
	//   new MyStack(app, 'Stack1');
	//
	// Default: - The environment of the containing `Stage` if available,
	// otherwise create the stack will be environment-agnostic.
	//
	// Experimental.
	Env *awscdk.Environment `field:"optional" json:"env" yaml:"env"`
	// Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.
	// Default: - no permissions boundary is applied.
	//
	// Experimental.
	PermissionsBoundary awscdk.PermissionsBoundary `field:"optional" json:"permissionsBoundary" yaml:"permissionsBoundary"`
	// Name to deploy the stack with.
	// Default: - Derived from construct path.
	//
	// Experimental.
	StackName *string `field:"optional" json:"stackName" yaml:"stackName"`
	// Enable this flag to suppress indentation in generated CloudFormation templates.
	//
	// If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
	// context key will be used. If that is not specified, then the
	// default value `false` will be used.
	// Default: - the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.
	//
	// Experimental.
	SuppressTemplateIndentation *bool `field:"optional" json:"suppressTemplateIndentation" yaml:"suppressTemplateIndentation"`
	// Synthesis method to use while deploying this stack.
	//
	// The Stack Synthesizer controls aspects of synthesis and deployment,
	// like how assets are referenced and what IAM roles to use. For more
	// information, see the README of the main CDK package.
	//
	// If not specified, the `defaultStackSynthesizer` from `App` will be used.
	// If that is not specified, `DefaultStackSynthesizer` is used if
	// `@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
	// version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
	// other synthesizer is specified.
	// Default: - The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.
	//
	// Experimental.
	Synthesizer awscdk.IStackSynthesizer `field:"optional" json:"synthesizer" yaml:"synthesizer"`
	// Stack tags that will be applied to all the taggable resources and the stack itself.
	// Default: {}.
	//
	// Experimental.
	Tags *map[string]*string `field:"optional" json:"tags" yaml:"tags"`
	// Whether to enable termination protection for this stack.
	// Default: false.
	//
	// Experimental.
	TerminationProtection *bool `field:"optional" json:"terminationProtection" yaml:"terminationProtection"`
	// The monitoring configuration to apply to this stack.
	// Default: - No monitoring.
	//
	// Experimental.
	Monitoring *MonitoringFacadeProps `field:"optional" json:"monitoring" yaml:"monitoring"`
}

