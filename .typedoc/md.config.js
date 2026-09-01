import path from 'node:path'
import { defineVipTypedocConfig } from '@142vip/vitepress'
import { defaultTypedocConfig, repoRoot } from './config.js'

export default defineVipTypedocConfig({
  ...defaultTypedocConfig,
  out: path.join(repoRoot, 'docs/apis'),
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
  // 转义 JsDoc 注释内的 `<` `>` `{` `}`，避免裸泛型（如 Partial<T>）被 Vue 编译器误判为 HTML 标签导致 vitepress build 失败
  sanitizeComments: true,
})
