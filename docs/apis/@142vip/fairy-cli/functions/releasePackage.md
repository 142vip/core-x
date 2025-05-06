[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / releasePackage

# 函数: releasePackage()

> **releasePackage**(`pkg?`): `Promise`\<`void`\>

定义于: [fairy-cli/src/utils/release-package.ts:63](https://github.com/142vip/core-x/blob/a868d72f351cc457f350d05d38d540d6494a8ff2/packages/fairy-cli/src/utils/release-package.ts#L63)

更新公共包、发布项目
生成changelog文档，更新version 【支持monorepo】
 - 更新根目录下的version版本
 - 提交commit信息
 - 标记tag信息

## 参数

### pkg?

[`PackageJSONWithPath`](../../utils/interfaces/PackageJSONWithPath.md)

## 返回

`Promise`\<`void`\>
