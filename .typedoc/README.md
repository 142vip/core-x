# .typedoc

仓库 TypeDoc 配置统一管理目录（2026-08 由根目录 4 个 `typedoc*.config.js` 迁移整合）。

## 方案选型（2026-08 调研结论）

Monorepo（31 包）+ VitePress 场景下的 API 文档方案：

- **TypeDoc + typedoc-plugin-markdown + typedoc-vitepress-theme（当前方案，推荐）**：单层依赖即覆盖「多包聚合（`entryPointStrategy: 'packages'`）+ Markdown 产物 + vitepress sidebar 注入」全链路；生态活跃（typedoc-plugin-markdown 4.12.0，2026-06 仍在发版）。
- **API Extractor + api-documenter**（备选）：微软系，类型树严谨，但需要 `api-extractor.json` 逐包配置 + 二次文档管线，多步繁琐，与 VitePress 集成成本高。
- **Docusaurus**（备选）：自带插件生态好，但需更换文档框架，破坏现有 vitepress 站点，不满足「非破坏改动」约束。

结论：维持 TypeDoc 路线，通过本目录统一配置管理，不引入新框架。

## 配置分层

| 文件 | 职责 | 对应产物 |
| --- | --- | --- |
| `config.js` | 共享默认配置真源（17 个包的 entryPoints、名称等） | — |
| `api.config.js` | 生成 HTML API 文档 | `dist/apis` |
| `md.config.js` | 生成 VitePress 可消费的 Markdown（含 sidebar） | `docs/apis` |
| `wiki.config.js` | 生成 GitHub Wiki Markdown | `docs/wiki` |

## 脚本映射（package.json）

| Script | 配置 |
| --- | --- |
| `pnpm typedoc:api` | `npx typedoc --options .typedoc/api.config.js` |
| `pnpm typedoc:md` | `npx typedoc --options .typedoc/md.config.js` |
| `pnpm typedoc:wiki` | `npx typedoc --options .typedoc/wiki.config.js` |

## 消费链路

- `typedoc:md` 产物 `docs/apis/typedoc-sidebar.json` 被根 `.vitepress/config.ts` 读取，注入 vitepress 侧边栏（`/docs/apis/` → "API - 文档"）。
- `build:docs` / `build:docs-proxy` 内含 `typedoc:api`，CI 依赖此链路。
- 所有产物（`dist/apis`、`docs/apis`、`docs/wiki`）路径与迁移前一致，**输出位置与消费方式不变**。

## 注意

- TypeDoc 将配置内相对路径基于**配置文件所在目录**解析（非运行 cwd），因此本目录所有路径（`entryPoints`、`out`）统一通过 `config.js` 导出的 `repoRoot`（仓库根绝对路径）拼接，保证从任意目录执行 `pnpm typedoc:*` 结果一致。
- 目标配置通过 `defineVipTypedocConfig`（`@142vip/vitepress`）合并默认值，改动默认配置需同步审视三个目标。
- `md.config.js` 开启 `sanitizeComments: true`（typedoc-plugin-markdown）：转义 JsDoc 注释内裸 `<` `>` `{` `}`（如上游注释 `Partial<T>`），避免被 Vue 编译器误判为 HTML 标签导致 vitepress build 失败（"Element is missing end tag"）。仅 md 目标开启，api/wiki 不受影响。
- 完整文档刷新链路验证命令为 `pnpm build:docs`（vitepress build + typedoc:api）。vitepress 站点 root 是**仓库根目录**（`.vitepress/`），不要用 `vitepress build docs`。
