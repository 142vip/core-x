# @142vip/vitepress

技术说明。不随 npm 发布。

## 定位

VitePress 文档站工具包：默认主题配置、Mermaid 图表、Element Plus 组件、全局页脚、TypeDoc 默认项、workspace 包索引。core-x 根文档站（`.vitepress/`）与 `apps/vitepress-demo` 的消费方。

## 功能

### 子路径（`package.json` exports）

- `@142vip/vitepress`：主入口 → `src/core`（配置、Mermaid、TypeDoc、vip 工具）
- `@142vip/vitepress/components`：Vue 组件
- `@142vip/vitepress/theme`：`defineVipExtendsTheme` 主题扩展
- `@142vip/vitepress/workspace`：Monorepo `package.json` glob 索引

### 配置 API（`src/core/vitepress.ts` / `config.ts`）

- `defineVipVitepressConfig(userConfig, options?): UserConfig`
  - 合并 `defaultVipThemeConfig`、`mergeVipDefaultHead`、`mergeVipMarkdownConfig`、`mergeVipViteConfig`
  - `options.mermaid` 为 `true` 或对象时启用 Mermaid fence + Vite 预构建
  - `options.appBuildLog` 注入构建版本控制台输出
- `defineVipMarkdownConfig(markdown?): MarkdownOptions`
- `defineVipNavbarConfig(options): NavbarConfig`
- `defineVipSidebarConfig(options): SidebarConfig`
- `getVipThemeConfig(themeConfig?): VipThemeConfig`
- `mergeVipDefaultHead(head?)`、`getVipBrandCdnUrl(relativePath)`
- `resolveVipSocialLinks(input?)`
- `defaultVipThemeConfig`、`defaultVipMarkdown`、`defaultVipFaviconHead`
- `VIP_DEFAULT_FAVICON`、`VIP_DEFAULT_LOGO`
- `VIP_SOCIAL_LINK_ICONS`：`github` | `gitee` | `npm` | `csdn` | `bilibili` | `juejin`
- `i18n`、`zhSearch`（Algolia 中文 locales）

### Mermaid（`src/core/mermaid.ts` / `mermaid-theme.ts`）

- `vipMermaidMarkdown(md)`：注册 mermaid fence
- `mergeVipMermaidViteConfig(vite)`
- `configureVipMermaid(options?)`、`getVipMermaidOptions()`
- `resolveVipMermaidTheme(theme?)`、`createVipMermaidConfig(theme?)`
- `renderVipMermaidSvg(...)`、`parseVipMermaidFenceInfo(info)`
- `VIP_MERMAID_THEMES`：`default` | `dark` | `forest` | `neutral` | `base`
- 类型：`VipMermaidOptions`、`VipMermaidTheme`

### Vite 合并（`src/core/vite.ts`）

- `mergeVipViteConfig(userVite?, options?)`
- `VipAppBuildLogOptions`、`MergeVipViteConfigOptions`（`sass`、`appBuildLog`）

### 页脚与首页数据（`src/core/vip.ts`）

- `getVipFooter(params)`：VitePress 默认单行 footer 文案
- `enableVipFooter(params?)`：返回 `{ footer: false, vipFooter }`
- `toVipFooterComponentProps(config)`
- `VipFooterConfig`、`VipFooterLabels`、`VipThemeFooterSlice`
- `vipTeamMembers`
- `VipPackageJSON`、`VipProject`、`VipHomeTableConfig`

### TypeDoc（`src/core/typedoc.ts`）

- `getVipTypedocDefaultConfig(): TypeDocOptions`
- `defineVipTypedocConfig<T>(userConfig): TypeDocOptions & T`
- `VitepressPluginOptions`、`VitepressSidebar`

### 类型（`src/core/types.ts`）

- `NavbarConfig`、`NavbarConfigItem`、`SidebarConfig`、`SidebarConfigItem`、`ZhSearchConfig`

### Workspace（`src/workspace/`）

