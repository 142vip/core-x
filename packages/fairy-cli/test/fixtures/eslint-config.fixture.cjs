/**
 * eslint-config 单测夹具（非发布配置）。
 *
 * 用途：Jest `moduleNameMapper`（见 `jest.config.ts`）在单测中顶替 `@142vip/eslint-config`，
 * 避免 `eslint-config.util` re-export 时拉取完整 ESLint 配置依赖链。
 *
 * 运行：由 Jest 自动映射；业务代码不引用本文件。
 */
module.exports = {
  defineVipEslintConfig: async () => [],
}
