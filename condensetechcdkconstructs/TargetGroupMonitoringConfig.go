package condensetechcdkconstructs

import (
	"github.com/aws/aws-cdk-go/awscdk/v2"
)

// The TargetGroupMonitoringConfig defines the thresholds for the target group monitoring.
// Experimental.
type TargetGroupMonitoringConfig struct {
	// The Min Healthy Hosts threshold.
	// Default: 1.
	//
	// Experimental.
	MinHealthyHostsThreshold *float64 `field:"optional" json:"minHealthyHostsThreshold" yaml:"minHealthyHostsThreshold"`
	// The Response Time threshold.
	// Default: - No threshold.
	//
	// Experimental.
	ResponseTimeThreshold awscdk.Duration `field:"optional" json:"responseTimeThreshold" yaml:"responseTimeThreshold"`
}

