[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / releasePackage

# Function: releasePackage()

> **releasePackage**(`pkg?`): `Promise`\<`void`\>

Defined in: [fairy-cli/src/utils/release-package.ts:63](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/fairy-cli/src/utils/release-package.ts#L63)

更新公共包、发布项目
生成changelog文档，更新version 【支持monorepo】
 - 更新根目录下的version版本
 - 提交commit信息
 - 标记tag信息

## Parameters

### pkg?

[`PackageJSONWithPath`](../../utils/interfaces/PackageJSONWithPath.md)

## Returns

`Promise`\<`void`\>
