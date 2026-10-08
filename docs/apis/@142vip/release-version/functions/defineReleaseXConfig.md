[API 参考](../../../index.md) / [@142vip/release-version](../index.md) / defineReleaseXConfig

# 函数: defineReleaseXConfig()

> **defineReleaseXConfig**(`config`): `Partial`\<[`ReleaseVersionOptions`](../interfaces/ReleaseVersionOptions.md)\>

定义于: [release-version/src/config.ts:34](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/config.ts#L34)

用户侧 `releasex.config.*` 的类型安全声明入口

## 参数

### config

`Partial`\<[`ReleaseVersionOptions`](../interfaces/ReleaseVersionOptions.md)\>

## 返回

`Partial`\<[`ReleaseVersionOptions`](../interfaces/ReleaseVersionOptions.md)\>

## 示例

```ts
export default defineReleaseXConfig({ all: true, confirm: false })
```
