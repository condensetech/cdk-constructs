# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationListenerPriorityAllocator <a name="ApplicationListenerPriorityAllocator" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator"></a>

- *Implements:* <a href="#@condensetech/cdk-constructs.IApplicationListenerPriorityAllocator">IApplicationListenerPriorityAllocator</a>

This custom resource allows to generate unique priorities for application listener rules.

Consumers can allocate a priority to a listener rule by calling the `allocatePriority` method, ensuring that:
- if no priority is set, one will be generated
- if a priority is set, an error will be thrown if the priority is already taken

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.Initializer"></a>

```typescript
import { ApplicationListenerPriorityAllocator } from '@condensetech/cdk-constructs'

new ApplicationListenerPriorityAllocator(scope: Construct, id: string, props: ApplicationListenerPriorityAllocatorProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.Initializer.parameter.props">props</a></code> | <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorProps">ApplicationListenerPriorityAllocatorProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.Initializer.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorProps">ApplicationListenerPriorityAllocatorProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.allocatePriority">allocatePriority</a></code> | Allocates the priority of an application listener rule. |

---

##### `toString` <a name="toString" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `allocatePriority` <a name="allocatePriority" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.allocatePriority"></a>

```typescript
public allocatePriority(scope: Construct, id: string, props: AllocatePriorityProps): number
```

Allocates the priority of an application listener rule.

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.allocatePriority.parameter.scope"></a>

- *Type:* constructs.Construct

The scope of the construct.

---

###### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.allocatePriority.parameter.id"></a>

- *Type:* string

The ID of the listener rule to allocate the priority to.

---

###### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.allocatePriority.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.AllocatePriorityProps">AllocatePriorityProps</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.fromPriorityAllocatorName">fromPriorityAllocatorName</a></code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.fromServiceToken">fromServiceToken</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.isConstruct"></a>

```typescript
import { ApplicationListenerPriorityAllocator } from '@condensetech/cdk-constructs'

ApplicationListenerPriorityAllocator.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromPriorityAllocatorName` <a name="fromPriorityAllocatorName" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.fromPriorityAllocatorName"></a>

```typescript
import { ApplicationListenerPriorityAllocator } from '@condensetech/cdk-constructs'

