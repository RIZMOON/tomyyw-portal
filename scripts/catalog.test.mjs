import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { filterProjects } from '../lib/catalog.ts';
import { getPortalRejection } from '../lib/portal-access.ts';

const catalog = JSON.parse(readFileSync(new URL('../content/catalog.json', import.meta.url),'utf8'));
test('projection contains only reviewed entries and relationships', () => {
  assert.equal(new Set(catalog.projects.map((p)=>p.id)).size,catalog.projects.length);
  assert(catalog.projects.length > 0);
  assert(!catalog.projects.some((p)=>['picc-training-site','dtt-training'].includes(p.id)));
  assert(!/\/Users\/|[A-Z]:\\|picc|aiib|efund|gf\.training|gml\.training/i.test(JSON.stringify(catalog)));
  assert(catalog.projects.filter((p)=>p.fork).every((p)=>p.category==='reference' && p.role==='reference'));
  assert(catalog.projects.some((p)=>p.id==='content-hub'));
  assert(catalog.projects.find((p)=>p.id==='maple').relatedTo==='model-audit-platform');
});
test('search, category, role, reset and no-results behavior', () => {
  assert.equal(filterProjects(catalog.projects,'','all','all').length,catalog.projects.length);
  assert.equal(filterProjects(catalog.projects,'  mApLe  ','practice','primary')[0].id,'model-audit-platform');
  assert.equal(filterProjects(catalog.projects,'','reference','reference').length,3);
  assert.equal(filterProjects(catalog.projects,'unlikely-no-match','all','all').length,0);
  assert.equal(filterProjects(catalog.projects,'MAPLE 历史','all','all')[0].id,'maple');
});
test('access checks fail closed, reject invalid auth, allow test credentials only', () => {
  // Dummy fixtures only; do not load or read .env or production credentials.
  delete process.env.PORTAL_USERNAME;
  delete process.env.PORTAL_PASSWORD;
  assert.equal(getPortalRejection(new Headers()).status,503);
  process.env.PORTAL_USERNAME='test-reader';
  process.env.PORTAL_PASSWORD='test-only-not-real';
  assert.equal(getPortalRejection(new Headers()).status,401);
  for (const value of ['Bearer test','Basic !!!','Basic '+Buffer.from('test-reader:wrong').toString('base64')]) assert.equal(getPortalRejection(new Headers({authorization:value})).status,401);
  const valid = 'Basic '+Buffer.from('test-reader:test-only-not-real').toString('base64');
  assert.equal(getPortalRejection(new Headers({authorization:valid})),null);
  const rejection = getPortalRejection(new Headers());
  assert.equal(rejection.headers.get('cache-control'),'private, no-store');
  assert(rejection.headers.get('x-robots-tag').includes('noindex'));
  delete process.env.PORTAL_USERNAME;
  delete process.env.PORTAL_PASSWORD;
});
