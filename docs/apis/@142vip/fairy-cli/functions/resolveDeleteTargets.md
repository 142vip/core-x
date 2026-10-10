[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / resolveDeleteTargets

# 函数: resolveDeleteTargets()

> **resolveDeleteTargets**(`cwd`, `patterns`): `Promise`\<`string`[]\>

定义于: [packages/fairy-cli/src/utils/clean-path.util.ts:69](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/clean-path.util.ts#L69)

根据 include / exclude glob 列表解析待删除的绝对路径。
exclude 规则以 `!` 开头，例如 `!` + `**` + `/node_modules/` + `**` + `/dist`。

## 参数

### cwd

`string`

### patterns

`string`[]

## 返回

`Promise`\<`string`[]\>
