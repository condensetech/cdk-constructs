import * as cdk from 'aws-cdk-lib';
import { Capture, Template } from 'aws-cdk-lib/assertions';
import { NaiveBasicAuthCloudfrontFunction } from '../../lib/constructs/naive-basic-auth-cloudfront-function';

describe('Constructs/NaiveBasicAuthCloudfrontFunctrion', () => {
  it('Serializes excludePaths as [] when not provided', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new NaiveBasicAuthCloudfrontFunction(stack, 'TestFunction', {
      basicAuthString: 'test',
    });
    const template = Template.fromStack(stack);

    const functionCodeCapture = new Capture();
    template.hasResourceProperties('AWS::CloudFront::Function', {
      FunctionCode: functionCodeCapture,
    });
    expect(functionCodeCapture.asString()).toContain('var excludePaths = []');
  });

  it('Properly serializes excludePaths string items', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new NaiveBasicAuthCloudfrontFunction(stack, 'TestFunction', {
      basicAuthString: 'test',
      excludePaths: [{ path: '/test' }, { path: '/test2' }],
    });
    const template = Template.fromStack(stack);

    const functionCodeCapture = new Capture();
    template.hasResourceProperties('AWS::CloudFront::Function', {
      FunctionCode: functionCodeCapture,
    });
    expect(functionCodeCapture.asString()).toContain('var excludePaths = ["/test", "/test2"];');
  });

  it('Properly serializes excludePaths RegExp items', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');
    new NaiveBasicAuthCloudfrontFunction(stack, 'TestFunction', {
      basicAuthString: 'test',
      excludePaths: [
        { path: '/test/', matchMode: 'regex' },
        { path: '/^\\/\\.well-known\\/acme-challenge\\//i', matchMode: 'regex' },
      ],
    });
    const template = Template.fromStack(stack);

    const functionCodeCapture = new Capture();
    template.hasResourceProperties('AWS::CloudFront::Function', {
      FunctionCode: functionCodeCapture,
    });
    expect(functionCodeCapture.asString()).toContain(
      'var excludePaths = [/test/, /^\\/\\.well-known\\/acme-challenge\\//i];',
    );
  });
});
