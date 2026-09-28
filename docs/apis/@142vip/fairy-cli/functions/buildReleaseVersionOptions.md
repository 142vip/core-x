[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / buildReleaseVersionOptions

# 函数: buildReleaseVersionOptions()

> **buildReleaseVersionOptions**(`pkg?`, `options?`): [`ReleaseVersionOptions`](../../release-version/interfaces/ReleaseVersionOptions.md)

定义于: [packages/fairy-cli/src/utils/release-package.util.ts:67](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/fairy-cli/src/utils/release-package.util.ts#L67)

组装 `fa release` 传入 `@142vip/release-version` 的选项。
- 根仓库：`chore(release)` + 打 tag
- 子包：`release(@scope/pkg)` + 不打 tag + `cwd` 指向子包目录

## 参数

### pkg?

[`PackageJSONWithPath`](../../utils/interfaces/PackageJSONWithPath.md)

### options?

[`ReleasePackageOptions`](../interfaces/ReleasePackageOptions.md)

## 返回

[`ReleaseVersionOptions`](../../release-version/interfaces/ReleaseVersionOptions.md)
