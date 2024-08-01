import type { DynamoDBClient } from '@aws-sdk/client-dynamodb';

export interface Context {
  client: DynamoDBClient;
  tableName: string;
}

export interface ListenerRuleId {
  listenerArn: string;
  rulePath: string;
}

export interface ListenerPriorityId {
  listenerArn: string;
  priority: number;
}

export interface ListenerRuleAttributes {
  listenerArn: string;
  priority: number;
  rulePath: string;
}

export interface ReplaceListenerRulePriorityProps extends ListenerRuleAttributes {
  oldPriority: number;
}
