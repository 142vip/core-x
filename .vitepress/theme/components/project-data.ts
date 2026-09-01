import type { VipPackageJSON, VipProject } from '@142vip/vitepress'
import { resolveWorkspacePackageMaps } from '@142vip/vitepress/workspace'
import { ProjectId, rootSidebarConfig } from '../../sidebar'

/**
 * 解析 workspace 中各包 / 应用的 package.json
 * - glob 的 pattern 必须是字面量（Vite 静态分析），由本文件集中维护
 * - 返回「子目录名 → package.json 内容」的索引表
 */
const { packagesByDir, appsByDir } = resolveWorkspacePackageMaps(
  import.meta.glob('../../../packages/*/package.json', { eager: true }),
  import.meta.glob('../../../apps/*/package.json', { eager: true }),
)

/** 首页「最佳实践」表格展示的 Demo 应用目录（对应 apps/ 下的 4 个演示项目） */
const DEMO_APP_DIRS = [
  'egg-demo',
  'nest-demo',
  'vuepress-demo',
  'vitepress-demo',
] as const

/** 组装表格行的附加信息 */
interface ProjectRowOptions {
  /** 项目代号（表格「项目代号」列展示，一般为分组 emoji） */
  id: string
  /** 是否私有项目（决定版本徽章样式，apps 下的 Demo 应用为私有） */
  private?: boolean
  /** 包目录名（packages/ 或 apps/ 下的子目录） */
  dir: string
  /** 所属工作区目录，决定 readme / sourceCode 链接前缀 */
  scope: 'packages' | 'apps'
}

/**
 * 将 package.json 信息组装为表格行数据（VipProject）
 * - 文档链接基于 vitepress 路径重写规则生成（README.md → index.md、CHANGELOG.md → changelog）
 */
function createProjectRow(pkg: VipPackageJSON, options: ProjectRowOptions): VipProject {
  const { id, private: isPrivate, dir, scope } = options
  return {
    ...pkg,
    id,
    private: isPrivate,
    changelog: `../changelogs/${dir}/changelog.html`,
    readme: `../${scope}/${dir}/index.html`,
    sourceCode: `https://github.com/142vip/core-x/tree/main/${scope}/${dir}/`,
  }
}

/**
 * 首页「开源模块」表格数据
 * - 数据源：根路径侧边栏（rootSidebarConfig）的分组顺序与包清单
 * - 跳过「最佳实践」分组（Demo 应用由 getExampleDemoTableData 单独维护）
 */
export function getCoreProjectData(): VipProject[] {
  const rows: VipProject[] = []
  for (const { items = [], text = '' } of rootSidebarConfig) {
    if (text.includes(ProjectId.DEMO))
      continue
    for (const { text: pkgName = '' } of items) {
      // 仅收集 @142vip/* 开源包；无前缀的 Demo 应用（egg-demo 等）在此跳过
      const dir = pkgName.split('@142vip/')[1]
      if (!dir)
        continue
      const pkg = packagesByDir[dir]
      if (!pkg)
        continue
      // 分组文本形如「💵 商业模块」，取空格前的 emoji 作为项目代号
      rows.push(createProjectRow(pkg, {
        id: text.split(/\s/)[0] || text,
        dir,
        scope: 'packages',
      }))
    }
  }
  return rows
}

/**
 * 首页「最佳实践」表格数据
 * - 数据源：apps/ 下的 4 个 Demo 应用（见 DEMO_APP_DIRS）
 */
export function getExampleDemoTableData(): VipProject[] {
  const rows: VipProject[] = []
  for (const dir of DEMO_APP_DIRS) {
    const pkg = appsByDir[dir]
    if (!pkg)
      continue
    rows.push(createProjectRow(pkg, {
      id: '🤡',
      private: true,
      dir,
      scope: 'apps',
    }))
  }
  return rows
}
