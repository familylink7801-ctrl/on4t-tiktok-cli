import { randomBytes } from 'crypto';

export const formatCookie = (cookies) => {
  if (!cookies) return '';
  return cookies.map(c => c.split(';')[0]).join('; ');
};

export const generateFingerprint = () => {
  return randomBytes(16).toString('hex');
};