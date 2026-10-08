import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Link from 'next/link';
import catalog from '../../content/catalog.json';
import { getPortalRejection } from '../../lib/portal-access';
import CatalogBrowser from './catalog-browser';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: '内容中枢 · Tom Wang', description: 'GitHub 项目、专业工具、学习内容与 AI 工作方法的分类入口。', robots: { index: false, follow: false } };

export default async function LibraryPage() {
  // Defense in depth: do not serialize the catalog if authentication is absent.
  if (getPortalRejection(await headers())) return <main className="p-10">Authentication required.</main>;
  const observedDate = catalog.observedAt.slice(0, 10);
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#10213a]">
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between gap-5 px-6 py-7 lg:px-10">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#10213a] text-xs text-white">TW</span>Tom Wang <span className="hidden font-normal text-slate-400 sm:inline">/ Content Hub</span></Link>
        <Link href="/" className="text-xs font-medium text-slate-500 hover:text-cyan-700">返回介绍门户 ↗</Link>
      </nav>
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <header className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-7 py-10 sm:px-10">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-cyan-50 blur-2xl" />
          <p className="relative section-label">CONNECTED KNOWLEDGE / GITHUB × LOCAL × WEB</p>
          <h1 className="relative mt-4 text-[clamp(2.1rem,4vw,3.6rem)] font-semibold tracking-[-.045em]">一个入口，连接全部工作。</h1>
          <p className="relative mt-5 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">把专业工具、学习内容、产品与工作方法整理成可检索的来源地图。GitHub 保存权威版本，本地承接工作，门户帮助发现；原始内容继续由各项目独立管理。</p>
          <div className="relative mt-7 flex flex-wrap items-center gap-3 text-xs font-semibold"><a href={catalog.sourceRepository} target="_blank" rel="noreferrer" className="rounded-full bg-[#10213a] px-5 py-3 text-white">完整 GitHub 目录 ↗</a><a href="#ai-access" className="rounded-full border border-slate-200 px-5 py-3 text-slate-600">给其他 AI 的入口 ↓</a><span className="font-normal text-slate-400">完整目录需授权 · 元数据核对 {observedDate}</span></div>
        </header>
        <div className="mt-7 grid gap-5 text-xs leading-6 text-slate-500 md:grid-cols-3">
          <p><span className="mr-2 font-mono text-cyan-700">01</span><strong className="text-slate-700">发现</strong> · 按主题与用途找到项目</p>
          <p><span className="mr-2 font-mono text-cyan-700">02</span><strong className="text-slate-700">调用</strong> · 连接 GitHub，读取权威来源</p>
          <p><span className="mr-2 font-mono text-cyan-700">03</span><strong className="text-slate-700">沉淀</strong> · 保留版本、权限与工作约定</p>
        </div>
        <CatalogBrowser catalog={catalog} />
      </div>
      <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-3 px-6 py-7 text-xs text-slate-400 lg:px-10"><span>Tom Wang · Content Hub</span><span>来源版本 {catalog.sourceRevision.slice(0, 10)} · 展示目录不等于访问授权</span></div></footer>
    </main>
  );
}
