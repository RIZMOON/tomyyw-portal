# tomyyw.com / rizmoon.ai 公开站点盘点

初始核对日期：2026-08-23（Asia/Shanghai）；内容中枢更新：2026-10-08。

门户访问级别：受限访问。自 2026-08-24 起，`tomyyw.com` 使用服务端账号密码保护并设置为 `noindex`；下列被链接子站仍按各自现有访问级别运行。

## 口径

- 以 Vercel 账户中的自定义域名、项目生产地址与实际 HTTP 可访问状态为主要依据。
- 同一项目的多个域名别名在门户中合并展示，保留必要的备用入口说明。
- 不收录仅有 `vercel.app` 地址、但未挂载至 `tomyyw.com` 或 `rizmoon.ai` 的项目。
- 不收录当前返回 404 的历史入口。

上述口径用于首页既有站点地图。新增 `/library` 是 GitHub 内容目录：可以收录没有网站的资料/代码项目，且不把 GitHub 可见性等同于网站访问级别。

## 内容中枢

- 私有权威索引：[RIZMOON/content-hub](https://github.com/RIZMOON/content-hub)，包含人工分类、主源/历史/fork 关系、入口文件与来源 commit。
- `/library`：只接收人工批准的通用简介和链接，支持关键词、分类及项目性质检索。
- `/api/catalog`：同一审核投影的 JSON；`/llms.txt`：跨 AI 读取入口，均沿用门户认证并在处理器再次核验。
- 本次不向公开源码新增机构特定培训版本、客户原始资料或本机路径，不将完整私有索引打包进浏览器脚本。
- 目录元数据来源 revision 记录在 `content/catalog.json`；目录不是网站健康检查，未对所有子站重新执行运行态审计。

## tomyyw.com

### 专业实践

- `xquant.tomyyw.com`：AI、估值与审计专业服务。
- `crosscheck.tomyyw.com`：A/H 双市场信披发布前差异核验与发布控制。
- `iri.tomyyw.com`：投资者问答情报工作台，登录后使用。
- `test.xquant.tomyyw.com`：估值与 AI 综合能力测评中心。
- `ai-am.tomyyw.com`：资产管理与财富管理 AI 监管观点微站。
- `afrc.audit.tomyyw.com`：AFRC 审计与估值问答，聚焦非上市股权市场法、监管关注与行业最佳实践（2026-10-08 新增）。

### 企业 AI 赋能

- `training.tomyyw.com`：企业 AI 赋能定制培训总入口。
- `gf.training.tomyyw.com`：证券财务、税务、风险与资管运营 AI 实训。
- `gml.training.tomyyw.com`：消费品牌财务运营 AI 实训与咨询方案。
- `dtt.training.tomyyw.com`：金融行业审计 AI 实操训练营。
- `picc-training.tomyyw.com`：AI 智能体轻学习卡片站。
- `efund.training.tomyyw.com`：资管财务与风控 AI 实训；`efund.tomyyw.com` 为同项目备用别名。
- `aiib.training.tomyyw.com`：英文 Finance Function AI 实训。
- `aiib-training.tomyyw.com`：AI Agent 学习卡片站的金融场景入口。

## rizmoon.ai

- `rizmoon.ai` / `www.rizmoon.ai`：RizMoon 升月智能产品主站。
- `app.rizmoon.ai`：金融 Agent OS 交互演示。
- `bp.rizmoon.ai`：产品定位与商业计划展示，访问受控。

## 未收录入口

- `plan.rizmoon.ai`：核对时返回 404；门户使用可访问的 `bp.rizmoon.ai`。

## 维护建议

- 新增或删除子站时，同步更新 `app/page.tsx` 与本清单。
- 每次发布前复核链接状态、站点标题、公开内容边界和是否仍适合在个人门户展示。
