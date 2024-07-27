package condensetechcdkconstructs


// Exclusion path for the NaiveBasicAuthCloudfrontFunction.
// Experimental.
type NaiveBasicAuthCloudfrontFunctionExcludedPath struct {
	// The path to exclude from basic auth.
	//
	// Example:
	//   "/admin"
	//   "/\/admin\\/.+/"
	//
	// Experimental.
	Path *string `field:"required" json:"path" yaml:"path"`
	// The match mode to use for the path: - 'exact' for exact string match - 'regex' for regex match.
	// Default: 'exact'.
	//
	// Experimental.
	MatchMode *string `field:"optional" json:"matchMode" yaml:"matchMode"`
}

