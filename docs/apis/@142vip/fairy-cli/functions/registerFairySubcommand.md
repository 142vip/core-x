[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / registerFairySubcommand

# 函数: registerFairySubcommand()

> **registerFairySubcommand**\<`TArgs`\>(`program`, `commandKey`, `action`, `setup?`): `void`

定义于: [packages/fairy-cli/src/utils/command.util.ts:8](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/fairy-cli/src/utils/command.util.ts#L8)

fairy-cli 子命令标准注册：业务参数 → dry-run / vip → action

## 类型参数

### TArgs

`TArgs` *extends* `unknown`[]

## 参数

### program

[`VipPackageCliCommander`](../../utils/classes/VipPackageCliCommander.md)

### commandKey

[`CommandEnum`](../enumerations/CommandEnum.md)

### action

(...`args`) => `void` \| `Promise`\<`void`\>

### setup?

(`command`) => `void`

## 返回

`void`
