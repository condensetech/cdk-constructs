import type {
  CdkCustomResourceEvent,
  CdkCustomResourceResponse,
  CloudFormationCustomResourceCreateEvent,
  CloudFormationCustomResourceDeleteEvent,
  CloudFormationCustomResourceUpdateEvent,
} from 'aws-lambda';
import * as ddbRepository from './ddb-repository';
import { ListenerRuleAlreadyExistsError, ListenerRulePriorityAlreadyTakenError } from './errors';
import { Context } from './interfaces';
import { generatePhysicalResourceId } from './util';

interface ResourceProperties {
  priority?: number;
  rulePath: string;
}

interface OnCreateResponse {
  priority: number;
}

const parseResourceProperties = (event: CdkCustomResourceEvent): ResourceProperties => {
  const { priority, rulePath } = event.ResourceProperties;
  if (!rulePath) {
    throw new Error('Rule path is required.');
  }
  return {
    priority: priority ? parseInt(priority) : undefined,
    rulePath,
  };
};

async function onDelete(ctx: Context, event: CloudFormationCustomResourceDeleteEvent): Promise<void> {
  const props = parseResourceProperties(event);
  const priority =
    props.priority ??
    (await ddbRepository.fetchListenerRulePriority(ctx, {
      rulePath: props.rulePath,
    }));
  await ddbRepository.destroyListenerRule(ctx, {
    ...props,
    priority,
  });
}

async function onCreate(
  ctx: Context,
  event: CloudFormationCustomResourceCreateEvent | CloudFormationCustomResourceUpdateEvent,
): Promise<OnCreateResponse> {
  const props = parseResourceProperties(event);
  let priority = props.priority;
  if (priority) {
    await ddbRepository.createNewListenerRule(ctx, {
      ...props,
      priority,
    });
  } else {
    priority = await ddbRepository.fetchFreePriority(ctx);
    while (true) {
      try {
        await ddbRepository.createNewListenerRule(ctx, {
          ...props,
          priority,
        });
        break;
      } catch (e) {
        if (e instanceof ListenerRulePriorityAlreadyTakenError) {
          priority = await ddbRepository.fetchFreePriority(ctx);
        } else if (e instanceof ListenerRuleAlreadyExistsError) {
          // deallocate priority if rule already exists
          await ddbRepository.deallocPriority(ctx, priority);
          throw e;
        } else {
          throw e;
        }
      }
    }
  }
  return { priority };
}

async function onUpdate(ctx: Context, event: CloudFormationCustomResourceUpdateEvent): Promise<OnCreateResponse> {
  const props = parseResourceProperties(event);
  const persistedPriority = await ddbRepository.fetchListenerRulePriority(ctx, props);
  // if priority is not changed, do nothing
  // if priority was explicit and is now unknown, returns the persisted value
  if (props.priority === persistedPriority || !props.priority) {
    return {
      priority: props.priority || persistedPriority,
    };
  }

  await ddbRepository.replaceListenerRulePriority(ctx, {
    ...props,
    priority: props.priority,
    oldPriority: persistedPriority,
  });
  return {
    priority: props.priority,
  };
}

export async function logic(
  ctx: Context,
  event: CdkCustomResourceEvent,
): Promise<CdkCustomResourceResponse<OnCreateResponse | {}>> {
  switch (event.RequestType) {
    case 'Delete':
      await onDelete(ctx, event);
      break;
    case 'Create':
      return {
        Data: await onCreate(ctx, event),
      };
    case 'Update':
      const oldProps = event.OldResourceProperties;
      const props = event.ResourceProperties;
      if (oldProps.listenerArn !== props.listenerArn || oldProps.rulePath !== props.rulePath) {
        return {
          PhysicalResourceId: generatePhysicalResourceId(`${props.listenerArn}-${props.rulePath}`),
          Data: await onCreate(ctx, event),
        };
      }
      return {
        Data: await onUpdate(ctx, event),
      };
  }
  return {};
}
