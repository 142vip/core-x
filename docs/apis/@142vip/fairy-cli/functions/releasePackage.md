[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / releasePackage

# 函数: releasePackage()

> **releasePackage**(`pkg?`, `options?`): `Promise`\<`void`\>

定义于: [packages/fairy-cli/src/utils/pkg.util.ts:163](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/pkg.util.ts#L163)

Monorepo 发版编排入口：升版本 → CHANGELOG → git commit / tag → push。
`dryRun` 时仅走预览分支。

## 参数

### pkg?

[`PackageJSONWithPath`](../../utils/interfaces/PackageJSONWithPath.md)

### options?

[`ReleasePackageOptions`](../interfaces/ReleasePackageOptions.md)

## 返回

`Promise`\<`void`\>
