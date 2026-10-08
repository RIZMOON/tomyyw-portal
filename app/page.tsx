const practiceProjects = [
  {
    number: '01',
    title: 'XQuant',
    subtitle: 'AI · 估值 · 审计专业服务',
    description: '围绕复杂会计估计、估值模型与 AI 智能体，提供审计联动的专业复核与可追溯证据体系。',
    href: 'https://xquant.tomyyw.com',
    domain: 'xquant.tomyyw.com',
    tag: '专业服务',
  },
  {
    number: '02',
    title: 'CrossCheck ReleaseGuard',
    subtitle: 'A/H 双市场信披发布控制',
    description: '在两地披露前执行全量差异核验、异常闭环与发布判断，识别数值错配、行序置换和版本偏差。',
    href: 'https://crosscheck.tomyyw.com',
    domain: 'crosscheck.tomyyw.com',
    tag: '审计科技',
  },
  {
    number: '03',
    title: 'IR Intelligence Agent',
    subtitle: '投资者问答情报工作台',
    description: '结合真实同业问答、联网来源与分步分析，为董事长和董秘团队生成问题地图、潜在追问与参考口径。',
    href: 'https://iri.tomyyw.com',
    domain: 'iri.tomyyw.com',
    tag: '登录后使用',
  },
  {
    number: '04',
    title: '估值 × AI 能力测评中心',
    subtitle: '专业能力与 Agent 工作方式测评',
    description: '通过结构化案例同时观察估值判断、数据处理、AI 协作、可复现性与结果答辩能力。',
    href: 'https://test.xquant.tomyyw.com/',
    domain: 'test.xquant.tomyyw.com',
    tag: '人才测评',
  },
  {
    number: '05',
    title: 'AI × 资管与财富管理',
    subtitle: '监管观察与专业洞见微站',
    description: '聚焦算法可解释性、资产管理与财富管理场景，以及国内外 AI 监管框架的专业解读。',
    href: 'https://ai-am.tomyyw.com',
    domain: 'ai-am.tomyyw.com',
    tag: '专业洞见',
  },
  {
    number: '06',
    title: 'AFRC 审计与估值问答',
    subtitle: '市场法 · 监管关注 · Best Practice',
    description: '以问答梳理非上市股权市场法、AFRC 监管关注与行业最佳实践，连接估值判断、审计证据与披露要求。',
    href: 'https://afrc.audit.tomyyw.com/',
    domain: 'afrc.audit.tomyyw.com',
    tag: '监管与估值',
  },
];

const trainingProjects = [
  {
    title: '企业 AI 赋能定制培训',
    description: '从需求访谈、定制大纲和环境实测，到线下工作坊与可复用 Skill 沉淀，把 AI 接入真实工作流。',
    href: 'https://training.tomyyw.com',
    domain: 'training.tomyyw.com',
    tag: '总入口',
  },
  {
    title: '证券财务与资管运营 AI 实训',
    description: '覆盖财务、税务、风险与资管运营场景，以行业案例推动团队形成可验证、可复用的 AI 工作方法。',
    href: 'https://gf.training.tomyyw.com',
    domain: 'gf.training.tomyyw.com',
    tag: '证券业',
  },
  {
    title: '消费品牌财务运营 AI 实训',
    description: '以价值链机会地图连接财务运营案例、现场实训与工具咨询，强调零安装、结果可验证。',
    href: 'https://gml.training.tomyyw.com',
    domain: 'gml.training.tomyyw.com',
    tag: '财务运营',
  },
  {
    title: '金融行业审计 AI 实操训练营',
    description: '以共通基础案例连接资产管理、基金、银行与保险审计场景，训练从任务拆解到质量复核的完整链路。',
    href: 'https://dtt.training.tomyyw.com',
    domain: 'dtt.training.tomyyw.com',
    tag: '金融审计',
  },
  {
    title: 'AI 智能体轻学习卡片站',
    description: '通过大卡片、小卡片与互动内容，解释 AI Agent 的概念、原理、工程方法和产品趋势。',
    href: 'https://picc-training.tomyyw.com',
    domain: 'picc-training.tomyyw.com',
    tag: '轻学习',
  },
  {
    title: '资管财务与风控 AI 实训',
    description: '面向基金财务与风控团队，通过真实工作任务训练资料处理、复核分析和风险识别。',
    href: 'https://efund.training.tomyyw.com',
    domain: 'efund.training.tomyyw.com',
    alias: '备用入口：efund.tomyyw.com',
    tag: '基金资管',
  },
  {
    title: 'AI for the Finance Function',
    description: '面向国际金融机构财务与 Controller 团队的英文实训入口，以六类案例覆盖两条交付路径。',
    href: 'https://aiib.training.tomyyw.com',
    domain: 'aiib.training.tomyyw.com',
    tag: '双语课程',
  },
  {
    title: 'AI Agent 学习卡片 · 金融版',
    description: '以模块化卡片帮助金融机构团队快速建立对智能体能力、边界与落地方法的共同语言。',
    href: 'https://aiib-training.tomyyw.com',
    domain: 'aiib-training.tomyyw.com',
    tag: 'Agent 基础',
  },
];

