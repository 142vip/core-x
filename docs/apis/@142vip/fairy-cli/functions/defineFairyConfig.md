[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / defineFairyConfig

# 函数: defineFairyConfig()

> **defineFairyConfig**(`config`): [`FairyConfig`](../interfaces/FairyConfig.md)

定义于: [packages/fairy-cli/src/config.ts:158](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/config.ts#L158)

用户侧 `fairy.config.*` 的类型安全声明入口。

## 参数

### config

[`FairyConfig`](../interfaces/FairyConfig.md)

## 返回

[`FairyConfig`](../interfaces/FairyConfig.md)

## 示例

```ts
export default defineFairyConfig({
  hooks: {
    postinstall: ['pnpm build:packages'],
  },
})
```
