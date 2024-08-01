// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Delete,
  GetItemCommand,
  Put,
  PutItemCommand,
  TransactionCanceledException,
  TransactWriteItemsCommand,
  Update,
  UpdateItemCommand,
} from '@aws-sdk/client-dynamodb';
import {
  ListenerRuleAlreadyExistsError,
  ListenerRuleNotFoundError,
  ListenerRulePriorityAlreadyTakenError,
  PriorityAlreadySetError,
} from './errors';
import {
  Context,
  ListenerPriorityId,
  ListenerRuleAttributes,
  ListenerRuleId,
  ReplaceListenerRulePriorityProps,
} from './interfaces';

const PRIORITY_INIT = parseInt(process.env.PRIORITY_INIT || '1', 10);
const PRIORITY_STEP = 1;

async function createMaxPriority(ctx: Context, listenerArn: string): Promise<number> {
  try {
    await ctx.client.send(
      new PutItemCommand({
        TableName: ctx.tableName,
        Item: {
          pk: { S: `listener#${listenerArn}` },
          sk: { S: 'max' },
          priority: { N: PRIORITY_INIT.toString() },
        },
        ConditionExpression: 'attribute_not_exists(pk)',
      }),
    );
    return PRIORITY_INIT;
  } catch (e) {
    if ((e as Error).name === 'ConditionalCheckFailedException') {
      throw new PriorityAlreadySetError(listenerArn);
    }
    throw e;
  }
}

async function updateMaxPriority(ctx: Context, listenerArn: string): Promise<number> {
  const { Attributes } = await ctx.client.send(
    new UpdateItemCommand({
      TableName: ctx.tableName,
      Key: {
        pk: { S: `listener#${listenerArn}` },
        sk: { S: 'max' },
      },
      UpdateExpression: 'ADD priority :one',
      ExpressionAttributeValues: {
        ':one': { N: PRIORITY_STEP.toString() },
      },
      ReturnValues: 'UPDATED_NEW',
    }),
  );
  return parseInt(Attributes?.priority.N!);
}

async function upsertFreePrioritiesList(ctx: Context, listenerArn: string): Promise<void> {
  try {
    await ctx.client.send(
      new PutItemCommand({
        TableName: ctx.tableName,
        Item: {
          pk: { S: `listener#${listenerArn}` },
          sk: { S: 'free' },
          priorities: { L: [] },
        },
        ConditionExpression: 'attribute_not_exists(pk)',
      }),
    );
  } catch (e) {
    if ((e as Error).name !== 'ConditionalCheckFailedException') {
      throw e;
    }
    // ignore error if free priorities list already exists
  }
}

async function fetchFreePriorityFromList(ctx: Context, listenerArn: string): Promise<number | undefined> {
  try {
    const { Attributes } = await ctx.client.send(
      new UpdateItemCommand({
        TableName: ctx.tableName,
        Key: {
          pk: { S: `listener#${listenerArn}` },
          sk: { S: 'free' },
        },
        UpdateExpression: 'REMOVE priorities[0]',
        ReturnValues: 'ALL_OLD',
      }),
    );
    return Attributes?.priorities?.L?.[0]?.N ? parseInt(Attributes.priorities.L[0].N) : undefined;
  } catch (e) {
    if ((e as Error).name === 'ValidationException') {
      // It's likely to be "The document path provided in the update expression is invalid for update"
      // returned when the free priorities list has not been created yet
      return undefined;
    }
    throw e;
  }
}

const deallocPriorityPayload = (ctx: Context, listenerArn: string, priority: number): Update => ({
  TableName: ctx.tableName,
  Key: {
    pk: { S: `listener#${listenerArn}` },
    sk: { S: 'free' },
  },
  UpdateExpression: 'SET priorities = list_append(priorities, :priorities)',
  ExpressionAttributeValues: {
    ':priorities': { L: [{ N: priority.toString() }] },
  },
});

export async function deallocPriority(ctx: Context, listenerArn: string, priority: number): Promise<void> {
  await upsertFreePrioritiesList(ctx, listenerArn);
  await ctx.client.send(new UpdateItemCommand(deallocPriorityPayload(ctx, listenerArn, priority)));
}

async function incrMaxPriority(ctx: Context, listenerArn: string): Promise<number> {
  try {
    return await createMaxPriority(ctx, listenerArn);
  } catch (e) {
    if (e instanceof PriorityAlreadySetError) {
      return updateMaxPriority(ctx, listenerArn);
    }
    throw e;
  }
}

export async function fetchFreePriority(ctx: Context, listenerArn: string): Promise<number> {
  return (await fetchFreePriorityFromList(ctx, listenerArn)) ?? (await incrMaxPriority(ctx, listenerArn));
}

