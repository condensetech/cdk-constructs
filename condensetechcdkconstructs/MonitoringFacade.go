package condensetechcdkconstructs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/condensetech/cdk-constructs/condensetechcdkconstructs/jsii"

	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awscloudwatch"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsecs"
	"github.com/aws/aws-cdk-go/awscdk/v2/awselasticache"
	"github.com/aws/aws-cdk-go/awscdk/v2/awselasticloadbalancingv2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsrds"
	"github.com/aws/aws-cdk-go/awscdk/v2/awssns"
	"github.com/aws/constructs-go/constructs/v10"
)

// The MonitoringFacade creates a Cloudwatch dashboard and applies monitoring aspects to resources.
//
// These aspects will scan for resources, create alarms and add metrics to the MonitoringFacade dashboard.
//
// This allow to have a centralized monitoring configuration for all resources in the stack.
//
// Additionally, the `config*` methods allow to override the default configuration for a specific resource.
//
// Example:
//   class MyStack extends cdk.Stack {
//     constructor(scope: Construct, id: string, props: cdk.StackProps) {
//       super(scope, id, props);
//
//       const cluster = new AuroraCluster(this, 'DatabaseCluster', { ... });
//
//       // Even if the MonitoringFacade is built after the AuroraCluster, the cluster will be monitored, because the aspects are executed after the stack is built.
//       const monitoring = new MonitoringFacade(this, { topicArn: 'arn:aws:sns:us-east-1:123456789012:MyTopic' });
//
//       const cluster2 = new AuroraCluster(this, 'DatabaseCluster2', { ... });
//       // The monitoring configuration for the second cluster is modified so that the CPU utilization alarm is triggered when the utilization is over the 10%.
//       monitoring.configRdsCluster(cluster2, {
//         cpuUtilizationThreshold: 0.1,
//       });
//     }
//   }
//
// Experimental.
type MonitoringFacade interface {
	ICondenseMonitoringFacade
	// Experimental.
	AlarmTopic() awssns.ITopic
	// Returns the Cloudwatch dashboard to be used for this stack monitoring.
	// Experimental.
	Dashboard() awscloudwatch.Dashboard
	// Add an alarm to the monitoring facade, by linking it to the alarms topic.
	// Experimental.
	AddAlarm(alarm awscloudwatch.Alarm)
	// Overrides the default configuration for a specific Application Load Balancer.
	// Experimental.
	ConfigApplicationLoadBalancer(resource awselasticloadbalancingv2.ApplicationLoadBalancer, config *ApplicationLoadBalancerMonitoringConfig)
	// Overrides the default configuration for a specific Elasticache cluster.
	// Experimental.
	ConfigCacheCluster(resource awselasticache.CfnCacheCluster, config *CacheClusterMonitoringConfig)
	// Overrides the default configuration for a specific ECS Fargate service.
	// Experimental.
	ConfigFargateService(resource awsecs.FargateService, config *FargateServiceMonitoringConfig)
	// Overrides the default configuration for a specific RDS cluster.
	// Experimental.
	ConfigRdsCluster(resource awsrds.DatabaseCluster, config *RdsClusterMonitoringConfig)
	// Overrides the default configuration for a specific RDS instance.
	// Experimental.
	ConfigRdsInstance(resource awsrds.DatabaseInstance, config *RdsInstanceMonitoringConfig)
	// Overrides the default configuration for a specific ELBv2 Target Group.
	// Experimental.
	ConfigTargetGroup(resource awselasticloadbalancingv2.ApplicationTargetGroup, config *TargetGroupMonitoringConfig)
}

// The jsii proxy struct for MonitoringFacade
type jsiiProxy_MonitoringFacade struct {
	jsiiProxy_ICondenseMonitoringFacade
}

func (j *jsiiProxy_MonitoringFacade) AlarmTopic() awssns.ITopic {
	var returns awssns.ITopic
	_jsii_.Get(
		j,
		"alarmTopic",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_MonitoringFacade) Dashboard() awscloudwatch.Dashboard {
	var returns awscloudwatch.Dashboard
	_jsii_.Get(
		j,
		"dashboard",
		&returns,
	)
	return returns
}


// Experimental.
func NewMonitoringFacade(scope awscdk.Stack, props *MonitoringFacadeProps) MonitoringFacade {
	_init_.Initialize()

	if err := validateNewMonitoringFacadeParameters(scope, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_MonitoringFacade{}

	_jsii_.Create(
		"@condensetech/cdk-constructs.MonitoringFacade",
		[]interface{}{scope, props},
		&j,
	)

	return &j
}

// Experimental.
func NewMonitoringFacade_Override(m MonitoringFacade, scope awscdk.Stack, props *MonitoringFacadeProps) {
	_init_.Initialize()

	_jsii_.Create(
		"@condensetech/cdk-constructs.MonitoringFacade",
		[]interface{}{scope, props},
		m,
	)
}

// Experimental.
func MonitoringFacade_Of(scope constructs.Construct) MonitoringFacade {
	_init_.Initialize()

	if err := validateMonitoringFacade_OfParameters(scope); err != nil {
		panic(err)
	}
	var returns MonitoringFacade

	_jsii_.StaticInvoke(
		"@condensetech/cdk-constructs.MonitoringFacade",
		"of",
		[]interface{}{scope},
		&returns,
	)

	return returns
}

func (m *jsiiProxy_MonitoringFacade) AddAlarm(alarm awscloudwatch.Alarm) {
	if err := m.validateAddAlarmParameters(alarm); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		m,
		"addAlarm",
		[]interface{}{alarm},
	)
}

func (m *jsiiProxy_MonitoringFacade) ConfigApplicationLoadBalancer(resource awselasticloadbalancingv2.ApplicationLoadBalancer, config *ApplicationLoadBalancerMonitoringConfig) {
	if err := m.validateConfigApplicationLoadBalancerParameters(resource, config); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		m,
		"configApplicationLoadBalancer",
		[]interface{}{resource, config},
	)
}

func (m *jsiiProxy_MonitoringFacade) ConfigCacheCluster(resource awselasticache.CfnCacheCluster, config *CacheClusterMonitoringConfig) {
	if err := m.validateConfigCacheClusterParameters(resource, config); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		m,
		"configCacheCluster",
		[]interface{}{resource, config},
	)
}

func (m *jsiiProxy_MonitoringFacade) ConfigFargateService(resource awsecs.FargateService, config *FargateServiceMonitoringConfig) {
	if err := m.validateConfigFargateServiceParameters(resource, config); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		m,
		"configFargateService",
		[]interface{}{resource, config},
	)
}

func (m *jsiiProxy_MonitoringFacade) ConfigRdsCluster(resource awsrds.DatabaseCluster, config *RdsClusterMonitoringConfig) {
	if err := m.validateConfigRdsClusterParameters(resource, config); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		m,
		"configRdsCluster",
		[]interface{}{resource, config},
	)
}

func (m *jsiiProxy_MonitoringFacade) ConfigRdsInstance(resource awsrds.DatabaseInstance, config *RdsInstanceMonitoringConfig) {
	if err := m.validateConfigRdsInstanceParameters(resource, config); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		m,
		"configRdsInstance",
		[]interface{}{resource, config},
	)
}

func (m *jsiiProxy_MonitoringFacade) ConfigTargetGroup(resource awselasticloadbalancingv2.ApplicationTargetGroup, config *TargetGroupMonitoringConfig) {
	if err := m.validateConfigTargetGroupParameters(resource, config); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		m,
		"configTargetGroup",
		[]interface{}{resource, config},
	)
}

