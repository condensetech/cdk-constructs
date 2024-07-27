//go:build no_runtime_type_checking

package condensetechcdkconstructs

// Building without runtime type checking enabled, so all the below just return nil

func (a *jsiiProxy_AuroraCluster) validateFetchSecretParameters(scope constructs.Construct) error {
	return nil
}

func validateAuroraCluster_IsConstructParameters(x interface{}) error {
	return nil
}

func validateAuroraCluster_MinimumInstanceTypeParameters(engine awsrds.IClusterEngine) error {
	return nil
}

func validateNewAuroraClusterParameters(scope constructs.Construct, id *string, props *AuroraClusterProps) error {
	return nil
}

