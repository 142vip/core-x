[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / FairyConfig

# 接口: FairyConfig

定义于: [packages/fairy-cli/src/config.ts:96](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L96)

`fairy.config.*` 根配置（cosmiconfig 模块名 `fairy`）。
`commit` / `release` / `ai` 可选。写上之后可直接跑对应命令，不必每次重复参数。

## 属性

### ai?

> `optional` **ai?**: [`FairyAiConfig`](FairyAiConfig.md)

定义于: [packages/fairy-cli/src/config.ts:103](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L103)

***

### commit?

> `optional` **commit?**: [`FairyCommitConfig`](FairyCommitConfig.md)

定义于: [packages/fairy-cli/src/config.ts:101](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L101)

***

### hooks?

> `optional` **hooks?**: [`FairyHooksConfig`](FairyHooksConfig.md)

定义于: [packages/fairy-cli/src/config.ts:97](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L97)

***

### install?

> `optional` **install?**: [`FairyInstallConfig`](FairyInstallConfig.md)

定义于: [packages/fairy-cli/src/config.ts:100](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L100)

***

### release?

> `optional` **release?**: [`FairyReleaseConfig`](FairyReleaseConfig.md)

定义于: [packages/fairy-cli/src/config.ts:102](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L102)

***

### scripts?

> `optional` **scripts?**: [`FairyScriptsConfig`](../type-aliases/FairyScriptsConfig.md)

定义于: [packages/fairy-cli/src/config.ts:99](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L99)

项目脚本；与 `fairyDefaultConfig.scripts` 合并，且低于 `package.json` → `scripts`
