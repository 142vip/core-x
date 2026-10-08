[API 参考](../../../index.md) / [@142vip/utils](../index.md) / registerVipCommanderExitOverrideTree

# 函数: registerVipCommanderExitOverrideTree()

> **registerVipCommanderExitOverrideTree**(`root`, `onError`): `void`

定义于: [packages/utils/src/pkgs/commander.ts:248](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/commander.ts#L248)

为命令树注册 `exitOverride`，并屏蔽默认 `error:` stderr（由 `onError` 统一输出）。

## 参数

### root

[`VipCommander`](../classes/VipCommander.md)

### onError

(`error`) => `void`

## 返回

`void`
