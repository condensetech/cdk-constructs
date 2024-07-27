//go:build !no_runtime_type_checking

package condensetechcdkconstructs

import (
	"fmt"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/aws/aws-cdk-go/awscdk/v2/awselasticloadbalancingv2"
	"github.com/aws/constructs-go/constructs/v10"
)

func (t *jsiiProxy_TargetGroupMonitoringAspect) validateOverrideConfigParameters(node awselasticloadbalancingv2.ApplicationTargetGroup, config *TargetGroupMonitoringConfig) error {
	if node == nil {
		return fmt.Errorf("parameter node is required, but nil was provided")
	}

	if config == nil {
		return fmt.Errorf("parameter config is required, but nil was provided")
	}
	if err := _jsii_.ValidateStruct(config, func() string { return "parameter config" }); err != nil {
		return err
	}

	return nil
}

func (t *jsiiProxy_TargetGroupMonitoringAspect) validateVisitParameters(node constructs.IConstruct) error {
	if node == nil {
		return fmt.Errorf("parameter node is required, but nil was provided")
	}

	return nil
}

func validateNewTargetGroupMonitoringAspectParameters(monitoringFacade ICondenseMonitoringFacade) error {
	if monitoringFacade == nil {
		return fmt.Errorf("parameter monitoringFacade is required, but nil was provided")
	}

	return nil
}

