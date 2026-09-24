import crypto from 'crypto';

export const generateReferenceToken = (prefix: string = 'TXC2026'): string => {
  const randomStr = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `${prefix}-${randomStr}`;
};
