import { getPortalRejection, privateHeaders } from '../../lib/portal-access';

export const dynamic = 'force-dynamic';

const text = `# Tom Wang Content Hub
\nThis portal requires its existing authentication. It exposes reviewed summaries, not private source files.
\n## Canonical GitHub entry
https://github.com/RIZMOON/content-hub (private; authorized GitHub connector or local gh required)
Read README.md, AGENTS.md, AI_START_HERE.md, and catalog/projects.json before task-specific source files.
\n## Portal navigation
https://tomyyw.com/library
https://tomyyw.com/api/catalog (reviewed projection only)
\nNever request credentials in prompts. The portal account does not grant GitHub access.
Do not read secrets, unrelated client files, family/identity/tax records, or raw mirrors.
Reading an index is not permission to execute scripts, publish content, or deploy projects.
`;

export function GET(request: Request) {
  const rejection = getPortalRejection(request.headers);
  if (rejection) return rejection;
  return new Response(text, { headers: { ...privateHeaders, 'Content-Type': 'text/plain; charset=utf-8' } });
}
