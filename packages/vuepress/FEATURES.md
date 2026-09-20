# @142vip/vuepress

技术说明。不随 npm 发布。

## 定位

基于 [vuepress-theme-hope](https://theme-hope.vuejs.press/) 的 VuePress 2 封装：默认中文配置、Vite bundler、SlimSearch 中文、阅读时间、Mermaid 插件预设。供 `apps/vuepress-demo` 与历史 VuePress 站点使用。

## 功能

### 子路径

- `@142vip/vuepress`：主入口（`src/index.ts` → `config` + `theme`）
- bin：`vuepress`（`bin/vuepress.js`，转发 VuePress CLI）

### 站点配置（`src/config.ts`）

- `defineVipVuepressConfig(config, options?): VipVuepressUserConfig`
  - 默认 `lang: 'zh-CN'`
  - 默认 `bundler: getVuepressDefaultViteBundler(...)`
  - `options.appBuildLog` 时注入 `buildTime` meta + `createVipAppBuildLogPlugin`
  - 无 `head` 时补 `favicon.ico` link
  - 默认 `shouldPrefetch: false`
- `defineVipNavbarConfig(options): NavbarOptions`（`navbar(options)`）
- `defineVipSidebarConfig(options): SidebarOptions`（`sidebar(options)`）
- `VUEPRESS_DEFAULT_DOCS_DIR`：`'docs'`
- `VipVuepressUserConfig`：别名 `UserConfig`
- `DefineVipVuepressConfigOptions`：`appBuildLog?: { version, buildTime? }`

### 主题（`src/theme.ts`）

- `getVipHopeTheme(userConfig: ThemeOptions)`：`hopeTheme({ ...baseThemeOptions, ...userConfig, plugins: merge })`，`checkVuePress: false`
- `baseThemePluginOptions`（默认插件）：
  - `readingTime.wordPerMinute: 100`
  - `watermark.enabled: false`
  - `copyright: false`
  - `blog: false`
  - `copyCode.showInMobile: true`
  - `catalog: false`
  - `slimsearch.locales['/']` → `slimSearchCNLocals`
  - `nprogress: true`
  - `git: true`
- `baseThemeOptions` 摘要：
  - `darkmode: 'toggle'`
  - `hostname: 'https://142vip.cn'`
  - `favicon: '/favicon.ico'`、`logo: '/favicon.icon'`
  - `navbarLayout`：start `Brand`，end `Links` / `Language` / `Search` / `Outlook` / `Repo`
  - `pageInfo`：`Author`、`Original`、`Date`、`Category`、`Tag`、`ReadingTime`
  - `docsDir: 'docs'`、`docsBranch: 'next'`
  - `repoLabel: 'GitHub'`、`repoDisplay: true`
  - `changelog: true`、`contributors: 'content'`
  - `themeColor: true`、`externalLinkIcon: false`、`displayFooter: true`
  - `markdown`：`tasklist`、`playground`（`ts`/`vue`）、`sub`/`sup`/`vPre`、`vuePlayground`、`include`、`mermaid`、`align`、`tabs`、`codeTabs`；`highlighter.langs`：`ts`、`js`、`vue`、`json`、`json5`、`jsonc`、`jsx`、`lua`、`diff`、`c`、`c++`、`dockerfile`、`nginx`、`proto`、`java`、`javascript`、`typescript`、`yaml`、`text`、`graphql`、`http`、`python`、`xml`
- `handleImportCodePath(pathArray, cwd?)`：Markdown 代码块 `@code` 路径替换

### 插件（`src/plugins/`）

- `createVipAppBuildLogPlugin(): PluginObject`（客户端 `setupVipAppBuildLog`）
- `getVuepressDefaultViteBundler(options?): Bundler`
  - `VuepressViteBundlerOptions`：`appBuild?`（`createVipAppBuildTime` 注入 define）
- `slimSearchCNLocals`：SlimSearch 中文文案（`plugin-slim-search.ts`）

### 客户端（`src/client.ts`）

- `defineClientConfig`：`enhance()` 内 `setupVipAppBuildLog()`

### 类型（`src/types/app-build-info.ts`）

- 应用构建信息相关类型（供 bundler / 插件使用）

## 配置

### `defineVipVuepressConfig` 第二参数

- `appBuildLog.version`（必填）
- `appBuildLog.buildTime`（可选，默认当前构建时间）

### 主题自定义

传入 `getVipHopeTheme({ nav, sidebar, plugins: { ... } })` 覆盖 `baseThemeOptions` 与 `baseThemePluginOptions` 任意字段。

无独立 `vuepress.config` 文件名约定；配置写在消费方 `docs/.vuepress/config.ts`。

## 最佳实践

- 新文档站优先 `@142vip/vitepress`（core-x 根站已迁移）；本包维护既有 VuePress 项目
- 单语言中文站直接用 `defineVipVuepressConfig`，勿重复设置 `lang`
- 需要构建版本控制台输出时传 `appBuildLog`，与 VitePress 侧 `setupVipAppBuildLog` 行为一致
- Markdown 引入仓库源码用 `handleImportCodePath` 统一路径别名
- 主题插件合并时展开 `userConfig.plugins`，避免覆盖默认 `slimsearch` / `readingTime`

## 构建

`unbuild` 双格式

```shell
cd packages/vuepress && pnpm build
```

## 验证

```shell
cd packages/vuepress && pnpm build && pnpm typecheck
cd apps/vuepress-demo && pnpm build
```

## 演示

`apps/vuepress-demo`：Hope 主题与 `@142vip/vuepress` 配置示例。
