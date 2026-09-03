import type { VipProject } from '@142vip/vitepress'
import { OPEN_SOURCE_ADDRESS } from '@142vip/open-source'

const GITHUB_APPS = `${OPEN_SOURCE_ADDRESS.GITHUB_REPO_CORE_X}/tree/main/apps`
const GITHUB_PACKAGES = `${OPEN_SOURCE_ADDRESS.GITHUB_REPO_CORE_X}/tree/main/packages`

/**
 * vitepress-demo 首页表格模拟数据。
 * 独立 Demo 无 workspace glob，用静态数据预览 `VipProjectTable` 多端布局。
 */
export const demoExampleTableData: VipProject[] = [
  {
    name: 'egg-demo',
    version: '0.0.1-alpha.7',
    description: '@142vip/egg 相关包和插件的使用 Demo',
    id: '🤡',
    private: true,
    changelog: `${GITHUB_APPS}/egg-demo/CHANGELOG.md`,
    readme: `${GITHUB_APPS}/egg-demo/`,
    sourceCode: `${GITHUB_APPS}/egg-demo/`,
  },
  {
    name: 'nest-demo',
    version: '0.0.1-alpha.6',
    description: '@142vip/nest 周边模块集成与启动示例',
    id: '🤡',
    private: true,
    changelog: `${GITHUB_APPS}/nest-demo/CHANGELOG.md`,
    readme: `${GITHUB_APPS}/nest-demo/`,
    sourceCode: `${GITHUB_APPS}/nest-demo/`,
  },
  {
    name: 'vuepress-demo',
    version: '0.0.1-alpha.5',
    description: '@142vip/vuepress 主题封装演示',
    id: '🤡',
    private: true,
    changelog: `${GITHUB_APPS}/vuepress-demo/CHANGELOG.md`,
    readme: `${GITHUB_APPS}/vuepress-demo/`,
    sourceCode: `${GITHUB_APPS}/vuepress-demo/`,
  },
  {
    name: 'vitepress-demo',
    version: '0.0.1-alpha.6',
    description: '@142vip/vitepress 主题拓展与 Mermaid 演示',
    id: '🤡',
    private: true,
    changelog: `${GITHUB_APPS}/vitepress-demo/CHANGELOG.md`,
    readme: `${GITHUB_APPS}/vitepress-demo/`,
    sourceCode: `${GITHUB_APPS}/vitepress-demo/`,
  },
]

export const demoOpenSourceTableData: VipProject[] = [
  {
    name: '@142vip/utils',
    version: '0.0.1-alpha.57',
    description: '通用工具库：日期、Lodash 扩展、Monorepo 辅助等',
    id: '💵',
    changelog: `${GITHUB_PACKAGES}/utils/CHANGELOG.md`,
    readme: `${GITHUB_PACKAGES}/utils/`,
    sourceCode: `${GITHUB_PACKAGES}/utils/`,
  },
  {
    name: '@142vip/vitepress',
    version: '0.0.1-alpha.28',
    description: 'VitePress 主题拓展、Element Plus 与 Mermaid 组件',
    id: '💵',
    changelog: `${GITHUB_PACKAGES}/vitepress/CHANGELOG.md`,
    readme: `${GITHUB_PACKAGES}/vitepress/`,
    sourceCode: `${GITHUB_PACKAGES}/vitepress/`,
  },
  {
    name: '@142vip/fairy-cli',
    version: '0.0.1-alpha.42',
    description: '工程化 CLI：发布、构建与 Agent Skills 同步',
    id: '💵',
    changelog: `${GITHUB_PACKAGES}/fairy-cli/CHANGELOG.md`,
    readme: `${GITHUB_PACKAGES}/fairy-cli/`,
    sourceCode: `${GITHUB_PACKAGES}/fairy-cli/`,
  },
  {
    name: '@142vip/nest-starter',
    version: '0.0.1-alpha.18',
    description: 'Nest 应用启动模板与通用中间件封装',
    id: '💵',
    changelog: `${GITHUB_PACKAGES}/nest-starter/CHANGELOG.md`,
    readme: `${GITHUB_PACKAGES}/nest-starter/`,
    sourceCode: `${GITHUB_PACKAGES}/nest-starter/`,
  },
]
