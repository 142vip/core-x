# @142vip/vuepress

技术说明。不随 npm 发布。

## 定位

基于 [vuepress-theme-hope](https://theme-hope.vuejs.press/) 的 VuePress 2 封装：默认中文 `locales`、Vite bundler、SlimSearch 中文、阅读时间、Mermaid 插件预设；可选 `appBuildLog`。供 `apps/vuepress-demo` 与历史 VuePress 站点使用。

## 功能

### 子路径

- `@142vip/vuepress`：主入口（`src/index.ts` → `config` + `theme`）
- bin：`vuepress`（`bin/vuepress.js`，转发 VuePress CLI）

### 站点配置（`src/config.ts`）

```text
defineVipVuepressConfig(config, options?): VipVuepressUserConfig
```

默认补全：

- `locales`：未传 → `{ '/': { lang: 'zh-CN' } }`；已传则保留用户配置，仅当存在 `'/'` 且缺 `lang` 时补全（不新增路径、不覆盖字段）
- `lang` 缺失时 → `'zh-CN'`
- `bundler` 缺失时 → `getVuepressDefaultViteBundler({ appBuild })`
- `head` 缺失时 → favicon link；若启用 `appBuildLog` 另追加 `buildTime` meta
- `shouldPrefetch` 缺失时 → `false`

第二参数：

```text
options.appBuildLog?: { version: string; buildTime?: string }
```

启用时：`createVipAppBuildTime`（`@142vip/vue/vite`）+ `createVipAppBuildLogPlugin`（客户端 `setupVipAppBuildLog` 从 `@142vip/vue/utils` 导入，**不**走主入口）。

另有：`resolveVipVuepressLocales`、`defineVipNavbarConfig` / `defineVipSidebarConfig`、`VUEPRESS_DEFAULT_DOCS_DIR`、`VipVuepressUserConfig`。

### 主题（`src/theme.ts`）

- `getVipHopeTheme(userConfig)`：合并 `baseThemeOptions` 与用户配置，`checkVuePress: false`
- 用户未写时默认补全：`author` → `OPEN_SOURCE_AUTHOR`；`docsDir` → `VUEPRESS_DEFAULT_DOCS_DIR`（`'docs'`）；`docsBranch` → `VIP_VUEPRESS_DEFAULT_DOCS_BRANCH`（`'next'`）；`contributors` → `true`
- `VIP_VUEPRESS_DEFAULT_DOCS_BRANCH`：默认文档分支常量
- `handleImportCodePath(pathArray, cwd?)`：Markdown 代码块路径别名

### 插件（`src/plugins/`）

入口 `index.ts` 统一导出：

- `createVipAppBuildLogPlugin()` → `plugin-app-build-log.ts`；`clientConfigFile` 指向 `dist/client.mjs`
- `getVuepressDefaultViteBundler({ appBuild? })` → `plugin-vite-bundler.ts`；`ssr.noExternal` 含 `VIP_VUEPRESS_SSR_NO_EXTERNAL_PACKAGES`
- `VIP_VUEPRESS_SSR_NO_EXTERNAL_PACKAGES`：`['@142vip/vue', '@142vip/cdn']`，避免 SSR 加载 `.jpg` 报错
- `VuepressViteBundlerOptions`
- `createVipViteBuildPlugin({ chunkSizeWarningLimit? })` → `plugin-vite-build.ts`；`extendsBundlerOptions` 合并 Vite `chunkSizeWarningLimit`（默认 8192）与 `ssr.noExternal`
- `slimSearchCNLocals` → `plugin-slim-search.ts`（SlimSearch 中文文案）

### 侧栏类型（`src/sidebar.ts`）

- `DocsSidebarLink` / `DocsSidebarGroup` / `DocsSidebarItem` / `DocsSidebarConfig`：手写侧栏配置的类型辅助，由主入口导出

包内 `config.ts` / `theme.ts` 从 `./plugins` 导入；主入口 `index.ts` 导出 `./plugins` 与 `./sidebar`（类型）。

## 配置

无独立运行时配置文件。自定义 / 多语言直接传 `locales`；包内不整表替换，也不覆盖用户已写字段。

依赖：`@142vip/open-source`、`@142vip/vue` `>=0.1.6-alpha.32`（需带 `./utils` 子路径）。

## 最佳实践

- 单语言中文站：不必重复写 `locales` / `lang`
- 需要控制台版本日志时传 `appBuildLog`
- Markdown 源码引入用 `handleImportCodePath`
- 主题插件合并时展开 `userConfig.plugins`，避免覆盖默认 `slimsearch` / `readingTime`

## 构建

```shell
cd packages/vuepress && pnpm build
```

## 验证

```shell
cd packages/vuepress && pnpm build && pnpm typecheck
cd apps/vuepress-demo && pnpm build
```

## 演示

`apps/vuepress-demo`。
