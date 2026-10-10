[API 参考](../../../index.md) / [@142vip/commit-linter](../index.md) / CommitLinterOptions

# 接口: CommitLinterOptions

定义于: [commit-linter/src/commit.interface.ts:94](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/commit-linter/src/commit.interface.ts#L94)

`commitLinter` 入参：白名单、待校验首行与自定义 `verify`。

## theme_extended_by

- [`VipCommitLinterConfig`](VipCommitLinterConfig.md)

## 属性

### commit?

> `optional` **commit?**: `string`

定义于: [commit-linter/src/commit.interface.ts:103](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/commit-linter/src/commit.interface.ts#L103)

待校验 commit 首行。
省略时读取当前仓库 `.git/COMMIT_EDITMSG` 首行（commit-msg 钩子场景）。

***

### scopes?

> `optional` **scopes?**: `string`[]

定义于: [commit-linter/src/commit.interface.ts:98](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/commit-linter/src/commit.interface.ts#L98)

允许的 scope；与内置默认 scope 合并去重

***

### types?

> `optional` **types?**: `string`[]

定义于: [commit-linter/src/commit.interface.ts:96](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/commit-linter/src/commit.interface.ts#L96)

允许的 type；与内置默认 type 合并去重

***

### verify?

> `optional` **verify?**: (`gitCommit`) => `boolean` \| `void`

定义于: [commit-linter/src/commit.interface.ts:108](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/commit-linter/src/commit.interface.ts#L108)

额外校验（在格式与白名单通过后执行）。
返回 `false` 或抛错视为不通过（进程 exit 1）。

#### 参数

##### gitCommit

[`GitCommitLinter`](GitCommitLinter.md)

#### 返回

`boolean` \| `void`
