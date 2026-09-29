/**
 * commit-linter 单测夹具（非发布配置）。
 *
 * 用途：`test/commit.util.spec.ts` 校验 `loadCommitLinterConfigForCli(-f)` 能加载指定文件，
 * 并与内置 `config/default-commit-linter.config.cjs` 合并。
 *
 * 运行：仅被测试用 `path.join(__dirname, 'fixtures/commit-linter.fixture.cjs')` 引用。
 */
const { defineVipCommitLinterConfig } = require('@142vip/commit-linter')

module.exports = defineVipCommitLinterConfig({
  scopes: ['custom-scope'],
})
