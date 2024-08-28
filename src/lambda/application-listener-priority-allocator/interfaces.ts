import type { DynamoDBClient } from '@aws-sdk/client-dynamodb';

export interface Context {
  client: DynamoDBClient;
  tableName: string;
}

export interface ListenerRuleId {
  rulePath: string;
}

export interface ListenerPriorityId {
  priority: number;
}

export interface ListenerRuleAttributes {
  priority: number;
  rulePath: string;
}

export interface ReplaceListenerRulePriorityProps extends ListenerRuleAttributes {
  oldPriority: number;
}
