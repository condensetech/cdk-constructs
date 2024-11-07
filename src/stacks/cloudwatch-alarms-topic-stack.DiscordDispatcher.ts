/* global fetch */
/// <reference lib="dom" />

interface AlarmPayload {
  AlarmName: string;
  AlarmDescription: string;
  AWSAccountId: string;
  AlarmConfigurationUpdatedTimestamp: string;
  NewStateValue: string;
  NewStateReason: string;
  StateChangeTime: string;
  Region: string;
  AlarmArn: string;
  OldStateValue: string;
  OKActions: string[];
  AlarmActions: string[];
  InsufficientDataActions: string[];
  Trigger: {
    MetricName: string;
    Namespace: string;
    StatisticType: string;
    Statistic: string;
    Unit: string;
    Dimensions: { value: string; name: string }[];
    Period: number;
    EvaluationPeriods: number;
    ComparisonOperator: string;
    Threshold: number;
    TreatMissingData: string;
    EvaluateLowSampleCountPercentile: string;
  };
}

interface SnsNotification {
  Type: 'Notification';
  MessageId: string;
  TopicArn: string;
  Subject: string;
  Message: string;
  Timestamp: string;
  SignatureVersion: '1';
  Signature: string;
  SigningCertUrl: string;
  UnsubscribeUrl: string;
  MessageAttributes: Record<string, any>;
}

interface SnsRecord {
  Eventsource: 'aws:sns';
  EventVersion: '1.0';
  EventSubscriptionArn: string;
  Sns: SnsNotification;
}

interface SnsMessage {
  Records: SnsRecord[];
}

/**
 * {
    "Records": [
        {
            "EventSource": "aws:sns",
            "EventVersion": "1.0",
            "EventSubscriptionArn": "arn:aws:sns:eu-south-1:975050211138:condense-alarms-topic:6ad71be8-03c9-44a2-8222-394f775cd4d6",
            "Sns": {
                "Type": "Notification",
                "MessageId": "e1a5d850-56a8-5cb9-873c-87524725ca49",
                "TopicArn": "arn:aws:sns:eu-south-1:975050211138:condense-alarms-topic",
                "Subject": "ALARM: \"SharedInfra-Alpha-Database-DatabaseInstanceObservabilityHighDatabaseConnec...\" in EU (Milan)",
                "Message": "{\"AlarmName\":\"SharedInfra-Alpha-Database-DatabaseInstanceObservabilityHighDatabaseConnectionsAlarm5CD1334F-FetIEoRn5hgP\",\"AlarmDescription\":null,\"AWSAccountId\":\"975050211138\",\"AlarmConfigurationUpdatedTimestamp\":\"2024-07-05T15:19:31.960+0000\",\"NewStateValue\":\"ALARM\",\"NewStateReason\":\"Threshold Crossed: 1 datapoint [8.0 (05/07/24 15:19:00)] was greater than or equal to the threshold (5.0).\",\"StateChangeTime\":\"2024-07-05T15:20:44.959+0000\",\"Region\":\"EU (Milan)\",\"AlarmArn\":\"arn:aws:cloudwatch:eu-south-1:975050211138:alarm:SharedInfra-Alpha-Database-DatabaseInstanceObservabilityHighDatabaseConnectionsAlarm5CD1334F-FetIEoRn5hgP\",\"OldStateValue\":\"OK\",\"OKActions\":[],\"AlarmActions\":[\"arn:aws:sns:eu-south-1:975050211138:condense-alarms-topic\"],\"InsufficientDataActions\":[],\"Trigger\":{\"MetricName\":\"DatabaseConnections\",\"Namespace\":\"AWS/RDS\",\"StatisticType\":\"Statistic\",\"Statistic\":\"AVERAGE\",\"Unit\":null,\"Dimensions\":[{\"value\":\"sharedinfra-alpha-databas-databaseinstance24d16791-o3f70cahozc6\",\"name\":\"DBInstanceIdentifier\"}],\"Period\":60,\"EvaluationPeriods\":1,\"ComparisonOperator\":\"GreaterThanOrEqualToThreshold\",\"Threshold\":5.0,\"TreatMissingData\":\"\",\"EvaluateLowSampleCountPercentile\":\"\"}}",
                "Timestamp": "2024-07-05T15:20:45.011Z",
                "SignatureVersion": "1",
                "Signature": "aivuzzWUm8LXSYb/GpN9LHIGFoJe5GHh9234RVcYhJueO0ewwWrHvNc95DnELMitINLXOPM8V3EDsD4cAyM9S+y4TSXTvnFwU/co8hIVz4dnAzX69mzYVspk6Pe5ybd9gsk5/a5IH30D5HI40R8HgLuyn4p94r9VgpM0xx/sgVvUR5AIUvF7fXkZmRD4VYDxj+QjGGUuG2lpVcjxIAGYhxmJ5ehrlGLg+f5tV+Ng197oJJNaZpYOw5v3XqRn+/ivwQvrC2eR3H1ws9Jm+UVdPhp2PAtadV19CIQD6hNN+kjW5Y0Kq2MY8kEcNeFnR19kKMDhkkqTjgs7g8hTCvRBng==",
                "SigningCertUrl": "https://sns.eu-south-1.amazonaws.com/SimpleNotificationService-976a9179f44bb8cd90ba2dfb685e68e3.pem",
                "UnsubscribeUrl": "https://sns.eu-south-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:eu-south-1:975050211138:condense-alarms-topic:6ad71be8-03c9-44a2-8222-394f775cd4d6",
                "MessageAttributes": {}
            }
        }
    ]
}
 */

export async function handler(event: SnsMessage) {
  const username = process.env.DISCORD_USERNAME;
  const webhook = process.env.DISCORD_WEBHOOK;
  if (!webhook) {
    throw new Error('DISCORD_WEBHOOK environment variable is required');
  }

  const payload = JSON.parse(event.Records[0].Sns.Message) as AlarmPayload;
  await fetch(webhook, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: `ALARM on AWS ${payload.AWSAccountId} in ${payload.Region} - ${
        payload.AlarmDescription || payload.AlarmName
      }\n${payload.NewStateReason}`,
      ...(username ? { username } : {}),
    }),
  });
}
