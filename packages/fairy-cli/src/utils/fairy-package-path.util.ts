import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'

const localRequire = createRequire(__filename)

/**
 * 包根目录（`src/utils` 与 `dist/shared` 构建产物均可解析）。
 * 禁止通过本包 npm 名 import 自身；读取 `config/` 等资源用此工具。
 */
export function resolveFairyCliPackageRoot(): string {
  return dirname(localRequire.resolve('../../package.json'))
}

/** 内置 `config/` 下文件的绝对路径 */
export function resolveFairyCliBundledConfig(...segments: string[]): string {
  return join(resolveFairyCliPackageRoot(), 'config', ...segments)
}
