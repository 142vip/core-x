import { defineFairyConfig } from '@142vip/fairy-cli'

/**
 * core-x 工程化配置（以 `@142vip/fairy-cli` 为基座）。
 *
 * `hooks.postinstall` 由 `fa i` / `fa ci` 或 `pnpm i` 触发：`@142vip/fairy-cli` 的 npm `postinstall` 会先编译 fa 再执行此处命令。
 * 根 `package.json` 不必再写 lifecycle postinstall。
 *
 * 默认已含 `precommit`（`npx fa lint --fix`）/ `commitmsg` / `preinstall`，以及 `fa run` 的 `clean` / `clean:cache` / `clean:dist` / `clean:hooks` / `sync`。检查代码用 `npx fa lint`，不经过 `fa run`。
 * 全仓检查：`pnpm verify`（根 package.json）= `npx fa lint` + `pnpm test` + `pnpm build:docs`。
 * `hooks` 同名键整段覆盖；`scripts` 同名时仍低于根 `package.json` → `scripts`。
 *
 * `commit.scope` 对应 `check:commit` / commit-msg 的 `-s`。不写 `quiet`，`fa commit` 仍是交互提交。
 * `release` 对应 `pnpm release` 的 `fa release --vip -F ... --check-branch`。
 * `--check-release` 只留在 `check:release` 脚本里，避免 `fa release` 变成只做预检。
 */
export default defineFairyConfig({
  hooks: {
    postinstall: [
      'pnpm build:packages',
    ],
  },
  commit: {
    scope: [
      './apps/*',
      './packages/*',
    ],
  },
  release: {
    vip: true,
    filter: [
      './apps/*',
      './packages/*',
    ],
    checkBranch: [
      'next',
      'main',
    ],
  },
  scripts: {
    'build:docs-proxy': 'NEED_PROXY=true npx vitepress build && pnpm typedoc:api',
    'build': 'pnpm build:packages && pnpm build:apps && pnpm build:docs && pnpm build:docs-proxy',
    'dev': 'npx vitepress dev --port 8080 --host --force --strictPort --open',
  },
})
