import defineVipExtendsTheme from '@142vip/vitepress/theme'
import { getTableData } from './components/project-data'
import './style.css'

/**
 * 自定义主题
 * - `VipHomePage` 由 defineVipExtendsTheme 注入，挂在首页 Markdown 正文之后、页脚之前
 * @see https://vitepress.dev/guide/extending-default-theme#layout-slots
 */
export default defineVipExtendsTheme(undefined, {
  homePage: {
    tables: [
      { title: '最佳实践', data: getTableData('example') },
      { title: '开源模块', data: getTableData('project') },
    ],
  },
})
