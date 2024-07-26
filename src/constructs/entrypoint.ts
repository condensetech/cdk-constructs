import { CertificateValidation, Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elb from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as r53 from 'aws-cdk-lib/aws-route53';
import { LoadBalancerTarget } from 'aws-cdk-lib/aws-route53-targets';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { IEntrypoint, INetworking } from '../interfaces';

/**
 * Properties for the Entrypoint construct.
 */
export interface EntrypointProps {
  /**
   * The networking configuration for the entrypoint.
   */
  readonly networking: INetworking;

  /**
   * The name of the entrypoint. This value is used as the name of the underlying Application Load Balancer (ALB)
   * and as the prefix for the name of the associated security group.
   * @default - No name is specified.
   */
  readonly entrypointName?: string;

  /**
   * The Route 53 hosted zone attributes for the domain name.
   */
  readonly hostedZoneProps: r53.HostedZoneAttributes;

  /**
   * The domain name to which the entrypoint is associated.
   */
  readonly domainName: string;

  /**
   * Indicates whether the HTTPS certificate should be bound to all subdomains.
   * @default true
   */
  readonly wildcardCertificate?: boolean;

  /**
   * The name of the security group for the entrypoint.
   * @default `${entrypointName}-sg`
   * @deprecated Use `securityGroupName` instead.
   */
  readonly entrypointSecurityGroupName?: string;

  /**
   * The name of the security group for the entrypoint.
   * @default `${entrypointName}-sg` if `entrypointName` is specified, otherwise no name is specified.
   */
  readonly securityGroupName?: string;

  /**
   * The S3 bucket to store the logs of the ALB. Setting this will enable the access logs for the ALB.
   * @default - Logging is disabled.
   */
  readonly logsBucket?: s3.IBucket;
}

/**
 * The Entrypoint construct creates an Application Load Balancer (ALB) that serves as the centralized entry point for all applications.
 * This ALB is shared across multiple applications, primarily to optimize infrastructure costs by reducing the need for multiple load balancers.
 * It implements the IEntrypoint interface so that it can be used in other constructs and stacks without requiring to access to the underlying construct.
 *
 * It creates an HTTPS certificate, bound to the domain name and all subdomains (unless wildcardCertificate is set to false).
 * It creates an ALB with:
 * - an HTTP listener that redirects all traffic to HTTPS.
 * - an HTTPS listener that returns a 403 Forbidden response by default.
 * - a custom security group. This allows to expose the security group as a property of the entrypoint construct, making it easier to reference it in other constructs.
 * Finally, it creates the Route 53 A and AAAA record that point to the ALB.
 */
export class Entrypoint extends Construct implements IEntrypoint {
  readonly listener: elb.IApplicationListener;
  readonly domainName: string;
  readonly alb: elb.IApplicationLoadBalancer;
  readonly securityGroup: ec2.ISecurityGroup;

  constructor(scope: Construct, id: string, props: EntrypointProps) {
    super(scope, id);

    const hostedZone = r53.HostedZone.fromHostedZoneAttributes(this, 'HostedZone', props.hostedZoneProps);
    this.domainName = props.domainName;

    const subjectAlternativeNames = props.wildcardCertificate === false ? undefined : [`*.${hostedZone.zoneName}`];

    const albCertificate = new Certificate(this, 'Certificate', {
      domainName: this.domainName,
      subjectAlternativeNames,
      validation: CertificateValidation.fromDns(hostedZone),
    });

    this.securityGroup = new ec2.SecurityGroup(this, 'SecurityGroup', {
      vpc: props.networking.vpc,
      allowAllOutbound: true,
      securityGroupName:
        props.securityGroupName ??
        props.entrypointSecurityGroupName ??
        (props.entrypointName ? `${props.entrypointName}-sg` : undefined),
    });

    const alb = new elb.ApplicationLoadBalancer(this, 'Alb', {
      vpc: props.networking.vpc,
      internetFacing: true,
      securityGroup: this.securityGroup,
      loadBalancerName: props.entrypointName,
    });
    if (props.logsBucket) {
      alb.logAccessLogs(props.logsBucket);
    }
    this.alb = alb;

    this.alb.addListener('HTTP', {
      protocol: elb.ApplicationProtocol.HTTP,
      defaultAction: elb.ListenerAction.redirect({
        port: '443',
        protocol: 'HTTPS',
      }),
    });

    const httpsListner = this.alb.addListener('HTTPS', {
      protocol: elb.ApplicationProtocol.HTTPS,
      certificates: [albCertificate],
      defaultAction: elb.ListenerAction.fixedResponse(403, {
        messageBody: 'Forbidden',
      }),
    });

    new r53.ARecord(this, 'AlbRecord', {
      target: r53.RecordTarget.fromAlias(new LoadBalancerTarget(this.alb)),
      zone: hostedZone,
      recordName: this.domainName.replace(`.${props.hostedZoneProps.zoneName}`, ''),
    });
    new r53.AaaaRecord(this, 'AlbRecordIPv6', {
      target: r53.RecordTarget.fromAlias(new LoadBalancerTarget(this.alb)),
      zone: hostedZone,
      recordName: this.domainName.replace(`.${props.hostedZoneProps.zoneName}`, ''),
    });

    this.listener = httpsListner;
  }

  referenceListener(scope: Construct, id: string): elb.IApplicationListener {
    return elb.ApplicationListener.fromApplicationListenerAttributes(scope, id, {
      listenerArn: this.listener.listenerArn,
      securityGroup: ec2.SecurityGroup.fromSecurityGroupId(scope, `${id}-SG`, this.securityGroup.securityGroupId),
    });
  }
}