const productProjects = [
  {
    number: '01',
    title: 'RizMoon 升月智能',
    subtitle: '金融 Agent OS 平台',
    description: '将复杂的财务与风险管理工作流拆解为可编排的 AI 岗位，推动工作方式从“人做流程”走向“AI 执行流程”。',
    href: 'https://www.rizmoon.ai',
    domain: 'rizmoon.ai',
    tag: '产品主站',
  },
  {
    number: '02',
    title: 'Finance Agent OS',
    subtitle: '金融智能体交互演示',
    description: '展示 AI 员工、专业 Skills、工作流编排和智能对话等核心产品概念，是升月平台的可操作体验入口。',
    href: 'https://app.rizmoon.ai',
    domain: 'app.rizmoon.ai',
    tag: '产品演示',
  },
  {
    number: '03',
    title: 'RizMoon Business Plan',
    subtitle: '产品定位与商业计划',
    description: '面向合作伙伴与投资人的商业展示，系统呈现产品定位、市场、商业模式和发展路径。',
    href: 'https://bp.rizmoon.ai',
    domain: 'bp.rizmoon.ai',
    tag: '访问受控',
  },
];

type Project = (typeof practiceProjects)[number];

function ProjectCard({ project, violet = false }: { project: Project; violet?: boolean }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group flex min-h-[300px] flex-col rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_1px_0_rgba(15,23,42,.02)] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-[0_22px_55px_rgba(15,23,42,.09)]"
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`font-mono text-xs font-semibold tracking-[.18em] ${violet ? 'text-violet-600' : 'text-cyan-600'}`}>{project.number}</span>
        <span className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${violet ? 'bg-violet-50 text-violet-700' : 'bg-cyan-50 text-cyan-700'}`}>{project.tag}</span>
      </div>
      <h3 className="mt-10 text-[1.65rem] font-semibold leading-tight tracking-[-.04em] text-[#10213a]">{project.title}</h3>
      <p className="mt-2 text-sm font-semibold text-slate-400">{project.subtitle}</p>
      <p className="mt-5 flex-1 leading-7 text-slate-600">{project.description}</p>
      <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
        <span className="font-mono text-[11px] text-slate-400">{project.domain}</span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-50 text-base transition group-hover:bg-[#10213a] group-hover:text-white">↗</span>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#f7f9fc] text-[#10213a]">
      <nav className="relative z-30 mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-7 lg:px-10">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-[-0.02em]">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#10213a] text-sm text-white shadow-[0_10px_30px_rgba(16,33,58,.18)]">TW</span>
          <span>Tom Wang <span className="hidden font-normal text-slate-400 sm:inline">/ Digital Portfolio</span></span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-slate-500 md:flex">
          <a className="transition hover:text-cyan-700" href="#practice">专业实践</a>
          <a className="transition hover:text-cyan-700" href="#training">AI 赋能</a>
          <a className="transition hover:text-violet-700" href="#product">产品探索</a>
          <a className="transition hover:text-cyan-700" href="/library">内容中枢</a>
        </div>
        <a href="/library" className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium shadow-sm transition hover:border-cyan-300 hover:text-cyan-700">浏览内容中枢</a>
      </nav>

      <section className="relative mx-auto grid min-h-[690px] w-full max-w-[1280px] items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.12fr_.88fr] lg:px-10 lg:pt-20">
        <div className="pointer-events-none absolute left-[44%] top-4 h-[520px] w-[520px] rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/75 px-4 py-2 text-xs font-semibold tracking-[.14em] text-cyan-800 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_0_5px_rgba(6,182,212,.12)]" />
            EXPERTISE × AI × BUILDING
          </div>
          <h1 className="max-w-3xl text-[clamp(3rem,5.8vw,5.75rem)] font-semibold leading-[.98] tracking-[-.055em] text-[#10213a]">
            让专业判断，<br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">成为可运行的系统。</span>
          </h1>
          <p className="mt-9 max-w-2xl text-lg leading-8 text-slate-600">
            汇集 Tom Wang 在估值、审计、企业 AI 赋能与金融 Agent 产品方向的公开实践。这里不是作品列表，而是一张从专业方法到可用产品的能力地图。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/library" className="rounded-full border border-cyan-200 bg-cyan-50 px-6 py-3.5 text-sm font-semibold text-cyan-900 transition hover:-translate-y-0.5">项目与资料索引 ↗</a>
            <a href="#map" className="rounded-full bg-[#10213a] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(16,33,58,.18)] transition hover:-translate-y-0.5">进入能力地图 ↓</a>
            <a href="https://www.rizmoon.ai" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#10213a] transition hover:-translate-y-0.5 hover:border-violet-300">探索 RizMoon ↗</a>
          </div>
        </div>

        <div className="relative z-10 lg:pl-8">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />
          <div className="relative overflow-hidden rounded-[34px] border border-white bg-white/70 p-5 shadow-[0_35px_100px_rgba(51,65,85,.15)] backdrop-blur-xl">
            <div className="flex items-center justify-between px-2 pb-5 pt-1 text-[11px] font-semibold tracking-[.15em] text-slate-400">
              <span>CAPABILITY MAP</span><span>2026 / LIVE</span>
            </div>
            {[
              ['01', '专业实践', '估值 · 审计 · 监管 · 人才', '#06b6d4', '#ecfeff', String(practiceProjects.length)],
              ['02', '企业 AI 赋能', '培训 · 场景 · Skill · 工作流', '#2563eb', '#eff6ff', String(trainingProjects.length)],
              ['03', '产品探索', '金融 Agent OS · 产品演示', '#7c3aed', '#f5f3ff', String(productProjects.length)],
            ].map(([number, title, detail, color, background, count]) => (
              <a key={number} href={number === '01' ? '#practice' : number === '02' ? '#training' : '#product'} className="group mb-3 grid grid-cols-[48px_1fr_auto] items-center gap-4 rounded-[23px] border border-slate-100 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(15,23,42,.08)] last:mb-0">
                <span className="grid h-12 w-12 place-items-center rounded-2xl font-mono text-xs font-bold" style={{ color, background }}>{number}</span>
                <span>
                  <strong className="block text-lg tracking-[-.03em]">{title}</strong>
                  <span className="mt-1 block text-sm text-slate-400">{detail}</span>
                </span>
                <span className="text-right"><strong className="block text-2xl tracking-[-.05em]">{count}</strong><span className="text-[10px] tracking-[.12em] text-slate-400">SITES</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="border-y border-slate-200/80 bg-white/65">
        <div className="mx-auto grid max-w-[1280px] gap-6 px-6 py-9 text-sm text-slate-500 sm:grid-cols-3 lg:px-10">
          <p><strong className="mr-2 text-[#10213a]">专业底座</strong>估值、审计、财务报告与监管判断</p>
          <p><strong className="mr-2 text-[#10213a]">AI 方法</strong>Agent、Skills、工作流与可信复核</p>
          <p><strong className="mr-2 text-[#10213a]">交付形态</strong>专业服务、课程、工具与产品平台</p>
        </div>
      </section>

      <section id="practice" className="mx-auto w-full max-w-[1280px] px-6 py-28 lg:px-10">
        <div className="mb-14 grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><p className="section-label">01 / PROFESSIONAL PRACTICE</p><h2 className="section-title">专业实践</h2></div>
          <p className="max-w-2xl text-lg leading-8 text-slate-500 lg:justify-self-end">以审计思维连接估值、模型、信息披露、投资者关系和人才判断：结论可复核，过程可追溯，AI 不替代人的专业责任。</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {practiceProjects.map((project) => <ProjectCard key={project.href} project={project} />)}
        </div>
      </section>

      <section id="training" className="bg-[#eef4fb] py-28">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
          <div className="mb-14 grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div><p className="section-label text-blue-600">02 / ENTERPRISE AI ENABLEMENT</p><h2 className="section-title">企业 AI 赋能</h2></div>
            <p className="max-w-2xl text-lg leading-8 text-slate-500 lg:justify-self-end">从“会用工具”走向“完成任务”：围绕真实工作流设计案例、提示、Skill、验证标准和后续沉淀，让团队在现场做出可用成果。</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trainingProjects.map((project, index) => (
              <a key={project.href} href={project.href} target="_blank" rel="noreferrer" className="group flex min-h-[292px] flex-col rounded-[26px] border border-white bg-white/90 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_22px_50px_rgba(30,64,175,.09)]">
                <div className="flex items-center justify-between"><span className="font-mono text-[11px] font-bold tracking-[.16em] text-blue-500">{String(index + 1).padStart(2, '0')}</span><span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-semibold text-blue-700">{project.tag}</span></div>
                <h3 className="mt-9 text-xl font-semibold leading-snug tracking-[-.035em]">{project.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-500">{project.description}</p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between"><span className="font-mono text-[10px] text-slate-400">{project.domain}</span><span className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span></div>
                  {'alias' in project && project.alias ? <p className="mt-2 text-[10px] text-slate-400">{project.alias}</p> : null}
                </div>
              </a>
            ))}
          </div>
          <p className="mt-7 text-xs leading-6 text-slate-400">说明：部分微站用于公开课程展示或场景演示；域名及内容不构成任何客户关系、服务关系或第三方背书。</p>
        </div>
      </section>

      <section id="product" className="mx-auto w-full max-w-[1280px] px-6 py-28 lg:px-10">
        <div className="mb-14 grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><p className="section-label text-violet-600">03 / PRODUCT EXPLORATION</p><h2 className="section-title">产品探索</h2></div>
          <p className="max-w-2xl text-lg leading-8 text-slate-500 lg:justify-self-end">RizMoon 是产品化探索：把金融专业知识、可复用 Skills、Agent 分工与端到端工作流整合为面向专业用户的操作系统。</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {productProjects.map((project) => <ProjectCard key={project.href} project={project as Project} violet />)}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-6 pb-28 lg:px-10">
        <div className="relative overflow-hidden rounded-[36px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-violet-50 px-7 py-14 sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border-[32px] border-violet-100/60" />
          <div className="relative"><p className="section-label">FROM EXPERTISE TO SYSTEM</p><h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-.045em] sm:text-4xl">需要把专业场景变成可验证的 AI 工作流？</h2><p className="mt-4 max-w-2xl leading-7 text-slate-500">从一次高质量工作坊开始，也可以直接探索金融 Agent OS 的产品方向。</p></div>
          <div className="relative mt-8 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0"><a href="https://training.tomyyw.com" target="_blank" rel="noreferrer" className="rounded-full bg-[#10213a] px-6 py-3.5 text-sm font-semibold text-white">了解定制培训 ↗</a><a href="https://www.rizmoon.ai" target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold">访问 RizMoon ↗</a></div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-5 px-6 py-9 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-xl bg-[#10213a] text-[10px] font-bold text-white">TW</span><span>Tom Wang · Digital Portfolio</span></div>
          <p>专业判断 × AI 方法 × 可运行系统</p>
          <a href="#top" className="font-medium text-slate-500 transition hover:text-cyan-700">返回顶部 ↑</a>
        </div>
      </footer>
    </main>
  );
}