const createListenerRulePriorityPayload = (ctx: Context, props: ListenerRuleAttributes): Put => ({
  TableName: ctx.tableName,
  Item: {
    pk: { S: `listener#${props.listenerArn}` },
    sk: { S: `priority#${props.priority}` },
    listener: { S: props.listenerArn },
    rule: { S: props.rulePath },
    priority: { N: props.priority.toString() },
  },
  ConditionExpression: 'attribute_not_exists(sk)',
});
export async function createNewListenerRule(ctx: Context, props: ListenerRuleAttributes): Promise<void> {
  try {
    await ctx.client.send(
      new TransactWriteItemsCommand({
        TransactItems: [
          {
            Put: {
              TableName: ctx.tableName,
              Item: {
                pk: { S: `listener#${props.listenerArn}` },
                sk: { S: `rule#${props.rulePath}` },
                listener: { S: props.listenerArn },
                rule: { S: props.rulePath },
                priority: { N: props.priority.toString() },
              },
              ConditionExpression: 'attribute_not_exists(sk)',
            },
          },
          {
            Put: createListenerRulePriorityPayload(ctx, props),
          },
        ],
      }),
    );
  } catch (e) {
    if (e instanceof TransactionCanceledException) {
      const codes = e.CancellationReasons ? e.CancellationReasons?.map((reason) => reason?.Code) : [];
      if (codes[0] === 'ConditionalCheckFailed') {
        throw new ListenerRuleAlreadyExistsError({ listenerArn: props.listenerArn, rulePath: props.rulePath });
      }
      if (codes[1] === 'ConditionalCheckFailed') {
        throw new ListenerRulePriorityAlreadyTakenError(
          { listenerArn: props.listenerArn, rulePath: props.rulePath },
          props.priority,
        );
      }
      throw e;
    }
    throw e;
  }
}

export async function fetchListenerRulePriority(ctx: Context, props: ListenerRuleId): Promise<number> {
  const { Item } = await ctx.client.send(
    new GetItemCommand({
      TableName: ctx.tableName,
      Key: {
        pk: { S: `listener#${props.listenerArn}` },
        sk: { S: `rule#${props.rulePath}` },
      },
    }),
  );
  if (!Item?.priority?.N) {
    throw new ListenerRuleNotFoundError(props);
  }
  return parseInt(Item.priority.N);
}

const deleteListenerRulePriorityPayload = (ctx: Context, props: ListenerPriorityId): Delete => ({
  TableName: ctx.tableName,
  Key: {
    pk: { S: `listener#${props.listenerArn}` },
    sk: { S: `priority#${props.priority}` },
  },
});
export async function destroyListenerRule(ctx: Context, props: ListenerRuleAttributes): Promise<void> {
  await upsertFreePrioritiesList(ctx, props.listenerArn);
  await ctx.client.send(
    new TransactWriteItemsCommand({
      TransactItems: [
        {
          Delete: {
            TableName: ctx.tableName,
            Key: {
              pk: { S: `listener#${props.listenerArn}` },
              sk: { S: `rule#${props.rulePath}` },
            },
          },
        },
        {
          Delete: deleteListenerRulePriorityPayload(ctx, props),
        },
        {
          Update: deallocPriorityPayload(ctx, props.listenerArn, props.priority),
        },
      ],
    }),
  );
}

export async function replaceListenerRulePriority(
  ctx: Context,
  props: ReplaceListenerRulePriorityProps,
): Promise<void> {
  await upsertFreePrioritiesList(ctx, props.listenerArn);
  try {
    await ctx.client.send(
      new TransactWriteItemsCommand({
        TransactItems: [
          {
            Update: {
              TableName: ctx.tableName,
              Key: {
                pk: { S: `listener#${props.listenerArn}` },
                sk: { S: `rule#${props.rulePath}` },
              },
              UpdateExpression: 'SET priority = :priority',
              ExpressionAttributeValues: {
                ':priority': { N: props.priority.toString() },
              },
            },
          },
          {
            Put: createListenerRulePriorityPayload(ctx, props),
          },
          {
            Delete: deleteListenerRulePriorityPayload(ctx, {
              listenerArn: props.listenerArn,
              priority: props.oldPriority,
            }),
          },
          {
            Update: deallocPriorityPayload(ctx, props.listenerArn, props.oldPriority),
          },
        ],
      }),
    );
  } catch (e) {
    if (e instanceof TransactionCanceledException) {
      const codes = e.CancellationReasons ? e.CancellationReasons?.map((reason) => reason?.Code) : [];
      if (codes[1] === 'ConditionalCheckFailed') {
        throw new ListenerRulePriorityAlreadyTakenError(
          { listenerArn: props.listenerArn, rulePath: props.rulePath },
          props.priority,
        );
      }
      throw e;
    }
  }
}
