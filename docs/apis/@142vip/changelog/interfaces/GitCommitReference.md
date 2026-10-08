[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / GitCommitReference

# 接口: GitCommitReference

定义于: [changelog/src/core/changelog.interface.ts:48](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L48)

单条提交描述中解析出的引用

## 属性

### type

> **type**: [`GitCommitMessageType`](../enumerations/GitCommitMessageType.md)

定义于: [changelog/src/core/changelog.interface.ts:50](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L50)

引用类型

***

### value

> **value**: `string`

定义于: [changelog/src/core/changelog.interface.ts:52](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L52)

原始匹配值（如 `#123` 或 short hash）
