import type { DefaultTheme } from 'vitepress/theme'
import { defineVipSidebarConfig, SidebarConfig } from '@142vip/vitepress'

// ============================================================
// 项目分组标识（与导航栏 / 表格分组联动）
// ============================================================

export enum ProjectId {
  BUSINESS = '商业模块',
  TOOLS = '通用工具',
  EGG = 'Egg.js框架',
  NEST = 'Nest.js框架',
  BLOG = '博客工具',
  INFRA = '工程化',
  DEMO = '最佳实践',
}

// ============================================================
// 根路径侧边栏：`/`
// ============================================================

/**
 * 根路径侧边栏（`/`）
 * - 按项目分组展示全部开源包与最佳实践 Demo 入口
 * - 分组顺序同时决定首页表格数据（`getTableData`）：
 *   - 「最佳实践」→ `getTableData('example')`
 *   - 其余开源分组 → `getTableData('project')`
 *   （见 `.vitepress/theme/components/project-data.ts`）
 */
export const rootSidebarConfig = defineVipSidebarConfig([
  {
    text: `💵 ${ProjectId.BUSINESS}`,
    items: [
      { text: '@142vip/data-source', link: '/packages/data-source/index.md' },
    ],
  },
  {
    text: `🎮 ${ProjectId.DEMO}`,
    items: [
      { text: 'egg-demo', link: '/apps/egg-demo/index.md' },
      { text: 'nest-demo', link: '/apps/nest-demo/index.md' },
      { text: 'vitepress-demo', link: '/apps/vitepress-demo/index.md' },
      { text: 'vuepress-demo', link: '/apps/vuepress-demo/index.md' },
    ],
  },
  {
    text: `🏆 ${ProjectId.INFRA}`,
    items: [
      { text: '@142vip/fairy-cli', link: '/packages/fairy-cli/index.md' },
      { text: '@142vip/agent-skills', link: '/packages/agent-skills/index.md' },
      { text: '@142vip/changelog', link: '/packages/changelog/index.md' },
      { text: '@142vip/release-version', link: '/packages/release-version/index.md' },
      { text: '@142vip/eslint-config', link: '/packages/eslint-config/index.md' },
      { text: '@142vip/open-source', link: '/packages/open-source/index.md' },
      { text: '@142vip/commit-linter', link: '/packages/commit-linter/index.md' },
    ],
  },
  {
    text: `🛠 ${ProjectId.TOOLS}`,
    items: [
      { text: '@142vip/utils', link: '/packages/utils/index.md' },
      { text: '@142vip/axios', link: '/packages/axios/index.md' },
      { text: '@142vip/oauth2.0', link: '/packages/oauth/index.md' },
      { text: '@142vip/grpc', link: '/packages/grpc/index.md' },
      { text: '@142vip/redis', link: '/packages/redis/index.md' },
      { text: '@142vip/typeorm', link: '/packages/typeorm/index.md' },
      { text: '@142vip/copyright', link: '/packages/copyright/index.md' },
    ],
  },
  {
    text: `🐣 ${ProjectId.EGG}`,
    items: [
      { text: '@142vip/egg', link: '/packages/egg/index.md' },
      { text: '@142vip/egg-axios', link: '/packages/egg-axios/index.md' },
      { text: '@142vip/egg-grpc-client', link: '/packages/egg-grpc-client/index.md' },
      { text: '@142vip/egg-grpc-server', link: '/packages/egg-grpc-server/index.md' },
      { text: '@142vip/egg-mysql', link: '/packages/egg-mysql/index.md' },
      { text: '@142vip/egg-redis', link: '/packages/egg-redis/index.md' },
      { text: '@142vip/egg-sequelize', link: '/packages/egg-sequelize/index.md' },
      { text: '@142vip/egg-swagger', link: '/packages/egg-swagger/index.md' },
      { text: '@142vip/egg-validate', link: '/packages/egg-validate/index.md' },
    ],
  },
  {
    text: `🦅 ${ProjectId.NEST}`,
    items: [
      { text: '@142vip/nest', link: '/packages/nest/index.md' },
      { text: '@142vip/nest-logger', link: '/packages/nest-logger/index.md' },
      { text: '@142vip/nest-redis', link: '/packages/nest-redis/index.md' },
      { text: '@142vip/nest-starter', link: '/packages/nest-starter/index.md' },
      { text: '@142vip/nest-typeorm', link: '/packages/nest-typeorm/index.md' },
    ],
  },
  {
    text: `💻 ${ProjectId.BLOG}`,
    items: [
      { text: '@142vip/vitepress', link: '/packages/vitepress/index.md' },
      { text: '@142vip/vuepress', link: '/packages/vuepress/index.md' },
    ],
  },
])

