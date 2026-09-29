[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / GitCommitRecord

# 接口: GitCommitRecord

定义于: [changelog/src/core/changelog.interface.ts:56](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L56)

经 Conventional Commits 规则解析后的提交记录

## theme_extends

- [`GitCommitRaw`](GitCommitRaw.md)

## theme_extended_by

- [`Commit`](Commit.md)

## 属性

### author

> **author**: [`GitCommitAuthor`](GitCommitAuthor.md)

定义于: [changelog/src/core/changelog.interface.ts:22](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L22)

主作者信息

#### 继承自

[`GitCommitRaw`](GitCommitRaw.md).[`author`](GitCommitRaw.md#author)

***

### authors

> **authors**: [`GitCommitAuthor`](GitCommitAuthor.md)[]

定义于: [changelog/src/core/changelog.interface.ts:66](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L66)

主作者 + `Co-authored-by` 合并后的作者列表

***

### body

> **body**: `string`

定义于: [changelog/src/core/changelog.interface.ts:18](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L18)

提交正文（首行之后的 body）

#### 继承自

[`GitCommitRaw`](GitCommitRaw.md).[`body`](GitCommitRaw.md#body)

***

### description

> **description**: `string`

定义于: [changelog/src/core/changelog.interface.ts:58](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L58)

去除引用后的描述文本

***

### isBreaking

> **isBreaking**: `boolean`

定义于: [changelog/src/core/changelog.interface.ts:68](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L68)

是否含 breaking change（`!` 或 body 中的 BREAKING CHANGE）

***

### message

> **message**: `string`

定义于: [changelog/src/core/changelog.interface.ts:16](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L16)

提交标题（Conventional Commits 首行）

#### 继承自

[`GitCommitRaw`](GitCommitRaw.md).[`message`](GitCommitRaw.md#message)

***

### references

> **references**: [`GitCommitReference`](GitCommitReference.md)[]

定义于: [changelog/src/core/changelog.interface.ts:64](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L64)

从描述与 hash 提取的引用列表

***

### scope

> **scope**: `string`

定义于: [changelog/src/core/changelog.interface.ts:62](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L62)

scope（括号内，可能经 `scopeMap` 映射）

***

### shortHash

> **shortHash**: `string`

定义于: [changelog/src/core/changelog.interface.ts:20](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L20)

短 hash（`%h`）

#### 继承自

[`GitCommitRaw`](GitCommitRaw.md).[`shortHash`](GitCommitRaw.md#shorthash)

***

### type

> **type**: `string`

定义于: [changelog/src/core/changelog.interface.ts:60](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L60)

commit type（如 `feat` / `fix`）
