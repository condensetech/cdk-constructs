//go:build no_runtime_type_checking

package condensetechcdkconstructs

// Building without runtime type checking enabled, so all the below just return nil

func (d *jsiiProxy_DatabaseInstance) validateFetchSecretParameters(scope constructs.Construct) error {
	return nil
}

func validateDatabaseInstance_IsConstructParameters(x interface{}) error {
	return nil
}

func validateNewDatabaseInstanceParameters(scope constructs.Construct, id *string, props *DatabaseInstanceProps) error {
	return nil
}

