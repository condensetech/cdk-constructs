//go:build !no_runtime_type_checking

package condensetechcdkconstructs

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awscloudwatch"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsecs"
	"github.com/aws/aws-cdk-go/awscdk/v2/awselasticache"
	"github.com/aws/aws-cdk-go/awscdk/v2/awselasticloadbalancingv2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsrds"
	"github.com/aws/constructs-go/constructs/v10"
)

func (m *jsiiProxy_MonitoringFacade) validateAddAlarmParameters(alarm awscloudwatch.Alarm) error {
	if alarm == nil {
		return fmt.Errorf("parameter alarm is required, but nil was provided")
	}

	return nil
}

func (m *jsiiProxy_MonitoringFacade) validateConfigApplicationLoadBalancerParameters(resource awselasticloadbalancingv2.ApplicationLoadBalancer, config *ApplicationLoadBalancerMonitoringConfig) error {
	if resource == nil {
		return fmt.Errorf("parameter resource is required, but nil was provided")
	}

	if config == nil {
		return fmt.Errorf("parameter config is required, but nil was provided")
	}
	if err := _jsii_.ValidateStruct(config, func() string { return "parameter config" }); err != nil {
		return err
	}

	return nil
}

func (m *jsiiProxy_MonitoringFacade) validateConfigCacheClusterParameters(resource awselasticache.CfnCacheCluster, config *CacheClusterMonitoringConfig) error {
	if resource == nil {
		return fmt.Errorf("parameter resource is required, but nil was provided")
	}

	if config == nil {
		return fmt.Errorf("parameter config is required, but nil was provided")
	}
	if err := _jsii_.ValidateStruct(config, func() string { return "parameter config" }); err != nil {
		return err
	}

	return nil
}

func (m *jsiiProxy_MonitoringFacade) validateConfigFargateServiceParameters(resource awsecs.FargateService, config *FargateServiceMonitoringConfig) error {
	if resource == nil {
		return fmt.Errorf("parameter resource is required, but nil was provided")
	}

	if config == nil {
		return fmt.Errorf("parameter config is required, but nil was provided")
	}
	if err := _jsii_.ValidateStruct(config, func() string { return "parameter config" }); err != nil {
		return err
	}

	return nil
}

func (m *jsiiProxy_MonitoringFacade) validateConfigRdsClusterParameters(resource awsrds.DatabaseCluster, config *RdsClusterMonitoringConfig) error {
	if resource == nil {
		return fmt.Errorf("parameter resource is required, but nil was provided")
	}

	if config == nil {
		return fmt.Errorf("parameter config is required, but nil was provided")
	}
	if err := _jsii_.ValidateStruct(config, func() string { return "parameter config" }); err != nil {
		return err
	}

	return nil
}

func (m *jsiiProxy_MonitoringFacade) validateConfigRdsInstanceParameters(resource awsrds.DatabaseInstance, config *RdsInstanceMonitoringConfig) error {
	if resource == nil {
		return fmt.Errorf("parameter resource is required, but nil was provided")
	}

	if config == nil {
		return fmt.Errorf("parameter config is required, but nil was provided")
	}
	if err := _jsii_.ValidateStruct(config, func() string { return "parameter config" }); err != nil {
		return err
	}

	return nil
}

func (m *jsiiProxy_MonitoringFacade) validateConfigTargetGroupParameters(resource awselasticloadbalancingv2.ApplicationTargetGroup, config *TargetGroupMonitoringConfig) error {
	if resource == nil {
		return fmt.Errorf("parameter resource is required, but nil was provided")
	}

	if config == nil {
		return fmt.Errorf("parameter config is required, but nil was provided")
	}
	if err := _jsii_.ValidateStruct(config, func() string { return "parameter config" }); err != nil {
		return err
	}

	return nil
}

func validateMonitoringFacade_OfParameters(scope constructs.Construct) error {
	if scope == nil {
		return fmt.Errorf("parameter scope is required, but nil was provided")
	}

	return nil
}

func validateNewMonitoringFacadeParameters(scope awscdk.Stack, props *MonitoringFacadeProps) error {
	if scope == nil {
		return fmt.Errorf("parameter scope is required, but nil was provided")
	}

	if props == nil {
		return fmt.Errorf("parameter props is required, but nil was provided")
	}
	if err := _jsii_.ValidateStruct(props, func() string { return "parameter props" }); err != nil {
		return err
	}

	return nil
}

