import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { aws_ec2 as ec2, aws_secretsmanager as sm, aws_rds as rds } from 'aws-cdk-lib';
import { AuroraCluster, AuroraClusterProps } from '../constructs';
import { IDatabase } from '../interfaces';
import {
  MonitoringFacade,
  MonitoringFacadeProps,
} from '../constructs/monitoring/monitoring-facade';

export interface AuroraClusterStackProps extends AuroraClusterProps, cdk.StackProps {
  monitoring?: MonitoringFacadeProps;
}

export class AuroraClusterStack extends cdk.Stack implements IDatabase {
  private readonly construct: IDatabase;

  constructor(scope: Construct, id: string, props: AuroraClusterStackProps) {
    super(scope, id, props);
    this.construct = new AuroraCluster(this, 'DatabaseCluster', props);
    if (props.monitoring) {
      new MonitoringFacade(this, props.monitoring);
    }
  }

  get endpoint(): rds.Endpoint {
    return this.construct.endpoint;
  }

  get connections(): ec2.Connections {
    return this.construct.connections;
  }

  public fetchSecret(scope: Construct, id?: string | undefined): sm.ISecret {
    return this.construct.fetchSecret(scope, id);
  }
}
