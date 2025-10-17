import { defineVipTypedocConfig } from '@142vip/vitepress'
import { defaultTypedocConfig } from './typedoc.config.js'

export default defineVipTypedocConfig({
  ...defaultTypedocConfig,
  out: 'docs/apis',
  plugin: [
    'typedoc-plugin-markdown',
    'typedoc-vitepress-theme',
  ],
  sidebar: {
    autoConfiguration: true,
    format: 'vitepress',
    pretty: false,
    collapsed: true,
  },
  logLevel: 'Verbose',
})
