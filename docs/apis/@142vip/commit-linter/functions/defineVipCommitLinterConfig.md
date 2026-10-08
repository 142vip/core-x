[API 参考](../../../index.md) / [@142vip/commit-linter](../index.md) / defineVipCommitLinterConfig

# 函数: defineVipCommitLinterConfig()

> **defineVipCommitLinterConfig**(`config`): [`VipCommitLinterConfig`](../interfaces/VipCommitLinterConfig.md)

定义于: [commit-linter/src/config.ts:36](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/commit-linter/src/config.ts#L36)

用户侧 `commit-linter.config.*` 的类型安全声明入口

## 参数

### config

[`VipCommitLinterConfig`](../interfaces/VipCommitLinterConfig.md)

## 返回

[`VipCommitLinterConfig`](../interfaces/VipCommitLinterConfig.md)

## 示例

```ts
export default defineVipCommitLinterConfig({
  scopeGlobs: ['./packages/*'],
  scopes: ['README'],
  verify: (gitCommit) => !gitCommit.subject.includes('WIP'),
})
```
