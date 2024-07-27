package condensetechcdkconstructs

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awscloudwatch"
)

// Experimental.
type AlarmDefinitionProps struct {
	// Experimental.
	AlarmId *string `field:"required" json:"alarmId" yaml:"alarmId"`
	// Experimental.
	EvaluationPeriods *float64 `field:"required" json:"evaluationPeriods" yaml:"evaluationPeriods"`
	// Experimental.
	Metric awscloudwatch.IMetric `field:"required" json:"metric" yaml:"metric"`
	// Experimental.
	AlarmDescription *string `field:"optional" json:"alarmDescription" yaml:"alarmDescription"`
	// Experimental.
	AlarmName *string `field:"optional" json:"alarmName" yaml:"alarmName"`
	// Experimental.
	ComparisonOperator awscloudwatch.ComparisonOperator `field:"optional" json:"comparisonOperator" yaml:"comparisonOperator"`
	// Experimental.
	Threshold *float64 `field:"optional" json:"threshold" yaml:"threshold"`
}

