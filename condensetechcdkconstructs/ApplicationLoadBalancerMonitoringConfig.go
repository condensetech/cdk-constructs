package condensetechcdkconstructs

import (
	"github.com/aws/aws-cdk-go/awscdk/v2"
)

// The ApplicationLoadBalancerMonitoringConfig defines the thresholds for the Application Load Balancer monitoring.
// Experimental.
type ApplicationLoadBalancerMonitoringConfig struct {
	// The Redirect URL Limit Exceeded threshold.
	// Default: 0.
	//
	// Experimental.
	RedirectUrlLimitExceededThreshold *float64 `field:"optional" json:"redirectUrlLimitExceededThreshold" yaml:"redirectUrlLimitExceededThreshold"`
	// The Rejected Connections threshold.
	// Default: 0.
	//
	// Experimental.
	RejectedConnectionsThreshold *float64 `field:"optional" json:"rejectedConnectionsThreshold" yaml:"rejectedConnectionsThreshold"`
	// The Response Time threshold.
	// Default: - No threshold.
	//
	// Experimental.
	ResponseTimeThreshold awscdk.Duration `field:"optional" json:"responseTimeThreshold" yaml:"responseTimeThreshold"`
	// The 5xx Errors threshold.
	// Default: 0.
	//
	// Experimental.
	Target5xxErrorsThreshold *float64 `field:"optional" json:"target5xxErrorsThreshold" yaml:"target5xxErrorsThreshold"`
	// The Target Connection Errors threshold.
	// Default: 0.
	//
	// Experimental.
	TargetConnectionErrorsThreshold *float64 `field:"optional" json:"targetConnectionErrorsThreshold" yaml:"targetConnectionErrorsThreshold"`
}