// ============================================================
// changelog 侧边栏派生工具（供 changelogSidebarConfig 使用）
// ============================================================

/**
 * 根据根路径侧边栏派生各包的 changelog 侧边栏项
 * - 兼容 apps 目录（无 @142vip 前缀的 pkgName）
 */
function getChangelogsSidebar(): SidebarConfig {
  const changelogsSidebar: SidebarConfig = []
  for (const { items = [] } of rootSidebarConfig) {
    for (const { text: pkgName } of items) {
      const pkgDirName = pkgName?.includes('@142vip') ? pkgName.split('@142vip/')[1] : pkgName
      changelogsSidebar.push({
        text: pkgName,
        link: `/changelogs/${pkgDirName}/changelog.md`,
      })
    }
  }
  return changelogsSidebar
}

/** 获取 xxx-demo 相关左侧导航配置（changelog 页的「最佳实践」分组） */
function getDemoSideBarConfig(): SidebarConfig {
  return getChangelogsSidebar().filter(({ text = '' }) => text.includes('-demo'))
}

/** 获取 @142vip/xx 相关开源模块左侧导航配置（changelog 页的「开源模块」分组） */
function getOpenSourcePkgSideBarConfig(): SidebarConfig {
  return getChangelogsSidebar().filter(({ text = '' }) => !text.includes('-demo'))
}

// ============================================================
// API 文档侧边栏：`/docs/apis/`
// ============================================================

/**
 * 创建 API 文档侧边栏（`/docs/apis/`）
 * - 备用站点：GitHub Wiki 与独立 typedoc 站点
 * - 文档正文：typedoc 生成的侧边栏数据（由调用方读取注入，本文件保持纯数据以兼容浏览器端引用）
 * @param typedocSidebar TypeDoc 生成的侧边栏数据，见 config.ts 中 typedoc-sidebar.json 的读取
 */
export function createDocApiSidebarConfig(typedocSidebar: DefaultTheme.SidebarItem[]): DefaultTheme.SidebarItem {
  return {
    text: 'API',
    items: [
      {
        text: '备用站点',
        items: [
          { text: 'API - wiki', link: 'https://github.com/142vip/core-x/wiki' },
          // 标记为外部链接
          { text: 'API - typedoc', link: '/apis/', target: '_self' },
        ],
      },
      { text: 'API - 文档', items: typedocSidebar },
    ],
  }
}

// ============================================================
// 变更日志侧边栏：`/changelogs/`
// ============================================================

/**
 * 变更日志侧边栏（`/changelogs/`）
 * - 顶部固定展示 core-x 总变更日志
 * - 下方按「最佳实践」/「开源模块」分组派生自根路径侧边栏
 */
export const changelogSidebarConfig: DefaultTheme.SidebarItem = {
  base: '',
  items: [
    { text: '@142vip/core-x', link: '/changelogs/core-x/changelog.html' },
    { text: '✔️ 最佳实践', items: getDemoSideBarConfig() },
    { text: '🧰 开源模块', items: getOpenSourcePkgSideBarConfig() },
  ],
}
