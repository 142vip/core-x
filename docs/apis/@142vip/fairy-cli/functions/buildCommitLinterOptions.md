[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / buildCommitLinterOptions

# 函数: buildCommitLinterOptions()

> **buildCommitLinterOptions**(`fileConfig`, `options`): [`CommitLinterOptions`](../../commit-linter/interfaces/CommitLinterOptions.md)

定义于: [packages/fairy-cli/src/utils/commit.util.ts:176](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/commit.util.ts#L176)

合并 cosmiconfig 与用户 CLI：`-s` 或配置 `scopeGlobs` 时扫描 Monorepo 包名写入 `scopes`。
CLI `-s` 优先于配置文件中的 `scopeGlobs`。

## 参数

### fileConfig

[`VipCommitLinterConfig`](../../commit-linter/interfaces/VipCommitLinterConfig.md)

### options

#### scopeGlobs

`string`[]

## 返回

[`CommitLinterOptions`](../../commit-linter/interfaces/CommitLinterOptions.md)
