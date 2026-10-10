[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / FairyAiConfig

# 接口: FairyAiConfig

定义于: [packages/fairy-cli/src/config.ts:81](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L81)

`fairy.config` → `ai`：`fa ai` 的默认参数。命令行显式传入优先

## 属性

### check?

> `optional` **check?**: `boolean`

定义于: [packages/fairy-cli/src/config.ts:85](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L85)

`--check`

***

### dryRun?

> `optional` **dryRun?**: `boolean`

定义于: [packages/fairy-cli/src/config.ts:89](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L89)

`--dry-run`

***

### force?

> `optional` **force?**: `boolean`

定义于: [packages/fairy-cli/src/config.ts:87](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L87)

`--force`

***

### target?

> `optional` **target?**: `string`

定义于: [packages/fairy-cli/src/config.ts:83](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L83)

`-t,--target`；未写时仍可用 `AGENT_SKILLS_TARGET`，再回退 cwd
