//go:build no_runtime_type_checking

package condensetechcdkconstructs

// Building without runtime type checking enabled, so all the below just return nil

func (i *jsiiProxy_ICondenseMonitoringFacade) validateAddAlarmParameters(alarm awscloudwatch.Alarm) error {
	return nil
}