ApplicationListenerPriorityAllocator.fromPriorityAllocatorName(scope: Construct, id: string, priorityAllocatorName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.fromPriorityAllocatorName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.fromPriorityAllocatorName.parameter.id"></a>

- *Type:* string

---

###### `priorityAllocatorName`<sup>Required</sup> <a name="priorityAllocatorName" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.fromPriorityAllocatorName.parameter.priorityAllocatorName"></a>

- *Type:* string

---

##### `fromServiceToken` <a name="fromServiceToken" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.fromServiceToken"></a>

```typescript
import { ApplicationListenerPriorityAllocator } from '@condensetech/cdk-constructs'

ApplicationListenerPriorityAllocator.fromServiceToken(scope: Construct, id: string, serviceToken: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.fromServiceToken.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.fromServiceToken.parameter.id"></a>

- *Type:* string

---

###### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.fromServiceToken.parameter.serviceToken"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.property.serviceToken">serviceToken</a></code> | <code>string</code> | The service token to use to reference the custom resource. |

---

##### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

The service token to use to reference the custom resource.

---


### AuroraCluster <a name="AuroraCluster" id="@condensetech/cdk-constructs.AuroraCluster"></a>

- *Implements:* <a href="#@condensetech/cdk-constructs.IDatabase">IDatabase</a>

The AuroraCluster Construct creates an opinionated Aurora Cluster.

Under the hood, it creates a [rds.DatabaseCluster](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds-readme.html#starting-a-clustered-database) construct.
It implements the IDatabase interface so that it can be used in other constructs and stacks without requiring to access to the underlying construct.

It also applies the following changes to the default behavior:
- A [rds.ParameterGroup](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds-readme.html#parameter-groups) specific for the cluster is always defined.
  By using a custom parameter group instead of relying on the default one, a later change in the parameter group's parameters wouldn't require a replace of the cluster.
- The credentials secret name is created after the construct's path. This way, the secret name is more readable and, when working with multiple stacks, can be easily inferred without having to rely on Cloudformation exports.
- The default instance type for the writer instance is set to a minimum instance type based on the engine type.
- The storage is always encrypted.
- If the networking configuration includes a bastion host, the cluster allows connections from the bastion host.
- The default security group name is `${construct.node.path}-sg`. This allows for easier lookups when working with multiple stacks.

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.AuroraCluster.Initializer"></a>

```typescript
import { AuroraCluster } from '@condensetech/cdk-constructs'

new AuroraCluster(scope: Construct, id: string, props: AuroraClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.AuroraCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.AuroraCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.AuroraCluster.Initializer.parameter.props">props</a></code> | <code><a href="#@condensetech/cdk-constructs.AuroraClusterProps">AuroraClusterProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.AuroraCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.AuroraCluster.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.AuroraCluster.Initializer.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.AuroraClusterProps">AuroraClusterProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.AuroraCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@condensetech/cdk-constructs.AuroraCluster.fetchSecret">fetchSecret</a></code> | Utility method that returns the secret with the credentials to access the database in a cross-stack compatible way. |

---

##### `toString` <a name="toString" id="@condensetech/cdk-constructs.AuroraCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `fetchSecret` <a name="fetchSecret" id="@condensetech/cdk-constructs.AuroraCluster.fetchSecret"></a>

```typescript
public fetchSecret(scope: Construct, id?: string): ISecret
```

Utility method that returns the secret with the credentials to access the database in a cross-stack compatible way.

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.AuroraCluster.fetchSecret.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Optional</sup> <a name="id" id="@condensetech/cdk-constructs.AuroraCluster.fetchSecret.parameter.id"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.AuroraCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@condensetech/cdk-constructs.AuroraCluster.isConstruct"></a>

```typescript
import { AuroraCluster } from '@condensetech/cdk-constructs'

AuroraCluster.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@condensetech/cdk-constructs.AuroraCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.AuroraCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@condensetech/cdk-constructs.AuroraCluster.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#@condensetech/cdk-constructs.AuroraCluster.property.endpoint">endpoint</a></code> | <code>aws-cdk-lib.aws_rds.Endpoint</code> | The endpoint of the database. |
| <code><a href="#@condensetech/cdk-constructs.AuroraCluster.property.parameterGroup">parameterGroup</a></code> | <code>aws-cdk-lib.aws_rds.ParameterGroup</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.AuroraCluster.property.resource">resource</a></code> | <code>aws-cdk-lib.aws_rds.DatabaseCluster</code> | The underlying database cluster. |

---

##### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.AuroraCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `connections`<sup>Required</sup> <a name="connections" id="@condensetech/cdk-constructs.AuroraCluster.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@condensetech/cdk-constructs.AuroraCluster.property.endpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* aws-cdk-lib.aws_rds.Endpoint

The endpoint of the database.

---

##### `parameterGroup`<sup>Required</sup> <a name="parameterGroup" id="@condensetech/cdk-constructs.AuroraCluster.property.parameterGroup"></a>

```typescript
public readonly parameterGroup: ParameterGroup;
```

- *Type:* aws-cdk-lib.aws_rds.ParameterGroup

---

##### `resource`<sup>Required</sup> <a name="resource" id="@condensetech/cdk-constructs.AuroraCluster.property.resource"></a>

```typescript
public readonly resource: DatabaseCluster;
```

- *Type:* aws-cdk-lib.aws_rds.DatabaseCluster

The underlying database cluster.

---


### AuroraClusterStack <a name="AuroraClusterStack" id="@condensetech/cdk-constructs.AuroraClusterStack"></a>

- *Implements:* <a href="#@condensetech/cdk-constructs.IDatabase">IDatabase</a>

The AuroraClusterStack creates an [AuroraCluster](#@condensetech/cdk-constructs.AuroraCluster) construct and optionally defines the monitoring configuration. It implements the IDatabase interface so that it can be used in other constructs and stacks without requiring to access to the underlying construct.

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.AuroraClusterStack.Initializer"></a>

```typescript
import { AuroraClusterStack } from '@condensetech/cdk-constructs'

new AuroraClusterStack(scope: Construct, id: string, props: AuroraClusterStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.Initializer.parameter.props">props</a></code> | <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps">AuroraClusterStackProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.AuroraClusterStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.AuroraClusterStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.AuroraClusterStack.Initializer.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.AuroraClusterStackProps">AuroraClusterStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.fetchSecret">fetchSecret</a></code> | Utility method that returns the secret with the credentials to access the database in a cross-stack compatible way. |

---

##### `toString` <a name="toString" id="@condensetech/cdk-constructs.AuroraClusterStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@condensetech/cdk-constructs.AuroraClusterStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@condensetech/cdk-constructs.AuroraClusterStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@condensetech/cdk-constructs.AuroraClusterStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@condensetech/cdk-constructs.AuroraClusterStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@condensetech/cdk-constructs.AuroraClusterStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@condensetech/cdk-constructs.AuroraClusterStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="@condensetech/cdk-constructs.AuroraClusterStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@condensetech/cdk-constructs.AuroraClusterStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@condensetech/cdk-constructs.AuroraClusterStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@condensetech/cdk-constructs.AuroraClusterStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@condensetech/cdk-constructs.AuroraClusterStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@condensetech/cdk-constructs.AuroraClusterStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@condensetech/cdk-constructs.AuroraClusterStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@condensetech/cdk-constructs.AuroraClusterStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@condensetech/cdk-constructs.AuroraClusterStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@condensetech/cdk-constructs.AuroraClusterStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@condensetech/cdk-constructs.AuroraClusterStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@condensetech/cdk-constructs.AuroraClusterStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@condensetech/cdk-constructs.AuroraClusterStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@condensetech/cdk-constructs.AuroraClusterStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@condensetech/cdk-constructs.AuroraClusterStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@condensetech/cdk-constructs.AuroraClusterStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@condensetech/cdk-constructs.AuroraClusterStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@condensetech/cdk-constructs.AuroraClusterStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@condensetech/cdk-constructs.AuroraClusterStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@condensetech/cdk-constructs.AuroraClusterStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@condensetech/cdk-constructs.AuroraClusterStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@condensetech/cdk-constructs.AuroraClusterStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@condensetech/cdk-constructs.AuroraClusterStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@condensetech/cdk-constructs.AuroraClusterStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@condensetech/cdk-constructs.AuroraClusterStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@condensetech/cdk-constructs.AuroraClusterStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@condensetech/cdk-constructs.AuroraClusterStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@condensetech/cdk-constructs.AuroraClusterStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@condensetech/cdk-constructs.AuroraClusterStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@condensetech/cdk-constructs.AuroraClusterStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

##### `fetchSecret` <a name="fetchSecret" id="@condensetech/cdk-constructs.AuroraClusterStack.fetchSecret"></a>

```typescript
public fetchSecret(scope: Construct, id?: string): ISecret
```

Utility method that returns the secret with the credentials to access the database in a cross-stack compatible way.

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.AuroraClusterStack.fetchSecret.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Optional</sup> <a name="id" id="@condensetech/cdk-constructs.AuroraClusterStack.fetchSecret.parameter.id"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@condensetech/cdk-constructs.AuroraClusterStack.isConstruct"></a>

```typescript
import { AuroraClusterStack } from '@condensetech/cdk-constructs'

AuroraClusterStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@condensetech/cdk-constructs.AuroraClusterStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@condensetech/cdk-constructs.AuroraClusterStack.isStack"></a>

```typescript
import { AuroraClusterStack } from '@condensetech/cdk-constructs'

AuroraClusterStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@condensetech/cdk-constructs.AuroraClusterStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@condensetech/cdk-constructs.AuroraClusterStack.of"></a>

```typescript
import { AuroraClusterStack } from '@condensetech/cdk-constructs'

AuroraClusterStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@condensetech/cdk-constructs.AuroraClusterStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.endpoint">endpoint</a></code> | <code>aws-cdk-lib.aws_rds.Endpoint</code> | The endpoint of the database. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStack.property.resource">resource</a></code> | <code><a href="#@condensetech/cdk-constructs.AuroraCluster">AuroraCluster</a></code> | Underlying AuroraCluster construct. |

---

##### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.AuroraClusterStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@condensetech/cdk-constructs.AuroraClusterStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@condensetech/cdk-constructs.AuroraClusterStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@condensetech/cdk-constructs.AuroraClusterStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@condensetech/cdk-constructs.AuroraClusterStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@condensetech/cdk-constructs.AuroraClusterStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@condensetech/cdk-constructs.AuroraClusterStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@condensetech/cdk-constructs.AuroraClusterStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@condensetech/cdk-constructs.AuroraClusterStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@condensetech/cdk-constructs.AuroraClusterStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@condensetech/cdk-constructs.AuroraClusterStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@condensetech/cdk-constructs.AuroraClusterStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="@condensetech/cdk-constructs.AuroraClusterStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@condensetech/cdk-constructs.AuroraClusterStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@condensetech/cdk-constructs.AuroraClusterStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@condensetech/cdk-constructs.AuroraClusterStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@condensetech/cdk-constructs.AuroraClusterStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@condensetech/cdk-constructs.AuroraClusterStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@condensetech/cdk-constructs.AuroraClusterStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@condensetech/cdk-constructs.AuroraClusterStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@condensetech/cdk-constructs.AuroraClusterStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `connections`<sup>Required</sup> <a name="connections" id="@condensetech/cdk-constructs.AuroraClusterStack.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@condensetech/cdk-constructs.AuroraClusterStack.property.endpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* aws-cdk-lib.aws_rds.Endpoint

The endpoint of the database.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@condensetech/cdk-constructs.AuroraClusterStack.property.resource"></a>

```typescript
public readonly resource: AuroraCluster;
```

- *Type:* <a href="#@condensetech/cdk-constructs.AuroraCluster">AuroraCluster</a>

Underlying AuroraCluster construct.

---


### CloudwatchAlarmsTopicStack <a name="CloudwatchAlarmsTopicStack" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack"></a>

The CloudwatchAlarmsTopicStack creates an SNS topic for Cloudwatch alarms.

The stack  and optionally sends the alarms to Discord or Jira.

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.Initializer"></a>

```typescript
import { CloudwatchAlarmsTopicStack } from '@condensetech/cdk-constructs'

new CloudwatchAlarmsTopicStack(scope: Construct, id: string, props: CloudwatchAlarmsTopicStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.Initializer.parameter.props">props</a></code> | <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps">CloudwatchAlarmsTopicStackProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.Initializer.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps">CloudwatchAlarmsTopicStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |

---

##### `toString` <a name="toString" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.isConstruct"></a>

```typescript
import { CloudwatchAlarmsTopicStack } from '@condensetech/cdk-constructs'

CloudwatchAlarmsTopicStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.isStack"></a>

```typescript
import { CloudwatchAlarmsTopicStack } from '@condensetech/cdk-constructs'

CloudwatchAlarmsTopicStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.of"></a>

```typescript
import { CloudwatchAlarmsTopicStack } from '@condensetech/cdk-constructs'

CloudwatchAlarmsTopicStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.alarmsTopic">alarmsTopic</a></code> | <code>aws-cdk-lib.aws_sns.Topic</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `alarmsTopic`<sup>Required</sup> <a name="alarmsTopic" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStack.property.alarmsTopic"></a>

```typescript
public readonly alarmsTopic: Topic;
```

- *Type:* aws-cdk-lib.aws_sns.Topic

---


### DatabaseInstance <a name="DatabaseInstance" id="@condensetech/cdk-constructs.DatabaseInstance"></a>

- *Implements:* <a href="#@condensetech/cdk-constructs.IDatabase">IDatabase</a>

The DatabaseInstance construct creates an RDS database instance.

Under the hood, it creates a [rds.DatabaseInstance](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds-readme.html#starting-an-instance-database) construct.
It implements the IDatabase interface so that it can be used in other constructs and stacks without requiring to access to the underlying construct.

It also applies the following changes to the default behavior:
- A [rds.ParameterGroup](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds-readme.html#parameter-groups) specific for the cluster is always defined.
  By using a custom parameter group instead of relying on the default one, a later change in the parameter group's parameters wouldn't require a replace of the cluster.
- The credentials secret name is created after the construct's path. This way, the secret name is more readable and, when working with multiple stacks, can be easily inferred without having to rely on Cloudformation exports.
- It defaults the storage type to GP3 when not specified.
- It defaults the allocated storage to the minimum storage of 20 GB when not specified.
- The default instance type is set to t3.small.
- The storage is always encrypted.
- If the networking configuration includes a bastion host, the database allows connections from the bastion host.
- The default security group name is `${construct.node.path}-sg`. This allows for easier lookups when working with multiple stacks.

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.DatabaseInstance.Initializer"></a>

```typescript
import { DatabaseInstance } from '@condensetech/cdk-constructs'

new DatabaseInstance(scope: Construct, id: string, props: DatabaseInstanceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstance.Initializer.parameter.props">props</a></code> | <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps">DatabaseInstanceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.DatabaseInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.DatabaseInstance.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.DatabaseInstance.Initializer.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.DatabaseInstanceProps">DatabaseInstanceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstance.fetchSecret">fetchSecret</a></code> | Utility method that returns the secret with the credentials to access the database in a cross-stack compatible way. |

---

##### `toString` <a name="toString" id="@condensetech/cdk-constructs.DatabaseInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `fetchSecret` <a name="fetchSecret" id="@condensetech/cdk-constructs.DatabaseInstance.fetchSecret"></a>

```typescript
public fetchSecret(scope: Construct, id?: string): ISecret
```

Utility method that returns the secret with the credentials to access the database in a cross-stack compatible way.

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.DatabaseInstance.fetchSecret.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Optional</sup> <a name="id" id="@condensetech/cdk-constructs.DatabaseInstance.fetchSecret.parameter.id"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@condensetech/cdk-constructs.DatabaseInstance.isConstruct"></a>

```typescript
import { DatabaseInstance } from '@condensetech/cdk-constructs'

DatabaseInstance.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@condensetech/cdk-constructs.DatabaseInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstance.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstance.property.endpoint">endpoint</a></code> | <code>aws-cdk-lib.aws_rds.Endpoint</code> | The endpoint of the database. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstance.property.resource">resource</a></code> | <code>aws-cdk-lib.aws_rds.IDatabaseInstance</code> | The underlying RDS database instance. |

---

##### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.DatabaseInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `connections`<sup>Required</sup> <a name="connections" id="@condensetech/cdk-constructs.DatabaseInstance.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@condensetech/cdk-constructs.DatabaseInstance.property.endpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* aws-cdk-lib.aws_rds.Endpoint

The endpoint of the database.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@condensetech/cdk-constructs.DatabaseInstance.property.resource"></a>

```typescript
public readonly resource: IDatabaseInstance;
```

- *Type:* aws-cdk-lib.aws_rds.IDatabaseInstance

The underlying RDS database instance.

---


### DatabaseInstanceStack <a name="DatabaseInstanceStack" id="@condensetech/cdk-constructs.DatabaseInstanceStack"></a>

- *Implements:* <a href="#@condensetech/cdk-constructs.IDatabase">IDatabase</a>

The DatabaseInstanceStack creates a [DatabaseInstance](#@condensetech/cdk-constructs.DatabaseInstance) construct and optionally defines the monitoring configuration. It implements the IDatabase interface so that it can be used in other constructs and stacks without requiring to access to the underlying construct.

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.DatabaseInstanceStack.Initializer"></a>

```typescript
import { DatabaseInstanceStack } from '@condensetech/cdk-constructs'

new DatabaseInstanceStack(scope: Construct, id: string, props: DatabaseInstanceStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.Initializer.parameter.props">props</a></code> | <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps">DatabaseInstanceStackProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.DatabaseInstanceStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.DatabaseInstanceStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.DatabaseInstanceStack.Initializer.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps">DatabaseInstanceStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.fetchSecret">fetchSecret</a></code> | Utility method that returns the secret with the credentials to access the database in a cross-stack compatible way. |

---

##### `toString` <a name="toString" id="@condensetech/cdk-constructs.DatabaseInstanceStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@condensetech/cdk-constructs.DatabaseInstanceStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@condensetech/cdk-constructs.DatabaseInstanceStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@condensetech/cdk-constructs.DatabaseInstanceStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@condensetech/cdk-constructs.DatabaseInstanceStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@condensetech/cdk-constructs.DatabaseInstanceStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@condensetech/cdk-constructs.DatabaseInstanceStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="@condensetech/cdk-constructs.DatabaseInstanceStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@condensetech/cdk-constructs.DatabaseInstanceStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@condensetech/cdk-constructs.DatabaseInstanceStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@condensetech/cdk-constructs.DatabaseInstanceStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@condensetech/cdk-constructs.DatabaseInstanceStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@condensetech/cdk-constructs.DatabaseInstanceStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@condensetech/cdk-constructs.DatabaseInstanceStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@condensetech/cdk-constructs.DatabaseInstanceStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@condensetech/cdk-constructs.DatabaseInstanceStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@condensetech/cdk-constructs.DatabaseInstanceStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@condensetech/cdk-constructs.DatabaseInstanceStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@condensetech/cdk-constructs.DatabaseInstanceStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@condensetech/cdk-constructs.DatabaseInstanceStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@condensetech/cdk-constructs.DatabaseInstanceStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@condensetech/cdk-constructs.DatabaseInstanceStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@condensetech/cdk-constructs.DatabaseInstanceStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@condensetech/cdk-constructs.DatabaseInstanceStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@condensetech/cdk-constructs.DatabaseInstanceStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@condensetech/cdk-constructs.DatabaseInstanceStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@condensetech/cdk-constructs.DatabaseInstanceStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@condensetech/cdk-constructs.DatabaseInstanceStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@condensetech/cdk-constructs.DatabaseInstanceStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@condensetech/cdk-constructs.DatabaseInstanceStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@condensetech/cdk-constructs.DatabaseInstanceStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@condensetech/cdk-constructs.DatabaseInstanceStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@condensetech/cdk-constructs.DatabaseInstanceStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@condensetech/cdk-constructs.DatabaseInstanceStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@condensetech/cdk-constructs.DatabaseInstanceStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@condensetech/cdk-constructs.DatabaseInstanceStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@condensetech/cdk-constructs.DatabaseInstanceStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

##### `fetchSecret` <a name="fetchSecret" id="@condensetech/cdk-constructs.DatabaseInstanceStack.fetchSecret"></a>

```typescript
public fetchSecret(scope: Construct, id?: string): ISecret
```

Utility method that returns the secret with the credentials to access the database in a cross-stack compatible way.

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.DatabaseInstanceStack.fetchSecret.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Optional</sup> <a name="id" id="@condensetech/cdk-constructs.DatabaseInstanceStack.fetchSecret.parameter.id"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@condensetech/cdk-constructs.DatabaseInstanceStack.isConstruct"></a>

```typescript
import { DatabaseInstanceStack } from '@condensetech/cdk-constructs'

DatabaseInstanceStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@condensetech/cdk-constructs.DatabaseInstanceStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@condensetech/cdk-constructs.DatabaseInstanceStack.isStack"></a>

```typescript
import { DatabaseInstanceStack } from '@condensetech/cdk-constructs'

DatabaseInstanceStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@condensetech/cdk-constructs.DatabaseInstanceStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@condensetech/cdk-constructs.DatabaseInstanceStack.of"></a>

```typescript
import { DatabaseInstanceStack } from '@condensetech/cdk-constructs'

DatabaseInstanceStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@condensetech/cdk-constructs.DatabaseInstanceStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.endpoint">endpoint</a></code> | <code>aws-cdk-lib.aws_rds.Endpoint</code> | The endpoint of the database. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStack.property.resource">resource</a></code> | <code><a href="#@condensetech/cdk-constructs.DatabaseInstance">DatabaseInstance</a></code> | Underlying DatabaseInstance construct. |

---

##### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `connections`<sup>Required</sup> <a name="connections" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.endpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* aws-cdk-lib.aws_rds.Endpoint

The endpoint of the database.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@condensetech/cdk-constructs.DatabaseInstanceStack.property.resource"></a>

```typescript
public readonly resource: DatabaseInstance;
```

- *Type:* <a href="#@condensetech/cdk-constructs.DatabaseInstance">DatabaseInstance</a>

Underlying DatabaseInstance construct.

---


### Entrypoint <a name="Entrypoint" id="@condensetech/cdk-constructs.Entrypoint"></a>

- *Implements:* <a href="#@condensetech/cdk-constructs.IEntrypoint">IEntrypoint</a>

The Entrypoint construct creates an Application Load Balancer (ALB) that serves as the centralized entry point for all applications.

This ALB is shared across multiple applications, primarily to optimize infrastructure costs by reducing the need for multiple load balancers.
It implements the IEntrypoint interface so that it can be used in other constructs and stacks without requiring to access to the underlying construct.

It creates an ALB with:
- an HTTP listener that redirects all traffic to HTTPS.
- an HTTPS listener that returns a 403 Forbidden response by default.
- a custom security group. This allows to expose the security group as a property of the entrypoint construct, making it easier to reference it in other constructs.
Finally, it creates the Route 53 A and AAAA record that point to the ALB.

When hostedZoneProps is provided, by default this construct creates an HTTPS certificate, bound to the domain name and all subdomains (unless wildcardCertificate is set to false).
You can also provide an existing certificate ARN through certificate.certificateArn.

When an `entrypointName` is provided, this is used as the name of the ALB and as the prefix for the security group.
It is also used to add an additional "Name" tag to the load balancer.
This helps to use [ApplicationLoadBalancer#lookup](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer.html#static-fromwbrlookupscope-id-options) to find the load balancer by name.

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.Entrypoint.Initializer"></a>

```typescript
import { Entrypoint } from '@condensetech/cdk-constructs'

new Entrypoint(scope: Construct, id: string, props: EntrypointProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.Entrypoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.Entrypoint.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.Entrypoint.Initializer.parameter.props">props</a></code> | <code><a href="#@condensetech/cdk-constructs.EntrypointProps">EntrypointProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.Entrypoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.Entrypoint.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.Entrypoint.Initializer.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.EntrypointProps">EntrypointProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.Entrypoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@condensetech/cdk-constructs.Entrypoint.allocateListenerRule">allocateListenerRule</a></code> | It creates an ApplicationListenerRule for the HTTPS listener of the Entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.Entrypoint.referenceListener">referenceListener</a></code> | Utility method that returns the HTTPS listener of the entrypoint in a cross-stack compatible way. |

---

##### `toString` <a name="toString" id="@condensetech/cdk-constructs.Entrypoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `allocateListenerRule` <a name="allocateListenerRule" id="@condensetech/cdk-constructs.Entrypoint.allocateListenerRule"></a>

```typescript
public allocateListenerRule(scope: Construct, id: string, props: AllocateApplicationListenerRuleProps): ApplicationListenerRule
```

It creates an ApplicationListenerRule for the HTTPS listener of the Entrypoint.

This method doesn't require a priority to be explicitly set, and tracks the allocated priorities on a DynamoDB table to avoid conflicts.

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.Entrypoint.allocateListenerRule.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.Entrypoint.allocateListenerRule.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.Entrypoint.allocateListenerRule.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.AllocateApplicationListenerRuleProps">AllocateApplicationListenerRuleProps</a>

---

##### `referenceListener` <a name="referenceListener" id="@condensetech/cdk-constructs.Entrypoint.referenceListener"></a>

```typescript
public referenceListener(scope: Construct, id: string): IApplicationListener
```

Utility method that returns the HTTPS listener of the entrypoint in a cross-stack compatible way.

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.Entrypoint.referenceListener.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.Entrypoint.referenceListener.parameter.id"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.Entrypoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@condensetech/cdk-constructs.Entrypoint.fromAttributes">fromAttributes</a></code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.Entrypoint.fromLookup">fromLookup</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@condensetech/cdk-constructs.Entrypoint.isConstruct"></a>

```typescript
import { Entrypoint } from '@condensetech/cdk-constructs'

Entrypoint.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@condensetech/cdk-constructs.Entrypoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `fromAttributes` <a name="fromAttributes" id="@condensetech/cdk-constructs.Entrypoint.fromAttributes"></a>

```typescript
import { Entrypoint } from '@condensetech/cdk-constructs'

Entrypoint.fromAttributes(scope: Construct, id: string, props: EntrypointFromAttributes)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.Entrypoint.fromAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.Entrypoint.fromAttributes.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.Entrypoint.fromAttributes.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.EntrypointFromAttributes">EntrypointFromAttributes</a>

---

##### `fromLookup` <a name="fromLookup" id="@condensetech/cdk-constructs.Entrypoint.fromLookup"></a>

```typescript
import { Entrypoint } from '@condensetech/cdk-constructs'

Entrypoint.fromLookup(scope: Construct, id: string, props: EntrypointFromLookupProps)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.Entrypoint.fromLookup.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.Entrypoint.fromLookup.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.Entrypoint.fromLookup.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.EntrypointFromLookupProps">EntrypointFromLookupProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.Entrypoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@condensetech/cdk-constructs.Entrypoint.property.alb">alb</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer</code> | The ALB that serves as the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.Entrypoint.property.domainName">domainName</a></code> | <code>string</code> | The load balancer custom domain name. |
| <code><a href="#@condensetech/cdk-constructs.Entrypoint.property.listener">listener</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationListener</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.Entrypoint.property.priorityAllocator">priorityAllocator</a></code> | <code><a href="#@condensetech/cdk-constructs.IApplicationListenerPriorityAllocator">IApplicationListenerPriorityAllocator</a></code> | The Application Listener priority allocator for the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.Entrypoint.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.Entrypoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `alb`<sup>Required</sup> <a name="alb" id="@condensetech/cdk-constructs.Entrypoint.property.alb"></a>

```typescript
public readonly alb: IApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer

The ALB that serves as the entrypoint.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@condensetech/cdk-constructs.Entrypoint.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The load balancer custom domain name.

---

##### `listener`<sup>Required</sup> <a name="listener" id="@condensetech/cdk-constructs.Entrypoint.property.listener"></a>

```typescript
public readonly listener: IApplicationListener;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationListener

---

##### `priorityAllocator`<sup>Required</sup> <a name="priorityAllocator" id="@condensetech/cdk-constructs.Entrypoint.property.priorityAllocator"></a>

```typescript
public readonly priorityAllocator: IApplicationListenerPriorityAllocator;
```

- *Type:* <a href="#@condensetech/cdk-constructs.IApplicationListenerPriorityAllocator">IApplicationListenerPriorityAllocator</a>

The Application Listener priority allocator for the entrypoint.

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="@condensetech/cdk-constructs.Entrypoint.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

---


### EntrypointStack <a name="EntrypointStack" id="@condensetech/cdk-constructs.EntrypointStack"></a>

- *Implements:* <a href="#@condensetech/cdk-constructs.IEntrypoint">IEntrypoint</a>

The EntrypointStack creates an [Entrypoint](#@condensetech/cdk-constructs.Entrypoint) construct and optionally defines the monitoring configuration. It implements the IEntrypoint interface so that it can be used in other constructs and stacks without requiring to access to the underlying construct.

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.EntrypointStack.Initializer"></a>

```typescript
import { EntrypointStack } from '@condensetech/cdk-constructs'

new EntrypointStack(scope: Construct, id: string, props: EntrypointStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.Initializer.parameter.props">props</a></code> | <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps">EntrypointStackProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.EntrypointStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.EntrypointStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.EntrypointStack.Initializer.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.EntrypointStackProps">EntrypointStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.allocateListenerRule">allocateListenerRule</a></code> | It creates an ApplicationListenerRule for the HTTPS listener of the Entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.referenceListener">referenceListener</a></code> | Utility method that returns the HTTPS listener of the entrypoint in a cross-stack compatible way. |

---

##### `toString` <a name="toString" id="@condensetech/cdk-constructs.EntrypointStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@condensetech/cdk-constructs.EntrypointStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@condensetech/cdk-constructs.EntrypointStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@condensetech/cdk-constructs.EntrypointStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@condensetech/cdk-constructs.EntrypointStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@condensetech/cdk-constructs.EntrypointStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@condensetech/cdk-constructs.EntrypointStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="@condensetech/cdk-constructs.EntrypointStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@condensetech/cdk-constructs.EntrypointStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@condensetech/cdk-constructs.EntrypointStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@condensetech/cdk-constructs.EntrypointStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@condensetech/cdk-constructs.EntrypointStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@condensetech/cdk-constructs.EntrypointStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@condensetech/cdk-constructs.EntrypointStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@condensetech/cdk-constructs.EntrypointStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@condensetech/cdk-constructs.EntrypointStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@condensetech/cdk-constructs.EntrypointStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@condensetech/cdk-constructs.EntrypointStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@condensetech/cdk-constructs.EntrypointStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@condensetech/cdk-constructs.EntrypointStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@condensetech/cdk-constructs.EntrypointStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@condensetech/cdk-constructs.EntrypointStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@condensetech/cdk-constructs.EntrypointStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@condensetech/cdk-constructs.EntrypointStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@condensetech/cdk-constructs.EntrypointStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@condensetech/cdk-constructs.EntrypointStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@condensetech/cdk-constructs.EntrypointStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@condensetech/cdk-constructs.EntrypointStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@condensetech/cdk-constructs.EntrypointStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@condensetech/cdk-constructs.EntrypointStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@condensetech/cdk-constructs.EntrypointStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@condensetech/cdk-constructs.EntrypointStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@condensetech/cdk-constructs.EntrypointStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@condensetech/cdk-constructs.EntrypointStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@condensetech/cdk-constructs.EntrypointStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@condensetech/cdk-constructs.EntrypointStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@condensetech/cdk-constructs.EntrypointStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

##### `allocateListenerRule` <a name="allocateListenerRule" id="@condensetech/cdk-constructs.EntrypointStack.allocateListenerRule"></a>

```typescript
public allocateListenerRule(scope: Construct, id: string, props: AllocateApplicationListenerRuleProps): ApplicationListenerRule
```

It creates an ApplicationListenerRule for the HTTPS listener of the Entrypoint.

This method doesn't require a priority to be explicitly set, and tracks the allocated priorities on a DynamoDB table to avoid conflicts.

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.EntrypointStack.allocateListenerRule.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.EntrypointStack.allocateListenerRule.parameter.id"></a>

- *Type:* string

---

###### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.EntrypointStack.allocateListenerRule.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.AllocateApplicationListenerRuleProps">AllocateApplicationListenerRuleProps</a>

---

##### `referenceListener` <a name="referenceListener" id="@condensetech/cdk-constructs.EntrypointStack.referenceListener"></a>

```typescript
public referenceListener(scope: Construct, id: string): IApplicationListener
```

Utility method that returns the HTTPS listener of the entrypoint in a cross-stack compatible way.

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.EntrypointStack.referenceListener.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.EntrypointStack.referenceListener.parameter.id"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@condensetech/cdk-constructs.EntrypointStack.isConstruct"></a>

```typescript
import { EntrypointStack } from '@condensetech/cdk-constructs'

EntrypointStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@condensetech/cdk-constructs.EntrypointStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@condensetech/cdk-constructs.EntrypointStack.isStack"></a>

```typescript
import { EntrypointStack } from '@condensetech/cdk-constructs'

EntrypointStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@condensetech/cdk-constructs.EntrypointStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@condensetech/cdk-constructs.EntrypointStack.of"></a>

```typescript
import { EntrypointStack } from '@condensetech/cdk-constructs'

EntrypointStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@condensetech/cdk-constructs.EntrypointStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.alb">alb</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer</code> | The ALB that serves as the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.domainName">domainName</a></code> | <code>string</code> | The load balancer custom domain name. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStack.property.priorityAllocator">priorityAllocator</a></code> | <code><a href="#@condensetech/cdk-constructs.IApplicationListenerPriorityAllocator">IApplicationListenerPriorityAllocator</a></code> | The Application Listener priority allocator for the entrypoint. |

---

##### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.EntrypointStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@condensetech/cdk-constructs.EntrypointStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@condensetech/cdk-constructs.EntrypointStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@condensetech/cdk-constructs.EntrypointStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@condensetech/cdk-constructs.EntrypointStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@condensetech/cdk-constructs.EntrypointStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@condensetech/cdk-constructs.EntrypointStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@condensetech/cdk-constructs.EntrypointStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@condensetech/cdk-constructs.EntrypointStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@condensetech/cdk-constructs.EntrypointStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@condensetech/cdk-constructs.EntrypointStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@condensetech/cdk-constructs.EntrypointStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="@condensetech/cdk-constructs.EntrypointStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@condensetech/cdk-constructs.EntrypointStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@condensetech/cdk-constructs.EntrypointStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@condensetech/cdk-constructs.EntrypointStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@condensetech/cdk-constructs.EntrypointStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@condensetech/cdk-constructs.EntrypointStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@condensetech/cdk-constructs.EntrypointStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@condensetech/cdk-constructs.EntrypointStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@condensetech/cdk-constructs.EntrypointStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `alb`<sup>Required</sup> <a name="alb" id="@condensetech/cdk-constructs.EntrypointStack.property.alb"></a>

```typescript
public readonly alb: IApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer

The ALB that serves as the entrypoint.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@condensetech/cdk-constructs.EntrypointStack.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The load balancer custom domain name.

---

##### `priorityAllocator`<sup>Required</sup> <a name="priorityAllocator" id="@condensetech/cdk-constructs.EntrypointStack.property.priorityAllocator"></a>

```typescript
public readonly priorityAllocator: IApplicationListenerPriorityAllocator;
```

- *Type:* <a href="#@condensetech/cdk-constructs.IApplicationListenerPriorityAllocator">IApplicationListenerPriorityAllocator</a>

The Application Listener priority allocator for the entrypoint.

---


### NaiveBasicAuthCloudfrontFunction <a name="NaiveBasicAuthCloudfrontFunction" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction"></a>

A CloudFront function that implements a naive basic auth mechanism.

The function is naive because the basic auth string isn't treated as a secret and it's hardcoded in the function code.

This function is useful for simple use cases where you need to protect a CloudFront distribution with basic auth. A typical use case is to ensure that a staging environment isn't indexed by crawlers (just in case robots.txt is totally ignored).

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.Initializer"></a>

```typescript
import { NaiveBasicAuthCloudfrontFunction } from '@condensetech/cdk-constructs'

new NaiveBasicAuthCloudfrontFunction(scope: Construct, id: string, props: NaiveBasicAuthCloudfrontFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.Initializer.parameter.props">props</a></code> | <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionProps">NaiveBasicAuthCloudfrontFunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionProps">NaiveBasicAuthCloudfrontFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.fromFunctionAttributes">fromFunctionAttributes</a></code> | Imports a function by its name and ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.isConstruct"></a>

```typescript
import { NaiveBasicAuthCloudfrontFunction } from '@condensetech/cdk-constructs'

NaiveBasicAuthCloudfrontFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.isOwnedResource"></a>

```typescript
import { NaiveBasicAuthCloudfrontFunction } from '@condensetech/cdk-constructs'

NaiveBasicAuthCloudfrontFunction.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.isResource"></a>

```typescript
import { NaiveBasicAuthCloudfrontFunction } from '@condensetech/cdk-constructs'

NaiveBasicAuthCloudfrontFunction.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromFunctionAttributes` <a name="fromFunctionAttributes" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.fromFunctionAttributes"></a>

```typescript
import { NaiveBasicAuthCloudfrontFunction } from '@condensetech/cdk-constructs'

NaiveBasicAuthCloudfrontFunction.fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes)
```

Imports a function by its name and ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.fromFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.fromFunctionAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.fromFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_cloudfront.FunctionAttributes

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.property.functionArn">functionArn</a></code> | <code>string</code> | the ARN of the CloudFront function. |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.property.functionName">functionName</a></code> | <code>string</code> | the name of the CloudFront function. |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.property.functionRuntime">functionRuntime</a></code> | <code>string</code> | the runtime of the CloudFront function. |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.property.functionStage">functionStage</a></code> | <code>string</code> | the deployment stage of the CloudFront function. |

---

##### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

the ARN of the CloudFront function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

the name of the CloudFront function.

---

##### `functionRuntime`<sup>Required</sup> <a name="functionRuntime" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.property.functionRuntime"></a>

```typescript
public readonly functionRuntime: string;
```

- *Type:* string

the runtime of the CloudFront function.

---

##### `functionStage`<sup>Required</sup> <a name="functionStage" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunction.property.functionStage"></a>

```typescript
public readonly functionStage: string;
```

- *Type:* string

the deployment stage of the CloudFront function.

---


### Networking <a name="Networking" id="@condensetech/cdk-constructs.Networking"></a>

- *Implements:* <a href="#@condensetech/cdk-constructs.INetworking">INetworking</a>

The Networking construct creates a VPC which can have public, private, and isolated subnets.

It enforces to define a CIDR block for the VPC, which is a best practice.

If the `natGateways` property is set to a positive integer, the VPC will be created with private subnets that have access to the internet through NAT gateways.
If instead the `natGateways` property is set to 0, the VPC will have only public and isolated subnets. In this case, the subnets will anyway use a cidrMask of `24`, so that changing the number of NAT gateways will not require to re-provision the VPC.

In addition, this construct can also take care of creating a bastion host in the VPC by using the latest Amazon Linux AMI with the smallest available instance (t4g.nano), if the `bastionHostEnabled` property is set to `true`.

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.Networking.Initializer"></a>

```typescript
import { Networking } from '@condensetech/cdk-constructs'

new Networking(scope: Construct, id: string, props: NetworkingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.Networking.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.Networking.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.Networking.Initializer.parameter.props">props</a></code> | <code><a href="#@condensetech/cdk-constructs.NetworkingProps">NetworkingProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.Networking.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.Networking.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.Networking.Initializer.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.NetworkingProps">NetworkingProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.Networking.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@condensetech/cdk-constructs.Networking.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.Networking.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@condensetech/cdk-constructs.Networking.isConstruct"></a>

```typescript
import { Networking } from '@condensetech/cdk-constructs'

Networking.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@condensetech/cdk-constructs.Networking.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.Networking.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@condensetech/cdk-constructs.Networking.property.hasPrivateSubnets">hasPrivateSubnets</a></code> | <code>boolean</code> | Returns if the VPC has private subnets (with access to internet through a NAT gateway). |
| <code><a href="#@condensetech/cdk-constructs.Networking.property.isolatedSubnets">isolatedSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Returns the isolated subnets of the VPC (without access to internet). |
| <code><a href="#@condensetech/cdk-constructs.Networking.property.publicSubnets">publicSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Returns the public subnets of the VPC. |
| <code><a href="#@condensetech/cdk-constructs.Networking.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the networking resources are created. |
| <code><a href="#@condensetech/cdk-constructs.Networking.property.bastionHost">bastionHost</a></code> | <code>aws-cdk-lib.aws_ec2.IConnectable</code> | Returns the bastion host instance of the VPC, if any. |
| <code><a href="#@condensetech/cdk-constructs.Networking.property.privateSubnets">privateSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Returns the private subnets of the VPC (with access to internet through a NAT gateway). |

---

##### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.Networking.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `hasPrivateSubnets`<sup>Required</sup> <a name="hasPrivateSubnets" id="@condensetech/cdk-constructs.Networking.property.hasPrivateSubnets"></a>

```typescript
public readonly hasPrivateSubnets: boolean;
```

- *Type:* boolean

Returns if the VPC has private subnets (with access to internet through a NAT gateway).

---

##### `isolatedSubnets`<sup>Required</sup> <a name="isolatedSubnets" id="@condensetech/cdk-constructs.Networking.property.isolatedSubnets"></a>

```typescript
public readonly isolatedSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

Returns the isolated subnets of the VPC (without access to internet).

---

##### `publicSubnets`<sup>Required</sup> <a name="publicSubnets" id="@condensetech/cdk-constructs.Networking.property.publicSubnets"></a>

```typescript
public readonly publicSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

Returns the public subnets of the VPC.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@condensetech/cdk-constructs.Networking.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the networking resources are created.

---

##### `bastionHost`<sup>Optional</sup> <a name="bastionHost" id="@condensetech/cdk-constructs.Networking.property.bastionHost"></a>

```typescript
public readonly bastionHost: IConnectable;
```

- *Type:* aws-cdk-lib.aws_ec2.IConnectable

Returns the bastion host instance of the VPC, if any.

---

##### `privateSubnets`<sup>Optional</sup> <a name="privateSubnets" id="@condensetech/cdk-constructs.Networking.property.privateSubnets"></a>

```typescript
public readonly privateSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

Returns the private subnets of the VPC (with access to internet through a NAT gateway).

---


### NetworkingStack <a name="NetworkingStack" id="@condensetech/cdk-constructs.NetworkingStack"></a>

- *Implements:* <a href="#@condensetech/cdk-constructs.INetworking">INetworking</a>

The NetworkingStack creates a [Networking](#@condensetech/cdk-constructs.Networking) construct. It implements the INetworking interface so that it can be used in other constructs and stacks without requiring to access to the underlying construct.

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.NetworkingStack.Initializer"></a>

```typescript
import { NetworkingStack } from '@condensetech/cdk-constructs'

new NetworkingStack(scope: Construct, id: string, props: NetworkingStackProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.Initializer.parameter.props">props</a></code> | <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps">NetworkingStackProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.NetworkingStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.NetworkingStack.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.NetworkingStack.Initializer.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.NetworkingStackProps">NetworkingStackProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.addDependency">addDependency</a></code> | Add a dependency between this stack and another stack. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.addMetadata">addMetadata</a></code> | Adds an arbitary key-value pair, with information you want to record about the stack. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.addTransform">addTransform</a></code> | Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.exportStringListValue">exportStringListValue</a></code> | Create a CloudFormation Export for a string list value. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.exportValue">exportValue</a></code> | Create a CloudFormation Export for a string value. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.formatArn">formatArn</a></code> | Creates an ARN from components. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.getLogicalId">getLogicalId</a></code> | Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.regionalFact">regionalFact</a></code> | Look up a fact value for the given fact for the region of this stack. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.renameLogicalId">renameLogicalId</a></code> | Rename a generated logical identities. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.reportMissingContextKey">reportMissingContextKey</a></code> | Indicate that a context key was expected. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.resolve">resolve</a></code> | Resolve a tokenized value in the context of the current stack. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.splitArn">splitArn</a></code> | Splits the provided ARN into its components. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.toJsonString">toJsonString</a></code> | Convert an object, potentially containing tokens, to a JSON string. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.toYamlString">toYamlString</a></code> | Convert an object, potentially containing tokens, to a YAML string. |

---

##### `toString` <a name="toString" id="@condensetech/cdk-constructs.NetworkingStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDependency` <a name="addDependency" id="@condensetech/cdk-constructs.NetworkingStack.addDependency"></a>

```typescript
public addDependency(target: Stack, reason?: string): void
```

Add a dependency between this stack and another stack.

This can be used to define dependencies between any two stacks within an
app, and also supports nested stacks.

###### `target`<sup>Required</sup> <a name="target" id="@condensetech/cdk-constructs.NetworkingStack.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.Stack

---

###### `reason`<sup>Optional</sup> <a name="reason" id="@condensetech/cdk-constructs.NetworkingStack.addDependency.parameter.reason"></a>

- *Type:* string

---

##### `addMetadata` <a name="addMetadata" id="@condensetech/cdk-constructs.NetworkingStack.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Adds an arbitary key-value pair, with information you want to record about the stack.

These get translated to the Metadata section of the generated template.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html)

###### `key`<sup>Required</sup> <a name="key" id="@condensetech/cdk-constructs.NetworkingStack.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@condensetech/cdk-constructs.NetworkingStack.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addTransform` <a name="addTransform" id="@condensetech/cdk-constructs.NetworkingStack.addTransform"></a>

```typescript
public addTransform(transform: string): void
```

Add a Transform to this stack. A Transform is a macro that AWS CloudFormation uses to process your template.

Duplicate values are removed when stack is synthesized.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html)

*Example*

```typescript
declare const stack: Stack;

stack.addTransform('AWS::Serverless-2016-10-31')
```


###### `transform`<sup>Required</sup> <a name="transform" id="@condensetech/cdk-constructs.NetworkingStack.addTransform.parameter.transform"></a>

- *Type:* string

The transform to add.

---

##### `exportStringListValue` <a name="exportStringListValue" id="@condensetech/cdk-constructs.NetworkingStack.exportStringListValue"></a>

```typescript
public exportStringListValue(exportedValue: any, options?: ExportValueOptions): string[]
```

Create a CloudFormation Export for a string list value.

Returns a string list representing the corresponding `Fn.importValue()`
expression for this Export. The export expression is automatically wrapped with an
`Fn::Join` and the import value with an `Fn::Split`, since CloudFormation can only
export strings. You can control the name for the export by passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

See `exportValue` for an example of this process.

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@condensetech/cdk-constructs.NetworkingStack.exportStringListValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@condensetech/cdk-constructs.NetworkingStack.exportStringListValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `exportValue` <a name="exportValue" id="@condensetech/cdk-constructs.NetworkingStack.exportValue"></a>

```typescript
public exportValue(exportedValue: any, options?: ExportValueOptions): string
```

Create a CloudFormation Export for a string value.

Returns a string representing the corresponding `Fn.importValue()`
expression for this Export. You can control the name for the export by
passing the `name` option.

If you don't supply a value for `name`, the value you're exporting must be
a Resource attribute (for example: `bucket.bucketName`) and it will be
given the same name as the automatic cross-stack reference that would be created
if you used the attribute in another Stack.

One of the uses for this method is to *remove* the relationship between
two Stacks established by automatic cross-stack references. It will
temporarily ensure that the CloudFormation Export still exists while you
remove the reference from the consuming stack. After that, you can remove
the resource and the manual export.

## Example

Here is how the process works. Let's say there are two stacks,
`producerStack` and `consumerStack`, and `producerStack` has a bucket
called `bucket`, which is referenced by `consumerStack` (perhaps because
an AWS Lambda Function writes into it, or something like that).

It is not safe to remove `producerStack.bucket` because as the bucket is being
deleted, `consumerStack` might still be using it.

Instead, the process takes two deployments:

### Deployment 1: break the relationship

- Make sure `consumerStack` no longer references `bucket.bucketName` (maybe the consumer
  stack now uses its own bucket, or it writes to an AWS DynamoDB table, or maybe you just
  remove the Lambda Function altogether).
- In the `ProducerStack` class, call `this.exportValue(this.bucket.bucketName)`. This
  will make sure the CloudFormation Export continues to exist while the relationship
  between the two stacks is being broken.
- Deploy (this will effectively only change the `consumerStack`, but it's safe to deploy both).

### Deployment 2: remove the bucket resource

- You are now free to remove the `bucket` resource from `producerStack`.
- Don't forget to remove the `exportValue()` call as well.
- Deploy again (this time only the `producerStack` will be changed -- the bucket will be deleted).

###### `exportedValue`<sup>Required</sup> <a name="exportedValue" id="@condensetech/cdk-constructs.NetworkingStack.exportValue.parameter.exportedValue"></a>

- *Type:* any

---

###### `options`<sup>Optional</sup> <a name="options" id="@condensetech/cdk-constructs.NetworkingStack.exportValue.parameter.options"></a>

- *Type:* aws-cdk-lib.ExportValueOptions

---

##### `formatArn` <a name="formatArn" id="@condensetech/cdk-constructs.NetworkingStack.formatArn"></a>

```typescript
public formatArn(components: ArnComponents): string
```

Creates an ARN from components.

If `partition`, `region` or `account` are not specified, the stack's
partition, region and account will be used.

If any component is the empty string, an empty string will be inserted
into the generated ARN at the location that component corresponds to.

The ARN will be formatted as follows:

  arn:{partition}:{service}:{region}:{account}:{resource}{sep}{resource-name}

The required ARN pieces that are omitted will be taken from the stack that
the 'scope' is attached to. If all ARN pieces are supplied, the supplied scope
can be 'undefined'.

###### `components`<sup>Required</sup> <a name="components" id="@condensetech/cdk-constructs.NetworkingStack.formatArn.parameter.components"></a>

- *Type:* aws-cdk-lib.ArnComponents

---

##### `getLogicalId` <a name="getLogicalId" id="@condensetech/cdk-constructs.NetworkingStack.getLogicalId"></a>

```typescript
public getLogicalId(element: CfnElement): string
```

Allocates a stack-unique CloudFormation-compatible logical identity for a specific resource.

This method is called when a `CfnElement` is created and used to render the
initial logical identity of resources. Logical ID renames are applied at
this stage.

This method uses the protected method `allocateLogicalId` to render the
logical ID for an element. To modify the naming scheme, extend the `Stack`
class and override this method.

###### `element`<sup>Required</sup> <a name="element" id="@condensetech/cdk-constructs.NetworkingStack.getLogicalId.parameter.element"></a>

- *Type:* aws-cdk-lib.CfnElement

The CloudFormation element for which a logical identity is needed.

---

##### `regionalFact` <a name="regionalFact" id="@condensetech/cdk-constructs.NetworkingStack.regionalFact"></a>

```typescript
public regionalFact(factName: string, defaultValue?: string): string
```

Look up a fact value for the given fact for the region of this stack.

Will return a definite value only if the region of the current stack is resolved.
If not, a lookup map will be added to the stack and the lookup will be done at
CDK deployment time.

What regions will be included in the lookup map is controlled by the
`@aws-cdk/core:target-partitions` context value: it must be set to a list
of partitions, and only regions from the given partitions will be included.
If no such context key is set, all regions will be included.

This function is intended to be used by construct library authors. Application
builders can rely on the abstractions offered by construct libraries and do
not have to worry about regional facts.

If `defaultValue` is not given, it is an error if the fact is unknown for
the given region.

###### `factName`<sup>Required</sup> <a name="factName" id="@condensetech/cdk-constructs.NetworkingStack.regionalFact.parameter.factName"></a>

- *Type:* string

---

###### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@condensetech/cdk-constructs.NetworkingStack.regionalFact.parameter.defaultValue"></a>

- *Type:* string

---

##### `renameLogicalId` <a name="renameLogicalId" id="@condensetech/cdk-constructs.NetworkingStack.renameLogicalId"></a>

```typescript
public renameLogicalId(oldId: string, newId: string): void
```

Rename a generated logical identities.

To modify the naming scheme strategy, extend the `Stack` class and
override the `allocateLogicalId` method.

###### `oldId`<sup>Required</sup> <a name="oldId" id="@condensetech/cdk-constructs.NetworkingStack.renameLogicalId.parameter.oldId"></a>

- *Type:* string

---

###### `newId`<sup>Required</sup> <a name="newId" id="@condensetech/cdk-constructs.NetworkingStack.renameLogicalId.parameter.newId"></a>

- *Type:* string

---

##### `reportMissingContextKey` <a name="reportMissingContextKey" id="@condensetech/cdk-constructs.NetworkingStack.reportMissingContextKey"></a>

```typescript
public reportMissingContextKey(report: MissingContext): void
```

Indicate that a context key was expected.

Contains instructions which will be emitted into the cloud assembly on how
the key should be supplied.

###### `report`<sup>Required</sup> <a name="report" id="@condensetech/cdk-constructs.NetworkingStack.reportMissingContextKey.parameter.report"></a>

- *Type:* aws-cdk-lib.cloud_assembly_schema.MissingContext

The set of parameters needed to obtain the context.

---

##### `resolve` <a name="resolve" id="@condensetech/cdk-constructs.NetworkingStack.resolve"></a>

```typescript
public resolve(obj: any): any
```

Resolve a tokenized value in the context of the current stack.

###### `obj`<sup>Required</sup> <a name="obj" id="@condensetech/cdk-constructs.NetworkingStack.resolve.parameter.obj"></a>

- *Type:* any

---

##### `splitArn` <a name="splitArn" id="@condensetech/cdk-constructs.NetworkingStack.splitArn"></a>

```typescript
public splitArn(arn: string, arnFormat: ArnFormat): ArnComponents
```

Splits the provided ARN into its components.

Works both if 'arn' is a string like 'arn:aws:s3:::bucket',
and a Token representing a dynamic CloudFormation expression
(in which case the returned components will also be dynamic CloudFormation expressions,
encoded as Tokens).

###### `arn`<sup>Required</sup> <a name="arn" id="@condensetech/cdk-constructs.NetworkingStack.splitArn.parameter.arn"></a>

- *Type:* string

the ARN to split into its components.

---

###### `arnFormat`<sup>Required</sup> <a name="arnFormat" id="@condensetech/cdk-constructs.NetworkingStack.splitArn.parameter.arnFormat"></a>

- *Type:* aws-cdk-lib.ArnFormat

the expected format of 'arn' - depends on what format the service 'arn' represents uses.

---

##### `toJsonString` <a name="toJsonString" id="@condensetech/cdk-constructs.NetworkingStack.toJsonString"></a>

```typescript
public toJsonString(obj: any, space?: number): string
```

Convert an object, potentially containing tokens, to a JSON string.

###### `obj`<sup>Required</sup> <a name="obj" id="@condensetech/cdk-constructs.NetworkingStack.toJsonString.parameter.obj"></a>

- *Type:* any

---

###### `space`<sup>Optional</sup> <a name="space" id="@condensetech/cdk-constructs.NetworkingStack.toJsonString.parameter.space"></a>

- *Type:* number

---

##### `toYamlString` <a name="toYamlString" id="@condensetech/cdk-constructs.NetworkingStack.toYamlString"></a>

```typescript
public toYamlString(obj: any): string
```

Convert an object, potentially containing tokens, to a YAML string.

###### `obj`<sup>Required</sup> <a name="obj" id="@condensetech/cdk-constructs.NetworkingStack.toYamlString.parameter.obj"></a>

- *Type:* any

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.isStack">isStack</a></code> | Return whether the given object is a Stack. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.of">of</a></code> | Looks up the first stack scope in which `construct` is defined. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@condensetech/cdk-constructs.NetworkingStack.isConstruct"></a>

```typescript
import { NetworkingStack } from '@condensetech/cdk-constructs'

NetworkingStack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@condensetech/cdk-constructs.NetworkingStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStack` <a name="isStack" id="@condensetech/cdk-constructs.NetworkingStack.isStack"></a>

```typescript
import { NetworkingStack } from '@condensetech/cdk-constructs'

NetworkingStack.isStack(x: any)
```

Return whether the given object is a Stack.

We do attribute detection since we can't reliably use 'instanceof'.

###### `x`<sup>Required</sup> <a name="x" id="@condensetech/cdk-constructs.NetworkingStack.isStack.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@condensetech/cdk-constructs.NetworkingStack.of"></a>

```typescript
import { NetworkingStack } from '@condensetech/cdk-constructs'

NetworkingStack.of(construct: IConstruct)
```

Looks up the first stack scope in which `construct` is defined.

Fails if there is no stack up the tree.

###### `construct`<sup>Required</sup> <a name="construct" id="@condensetech/cdk-constructs.NetworkingStack.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

The construct to start the search from.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.account">account</a></code> | <code>string</code> | The AWS account into which this stack will be deployed. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.artifactId">artifactId</a></code> | <code>string</code> | The ID of the cloud assembly artifact for this stack. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.bundlingRequired">bundlingRequired</a></code> | <code>boolean</code> | Indicates whether the stack requires bundling or not. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.dependencies">dependencies</a></code> | <code>aws-cdk-lib.Stack[]</code> | Return the stacks this stack depends on. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.environment">environment</a></code> | <code>string</code> | The environment coordinates in which this stack is deployed. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.nested">nested</a></code> | <code>boolean</code> | Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | Returns the list of notification Amazon Resource Names (ARNs) for the current stack. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.partition">partition</a></code> | <code>string</code> | The partition in which this stack is defined. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.region">region</a></code> | <code>string</code> | The AWS region into which this stack will be deployed (e.g. `us-west-2`). |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.stackId">stackId</a></code> | <code>string</code> | The ID of the stack. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.stackName">stackName</a></code> | <code>string</code> | The concrete CloudFormation physical stack name. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method for this stack. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Tags to be applied to the stack. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.templateFile">templateFile</a></code> | <code>string</code> | The name of the CloudFormation template file emitted to the output directory during synthesis. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.templateOptions">templateOptions</a></code> | <code>aws-cdk-lib.ITemplateOptions</code> | Options for CloudFormation template (like version, transform, description). |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | The Amazon domain suffix for the region in which this stack is defined. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.nestedStackParent">nestedStackParent</a></code> | <code>aws-cdk-lib.Stack</code> | If this is a nested stack, returns it's parent stack. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.nestedStackResource">nestedStackResource</a></code> | <code>aws-cdk-lib.CfnResource</code> | If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether termination protection is enabled for this stack. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.hasPrivateSubnets">hasPrivateSubnets</a></code> | <code>boolean</code> | Returns if the VPC has private subnets (with access to internet through a NAT gateway). |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.isolatedSubnets">isolatedSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Returns the isolated subnets of the VPC (without access to internet). |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.publicSubnets">publicSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Returns the public subnets of the VPC. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the networking resources are created. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.bastionHost">bastionHost</a></code> | <code>aws-cdk-lib.aws_ec2.IConnectable</code> | Returns the bastion host instance of the VPC, if any. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStack.property.privateSubnets">privateSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Returns the private subnets of the VPC (with access to internet through a NAT gateway). |

---

##### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.NetworkingStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `account`<sup>Required</sup> <a name="account" id="@condensetech/cdk-constructs.NetworkingStack.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The AWS account into which this stack will be deployed.

This value is resolved according to the following rules:

1. The value provided to `env.account` when the stack is defined. This can
   either be a concrete account (e.g. `585695031111`) or the
   `Aws.ACCOUNT_ID` token.
3. `Aws.ACCOUNT_ID`, which represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::AccountId" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.account)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **account-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@condensetech/cdk-constructs.NetworkingStack.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

The ID of the cloud assembly artifact for this stack.

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@condensetech/cdk-constructs.NetworkingStack.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

Returns the list of AZs that are available in the AWS environment (account/region) associated with this stack.

If the stack is environment-agnostic (either account and/or region are
tokens), this property will return an array with 2 tokens that will resolve
at deploy-time to the first two availability zones returned from CloudFormation's
`Fn::GetAZs` intrinsic function.

If they are not available in the context, returns a set of dummy values and
reports them as missing, and let the CLI resolve them by calling EC2
`DescribeAvailabilityZones` on the target environment.

To specify a different strategy for selecting availability zones override this method.

---

##### `bundlingRequired`<sup>Required</sup> <a name="bundlingRequired" id="@condensetech/cdk-constructs.NetworkingStack.property.bundlingRequired"></a>

```typescript
public readonly bundlingRequired: boolean;
```

- *Type:* boolean

Indicates whether the stack requires bundling or not.

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@condensetech/cdk-constructs.NetworkingStack.property.dependencies"></a>

```typescript
public readonly dependencies: Stack[];
```

- *Type:* aws-cdk-lib.Stack[]

Return the stacks this stack depends on.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@condensetech/cdk-constructs.NetworkingStack.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The environment coordinates in which this stack is deployed.

In the form
`aws://account/region`. Use `stack.account` and `stack.region` to obtain
the specific values, no need to parse.

You can use this value to determine if two stacks are targeting the same
environment.

If either `stack.account` or `stack.region` are not concrete values (e.g.
`Aws.ACCOUNT_ID` or `Aws.REGION`) the special strings `unknown-account` and/or
`unknown-region` will be used respectively to indicate this stack is
region/account-agnostic.

---

##### `nested`<sup>Required</sup> <a name="nested" id="@condensetech/cdk-constructs.NetworkingStack.property.nested"></a>

```typescript
public readonly nested: boolean;
```

- *Type:* boolean

Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@condensetech/cdk-constructs.NetworkingStack.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

Returns the list of notification Amazon Resource Names (ARNs) for the current stack.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@condensetech/cdk-constructs.NetworkingStack.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

The partition in which this stack is defined.

---

##### `region`<sup>Required</sup> <a name="region" id="@condensetech/cdk-constructs.NetworkingStack.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region into which this stack will be deployed (e.g. `us-west-2`).

This value is resolved according to the following rules:

1. The value provided to `env.region` when the stack is defined. This can
   either be a concrete region (e.g. `us-west-2`) or the `Aws.REGION`
   token.
3. `Aws.REGION`, which is represents the CloudFormation intrinsic reference
   `{ "Ref": "AWS::Region" }` encoded as a string token.

Preferably, you should use the return value as an opaque string and not
attempt to parse it to implement your logic. If you do, you must first
check that it is a concrete value an not an unresolved token. If this
value is an unresolved token (`Token.isUnresolved(stack.region)` returns
`true`), this implies that the user wishes that this stack will synthesize
into a **region-agnostic template**. In this case, your code should either
fail (throw an error, emit a synth error using `Annotations.of(construct).addError()`) or
implement some other region-agnostic behavior.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@condensetech/cdk-constructs.NetworkingStack.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

The ID of the stack.

---

*Example*

```typescript
// After resolving, looks like
'arn:aws:cloudformation:us-west-2:123456789012:stack/teststack/51af3dc0-da77-11e4-872e-1234567db123'
```


##### `stackName`<sup>Required</sup> <a name="stackName" id="@condensetech/cdk-constructs.NetworkingStack.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

The concrete CloudFormation physical stack name.

This is either the name defined explicitly in the `stackName` prop or
allocated based on the stack's location in the construct tree. Stacks that
are directly defined under the app use their construct `id` as their stack
name. Stacks that are defined deeper within the tree will use a hashed naming
scheme based on the construct path to ensure uniqueness.

If you wish to obtain the deploy-time AWS::StackName intrinsic,
you can use `Aws.STACK_NAME` directly.

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="@condensetech/cdk-constructs.NetworkingStack.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer

Synthesis method for this stack.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@condensetech/cdk-constructs.NetworkingStack.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Tags to be applied to the stack.

---

##### `templateFile`<sup>Required</sup> <a name="templateFile" id="@condensetech/cdk-constructs.NetworkingStack.property.templateFile"></a>

```typescript
public readonly templateFile: string;
```

- *Type:* string

The name of the CloudFormation template file emitted to the output directory during synthesis.

Example value: `MyStack.template.json`

---

##### `templateOptions`<sup>Required</sup> <a name="templateOptions" id="@condensetech/cdk-constructs.NetworkingStack.property.templateOptions"></a>

```typescript
public readonly templateOptions: ITemplateOptions;
```

- *Type:* aws-cdk-lib.ITemplateOptions

Options for CloudFormation template (like version, transform, description).

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@condensetech/cdk-constructs.NetworkingStack.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

The Amazon domain suffix for the region in which this stack is defined.

---

##### `nestedStackParent`<sup>Optional</sup> <a name="nestedStackParent" id="@condensetech/cdk-constructs.NetworkingStack.property.nestedStackParent"></a>

```typescript
public readonly nestedStackParent: Stack;
```

- *Type:* aws-cdk-lib.Stack

If this is a nested stack, returns it's parent stack.

---

##### `nestedStackResource`<sup>Optional</sup> <a name="nestedStackResource" id="@condensetech/cdk-constructs.NetworkingStack.property.nestedStackResource"></a>

```typescript
public readonly nestedStackResource: CfnResource;
```

- *Type:* aws-cdk-lib.CfnResource

If this is a nested stack, this represents its `AWS::CloudFormation::Stack` resource.

`undefined` for top-level (non-nested) stacks.

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@condensetech/cdk-constructs.NetworkingStack.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean

Whether termination protection is enabled for this stack.

---

##### `hasPrivateSubnets`<sup>Required</sup> <a name="hasPrivateSubnets" id="@condensetech/cdk-constructs.NetworkingStack.property.hasPrivateSubnets"></a>

```typescript
public readonly hasPrivateSubnets: boolean;
```

- *Type:* boolean

Returns if the VPC has private subnets (with access to internet through a NAT gateway).

---

##### `isolatedSubnets`<sup>Required</sup> <a name="isolatedSubnets" id="@condensetech/cdk-constructs.NetworkingStack.property.isolatedSubnets"></a>

```typescript
public readonly isolatedSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

Returns the isolated subnets of the VPC (without access to internet).

---

##### `publicSubnets`<sup>Required</sup> <a name="publicSubnets" id="@condensetech/cdk-constructs.NetworkingStack.property.publicSubnets"></a>

```typescript
public readonly publicSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

Returns the public subnets of the VPC.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@condensetech/cdk-constructs.NetworkingStack.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the networking resources are created.

---

##### `bastionHost`<sup>Optional</sup> <a name="bastionHost" id="@condensetech/cdk-constructs.NetworkingStack.property.bastionHost"></a>

```typescript
public readonly bastionHost: IConnectable;
```

- *Type:* aws-cdk-lib.aws_ec2.IConnectable

Returns the bastion host instance of the VPC, if any.

---

##### `privateSubnets`<sup>Optional</sup> <a name="privateSubnets" id="@condensetech/cdk-constructs.NetworkingStack.property.privateSubnets"></a>

```typescript
public readonly privateSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

Returns the private subnets of the VPC (with access to internet through a NAT gateway).

---


## Structs <a name="Structs" id="Structs"></a>

### AlarmDefinitionProps <a name="AlarmDefinitionProps" id="@condensetech/cdk-constructs.AlarmDefinitionProps"></a>

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.AlarmDefinitionProps.Initializer"></a>

```typescript
import { AlarmDefinitionProps } from '@condensetech/cdk-constructs'

const alarmDefinitionProps: AlarmDefinitionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.AlarmDefinitionProps.property.alarmId">alarmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.AlarmDefinitionProps.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.AlarmDefinitionProps.property.metric">metric</a></code> | <code>aws-cdk-lib.aws_cloudwatch.IMetric</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.AlarmDefinitionProps.property.alarmDescription">alarmDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.AlarmDefinitionProps.property.alarmName">alarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.AlarmDefinitionProps.property.comparisonOperator">comparisonOperator</a></code> | <code>aws-cdk-lib.aws_cloudwatch.ComparisonOperator</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.AlarmDefinitionProps.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |

---

##### `alarmId`<sup>Required</sup> <a name="alarmId" id="@condensetech/cdk-constructs.AlarmDefinitionProps.property.alarmId"></a>

```typescript
public readonly alarmId: string;
```

- *Type:* string

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@condensetech/cdk-constructs.AlarmDefinitionProps.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `metric`<sup>Required</sup> <a name="metric" id="@condensetech/cdk-constructs.AlarmDefinitionProps.property.metric"></a>

```typescript
public readonly metric: IMetric;
```

- *Type:* aws-cdk-lib.aws_cloudwatch.IMetric

---

##### `alarmDescription`<sup>Optional</sup> <a name="alarmDescription" id="@condensetech/cdk-constructs.AlarmDefinitionProps.property.alarmDescription"></a>

```typescript
public readonly alarmDescription: string;
```

- *Type:* string

---

##### `alarmName`<sup>Optional</sup> <a name="alarmName" id="@condensetech/cdk-constructs.AlarmDefinitionProps.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@condensetech/cdk-constructs.AlarmDefinitionProps.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: ComparisonOperator;
```

- *Type:* aws-cdk-lib.aws_cloudwatch.ComparisonOperator

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@condensetech/cdk-constructs.AlarmDefinitionProps.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

### AllocateApplicationListenerRuleProps <a name="AllocateApplicationListenerRuleProps" id="@condensetech/cdk-constructs.AllocateApplicationListenerRuleProps"></a>

Properties for the ApplicationListenerRule.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.AllocateApplicationListenerRuleProps.Initializer"></a>

```typescript
import { AllocateApplicationListenerRuleProps } from '@condensetech/cdk-constructs'

const allocateApplicationListenerRuleProps: AllocateApplicationListenerRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.AllocateApplicationListenerRuleProps.property.action">action</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ListenerAction</code> | Action to perform when requests are received. |
| <code><a href="#@condensetech/cdk-constructs.AllocateApplicationListenerRuleProps.property.conditions">conditions</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ListenerCondition[]</code> | Rule applies if matches the conditions. |
| <code><a href="#@condensetech/cdk-constructs.AllocateApplicationListenerRuleProps.property.priority">priority</a></code> | <code>number</code> | Priority of the rule. |
| <code><a href="#@condensetech/cdk-constructs.AllocateApplicationListenerRuleProps.property.targetGroups">targetGroups</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationTargetGroup[]</code> | Target groups to forward requests to. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@condensetech/cdk-constructs.AllocateApplicationListenerRuleProps.property.action"></a>

```typescript
public readonly action: ListenerAction;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ListenerAction
- *Default:* No action

Action to perform when requests are received.

Only one of `action`, `fixedResponse`, `redirectResponse` or `targetGroups` can be specified.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@condensetech/cdk-constructs.AllocateApplicationListenerRuleProps.property.conditions"></a>

```typescript
public readonly conditions: ListenerCondition[];
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ListenerCondition[]
- *Default:* No conditions.

Rule applies if matches the conditions.

> [https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html)

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@condensetech/cdk-constructs.AllocateApplicationListenerRuleProps.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number
- *Default:* The rule will be assigned a priority automatically.

Priority of the rule.

The rule with the lowest priority will be used for every request.

---

##### `targetGroups`<sup>Optional</sup> <a name="targetGroups" id="@condensetech/cdk-constructs.AllocateApplicationListenerRuleProps.property.targetGroups"></a>

```typescript
public readonly targetGroups: IApplicationTargetGroup[];
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationTargetGroup[]
- *Default:* No target groups.

Target groups to forward requests to.

Only one of `action`, `fixedResponse`, `redirectResponse` or `targetGroups` can be specified.

Implies a `forward` action.

---

### AllocatePriorityProps <a name="AllocatePriorityProps" id="@condensetech/cdk-constructs.AllocatePriorityProps"></a>

Properties for allocating a priority to an application listener rule.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.AllocatePriorityProps.Initializer"></a>

```typescript
import { AllocatePriorityProps } from '@condensetech/cdk-constructs'

const allocatePriorityProps: AllocatePriorityProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.AllocatePriorityProps.property.priority">priority</a></code> | <code>number</code> | The priority to allocate. |

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@condensetech/cdk-constructs.AllocatePriorityProps.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number
- *Default:* a priority will be allocated automatically.

The priority to allocate.

---

### ApplicationListenerPriorityAllocatorConfig <a name="ApplicationListenerPriorityAllocatorConfig" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorConfig"></a>

Overridden config for the ApplicationListenerPriorityAllocator construct.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorConfig.Initializer"></a>

```typescript
import { ApplicationListenerPriorityAllocatorConfig } from '@condensetech/cdk-constructs'

const applicationListenerPriorityAllocatorConfig: ApplicationListenerPriorityAllocatorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorConfig.property.priorityInitialValue">priorityInitialValue</a></code> | <code>number</code> | The initial priority value to start from. |
| <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorConfig.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy to apply to the DynamoDB table. |

---

##### `priorityInitialValue`<sup>Optional</sup> <a name="priorityInitialValue" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorConfig.property.priorityInitialValue"></a>

```typescript
public readonly priorityInitialValue: number;
```

- *Type:* number
- *Default:* 1

The initial priority value to start from.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorConfig.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* `RemovalPolicy.DESTROY`

The removal policy to apply to the DynamoDB table.

---

### ApplicationListenerPriorityAllocatorProps <a name="ApplicationListenerPriorityAllocatorProps" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorProps"></a>

Properties for the ApplicationListenerPriorityAllocator construct.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorProps.Initializer"></a>

```typescript
import { ApplicationListenerPriorityAllocatorProps } from '@condensetech/cdk-constructs'

const applicationListenerPriorityAllocatorProps: ApplicationListenerPriorityAllocatorProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorProps.property.priorityInitialValue">priorityInitialValue</a></code> | <code>number</code> | The initial priority value to start from. |
| <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy to apply to the DynamoDB table. |
| <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorProps.property.listener">listener</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationListener</code> | Application Load Balancer Listener to allocate priorities for. |
| <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorProps.property.priorityAllocatorName">priorityAllocatorName</a></code> | <code>string</code> | Priority Allocator name. |

---

##### `priorityInitialValue`<sup>Optional</sup> <a name="priorityInitialValue" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorProps.property.priorityInitialValue"></a>

```typescript
public readonly priorityInitialValue: number;
```

- *Type:* number
- *Default:* 1

The initial priority value to start from.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* `RemovalPolicy.DESTROY`

The removal policy to apply to the DynamoDB table.

---

##### `listener`<sup>Required</sup> <a name="listener" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorProps.property.listener"></a>

```typescript
public readonly listener: IApplicationListener;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationListener

Application Load Balancer Listener to allocate priorities for.

---

##### `priorityAllocatorName`<sup>Optional</sup> <a name="priorityAllocatorName" id="@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorProps.property.priorityAllocatorName"></a>

```typescript
public readonly priorityAllocatorName: string;
```

- *Type:* string
- *Default:* Generated by the listener unique name.

Priority Allocator name.

---

### ApplicationLoadBalancerMonitoringConfig <a name="ApplicationLoadBalancerMonitoringConfig" id="@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringConfig"></a>

The ApplicationLoadBalancerMonitoringConfig defines the thresholds for the Application Load Balancer monitoring.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringConfig.Initializer"></a>

```typescript
import { ApplicationLoadBalancerMonitoringConfig } from '@condensetech/cdk-constructs'

const applicationLoadBalancerMonitoringConfig: ApplicationLoadBalancerMonitoringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringConfig.property.redirectUrlLimitExceededThreshold">redirectUrlLimitExceededThreshold</a></code> | <code>number</code> | The Redirect URL Limit Exceeded threshold. |
| <code><a href="#@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringConfig.property.rejectedConnectionsThreshold">rejectedConnectionsThreshold</a></code> | <code>number</code> | The Rejected Connections threshold. |
| <code><a href="#@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringConfig.property.responseTimeThreshold">responseTimeThreshold</a></code> | <code>aws-cdk-lib.Duration</code> | The Response Time threshold. |
| <code><a href="#@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringConfig.property.target5xxErrorsThreshold">target5xxErrorsThreshold</a></code> | <code>number</code> | The 5xx Errors threshold. |
| <code><a href="#@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringConfig.property.targetConnectionErrorsThreshold">targetConnectionErrorsThreshold</a></code> | <code>number</code> | The Target Connection Errors threshold. |

---

##### `redirectUrlLimitExceededThreshold`<sup>Optional</sup> <a name="redirectUrlLimitExceededThreshold" id="@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringConfig.property.redirectUrlLimitExceededThreshold"></a>

```typescript
public readonly redirectUrlLimitExceededThreshold: number;
```

- *Type:* number
- *Default:* 0

The Redirect URL Limit Exceeded threshold.

---

##### `rejectedConnectionsThreshold`<sup>Optional</sup> <a name="rejectedConnectionsThreshold" id="@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringConfig.property.rejectedConnectionsThreshold"></a>

```typescript
public readonly rejectedConnectionsThreshold: number;
```

- *Type:* number
- *Default:* 0

The Rejected Connections threshold.

---

##### `responseTimeThreshold`<sup>Optional</sup> <a name="responseTimeThreshold" id="@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringConfig.property.responseTimeThreshold"></a>

```typescript
public readonly responseTimeThreshold: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* No threshold.

The Response Time threshold.

---

##### `target5xxErrorsThreshold`<sup>Optional</sup> <a name="target5xxErrorsThreshold" id="@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringConfig.property.target5xxErrorsThreshold"></a>

```typescript
public readonly target5xxErrorsThreshold: number;
```

- *Type:* number
- *Default:* 0

The 5xx Errors threshold.

---

##### `targetConnectionErrorsThreshold`<sup>Optional</sup> <a name="targetConnectionErrorsThreshold" id="@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringConfig.property.targetConnectionErrorsThreshold"></a>

```typescript
public readonly targetConnectionErrorsThreshold: number;
```

- *Type:* number
- *Default:* 0

The Target Connection Errors threshold.

---

### AuroraClusterProps <a name="AuroraClusterProps" id="@condensetech/cdk-constructs.AuroraClusterProps"></a>

Properties for the AuroraCluster construct.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.AuroraClusterProps.Initializer"></a>

```typescript
import { AuroraClusterProps } from '@condensetech/cdk-constructs'

const auroraClusterProps: AuroraClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterProps.property.engine">engine</a></code> | <code>aws-cdk-lib.aws_rds.IClusterEngine</code> | The engine of the Aurora cluster. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterProps.property.networking">networking</a></code> | <code><a href="#@condensetech/cdk-constructs.INetworking">INetworking</a></code> | The networking configuration for the Aurora cluster. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterProps.property.backupRetention">backupRetention</a></code> | <code>aws-cdk-lib.Duration</code> | The backup retention period. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterProps.property.cloudwatchLogsExports">cloudwatchLogsExports</a></code> | <code>string[]</code> | The list of log types that need to be enabled for exporting to CloudWatch Logs. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterProps.property.cloudwatchLogsRetention">cloudwatchLogsRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterProps.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | The identifier of the cluster. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterProps.property.credentialsSecretName">credentialsSecretName</a></code> | <code>string</code> | The name of the secret that stores the credentials of the database. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterProps.property.credentialsUsername">credentialsUsername</a></code> | <code>string</code> | The username of the database. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterProps.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterProps.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | The parameters to override in the parameter group. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterProps.property.readers">readers</a></code> | <code>aws-cdk-lib.aws_rds.IClusterInstance[]</code> | The reader instances of the Aurora cluster. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy to apply when the cluster is removed. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterProps.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | The name of the security group. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterProps.property.writer">writer</a></code> | <code>aws-cdk-lib.aws_rds.IClusterInstance</code> | The writer instance of the Aurora cluster. |

---

##### `engine`<sup>Required</sup> <a name="engine" id="@condensetech/cdk-constructs.AuroraClusterProps.property.engine"></a>

```typescript
public readonly engine: IClusterEngine;
```

- *Type:* aws-cdk-lib.aws_rds.IClusterEngine

The engine of the Aurora cluster.

---

##### `networking`<sup>Required</sup> <a name="networking" id="@condensetech/cdk-constructs.AuroraClusterProps.property.networking"></a>

```typescript
public readonly networking: INetworking;
```

- *Type:* <a href="#@condensetech/cdk-constructs.INetworking">INetworking</a>

The networking configuration for the Aurora cluster.

---

##### `backupRetention`<sup>Optional</sup> <a name="backupRetention" id="@condensetech/cdk-constructs.AuroraClusterProps.property.backupRetention"></a>

```typescript
public readonly backupRetention: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* It uses the default applied by [rds.DatabaseClusterProps#backup](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds.DatabaseClusterProps.html#backup).

The backup retention period.

---

##### `cloudwatchLogsExports`<sup>Optional</sup> <a name="cloudwatchLogsExports" id="@condensetech/cdk-constructs.AuroraClusterProps.property.cloudwatchLogsExports"></a>

```typescript
public readonly cloudwatchLogsExports: string[];
```

- *Type:* string[]
- *Default:* No log types are enabled.

The list of log types that need to be enabled for exporting to CloudWatch Logs.

---

##### `cloudwatchLogsRetention`<sup>Optional</sup> <a name="cloudwatchLogsRetention" id="@condensetech/cdk-constructs.AuroraClusterProps.property.cloudwatchLogsRetention"></a>

```typescript
public readonly cloudwatchLogsRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs never expire

The number of days log events are kept in CloudWatch Logs.

When updating this property, unsetting it doesn't remove the log retention policy. To remove the retention policy, set the value to Infinity.

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="clusterIdentifier" id="@condensetech/cdk-constructs.AuroraClusterProps.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

The identifier of the cluster.

If not specified, it relies on the underlying default naming.

---

##### `credentialsSecretName`<sup>Optional</sup> <a name="credentialsSecretName" id="@condensetech/cdk-constructs.AuroraClusterProps.property.credentialsSecretName"></a>

```typescript
public readonly credentialsSecretName: string;
```

- *Type:* string
- *Default:* `${construct.node.path}/secret`

The name of the secret that stores the credentials of the database.

---

##### `credentialsUsername`<sup>Optional</sup> <a name="credentialsUsername" id="@condensetech/cdk-constructs.AuroraClusterProps.property.credentialsUsername"></a>

```typescript
public readonly credentialsUsername: string;
```

- *Type:* string
- *Default:* db_user

The username of the database.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@condensetech/cdk-constructs.AuroraClusterProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string
- *Default:* No default database is created.

The name of the database.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@condensetech/cdk-constructs.AuroraClusterProps.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No parameter is overridden.

The parameters to override in the parameter group.

---

##### `readers`<sup>Optional</sup> <a name="readers" id="@condensetech/cdk-constructs.AuroraClusterProps.property.readers"></a>

```typescript
public readonly readers: IClusterInstance[];
```

- *Type:* aws-cdk-lib.aws_rds.IClusterInstance[]
- *Default:* No reader instances are created.

The reader instances of the Aurora cluster.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@condensetech/cdk-constructs.AuroraClusterProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

The removal policy to apply when the cluster is removed.

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="@condensetech/cdk-constructs.AuroraClusterProps.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string
- *Default:* `${construct.node.path}-sg`.

The name of the security group.

---

##### `writer`<sup>Optional</sup> <a name="writer" id="@condensetech/cdk-constructs.AuroraClusterProps.property.writer"></a>

```typescript
public readonly writer: IClusterInstance;
```

- *Type:* aws-cdk-lib.aws_rds.IClusterInstance
- *Default:* A provisioned instance with the minimum instance type based on the engine type.

The writer instance of the Aurora cluster.

---

### AuroraClusterStackProps <a name="AuroraClusterStackProps" id="@condensetech/cdk-constructs.AuroraClusterStackProps"></a>

Properties for the AuroraClusterStack.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.AuroraClusterStackProps.Initializer"></a>

```typescript
import { AuroraClusterStackProps } from '@condensetech/cdk-constructs'

const auroraClusterStackProps: AuroraClusterStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.engine">engine</a></code> | <code>aws-cdk-lib.aws_rds.IClusterEngine</code> | The engine of the Aurora cluster. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.networking">networking</a></code> | <code><a href="#@condensetech/cdk-constructs.INetworking">INetworking</a></code> | The networking configuration for the Aurora cluster. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.backupRetention">backupRetention</a></code> | <code>aws-cdk-lib.Duration</code> | The backup retention period. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.cloudwatchLogsExports">cloudwatchLogsExports</a></code> | <code>string[]</code> | The list of log types that need to be enabled for exporting to CloudWatch Logs. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.cloudwatchLogsRetention">cloudwatchLogsRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | The identifier of the cluster. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.credentialsSecretName">credentialsSecretName</a></code> | <code>string</code> | The name of the secret that stores the credentials of the database. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.credentialsUsername">credentialsUsername</a></code> | <code>string</code> | The username of the database. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | The parameters to override in the parameter group. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.readers">readers</a></code> | <code>aws-cdk-lib.aws_rds.IClusterInstance[]</code> | The reader instances of the Aurora cluster. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy to apply when the cluster is removed. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | The name of the security group. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.writer">writer</a></code> | <code>aws-cdk-lib.aws_rds.IClusterInstance</code> | The writer instance of the Aurora cluster. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@condensetech/cdk-constructs.AuroraClusterStackProps.property.monitoring">monitoring</a></code> | <code><a href="#@condensetech/cdk-constructs.MonitoringFacadeProps">MonitoringFacadeProps</a></code> | The monitoring configuration to apply to this stack. |

---

##### `engine`<sup>Required</sup> <a name="engine" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.engine"></a>

```typescript
public readonly engine: IClusterEngine;
```

- *Type:* aws-cdk-lib.aws_rds.IClusterEngine

The engine of the Aurora cluster.

---

##### `networking`<sup>Required</sup> <a name="networking" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.networking"></a>

```typescript
public readonly networking: INetworking;
```

- *Type:* <a href="#@condensetech/cdk-constructs.INetworking">INetworking</a>

The networking configuration for the Aurora cluster.

---

##### `backupRetention`<sup>Optional</sup> <a name="backupRetention" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.backupRetention"></a>

```typescript
public readonly backupRetention: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* It uses the default applied by [rds.DatabaseClusterProps#backup](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds.DatabaseClusterProps.html#backup).

The backup retention period.

---

##### `cloudwatchLogsExports`<sup>Optional</sup> <a name="cloudwatchLogsExports" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.cloudwatchLogsExports"></a>

```typescript
public readonly cloudwatchLogsExports: string[];
```

- *Type:* string[]
- *Default:* No log types are enabled.

The list of log types that need to be enabled for exporting to CloudWatch Logs.

---

##### `cloudwatchLogsRetention`<sup>Optional</sup> <a name="cloudwatchLogsRetention" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.cloudwatchLogsRetention"></a>

```typescript
public readonly cloudwatchLogsRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs never expire

The number of days log events are kept in CloudWatch Logs.

When updating this property, unsetting it doesn't remove the log retention policy. To remove the retention policy, set the value to Infinity.

---

##### `clusterIdentifier`<sup>Optional</sup> <a name="clusterIdentifier" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

The identifier of the cluster.

If not specified, it relies on the underlying default naming.

---

##### `credentialsSecretName`<sup>Optional</sup> <a name="credentialsSecretName" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.credentialsSecretName"></a>

```typescript
public readonly credentialsSecretName: string;
```

- *Type:* string
- *Default:* `${construct.node.path}/secret`

The name of the secret that stores the credentials of the database.

---

##### `credentialsUsername`<sup>Optional</sup> <a name="credentialsUsername" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.credentialsUsername"></a>

```typescript
public readonly credentialsUsername: string;
```

- *Type:* string
- *Default:* db_user

The username of the database.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string
- *Default:* No default database is created.

The name of the database.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No parameter is overridden.

The parameters to override in the parameter group.

---

##### `readers`<sup>Optional</sup> <a name="readers" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.readers"></a>

```typescript
public readonly readers: IClusterInstance[];
```

- *Type:* aws-cdk-lib.aws_rds.IClusterInstance[]
- *Default:* No reader instances are created.

The reader instances of the Aurora cluster.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

The removal policy to apply when the cluster is removed.

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string
- *Default:* `${construct.node.path}-sg`.

The name of the security group.

---

##### `writer`<sup>Optional</sup> <a name="writer" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.writer"></a>

```typescript
public readonly writer: IClusterInstance;
```

- *Type:* aws-cdk-lib.aws_rds.IClusterInstance
- *Default:* A provisioned instance with the minimum instance type based on the engine type.

The writer instance of the Aurora cluster.

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@condensetech/cdk-constructs.AuroraClusterStackProps.property.monitoring"></a>

```typescript
public readonly monitoring: MonitoringFacadeProps;
```

- *Type:* <a href="#@condensetech/cdk-constructs.MonitoringFacadeProps">MonitoringFacadeProps</a>
- *Default:* No monitoring.

The monitoring configuration to apply to this stack.

---

### BuildAlarmsProps <a name="BuildAlarmsProps" id="@condensetech/cdk-constructs.BuildAlarmsProps"></a>

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.BuildAlarmsProps.Initializer"></a>

```typescript
import { BuildAlarmsProps } from '@condensetech/cdk-constructs'

const buildAlarmsProps: BuildAlarmsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.BuildAlarmsProps.property.alarms">alarms</a></code> | <code><a href="#@condensetech/cdk-constructs.AlarmDefinitionProps">AlarmDefinitionProps</a>[]</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.BuildAlarmsProps.property.node">node</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.BuildAlarmsProps.property.nodeIdentifier">nodeIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@condensetech/cdk-constructs.BuildAlarmsProps.property.alarms"></a>

```typescript
public readonly alarms: AlarmDefinitionProps[];
```

- *Type:* <a href="#@condensetech/cdk-constructs.AlarmDefinitionProps">AlarmDefinitionProps</a>[]

---

##### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.BuildAlarmsProps.property.node"></a>

```typescript
public readonly node: Construct;
```

- *Type:* constructs.Construct

---

##### `nodeIdentifier`<sup>Required</sup> <a name="nodeIdentifier" id="@condensetech/cdk-constructs.BuildAlarmsProps.property.nodeIdentifier"></a>

```typescript
public readonly nodeIdentifier: string;
```

- *Type:* string

---

### CacheClusterMonitoringConfig <a name="CacheClusterMonitoringConfig" id="@condensetech/cdk-constructs.CacheClusterMonitoringConfig"></a>

The CacheClusterMonitoringConfig defines the thresholds for the cache cluster monitoring.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.CacheClusterMonitoringConfig.Initializer"></a>

```typescript
import { CacheClusterMonitoringConfig } from '@condensetech/cdk-constructs'

const cacheClusterMonitoringConfig: CacheClusterMonitoringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.CacheClusterMonitoringConfig.property.cpuUtilizationThreshold">cpuUtilizationThreshold</a></code> | <code>number</code> | The CPU Utilization (%) threshold. |
| <code><a href="#@condensetech/cdk-constructs.CacheClusterMonitoringConfig.property.engineCpuUtilizationThreshold">engineCpuUtilizationThreshold</a></code> | <code>number</code> | The Engine CPU Utilization (%) threshold. |
| <code><a href="#@condensetech/cdk-constructs.CacheClusterMonitoringConfig.property.maxConnectionsThreshold">maxConnectionsThreshold</a></code> | <code>number</code> | The Max Connections threshold. |
| <code><a href="#@condensetech/cdk-constructs.CacheClusterMonitoringConfig.property.memoryUsageThreshold">memoryUsageThreshold</a></code> | <code>number</code> | The Memory Usage (%) threshold. |
| <code><a href="#@condensetech/cdk-constructs.CacheClusterMonitoringConfig.property.replicationLagThreshold">replicationLagThreshold</a></code> | <code>aws-cdk-lib.Duration</code> | The Replication Lag threshold. |

---

##### `cpuUtilizationThreshold`<sup>Optional</sup> <a name="cpuUtilizationThreshold" id="@condensetech/cdk-constructs.CacheClusterMonitoringConfig.property.cpuUtilizationThreshold"></a>

```typescript
public readonly cpuUtilizationThreshold: number;
```

- *Type:* number
- *Default:* 90

The CPU Utilization (%) threshold.

---

##### `engineCpuUtilizationThreshold`<sup>Optional</sup> <a name="engineCpuUtilizationThreshold" id="@condensetech/cdk-constructs.CacheClusterMonitoringConfig.property.engineCpuUtilizationThreshold"></a>

```typescript
public readonly engineCpuUtilizationThreshold: number;
```

- *Type:* number
- *Default:* 95

The Engine CPU Utilization (%) threshold.

---

##### `maxConnectionsThreshold`<sup>Optional</sup> <a name="maxConnectionsThreshold" id="@condensetech/cdk-constructs.CacheClusterMonitoringConfig.property.maxConnectionsThreshold"></a>

```typescript
public readonly maxConnectionsThreshold: number;
```

- *Type:* number
- *Default:* 60,000

The Max Connections threshold.

---

##### `memoryUsageThreshold`<sup>Optional</sup> <a name="memoryUsageThreshold" id="@condensetech/cdk-constructs.CacheClusterMonitoringConfig.property.memoryUsageThreshold"></a>

```typescript
public readonly memoryUsageThreshold: number;
```

- *Type:* number
- *Default:* 90

The Memory Usage (%) threshold.

---

##### `replicationLagThreshold`<sup>Optional</sup> <a name="replicationLagThreshold" id="@condensetech/cdk-constructs.CacheClusterMonitoringConfig.property.replicationLagThreshold"></a>

```typescript
public readonly replicationLagThreshold: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* No threshold.

The Replication Lag threshold.

---

### CloudwatchAlarmsDiscordConfig <a name="CloudwatchAlarmsDiscordConfig" id="@condensetech/cdk-constructs.CloudwatchAlarmsDiscordConfig"></a>

Discord configuration for the Cloudwatch Alarms Topic.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.CloudwatchAlarmsDiscordConfig.Initializer"></a>

```typescript
import { CloudwatchAlarmsDiscordConfig } from '@condensetech/cdk-constructs'

const cloudwatchAlarmsDiscordConfig: CloudwatchAlarmsDiscordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsDiscordConfig.property.webhook">webhook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsDiscordConfig.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@condensetech/cdk-constructs.CloudwatchAlarmsDiscordConfig.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

---

##### `username`<sup>Optional</sup> <a name="username" id="@condensetech/cdk-constructs.CloudwatchAlarmsDiscordConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

### CloudwatchAlarmsSlackConfig <a name="CloudwatchAlarmsSlackConfig" id="@condensetech/cdk-constructs.CloudwatchAlarmsSlackConfig"></a>

Slack configuration for the Cloudwatch Alarms Topic.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.CloudwatchAlarmsSlackConfig.Initializer"></a>

```typescript
import { CloudwatchAlarmsSlackConfig } from '@condensetech/cdk-constructs'

const cloudwatchAlarmsSlackConfig: CloudwatchAlarmsSlackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsSlackConfig.property.webhook">webhook</a></code> | <code>string</code> | *No description.* |

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@condensetech/cdk-constructs.CloudwatchAlarmsSlackConfig.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

---

### CloudwatchAlarmsTopicStackProps <a name="CloudwatchAlarmsTopicStackProps" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps"></a>

Properties for the CloudwatchAlarmsTopicStack.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.Initializer"></a>

```typescript
import { CloudwatchAlarmsTopicStackProps } from '@condensetech/cdk-constructs'

const cloudwatchAlarmsTopicStackProps: CloudwatchAlarmsTopicStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.discord">discord</a></code> | <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsDiscordConfig">CloudwatchAlarmsDiscordConfig</a></code> | Discord webhook configuration. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.jiraSubscriptionWebhook">jiraSubscriptionWebhook</a></code> | <code>string</code> | Jira subscription webhook. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.slack">slack</a></code> | <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsSlackConfig">CloudwatchAlarmsSlackConfig</a></code> | Slack webhook configuration. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.topicName">topicName</a></code> | <code>string</code> | The name of the alarms topic. |
| <code><a href="#@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.urlSubscriptionWebhooks">urlSubscriptionWebhooks</a></code> | <code>string[]</code> | Subscription webhooks. |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `discord`<sup>Optional</sup> <a name="discord" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.discord"></a>

```typescript
public readonly discord: CloudwatchAlarmsDiscordConfig;
```

- *Type:* <a href="#@condensetech/cdk-constructs.CloudwatchAlarmsDiscordConfig">CloudwatchAlarmsDiscordConfig</a>

Discord webhook configuration.

If provided, the alarms will be sent to the Discord channel.

---

##### ~~`jiraSubscriptionWebhook`~~<sup>Optional</sup> <a name="jiraSubscriptionWebhook" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.jiraSubscriptionWebhook"></a>

- *Deprecated:* Use `urlSubscriptionWebhooks` instead.

```typescript
public readonly jiraSubscriptionWebhook: string;
```

- *Type:* string

Jira subscription webhook.

If provided, the alarms will be sent to Jira.

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.slack"></a>

```typescript
public readonly slack: CloudwatchAlarmsSlackConfig;
```

- *Type:* <a href="#@condensetech/cdk-constructs.CloudwatchAlarmsSlackConfig">CloudwatchAlarmsSlackConfig</a>

Slack webhook configuration.

If provided, the alarms will be sent to the Discord channel.

---

##### `topicName`<sup>Optional</sup> <a name="topicName" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

The name of the alarms topic.

It is recommended to set a name.

---

##### `urlSubscriptionWebhooks`<sup>Optional</sup> <a name="urlSubscriptionWebhooks" id="@condensetech/cdk-constructs.CloudwatchAlarmsTopicStackProps.property.urlSubscriptionWebhooks"></a>

```typescript
public readonly urlSubscriptionWebhooks: string[];
```

- *Type:* string[]

Subscription webhooks.

If provided, an HTTP request is made against the provided url with alarm details.

---

### DatabaseInstanceProps <a name="DatabaseInstanceProps" id="@condensetech/cdk-constructs.DatabaseInstanceProps"></a>

Properties for the DatabaseInstance construct.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.DatabaseInstanceProps.Initializer"></a>

```typescript
import { DatabaseInstanceProps } from '@condensetech/cdk-constructs'

const databaseInstanceProps: DatabaseInstanceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.engine">engine</a></code> | <code>aws-cdk-lib.aws_rds.IInstanceEngine</code> | The engine of the database instance. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.networking">networking</a></code> | <code><a href="#@condensetech/cdk-constructs.INetworking">INetworking</a></code> | The networking configuration for the database instance. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | The allocated storage of the database instance. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>boolean</code> | Whether to allow major version upgrades. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.backupRetention">backupRetention</a></code> | <code>aws-cdk-lib.Duration</code> | The backup retention period. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.cloudwatchLogsExports">cloudwatchLogsExports</a></code> | <code>string[]</code> | The list of log types that need to be enabled for exporting to CloudWatch Logs. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.cloudwatchLogsRetention">cloudwatchLogsRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.credentialsSecretName">credentialsSecretName</a></code> | <code>string</code> | The name of the secret that stores the credentials of the database. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.credentialsUsername">credentialsUsername</a></code> | <code>string</code> | The username of the database. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.instanceIdentifier">instanceIdentifier</a></code> | <code>string</code> | The identifier of the database instance. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | The instance type of the database instance. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.multiAz">multiAz</a></code> | <code>boolean</code> | If the database instance is multi-AZ. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | The parameters to override in the parameter group. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy to apply when the cluster is removed. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | The name of the security group. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceProps.property.storageType">storageType</a></code> | <code>aws-cdk-lib.aws_rds.StorageType</code> | The storage type of the database instance. |

---

##### `engine`<sup>Required</sup> <a name="engine" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.engine"></a>

```typescript
public readonly engine: IInstanceEngine;
```

- *Type:* aws-cdk-lib.aws_rds.IInstanceEngine

The engine of the database instance.

---

##### `networking`<sup>Required</sup> <a name="networking" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.networking"></a>

```typescript
public readonly networking: INetworking;
```

- *Type:* <a href="#@condensetech/cdk-constructs.INetworking">INetworking</a>

The networking configuration for the database instance.

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number
- *Default:* 20

The allocated storage of the database instance.

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="allowMajorVersionUpgrade" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.allowMajorVersionUpgrade"></a>

```typescript
public readonly allowMajorVersionUpgrade: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to allow major version upgrades.

---

##### `backupRetention`<sup>Optional</sup> <a name="backupRetention" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.backupRetention"></a>

```typescript
public readonly backupRetention: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* It uses the default applied by [rds.DatabaseInstanceProps#backupRetention]https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds.DatabaseInstanceProps.html#backupretention).

The backup retention period.

---

##### `cloudwatchLogsExports`<sup>Optional</sup> <a name="cloudwatchLogsExports" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.cloudwatchLogsExports"></a>

```typescript
public readonly cloudwatchLogsExports: string[];
```

- *Type:* string[]
- *Default:* No log types are enabled.

The list of log types that need to be enabled for exporting to CloudWatch Logs.

---

##### `cloudwatchLogsRetention`<sup>Optional</sup> <a name="cloudwatchLogsRetention" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.cloudwatchLogsRetention"></a>

```typescript
public readonly cloudwatchLogsRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs never expire

The number of days log events are kept in CloudWatch Logs.

When updating this property, unsetting it doesn't remove the log retention policy. To remove the retention policy, set the value to Infinity.

---

##### `credentialsSecretName`<sup>Optional</sup> <a name="credentialsSecretName" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.credentialsSecretName"></a>

```typescript
public readonly credentialsSecretName: string;
```

- *Type:* string
- *Default:* `${construct.node.path}/secret`

The name of the secret that stores the credentials of the database.

---

##### `credentialsUsername`<sup>Optional</sup> <a name="credentialsUsername" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.credentialsUsername"></a>

```typescript
public readonly credentialsUsername: string;
```

- *Type:* string
- *Default:* db_user

The username of the database.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string
- *Default:* No default database is created.

The name of the database.

---

##### `instanceIdentifier`<sup>Optional</sup> <a name="instanceIdentifier" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.instanceIdentifier"></a>

```typescript
public readonly instanceIdentifier: string;
```

- *Type:* string
- *Default:* No identifier is specified.

The identifier of the database instance.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType
- *Default:* db.t3.small.

The instance type of the database instance.

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.multiAz"></a>

```typescript
public readonly multiAz: boolean;
```

- *Type:* boolean
- *Default:* false

If the database instance is multi-AZ.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No parameter is overridden.

The parameters to override in the parameter group.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

The removal policy to apply when the cluster is removed.

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string
- *Default:* `${construct.node.path}-sg`.

The name of the security group.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@condensetech/cdk-constructs.DatabaseInstanceProps.property.storageType"></a>

```typescript
public readonly storageType: StorageType;
```

- *Type:* aws-cdk-lib.aws_rds.StorageType
- *Default:* rds.StorageType.GP3

The storage type of the database instance.

---

### DatabaseInstanceStackProps <a name="DatabaseInstanceStackProps" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps"></a>

Properties for the DatabaseInstanceStack.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.Initializer"></a>

```typescript
import { DatabaseInstanceStackProps } from '@condensetech/cdk-constructs'

const databaseInstanceStackProps: DatabaseInstanceStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.engine">engine</a></code> | <code>aws-cdk-lib.aws_rds.IInstanceEngine</code> | The engine of the database instance. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.networking">networking</a></code> | <code><a href="#@condensetech/cdk-constructs.INetworking">INetworking</a></code> | The networking configuration for the database instance. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | The allocated storage of the database instance. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.allowMajorVersionUpgrade">allowMajorVersionUpgrade</a></code> | <code>boolean</code> | Whether to allow major version upgrades. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.backupRetention">backupRetention</a></code> | <code>aws-cdk-lib.Duration</code> | The backup retention period. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.cloudwatchLogsExports">cloudwatchLogsExports</a></code> | <code>string[]</code> | The list of log types that need to be enabled for exporting to CloudWatch Logs. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.cloudwatchLogsRetention">cloudwatchLogsRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.credentialsSecretName">credentialsSecretName</a></code> | <code>string</code> | The name of the secret that stores the credentials of the database. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.credentialsUsername">credentialsUsername</a></code> | <code>string</code> | The username of the database. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.instanceIdentifier">instanceIdentifier</a></code> | <code>string</code> | The identifier of the database instance. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | The instance type of the database instance. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.multiAz">multiAz</a></code> | <code>boolean</code> | If the database instance is multi-AZ. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | The parameters to override in the parameter group. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy to apply when the cluster is removed. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | The name of the security group. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.storageType">storageType</a></code> | <code>aws-cdk-lib.aws_rds.StorageType</code> | The storage type of the database instance. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.monitoring">monitoring</a></code> | <code><a href="#@condensetech/cdk-constructs.MonitoringFacadeProps">MonitoringFacadeProps</a></code> | The monitoring configuration to apply to this stack. |

---

##### `engine`<sup>Required</sup> <a name="engine" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.engine"></a>

```typescript
public readonly engine: IInstanceEngine;
```

- *Type:* aws-cdk-lib.aws_rds.IInstanceEngine

The engine of the database instance.

---

##### `networking`<sup>Required</sup> <a name="networking" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.networking"></a>

```typescript
public readonly networking: INetworking;
```

- *Type:* <a href="#@condensetech/cdk-constructs.INetworking">INetworking</a>

The networking configuration for the database instance.

---

##### `allocatedStorage`<sup>Optional</sup> <a name="allocatedStorage" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number
- *Default:* 20

The allocated storage of the database instance.

---

##### `allowMajorVersionUpgrade`<sup>Optional</sup> <a name="allowMajorVersionUpgrade" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.allowMajorVersionUpgrade"></a>

```typescript
public readonly allowMajorVersionUpgrade: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to allow major version upgrades.

---

##### `backupRetention`<sup>Optional</sup> <a name="backupRetention" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.backupRetention"></a>

```typescript
public readonly backupRetention: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* It uses the default applied by [rds.DatabaseInstanceProps#backupRetention]https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds.DatabaseInstanceProps.html#backupretention).

The backup retention period.

---

##### `cloudwatchLogsExports`<sup>Optional</sup> <a name="cloudwatchLogsExports" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.cloudwatchLogsExports"></a>

```typescript
public readonly cloudwatchLogsExports: string[];
```

- *Type:* string[]
- *Default:* No log types are enabled.

The list of log types that need to be enabled for exporting to CloudWatch Logs.

---

##### `cloudwatchLogsRetention`<sup>Optional</sup> <a name="cloudwatchLogsRetention" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.cloudwatchLogsRetention"></a>

```typescript
public readonly cloudwatchLogsRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs never expire

The number of days log events are kept in CloudWatch Logs.

When updating this property, unsetting it doesn't remove the log retention policy. To remove the retention policy, set the value to Infinity.

---

##### `credentialsSecretName`<sup>Optional</sup> <a name="credentialsSecretName" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.credentialsSecretName"></a>

```typescript
public readonly credentialsSecretName: string;
```

- *Type:* string
- *Default:* `${construct.node.path}/secret`

The name of the secret that stores the credentials of the database.

---

##### `credentialsUsername`<sup>Optional</sup> <a name="credentialsUsername" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.credentialsUsername"></a>

```typescript
public readonly credentialsUsername: string;
```

- *Type:* string
- *Default:* db_user

The username of the database.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string
- *Default:* No default database is created.

The name of the database.

---

##### `instanceIdentifier`<sup>Optional</sup> <a name="instanceIdentifier" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.instanceIdentifier"></a>

```typescript
public readonly instanceIdentifier: string;
```

- *Type:* string
- *Default:* No identifier is specified.

The identifier of the database instance.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType
- *Default:* db.t3.small.

The instance type of the database instance.

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.multiAz"></a>

```typescript
public readonly multiAz: boolean;
```

- *Type:* boolean
- *Default:* false

If the database instance is multi-AZ.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No parameter is overridden.

The parameters to override in the parameter group.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

The removal policy to apply when the cluster is removed.

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string
- *Default:* `${construct.node.path}-sg`.

The name of the security group.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.storageType"></a>

```typescript
public readonly storageType: StorageType;
```

- *Type:* aws-cdk-lib.aws_rds.StorageType
- *Default:* rds.StorageType.GP3

The storage type of the database instance.

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@condensetech/cdk-constructs.DatabaseInstanceStackProps.property.monitoring"></a>

```typescript
public readonly monitoring: MonitoringFacadeProps;
```

- *Type:* <a href="#@condensetech/cdk-constructs.MonitoringFacadeProps">MonitoringFacadeProps</a>
- *Default:* No monitoring.

The monitoring configuration to apply to this stack.

---

### EntrypointCertificateProps <a name="EntrypointCertificateProps" id="@condensetech/cdk-constructs.EntrypointCertificateProps"></a>

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.EntrypointCertificateProps.Initializer"></a>

```typescript
import { EntrypointCertificateProps } from '@condensetech/cdk-constructs'

const entrypointCertificateProps: EntrypointCertificateProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.EntrypointCertificateProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | The certificate to use. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointCertificateProps.property.certificateArn">certificateArn</a></code> | <code>string</code> | The ARN of the existing certificate to use. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointCertificateProps.property.wildcardCertificate">wildcardCertificate</a></code> | <code>boolean</code> | Indicates whether the HTTPS certificate should be bound to all subdomains. |

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@condensetech/cdk-constructs.EntrypointCertificateProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate
- *Default:* A new certificate is created through ACM

The certificate to use.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@condensetech/cdk-constructs.EntrypointCertificateProps.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string
- *Default:* A new certificate is created through ACM.

The ARN of the existing certificate to use.

---

##### `wildcardCertificate`<sup>Optional</sup> <a name="wildcardCertificate" id="@condensetech/cdk-constructs.EntrypointCertificateProps.property.wildcardCertificate"></a>

```typescript
public readonly wildcardCertificate: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the HTTPS certificate should be bound to all subdomains.

---

### EntrypointFromAttributes <a name="EntrypointFromAttributes" id="@condensetech/cdk-constructs.EntrypointFromAttributes"></a>

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.EntrypointFromAttributes.Initializer"></a>

```typescript
import { EntrypointFromAttributes } from '@condensetech/cdk-constructs'

const entrypointFromAttributes: EntrypointFromAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.EntrypointFromAttributes.property.listenerArn">listenerArn</a></code> | <code>string</code> | ARN of the load balancer HTTPS listener. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointFromAttributes.property.loadBalancerArn">loadBalancerArn</a></code> | <code>string</code> | The load balancer ARN. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointFromAttributes.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | The security group ID of the load balancer. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointFromAttributes.property.domainName">domainName</a></code> | <code>string</code> | The load balancer custom domain name. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointFromAttributes.property.entrypointName">entrypointName</a></code> | <code>string</code> | The entrypoint name to use for referencing the priority allocator. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointFromAttributes.property.priorityAllocatorServiceToken">priorityAllocatorServiceToken</a></code> | <code>string</code> | The Priority Allocator service token to use for referencing the priority allocator. |

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@condensetech/cdk-constructs.EntrypointFromAttributes.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

ARN of the load balancer HTTPS listener.

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@condensetech/cdk-constructs.EntrypointFromAttributes.property.loadBalancerArn"></a>

```typescript
public readonly loadBalancerArn: string;
```

- *Type:* string

The load balancer ARN.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@condensetech/cdk-constructs.EntrypointFromAttributes.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

The security group ID of the load balancer.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@condensetech/cdk-constructs.EntrypointFromAttributes.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string
- *Default:* No domain name is specified, and the load balancer dns name will be used.

The load balancer custom domain name.

---

##### `entrypointName`<sup>Optional</sup> <a name="entrypointName" id="@condensetech/cdk-constructs.EntrypointFromAttributes.property.entrypointName"></a>

```typescript
public readonly entrypointName: string;
```

- *Type:* string

The entrypoint name to use for referencing the priority allocator.

---

##### `priorityAllocatorServiceToken`<sup>Optional</sup> <a name="priorityAllocatorServiceToken" id="@condensetech/cdk-constructs.EntrypointFromAttributes.property.priorityAllocatorServiceToken"></a>

```typescript
public readonly priorityAllocatorServiceToken: string;
```

- *Type:* string

The Priority Allocator service token to use for referencing the priority allocator.

---

### EntrypointFromLookupProps <a name="EntrypointFromLookupProps" id="@condensetech/cdk-constructs.EntrypointFromLookupProps"></a>

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.EntrypointFromLookupProps.Initializer"></a>

```typescript
import { EntrypointFromLookupProps } from '@condensetech/cdk-constructs'

const entrypointFromLookupProps: EntrypointFromLookupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.EntrypointFromLookupProps.property.entrypointName">entrypointName</a></code> | <code>string</code> | The entrypoint name to lookup. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointFromLookupProps.property.domainName">domainName</a></code> | <code>string</code> | The load balancer custom domain name. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointFromLookupProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the entrypoint is located. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointFromLookupProps.property.vpcLookup">vpcLookup</a></code> | <code>aws-cdk-lib.aws_ec2.VpcLookupOptions</code> | The VPC lookup options to find the VPC where the entrypoint is located. |

---

##### `entrypointName`<sup>Required</sup> <a name="entrypointName" id="@condensetech/cdk-constructs.EntrypointFromLookupProps.property.entrypointName"></a>

```typescript
public readonly entrypointName: string;
```

- *Type:* string

The entrypoint name to lookup.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@condensetech/cdk-constructs.EntrypointFromLookupProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string
- *Default:* No domain name is specified, and the load balancer dns name will be used.

The load balancer custom domain name.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@condensetech/cdk-constructs.EntrypointFromLookupProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the entrypoint is located.

Required if vpcLookup is not provided.

---

##### `vpcLookup`<sup>Optional</sup> <a name="vpcLookup" id="@condensetech/cdk-constructs.EntrypointFromLookupProps.property.vpcLookup"></a>

```typescript
public readonly vpcLookup: VpcLookupOptions;
```

- *Type:* aws-cdk-lib.aws_ec2.VpcLookupOptions

The VPC lookup options to find the VPC where the entrypoint is located.

Required if vpc is not provided.

---

### EntrypointProps <a name="EntrypointProps" id="@condensetech/cdk-constructs.EntrypointProps"></a>

Properties for the Entrypoint construct.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.EntrypointProps.Initializer"></a>

```typescript
import { EntrypointProps } from '@condensetech/cdk-constructs'

const entrypointProps: EntrypointProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.EntrypointProps.property.domainName">domainName</a></code> | <code>string</code> | The domain name to which the entrypoint is associated. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointProps.property.networking">networking</a></code> | <code><a href="#@condensetech/cdk-constructs.INetworking">INetworking</a></code> | The networking configuration for the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointProps.property.certificate">certificate</a></code> | <code><a href="#@condensetech/cdk-constructs.EntrypointCertificateProps">EntrypointCertificateProps</a></code> | Certificate properties for the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointProps.property.certificates">certificates</a></code> | <code><a href="#@condensetech/cdk-constructs.EntrypointCertificateProps">EntrypointCertificateProps</a>[]</code> | Certificate properties for the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointProps.property.entrypointName">entrypointName</a></code> | <code>string</code> | The name of the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointProps.property.entrypointSecurityGroupName">entrypointSecurityGroupName</a></code> | <code>string</code> | The name of the security group for the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointProps.property.hostedZoneProps">hostedZoneProps</a></code> | <code>aws-cdk-lib.aws_route53.HostedZoneAttributes</code> | The Route 53 hosted zone attributes for the domain name. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointProps.property.logsBucket">logsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The S3 bucket to store the logs of the ALB. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointProps.property.priorityAllocator">priorityAllocator</a></code> | <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorConfig">ApplicationListenerPriorityAllocatorConfig</a></code> | Customize the priority allocator for the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointProps.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | The name of the security group for the entrypoint. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@condensetech/cdk-constructs.EntrypointProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The domain name to which the entrypoint is associated.

---

##### `networking`<sup>Required</sup> <a name="networking" id="@condensetech/cdk-constructs.EntrypointProps.property.networking"></a>

```typescript
public readonly networking: INetworking;
```

- *Type:* <a href="#@condensetech/cdk-constructs.INetworking">INetworking</a>

The networking configuration for the entrypoint.

---

##### ~~`certificate`~~<sup>Optional</sup> <a name="certificate" id="@condensetech/cdk-constructs.EntrypointProps.property.certificate"></a>

- *Deprecated:* Use `certificates` instead.

```typescript
public readonly certificate: EntrypointCertificateProps;
```

- *Type:* <a href="#@condensetech/cdk-constructs.EntrypointCertificateProps">EntrypointCertificateProps</a>
- *Default:* A new certificate is created through ACM, bound to domainName, *.domainName.

Certificate properties for the entrypoint.

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@condensetech/cdk-constructs.EntrypointProps.property.certificates"></a>

```typescript
public readonly certificates: EntrypointCertificateProps[];
```

- *Type:* <a href="#@condensetech/cdk-constructs.EntrypointCertificateProps">EntrypointCertificateProps</a>[]
- *Default:* A new certificate is created through ACM, bound to domainName, *.domainName.

Certificate properties for the entrypoint.

---

##### `entrypointName`<sup>Optional</sup> <a name="entrypointName" id="@condensetech/cdk-constructs.EntrypointProps.property.entrypointName"></a>

```typescript
public readonly entrypointName: string;
```

- *Type:* string
- *Default:* No name is specified.

The name of the entrypoint.

This value is used as the name of the underlying Application Load Balancer (ALB)
and as the prefix for the name of the associated security group.

---

##### ~~`entrypointSecurityGroupName`~~<sup>Optional</sup> <a name="entrypointSecurityGroupName" id="@condensetech/cdk-constructs.EntrypointProps.property.entrypointSecurityGroupName"></a>

- *Deprecated:* Use `securityGroupName` instead.

```typescript
public readonly entrypointSecurityGroupName: string;
```

- *Type:* string
- *Default:* `${entrypointName}-sg`

The name of the security group for the entrypoint.

---

##### `hostedZoneProps`<sup>Optional</sup> <a name="hostedZoneProps" id="@condensetech/cdk-constructs.EntrypointProps.property.hostedZoneProps"></a>

```typescript
public readonly hostedZoneProps: HostedZoneAttributes;
```

- *Type:* aws-cdk-lib.aws_route53.HostedZoneAttributes

The Route 53 hosted zone attributes for the domain name.

---

##### `logsBucket`<sup>Optional</sup> <a name="logsBucket" id="@condensetech/cdk-constructs.EntrypointProps.property.logsBucket"></a>

```typescript
public readonly logsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* Logging is disabled.

The S3 bucket to store the logs of the ALB.

Setting this will enable the access logs for the ALB.

---

##### `priorityAllocator`<sup>Optional</sup> <a name="priorityAllocator" id="@condensetech/cdk-constructs.EntrypointProps.property.priorityAllocator"></a>

```typescript
public readonly priorityAllocator: ApplicationListenerPriorityAllocatorConfig;
```

- *Type:* <a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorConfig">ApplicationListenerPriorityAllocatorConfig</a>

Customize the priority allocator for the entrypoint.

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="@condensetech/cdk-constructs.EntrypointProps.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string
- *Default:* `${entrypointName}-sg` if `entrypointName` is specified, otherwise no name is specified.

The name of the security group for the entrypoint.

---

### EntrypointStackProps <a name="EntrypointStackProps" id="@condensetech/cdk-constructs.EntrypointStackProps"></a>

Properties for the EntrypointStack.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.EntrypointStackProps.Initializer"></a>

```typescript
import { EntrypointStackProps } from '@condensetech/cdk-constructs'

const entrypointStackProps: EntrypointStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.domainName">domainName</a></code> | <code>string</code> | The domain name to which the entrypoint is associated. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.networking">networking</a></code> | <code><a href="#@condensetech/cdk-constructs.INetworking">INetworking</a></code> | The networking configuration for the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.certificate">certificate</a></code> | <code><a href="#@condensetech/cdk-constructs.EntrypointCertificateProps">EntrypointCertificateProps</a></code> | Certificate properties for the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.certificates">certificates</a></code> | <code><a href="#@condensetech/cdk-constructs.EntrypointCertificateProps">EntrypointCertificateProps</a>[]</code> | Certificate properties for the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.entrypointName">entrypointName</a></code> | <code>string</code> | The name of the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.entrypointSecurityGroupName">entrypointSecurityGroupName</a></code> | <code>string</code> | The name of the security group for the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.hostedZoneProps">hostedZoneProps</a></code> | <code>aws-cdk-lib.aws_route53.HostedZoneAttributes</code> | The Route 53 hosted zone attributes for the domain name. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.logsBucket">logsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The S3 bucket to store the logs of the ALB. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.priorityAllocator">priorityAllocator</a></code> | <code><a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorConfig">ApplicationListenerPriorityAllocatorConfig</a></code> | Customize the priority allocator for the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | The name of the security group for the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@condensetech/cdk-constructs.EntrypointStackProps.property.monitoring">monitoring</a></code> | <code><a href="#@condensetech/cdk-constructs.MonitoringFacadeProps">MonitoringFacadeProps</a></code> | The monitoring configuration to apply to this stack. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@condensetech/cdk-constructs.EntrypointStackProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The domain name to which the entrypoint is associated.

---

##### `networking`<sup>Required</sup> <a name="networking" id="@condensetech/cdk-constructs.EntrypointStackProps.property.networking"></a>

```typescript
public readonly networking: INetworking;
```

- *Type:* <a href="#@condensetech/cdk-constructs.INetworking">INetworking</a>

The networking configuration for the entrypoint.

---

##### ~~`certificate`~~<sup>Optional</sup> <a name="certificate" id="@condensetech/cdk-constructs.EntrypointStackProps.property.certificate"></a>

- *Deprecated:* Use `certificates` instead.

```typescript
public readonly certificate: EntrypointCertificateProps;
```

- *Type:* <a href="#@condensetech/cdk-constructs.EntrypointCertificateProps">EntrypointCertificateProps</a>
- *Default:* A new certificate is created through ACM, bound to domainName, *.domainName.

Certificate properties for the entrypoint.

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@condensetech/cdk-constructs.EntrypointStackProps.property.certificates"></a>

```typescript
public readonly certificates: EntrypointCertificateProps[];
```

- *Type:* <a href="#@condensetech/cdk-constructs.EntrypointCertificateProps">EntrypointCertificateProps</a>[]
- *Default:* A new certificate is created through ACM, bound to domainName, *.domainName.

Certificate properties for the entrypoint.

---

##### `entrypointName`<sup>Optional</sup> <a name="entrypointName" id="@condensetech/cdk-constructs.EntrypointStackProps.property.entrypointName"></a>

```typescript
public readonly entrypointName: string;
```

- *Type:* string
- *Default:* No name is specified.

The name of the entrypoint.

This value is used as the name of the underlying Application Load Balancer (ALB)
and as the prefix for the name of the associated security group.

---

##### ~~`entrypointSecurityGroupName`~~<sup>Optional</sup> <a name="entrypointSecurityGroupName" id="@condensetech/cdk-constructs.EntrypointStackProps.property.entrypointSecurityGroupName"></a>

- *Deprecated:* Use `securityGroupName` instead.

```typescript
public readonly entrypointSecurityGroupName: string;
```

- *Type:* string
- *Default:* `${entrypointName}-sg`

The name of the security group for the entrypoint.

---

##### `hostedZoneProps`<sup>Optional</sup> <a name="hostedZoneProps" id="@condensetech/cdk-constructs.EntrypointStackProps.property.hostedZoneProps"></a>

```typescript
public readonly hostedZoneProps: HostedZoneAttributes;
```

- *Type:* aws-cdk-lib.aws_route53.HostedZoneAttributes

The Route 53 hosted zone attributes for the domain name.

---

##### `logsBucket`<sup>Optional</sup> <a name="logsBucket" id="@condensetech/cdk-constructs.EntrypointStackProps.property.logsBucket"></a>

```typescript
public readonly logsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* Logging is disabled.

The S3 bucket to store the logs of the ALB.

Setting this will enable the access logs for the ALB.

---

##### `priorityAllocator`<sup>Optional</sup> <a name="priorityAllocator" id="@condensetech/cdk-constructs.EntrypointStackProps.property.priorityAllocator"></a>

```typescript
public readonly priorityAllocator: ApplicationListenerPriorityAllocatorConfig;
```

- *Type:* <a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocatorConfig">ApplicationListenerPriorityAllocatorConfig</a>

Customize the priority allocator for the entrypoint.

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="@condensetech/cdk-constructs.EntrypointStackProps.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string
- *Default:* `${entrypointName}-sg` if `entrypointName` is specified, otherwise no name is specified.

The name of the security group for the entrypoint.

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@condensetech/cdk-constructs.EntrypointStackProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@condensetech/cdk-constructs.EntrypointStackProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@condensetech/cdk-constructs.EntrypointStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@condensetech/cdk-constructs.EntrypointStackProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@condensetech/cdk-constructs.EntrypointStackProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@condensetech/cdk-constructs.EntrypointStackProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@condensetech/cdk-constructs.EntrypointStackProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@condensetech/cdk-constructs.EntrypointStackProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@condensetech/cdk-constructs.EntrypointStackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@condensetech/cdk-constructs.EntrypointStackProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@condensetech/cdk-constructs.EntrypointStackProps.property.monitoring"></a>

```typescript
public readonly monitoring: MonitoringFacadeProps;
```

- *Type:* <a href="#@condensetech/cdk-constructs.MonitoringFacadeProps">MonitoringFacadeProps</a>
- *Default:* No monitoring.

The monitoring configuration to apply to this stack.

---

### FargateServiceMonitoringConfig <a name="FargateServiceMonitoringConfig" id="@condensetech/cdk-constructs.FargateServiceMonitoringConfig"></a>

The FargateServiceMonitoringConfig defines the thresholds for the Fargate service monitoring.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.FargateServiceMonitoringConfig.Initializer"></a>

```typescript
import { FargateServiceMonitoringConfig } from '@condensetech/cdk-constructs'

const fargateServiceMonitoringConfig: FargateServiceMonitoringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.FargateServiceMonitoringConfig.property.cpuUtilizationThreshold">cpuUtilizationThreshold</a></code> | <code>number</code> | The CPU Utilization (%) threshold. |
| <code><a href="#@condensetech/cdk-constructs.FargateServiceMonitoringConfig.property.memoryUtilization">memoryUtilization</a></code> | <code>number</code> | The Memory Utilization (%) threshold. |

---

##### `cpuUtilizationThreshold`<sup>Optional</sup> <a name="cpuUtilizationThreshold" id="@condensetech/cdk-constructs.FargateServiceMonitoringConfig.property.cpuUtilizationThreshold"></a>

```typescript
public readonly cpuUtilizationThreshold: number;
```

- *Type:* number
- *Default:* 90

The CPU Utilization (%) threshold.

---

##### `memoryUtilization`<sup>Optional</sup> <a name="memoryUtilization" id="@condensetech/cdk-constructs.FargateServiceMonitoringConfig.property.memoryUtilization"></a>

```typescript
public readonly memoryUtilization: number;
```

- *Type:* number
- *Default:* 90

The Memory Utilization (%) threshold.

---

### MonitoringFacadeProps <a name="MonitoringFacadeProps" id="@condensetech/cdk-constructs.MonitoringFacadeProps"></a>

Properties for the MonitoringFacade.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.MonitoringFacadeProps.Initializer"></a>

```typescript
import { MonitoringFacadeProps } from '@condensetech/cdk-constructs'

const monitoringFacadeProps: MonitoringFacadeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.MonitoringFacadeProps.property.topicArn">topicArn</a></code> | <code>string</code> | The ARN of the SNS topic to use for alarms. |
| <code><a href="#@condensetech/cdk-constructs.MonitoringFacadeProps.property.dashboardName">dashboardName</a></code> | <code>string</code> | The name of the Cloudwatch dashboard to create. |

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@condensetech/cdk-constructs.MonitoringFacadeProps.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

The ARN of the SNS topic to use for alarms.

---

##### `dashboardName`<sup>Optional</sup> <a name="dashboardName" id="@condensetech/cdk-constructs.MonitoringFacadeProps.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string
- *Default:* A name is generated by CDK.

The name of the Cloudwatch dashboard to create.

---

### NaiveBasicAuthCloudfrontFunctionExcludedPath <a name="NaiveBasicAuthCloudfrontFunctionExcludedPath" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionExcludedPath"></a>

Exclusion path for the NaiveBasicAuthCloudfrontFunction.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionExcludedPath.Initializer"></a>

```typescript
import { NaiveBasicAuthCloudfrontFunctionExcludedPath } from '@condensetech/cdk-constructs'

const naiveBasicAuthCloudfrontFunctionExcludedPath: NaiveBasicAuthCloudfrontFunctionExcludedPath = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionExcludedPath.property.path">path</a></code> | <code>string</code> | The path to exclude from basic auth. |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionExcludedPath.property.matchMode">matchMode</a></code> | <code>string</code> | The match mode to use for the path: - 'exact' for exact string match - 'regex' for regex match. |

---

##### `path`<sup>Required</sup> <a name="path" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionExcludedPath.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to exclude from basic auth.

---

*Example*

```typescript
"/admin"
"/\/admin\\/.+/"
```


##### `matchMode`<sup>Optional</sup> <a name="matchMode" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionExcludedPath.property.matchMode"></a>

```typescript
public readonly matchMode: string;
```

- *Type:* string
- *Default:* 'exact'

The match mode to use for the path: - 'exact' for exact string match - 'regex' for regex match.

---

### NaiveBasicAuthCloudfrontFunctionProps <a name="NaiveBasicAuthCloudfrontFunctionProps" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionProps"></a>

Props for the NaiveBasicAuthCloudfrontFunction construct.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionProps.Initializer"></a>

```typescript
import { NaiveBasicAuthCloudfrontFunctionProps } from '@condensetech/cdk-constructs'

const naiveBasicAuthCloudfrontFunctionProps: NaiveBasicAuthCloudfrontFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionProps.property.basicAuthString">basicAuthString</a></code> | <code>string</code> | The basic auth string to use for checking basic auth credentials You can generate a basic auth string using the following command: echo -n "$username:$password" \| base64. |
| <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionProps.property.excludePaths">excludePaths</a></code> | <code><a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionExcludedPath">NaiveBasicAuthCloudfrontFunctionExcludedPath</a>[]</code> | The paths to exclude from basic auth. |

---

##### `basicAuthString`<sup>Required</sup> <a name="basicAuthString" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionProps.property.basicAuthString"></a>

```typescript
public readonly basicAuthString: string;
```

- *Type:* string

The basic auth string to use for checking basic auth credentials You can generate a basic auth string using the following command: echo -n "$username:$password" | base64.

---

##### `excludePaths`<sup>Optional</sup> <a name="excludePaths" id="@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionProps.property.excludePaths"></a>

```typescript
public readonly excludePaths: NaiveBasicAuthCloudfrontFunctionExcludedPath[];
```

- *Type:* <a href="#@condensetech/cdk-constructs.NaiveBasicAuthCloudfrontFunctionExcludedPath">NaiveBasicAuthCloudfrontFunctionExcludedPath</a>[]
- *Default:* no paths are excluded

The paths to exclude from basic auth.

Pass a string or regex to match the path. Strings are checked using === operator.

---

### NetworkingProps <a name="NetworkingProps" id="@condensetech/cdk-constructs.NetworkingProps"></a>

Properties for the Networking construct.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.NetworkingProps.Initializer"></a>

```typescript
import { NetworkingProps } from '@condensetech/cdk-constructs'

const networkingProps: NetworkingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.NetworkingProps.property.ipAddresses">ipAddresses</a></code> | <code>aws-cdk-lib.aws_ec2.IIpAddresses</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingProps.property.bastionHostAmi">bastionHostAmi</a></code> | <code>aws-cdk-lib.aws_ec2.IMachineImage</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingProps.property.bastionHostEnabled">bastionHostEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingProps.property.bastionHostInstanceType">bastionHostInstanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingProps.property.bastionName">bastionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingProps.property.maxAzs">maxAzs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingProps.property.natGateways">natGateways</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingProps.property.vpcName">vpcName</a></code> | <code>string</code> | *No description.* |

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@condensetech/cdk-constructs.NetworkingProps.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: IIpAddresses;
```

- *Type:* aws-cdk-lib.aws_ec2.IIpAddresses

---

##### `bastionHostAmi`<sup>Optional</sup> <a name="bastionHostAmi" id="@condensetech/cdk-constructs.NetworkingProps.property.bastionHostAmi"></a>

```typescript
public readonly bastionHostAmi: IMachineImage;
```

- *Type:* aws-cdk-lib.aws_ec2.IMachineImage

---

##### `bastionHostEnabled`<sup>Optional</sup> <a name="bastionHostEnabled" id="@condensetech/cdk-constructs.NetworkingProps.property.bastionHostEnabled"></a>

```typescript
public readonly bastionHostEnabled: boolean;
```

- *Type:* boolean

---

##### `bastionHostInstanceType`<sup>Optional</sup> <a name="bastionHostInstanceType" id="@condensetech/cdk-constructs.NetworkingProps.property.bastionHostInstanceType"></a>

```typescript
public readonly bastionHostInstanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

---

##### `bastionName`<sup>Optional</sup> <a name="bastionName" id="@condensetech/cdk-constructs.NetworkingProps.property.bastionName"></a>

```typescript
public readonly bastionName: string;
```

- *Type:* string

---

##### `maxAzs`<sup>Optional</sup> <a name="maxAzs" id="@condensetech/cdk-constructs.NetworkingProps.property.maxAzs"></a>

```typescript
public readonly maxAzs: number;
```

- *Type:* number

---

##### `natGateways`<sup>Optional</sup> <a name="natGateways" id="@condensetech/cdk-constructs.NetworkingProps.property.natGateways"></a>

```typescript
public readonly natGateways: number;
```

- *Type:* number

---

##### `vpcName`<sup>Optional</sup> <a name="vpcName" id="@condensetech/cdk-constructs.NetworkingProps.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string

---

### NetworkingStackProps <a name="NetworkingStackProps" id="@condensetech/cdk-constructs.NetworkingStackProps"></a>

Properties for the NetworkingStack.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.NetworkingStackProps.Initializer"></a>

```typescript
import { NetworkingStackProps } from '@condensetech/cdk-constructs'

const networkingStackProps: NetworkingStackProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.ipAddresses">ipAddresses</a></code> | <code>aws-cdk-lib.aws_ec2.IIpAddresses</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.bastionHostAmi">bastionHostAmi</a></code> | <code>aws-cdk-lib.aws_ec2.IMachineImage</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.bastionHostEnabled">bastionHostEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.bastionHostInstanceType">bastionHostInstanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.bastionName">bastionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.maxAzs">maxAzs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.natGateways">natGateways</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.vpcName">vpcName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@condensetech/cdk-constructs.NetworkingStackProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@condensetech/cdk-constructs.NetworkingStackProps.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: IIpAddresses;
```

- *Type:* aws-cdk-lib.aws_ec2.IIpAddresses

---

##### `bastionHostAmi`<sup>Optional</sup> <a name="bastionHostAmi" id="@condensetech/cdk-constructs.NetworkingStackProps.property.bastionHostAmi"></a>

```typescript
public readonly bastionHostAmi: IMachineImage;
```

- *Type:* aws-cdk-lib.aws_ec2.IMachineImage

---

##### `bastionHostEnabled`<sup>Optional</sup> <a name="bastionHostEnabled" id="@condensetech/cdk-constructs.NetworkingStackProps.property.bastionHostEnabled"></a>

```typescript
public readonly bastionHostEnabled: boolean;
```

- *Type:* boolean

---

##### `bastionHostInstanceType`<sup>Optional</sup> <a name="bastionHostInstanceType" id="@condensetech/cdk-constructs.NetworkingStackProps.property.bastionHostInstanceType"></a>

```typescript
public readonly bastionHostInstanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

---

##### `bastionName`<sup>Optional</sup> <a name="bastionName" id="@condensetech/cdk-constructs.NetworkingStackProps.property.bastionName"></a>

```typescript
public readonly bastionName: string;
```

- *Type:* string

---

##### `maxAzs`<sup>Optional</sup> <a name="maxAzs" id="@condensetech/cdk-constructs.NetworkingStackProps.property.maxAzs"></a>

```typescript
public readonly maxAzs: number;
```

- *Type:* number

---

##### `natGateways`<sup>Optional</sup> <a name="natGateways" id="@condensetech/cdk-constructs.NetworkingStackProps.property.natGateways"></a>

```typescript
public readonly natGateways: number;
```

- *Type:* number

---

##### `vpcName`<sup>Optional</sup> <a name="vpcName" id="@condensetech/cdk-constructs.NetworkingStackProps.property.vpcName"></a>

```typescript
public readonly vpcName: string;
```

- *Type:* string

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@condensetech/cdk-constructs.NetworkingStackProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@condensetech/cdk-constructs.NetworkingStackProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@condensetech/cdk-constructs.NetworkingStackProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@condensetech/cdk-constructs.NetworkingStackProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@condensetech/cdk-constructs.NetworkingStackProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@condensetech/cdk-constructs.NetworkingStackProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@condensetech/cdk-constructs.NetworkingStackProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@condensetech/cdk-constructs.NetworkingStackProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@condensetech/cdk-constructs.NetworkingStackProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@condensetech/cdk-constructs.NetworkingStackProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

### RdsClusterMonitoringConfig <a name="RdsClusterMonitoringConfig" id="@condensetech/cdk-constructs.RdsClusterMonitoringConfig"></a>

The RdsClusterMonitoringConfig defines the thresholds for the RDS cluster monitoring.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.RdsClusterMonitoringConfig.Initializer"></a>

```typescript
import { RdsClusterMonitoringConfig } from '@condensetech/cdk-constructs'

const rdsClusterMonitoringConfig: RdsClusterMonitoringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.RdsClusterMonitoringConfig.property.cpuUtilizationThreshold">cpuUtilizationThreshold</a></code> | <code>number</code> | The CPU Utilization (%) threshold. |
| <code><a href="#@condensetech/cdk-constructs.RdsClusterMonitoringConfig.property.ebsByteBalanceThreshold">ebsByteBalanceThreshold</a></code> | <code>number</code> | The EBS Byte Balance (%) threshold. |
| <code><a href="#@condensetech/cdk-constructs.RdsClusterMonitoringConfig.property.ebsIoBalanceThreshold">ebsIoBalanceThreshold</a></code> | <code>number</code> | The EBS IO Balance (%) threshold. |
| <code><a href="#@condensetech/cdk-constructs.RdsClusterMonitoringConfig.property.freeableMemoryThreshold">freeableMemoryThreshold</a></code> | <code>aws-cdk-lib.Size</code> | The Freeable Memory threshold. |
| <code><a href="#@condensetech/cdk-constructs.RdsClusterMonitoringConfig.property.maxConnectionsThreshold">maxConnectionsThreshold</a></code> | <code>number</code> | The Max Connections threshold. |
| <code><a href="#@condensetech/cdk-constructs.RdsClusterMonitoringConfig.property.readLatencyThreshold">readLatencyThreshold</a></code> | <code>number</code> | The Read Latency threshold. |

---

##### `cpuUtilizationThreshold`<sup>Optional</sup> <a name="cpuUtilizationThreshold" id="@condensetech/cdk-constructs.RdsClusterMonitoringConfig.property.cpuUtilizationThreshold"></a>

```typescript
public readonly cpuUtilizationThreshold: number;
```

- *Type:* number
- *Default:* 90

The CPU Utilization (%) threshold.

---

##### `ebsByteBalanceThreshold`<sup>Optional</sup> <a name="ebsByteBalanceThreshold" id="@condensetech/cdk-constructs.RdsClusterMonitoringConfig.property.ebsByteBalanceThreshold"></a>

```typescript
public readonly ebsByteBalanceThreshold: number;
```

- *Type:* number
- *Default:* 10

The EBS Byte Balance (%) threshold.

---

##### `ebsIoBalanceThreshold`<sup>Optional</sup> <a name="ebsIoBalanceThreshold" id="@condensetech/cdk-constructs.RdsClusterMonitoringConfig.property.ebsIoBalanceThreshold"></a>

```typescript
public readonly ebsIoBalanceThreshold: number;
```

- *Type:* number
- *Default:* 10

The EBS IO Balance (%) threshold.

---

##### `freeableMemoryThreshold`<sup>Optional</sup> <a name="freeableMemoryThreshold" id="@condensetech/cdk-constructs.RdsClusterMonitoringConfig.property.freeableMemoryThreshold"></a>

```typescript
public readonly freeableMemoryThreshold: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 100 MiB

The Freeable Memory threshold.

---

##### `maxConnectionsThreshold`<sup>Optional</sup> <a name="maxConnectionsThreshold" id="@condensetech/cdk-constructs.RdsClusterMonitoringConfig.property.maxConnectionsThreshold"></a>

```typescript
public readonly maxConnectionsThreshold: number;
```

- *Type:* number
- *Default:* 50

The Max Connections threshold.

---

##### `readLatencyThreshold`<sup>Optional</sup> <a name="readLatencyThreshold" id="@condensetech/cdk-constructs.RdsClusterMonitoringConfig.property.readLatencyThreshold"></a>

```typescript
public readonly readLatencyThreshold: number;
```

- *Type:* number
- *Default:* 20

The Read Latency threshold.

---

### RdsInstanceMonitoringConfig <a name="RdsInstanceMonitoringConfig" id="@condensetech/cdk-constructs.RdsInstanceMonitoringConfig"></a>

The RdsInstanceMonitoringConfig defines the thresholds for the RDS instance monitoring.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.RdsInstanceMonitoringConfig.Initializer"></a>

```typescript
import { RdsInstanceMonitoringConfig } from '@condensetech/cdk-constructs'

const rdsInstanceMonitoringConfig: RdsInstanceMonitoringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.RdsInstanceMonitoringConfig.property.cpuUtilizationThreshold">cpuUtilizationThreshold</a></code> | <code>number</code> | The CPU Utilization (%) threshold. |
| <code><a href="#@condensetech/cdk-constructs.RdsInstanceMonitoringConfig.property.ebsByteBalanceThreshold">ebsByteBalanceThreshold</a></code> | <code>number</code> | The EBS Byte Balance (%) threshold. |
| <code><a href="#@condensetech/cdk-constructs.RdsInstanceMonitoringConfig.property.ebsIoBalanceThreshold">ebsIoBalanceThreshold</a></code> | <code>number</code> | The EBS IO Balance (%) threshold. |
| <code><a href="#@condensetech/cdk-constructs.RdsInstanceMonitoringConfig.property.freeableMemoryThreshold">freeableMemoryThreshold</a></code> | <code>aws-cdk-lib.Size</code> | The Freeable Memory threshold. |
| <code><a href="#@condensetech/cdk-constructs.RdsInstanceMonitoringConfig.property.freeStorageSpaceThreshold">freeStorageSpaceThreshold</a></code> | <code>aws-cdk-lib.Size</code> | The Free Storage Space threshold. |
| <code><a href="#@condensetech/cdk-constructs.RdsInstanceMonitoringConfig.property.maxConnectionsThreshold">maxConnectionsThreshold</a></code> | <code>number</code> | The Max Connections threshold. |
| <code><a href="#@condensetech/cdk-constructs.RdsInstanceMonitoringConfig.property.readLatencyThreshold">readLatencyThreshold</a></code> | <code>number</code> | The Read Latency threshold. |

---

##### `cpuUtilizationThreshold`<sup>Optional</sup> <a name="cpuUtilizationThreshold" id="@condensetech/cdk-constructs.RdsInstanceMonitoringConfig.property.cpuUtilizationThreshold"></a>

```typescript
public readonly cpuUtilizationThreshold: number;
```

- *Type:* number
- *Default:* 90

The CPU Utilization (%) threshold.

---

##### `ebsByteBalanceThreshold`<sup>Optional</sup> <a name="ebsByteBalanceThreshold" id="@condensetech/cdk-constructs.RdsInstanceMonitoringConfig.property.ebsByteBalanceThreshold"></a>

```typescript
public readonly ebsByteBalanceThreshold: number;
```

- *Type:* number
- *Default:* 10

The EBS Byte Balance (%) threshold.

---

##### `ebsIoBalanceThreshold`<sup>Optional</sup> <a name="ebsIoBalanceThreshold" id="@condensetech/cdk-constructs.RdsInstanceMonitoringConfig.property.ebsIoBalanceThreshold"></a>

```typescript
public readonly ebsIoBalanceThreshold: number;
```

- *Type:* number
- *Default:* 10

The EBS IO Balance (%) threshold.

---

##### `freeableMemoryThreshold`<sup>Optional</sup> <a name="freeableMemoryThreshold" id="@condensetech/cdk-constructs.RdsInstanceMonitoringConfig.property.freeableMemoryThreshold"></a>

```typescript
public readonly freeableMemoryThreshold: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 100 MiB

The Freeable Memory threshold.

---

##### `freeStorageSpaceThreshold`<sup>Optional</sup> <a name="freeStorageSpaceThreshold" id="@condensetech/cdk-constructs.RdsInstanceMonitoringConfig.property.freeStorageSpaceThreshold"></a>

```typescript
public readonly freeStorageSpaceThreshold: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 100 MiB

The Free Storage Space threshold.

---

##### `maxConnectionsThreshold`<sup>Optional</sup> <a name="maxConnectionsThreshold" id="@condensetech/cdk-constructs.RdsInstanceMonitoringConfig.property.maxConnectionsThreshold"></a>

```typescript
public readonly maxConnectionsThreshold: number;
```

- *Type:* number
- *Default:* 50

The Max Connections threshold.

---

##### `readLatencyThreshold`<sup>Optional</sup> <a name="readLatencyThreshold" id="@condensetech/cdk-constructs.RdsInstanceMonitoringConfig.property.readLatencyThreshold"></a>

```typescript
public readonly readLatencyThreshold: number;
```

- *Type:* number
- *Default:* 20

The Read Latency threshold.

---

### TargetGroupMonitoringConfig <a name="TargetGroupMonitoringConfig" id="@condensetech/cdk-constructs.TargetGroupMonitoringConfig"></a>

The TargetGroupMonitoringConfig defines the thresholds for the target group monitoring.

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.TargetGroupMonitoringConfig.Initializer"></a>

```typescript
import { TargetGroupMonitoringConfig } from '@condensetech/cdk-constructs'

const targetGroupMonitoringConfig: TargetGroupMonitoringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.TargetGroupMonitoringConfig.property.minHealthyHostsThreshold">minHealthyHostsThreshold</a></code> | <code>number</code> | The Min Healthy Hosts threshold. |
| <code><a href="#@condensetech/cdk-constructs.TargetGroupMonitoringConfig.property.responseTimeThreshold">responseTimeThreshold</a></code> | <code>aws-cdk-lib.Duration</code> | The Response Time threshold. |

---

##### `minHealthyHostsThreshold`<sup>Optional</sup> <a name="minHealthyHostsThreshold" id="@condensetech/cdk-constructs.TargetGroupMonitoringConfig.property.minHealthyHostsThreshold"></a>

```typescript
public readonly minHealthyHostsThreshold: number;
```

- *Type:* number
- *Default:* 1

The Min Healthy Hosts threshold.

---

##### `responseTimeThreshold`<sup>Optional</sup> <a name="responseTimeThreshold" id="@condensetech/cdk-constructs.TargetGroupMonitoringConfig.property.responseTimeThreshold"></a>

```typescript
public readonly responseTimeThreshold: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* No threshold.

The Response Time threshold.

---

### WidgetAlertAnnotationProps <a name="WidgetAlertAnnotationProps" id="@condensetech/cdk-constructs.WidgetAlertAnnotationProps"></a>

#### Initializer <a name="Initializer" id="@condensetech/cdk-constructs.WidgetAlertAnnotationProps.Initializer"></a>

```typescript
import { WidgetAlertAnnotationProps } from '@condensetech/cdk-constructs'

const widgetAlertAnnotationProps: WidgetAlertAnnotationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.WidgetAlertAnnotationProps.property.color">color</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.WidgetAlertAnnotationProps.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.WidgetAlertAnnotationProps.property.value">value</a></code> | <code>number</code> | *No description.* |

---

##### `color`<sup>Optional</sup> <a name="color" id="@condensetech/cdk-constructs.WidgetAlertAnnotationProps.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* string

---

##### `label`<sup>Optional</sup> <a name="label" id="@condensetech/cdk-constructs.WidgetAlertAnnotationProps.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `value`<sup>Optional</sup> <a name="value" id="@condensetech/cdk-constructs.WidgetAlertAnnotationProps.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationLoadBalancerMonitoringAspect <a name="ApplicationLoadBalancerMonitoringAspect" id="@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringAspect"></a>

- *Implements:* aws-cdk-lib.IAspect

The ApplicationLoadBalancerMonitoringAspect iterates over the Application Load Balancers and adds monitoring widgets and alarms.

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringAspect.Initializer"></a>

```typescript
import { ApplicationLoadBalancerMonitoringAspect } from '@condensetech/cdk-constructs'

new ApplicationLoadBalancerMonitoringAspect(monitoringFacade: ICondenseMonitoringFacade)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringAspect.Initializer.parameter.monitoringFacade">monitoringFacade</a></code> | <code><a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a></code> | *No description.* |

---

##### `monitoringFacade`<sup>Required</sup> <a name="monitoringFacade" id="@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringAspect.Initializer.parameter.monitoringFacade"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringAspect.overrideConfig">overrideConfig</a></code> | Overrides the default configuration for a specific Application Load Balancer. |
| <code><a href="#@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `overrideConfig` <a name="overrideConfig" id="@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringAspect.overrideConfig"></a>

```typescript
public overrideConfig(node: ApplicationLoadBalancer, config: ApplicationLoadBalancerMonitoringConfig): void
```

Overrides the default configuration for a specific Application Load Balancer.

###### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringAspect.overrideConfig.parameter.node"></a>

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer

The Application Load Balancer to monitor.

---

###### `config`<sup>Required</sup> <a name="config" id="@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringAspect.overrideConfig.parameter.config"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringConfig">ApplicationLoadBalancerMonitoringConfig</a>

The configuration to apply.

---

##### `visit` <a name="visit" id="@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### CacheClusterMonitoringAspect <a name="CacheClusterMonitoringAspect" id="@condensetech/cdk-constructs.CacheClusterMonitoringAspect"></a>

- *Implements:* aws-cdk-lib.IAspect

The CacheClusterMonitoringAspect iterates over the Elasticache clusters and adds monitoring widgets and alarms.

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.CacheClusterMonitoringAspect.Initializer"></a>

```typescript
import { CacheClusterMonitoringAspect } from '@condensetech/cdk-constructs'

new CacheClusterMonitoringAspect(monitoringFacade: ICondenseMonitoringFacade)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.CacheClusterMonitoringAspect.Initializer.parameter.monitoringFacade">monitoringFacade</a></code> | <code><a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a></code> | *No description.* |

---

##### `monitoringFacade`<sup>Required</sup> <a name="monitoringFacade" id="@condensetech/cdk-constructs.CacheClusterMonitoringAspect.Initializer.parameter.monitoringFacade"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.CacheClusterMonitoringAspect.overrideConfig">overrideConfig</a></code> | Overrides the default configuration for a specific Elasticache cluster. |
| <code><a href="#@condensetech/cdk-constructs.CacheClusterMonitoringAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `overrideConfig` <a name="overrideConfig" id="@condensetech/cdk-constructs.CacheClusterMonitoringAspect.overrideConfig"></a>

```typescript
public overrideConfig(node: CfnCacheCluster, config: CacheClusterMonitoringConfig): void
```

Overrides the default configuration for a specific Elasticache cluster.

###### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.CacheClusterMonitoringAspect.overrideConfig.parameter.node"></a>

- *Type:* aws-cdk-lib.aws_elasticache.CfnCacheCluster

The elasticache cluster to monitor.

---

###### `config`<sup>Required</sup> <a name="config" id="@condensetech/cdk-constructs.CacheClusterMonitoringAspect.overrideConfig.parameter.config"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.CacheClusterMonitoringConfig">CacheClusterMonitoringConfig</a>

The configuration to apply.

---

##### `visit` <a name="visit" id="@condensetech/cdk-constructs.CacheClusterMonitoringAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.CacheClusterMonitoringAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.CacheClusterMonitoringAspect.property.monitoringFacade">monitoringFacade</a></code> | <code><a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a></code> | *No description.* |

---

##### `monitoringFacade`<sup>Required</sup> <a name="monitoringFacade" id="@condensetech/cdk-constructs.CacheClusterMonitoringAspect.property.monitoringFacade"></a>

```typescript
public readonly monitoringFacade: ICondenseMonitoringFacade;
```

- *Type:* <a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a>

---


### FargateServiceMonitoringAspect <a name="FargateServiceMonitoringAspect" id="@condensetech/cdk-constructs.FargateServiceMonitoringAspect"></a>

- *Implements:* aws-cdk-lib.IAspect

The FargateServiceMonitoringAspect iterates over the Fargate services and adds monitoring widgets and alarms.

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.FargateServiceMonitoringAspect.Initializer"></a>

```typescript
import { FargateServiceMonitoringAspect } from '@condensetech/cdk-constructs'

new FargateServiceMonitoringAspect(monitoringFacade: ICondenseMonitoringFacade)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.FargateServiceMonitoringAspect.Initializer.parameter.monitoringFacade">monitoringFacade</a></code> | <code><a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a></code> | *No description.* |

---

##### `monitoringFacade`<sup>Required</sup> <a name="monitoringFacade" id="@condensetech/cdk-constructs.FargateServiceMonitoringAspect.Initializer.parameter.monitoringFacade"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.FargateServiceMonitoringAspect.overrideConfig">overrideConfig</a></code> | Overrides the default configuration for a specific Fargate service. |
| <code><a href="#@condensetech/cdk-constructs.FargateServiceMonitoringAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `overrideConfig` <a name="overrideConfig" id="@condensetech/cdk-constructs.FargateServiceMonitoringAspect.overrideConfig"></a>

```typescript
public overrideConfig(node: FargateService, config: FargateServiceMonitoringConfig): void
```

Overrides the default configuration for a specific Fargate service.

###### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.FargateServiceMonitoringAspect.overrideConfig.parameter.node"></a>

- *Type:* aws-cdk-lib.aws_ecs.FargateService

The Fargate service to monitor.

---

###### `config`<sup>Required</sup> <a name="config" id="@condensetech/cdk-constructs.FargateServiceMonitoringAspect.overrideConfig.parameter.config"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.FargateServiceMonitoringConfig">FargateServiceMonitoringConfig</a>

The configuration to apply.

---

##### `visit` <a name="visit" id="@condensetech/cdk-constructs.FargateServiceMonitoringAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.FargateServiceMonitoringAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### MonitoringFacade <a name="MonitoringFacade" id="@condensetech/cdk-constructs.MonitoringFacade"></a>

- *Implements:* <a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a>

The MonitoringFacade creates a Cloudwatch dashboard and applies monitoring aspects to resources.

These aspects will scan for resources, create alarms and add metrics to the MonitoringFacade dashboard.

This allow to have a centralized monitoring configuration for all resources in the stack.

Additionally, the `config*` methods allow to override the default configuration for a specific resource.

*Example*

```typescript
class MyStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    const cluster = new AuroraCluster(this, 'DatabaseCluster', { ... });

    // Even if the MonitoringFacade is built after the AuroraCluster, the cluster will be monitored, because the aspects are executed after the stack is built.
    const monitoring = new MonitoringFacade(this, { topicArn: 'arn:aws:sns:us-east-1:123456789012:MyTopic' });

    const cluster2 = new AuroraCluster(this, 'DatabaseCluster2', { ... });
    // The monitoring configuration for the second cluster is modified so that the CPU utilization alarm is triggered when the utilization is over the 10%.
    monitoring.configRdsCluster(cluster2, {
      cpuUtilizationThreshold: 0.1,
    });
  }
}
```


#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.MonitoringFacade.Initializer"></a>

```typescript
import { MonitoringFacade } from '@condensetech/cdk-constructs'

new MonitoringFacade(scope: Stack, props: MonitoringFacadeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.MonitoringFacade.Initializer.parameter.scope">scope</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.MonitoringFacade.Initializer.parameter.props">props</a></code> | <code><a href="#@condensetech/cdk-constructs.MonitoringFacadeProps">MonitoringFacadeProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.MonitoringFacade.Initializer.parameter.scope"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.MonitoringFacade.Initializer.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.MonitoringFacadeProps">MonitoringFacadeProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.MonitoringFacade.addAlarm">addAlarm</a></code> | Add an alarm to the monitoring facade, by linking it to the alarms topic. |
| <code><a href="#@condensetech/cdk-constructs.MonitoringFacade.configApplicationLoadBalancer">configApplicationLoadBalancer</a></code> | Overrides the default configuration for a specific Application Load Balancer. |
| <code><a href="#@condensetech/cdk-constructs.MonitoringFacade.configCacheCluster">configCacheCluster</a></code> | Overrides the default configuration for a specific Elasticache cluster. |
| <code><a href="#@condensetech/cdk-constructs.MonitoringFacade.configFargateService">configFargateService</a></code> | Overrides the default configuration for a specific ECS Fargate service. |
| <code><a href="#@condensetech/cdk-constructs.MonitoringFacade.configRdsCluster">configRdsCluster</a></code> | Overrides the default configuration for a specific RDS cluster. |
| <code><a href="#@condensetech/cdk-constructs.MonitoringFacade.configRdsInstance">configRdsInstance</a></code> | Overrides the default configuration for a specific RDS instance. |
| <code><a href="#@condensetech/cdk-constructs.MonitoringFacade.configTargetGroup">configTargetGroup</a></code> | Overrides the default configuration for a specific ELBv2 Target Group. |

---

##### `addAlarm` <a name="addAlarm" id="@condensetech/cdk-constructs.MonitoringFacade.addAlarm"></a>

```typescript
public addAlarm(alarm: Alarm): void
```

Add an alarm to the monitoring facade, by linking it to the alarms topic.

###### `alarm`<sup>Required</sup> <a name="alarm" id="@condensetech/cdk-constructs.MonitoringFacade.addAlarm.parameter.alarm"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.Alarm

---

##### `configApplicationLoadBalancer` <a name="configApplicationLoadBalancer" id="@condensetech/cdk-constructs.MonitoringFacade.configApplicationLoadBalancer"></a>

```typescript
public configApplicationLoadBalancer(resource: ApplicationLoadBalancer, config: ApplicationLoadBalancerMonitoringConfig): void
```

Overrides the default configuration for a specific Application Load Balancer.

###### `resource`<sup>Required</sup> <a name="resource" id="@condensetech/cdk-constructs.MonitoringFacade.configApplicationLoadBalancer.parameter.resource"></a>

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer

The ALB to monitor.

---

###### `config`<sup>Required</sup> <a name="config" id="@condensetech/cdk-constructs.MonitoringFacade.configApplicationLoadBalancer.parameter.config"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.ApplicationLoadBalancerMonitoringConfig">ApplicationLoadBalancerMonitoringConfig</a>

The configuration to apply.

---

##### `configCacheCluster` <a name="configCacheCluster" id="@condensetech/cdk-constructs.MonitoringFacade.configCacheCluster"></a>

```typescript
public configCacheCluster(resource: CfnCacheCluster, config: CacheClusterMonitoringConfig): void
```

Overrides the default configuration for a specific Elasticache cluster.

###### `resource`<sup>Required</sup> <a name="resource" id="@condensetech/cdk-constructs.MonitoringFacade.configCacheCluster.parameter.resource"></a>

- *Type:* aws-cdk-lib.aws_elasticache.CfnCacheCluster

The elasticache cluster to monitor.

---

###### `config`<sup>Required</sup> <a name="config" id="@condensetech/cdk-constructs.MonitoringFacade.configCacheCluster.parameter.config"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.CacheClusterMonitoringConfig">CacheClusterMonitoringConfig</a>

The configuration to apply.

---

##### `configFargateService` <a name="configFargateService" id="@condensetech/cdk-constructs.MonitoringFacade.configFargateService"></a>

```typescript
public configFargateService(resource: FargateService, config: FargateServiceMonitoringConfig): void
```

Overrides the default configuration for a specific ECS Fargate service.

###### `resource`<sup>Required</sup> <a name="resource" id="@condensetech/cdk-constructs.MonitoringFacade.configFargateService.parameter.resource"></a>

- *Type:* aws-cdk-lib.aws_ecs.FargateService

The Fargate service to monitor.

---

###### `config`<sup>Required</sup> <a name="config" id="@condensetech/cdk-constructs.MonitoringFacade.configFargateService.parameter.config"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.FargateServiceMonitoringConfig">FargateServiceMonitoringConfig</a>

The configuration to apply.

---

##### `configRdsCluster` <a name="configRdsCluster" id="@condensetech/cdk-constructs.MonitoringFacade.configRdsCluster"></a>

```typescript
public configRdsCluster(resource: DatabaseCluster, config: RdsClusterMonitoringConfig): void
```

Overrides the default configuration for a specific RDS cluster.

###### `resource`<sup>Required</sup> <a name="resource" id="@condensetech/cdk-constructs.MonitoringFacade.configRdsCluster.parameter.resource"></a>

- *Type:* aws-cdk-lib.aws_rds.DatabaseCluster

The RDS cluster to monitor.

---

###### `config`<sup>Required</sup> <a name="config" id="@condensetech/cdk-constructs.MonitoringFacade.configRdsCluster.parameter.config"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.RdsClusterMonitoringConfig">RdsClusterMonitoringConfig</a>

The configuration to apply.

---

##### `configRdsInstance` <a name="configRdsInstance" id="@condensetech/cdk-constructs.MonitoringFacade.configRdsInstance"></a>

```typescript
public configRdsInstance(resource: DatabaseInstance, config: RdsInstanceMonitoringConfig): void
```

Overrides the default configuration for a specific RDS instance.

###### `resource`<sup>Required</sup> <a name="resource" id="@condensetech/cdk-constructs.MonitoringFacade.configRdsInstance.parameter.resource"></a>

- *Type:* aws-cdk-lib.aws_rds.DatabaseInstance

The RDS instance to monitor.

---

###### `config`<sup>Required</sup> <a name="config" id="@condensetech/cdk-constructs.MonitoringFacade.configRdsInstance.parameter.config"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.RdsInstanceMonitoringConfig">RdsInstanceMonitoringConfig</a>

The configuration to apply.

---

##### `configTargetGroup` <a name="configTargetGroup" id="@condensetech/cdk-constructs.MonitoringFacade.configTargetGroup"></a>

```typescript
public configTargetGroup(resource: ApplicationTargetGroup, config: TargetGroupMonitoringConfig): void
```

Overrides the default configuration for a specific ELBv2 Target Group.

###### `resource`<sup>Required</sup> <a name="resource" id="@condensetech/cdk-constructs.MonitoringFacade.configTargetGroup.parameter.resource"></a>

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationTargetGroup

The target group to monitor.

---

###### `config`<sup>Required</sup> <a name="config" id="@condensetech/cdk-constructs.MonitoringFacade.configTargetGroup.parameter.config"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.TargetGroupMonitoringConfig">TargetGroupMonitoringConfig</a>

The configuration to apply.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.MonitoringFacade.of">of</a></code> | *No description.* |

---

##### `of` <a name="of" id="@condensetech/cdk-constructs.MonitoringFacade.of"></a>

```typescript
import { MonitoringFacade } from '@condensetech/cdk-constructs'

MonitoringFacade.of(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.MonitoringFacade.of.parameter.scope"></a>

- *Type:* constructs.Construct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.MonitoringFacade.property.alarmTopic">alarmTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | *No description.* |
| <code><a href="#@condensetech/cdk-constructs.MonitoringFacade.property.dashboard">dashboard</a></code> | <code>aws-cdk-lib.aws_cloudwatch.Dashboard</code> | Returns the Cloudwatch dashboard to be used for this stack monitoring. |

---

##### `alarmTopic`<sup>Required</sup> <a name="alarmTopic" id="@condensetech/cdk-constructs.MonitoringFacade.property.alarmTopic"></a>

```typescript
public readonly alarmTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

---

##### `dashboard`<sup>Required</sup> <a name="dashboard" id="@condensetech/cdk-constructs.MonitoringFacade.property.dashboard"></a>

```typescript
public readonly dashboard: Dashboard;
```

- *Type:* aws-cdk-lib.aws_cloudwatch.Dashboard

Returns the Cloudwatch dashboard to be used for this stack monitoring.

---


### RdsClusterMonitoringAspect <a name="RdsClusterMonitoringAspect" id="@condensetech/cdk-constructs.RdsClusterMonitoringAspect"></a>

- *Implements:* aws-cdk-lib.IAspect

The RdsClusterMonitoringAspect iterates over the RDS clusters and adds monitoring widgets and alarms.

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.RdsClusterMonitoringAspect.Initializer"></a>

```typescript
import { RdsClusterMonitoringAspect } from '@condensetech/cdk-constructs'

new RdsClusterMonitoringAspect(monitoringFacade: ICondenseMonitoringFacade)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.RdsClusterMonitoringAspect.Initializer.parameter.monitoringFacade">monitoringFacade</a></code> | <code><a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a></code> | *No description.* |

---

##### `monitoringFacade`<sup>Required</sup> <a name="monitoringFacade" id="@condensetech/cdk-constructs.RdsClusterMonitoringAspect.Initializer.parameter.monitoringFacade"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.RdsClusterMonitoringAspect.overrideConfig">overrideConfig</a></code> | Overrides the default configuration for a specific RDS cluster. |
| <code><a href="#@condensetech/cdk-constructs.RdsClusterMonitoringAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `overrideConfig` <a name="overrideConfig" id="@condensetech/cdk-constructs.RdsClusterMonitoringAspect.overrideConfig"></a>

```typescript
public overrideConfig(node: DatabaseCluster, config: RdsClusterMonitoringConfig): void
```

Overrides the default configuration for a specific RDS cluster.

###### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.RdsClusterMonitoringAspect.overrideConfig.parameter.node"></a>

- *Type:* aws-cdk-lib.aws_rds.DatabaseCluster

The RDS cluster to monitor.

---

###### `config`<sup>Required</sup> <a name="config" id="@condensetech/cdk-constructs.RdsClusterMonitoringAspect.overrideConfig.parameter.config"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.RdsClusterMonitoringConfig">RdsClusterMonitoringConfig</a>

The configuration to apply.

---

##### `visit` <a name="visit" id="@condensetech/cdk-constructs.RdsClusterMonitoringAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.RdsClusterMonitoringAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### RdsInstanceMonitoringAspect <a name="RdsInstanceMonitoringAspect" id="@condensetech/cdk-constructs.RdsInstanceMonitoringAspect"></a>

- *Implements:* aws-cdk-lib.IAspect

The RdsInstanceMonitoringAspect iterates over the RDS instances and adds monitoring widgets and alarms.

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.RdsInstanceMonitoringAspect.Initializer"></a>

```typescript
import { RdsInstanceMonitoringAspect } from '@condensetech/cdk-constructs'

new RdsInstanceMonitoringAspect(monitoringFacade: ICondenseMonitoringFacade)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.RdsInstanceMonitoringAspect.Initializer.parameter.monitoringFacade">monitoringFacade</a></code> | <code><a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a></code> | *No description.* |

---

##### `monitoringFacade`<sup>Required</sup> <a name="monitoringFacade" id="@condensetech/cdk-constructs.RdsInstanceMonitoringAspect.Initializer.parameter.monitoringFacade"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.RdsInstanceMonitoringAspect.overrideConfig">overrideConfig</a></code> | Overrides the default configuration for the RDS instance. |
| <code><a href="#@condensetech/cdk-constructs.RdsInstanceMonitoringAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `overrideConfig` <a name="overrideConfig" id="@condensetech/cdk-constructs.RdsInstanceMonitoringAspect.overrideConfig"></a>

```typescript
public overrideConfig(node: DatabaseInstance, config: RdsInstanceMonitoringConfig): void
```

Overrides the default configuration for the RDS instance.

###### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.RdsInstanceMonitoringAspect.overrideConfig.parameter.node"></a>

- *Type:* aws-cdk-lib.aws_rds.DatabaseInstance

The RDS instance to monitor.

---

###### `config`<sup>Required</sup> <a name="config" id="@condensetech/cdk-constructs.RdsInstanceMonitoringAspect.overrideConfig.parameter.config"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.RdsInstanceMonitoringConfig">RdsInstanceMonitoringConfig</a>

The configuration to apply.

---

##### `visit` <a name="visit" id="@condensetech/cdk-constructs.RdsInstanceMonitoringAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.RdsInstanceMonitoringAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---




### TargetGroupMonitoringAspect <a name="TargetGroupMonitoringAspect" id="@condensetech/cdk-constructs.TargetGroupMonitoringAspect"></a>

- *Implements:* aws-cdk-lib.IAspect

The TargetGroupMonitoringAspect iterates over the target groups and adds monitoring widgets and alarms.

#### Initializers <a name="Initializers" id="@condensetech/cdk-constructs.TargetGroupMonitoringAspect.Initializer"></a>

```typescript
import { TargetGroupMonitoringAspect } from '@condensetech/cdk-constructs'

new TargetGroupMonitoringAspect(monitoringFacade: ICondenseMonitoringFacade)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.TargetGroupMonitoringAspect.Initializer.parameter.monitoringFacade">monitoringFacade</a></code> | <code><a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a></code> | *No description.* |

---

##### `monitoringFacade`<sup>Required</sup> <a name="monitoringFacade" id="@condensetech/cdk-constructs.TargetGroupMonitoringAspect.Initializer.parameter.monitoringFacade"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.TargetGroupMonitoringAspect.overrideConfig">overrideConfig</a></code> | Overrides the default configuration for a specific target group. |
| <code><a href="#@condensetech/cdk-constructs.TargetGroupMonitoringAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `overrideConfig` <a name="overrideConfig" id="@condensetech/cdk-constructs.TargetGroupMonitoringAspect.overrideConfig"></a>

```typescript
public overrideConfig(node: ApplicationTargetGroup, config: TargetGroupMonitoringConfig): void
```

Overrides the default configuration for a specific target group.

###### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.TargetGroupMonitoringAspect.overrideConfig.parameter.node"></a>

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationTargetGroup

The target group to monitor.

---

###### `config`<sup>Required</sup> <a name="config" id="@condensetech/cdk-constructs.TargetGroupMonitoringAspect.overrideConfig.parameter.config"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.TargetGroupMonitoringConfig">TargetGroupMonitoringConfig</a>

The configuration to apply.

---

##### `visit` <a name="visit" id="@condensetech/cdk-constructs.TargetGroupMonitoringAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="@condensetech/cdk-constructs.TargetGroupMonitoringAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.TargetGroupMonitoringAspect.property.monitoringFacade">monitoringFacade</a></code> | <code><a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a></code> | *No description.* |

---

##### `monitoringFacade`<sup>Required</sup> <a name="monitoringFacade" id="@condensetech/cdk-constructs.TargetGroupMonitoringAspect.property.monitoringFacade"></a>

```typescript
public readonly monitoringFacade: ICondenseMonitoringFacade;
```

- *Type:* <a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a>

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IApplicationListenerPriorityAllocator <a name="IApplicationListenerPriorityAllocator" id="@condensetech/cdk-constructs.IApplicationListenerPriorityAllocator"></a>

- *Implemented By:* <a href="#@condensetech/cdk-constructs.ApplicationListenerPriorityAllocator">ApplicationListenerPriorityAllocator</a>, <a href="#@condensetech/cdk-constructs.IApplicationListenerPriorityAllocator">IApplicationListenerPriorityAllocator</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.IApplicationListenerPriorityAllocator.allocatePriority">allocatePriority</a></code> | Allocates the priority of an application listener rule. |

---

##### `allocatePriority` <a name="allocatePriority" id="@condensetech/cdk-constructs.IApplicationListenerPriorityAllocator.allocatePriority"></a>

```typescript
public allocatePriority(scope: Construct, id: string, props: AllocatePriorityProps): number
```

Allocates the priority of an application listener rule.

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.IApplicationListenerPriorityAllocator.allocatePriority.parameter.scope"></a>

- *Type:* constructs.Construct

The scope of the construct.

---

###### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.IApplicationListenerPriorityAllocator.allocatePriority.parameter.id"></a>

- *Type:* string

The ID of the listener rule to allocate the priority to.

---

###### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.IApplicationListenerPriorityAllocator.allocatePriority.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.AllocatePriorityProps">AllocatePriorityProps</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.IApplicationListenerPriorityAllocator.property.serviceToken">serviceToken</a></code> | <code>string</code> | The service token to use to reference the custom resource. |

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@condensetech/cdk-constructs.IApplicationListenerPriorityAllocator.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

The service token to use to reference the custom resource.

---

### ICondenseMonitoringFacade <a name="ICondenseMonitoringFacade" id="@condensetech/cdk-constructs.ICondenseMonitoringFacade"></a>

- *Implemented By:* <a href="#@condensetech/cdk-constructs.MonitoringFacade">MonitoringFacade</a>, <a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade">ICondenseMonitoringFacade</a>

The ICondenseMonitoringFacade interface defines the methods that the monitoring facade must implement.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade.addAlarm">addAlarm</a></code> | Add an alarm to the monitoring facade, by linking it to the alarms topic. |

---

##### `addAlarm` <a name="addAlarm" id="@condensetech/cdk-constructs.ICondenseMonitoringFacade.addAlarm"></a>

```typescript
public addAlarm(alarm: Alarm): void
```

Add an alarm to the monitoring facade, by linking it to the alarms topic.

###### `alarm`<sup>Required</sup> <a name="alarm" id="@condensetech/cdk-constructs.ICondenseMonitoringFacade.addAlarm.parameter.alarm"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.Alarm

The alarm to add.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.ICondenseMonitoringFacade.property.dashboard">dashboard</a></code> | <code>aws-cdk-lib.aws_cloudwatch.Dashboard</code> | Returns the Cloudwatch dashboard to be used for this stack monitoring. |

---

##### `dashboard`<sup>Required</sup> <a name="dashboard" id="@condensetech/cdk-constructs.ICondenseMonitoringFacade.property.dashboard"></a>

```typescript
public readonly dashboard: Dashboard;
```

- *Type:* aws-cdk-lib.aws_cloudwatch.Dashboard

Returns the Cloudwatch dashboard to be used for this stack monitoring.

---

### IDatabase <a name="IDatabase" id="@condensetech/cdk-constructs.IDatabase"></a>

- *Extends:* aws-cdk-lib.aws_ec2.IConnectable

- *Implemented By:* <a href="#@condensetech/cdk-constructs.AuroraCluster">AuroraCluster</a>, <a href="#@condensetech/cdk-constructs.AuroraClusterStack">AuroraClusterStack</a>, <a href="#@condensetech/cdk-constructs.DatabaseInstance">DatabaseInstance</a>, <a href="#@condensetech/cdk-constructs.DatabaseInstanceStack">DatabaseInstanceStack</a>, <a href="#@condensetech/cdk-constructs.IDatabase">IDatabase</a>

The IDatabase interface allows to write stacks and constructs that depend on a database without being tied to the specific database implementation.

*Example*

```typescript
// In this example, MyConstruct is used across several IDatabase implementations without being tied to a specific construct or stack

interface MyProps {
  database: IDatabase;
}

class MyConstruct extends Construct {
  constructor(scope: Construct, id: string, props: MyProps) {
   super(scope, id);
   new CfnOutput(this, 'DatabaseEndpoint', { value: props.database.endpoint.hostname });
  }
}

interface MyStackProps {
  database3: IDatabase;
}

class MyStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: MyStackProps) {
    super(scope, id, props);
    new MyConstruct(this, 'MyConstruct1', {
      database: new AuroraCluster(this, 'Database', { ... })
    });
    new MyConstruct(this, 'MyConstruct2', {
      database: new DatabaseInstance(this, 'Database', { ... })
    });
    new MyConstruct(this, 'MyConstruct3', {
       database: props.database3
    });
  }
}

const database3 = new AuroraClustrStack(app, 'AuroraClusterStack', { ... });
new MyStack(app, 'MyStack', { database3 });
```


#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.IDatabase.fetchSecret">fetchSecret</a></code> | Utility method that returns the secret with the credentials to access the database in a cross-stack compatible way. |

---

##### `fetchSecret` <a name="fetchSecret" id="@condensetech/cdk-constructs.IDatabase.fetchSecret"></a>

```typescript
public fetchSecret(scope: Construct, id?: string): ISecret
```

Utility method that returns the secret with the credentials to access the database in a cross-stack compatible way.

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.IDatabase.fetchSecret.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Optional</sup> <a name="id" id="@condensetech/cdk-constructs.IDatabase.fetchSecret.parameter.id"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.IDatabase.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | The network connections associated with this resource. |
| <code><a href="#@condensetech/cdk-constructs.IDatabase.property.endpoint">endpoint</a></code> | <code>aws-cdk-lib.aws_rds.Endpoint</code> | The endpoint of the database. |

---

##### `connections`<sup>Required</sup> <a name="connections" id="@condensetech/cdk-constructs.IDatabase.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

The network connections associated with this resource.

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@condensetech/cdk-constructs.IDatabase.property.endpoint"></a>

```typescript
public readonly endpoint: Endpoint;
```

- *Type:* aws-cdk-lib.aws_rds.Endpoint

The endpoint of the database.

---

### IEntrypoint <a name="IEntrypoint" id="@condensetech/cdk-constructs.IEntrypoint"></a>

- *Implemented By:* <a href="#@condensetech/cdk-constructs.Entrypoint">Entrypoint</a>, <a href="#@condensetech/cdk-constructs.EntrypointStack">EntrypointStack</a>, <a href="#@condensetech/cdk-constructs.IEntrypoint">IEntrypoint</a>

The Entrypoint LoadBalancer is an Application Load Balancer (ALB) that serves as the centralized entry point for all applications.

This ALB is shared across multiple applications, primarily to optimize infrastructure costs by reducing the need for multiple load balancers.

The IEntrypoint interface defines the common behaviors and properties that various implementations must adhere to.
This allows stacks and constructs to interact with the entry point without being dependent on a specific implementation, ensuring greater flexibility and maintainability.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@condensetech/cdk-constructs.IEntrypoint.allocateListenerRule">allocateListenerRule</a></code> | It creates an ApplicationListenerRule for the HTTPS listener of the Entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.IEntrypoint.referenceListener">referenceListener</a></code> | Utility method that returns the HTTPS listener of the entrypoint in a cross-stack compatible way. |

---

##### `allocateListenerRule` <a name="allocateListenerRule" id="@condensetech/cdk-constructs.IEntrypoint.allocateListenerRule"></a>

```typescript
public allocateListenerRule(scope: Construct, id: string, props: AllocateApplicationListenerRuleProps): ApplicationListenerRule
```

It creates an ApplicationListenerRule for the HTTPS listener of the Entrypoint.

This method doesn't require a priority to be explicitly set, and tracks the allocated priorities on a DynamoDB table to avoid conflicts.

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.IEntrypoint.allocateListenerRule.parameter.scope"></a>

- *Type:* constructs.Construct

The scope of the construct.

---

###### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.IEntrypoint.allocateListenerRule.parameter.id"></a>

- *Type:* string

The application listener rule.

---

###### `props`<sup>Required</sup> <a name="props" id="@condensetech/cdk-constructs.IEntrypoint.allocateListenerRule.parameter.props"></a>

- *Type:* <a href="#@condensetech/cdk-constructs.AllocateApplicationListenerRuleProps">AllocateApplicationListenerRuleProps</a>

Application Listener rule properties.

---

##### `referenceListener` <a name="referenceListener" id="@condensetech/cdk-constructs.IEntrypoint.referenceListener"></a>

```typescript
public referenceListener(scope: Construct, id: string): IApplicationListener
```

Utility method that returns the HTTPS listener of the entrypoint in a cross-stack compatible way.

###### `scope`<sup>Required</sup> <a name="scope" id="@condensetech/cdk-constructs.IEntrypoint.referenceListener.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@condensetech/cdk-constructs.IEntrypoint.referenceListener.parameter.id"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.IEntrypoint.property.alb">alb</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer</code> | The ALB that serves as the entrypoint. |
| <code><a href="#@condensetech/cdk-constructs.IEntrypoint.property.domainName">domainName</a></code> | <code>string</code> | The load balancer custom domain name. |
| <code><a href="#@condensetech/cdk-constructs.IEntrypoint.property.priorityAllocator">priorityAllocator</a></code> | <code><a href="#@condensetech/cdk-constructs.IApplicationListenerPriorityAllocator">IApplicationListenerPriorityAllocator</a></code> | The Application Listener priority allocator for the entrypoint. |

---

##### `alb`<sup>Required</sup> <a name="alb" id="@condensetech/cdk-constructs.IEntrypoint.property.alb"></a>

```typescript
public readonly alb: IApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer

The ALB that serves as the entrypoint.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@condensetech/cdk-constructs.IEntrypoint.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string
- *Default:* No domain name is specified, and the load balancer dns name is used.

The load balancer custom domain name.

---

##### `priorityAllocator`<sup>Required</sup> <a name="priorityAllocator" id="@condensetech/cdk-constructs.IEntrypoint.property.priorityAllocator"></a>

```typescript
public readonly priorityAllocator: IApplicationListenerPriorityAllocator;
```

- *Type:* <a href="#@condensetech/cdk-constructs.IApplicationListenerPriorityAllocator">IApplicationListenerPriorityAllocator</a>

The Application Listener priority allocator for the entrypoint.

---

### INetworking <a name="INetworking" id="@condensetech/cdk-constructs.INetworking"></a>

- *Implemented By:* <a href="#@condensetech/cdk-constructs.Networking">Networking</a>, <a href="#@condensetech/cdk-constructs.NetworkingStack">NetworkingStack</a>, <a href="#@condensetech/cdk-constructs.INetworking">INetworking</a>

The INetworking interface allows to write stacks and constructs that depend on networking without being tied to the specific networking implementation.

This allows to write composable infrastructures that, depending on the scenario, can split the networking layer in a separate stack or in a construct.

In addition, the INetworking interface imposes a set of properties to ease the development of constructs that depend on networking resources.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@condensetech/cdk-constructs.INetworking.property.hasPrivateSubnets">hasPrivateSubnets</a></code> | <code>boolean</code> | Returns if the VPC has private subnets (with access to internet through a NAT gateway). |
| <code><a href="#@condensetech/cdk-constructs.INetworking.property.isolatedSubnets">isolatedSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Returns the isolated subnets of the VPC (without access to internet). |
| <code><a href="#@condensetech/cdk-constructs.INetworking.property.publicSubnets">publicSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Returns the public subnets of the VPC. |
| <code><a href="#@condensetech/cdk-constructs.INetworking.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the networking resources are created. |
| <code><a href="#@condensetech/cdk-constructs.INetworking.property.bastionHost">bastionHost</a></code> | <code>aws-cdk-lib.aws_ec2.IConnectable</code> | Returns the bastion host instance of the VPC, if any. |
| <code><a href="#@condensetech/cdk-constructs.INetworking.property.privateSubnets">privateSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Returns the private subnets of the VPC (with access to internet through a NAT gateway). |

---

##### `hasPrivateSubnets`<sup>Required</sup> <a name="hasPrivateSubnets" id="@condensetech/cdk-constructs.INetworking.property.hasPrivateSubnets"></a>

```typescript
public readonly hasPrivateSubnets: boolean;
```

- *Type:* boolean

Returns if the VPC has private subnets (with access to internet through a NAT gateway).

---

##### `isolatedSubnets`<sup>Required</sup> <a name="isolatedSubnets" id="@condensetech/cdk-constructs.INetworking.property.isolatedSubnets"></a>

```typescript
public readonly isolatedSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

Returns the isolated subnets of the VPC (without access to internet).

---

##### `publicSubnets`<sup>Required</sup> <a name="publicSubnets" id="@condensetech/cdk-constructs.INetworking.property.publicSubnets"></a>

```typescript
public readonly publicSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

Returns the public subnets of the VPC.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@condensetech/cdk-constructs.INetworking.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the networking resources are created.

---

##### `bastionHost`<sup>Optional</sup> <a name="bastionHost" id="@condensetech/cdk-constructs.INetworking.property.bastionHost"></a>

```typescript
public readonly bastionHost: IConnectable;
```

- *Type:* aws-cdk-lib.aws_ec2.IConnectable

Returns the bastion host instance of the VPC, if any.

---

##### `privateSubnets`<sup>Optional</sup> <a name="privateSubnets" id="@condensetech/cdk-constructs.INetworking.property.privateSubnets"></a>

```typescript
public readonly privateSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection

Returns the private subnets of the VPC (with access to internet through a NAT gateway).

---

