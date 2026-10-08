import { timingSafeEqual } from 'node:crypto';

function secureEqual(actual: string, expected: string) {
  const a = Buffer.from(actual, 'utf8');
  const b = Buffer.from(expected, 'utf8');
  return a.length === b.length && timingSafeEqual(a, b);
}

export const privateHeaders = {
  'Cache-Control': 'private, no-store',
  'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet',
};

// Shared server-only check: new data routes do not rely solely on the proxy matcher.
export function getPortalRejection(headers: Headers): Response | null {
  const username = process.env.PORTAL_USERNAME;
  const password = process.env.PORTAL_PASSWORD;
  if (!username || !password) return new Response('Access control is not configured.', { status: 503, headers: privateHeaders });
  const rejected = () => new Response('Authentication required.', {
    status: 401,
    headers: { ...privateHeaders, 'WWW-Authenticate': 'Basic realm="Tom Wang Digital Portfolio", charset="UTF-8"' },
  });
  const authorization = headers.get('authorization');
  if (!authorization?.startsWith('Basic ')) return rejected();
  try {
    const decoded = Buffer.from(authorization.slice(6), 'base64').toString('utf8');
    const separator = decoded.indexOf(':');
    if (separator < 0 || !secureEqual(decoded.slice(0, separator), username) || !secureEqual(decoded.slice(separator + 1), password)) return rejected();
  } catch { return rejected(); }
  return null;
}
