[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / releasePackage

# 函数: releasePackage()

> **releasePackage**(`pkg?`, `options?`): `Promise`\<`void`\>

定义于: [packages/fairy-cli/src/utils/release-package.util.ts:146](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/fairy-cli/src/utils/release-package.util.ts#L146)

Monorepo 发版编排入口：升版本 → CHANGELOG → git commit / tag → push。
`dryRun` 时仅走预览分支。

## 参数

### pkg?

[`PackageJSONWithPath`](../../utils/interfaces/PackageJSONWithPath.md)

### options?

[`ReleasePackageOptions`](../interfaces/ReleasePackageOptions.md)

## 返回

`Promise`\<`void`\>
