'use client';

import { useState } from 'react';
import { aiStarter, filterProjects, type PortalCatalog } from '../../lib/catalog';

const roleLabels: Record<string, string> = { primary: '主项目', legacy: '历史入口', reference: '外部参考' };

export default function CatalogBrowser({ catalog }: { catalog: PortalCatalog }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [role, setRole] = useState('all');
  const [copyStatus, setCopyStatus] = useState('');
  const projects = filterProjects(catalog.projects, query, category, role);

  async function copyStarter() {
    try { await navigator.clipboard.writeText(aiStarter); setCopyStatus('已复制，可以粘贴到其他 AI。'); }
    catch { setCopyStatus('复制未成功，请选中下方文字手动复制。'); }
  }

  return (
    <>
      <section aria-labelledby="catalog-heading" className="mt-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-[1fr_180px]">
            <div>
              <label htmlFor="catalog-search" className="text-xs font-semibold text-slate-500">检索项目与主题</label>
              <input id="catalog-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索 MAPLE、估值、Agent、培训…" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100" />
            </div>
            <div>
              <label htmlFor="catalog-role" className="text-xs font-semibold text-slate-500">项目性质</label>
              <select id="catalog-role" value={role} onChange={(event) => setRole(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100">
                <option value="all">全部类型</option><option value="primary">主项目</option><option value="legacy">历史入口</option><option value="reference">外部参考 / fork</option>
              </select>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2" aria-label="项目分类">
            {[{ id: 'all', label: '全部内容' }, ...catalog.categories].map((item) => (
              <button key={item.id} type="button" aria-pressed={category === item.id} onClick={() => setCategory(item.id)} className={`rounded-full px-4 py-2 text-xs font-medium transition ${category === item.id ? 'bg-[#10213a] text-white' : 'bg-slate-100 text-slate-600 hover:bg-cyan-50 hover:text-cyan-800'}`}>
                {item.label} <span className="ml-1 opacity-65">{item.id === 'all' ? catalog.projects.length : catalog.projects.filter((p) => p.category === item.id).length}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-5 mt-7 flex items-center justify-between gap-4">
          <h2 id="catalog-heading" className="text-lg font-semibold">{category === 'all' ? '分类项目目录' : catalog.categories.find((c) => c.id === category)?.label}</h2>
          <p role="status" aria-live="polite" className="text-xs text-slate-500">找到 {projects.length} 个入口</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-cyan-300 hover:shadow-[0_12px_32px_rgba(16,33,58,.05)]">
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold">
                <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-cyan-800">{catalog.categories.find((c) => c.id === project.category)?.label}</span>
                {project.role !== 'primary' ? <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">{roleLabels[project.role]}</span> : null}
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-500">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">{project.tags.map((tag) => <span key={tag} className="rounded bg-slate-50 px-2 py-1 text-[10px] text-slate-500">{tag}</span>)}</div>
              <p className="mt-4 text-[11px] text-slate-400">{project.visibility === 'private' ? '私有源码 · GitHub 授权后读取' : '公开源码'}{project.fork ? ' · fork / 非原创项目' : ''}</p>
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs font-semibold">
                {project.website ? <a href={project.website} target="_blank" rel="noreferrer" className="text-cyan-800 hover:text-cyan-600">打开网站 ↗</a> : <span className="font-normal text-slate-400">资料 / 代码项目</span>}
                <a href={project.repository} target="_blank" rel="noreferrer" aria-label={`${project.title}的 GitHub 源仓库`} className="text-slate-600 hover:text-cyan-700">GitHub 来源 ↗</a>
              </div>
            </article>
          ))}
        </div>
        {projects.length === 0 ? <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center"><p className="text-sm text-slate-500">未找到匹配的项目，请换一个关键词或分类。</p><button type="button" onClick={() => { setQuery(''); setCategory('all'); setRole('all'); }} className="mt-4 text-sm font-semibold text-cyan-800">清除筛选</button></div> : null}
      </section>

      <section id="ai-access" aria-labelledby="ai-heading" className="mb-16 mt-14 rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-7 sm:p-9">
        <p className="section-label">AI-READY / SOURCE-AWARE</p>
        <h2 id="ai-heading" className="mt-3 text-2xl font-semibold tracking-tight">让其他 AI 从同一个入口开始</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">将下方指令交给已连接你 GitHub 的 AI。它会先读目录与工作约定，再定位相关资料。私有仓库仍需你的 GitHub 授权；门户登录不能代替仓库权限。</p>
        <p className="mt-5 rounded-xl border border-cyan-100 bg-white/85 p-5 text-sm leading-7 text-slate-600">{aiStarter}</p>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold">
          <button type="button" onClick={copyStarter} className="rounded-full bg-[#10213a] px-5 py-3 text-white">复制 AI 开场指令</button>
          <a href="/api/catalog" className="rounded-full border border-slate-200 bg-white px-5 py-3">读取网页目录 JSON ↗</a>
          <a href="/llms.txt" className="rounded-full border border-slate-200 bg-white px-5 py-3">AI 入口说明 ↗</a>
        </div>
        <p role="status" aria-live="polite" className="mt-3 min-h-5 text-xs text-cyan-800">{copyStatus}</p>
        <p className="mt-2 text-xs leading-6 text-slate-400">网页目录是经过审核的展示投影。完整索引、来源 commit 和项目调用指南保存在私有内容中枢；这里不提供客户原始资料或账号凭证。</p>
      </section>
    </>
  );
}
