[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / formatCommitRuntimeParams

# 函数: formatCommitRuntimeParams()

> **formatCommitRuntimeParams**(`input`): [`VipCliDryRunParam`](../../utils/interfaces/VipCliDryRunParam.md)[]

定义于: [packages/fairy-cli/src/utils/commit.util.ts:206](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/commit.util.ts#L206)

`fa commit --dry-run` 要打印的生效参数。
`scopeGlobs` 来自配置原文；`effectiveScopes` 是 `-s` 或 glob 扫描并上配置 `scopes` 之后的白名单。
`verify` 只标明是否配置，不打印函数体。

## 参数

### input

#### cliScopeGlobs

`string`[]

#### fileConfig

[`VipCommitLinterConfig`](../../commit-linter/interfaces/VipCommitLinterConfig.md)

#### linterOptions

[`CommitLinterOptions`](../../commit-linter/interfaces/CommitLinterOptions.md)

#### message?

`string`

#### push?

`boolean`

#### quiet?

`boolean`

#### source

`string`

## 返回

[`VipCliDryRunParam`](../../utils/interfaces/VipCliDryRunParam.md)[]
