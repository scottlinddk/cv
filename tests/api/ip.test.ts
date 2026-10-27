import { describe, expect, it } from 'vitest';
import { isPublicIp } from '../../api/_lib/ip.js';

describe('isPublicIp', () => {
  it.each(['8.8.8.8', '93.184.216.34', '2606:4700:4700::1111'])('accepts %s', (ip) => {
    expect(isPublicIp(ip)).toBe(true);
  });

  it.each([
    '127.0.0.1',
    '10.1.2.3',
    '172.16.0.1',
    '192.168.1.1',
    '169.254.169.254',
    '100.64.0.1',
    '0.0.0.0',
    '::1',
    '::',
    'fc00::1',
    'fe80::1',
    '::ffff:127.0.0.1',
    'not-an-ip',
  ])('rejects %s', (ip) => {
    expect(isPublicIp(ip)).toBe(false);
  });
});
