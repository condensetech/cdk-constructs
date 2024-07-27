//go:build !no_runtime_type_checking

package condensetechcdkconstructs

import (
	"fmt"

	"github.com/aws/aws-cdk-go/awscdk/v2/awscloudwatch"
)

func (i *jsiiProxy_ICondenseMonitoringFacade) validateAddAlarmParameters(alarm awscloudwatch.Alarm) error {
	if alarm == nil {
		return fmt.Errorf("parameter alarm is required, but nil was provided")
	}

	return nil
}

