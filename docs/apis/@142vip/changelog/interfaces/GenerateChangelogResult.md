[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / GenerateChangelogResult

# 接口: GenerateChangelogResult

定义于: [changelog/src/core/changelog.interface.ts:162](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L162)

`generateChangelogInfo` / `writeChangelogFile` 返回值

## 属性

### commits

> **commits**: [`Commit`](Commit.md)[]

定义于: [changelog/src/core/changelog.interface.ts:166](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L166)

解析后的提交列表

***

### config

> **config**: [`ChangelogGenerateOptions`](ChangelogGenerateOptions.md)

定义于: [changelog/src/core/changelog.interface.ts:164](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L164)

实际使用的生成配置

***

### markdown

> **markdown**: `string`

定义于: [changelog/src/core/changelog.interface.ts:168](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L168)

本次 Release 的 Markdown 正文

***

### releaseUrl

> **releaseUrl**: `string`

定义于: [changelog/src/core/changelog.interface.ts:170](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L170)

手动创建 Release 的 GitHub Web URL
