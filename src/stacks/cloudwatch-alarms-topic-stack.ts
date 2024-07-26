import * as cdk from 'aws-cdk-lib';
import {
  aws_sns as sns,
  aws_sns_subscriptions as snsSubscriptions,
  aws_lambda_nodejs as lambdaNode,
  aws_lambda_event_sources as lambdaEventSources,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * Discord configuration for the Cloudwatch Alarms Topic.
 */
export interface CloudwatchAlarmsDiscordConfig {
  readonly username?: string;
  readonly webhook: string;
}

/**
 * Properties for the CloudwatchAlarmsTopicStack.
 */
export interface CloudwatchAlarmsTopicStackProps extends cdk.StackProps {
  /**
   * Discord webhook configuration. If provided, the alarms will be sent to the Discord channel.
   */
  readonly discord?: CloudwatchAlarmsDiscordConfig;

  /**
   * Jira subscription webhook. If provided, the alarms will be sent to Jira.
   * @deprecated Use `urlSubscriptionWebhooks` instead.
   */
  readonly jiraSubscriptionWebhook?: string;

  /**
   * Subscription webhooks. If provided, an HTTP request is made against the provided url with alarm details.
   */
  readonly urlSubscriptionWebhooks?: string[];

  /**
   * The name of the alarms topic. It is recommended to set a name.
   */
  readonly topicName?: string;
}

/**
 * The CloudwatchAlarmsTopicStack creates an SNS topic for Cloudwatch alarms.
 *
 * The stack  and optionally sends the alarms to Discord or Jira.
 */
export class CloudwatchAlarmsTopicStack extends cdk.Stack {
  readonly alarmsTopic: sns.Topic;

  constructor(scope: Construct, id: string, props: CloudwatchAlarmsTopicStackProps) {
    super(scope, id, props);

    if (!props?.discord && !props?.jiraSubscriptionWebhook) {
      throw new Error('At least one of discord or jiraSubscriptionWebhook must be provided');
    }

    const topic = (this.alarmsTopic = new sns.Topic(this, 'AlarmsTopic', {
      topicName: props.topicName,
      displayName: 'Cloudwatch Alarms Topic',
    }));
    if (props.jiraSubscriptionWebhook) {
      topic.addSubscription(new snsSubscriptions.UrlSubscription(props.jiraSubscriptionWebhook));
    }
    if (props.urlSubscriptionWebhooks) {
      props.urlSubscriptionWebhooks.forEach((url) => topic.addSubscription(new snsSubscriptions.UrlSubscription(url)));
    }

    if (props.discord) {
      const fn = new lambdaNode.NodejsFunction(this, 'AlarmDispatcher', {
        environment: {
          ...(props.discord.username && { DISCORD_USERNAME: props.discord.username }),
          DISCORD_WEBHOOK: props.discord.webhook,
        },
        timeout: cdk.Duration.seconds(10),
      });
      fn.addEventSource(new lambdaEventSources.SnsEventSource(topic));
    }
  }
}
