import * as crypto from 'crypto';

const md5 = crypto.createHash('md5');

export function generatePhysicalResourceId(id: string): string {
  return md5.update(id).digest('hex').substring(0, 12);
}
