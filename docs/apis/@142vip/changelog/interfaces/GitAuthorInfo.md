[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / GitAuthorInfo

# 接口: GitAuthorInfo

定义于: [changelog/src/core/changelog.interface.ts:86](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L86)

贡献者聚合信息（按邮箱去重）

## theme_extends

- [`GitCommitAuthor`](GitCommitAuthor.md)

## 属性

### commits

> **commits**: `string`[]

定义于: [changelog/src/core/changelog.interface.ts:88](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L88)

该作者关联的 commit short hash 列表

***

### email

> **email**: `string`

定义于: [changelog/src/core/changelog.interface.ts:10](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L10)

作者邮箱

#### 继承自

[`GitCommitAuthor`](GitCommitAuthor.md).[`email`](GitCommitAuthor.md#email)

***

### login?

> `optional` **login?**: `string`

定义于: [changelog/src/core/changelog.interface.ts:90](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L90)

GitHub 用户名（API 解析成功时）

***

### name

> **name**: `string`

定义于: [changelog/src/core/changelog.interface.ts:8](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L8)

作者显示名

#### 继承自

[`GitCommitAuthor`](GitCommitAuthor.md).[`name`](GitCommitAuthor.md#name)
