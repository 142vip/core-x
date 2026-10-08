[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / loadCommitLinterConfigForCli

# 函数: loadCommitLinterConfigForCli()

> **loadCommitLinterConfigForCli**(`cliConfigPath?`): [`VipCommitLinterConfig`](../../commit-linter/interfaces/VipCommitLinterConfig.md)

定义于: [packages/fairy-cli/src/utils/commit.util.ts:83](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/commit.util.ts#L83)

加载 commit-linter 配置。优先级：
`fa commit -f`（含 `fairy.config` → `commit.config`）\>
`fairy.config` → `commit` 的校验字段 \>
`commit-linter.config` \> 内置默认。
校验字段存在时不再读取 `commit-linter.config`。

## 参数

### cliConfigPath?

`string`

## 返回

[`VipCommitLinterConfig`](../../commit-linter/interfaces/VipCommitLinterConfig.md)
