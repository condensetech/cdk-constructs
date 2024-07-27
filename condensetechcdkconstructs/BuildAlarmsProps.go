package condensetechcdkconstructs

import (
	"github.com/aws/constructs-go/constructs/v10"
)

// Experimental.
type BuildAlarmsProps struct {
	// Experimental.
	Alarms *[]*AlarmDefinitionProps `field:"required" json:"alarms" yaml:"alarms"`
	// Experimental.
	Node constructs.Construct `field:"required" json:"node" yaml:"node"`
	// Experimental.
	NodeIdentifier *string `field:"required" json:"nodeIdentifier" yaml:"nodeIdentifier"`
}

