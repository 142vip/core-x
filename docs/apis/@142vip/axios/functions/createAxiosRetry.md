[API 参考](../../../index.md) / [@142vip/axios](../index.md) / createAxiosRetry

# 函数: createAxiosRetry()

> **createAxiosRetry**(`instance`, `config?`): `void`

定义于: [packages/axios/src/core/axios-retry.ts:10](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/axios/src/core/axios-retry.ts#L10)

为已有 Axios 实例挂载 axios-retry。
类型 `IAxiosRetryConfig` 从 `types/axios-exports.ts` 再导出，避免与运行时入口缠在一起。

## 参数

### instance

[`AxiosInstance`](../interfaces/AxiosInstance.md)

### config?

[`IAxiosRetryConfig`](../interfaces/IAxiosRetryConfig.md)

## 返回

`void`

## 参阅

https://www.npmjs.com/package/axios-retry
