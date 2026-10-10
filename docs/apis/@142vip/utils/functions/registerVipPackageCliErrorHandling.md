[API 参考](../../../index.md) / [@142vip/utils](../index.md) / registerVipPackageCliErrorHandling

# 函数: registerVipPackageCliErrorHandling()

> **registerVipPackageCliErrorHandling**(`root`, `presentation`): `void`

定义于: [packages/utils/src/pkgs/cli-presentation.ts:277](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/cli-presentation.ts#L277)

注册包 CLI 解析错误处理：屏蔽裸 `error: unknown command`，help / version 正常退出。
`-h` 仍走 Commander 默认 `formatHelp`，本函数只影响异常路径。

## 参数

### root

[`VipCommander`](../classes/VipCommander.md)

### presentation

[`VipPackageCliErrorPresentation`](../interfaces/VipPackageCliErrorPresentation.md)

## 返回

`void`
