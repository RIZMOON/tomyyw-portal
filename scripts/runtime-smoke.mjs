import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const expectedCatalog = JSON.parse(readFileSync(new URL('../content/catalog.json',import.meta.url),'utf8'));
const base = 'http://127.0.0.1:3100';
const auth = 'Basic '+Buffer.from('test-reader:test-only-not-real').toString('base64');
for (const route of ['/','/library','/api/catalog','/llms.txt']) {
  const anonymous = await fetch(base+route);
  assert.equal(anonymous.status,401,`${route}: anonymous`);
  assert(anonymous.headers.get('www-authenticate')?.startsWith('Basic'));
  const authorized = await fetch(base+route,{headers:{authorization:auth}});
  assert.equal(authorized.status,200,`${route}: authorized`);
  assert(authorized.headers.get('cache-control').includes('no-store'));
  assert(authorized.headers.get('x-robots-tag').includes('noindex'));
  const body = await authorized.text();
  if (route==='/library') { assert(body.includes('一个入口，连接全部工作')); assert(body.includes('catalog-search')); }
  if (route==='/api/catalog') { const catalog=JSON.parse(body); assert.equal(catalog.projects.length,expectedCatalog.projects.length); assert.equal(catalog.sourceRevision,expectedCatalog.sourceRevision); }
  if (route==='/llms.txt') assert(body.includes('RIZMOON/content-hub'));
  console.log(`PASS ${route}: anonymous 401; authenticated 200; no-store/noindex`);
}
