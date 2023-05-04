import { Names } from 'aws-cdk-lib';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

export class Ref extends Construct {
  private readonly parameterName: string;

  constructor(scope: Construct, id: string, value: string) {
    super(scope, id);

    this.parameterName = `/cdk/${Names.uniqueId(this)}`;

    new StringParameter(this, `${Names.uniqueId(this)}Parameter`, {
      parameterName: this.parameterName,
      stringValue: value,
    });
  }

  public getValue(scope: Construct): string {
    scope.node.addDependency(this);
    return StringParameter.valueForStringParameter(scope, this.parameterName);
  }
}
