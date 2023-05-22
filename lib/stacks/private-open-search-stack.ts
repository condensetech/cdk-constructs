import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { PrivateOpenSearch, PrivateOpenSearchProps } from '../constructs/private-open-search';
import { IPrivateOpenSearch } from '../interfaces';

export type PrivateOpenSearchStackProps = PrivateOpenSearchProps & cdk.StackProps;

export class PrivateOpenSearchStack extends cdk.Stack implements IPrivateOpenSearch {
  private readonly construct: IPrivateOpenSearch;

  constructor(scope: Construct, id: string, props: PrivateOpenSearchStackProps) {
    super(scope, id, props);
    this.construct = new PrivateOpenSearch(this, 'PrivateOpenSearch', {
      ...props,
    });
  }

  get connections(): ec2.Connections {
    return this.construct.connections;
  }
  public domainEndpoint(): string {
    return this.construct.domainEndpoint();
  }
}
