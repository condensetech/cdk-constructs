import { Construct } from 'constructs';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';

function serializeExcludePaths(paths: Array<string | RegExp>): string {
  const serializedValues = paths.map((path) => {
    if (path instanceof RegExp) {
      return path.toString();
    }
    return `"${path}"`;
  });
  return `[${serializedValues.join(', ')}]`;
}

/**
 * Props for the NaiveBasicAuthCloudfrontFunction construct
 */
export interface NaiveBasicAuthCloudfrontFunctionProps {
  /**
   * The basic auth string to use for checking basic auth credentials
   * You can generate a basic auth string using the following command: echo -n "$username:$password" | base64
   */
  basicAuthString: string;
  /**
   * The paths to exclude from basic auth. Pass a string or regex to match the path. Strings are checked using === operator.
   * @default - no paths are excluded
   */
  excludePaths?: Array<string | RegExp>;
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
        var excludePaths = ${serializeExcludePaths(props.excludePaths ?? [])};

        var isPathExcluded = excludePaths.some(function (path) {
          if (path instanceof RegExp) {
            return path.test(request.uri);
          }
          return path === request.uri;
        }

        var isPathProtected = !isPathExcluded;
        var isBasicAuthInvalid = typeof headers.authorization === "undefined" || headers.authorization.value === authString;
        if (isPathProtected && isBasicAuthInvalid) {
          return {
            statusCode: 401,
            statusDescription: "Unauthorized",
            headers: { "www-authenticate": { value: "Basic" } }
          };
        }

        return request;
      }`,
      ),
    });
  }
}
