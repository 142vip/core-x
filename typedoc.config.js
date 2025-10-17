/**
 * 默认配置
 * - 插件参考：https://typedoc-plugin-markdown.org/plugins
 */
export const defaultTypedocConfig = {
  entryPointStrategy: 'packages',
  entryPoints: [
    'packages/axios',
    'packages/changelog',
    'packages/commit-linter',
    'packages/copyright',
    'packages/data-source',
    'packages/eslint-config',
    'packages/fairy-cli',
    'packages/grpc',
    'packages/nest',
    'packages/nest-redis',
    'packages/nest-typeorm',
    'packages/oauth',
    'packages/redis',
    'packages/release-version',
    'packages/open-source',
    'packages/typeorm',
    'packages/utils',
  ],
  name: 'API 参考',
  logLevel: 'Verbose',
}
