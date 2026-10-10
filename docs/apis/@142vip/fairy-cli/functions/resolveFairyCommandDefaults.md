[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / resolveFairyCommandDefaults

# 函数: resolveFairyCommandDefaults()

> **resolveFairyCommandDefaults**\<`T`\>(`command`, `args`, `config`, `keys`): [`FairyCommandDefaults`](../interfaces/FairyCommandDefaults.md)\<`T`\>

定义于: [packages/fairy-cli/src/config.ts:196](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L196)

把 `fairy.config` 里的命令默认参数填进已解析的选项。
Commander 会给没写的 flag 填内置默认值，所以不能用「值是否为空」判断用户有没有传。
只有 `getOptionValueSource === 'cli'` 才算用户手动传入，此时不覆盖。
`fromConfig` 非空时，调用方应打印等价终端命令。

## 类型参数

### T

`T` *extends* `object`

## 参数

### command

#### getOptionValueSource

(`key`) => `string` \| `undefined`

### args

`T`

### config

`Partial`\<`T`\> \| `undefined`

### keys

readonly keyof `T` & `string`[]

## 返回

[`FairyCommandDefaults`](../interfaces/FairyCommandDefaults.md)\<`T`\>
