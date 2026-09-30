import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  declaration: true,
  clean: true,
  rollup: {
    /**
     * `@antfu/eslint-config`（v9+）为纯 ESM；若本包再产出 `index.cjs` 并在 CJS 里 `require()` 它，
     * `fa` 的 CJS 入口会在 CI 触发 `ERR_REQUIRE_ESM`。
     * 因此本包仅发布 ESM（见 `package.json` `exports.import`）。
     */
    emitCJS: false,
    inlineDependencies: true,
  },
})
