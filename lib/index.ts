// import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface CdkLibProps {
  // Define construct properties here
}

export class CdkLib extends Construct {

  constructor(scope: Construct, id: string, props: CdkLibProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkLibQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
