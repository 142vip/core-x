[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / buildReleaseVersionOptions

# 函数: buildReleaseVersionOptions()

> **buildReleaseVersionOptions**(`pkg?`, `options?`): [`ReleaseVersionOptions`](../../release-version/interfaces/ReleaseVersionOptions.md)

定义于: [packages/fairy-cli/src/utils/pkg.util.ts:84](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/pkg.util.ts#L84)

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
