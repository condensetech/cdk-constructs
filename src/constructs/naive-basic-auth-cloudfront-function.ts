import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import { Construct } from 'constructs';

function serializeExcludePaths(paths: Array<NaiveBasicAuthCloudfrontFunctionExcludedPath>): string {
  const serializedValues = paths.map(({ path, matchMode }) => {
    if (matchMode === 'regex') {
      if (!path.startsWith('/')) {
        return `/${path}/`;
      }
      return path.toString();
    }
    return `"${path}"`;
  });
  return `[${serializedValues.join(', ')}]`;
}

/**
 * Exclusion path for the NaiveBasicAuthCloudfrontFunction
 */
export interface NaiveBasicAuthCloudfrontFunctionExcludedPath {
  /**
   * The path to exclude from basic auth.
   * @example
   * "/admin"
   * "/\/admin\\/.+/"
   */
  readonly path: string;

  /**
   * The match mode to use for the path:
   * - 'exact' for exact string match
   * - 'regex' for regex match
   * @default 'exact'
   */
  readonly matchMode?: 'exact' | 'regex';
}

/**
 * Props for the NaiveBasicAuthCloudfrontFunction construct
 */
export interface NaiveBasicAuthCloudfrontFunctionProps {
  /**
   * The basic auth string to use for checking basic auth credentials
   * You can generate a basic auth string using the following command: echo -n "$username:$password" | base64
   */
  readonly basicAuthString: string;
  /**
   * The paths to exclude from basic auth. Pass a string or regex to match the path. Strings are checked using === operator.
   * @default - no paths are excluded
   */
  readonly excludePaths?: Array<NaiveBasicAuthCloudfrontFunctionExcludedPath>;
}

/**
 * A CloudFront function that implements a naive basic auth mechanism.
 * The function is naive because the basic auth string isn't treated as a secret and it's hardcoded in the function code.
 *
 * This function is useful for simple use cases where you need to protect a CloudFront distribution with basic auth. A typical use case is to ensure that a staging environment isn't indexed by crawlers (just in case robots.txt is totally ignored).
 */
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
        });

        var isPathProtected = !isPathExcluded;
        var isBasicAuthInvalid = typeof headers.authorization === "undefined" || headers.authorization.value !== authString;
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
