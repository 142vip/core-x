[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / Commit

# 接口: Commit

定义于: [changelog/src/core/changelog.interface.ts:80](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L80)

生成 Markdown 时使用的提交记录（可附带 GitHub 解析后的作者）

## theme_extends

- [`GitCommitRecord`](GitCommitRecord.md)

## 属性

### author

> **author**: [`GitCommitAuthor`](GitCommitAuthor.md)

定义于: [changelog/src/core/changelog.interface.ts:22](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L22)

主作者信息

#### 继承自

[`GitCommitRecord`](GitCommitRecord.md).[`author`](GitCommitRecord.md#author)

***

### authors

> **authors**: [`GitCommitAuthor`](GitCommitAuthor.md)[]

定义于: [changelog/src/core/changelog.interface.ts:66](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L66)

主作者 + `Co-authored-by` 合并后的作者列表

#### 继承自

[`GitCommitRecord`](GitCommitRecord.md).[`authors`](GitCommitRecord.md#authors)

***

### body

> **body**: `string`

定义于: [changelog/src/core/changelog.interface.ts:18](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L18)

提交正文（首行之后的 body）

#### 继承自

[`GitCommitRecord`](GitCommitRecord.md).[`body`](GitCommitRecord.md#body)

***

### description

> **description**: `string`

定义于: [changelog/src/core/changelog.interface.ts:58](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L58)

去除引用后的描述文本

#### 继承自

[`GitCommitRecord`](GitCommitRecord.md).[`description`](GitCommitRecord.md#description)

***

### isBreaking

> **isBreaking**: `boolean`

定义于: [changelog/src/core/changelog.interface.ts:68](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L68)

是否含 breaking change（`!` 或 body 中的 BREAKING CHANGE）

#### 继承自

[`GitCommitRecord`](GitCommitRecord.md).[`isBreaking`](GitCommitRecord.md#isbreaking)

***

### message

> **message**: `string`

定义于: [changelog/src/core/changelog.interface.ts:16](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L16)

提交标题（Conventional Commits 首行）

#### 继承自

[`GitCommitRecord`](GitCommitRecord.md).[`message`](GitCommitRecord.md#message)

***

### references

> **references**: [`GitCommitReference`](GitCommitReference.md)[]

定义于: [changelog/src/core/changelog.interface.ts:64](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L64)

从描述与 hash 提取的引用列表

#### 继承自

[`GitCommitRecord`](GitCommitRecord.md).[`references`](GitCommitRecord.md#references)

***

### resolvedAuthors?

> `optional` **resolvedAuthors?**: [`GitAuthorInfo`](GitAuthorInfo.md)[]

定义于: [changelog/src/core/changelog.interface.ts:82](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L82)

经 GitHub API 解析后的作者（含 `login`）

***

### scope

> **scope**: `string`

定义于: [changelog/src/core/changelog.interface.ts:62](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L62)

scope（括号内，可能经 `scopeMap` 映射）

#### 继承自

[`GitCommitRecord`](GitCommitRecord.md).[`scope`](GitCommitRecord.md#scope)

***

### shortHash

> **shortHash**: `string`

定义于: [changelog/src/core/changelog.interface.ts:20](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L20)

短 hash（`%h`）

#### 继承自

[`GitCommitRecord`](GitCommitRecord.md).[`shortHash`](GitCommitRecord.md#shorthash)

***

### type

> **type**: `string`

定义于: [changelog/src/core/changelog.interface.ts:60](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/changelog/src/core/changelog.interface.ts#L60)

commit type（如 `feat` / `fix`）

#### 继承自

[`GitCommitRecord`](GitCommitRecord.md).[`type`](GitCommitRecord.md#type)