- `resolveWorkspacePackageMaps(...)`
- `normalizeGlobPackageJsonModule<T>(module)`
- `indexWorkspacePackageJsonGlob<T>(...)`
- `WorkspacePackageMaps`

### Vue 组件（`@142vip/vitepress/components`）

- `VipContactAuthor`
- `VipGithubPins`（export `VipGithubPinItem`）
- `VipHomePage`
- `VipMermaid`
- `VipOpenSource`
- `VipProjectTable`
- `VipTeam`
- 常量：`VIP_OPEN_SOURCE_SPONSORS`、`VIP_STAR_HISTORY_DEFAULT_REPOS`、`VIP_STAR_HISTORY_SEALED_TOKEN`
- `VIP_CONTACT_QR_ITEMS`、`VIP_CONTACT_PLATFORM_LINKS`
- 工具：`getStarHistorySvgUrl`、`useVipDocTheme`、`useVipMermaidViewport` 及相关 Mermaid 视口常量

### 主题（`@142vip/vitepress/theme`）

- `defineVipExtendsTheme(theme?, options?)`（default export）
- `VipExtendsThemeOptions`：`layoutSlots?`、`homePage?`（`false` | `VipHomePageThemeOptions` | 自定义 VNode 函数）
- `VipHomePageThemeOptions`：`tables?`、`tableSectionId?`、`showTeam?`、`showOpenSource?`、`defaultSlot?`
- 行为：extends VitePress DefaultTheme；注册 Element Plus 基础组件 + `VipMermaid`；`layout-bottom` 注入首页块 + 用户插槽 + `VipFooter` / `VipBackTop`；`setupVipAppBuildLog`

### `defaultVipThemeConfig` 站点默认

- `lang: 'zh-CN'`
- `srcDir: './'`、`srcExclude: ['node_modules', 'scripts']`
- `outDir: './dist'`、`cacheDir: './.vitepress/.vite'`
- `assetsDir: 'static'`、`metaChunk: true`

## 配置

### `defineVipVitepressConfig` 第二参数 `DefineVipVitepressConfigOptions`

- `mermaid?: boolean | VipMermaidOptions`
- `appBuildLog?: VipAppBuildLogOptions`

### `getVipThemeConfig` / `VipThemeConfig`

- 标准 VitePress `themeConfig` 字段
- `vipFooter?: false | VipFooterConfig`（配合 `enableVipFooter`）
- `socialLinks` 支持数组或 `VipSocialLinkMap` 按 icon 覆盖

### peer / 依赖注意

- `element-plus` 锁定 2.13.x（主题内注册组件）
- `vitepress` 1.6.x
- 品牌资源经 `@142vip/cdn` `getProductionCdnUrl`

## 最佳实践

- 根站：`defineVipVitepressConfig(config, { mermaid: true })` + `.vitepress/theme/index.ts` 使用 `defineVipExtendsTheme({ homePage: ... })`
- 首页表格数据用 `getTableData`（根站 `project-data.ts`）读 sidebar + `package.json`，勿维护重复白名单
- Mermaid 主题在 fence info 或 `configureVipMermaid` 设置；全屏与视口逻辑在 `VipMermaid.vue`
- 社交链接只补 `github` / `gitee` 时用 `resolveVipSocialLinks({ github: '...' })`
- 修改公开 API 时同步 `apps/vitepress-demo` 与根 `.vitepress/`

## 构建

`unbuild` 双格式；`sideEffects` 含 `**/*.css`、`dist/theme/**`

```shell
cd packages/vitepress && pnpm build
```

## 验证

```shell
cd packages/vitepress && pnpm build && pnpm typecheck
cd apps/vitepress-demo && pnpm build
pnpm dev              # 根文档站 :8080
cd apps/vitepress-demo && pnpm dev   # :3080
```

## 演示

- `apps/vitepress-demo`：主题与组件用法
- 根仓库 `.vitepress/` + `pnpm dev`：core-x 文档站完整集成
