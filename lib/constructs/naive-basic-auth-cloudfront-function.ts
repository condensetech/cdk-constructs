import { Construct } from 'constructs';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';

export interface NaiveBasicAuthCloudfrontFunctionProps {
  basicAuthString: string;
}

export class NaiveBasicAuthCloudfrontFunction extends cloudfront.Function {
  constructor(scope: Construct, id: string, props: NaiveBasicAuthCloudfrontFunctionProps) {
    super(scope, id, {
      code: cloudfront.FunctionCode.fromInline(
        // js
        `function handler(event) {
        var request = event.request;
        var headers = request.headers;

        var authString = "Basic ${props.basicAuthString}";

        if (
          typeof headers.authorization === "undefined" ||
          headers.authorization.value !== authString
        ) {
          return {
            statusCode: 401,
            statusDescription: "Unauthorized",
            headers: { "www-authenticate": { value: "Basic" } }
          };
        }

        return request;
      }`
      ),
    });
  }
}
