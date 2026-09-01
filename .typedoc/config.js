import path from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * 仓库根目录（.typedoc 的上一级）
 * TypeDoc 将配置内相对路径基于「配置文件所在目录」解析（而非运行 cwd），
 * 故统一以仓库根绝对路径为基准，保证从任意目录执行 `pnpm typedoc:*` 结果一致。
 */
export const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

/**
 * 默认配置（共享真源，供 api/md/wiki 三个目标配置复用）
 * - 插件参考：https://typedoc-plugin-markdown.org/plugins
 */
export const defaultTypedocConfig = {
  entryPointStrategy: 'packages',
  entryPoints: [
    path.join(repoRoot, 'packages/axios'),
    path.join(repoRoot, 'packages/changelog'),
    path.join(repoRoot, 'packages/commit-linter'),
    path.join(repoRoot, 'packages/copyright'),
    path.join(repoRoot, 'packages/data-source'),
    path.join(repoRoot, 'packages/eslint-config'),
    path.join(repoRoot, 'packages/fairy-cli'),
    path.join(repoRoot, 'packages/grpc'),
    path.join(repoRoot, 'packages/nest'),
    path.join(repoRoot, 'packages/nest-redis'),
    path.join(repoRoot, 'packages/nest-typeorm'),
    path.join(repoRoot, 'packages/oauth'),
    path.join(repoRoot, 'packages/redis'),
    path.join(repoRoot, 'packages/release-version'),
    path.join(repoRoot, 'packages/open-source'),
    path.join(repoRoot, 'packages/typeorm'),
    path.join(repoRoot, 'packages/utils'),
  ],
  name: 'API 参考',
  logLevel: 'Verbose',
}
