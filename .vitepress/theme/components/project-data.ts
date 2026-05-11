import type { VipProject } from '@142vip/vitepress'
import { resolveWorkspacePackageMaps } from '@142vip/vitepress/workspace'
import { ProjectId, sidebarConfig } from '../../sidebar'

const { packagesByDir, appsByDir } = resolveWorkspacePackageMaps(
  import.meta.glob('../../../packages/*/package.json', { eager: true }),
  import.meta.glob('../../../apps/*/package.json', { eager: true }),
)

const DEMO_APP_DIRS = ['egg-demo', 'nest-demo', 'vuepress-demo', 'vitepress-demo'] as const

export function getCoreProjectData(): VipProject[] {
  const rows: VipProject[] = []
  for (const { items = [], text = '' } of sidebarConfig) {
    if (text.includes(ProjectId.DEMO))
      continue
    for (const { text: pkgName = '' } of items) {
      const dir = pkgName.split('@142vip/')[1]
      const base = dir ? packagesByDir[dir] : undefined
      if (!base)
        continue
      rows.push({
        ...base,
        id: text.split(' ')[0],
        changelog: `../changelogs/${dir}/changelog.html`,
        readme: `../packages/${dir}/index.html`,
        sourceCode: `https://github.com/142vip/core-x/tree/main/packages/${dir}/`,
      })
    }
  }
  return rows
}

export function getExampleDemoTableData(): VipProject[] {
  const rows: VipProject[] = []
  for (const dir of DEMO_APP_DIRS) {
    const pkg = appsByDir[dir]
    if (!pkg)
      continue
    rows.push({
      ...pkg,
      private: true,
      id: '🤡',
      changelog: `../changelogs/${dir}/changelog.html`,
      readme: `../apps/${dir}/index.html`,
      sourceCode: `https://github.com/142vip/core-x/tree/main/apps/${dir}/`,
    })
  }
  return rows
}
