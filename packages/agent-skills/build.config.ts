import { defineBuildConfig } from 'unbuild'

/**
 * @142vip/agent-skills 包构建配置。
 *
 * 说明：
 * - `skills/` 与 `templates/` 是运行时静态资源（被 cli 直接读取），通过 `files` 字段打包发布，
 *   不内联到 dist
 * - `@142vip/utils` 走 monorepo workspace 引用，构建期 inline 依赖（其余 unbuild 默认行为）
 */
export default defineBuildConfig({
  entries: [
    'src/index',
    'src/cli',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})
