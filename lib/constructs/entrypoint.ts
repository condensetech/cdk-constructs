import { CertificateValidation, Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elb from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { LoadBalancerTarget } from 'aws-cdk-lib/aws-route53-targets';
import { Construct } from 'constructs';
import { HostedZoneAttributes, IEntrypoint } from '../interfaces';

export interface EntrypointProps {
  vpc: ec2.IVpc;
  hostedZoneProps: HostedZoneAttributes;
  domainName: string;
  wildcardCertificate?: boolean;
}

export class Entrypoint extends Construct implements IEntrypoint {
  readonly listener: elb.IApplicationListener;
  readonly domainName: string;
  readonly alb: elb.IApplicationLoadBalancer;
  readonly securityGroup: ec2.ISecurityGroup;

  constructor(scope: Construct, id: string, props: EntrypointProps) {
    super(scope, id);

    const hostedZone = HostedZone.fromHostedZoneAttributes(
      this,
      'HostedZone',
      props.hostedZoneProps,
    );
    this.domainName = props.domainName;

    const subjectAlternativeNames = props.wildcardCertificate
      ? [`*.${hostedZone.zoneName}`]
      : undefined;

    const albCertificate = new Certificate(this, 'Certificate', {
      domainName: this.domainName,
      subjectAlternativeNames,
      validation: CertificateValidation.fromDns(hostedZone),
    });

    this.securityGroup = new ec2.SecurityGroup(this, 'SecurityGroup', {
      vpc: props.vpc,
      allowAllOutbound: true,
    });

    this.alb = new elb.ApplicationLoadBalancer(this, 'Alb', {
      vpc: props.vpc,
      internetFacing: true,
      securityGroup: this.securityGroup,
    });

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

    new ARecord(this, 'AlbRecord', {
      target: RecordTarget.fromAlias(new LoadBalancerTarget(this.alb)),
      zone: hostedZone,
      recordName: this.domainName.replace(`.${props.hostedZoneProps.zoneName}`, ''),
    });

    this.listener = httpsListner;
  }

  referenceListener(scope: Construct, id: string): elb.IApplicationListener {
    return elb.ApplicationListener.fromApplicationListenerAttributes(scope, id, {
      listenerArn: this.listener.listenerArn,
      securityGroup: ec2.SecurityGroup.fromSecurityGroupId(
        scope,
        `${id}-SG`,
        this.securityGroup.securityGroupId,
      ),
    });
  }
}
