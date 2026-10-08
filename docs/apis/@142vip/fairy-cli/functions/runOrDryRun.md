[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / runOrDryRun

# 函数: runOrDryRun()

> **runOrDryRun**(`dryRun`, `command`, `steps`, `run`, `params?`): `Promise`\<`void`\>

定义于: [packages/fairy-cli/src/utils/dry-run.util.ts:26](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/dry-run.util.ts#L26)

`dryRun` 为 true 时只打印参数与步骤；否则执行 `run`。

## 参数

### dryRun

`boolean` \| `undefined`

### command

`string`

### steps

`string`[]

### run

() => `void` \| `Promise`\<`void`\>

### params?

readonly [`VipCliDryRunParam`](../../utils/interfaces/VipCliDryRunParam.md)[]

## 返回

`Promise`\<`void`\>
