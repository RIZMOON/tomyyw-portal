# 内容中枢交接 — 2026-10-08

## 交付范围

增加 `/library`、`/api/catalog`、`/llms.txt` 和首页入口。既有站点卡片、AFRC/测评新增入口、首页较小标题和认证变量不改。没有新增 GitHub token、数据库、第三方追踪或自动抓取。

完整索引在 private content-hub；此公开源码只维护白名单投影。两端以 sourceRevision 对应，修改分类后需重新导出、检查和发布。已核对的仓库 entrypoints 为空时如实显示，不宣称库内容已审核。

## 核验

- ESLint、TypeScript/Next 生产构建通过。
- 目录/检索/来源关系/匿名拒绝/错误登录/缺失配置关闭访问的自动检查通过。
- 本地生产服务的 `/`、`/library`、`/api/catalog`、`/llms.txt` 均验证匿名401、测试认证200和 no-store/noindex；测试仅使用虚构凭证，不读取生产秘密。
- 独立 Codex 子代理检查无阻断问题；不等同于正式 Security Scan 或 Claude 审核。
- Claude CLI 未安装；桌面复核因 Mac 锁屏阻断。浏览器预览无法加载受认证的本地地址，未取得可视截图，不声称视觉复核完成。
- 生产凭证仅核对 Vercel 变量名与 Encrypted 状态，未拉取其值。
- 主域名/WWW 已挂载到现有门户项目，Vercel 验证 configured-correctly；此前仅作为旧发布的手工 alias，后续生产部署应自动跟随项目。

具体生产发布结果和最终来源 revision 在上线后补记。回退应使用 Vercel 前一生产部署，不删除源文件或重置用户工作树。
