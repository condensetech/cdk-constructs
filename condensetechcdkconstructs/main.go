// Condense's opinionated constructs and stacks for AWS CDK
package condensetechcdkconstructs

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.AlarmDefinitionProps",
		reflect.TypeOf((*AlarmDefinitionProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringAspect",
		reflect.TypeOf((*ApplicationLoadBalancerMonitoringAspect)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "overrideConfig", GoMethod: "OverrideConfig"},
			_jsii_.MemberMethod{JsiiMethod: "visit", GoMethod: "Visit"},
		},
		func() interface{} {
			j := jsiiProxy_ApplicationLoadBalancerMonitoringAspect{}
			_jsii_.InitJsiiProxy(&j.Type__awscdkIAspect)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringConfig",
		reflect.TypeOf((*ApplicationLoadBalancerMonitoringConfig)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.AuroraCluster",
		reflect.TypeOf((*AuroraCluster)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "connections", GoGetter: "Connections"},
			_jsii_.MemberProperty{JsiiProperty: "databaseCluster", GoGetter: "DatabaseCluster"},
			_jsii_.MemberProperty{JsiiProperty: "endpoint", GoGetter: "Endpoint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchSecret", GoMethod: "FetchSecret"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "parameterGroup", GoGetter: "ParameterGroup"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_AuroraCluster{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IDatabase)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.AuroraClusterProps",
		reflect.TypeOf((*AuroraClusterProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.AuroraClusterStack",
		reflect.TypeOf((*AuroraClusterStack)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "account", GoGetter: "Account"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addMetadata", GoMethod: "AddMetadata"},
			_jsii_.MemberMethod{JsiiMethod: "addTransform", GoMethod: "AddTransform"},
			_jsii_.MemberMethod{JsiiMethod: "allocateLogicalId", GoMethod: "AllocateLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "artifactId", GoGetter: "ArtifactId"},
			_jsii_.MemberProperty{JsiiProperty: "availabilityZones", GoGetter: "AvailabilityZones"},
			_jsii_.MemberProperty{JsiiProperty: "bundlingRequired", GoGetter: "BundlingRequired"},
			_jsii_.MemberProperty{JsiiProperty: "connections", GoGetter: "Connections"},
			_jsii_.MemberProperty{JsiiProperty: "dependencies", GoGetter: "Dependencies"},
			_jsii_.MemberProperty{JsiiProperty: "endpoint", GoGetter: "Endpoint"},
			_jsii_.MemberProperty{JsiiProperty: "environment", GoGetter: "Environment"},
			_jsii_.MemberMethod{JsiiMethod: "exportStringListValue", GoMethod: "ExportStringListValue"},
			_jsii_.MemberMethod{JsiiMethod: "exportValue", GoMethod: "ExportValue"},
			_jsii_.MemberMethod{JsiiMethod: "fetchSecret", GoMethod: "FetchSecret"},
			_jsii_.MemberMethod{JsiiMethod: "formatArn", GoMethod: "FormatArn"},
			_jsii_.MemberMethod{JsiiMethod: "getLogicalId", GoMethod: "GetLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "nested", GoGetter: "Nested"},
			_jsii_.MemberProperty{JsiiProperty: "nestedStackParent", GoGetter: "NestedStackParent"},
			_jsii_.MemberProperty{JsiiProperty: "nestedStackResource", GoGetter: "NestedStackResource"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "notificationArns", GoGetter: "NotificationArns"},
			_jsii_.MemberProperty{JsiiProperty: "partition", GoGetter: "Partition"},
			_jsii_.MemberProperty{JsiiProperty: "region", GoGetter: "Region"},
			_jsii_.MemberMethod{JsiiMethod: "regionalFact", GoMethod: "RegionalFact"},
			_jsii_.MemberMethod{JsiiMethod: "renameLogicalId", GoMethod: "RenameLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "reportMissingContextKey", GoMethod: "ReportMissingContextKey"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "splitArn", GoMethod: "SplitArn"},
			_jsii_.MemberProperty{JsiiProperty: "stackId", GoGetter: "StackId"},
			_jsii_.MemberProperty{JsiiProperty: "stackName", GoGetter: "StackName"},
			_jsii_.MemberProperty{JsiiProperty: "synthesizer", GoGetter: "Synthesizer"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberProperty{JsiiProperty: "templateFile", GoGetter: "TemplateFile"},
			_jsii_.MemberProperty{JsiiProperty: "templateOptions", GoGetter: "TemplateOptions"},
			_jsii_.MemberProperty{JsiiProperty: "terminationProtection", GoGetter: "TerminationProtection"},
			_jsii_.MemberMethod{JsiiMethod: "toJsonString", GoMethod: "ToJsonString"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "toYamlString", GoMethod: "ToYamlString"},
			_jsii_.MemberProperty{JsiiProperty: "urlSuffix", GoGetter: "UrlSuffix"},
		},
		func() interface{} {
			j := jsiiProxy_AuroraClusterStack{}
			_jsii_.InitJsiiProxy(&j.Type__awscdkStack)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IDatabase)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.AuroraClusterStackProps",
		reflect.TypeOf((*AuroraClusterStackProps)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.BuildAlarmsProps",
		reflect.TypeOf((*BuildAlarmsProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.CacheClusterMonitoringAspect",
		reflect.TypeOf((*CacheClusterMonitoringAspect)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "monitoringFacade", GoGetter: "MonitoringFacade"},
			_jsii_.MemberMethod{JsiiMethod: "overrideConfig", GoMethod: "OverrideConfig"},
			_jsii_.MemberMethod{JsiiMethod: "visit", GoMethod: "Visit"},
		},
		func() interface{} {
			j := jsiiProxy_CacheClusterMonitoringAspect{}
			_jsii_.InitJsiiProxy(&j.Type__awscdkIAspect)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.CacheClusterMonitoringConfig",
		reflect.TypeOf((*CacheClusterMonitoringConfig)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.CloudwatchAlarmsDiscordConfig",
		reflect.TypeOf((*CloudwatchAlarmsDiscordConfig)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack",
		reflect.TypeOf((*CloudwatchAlarmsTopicStack)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "account", GoGetter: "Account"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addMetadata", GoMethod: "AddMetadata"},
			_jsii_.MemberMethod{JsiiMethod: "addTransform", GoMethod: "AddTransform"},
			_jsii_.MemberProperty{JsiiProperty: "alarmsTopic", GoGetter: "AlarmsTopic"},
			_jsii_.MemberMethod{JsiiMethod: "allocateLogicalId", GoMethod: "AllocateLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "artifactId", GoGetter: "ArtifactId"},
			_jsii_.MemberProperty{JsiiProperty: "availabilityZones", GoGetter: "AvailabilityZones"},
			_jsii_.MemberProperty{JsiiProperty: "bundlingRequired", GoGetter: "BundlingRequired"},
			_jsii_.MemberProperty{JsiiProperty: "dependencies", GoGetter: "Dependencies"},
			_jsii_.MemberProperty{JsiiProperty: "environment", GoGetter: "Environment"},
			_jsii_.MemberMethod{JsiiMethod: "exportStringListValue", GoMethod: "ExportStringListValue"},
			_jsii_.MemberMethod{JsiiMethod: "exportValue", GoMethod: "ExportValue"},
			_jsii_.MemberMethod{JsiiMethod: "formatArn", GoMethod: "FormatArn"},
			_jsii_.MemberMethod{JsiiMethod: "getLogicalId", GoMethod: "GetLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "nested", GoGetter: "Nested"},
			_jsii_.MemberProperty{JsiiProperty: "nestedStackParent", GoGetter: "NestedStackParent"},
			_jsii_.MemberProperty{JsiiProperty: "nestedStackResource", GoGetter: "NestedStackResource"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "notificationArns", GoGetter: "NotificationArns"},
			_jsii_.MemberProperty{JsiiProperty: "partition", GoGetter: "Partition"},
			_jsii_.MemberProperty{JsiiProperty: "region", GoGetter: "Region"},
			_jsii_.MemberMethod{JsiiMethod: "regionalFact", GoMethod: "RegionalFact"},
			_jsii_.MemberMethod{JsiiMethod: "renameLogicalId", GoMethod: "RenameLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "reportMissingContextKey", GoMethod: "ReportMissingContextKey"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "splitArn", GoMethod: "SplitArn"},
			_jsii_.MemberProperty{JsiiProperty: "stackId", GoGetter: "StackId"},
			_jsii_.MemberProperty{JsiiProperty: "stackName", GoGetter: "StackName"},
			_jsii_.MemberProperty{JsiiProperty: "synthesizer", GoGetter: "Synthesizer"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberProperty{JsiiProperty: "templateFile", GoGetter: "TemplateFile"},
			_jsii_.MemberProperty{JsiiProperty: "templateOptions", GoGetter: "TemplateOptions"},
			_jsii_.MemberProperty{JsiiProperty: "terminationProtection", GoGetter: "TerminationProtection"},
			_jsii_.MemberMethod{JsiiMethod: "toJsonString", GoMethod: "ToJsonString"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "toYamlString", GoMethod: "ToYamlString"},
			_jsii_.MemberProperty{JsiiProperty: "urlSuffix", GoGetter: "UrlSuffix"},
		},
		func() interface{} {
			j := jsiiProxy_CloudwatchAlarmsTopicStack{}
			_jsii_.InitJsiiProxy(&j.Type__awscdkStack)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps",
		reflect.TypeOf((*CloudwatchAlarmsTopicStackProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.DatabaseInstance",
		reflect.TypeOf((*DatabaseInstance)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "connections", GoGetter: "Connections"},
			_jsii_.MemberProperty{JsiiProperty: "endpoint", GoGetter: "Endpoint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchSecret", GoMethod: "FetchSecret"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_DatabaseInstance{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IDatabase)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.DatabaseInstanceProps",
		reflect.TypeOf((*DatabaseInstanceProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.DatabaseInstanceStack",
		reflect.TypeOf((*DatabaseInstanceStack)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "account", GoGetter: "Account"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addMetadata", GoMethod: "AddMetadata"},
			_jsii_.MemberMethod{JsiiMethod: "addTransform", GoMethod: "AddTransform"},
			_jsii_.MemberMethod{JsiiMethod: "allocateLogicalId", GoMethod: "AllocateLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "artifactId", GoGetter: "ArtifactId"},
			_jsii_.MemberProperty{JsiiProperty: "availabilityZones", GoGetter: "AvailabilityZones"},
			_jsii_.MemberProperty{JsiiProperty: "bundlingRequired", GoGetter: "BundlingRequired"},
			_jsii_.MemberProperty{JsiiProperty: "connections", GoGetter: "Connections"},
			_jsii_.MemberProperty{JsiiProperty: "dependencies", GoGetter: "Dependencies"},
			_jsii_.MemberProperty{JsiiProperty: "endpoint", GoGetter: "Endpoint"},
			_jsii_.MemberProperty{JsiiProperty: "environment", GoGetter: "Environment"},
			_jsii_.MemberMethod{JsiiMethod: "exportStringListValue", GoMethod: "ExportStringListValue"},
			_jsii_.MemberMethod{JsiiMethod: "exportValue", GoMethod: "ExportValue"},
			_jsii_.MemberMethod{JsiiMethod: "fetchSecret", GoMethod: "FetchSecret"},
			_jsii_.MemberMethod{JsiiMethod: "formatArn", GoMethod: "FormatArn"},
			_jsii_.MemberMethod{JsiiMethod: "getLogicalId", GoMethod: "GetLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "nested", GoGetter: "Nested"},
			_jsii_.MemberProperty{JsiiProperty: "nestedStackParent", GoGetter: "NestedStackParent"},
			_jsii_.MemberProperty{JsiiProperty: "nestedStackResource", GoGetter: "NestedStackResource"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "notificationArns", GoGetter: "NotificationArns"},
			_jsii_.MemberProperty{JsiiProperty: "partition", GoGetter: "Partition"},
			_jsii_.MemberProperty{JsiiProperty: "region", GoGetter: "Region"},
			_jsii_.MemberMethod{JsiiMethod: "regionalFact", GoMethod: "RegionalFact"},
			_jsii_.MemberMethod{JsiiMethod: "renameLogicalId", GoMethod: "RenameLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "reportMissingContextKey", GoMethod: "ReportMissingContextKey"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "splitArn", GoMethod: "SplitArn"},
			_jsii_.MemberProperty{JsiiProperty: "stackId", GoGetter: "StackId"},
			_jsii_.MemberProperty{JsiiProperty: "stackName", GoGetter: "StackName"},
			_jsii_.MemberProperty{JsiiProperty: "synthesizer", GoGetter: "Synthesizer"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberProperty{JsiiProperty: "templateFile", GoGetter: "TemplateFile"},
			_jsii_.MemberProperty{JsiiProperty: "templateOptions", GoGetter: "TemplateOptions"},
			_jsii_.MemberProperty{JsiiProperty: "terminationProtection", GoGetter: "TerminationProtection"},
			_jsii_.MemberMethod{JsiiMethod: "toJsonString", GoMethod: "ToJsonString"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "toYamlString", GoMethod: "ToYamlString"},
			_jsii_.MemberProperty{JsiiProperty: "urlSuffix", GoGetter: "UrlSuffix"},
		},
		func() interface{} {
			j := jsiiProxy_DatabaseInstanceStack{}
			_jsii_.InitJsiiProxy(&j.Type__awscdkStack)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IDatabase)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.DatabaseInstanceStackProps",
		reflect.TypeOf((*DatabaseInstanceStackProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.Entrypoint",
		reflect.TypeOf((*Entrypoint)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "alb", GoGetter: "Alb"},
			_jsii_.MemberProperty{JsiiProperty: "domainName", GoGetter: "DomainName"},
			_jsii_.MemberProperty{JsiiProperty: "listener", GoGetter: "Listener"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "referenceListener", GoMethod: "ReferenceListener"},
			_jsii_.MemberProperty{JsiiProperty: "securityGroup", GoGetter: "SecurityGroup"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_Entrypoint{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IEntrypoint)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.EntrypointProps",
		reflect.TypeOf((*EntrypointProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.EntrypointStack",
		reflect.TypeOf((*EntrypointStack)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "account", GoGetter: "Account"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addMetadata", GoMethod: "AddMetadata"},
			_jsii_.MemberMethod{JsiiMethod: "addTransform", GoMethod: "AddTransform"},
			_jsii_.MemberProperty{JsiiProperty: "alb", GoGetter: "Alb"},
			_jsii_.MemberMethod{JsiiMethod: "allocateLogicalId", GoMethod: "AllocateLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "artifactId", GoGetter: "ArtifactId"},
			_jsii_.MemberProperty{JsiiProperty: "availabilityZones", GoGetter: "AvailabilityZones"},
			_jsii_.MemberProperty{JsiiProperty: "bundlingRequired", GoGetter: "BundlingRequired"},
			_jsii_.MemberProperty{JsiiProperty: "dependencies", GoGetter: "Dependencies"},
			_jsii_.MemberProperty{JsiiProperty: "domainName", GoGetter: "DomainName"},
			_jsii_.MemberProperty{JsiiProperty: "environment", GoGetter: "Environment"},
			_jsii_.MemberMethod{JsiiMethod: "exportStringListValue", GoMethod: "ExportStringListValue"},
			_jsii_.MemberMethod{JsiiMethod: "exportValue", GoMethod: "ExportValue"},
			_jsii_.MemberMethod{JsiiMethod: "formatArn", GoMethod: "FormatArn"},
			_jsii_.MemberMethod{JsiiMethod: "getLogicalId", GoMethod: "GetLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "nested", GoGetter: "Nested"},
			_jsii_.MemberProperty{JsiiProperty: "nestedStackParent", GoGetter: "NestedStackParent"},
			_jsii_.MemberProperty{JsiiProperty: "nestedStackResource", GoGetter: "NestedStackResource"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "notificationArns", GoGetter: "NotificationArns"},
			_jsii_.MemberProperty{JsiiProperty: "partition", GoGetter: "Partition"},
			_jsii_.MemberMethod{JsiiMethod: "referenceListener", GoMethod: "ReferenceListener"},
			_jsii_.MemberProperty{JsiiProperty: "region", GoGetter: "Region"},
			_jsii_.MemberMethod{JsiiMethod: "regionalFact", GoMethod: "RegionalFact"},
			_jsii_.MemberMethod{JsiiMethod: "renameLogicalId", GoMethod: "RenameLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "reportMissingContextKey", GoMethod: "ReportMissingContextKey"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "splitArn", GoMethod: "SplitArn"},
			_jsii_.MemberProperty{JsiiProperty: "stackId", GoGetter: "StackId"},
			_jsii_.MemberProperty{JsiiProperty: "stackName", GoGetter: "StackName"},
			_jsii_.MemberProperty{JsiiProperty: "synthesizer", GoGetter: "Synthesizer"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberProperty{JsiiProperty: "templateFile", GoGetter: "TemplateFile"},
			_jsii_.MemberProperty{JsiiProperty: "templateOptions", GoGetter: "TemplateOptions"},
			_jsii_.MemberProperty{JsiiProperty: "terminationProtection", GoGetter: "TerminationProtection"},
			_jsii_.MemberMethod{JsiiMethod: "toJsonString", GoMethod: "ToJsonString"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "toYamlString", GoMethod: "ToYamlString"},
			_jsii_.MemberProperty{JsiiProperty: "urlSuffix", GoGetter: "UrlSuffix"},
		},
		func() interface{} {
			j := jsiiProxy_EntrypointStack{}
			_jsii_.InitJsiiProxy(&j.Type__awscdkStack)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IEntrypoint)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.EntrypointStackProps",
		reflect.TypeOf((*EntrypointStackProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.FargateServiceMonitoringAspect",
		reflect.TypeOf((*FargateServiceMonitoringAspect)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "overrideConfig", GoMethod: "OverrideConfig"},
			_jsii_.MemberMethod{JsiiMethod: "visit", GoMethod: "Visit"},
		},
		func() interface{} {
			j := jsiiProxy_FargateServiceMonitoringAspect{}
			_jsii_.InitJsiiProxy(&j.Type__awscdkIAspect)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.FargateServiceMonitoringConfig",
		reflect.TypeOf((*FargateServiceMonitoringConfig)(nil)).Elem(),
	)
	_jsii_.RegisterInterface(
		"@condensetech/cdk-constructs.ICondenseMonitoringFacade",
		reflect.TypeOf((*ICondenseMonitoringFacade)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addAlarm", GoMethod: "AddAlarm"},
			_jsii_.MemberProperty{JsiiProperty: "dashboard", GoGetter: "Dashboard"},
		},
		func() interface{} {
			return &jsiiProxy_ICondenseMonitoringFacade{}
		},
	)
	_jsii_.RegisterInterface(
		"@condensetech/cdk-constructs.IDatabase",
		reflect.TypeOf((*IDatabase)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "connections", GoGetter: "Connections"},
			_jsii_.MemberProperty{JsiiProperty: "endpoint", GoGetter: "Endpoint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchSecret", GoMethod: "FetchSecret"},
		},
		func() interface{} {
			j := jsiiProxy_IDatabase{}
			_jsii_.InitJsiiProxy(&j.Type__awsec2IConnectable)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@condensetech/cdk-constructs.IEntrypoint",
		reflect.TypeOf((*IEntrypoint)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "alb", GoGetter: "Alb"},
			_jsii_.MemberProperty{JsiiProperty: "domainName", GoGetter: "DomainName"},
			_jsii_.MemberMethod{JsiiMethod: "referenceListener", GoMethod: "ReferenceListener"},
		},
		func() interface{} {
			return &jsiiProxy_IEntrypoint{}
		},
	)
	_jsii_.RegisterInterface(
		"@condensetech/cdk-constructs.INetworking",
		reflect.TypeOf((*INetworking)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "bastionHost", GoGetter: "BastionHost"},
			_jsii_.MemberProperty{JsiiProperty: "hasPrivateSubnets", GoGetter: "HasPrivateSubnets"},
			_jsii_.MemberProperty{JsiiProperty: "isolatedSubnets", GoGetter: "IsolatedSubnets"},
			_jsii_.MemberProperty{JsiiProperty: "privateSubnets", GoGetter: "PrivateSubnets"},
			_jsii_.MemberProperty{JsiiProperty: "publicSubnets", GoGetter: "PublicSubnets"},
			_jsii_.MemberProperty{JsiiProperty: "vpc", GoGetter: "Vpc"},
		},
		func() interface{} {
			return &jsiiProxy_INetworking{}
		},
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.MonitoringFacade",
		reflect.TypeOf((*MonitoringFacade)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addAlarm", GoMethod: "AddAlarm"},
			_jsii_.MemberProperty{JsiiProperty: "alarmTopic", GoGetter: "AlarmTopic"},
			_jsii_.MemberMethod{JsiiMethod: "configApplicationLoadBalancer", GoMethod: "ConfigApplicationLoadBalancer"},
			_jsii_.MemberMethod{JsiiMethod: "configCacheCluster", GoMethod: "ConfigCacheCluster"},
			_jsii_.MemberMethod{JsiiMethod: "configFargateService", GoMethod: "ConfigFargateService"},
			_jsii_.MemberMethod{JsiiMethod: "configRdsCluster", GoMethod: "ConfigRdsCluster"},
			_jsii_.MemberMethod{JsiiMethod: "configRdsInstance", GoMethod: "ConfigRdsInstance"},
			_jsii_.MemberMethod{JsiiMethod: "configTargetGroup", GoMethod: "ConfigTargetGroup"},
			_jsii_.MemberProperty{JsiiProperty: "dashboard", GoGetter: "Dashboard"},
		},
		func() interface{} {
			j := jsiiProxy_MonitoringFacade{}
			_jsii_.InitJsiiProxy(&j.jsiiProxy_ICondenseMonitoringFacade)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.MonitoringFacadeProps",
		reflect.TypeOf((*MonitoringFacadeProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction",
		reflect.TypeOf((*NaiveBasicAuthCloudfrontFunction)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "functionArn", GoGetter: "FunctionArn"},
			_jsii_.MemberProperty{JsiiProperty: "functionName", GoGetter: "FunctionName"},
			_jsii_.MemberProperty{JsiiProperty: "functionRuntime", GoGetter: "FunctionRuntime"},
			_jsii_.MemberProperty{JsiiProperty: "functionStage", GoGetter: "FunctionStage"},
			_jsii_.MemberMethod{JsiiMethod: "generatePhysicalName", GoMethod: "GeneratePhysicalName"},
			_jsii_.MemberMethod{JsiiMethod: "getResourceArnAttribute", GoMethod: "GetResourceArnAttribute"},
			_jsii_.MemberMethod{JsiiMethod: "getResourceNameAttribute", GoMethod: "GetResourceNameAttribute"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "physicalName", GoGetter: "PhysicalName"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_NaiveBasicAuthCloudfrontFunction{}
			_jsii_.InitJsiiProxy(&j.Type__awscloudfrontFunction)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionExcludedPath",
		reflect.TypeOf((*NaiveBasicAuthCloudfrontFunctionExcludedPath)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionProps",
		reflect.TypeOf((*NaiveBasicAuthCloudfrontFunctionProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.Networking",
		reflect.TypeOf((*Networking)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "bastionHost", GoGetter: "BastionHost"},
			_jsii_.MemberProperty{JsiiProperty: "hasPrivateSubnets", GoGetter: "HasPrivateSubnets"},
			_jsii_.MemberProperty{JsiiProperty: "isolatedSubnets", GoGetter: "IsolatedSubnets"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "privateSubnets", GoGetter: "PrivateSubnets"},
			_jsii_.MemberProperty{JsiiProperty: "publicSubnets", GoGetter: "PublicSubnets"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "vpc", GoGetter: "Vpc"},
		},
		func() interface{} {
			j := jsiiProxy_Networking{}
			_jsii_.InitJsiiProxy(&j.Type__constructsConstruct)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_INetworking)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.NetworkingProps",
		reflect.TypeOf((*NetworkingProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.NetworkingStack",
		reflect.TypeOf((*NetworkingStack)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "account", GoGetter: "Account"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addMetadata", GoMethod: "AddMetadata"},
			_jsii_.MemberMethod{JsiiMethod: "addTransform", GoMethod: "AddTransform"},
			_jsii_.MemberMethod{JsiiMethod: "allocateLogicalId", GoMethod: "AllocateLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "artifactId", GoGetter: "ArtifactId"},
			_jsii_.MemberProperty{JsiiProperty: "availabilityZones", GoGetter: "AvailabilityZones"},
			_jsii_.MemberProperty{JsiiProperty: "bastionHost", GoGetter: "BastionHost"},
			_jsii_.MemberProperty{JsiiProperty: "bundlingRequired", GoGetter: "BundlingRequired"},
			_jsii_.MemberProperty{JsiiProperty: "dependencies", GoGetter: "Dependencies"},
			_jsii_.MemberProperty{JsiiProperty: "environment", GoGetter: "Environment"},
			_jsii_.MemberMethod{JsiiMethod: "exportStringListValue", GoMethod: "ExportStringListValue"},
			_jsii_.MemberMethod{JsiiMethod: "exportValue", GoMethod: "ExportValue"},
			_jsii_.MemberMethod{JsiiMethod: "formatArn", GoMethod: "FormatArn"},
			_jsii_.MemberMethod{JsiiMethod: "getLogicalId", GoMethod: "GetLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "hasPrivateSubnets", GoGetter: "HasPrivateSubnets"},
			_jsii_.MemberProperty{JsiiProperty: "isolatedSubnets", GoGetter: "IsolatedSubnets"},
			_jsii_.MemberProperty{JsiiProperty: "nested", GoGetter: "Nested"},
			_jsii_.MemberProperty{JsiiProperty: "nestedStackParent", GoGetter: "NestedStackParent"},
			_jsii_.MemberProperty{JsiiProperty: "nestedStackResource", GoGetter: "NestedStackResource"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "notificationArns", GoGetter: "NotificationArns"},
			_jsii_.MemberProperty{JsiiProperty: "partition", GoGetter: "Partition"},
			_jsii_.MemberProperty{JsiiProperty: "privateSubnets", GoGetter: "PrivateSubnets"},
			_jsii_.MemberProperty{JsiiProperty: "publicSubnets", GoGetter: "PublicSubnets"},
			_jsii_.MemberProperty{JsiiProperty: "region", GoGetter: "Region"},
			_jsii_.MemberMethod{JsiiMethod: "regionalFact", GoMethod: "RegionalFact"},
			_jsii_.MemberMethod{JsiiMethod: "renameLogicalId", GoMethod: "RenameLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "reportMissingContextKey", GoMethod: "ReportMissingContextKey"},
			_jsii_.MemberMethod{JsiiMethod: "resolve", GoMethod: "Resolve"},
			_jsii_.MemberMethod{JsiiMethod: "splitArn", GoMethod: "SplitArn"},
			_jsii_.MemberProperty{JsiiProperty: "stackId", GoGetter: "StackId"},
			_jsii_.MemberProperty{JsiiProperty: "stackName", GoGetter: "StackName"},
			_jsii_.MemberProperty{JsiiProperty: "synthesizer", GoGetter: "Synthesizer"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberProperty{JsiiProperty: "templateFile", GoGetter: "TemplateFile"},
			_jsii_.MemberProperty{JsiiProperty: "templateOptions", GoGetter: "TemplateOptions"},
			_jsii_.MemberProperty{JsiiProperty: "terminationProtection", GoGetter: "TerminationProtection"},
			_jsii_.MemberMethod{JsiiMethod: "toJsonString", GoMethod: "ToJsonString"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "toYamlString", GoMethod: "ToYamlString"},
			_jsii_.MemberProperty{JsiiProperty: "urlSuffix", GoGetter: "UrlSuffix"},
			_jsii_.MemberProperty{JsiiProperty: "vpc", GoGetter: "Vpc"},
		},
		func() interface{} {
			j := jsiiProxy_NetworkingStack{}
			_jsii_.InitJsiiProxy(&j.Type__awscdkStack)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_INetworking)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.NetworkingStackProps",
		reflect.TypeOf((*NetworkingStackProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.RdsClusterMonitoringAspect",
		reflect.TypeOf((*RdsClusterMonitoringAspect)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "overrideConfig", GoMethod: "OverrideConfig"},
			_jsii_.MemberMethod{JsiiMethod: "visit", GoMethod: "Visit"},
		},
		func() interface{} {
			j := jsiiProxy_RdsClusterMonitoringAspect{}
			_jsii_.InitJsiiProxy(&j.Type__awscdkIAspect)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.RdsClusterMonitoringConfig",
		reflect.TypeOf((*RdsClusterMonitoringConfig)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.RdsInstanceMonitoringAspect",
		reflect.TypeOf((*RdsInstanceMonitoringAspect)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "overrideConfig", GoMethod: "OverrideConfig"},
			_jsii_.MemberMethod{JsiiMethod: "visit", GoMethod: "Visit"},
		},
		func() interface{} {
			j := jsiiProxy_RdsInstanceMonitoringAspect{}
			_jsii_.InitJsiiProxy(&j.Type__awscdkIAspect)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.RdsInstanceMonitoringConfig",
		reflect.TypeOf((*RdsInstanceMonitoringConfig)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@condensetech/cdk-constructs.TargetGroupMonitoringAspect",
		reflect.TypeOf((*TargetGroupMonitoringAspect)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "monitoringFacade", GoGetter: "MonitoringFacade"},
			_jsii_.MemberMethod{JsiiMethod: "overrideConfig", GoMethod: "OverrideConfig"},
			_jsii_.MemberMethod{JsiiMethod: "visit", GoMethod: "Visit"},
		},
		func() interface{} {
			j := jsiiProxy_TargetGroupMonitoringAspect{}
			_jsii_.InitJsiiProxy(&j.Type__awscdkIAspect)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.TargetGroupMonitoringConfig",
		reflect.TypeOf((*TargetGroupMonitoringConfig)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@condensetech/cdk-constructs.WidgetAlertAnnotationProps",
		reflect.TypeOf((*WidgetAlertAnnotationProps)(nil)).Elem(),
	)
}
