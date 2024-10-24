import * as cdk from 'aws-cdk-lib';
import {
  aws_certificatemanager as acm,
  aws_ec2 as ec2,
  aws_elasticloadbalancingv2 as elbv2,
  aws_route53 as r53,
} from 'aws-cdk-lib';
import { LoadBalancerTarget } from 'aws-cdk-lib/aws-route53-targets';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import {
  ApplicationListenerPriorityAllocator,
  ApplicationListenerPriorityAllocatorConfig,
} from './application-listener-priority-allocator';
import {
  AllocateApplicationListenerRuleProps,
  IApplicationListenerPriorityAllocator,
  IEntrypoint,
  INetworking,
} from '../interfaces';

export interface EntrypointCertificateProps {
  /**
   * The ARN of the existing certificate to use.
   * @default - A new certificate is created through ACM.
   */
  readonly certificateArn?: string;

  /**
   * The certificate to use.
   * @default - A new certificate is created through ACM
   */
  readonly certificate?: acm.ICertificate;

  /**
   * Indicates whether the HTTPS certificate should be bound to all subdomains.
   * @default true
   */
  readonly wildcardCertificate?: boolean;
}

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
  readonly hostedZoneProps?: r53.HostedZoneAttributes;

  /**
   * The domain name to which the entrypoint is associated.
   */
  readonly domainName: string;

  /**
   * Certificate properties for the entrypoint.
   * @default - A new certificate is created through ACM, bound to domainName, *.domainName.
   * @deprecated Use `certificates` instead.
   */
  readonly certificate?: EntrypointCertificateProps;

  /**
   * Certificate properties for the entrypoint.
   * @default - A new certificate is created through ACM, bound to domainName, *.domainName.
   */
  readonly certificates?: EntrypointCertificateProps[];

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

  /**
   * Customize the priority allocator for the entrypoint.
   */
  readonly priorityAllocator?: ApplicationListenerPriorityAllocatorConfig;
}

abstract class EntrypointBase extends Construct implements IEntrypoint {
  abstract readonly listener: elbv2.IApplicationListener;
  abstract readonly securityGroup: ec2.ISecurityGroup;
  abstract readonly alb: cdk.aws_elasticloadbalancingv2.IApplicationLoadBalancer;
  abstract readonly priorityAllocator: IApplicationListenerPriorityAllocator;
  abstract readonly domainName: string;

  referenceListener(scope: Construct, id: string): elbv2.IApplicationListener {
    return elbv2.ApplicationListener.fromApplicationListenerAttributes(scope, id, {
      listenerArn: this.listener.listenerArn,
      securityGroup: ec2.SecurityGroup.fromSecurityGroupId(scope, `${id}-SG`, this.securityGroup.securityGroupId),
    });
  }

  allocateListenerRule(
    scope: Construct,
    id: string,
    props: AllocateApplicationListenerRuleProps,
  ): elbv2.ApplicationListenerRule {
    const listener = this.referenceListener(scope, `${id}-Listener`);
    const priority = this.priorityAllocator.allocatePriority(scope, `${id}-Priority`, {
      priority: props.priority,
    });
    return new elbv2.ApplicationListenerRule(scope, id, {
      ...props,
      listener,
      priority,
    });
  }
}

export interface EntrypointFromAttributes {
  /**
   * The load balancer custom domain name.
   * @default - No domain name is specified, and the load balancer dns name will be used.
   */
  readonly domainName?: string;

  /**
   * The load balancer ARN.
   */
  readonly loadBalancerArn: string;

  /**
   * The security group ID of the load balancer.
   */
  readonly securityGroupId: string;

  /**
   * ARN of the load balancer HTTPS listener.
   */
  readonly listenerArn: string;

  /**
   * The Priority Allocator service token to use for referencing the priority allocator.
   */
  readonly priorityAllocatorServiceToken?: string;

  /**
   * The entrypoint name to use for referencing the priority allocator.
   */
  readonly entrypointName?: string;
}

export interface EntrypointFromLookupProps {
  /**
   * The load balancer custom domain name.
   * @default - No domain name is specified, and the load balancer dns name will be used.
   */
  readonly domainName?: string;

  /**
   * The entrypoint name to lookup.
   */
  readonly entrypointName: string;

  /**
   * The VPC lookup options to find the VPC where the entrypoint is located. Required if vpc is not provided.
   */
  readonly vpcLookup?: ec2.VpcLookupOptions;

  /**
   * The VPC where the entrypoint is located. Required if vpcLookup is not provided.
   */
  readonly vpc?: ec2.IVpc;
}

