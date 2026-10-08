import catalog from '../../../content/catalog.json';
import { getPortalRejection, privateHeaders } from '../../../lib/portal-access';

export const dynamic = 'force-dynamic';

export function GET(request: Request) {
  const rejection = getPortalRejection(request.headers);
  if (rejection) return rejection;
  return Response.json(catalog, { headers: privateHeaders });
}
