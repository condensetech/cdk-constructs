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

async function createMaxPriority(ctx: Context): Promise<number> {
  try {
    await ctx.client.send(
      new PutItemCommand({
        TableName: ctx.tableName,
        Item: {
          pk: { S: 'max' },
          priority: { N: PRIORITY_INIT.toString() },
        },
        ConditionExpression: 'attribute_not_exists(pk)',
      }),
    );
    return PRIORITY_INIT;
  } catch (e) {
    if ((e as Error).name === 'ConditionalCheckFailedException') {
      throw new PriorityAlreadySetError();
    }
    throw e;
  }
}

async function updateMaxPriority(ctx: Context): Promise<number> {
  const { Attributes } = await ctx.client.send(
    new UpdateItemCommand({
      TableName: ctx.tableName,
      Key: {
        pk: { S: 'max' },
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

async function upsertFreePrioritiesList(ctx: Context): Promise<void> {
  try {
    await ctx.client.send(
      new PutItemCommand({
        TableName: ctx.tableName,
        Item: {
          pk: { S: 'free' },
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

async function fetchFreePriorityFromList(ctx: Context): Promise<number | undefined> {
  try {
    const { Attributes } = await ctx.client.send(
      new UpdateItemCommand({
        TableName: ctx.tableName,
        Key: {
          pk: { S: 'free' },
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

const deallocPriorityPayload = (ctx: Context, priority: number): Update => ({
  TableName: ctx.tableName,
  Key: {
    pk: { S: 'free' },
  },
  UpdateExpression: 'SET priorities = list_append(priorities, :priorities)',
  ExpressionAttributeValues: {
    ':priorities': { L: [{ N: priority.toString() }] },
  },
});

export async function deallocPriority(ctx: Context, priority: number): Promise<void> {
  await upsertFreePrioritiesList(ctx);
  await ctx.client.send(new UpdateItemCommand(deallocPriorityPayload(ctx, priority)));
}

async function incrMaxPriority(ctx: Context): Promise<number> {
  try {
    return await createMaxPriority(ctx);
  } catch (e) {
    if (e instanceof PriorityAlreadySetError) {
      return updateMaxPriority(ctx);
    }
    throw e;
  }
}

export async function fetchFreePriority(ctx: Context): Promise<number> {
  return (await fetchFreePriorityFromList(ctx)) ?? (await incrMaxPriority(ctx));
}

const createListenerRulePriorityPayload = (ctx: Context, props: ListenerRuleAttributes): Put => ({
  TableName: ctx.tableName,
  Item: {
    pk: { S: `priority#${props.priority}` },
    rule: { S: props.rulePath },
    priority: { N: props.priority.toString() },
  },
  ConditionExpression: 'attribute_not_exists(pk)',
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
                pk: { S: `rule#${props.rulePath}` },
                rule: { S: props.rulePath },
                priority: { N: props.priority.toString() },
              },
              ConditionExpression: 'attribute_not_exists(pk)',
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
        throw new ListenerRuleAlreadyExistsError({ rulePath: props.rulePath });
      }
      if (codes[1] === 'ConditionalCheckFailed') {
        throw new ListenerRulePriorityAlreadyTakenError({ rulePath: props.rulePath }, props.priority);
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
        pk: { S: `rule#${props.rulePath}` },
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
    pk: { S: `priority#${props.priority}` },
  },
});
export async function destroyListenerRule(ctx: Context, props: ListenerRuleAttributes): Promise<void> {
  await upsertFreePrioritiesList(ctx);
  await ctx.client.send(
    new TransactWriteItemsCommand({
      TransactItems: [
        {
          Delete: {
            TableName: ctx.tableName,
            Key: {
              pk: { S: `rule#${props.rulePath}` },
            },
          },
        },
        {
          Delete: deleteListenerRulePriorityPayload(ctx, props),
        },
        {
          Update: deallocPriorityPayload(ctx, props.priority),
        },
      ],
    }),
  );
}

export async function replaceListenerRulePriority(
  ctx: Context,
  props: ReplaceListenerRulePriorityProps,
): Promise<void> {
  await upsertFreePrioritiesList(ctx);
  try {
    await ctx.client.send(
      new TransactWriteItemsCommand({
        TransactItems: [
          {
            Update: {
              TableName: ctx.tableName,
              Key: {
                pk: { S: `rule#${props.rulePath}` },
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
              priority: props.oldPriority,
            }),
          },
          {
            Update: deallocPriorityPayload(ctx, props.oldPriority),
          },
        ],
      }),
    );
  } catch (e) {
    if (e instanceof TransactionCanceledException) {
      const codes = e.CancellationReasons ? e.CancellationReasons?.map((reason) => reason?.Code) : [];
      if (codes[1] === 'ConditionalCheckFailed') {
        throw new ListenerRulePriorityAlreadyTakenError({ rulePath: props.rulePath }, props.priority);
      }
      throw e;
    }
  }
}
