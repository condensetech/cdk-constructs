package condensetechcdkconstructs

import (
	"github.com/aws/aws-cdk-go/awscdk/v2"
)

// The RdsClusterMonitoringConfig defines the thresholds for the RDS cluster monitoring.
// Experimental.
type RdsClusterMonitoringConfig struct {
	// The CPU Utilization (%) threshold.
	// Default: 90.
	//
	// Experimental.
	CpuUtilizationThreshold *float64 `field:"optional" json:"cpuUtilizationThreshold" yaml:"cpuUtilizationThreshold"`
	// The EBS Byte Balance (%) threshold.
	// Default: 10.
	//
	// Experimental.
	EbsByteBalanceThreshold *float64 `field:"optional" json:"ebsByteBalanceThreshold" yaml:"ebsByteBalanceThreshold"`
	// The EBS IO Balance (%) threshold.
	// Default: 10.
	//
	// Experimental.
	EbsIoBalanceThreshold *float64 `field:"optional" json:"ebsIoBalanceThreshold" yaml:"ebsIoBalanceThreshold"`
	// The Freeable Memory threshold.
	// Default: 100 MiB.
	//
	// Experimental.
	FreeableMemoryThreshold awscdk.Size `field:"optional" json:"freeableMemoryThreshold" yaml:"freeableMemoryThreshold"`
	// The Max Connections threshold.
	// Default: 50.
	//
	// Experimental.
	MaxConnectionsThreshold *float64 `field:"optional" json:"maxConnectionsThreshold" yaml:"maxConnectionsThreshold"`
	// The Read Latency threshold.
	// Default: 20.
	//
	// Experimental.
	ReadLatencyThreshold *float64 `field:"optional" json:"readLatencyThreshold" yaml:"readLatencyThreshold"`
}

