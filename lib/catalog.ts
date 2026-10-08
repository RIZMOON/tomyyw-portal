export type CatalogProject = {
  id: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  role: string;
  relatedTo: string | null;
  visibility: string;
  fork: boolean;
  repository: string;
  website: string | null;
  branch: string;
  entrypoints: string[];
};

export type PortalCatalog = {
  schemaVersion: number;
  observedAt: string;
  sourceRevision: string;
  sourceRepository: string;
  categories: { id: string; label: string; description: string }[];
  projects: CatalogProject[];
};

export const aiStarter = '请通过我已授权的 GitHub 连接器读取 RIZMOON/content-hub 的 README.md、AGENTS.md 和 catalog/projects.json。先按我的任务定位相关主项目，再读取 entrypoints 与实际内容；注明仓库、文件和 commit。只读任务所需文件，不读取凭证或无关客户资料，不执行同步或部署。';

export function filterProjects(projects: CatalogProject[], query: string, category: string, role: string) {
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return projects.filter((project) => {
    if (category !== 'all' && project.category !== category) return false;
    if (role !== 'all' && project.role !== role) return false;
    const searchable = [project.id, project.title, project.summary, ...project.tags].join(' ').toLocaleLowerCase();
    return terms.every((term) => searchable.includes(term));
  });
}
