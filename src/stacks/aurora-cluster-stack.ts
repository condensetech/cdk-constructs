import * as cdk from 'aws-cdk-lib';
import { aws_ec2 as ec2, aws_secretsmanager as sm, aws_rds as rds } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AuroraCluster, AuroraClusterProps } from '../constructs';
import { MonitoringFacade, MonitoringFacadeProps } from '../constructs/monitoring/monitoring-facade';
import { IDatabase } from '../interfaces';

/**
 * Properties for the AuroraClusterStack.
 */
export interface AuroraClusterStackProps extends AuroraClusterProps, cdk.StackProps {
  /**
   * The monitoring configuration to apply to this stack.
   * @default - No monitoring.
   */
  readonly monitoring?: MonitoringFacadeProps;
}

/**
 * The AuroraClusterStack creates an AuroraCluster construct and optionally defines the monitoring configuration.
 * It implements the IDatabase interface so that it can be used in other constructs and stacks without requiring to access to the underlying construct.
 */
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
