import { defineFairyConfig } from '@142vip/fairy-cli'

/**
 * core-x 工程化配置。
 *
 * 默认已含 `precommit` / `commitmsg` / `preinstall` 与 `clean*` 等脚本，此处只写项目差异。
 * `hooks` 同名键整段覆盖；`scripts` 同名时仍低于根 `package.json` → `scripts`。
 */
export default defineFairyConfig({
  hooks: {
    postinstall: [
      'pnpm build:packages',
    ],
  },
  commitLinter: {
    scopeGlobs: [
      './apps/*',
      './packages/*',
    ],
  },
  scripts: {
    'build:docs-proxy': 'NEED_PROXY=true npx vitepress build && pnpm typedoc:api',
    'build': 'pnpm build:packages && pnpm build:apps && pnpm build:docs && pnpm build:docs-proxy',
    'dev': 'npx vitepress dev --port 8080 --host --force --strictPort --open',
  },
})
