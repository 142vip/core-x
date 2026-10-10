[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / logFairyEquivalentCommand

# 函数: logFairyEquivalentCommand()

> **logFairyEquivalentCommand**(`subcommand`, `args`, `fromConfig`, `flags`): `void`

定义于: [packages/fairy-cli/src/utils/equivalent-command.util.ts:81](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/equivalent-command.util.ts#L81)

配置补过参数时打印等价命令。
命令行已经写全时不打印，避免 commit-msg 这类显式调用多一行日志。

## 参数

### subcommand

`string`

### args

`object`

### fromConfig

readonly `string`[]

### flags

readonly [`FairyEquivalentFlag`](../interfaces/FairyEquivalentFlag.md)[]

## 返回

`void`
