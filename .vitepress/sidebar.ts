import type { SidebarConfig, VipPackageJSON, VipProject } from '@142vip/vitepress'

enum ProjectId {
  Tools = '通用工具',
  Egg = 'Egg.js框架',
  Nest = 'Nest.js框架',
  Blog = '博客工具',
  Infra = '工程化',
  Demo = '演示Demo',
}

/**
 * 侧边栏
 */
export const sidebarConfig: SidebarConfig = [
  {
    text: `🏆 ${ProjectId.Infra}`,
    items: [
      { text: '@142vip/fairy-cli', link: '/packages/fairy-cli/index.md' },
      { text: '@142vip/changelog', link: '/packages/changelog/index.md' },
      { text: '@142vip/release-version', link: '/packages/release-version/index.md' },
      { text: '@142vip/eslint-config', link: '/packages/eslint-config/index.md' },
      { text: '@142vip/commit-linter', link: '/packages/commit-linter/index.md' },
    ],
  },
  {
    text: `🛠 ${ProjectId.Tools}`,
    items: [
      { text: '@142vip/utils', link: '/packages/utils/index.md' },
      { text: '@142vip/axios', link: '/packages/axios/index.md' },
      { text: '@142vip/oauth', link: '/packages/oauth/index.md' },
      { text: '@142vip/redis', link: '/packages/redis/index.md' },
      { text: '@142vip/typeorm', link: '/packages/typeorm/index.md' },
      { text: '@142vip/copyright', link: '/packages/copyright/index.md' },
    ],
  },
  {
    text: `🐣 ${ProjectId.Egg}`,
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
    text: `🦅 ${ProjectId.Nest}`,
    items: [
      { text: '@142vip/nest', link: '/packages/nest/index.md' },
      { text: '@142vip/nest-redis', link: '/packages/nest-redis/index.md' },
      { text: '@142vip/nest-typeorm', link: '/packages/nest-typeorm/index.md' },
    ],
  },
  {
    text: `💻 ${ProjectId.Blog}`,
    items: [
      { text: '@142vip/vitepress', link: '/packages/vitepress/index.md' },
      { text: '@142vip/vuepress', link: '/packages/vuepress/index.md' },
    ],
  },
  {
    text: `🎮 ${ProjectId.Demo}`,
    items: [
      { text: 'egg-demo', link: '/apps/egg-demo/index.md' },
      { text: 'nest-demo', link: '/apps/nest-demo/index.md' },
      { text: 'vitepress-demo', link: '/apps/vitepress-demo/index.md' },
      { text: 'vuepress-demo', link: '/apps/vuepress-demo/index.md' },
    ],
  },
]

/**
 * 获取基本包信息
 * - 注意目录格式，例如：@packages/utils
 * @vite-ignore
 */
async function getBasePkgJSON(pkgDirName: string): Promise<VipPackageJSON> {
  // 参考格式：@packages/xxx @apps/xxx
  return await import(`@packages/${pkgDirName}/package.json`)
}

/**
 * 获取apps目录下的模块
 * - @apps/vitepress-demo
 */
async function getAppsPkgJSON(pkgDirName: string): Promise<VipPackageJSON> {
  // 参考格式：@packages/xxx @apps/xxx
  return await import(`@apps/${pkgDirName}/package.json`)
}

/**
 * 动态获取模块信息
 * - 注意：遍历侧边栏
 */
export async function getCoreProjectData(): Promise<VipProject[]> {
  const coreProjects: VipProject[] = []
  for (const { items, text } of sidebarConfig) {
    // 过滤掉apps下的模块
    if (text?.includes(ProjectId.Demo)) {
      continue
    }
    for (const { text: pkgName } of items) {
      const pkgDirName = pkgName.split('@142vip/')[1]
      const basePkg = await getBasePkgJSON(`${pkgDirName}`)
      coreProjects.push({
        ...basePkg,
        // 约定：图标+文字
        id: text.split(' ')[0],
        changelog: `../changelogs/${pkgDirName}/changelog.html`,
        readme: `../packages/${pkgDirName}/index.html`,
        sourceCode: `https://github.com/142vip/core-x/tree/main/packages/${pkgDirName}/`,
      })
    }
  }
  return coreProjects
}

/**
 * demo项目，用于项目展示
 */
export async function getExampleDemoTableData(): Promise<VipProject[]> {
  const pkgNames = ['egg-demo', 'nest-demo', 'vuepress-demo', 'vitepress-demo']

  const exampleDemos: VipProject[] = []
  for (const pkgDirName of pkgNames) {
    const pkg = await getAppsPkgJSON(`${pkgDirName}`)
    exampleDemos.push({
      ...pkg,
      private: true,
      id: '🤡',
      changelog: `../changelogs/${pkgDirName}/changelog.html`,
      readme: `../apps/${pkgDirName}/index.html`,
      sourceCode: `https://github.com/142vip/core-x/tree/main/apps/${pkgDirName}/`,
    })
  }
  return exampleDemos
}

/**
 * 根据侧边栏获取变更日志侧边栏
 */
export function getChangelogsSidebar(): SidebarConfig {
  const changelogsSidebar: SidebarConfig = []
  for (const { items } of sidebarConfig) {
    for (const { text: pkgName } of items) {
      // 兼容apps目录
      const pkgDirName = pkgName?.includes('@142vip') ? pkgName.split('@142vip/')[1] : pkgName
      changelogsSidebar.push({
        text: pkgName,
        link: `/changelogs/${pkgDirName}/changelog.md`,
      })
    }
  }
  return changelogsSidebar
}
