[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / logDryRunSteps

# 函数: logDryRunSteps()

> **logDryRunSteps**(`command`, `steps`): `void`

定义于: [packages/fairy-cli/src/utils/dry-run.util.ts:7](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/fairy-cli/src/utils/dry-run.util.ts#L7)

试运行：逐条打印将要执行的操作，不触发副作用。
各子命令在 `--dry-run` 时调用，日志格式统一便于对照真实执行。

## 参数

### command

`string`

### steps

`string`[]

## 返回

`void`
