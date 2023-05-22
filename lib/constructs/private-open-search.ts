import { RemovalPolicy } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as os from 'aws-cdk-lib/aws-opensearchservice';
import { Construct } from 'constructs';
import { IPrivateOpenSearch } from '../interfaces';

export interface PrivateOpenSearchProps {
  domainProps: Partial<os.DomainProps> & {
    vpc: ec2.IVpc;
    capacity: os.CapacityConfig;
    vpcSubnets: ec2.SubnetSelection[];
  };
}

export class PrivateOpenSearch extends Construct implements IPrivateOpenSearch {
  public readonly domain: os.Domain;

  constructor(scope: Construct, id: string, props: PrivateOpenSearchProps) {
    super(scope, id);

    this.domain = new os.Domain(this, 'Domain', {
      version: os.EngineVersion.OPENSEARCH_2_5,
      enableVersionUpgrade: true,
      encryptionAtRest: { enabled: true },
      removalPolicy: RemovalPolicy.DESTROY,
      ...props.domainProps,
    });
  }

  get connections(): ec2.Connections {
    return this.domain.connections;
  }

  public domainEndpoint(): string {
    return this.domain.domainEndpoint;
  }
}
