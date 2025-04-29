[API 参考](../../../packages.md) / [@142vip/fairy-cli](../index.md) / releasePackage

# 函数: releasePackage()

> **releasePackage**(`pkg?`): `Promise`\<`void`\>

定义于: [fairy-cli/src/utils/release-package.ts:63](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/fairy-cli/src/utils/release-package.ts#L63)

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
