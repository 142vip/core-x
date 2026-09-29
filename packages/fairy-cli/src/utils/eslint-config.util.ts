import { vipConfig } from '@142vip/utils'
import { resolveFairyCliBundledConfig } from './pkg.util'

/** 与 `@142vip/eslint-config` 同源，便于从 `fa` 包引用 */
export { defineVipEslintConfig } from '@142vip/eslint-config'

/** cosmiconfig 模块名：`eslint.config.js` / `eslint.config.mjs` 等 */
export const ESLINT_CONFIG_MODULE_NAME = 'eslint'

/** 随包发布的内置默认配置（无用户 `eslint.config.*` 时） */
export function resolveBundledDefaultEslintConfigPath(): string {
  return resolveFairyCliBundledConfig('default-eslint.config.mjs')
}

/**
 * ESLint `--config` 路径：CLI `-f` → 用户 `eslint.config.*` → 内置默认。
 */
export function resolveEslintConfigPath(cliConfigPath?: string): string {
  if (cliConfigPath != null && cliConfigPath !== '') {
    return cliConfigPath
  }
  const discovered = vipConfig.searchConfigFilePath(ESLINT_CONFIG_MODULE_NAME)
  if (discovered != null && discovered !== '') {
    return discovered
  }
  return resolveBundledDefaultEslintConfigPath()
}
