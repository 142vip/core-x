import { defineVipTypedocConfig } from '@142vip/vitepress'
import { defaultTypedocConfig } from './typedoc.config.js'

export default defineVipTypedocConfig({
  ...defaultTypedocConfig,
  out: 'docs/wiki',
  plugin: [
    'typedoc-plugin-markdown',
    'typedoc-github-wiki-theme',
    'typedoc-plugin-frontmatter',
    'typedoc-plugin-remark',
  ],
  sidebar: {
    autoConfiguration: true,
    heading: 'API',
  },
})
