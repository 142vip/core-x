[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / ChangelogGenerateOptions

# 接口: ChangelogGenerateOptions

定义于: [changelog/src/core/changelog.interface.ts:116](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L116)

合并配置后的完整生成选项

## 属性

### baseUrl

> **baseUrl**: `string`

定义于: [changelog/src/core/changelog.interface.ts:150](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L150)

GitHub Web 主机（默认 `github.com`）

***

### baseUrlApi

> **baseUrlApi**: `string`

定义于: [changelog/src/core/changelog.interface.ts:148](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L148)

GitHub API 主机（默认 `api.github.com`）

***

### capitalize

> **capitalize**: `boolean`

定义于: [changelog/src/core/changelog.interface.ts:140](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L140)

描述首字母大写

***

### contributors

> **contributors**: `boolean`

定义于: [changelog/src/core/changelog.interface.ts:138](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L138)

是否解析 GitHub 贡献者

***

### dryRun?

> `optional` **dryRun?**: `boolean`

定义于: [changelog/src/core/changelog.interface.ts:134](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L134)

试运行：不写文件、不创建 Release

***

### emoji

> **emoji**: `boolean`

定义于: [changelog/src/core/changelog.interface.ts:144](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L144)

章节标题是否保留 emoji

***

### from

> **from**: `string`

定义于: [changelog/src/core/changelog.interface.ts:152](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L152)

提交范围起点

***

### group

> **group**: `boolean` \| `"multiple"`

定义于: [changelog/src/core/changelog.interface.ts:142](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L142)

是否按 scope 分组；`multiple` 表示仅多 commit 的 scope 分组

***

### header?

> `optional` **header?**: `string`

定义于: [changelog/src/core/changelog.interface.ts:130](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L130)

新建 CHANGELOG.md 时的文件头

***

### name

> **name**: `string`

定义于: [changelog/src/core/changelog.interface.ts:146](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L146)

Release 名称

***

### output?

> `optional` **output?**: `string`

定义于: [changelog/src/core/changelog.interface.ts:136](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L136)

CHANGELOG.md 输出路径

***

### prerelease

> **prerelease**: `boolean`

定义于: [changelog/src/core/changelog.interface.ts:156](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L156)

GitHub Pre-release 标记

***

### repo

> **repo**: `string`

定义于: [changelog/src/core/changelog.interface.ts:158](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L158)

远程仓库 `owner/repo`

***

### scopeMap

> **scopeMap**: `Record`\<`string`, `string`\>

定义于: [changelog/src/core/changelog.interface.ts:123](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L123)

scope 显示名映射（如 `utils` → `@142vip/utils`）

***

### scopeName?

> `optional` **scopeName?**: `string`

定义于: [changelog/src/core/changelog.interface.ts:132](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L132)

Monorepo 子包 scope 名

***

### titles

> **titles**: `object`

定义于: [changelog/src/core/changelog.interface.ts:125](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L125)

额外章节标题

#### breakingChanges?

> `optional` **breakingChanges?**: `string`

Breaking Changes 章节标题

***

### to

> **to**: `string`

定义于: [changelog/src/core/changelog.interface.ts:154](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L154)

提交范围终点 / Release tag

***

### types

> **types**: `Record`\<`string`, \{ `semver?`: [`VipSemverReleaseType`](../../utils/type-aliases/VipSemverReleaseType.md); `title`: `string`; \}\>

定义于: [changelog/src/core/changelog.interface.ts:118](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L118)

Conventional Commits type → 章节标题与 semver 提示
