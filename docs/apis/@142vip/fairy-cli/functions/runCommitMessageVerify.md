[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / runCommitMessageVerify

# 函数: runCommitMessageVerify()

> **runCommitMessageVerify**(`options`): [`GitCommitLinter`](../../commit-linter/interfaces/GitCommitLinter.md)

定义于: [packages/fairy-cli/src/utils/commit.util.ts:245](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/commit.util.ts#L245)

`--quiet`：校验 commit 首行（commit-msg 钩子）

## 参数

### options

#### linterOptions

[`CommitLinterOptions`](../../commit-linter/interfaces/CommitLinterOptions.md)

#### message?

`string`

## 返回

[`GitCommitLinter`](../../commit-linter/interfaces/GitCommitLinter.md)
