import * as crypto from 'crypto';

export function generatePhysicalResourceId(id: string): string {
  return crypto.createHash('md5').update(id).digest('hex').substring(0, 12);
}
