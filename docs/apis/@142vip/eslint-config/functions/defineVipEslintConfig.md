[API 参考](../../../index.md) / [@142vip/eslint-config](../index.md) / defineVipEslintConfig

# 函数: defineVipEslintConfig()

> **defineVipEslintConfig**(`options?`, ...`userConfigs`): `Promise`\<`TypedFlatConfigItem`[]\>

定义于: [eslint.config.ts:107](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/eslint-config/src/eslint.config.ts#L107)

定义 Eslint 配置

参考：https://github.com/antfu/eslint-config

第一参只传 antfu 全局选项。`files` 不能放进 antfu 第一参，否则会直接抛错。
无 `files` 的 `rules` 作为全局覆盖，插在 antfu 之后、markdown 代码块降级之前。
带 `files` 的规则，以及第二参起的配置，排在整份配置最后，避免 Vue 等插件规则把用户配置盖回去。

## 参数

### options?

`EslintConfigOptions` = `{}`

### userConfigs

...`Awaitable`\<`TypedFlatConfigItem` \| `TypedFlatConfigItem`[]\>[]

## 返回

`Promise`\<`TypedFlatConfigItem`[]\>
