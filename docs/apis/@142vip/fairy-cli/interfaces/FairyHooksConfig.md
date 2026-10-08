[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / FairyHooksConfig

# 接口: FairyHooksConfig

定义于: [packages/fairy-cli/src/config.ts:17](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L17)

`fairy.config` → `hooks`：npm 生命周期、git 钩子、自定义阶段统一配置。
- git：`precommit`、`commitmsg` 等（写入 `.git/hooks` 时映射为 `pre-commit` / `commit-msg`）
- npm / 自定义：`preinstall`、`postinstall` 等（`fa i` / `fa ci` 执行；也可用 `fa install --hook-only`）

## 可索引

> \[`hookName`: `string`\]: `boolean` \| [`FairyHookCommand`](../type-aliases/FairyHookCommand.md) \| `undefined`

## 属性

### preserveUnused?

> `optional` **preserveUnused?**: `boolean` \| `string`[]

定义于: [packages/fairy-cli/src/config.ts:18](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L18)
