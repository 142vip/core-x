import { VipContactAuthor } from '@142vip/vitepress/components'
import defineVipExtendsTheme from '@142vip/vitepress/theme'
import { h } from 'vue'
import { demoExampleTableData, demoOpenSourceTableData } from './data/demo-table-data'
import './style.css'

/**
 * 扩展默认主题：首页由 defineVipExtendsTheme 注入 VipHomePage；页脚 / 回到顶部见 enableVipFooter
 * @see https://vitepress.dev/zh/guide/extending-default-theme
 */
export default defineVipExtendsTheme(undefined, {
  homePage: {
    tables: [
      { title: '最佳实践', data: demoExampleTableData },
      { title: '开源模块', data: demoOpenSourceTableData },
    ],
    tableSectionId: 'version-table',
    defaultSlot: () => h('section', { id: 'contact-author' }, [h(VipContactAuthor)]),
  },
})
