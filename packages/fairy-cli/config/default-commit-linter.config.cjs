const { defineVipCommitLinterConfig } = require('@142vip/commit-linter')

/**
 * `fa commit` 未找到用户 `commit-linter.config.*` 时的内置默认。
 * `scopeGlobs` 会扫描 Monorepo 包名并并入 scope 白名单（可被 CLI `-s` 覆盖）。
 */
module.exports = defineVipCommitLinterConfig({
  scopeGlobs: ['./apps/*', './packages/*'],
})
