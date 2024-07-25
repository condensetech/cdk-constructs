import * as cdk from 'aws-cdk-lib';
import {
  aws_sns as sns,
  aws_sns_subscriptions as snsSubscriptions,
  aws_lambda_nodejs as lambdaNode,
  aws_lambda_event_sources as lambdaEventSources,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface CloudwatchAlarmsDiscordConfig {
  readonly username?: string;
  readonly webhook: string;
}

export interface CloudwatchAlarmsTopicStackProps extends cdk.StackProps {
  readonly discord?: CloudwatchAlarmsDiscordConfig;
  readonly jiraSubscriptionWebhook?: string;
  readonly topicName?: string;
}

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
