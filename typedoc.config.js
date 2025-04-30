import { defineVipTypedocConfig } from '@142vip/vitepress'

export default defineVipTypedocConfig({
  entryPointStrategy: 'packages',
  entryPoints: [
    'packages/axios',
    'packages/changelog',
    'packages/commit-linter',
    'packages/copyright',
    'packages/eslint-config',
    'packages/fairy-cli',
    'packages/grpc',
    'packages/nest',
    'packages/nest-redis',
    'packages/nest-typeorm',
    'packages/oauth',
    'packages/redis',
    'packages/release-version',
    'packages/typeorm',
    'packages/utils',
  ],
  name: 'API 参考',
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
  // logLevel: 'Verbose',
})
