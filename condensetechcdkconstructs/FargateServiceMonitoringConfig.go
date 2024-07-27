package condensetechcdkconstructs


// The FargateServiceMonitoringConfig defines the thresholds for the Fargate service monitoring.
// Experimental.
type FargateServiceMonitoringConfig struct {
	// The CPU Utilization (%) threshold.
	// Default: 90.
	//
	// Experimental.
	CpuUtilizationThreshold *float64 `field:"optional" json:"cpuUtilizationThreshold" yaml:"cpuUtilizationThreshold"`
	// The Memory Utilization (%) threshold.
	// Default: 90.
	//
	// Experimental.
	MemoryUtilization *float64 `field:"optional" json:"memoryUtilization" yaml:"memoryUtilization"`
}

