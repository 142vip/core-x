[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / deleteByPatterns

# 函数: deleteByPatterns()

> **deleteByPatterns**(`patterns`, `options?`): `Promise`\<`string`[]\>

定义于: [packages/fairy-cli/src/utils/clean-path.util.ts:115](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/clean-path.util.ts#L115)

按 glob 规则删除文件或目录（Node 内置 `fs.rm`，无第三方 `del` 依赖）。

## 参数

### patterns

`string`[]

### options?

[`DeleteByPatternsOptions`](../interfaces/DeleteByPatternsOptions.md) = `{}`

## 返回

`Promise`\<`string`[]\>
