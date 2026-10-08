[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / GitCommitRaw

# 接口: GitCommitRaw

定义于: [changelog/src/core/changelog.interface.ts:14](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L14)

`git log` 解析后的原始提交记录

## theme_extended_by

- [`GitCommitRecord`](GitCommitRecord.md)

## 属性

### author

> **author**: [`GitCommitAuthor`](GitCommitAuthor.md)

定义于: [changelog/src/core/changelog.interface.ts:22](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L22)

主作者信息

***

### body

> **body**: `string`

定义于: [changelog/src/core/changelog.interface.ts:18](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L18)

提交正文（首行之后的 body）

***

### message

> **message**: `string`

定义于: [changelog/src/core/changelog.interface.ts:16](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L16)

提交标题（Conventional Commits 首行）

***

### shortHash

> **shortHash**: `string`

定义于: [changelog/src/core/changelog.interface.ts:20](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L20)

短 hash（`%h`）
