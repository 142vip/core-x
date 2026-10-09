const { defineVipCommitLinterConfig } = require('@142vip/commit-linter')

/**
 * `fa commit` 未找到用户 `commit-linter.config.*` 时的内置默认。
 * `scopeGlobs` 仅在仓库根存在 `pnpm-workspace.yaml` 时扫描 Monorepo 包名（可被 CLI `-s` 覆盖）。
 * 单包仓库无需在 `fairy.config` 关闭 `scopeGlobs`。
 */
module.exports = defineVipCommitLinterConfig({
  scopeGlobs: ['./apps/*', './packages/*'],
})