/**
 * The Entrypoint construct creates an Application Load Balancer (ALB) that serves as the centralized entry point for all applications.
 * This ALB is shared across multiple applications, primarily to optimize infrastructure costs by reducing the need for multiple load balancers.
 * It implements the IEntrypoint interface so that it can be used in other constructs and stacks without requiring to access to the underlying construct.
 *
 * It creates an ALB with:
 * - an HTTP listener that redirects all traffic to HTTPS.
 * - an HTTPS listener that returns a 403 Forbidden response by default.
 * - a custom security group. This allows to expose the security group as a property of the entrypoint construct, making it easier to reference it in other constructs.
 * Finally, it creates the Route 53 A and AAAA record that point to the ALB.
 *
 * When hostedZoneProps is provided, by default this construct creates an HTTPS certificate, bound to the domain name and all subdomains (unless wildcardCertificate is set to false).
 * You can also provide an existing certificate ARN through certificate.certificateArn.
 *
 * When an `entrypointName` is provided, this is used as the name of the ALB and as the prefix for the security group.
 * It is also used to add an additional "Name" tag to the load balancer.
 * This helps to use [ApplicationLoadBalancer#lookup](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer.html#static-fromwbrlookupscope-id-options) to find the load balancer by name.
 */
export class Entrypoint extends EntrypointBase {
  static fromLookup(scope: Construct, id: string, props: EntrypointFromLookupProps): IEntrypoint {
    class Import extends EntrypointBase {
      readonly alb: elbv2.IApplicationLoadBalancer;
      readonly listener: elbv2.IApplicationListener;
      readonly securityGroup: ec2.ISecurityGroup;
      readonly priorityAllocator: IApplicationListenerPriorityAllocator;
      readonly domainName: string;

      constructor() {
        super(scope, id);
        if (!props.vpc && !props.vpcLookup) {
          throw new Error('Either vpc or vpcLookup must be provided.');
        }
        const vpc = props.vpc || ec2.Vpc.fromLookup(this, 'Vpc', props.vpcLookup!);
        this.securityGroup = ec2.SecurityGroup.fromLookupByName(
          this,
          'SecurityGroup',
          `${props.entrypointName}-sg`,
          vpc,
        );
        this.alb = elbv2.ApplicationLoadBalancer.fromLookup(this, 'Alb', {
          loadBalancerTags: { Name: props.entrypointName },
        });
        this.domainName = props.domainName ?? this.alb.loadBalancerDnsName;
        this.listener = elbv2.ApplicationListener.fromLookup(this, 'Listener', {
          loadBalancerArn: this.alb.loadBalancerArn,
          listenerProtocol: elbv2.ApplicationProtocol.HTTPS,
        });
        this.priorityAllocator = ApplicationListenerPriorityAllocator.fromPriorityAllocatorName(
          this,
          'PriorityAllocator',
          props.entrypointName,
        );
      }
    }
    return new Import();
  }

  static fromAttributes(scope: Construct, id: string, props: EntrypointFromAttributes): IEntrypoint {
    if (!props.priorityAllocatorServiceToken && !props.entrypointName) {
      throw new Error('Either entrypointName or priorityAllocatorServiceToken must be provided.');
    }
    class Import extends EntrypointBase {
      readonly alb: elbv2.IApplicationLoadBalancer;
      readonly listener: elbv2.IApplicationListener;
      readonly securityGroup: ec2.ISecurityGroup;
      readonly priorityAllocator: IApplicationListenerPriorityAllocator;
      readonly domainName: string;

      constructor() {
        super(scope, id);
        this.securityGroup = ec2.SecurityGroup.fromSecurityGroupId(this, 'SecurityGroup', props.securityGroupId);
        this.alb = elbv2.ApplicationLoadBalancer.fromApplicationLoadBalancerAttributes(this, 'Alb', {
          loadBalancerArn: props.loadBalancerArn,
          securityGroupId: props.securityGroupId,
        });
        this.domainName = props.domainName ?? this.alb.loadBalancerDnsName;
        this.listener = elbv2.ApplicationListener.fromApplicationListenerAttributes(this, 'Listener', {
          listenerArn: props.listenerArn,
          securityGroup: this.securityGroup,
        });
        this.priorityAllocator = props.entrypointName
          ? ApplicationListenerPriorityAllocator.fromPriorityAllocatorName(
              this,
              'PriorityAllocator',
              props.entrypointName,
            )
          : ApplicationListenerPriorityAllocator.fromServiceToken(
              this,
              'PriorityAllocator',
              props.priorityAllocatorServiceToken!,
            );
      }
    }
    return new Import();
  }

