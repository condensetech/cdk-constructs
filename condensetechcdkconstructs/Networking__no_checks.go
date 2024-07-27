//go:build no_runtime_type_checking

package condensetechcdkconstructs

// Building without runtime type checking enabled, so all the below just return nil

func validateNetworking_IsConstructParameters(x interface{}) error {
	return nil
}

func validateNewNetworkingParameters(scope constructs.Construct, id *string, props *NetworkingProps) error {
	return nil
}

