import { BatchWriteItemCommand, DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import type { CdkCustomResourceEvent } from 'aws-lambda';
import { logic } from './../../../src/lambda/application-listener-priority-allocator/logic';
import {
  ListenerRuleAlreadyExistsError,
  ListenerRulePriorityAlreadyTakenError,
} from '../../../src/lambda/application-listener-priority-allocator/errors';
import { Context } from '../../../src/lambda/application-listener-priority-allocator/interfaces';

const tableName = 'alb_listener_priorities';

const client = new DynamoDBClient({
  endpoint: 'http://localhost:8000',
  region: 'local-env',
  credentials: {
    accessKeyId: 'foo',
    secretAccessKey: 'bar',
  },
});
const ctx: Context = { client, tableName };

interface EventPayloadProps {
  listenerArn: string;
  rulePath: string;
  priority?: number;
}

const createPayload = (props: EventPayloadProps): CdkCustomResourceEvent => ({
  LogicalResourceId: 'LogicalResourceId',
  RequestType: 'Create',
  ResponseURL: 'ResponseURL',
  StackId: 'StackId',
  RequestId: 'RequestId',
  ResourceType: 'ResourceType',
  ResourceProperties: {
    ...props,
    ServiceToken: 'Service',
  },
  ServiceToken: 'Service',
});

const deletePayload = (props: EventPayloadProps): CdkCustomResourceEvent => ({
  LogicalResourceId: 'LogicalResourceId',
  PhysicalResourceId: 'PhysicalResourceId',
  RequestType: 'Delete',
  ResponseURL: 'ResponseURL',
  StackId: 'StackId',
  RequestId: 'RequestId',
  ResourceType: 'ResourceType',
  ResourceProperties: {
    ...props,
    ServiceToken: 'Service',
  },
  ServiceToken: 'Service',
});

const updatePayload = (oldProps: EventPayloadProps, props: EventPayloadProps): CdkCustomResourceEvent => ({
  LogicalResourceId: 'LogicalResourceId',
  PhysicalResourceId: 'PhysicalResourceId',
  RequestType: 'Update',
  ResponseURL: 'ResponseURL',
  StackId: 'StackId',
  RequestId: 'RequestId',
  ResourceType: 'ResourceType',
  ResourceProperties: {
    ...props,
    ServiceToken: 'Service',
  },
  OldResourceProperties: {
    ...oldProps,
    ServiceToken: 'Service',
  },
  ServiceToken: 'Service',
});

describe('ApplicationListenerPriorityAllocator', () => {
  beforeEach(async () => {
    const scanResult = await client.send(
      new ScanCommand({
        TableName: tableName,
        AttributesToGet: ['pk', 'sk'],
        ConsistentRead: true,
      }),
    );
    const items = scanResult.Items || [];
    if (items.length > 0) {
      const deleteRequests = items.map((item) => ({
        DeleteRequest: { Key: { pk: item.pk, sk: item.sk } },
      }));
      await client.send(new BatchWriteItemCommand({ RequestItems: { [tableName]: deleteRequests } }));
    }
  });

  describe('onCreate', () => {
    it('raises an error if same rule is created twice', async () => {
      const payload = createPayload({
        listenerArn: 'listenerArn',
        rulePath: 'rulePath',
      });
      await logic(ctx, payload);
      await expect(logic(ctx, payload)).rejects.toThrow(ListenerRuleAlreadyExistsError);
    });

    describe('when invoked with a known priority', () => {
      it('returns the allocated priority', async () => {
        expect(
          await logic(
            ctx,
            createPayload({
              listenerArn: 'listenerArn',
              rulePath: 'rulePath',
              priority: 10,
            }),
          ),
        ).toMatchObject({
          Data: {
            priority: 10,
          },
        });
      });

      it('raises an error if priority is already taken', async () => {
        await logic(
          ctx,
          createPayload({
            listenerArn: 'listenerArn',
            rulePath: 'rulePath',
          }),
        );
        await expect(
          logic(ctx, createPayload({ listenerArn: 'listenerArn', rulePath: 'rulePath2', priority: 1 })),
        ).rejects.toThrow(ListenerRulePriorityAlreadyTakenError);
      });
    });

    describe('when invoked without a known priority', () => {
      it('sets priority to 1 if no rules exist', async () => {
        expect(
          await logic(
            ctx,
            createPayload({
              listenerArn: 'listenerArn',
              rulePath: 'rulePath',
            }),
          ),
        ).toMatchObject({
          Data: {
            priority: 1,
          },
        });
      });

      it('increments priority by 1 on each creation with no priority', async () => {
        await logic(
          ctx,
          createPayload({
            listenerArn: 'listenerArn',
            rulePath: 'rulePath',
          }),
        );
        expect(
          await logic(
            ctx,
            createPayload({
              listenerArn: 'listenerArn',
              rulePath: 'rulePath2',
            }),
          ),
        ).toMatchObject({
          Data: {
            priority: 2,
          },
        });
      });

      it('increments priority till the first free priority slot', async () => {
        await logic(
          ctx,
          createPayload({
            listenerArn: 'listenerArn',
            rulePath: 'rulePath',
            priority: 1,
          }),
        );
        await logic(
          ctx,
          createPayload({
            listenerArn: 'listenerArn',
            rulePath: 'rulePath2',
            priority: 2,
          }),
        );
        expect(
          await logic(
            ctx,
            createPayload({
              listenerArn: 'listenerArn',
              rulePath: 'rulePath3',
            }),
          ),
        ).toMatchObject({
          Data: {
            priority: 3,
          },
        });
      });

      it('does not waste priorities when a rule insert fails', async () => {
        await logic(
          ctx,
          createPayload({
            listenerArn: 'listenerArn',
            rulePath: 'rulePath',
          }),
        );
        await expect(
          logic(
            ctx,
            createPayload({
              listenerArn: 'listenerArn',
              rulePath: 'rulePath',
            }),
          ),
        ).rejects.toThrow(ListenerRuleAlreadyExistsError);
        expect(await logic(ctx, createPayload({ listenerArn: 'listenerArn', rulePath: 'rulePath2' }))).toMatchObject({
          Data: { priority: 2 },
        });
      });
    });
  });

  describe('onDelete', () => {
    it('removes the listenerRule and dealloc the priority from the db', async () => {
      const id = { listenerArn: 'listenerArn', rulePath: 'rulePath' };
      await logic(ctx, createPayload(id));
      await logic(ctx, deletePayload(id));
      expect(await logic(ctx, createPayload(id))).toMatchObject({
        Data: { priority: 1 },
      });
    });
  });

  describe('onUpdate', () => {
    it('does not do anything if priority does not actually change', async () => {
      const id = { listenerArn: 'listenerArn', rulePath: 'rulePath' };
      expect(await logic(ctx, createPayload(id))).toMatchObject({
        Data: { priority: 1 },
      });
      expect(await logic(ctx, updatePayload(id, { ...id, priority: 1 }))).toMatchObject({
        Data: { priority: 1 },
      });
    });

    it('replaces the priority if it changes', async () => {
      const id = { listenerArn: 'listenerArn', rulePath: 'rulePath' };
      expect(await logic(ctx, createPayload(id))).toMatchObject({
        Data: { priority: 1 },
      });
      expect(await logic(ctx, updatePayload(id, { ...id, priority: 11 }))).toMatchObject({
        Data: { priority: 11 },
      });
      expect(await logic(ctx, createPayload({ ...id, rulePath: 'rulePath2' }))).toMatchObject({
        Data: { priority: 1 },
      });
    });

    it('does not do anything if explicit priority is unset', async () => {
      const id = { listenerArn: 'listenerArn', rulePath: 'rulePath' };
      expect(await logic(ctx, createPayload({ ...id, priority: 11 }))).toMatchObject({
        Data: { priority: 11 },
      });
      expect(await logic(ctx, updatePayload({ ...id, priority: 11 }, id))).toMatchObject({
        Data: { priority: 11 },
      });
    });
  });
});
