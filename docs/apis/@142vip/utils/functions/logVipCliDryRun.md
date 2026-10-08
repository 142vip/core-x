[API 参考](../../../index.md) / [@142vip/utils](../index.md) / logVipCliDryRun

# 函数: logVipCliDryRun()

> **logVipCliDryRun**(`identity`, `subcommand`, `steps`, `options?`): `void`

定义于: [packages/utils/src/pkgs/cli-presentation.ts:141](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/cli-presentation.ts#L141)

统一 dry-run 预览：横幅 + 运行参数 + 编号步骤 + 脚注。
`params` 打印本次实际生效的配置与 CLI 参数，而不只看将执行的命令。

## 参数

### identity

[`VipCliIdentity`](../interfaces/VipCliIdentity.md)

### subcommand

`string`

### steps

`string`[]

### options?

#### note?

`string`

#### params?

readonly [`VipCliDryRunParam`](../interfaces/VipCliDryRunParam.md)[]

## 返回

`void`
