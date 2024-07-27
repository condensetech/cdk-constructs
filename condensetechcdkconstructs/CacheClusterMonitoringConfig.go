package condensetechcdkconstructs

import (
	"github.com/aws/aws-cdk-go/awscdk/v2"
)

// The CacheClusterMonitoringConfig defines the thresholds for the cache cluster monitoring.
// Experimental.
type CacheClusterMonitoringConfig struct {
	// The CPU Utilization (%) threshold.
	// Default: 90.
	//
	// Experimental.
	CpuUtilizationThreshold *float64 `field:"optional" json:"cpuUtilizationThreshold" yaml:"cpuUtilizationThreshold"`
	// The Engine CPU Utilization (%) threshold.
	// Default: 95.
	//
	// Experimental.
	EngineCpuUtilizationThreshold *float64 `field:"optional" json:"engineCpuUtilizationThreshold" yaml:"engineCpuUtilizationThreshold"`
	// The Max Connections threshold.
	// Default: 60,000.
	//
	// Experimental.
	MaxConnectionsThreshold *float64 `field:"optional" json:"maxConnectionsThreshold" yaml:"maxConnectionsThreshold"`
	// The Memory Usage (%) threshold.
	// Default: 90.
	//
	// Experimental.
	MemoryUsageThreshold *float64 `field:"optional" json:"memoryUsageThreshold" yaml:"memoryUsageThreshold"`
	// The Replication Lag threshold.
	// Default: - No threshold.
	//
	// Experimental.
	ReplicationLagThreshold awscdk.Duration `field:"optional" json:"replicationLagThreshold" yaml:"replicationLagThreshold"`
}

