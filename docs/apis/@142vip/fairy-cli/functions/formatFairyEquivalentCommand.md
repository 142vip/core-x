[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / formatFairyEquivalentCommand

# 函数: formatFairyEquivalentCommand()

> **formatFairyEquivalentCommand**(`subcommand`, `args`, `flags`): `string` \| `undefined`

定义于: [packages/fairy-cli/src/utils/equivalent-command.util.ts:62](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/equivalent-command.util.ts#L62)

把本次生效参数写成 `fa <command> ...`。
含命令行显式参数和配置补上的参数，方便直接粘贴。没有超出内置默认的参数时返回 `undefined`。

## 参数

### subcommand

`string`

### args

`object`

### flags

readonly [`FairyEquivalentFlag`](../interfaces/FairyEquivalentFlag.md)[]

## 返回

`string` \| `undefined`
