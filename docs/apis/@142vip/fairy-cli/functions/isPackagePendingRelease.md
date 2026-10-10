[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / isPackagePendingRelease

# 函数: isPackagePendingRelease()

> **isPackagePendingRelease**(`packageName`, `releaseCommitPrefix?`): `boolean`

定义于: [packages/fairy-cli/src/utils/pkg.util.ts:46](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/pkg.util.ts#L46)

判断 Monorepo 子包自上次 `release(scope)` 提交后是否仍有待发版变更。
依据最近一条 scope 提交是否以 `release(<pkg>)` 为前缀。

## 参数

### packageName

`string`

### releaseCommitPrefix?

`string`

## 返回

`boolean`
