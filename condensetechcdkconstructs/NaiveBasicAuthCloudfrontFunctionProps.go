package condensetechcdkconstructs


// Props for the NaiveBasicAuthCloudfrontFunction construct.
// Experimental.
type NaiveBasicAuthCloudfrontFunctionProps struct {
	// The basic auth string to use for checking basic auth credentials You can generate a basic auth string using the following command: echo -n "$username:$password" | base64.
	// Experimental.
	BasicAuthString *string `field:"required" json:"basicAuthString" yaml:"basicAuthString"`
	// The paths to exclude from basic auth.
	//
	// Pass a string or regex to match the path. Strings are checked using === operator.
	// Default: - no paths are excluded.
	//
	// Experimental.
	ExcludePaths *[]*NaiveBasicAuthCloudfrontFunctionExcludedPath `field:"optional" json:"excludePaths" yaml:"excludePaths"`
}

