# Tom Wang · Digital Portfolio

`tomyyw.com` 是 Tom Wang 的专业能力与 AI 实践门户，集中展示估值与审计专业实践、企业 AI 赋能项目，以及 RizMoon 金融 Agent OS 产品探索。

网站当前采用受限访问模式。访问账号只通过 Vercel 加密环境变量配置，不得写入代码、文档或 Git 历史。

## 信息架构

- 专业实践：估值、审计、监管、信息披露、投资者关系与人才测评。
- 企业 AI 赋能：定制培训、行业实训、Agent 学习与 Skill 沉淀。
- 产品探索：RizMoon 主站、金融 Agent OS 演示与商业计划。
- 内容中枢 `/library`：分类、检索、源仓库链接与跨 AI 使用指令；网页使用经过审核的目录投影。

## 内容中枢

完整目录与 AI 工作约定维护在私有 [RIZMOON/content-hub](https://github.com/RIZMOON/content-hub)。本仓库仍为公开源码，不导入私有正文、本机路径或机构特定交付。`content/catalog.json` 由中枢的白名单导出脚本生成，来源 revision 可核对。

`/api/catalog` 与 `/llms.txt` 是机器可读入口，沿用现有门户认证，并在路由处理器中再次核验。门户账号不授予 GitHub 权限。更新投影后须构建、验证、明确提交/部署；没有运行时 GitHub token 或自动抓取私有库。

公开站点的盘点口径与维护记录见 `docs/site-inventory.md`。

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
# Sites / Vinext
npm run build

# Vercel / Next.js
npm run build:vercel
```

## 访问控制

生产环境需要配置以下敏感变量：

- `PORTAL_USERNAME`
- `PORTAL_PASSWORD`

缺少任一变量时，网站会以关闭访问的方式返回服务不可用，不会退化为公开访问。
