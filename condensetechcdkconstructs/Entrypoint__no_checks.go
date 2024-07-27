//go:build no_runtime_type_checking

package condensetechcdkconstructs

// Building without runtime type checking enabled, so all the below just return nil

func (e *jsiiProxy_Entrypoint) validateReferenceListenerParameters(scope constructs.Construct, id *string) error {
	return nil
}

func validateEntrypoint_IsConstructParameters(x interface{}) error {
	return nil
}

func validateNewEntrypointParameters(scope constructs.Construct, id *string, props *EntrypointProps) error {
	return nil
}

