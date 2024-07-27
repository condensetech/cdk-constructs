package condensetechcdkconstructs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/aws/aws-cdk-go/awscdk/v2/awscloudwatch"
)

// The ICondenseMonitoringFacade interface defines the methods that the monitoring facade must implement.
// Experimental.
type ICondenseMonitoringFacade interface {
	// Add an alarm to the monitoring facade, by linking it to the alarms topic.
	// Experimental.
	AddAlarm(alarm awscloudwatch.Alarm)
	// Returns the Cloudwatch dashboard to be used for this stack monitoring.
	// Experimental.
	Dashboard() awscloudwatch.Dashboard
}

// The jsii proxy for ICondenseMonitoringFacade
type jsiiProxy_ICondenseMonitoringFacade struct {
	_ byte // padding
}

func (i *jsiiProxy_ICondenseMonitoringFacade) AddAlarm(alarm awscloudwatch.Alarm) {
	if err := i.validateAddAlarmParameters(alarm); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addAlarm",
		[]interface{}{alarm},
	)
}

func (j *jsiiProxy_ICondenseMonitoringFacade) Dashboard() awscloudwatch.Dashboard {
	var returns awscloudwatch.Dashboard
	_jsii_.Get(
		j,
		"dashboard",
		&returns,
	)
	return returns
}