  readonly listener: elbv2.IApplicationListener;
  readonly domainName: string;
  readonly alb: elbv2.IApplicationLoadBalancer;
  readonly securityGroup: ec2.ISecurityGroup;
  private readonly hostedZone?: r53.IHostedZone;
  readonly priorityAllocator: IApplicationListenerPriorityAllocator;

  constructor(scope: Construct, id: string, props: EntrypointProps) {
    super(scope, id);

    this.hostedZone = props.hostedZoneProps
      ? r53.HostedZone.fromHostedZoneAttributes(this, 'HostedZone', props.hostedZoneProps)
      : undefined;
    this.domainName = props.domainName;

    const albCertificates = (
      props.certificates || ([props.certificate ?? {}] as Array<EntrypointCertificateProps>)
    ).map((cert) => this.createCertificate(cert));

    this.securityGroup = new ec2.SecurityGroup(this, 'SecurityGroup', {
      vpc: props.networking.vpc,
      allowAllOutbound: true,
      securityGroupName:
        props.securityGroupName ??
        props.entrypointSecurityGroupName ??
        (props.entrypointName ? `${props.entrypointName}-sg` : undefined),
    });

    const alb = new elbv2.ApplicationLoadBalancer(this, 'Alb', {
      vpc: props.networking.vpc,
      internetFacing: true,
      securityGroup: this.securityGroup,
      loadBalancerName: props.entrypointName,
    });
    if (props.entrypointName) {
      cdk.Tags.of(alb).add('Name', props.entrypointName);
    }
    if (props.logsBucket) {
      alb.logAccessLogs(props.logsBucket);
    }
    this.alb = alb;

    this.alb.addListener('HTTP', {
      protocol: elbv2.ApplicationProtocol.HTTP,
      defaultAction: elbv2.ListenerAction.redirect({
        port: '443',
        protocol: 'HTTPS',
      }),
    });

    this.listener = this.alb.addListener('HTTPS', {
      protocol: elbv2.ApplicationProtocol.HTTPS,
      certificates: albCertificates,
      defaultAction: elbv2.ListenerAction.fixedResponse(403, {
        messageBody: 'Forbidden',
      }),
    });

    if (this.hostedZone) {
      new r53.ARecord(this, 'AlbRecord', {
        target: r53.RecordTarget.fromAlias(new LoadBalancerTarget(this.alb)),
        zone: this.hostedZone,
        recordName: this.domainName.replace(`.${this.hostedZone.zoneName}`, ''),
      });
      new r53.AaaaRecord(this, 'AlbRecordIPv6', {
        target: r53.RecordTarget.fromAlias(new LoadBalancerTarget(this.alb)),
        zone: this.hostedZone,
        recordName: this.domainName.replace(`.${this.hostedZone.zoneName}`, ''),
      });
    }

    this.priorityAllocator = new ApplicationListenerPriorityAllocator(this, 'PriorityAllocator', {
      listener: this.listener,
      priorityAllocatorName: props.entrypointName,
      ...props.priorityAllocator,
    });
  }

  // FIXME: This implementation allows the caller to build an instance which will issue multiple certificates for the same hosted zone.
  private createCertificate(props: EntrypointCertificateProps): acm.ICertificate {
    if (props.certificate) {
      if (props.certificateArn) {
        cdk.Annotations.of(this).addError(
          `Both certificate (${props.certificate}) and certificateArn (${props.certificateArn}) are provided. Choose one.`,
        );
      }
      if (props.wildcardCertificate) {
        cdk.Annotations.of(this).addError(
          `wildcardCertificate cannot be set when a certificate (${props.certificate}) is provided.`,
        );
      }
      return props.certificate;
    }
    if (props.certificateArn) {
      if (props.wildcardCertificate) {
        cdk.Annotations.of(this).addError(
          `wildcardCertificate cannot be set when a certificateArn (${props.certificateArn}) is provided.`,
        );
      }
      return acm.Certificate.fromCertificateArn(this, 'Certificate', props.certificateArn);
    }
    if (this.hostedZone) {
      const subjectAlternativeNames =
        props.wildcardCertificate === false ? undefined : [`*.${this.hostedZone.zoneName}`];
      return new acm.Certificate(this, 'Certificate', {
        domainName: this.domainName,
        subjectAlternativeNames,
        validation: acm.CertificateValidation.fromDns(this.hostedZone),
      });
    }
    throw new Error('Hosted Zone Props are required when certificate must be automatically provisioned.');
  }
}
