import { DynamoDBClient } from '@aws-sdk/client-dynamodb'; // eslint-disable-line import/no-extraneous-dependencies
import type { CdkCustomResourceEvent, CdkCustomResourceResponse } from 'aws-lambda';
import { logic } from '../lambda/application-listener-priority-allocator/logic';

const client = new DynamoDBClient({});
const tableName = process.env.TABLE_NAME!;

export async function handler(event: CdkCustomResourceEvent): Promise<CdkCustomResourceResponse> {
  return logic(
    {
      client,
      tableName,
    },
    event,
  );
}
