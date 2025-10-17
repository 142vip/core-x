[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / ChangelogAPI

# Variable: ChangelogAPI

> `const` **ChangelogAPI**: `object`

Defined in: [changelog/src/core/changelog.api.ts:163](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/changelog/src/core/changelog.api.ts#L163)

changelog相关API

## Type Declaration

### changelogCoreHandler()

> **changelogCoreHandler**: (`cliOptions`) => `Promise`\<`void`\>

处理changelog业务

#### Parameters

##### cliOptions

[`ChangelogCliOptions`](../interfaces/ChangelogCliOptions.md)

#### Returns

`Promise`\<`void`\>

### generateChangelogInfo()

> **generateChangelogInfo**: (`config`) => `Promise`\<[`GenerateChangelogResult`](../interfaces/GenerateChangelogResult.md)\>

处理git changelog记录生成

#### Parameters

##### config

[`ChangelogGenerateOptions`](../interfaces/ChangelogGenerateOptions.md)

#### Returns

`Promise`\<[`GenerateChangelogResult`](../interfaces/GenerateChangelogResult.md)\>

### upsertChangelogDoc()

> **upsertChangelogDoc**: (`outputPath`, `markdown`, `releaseVersionName`, `markdownHeader`) => `Promise`\<`void`\>

创建或更新changelog文档

#### Parameters

##### outputPath

`string`

##### markdown

`string`

##### releaseVersionName

`string`

##### markdownHeader

`string`

#### Returns

`Promise`\<`void`\>
