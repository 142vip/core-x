import type { VipPackageJSON, VipProject } from '@142vip/vitepress'
import { resolveWorkspacePackageMaps } from '@142vip/vitepress/workspace'
import { ProjectId, rootSidebarConfig } from '../../sidebar'

/**
 * 解析 workspace 中各包 / 应用的 package.json。
 * glob pattern 须为字面量（Vite 静态分析），由本文件集中维护。
 */
const { packagesByDir, appsByDir } = resolveWorkspacePackageMaps(
  import.meta.glob('../../../packages/*/package.json', { eager: true }),
  import.meta.glob('../../../apps/*/package.json', { eager: true }),
)

/** 首页表格数据类别：与侧栏「最佳实践 / 开源模块」对应 */
export type HomeTableKind = 'example' | 'project'

/**
 * 将 package.json 组装为表格行（VipProject）。
 * 文档链接遵循 VitePress rewrite：README → index、CHANGELOG → changelog。
 */
function createProjectRow(
  pkg: VipPackageJSON,
  options: {
    id: string
    dir: string
    scope: 'packages' | 'apps'
    private?: boolean
  },
): VipProject {
  const { id, dir, scope, private: isPrivate } = options
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
 * 首页表格数据（与 `rootSidebarConfig` 同源，增删包/Demo 只改侧栏）。
 *
 * @param kind - `example`：侧栏「最佳实践」→ apps/*；`project`：其余开源分组 → packages/*
 */
export function getTableData(kind: HomeTableKind): VipProject[] {
  const isExample = kind === 'example'
  const rows: VipProject[] = []

  for (const { items = [], text = '' } of rootSidebarConfig) {
    const isDemoGroup = text.includes(ProjectId.DEMO)
    // example 只扫 Demo 分组；project 跳过 Demo 分组
    if (isExample !== isDemoGroup) {
      continue
    }

    const groupId = text.split(/\s/)[0] || text

    for (const { text: itemText = '' } of items) {
      if (isExample) {
        const dir = itemText.trim()
        if (dir.length === 0) {
          continue
        }
        const pkg = appsByDir[dir]
        if (pkg == null) {
          continue
        }
        rows.push(createProjectRow(pkg, {
          id: groupId,
          private: true,
          dir,
          scope: 'apps',
        }))
        continue
      }

      // project：仅 @142vip/*，目录名为 scope 后一段
      const dir = itemText.split('@142vip/')[1]
      if (dir == null || dir.length === 0) {
        continue
      }
      const pkg = packagesByDir[dir]
      if (pkg == null) {
        continue
      }
      rows.push(createProjectRow(pkg, {
        id: groupId,
        dir,
        scope: 'packages',
      }))
    }
  }

  return rows
}
