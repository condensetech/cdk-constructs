package condensetechcdkconstructs


// Discord configuration for the Cloudwatch Alarms Topic.
// Experimental.
type CloudwatchAlarmsDiscordConfig struct {
	// Experimental.
	Webhook *string `field:"required" json:"webhook" yaml:"webhook"`
	// Experimental.
	Username *string `field:"optional" json:"username" yaml:"username"`
}

