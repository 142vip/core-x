# @142vip/axios

[![NPM version](https://img.shields.io/npm/v/@142vip/axios?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/axios)

Http 请求工具，支持通用化的自定义拦截器、自定义参数、自定义配置。

## 安装

```shell
# npm
npm install @142vip/axios

# pnpm
pnpm add @142vip/axios
```

## 功能

- ✅ `createVipAxios` / `vipAxios` 创建带扩展方法的 Axios 实例
- ✅ `AxiosFactory` 工厂与 `clearInterceptor` / `getConfig`
- ✅ 默认请求/响应拦截器与 VIP 响应解包（`HttpStatus.OK` 时返回 `data`）
- ✅ `createAxiosRetry` 挂载 `axios-retry`；`AxiosResponseTransform` 处理 blob / arraybuffer 中的 JSON
- ✅ `HttpStatus`、`HttpMethod` 枚举
- ✅ 再导出 `axios`、`axios-retry` 的具名符号（`AxiosHeaders`、`AxiosError`、`isAxiosError`、`IAxiosRetryConfig`）
- ✅ 爬虫场景随机 `User-Agent` / `Accept-Language` 请求头

## 配置

通过 `createVipAxios` / `createAxiosConfig` 传入 Axios 配置；默认见 `defaultAxiosConfig`（含 `timeout: 10000`）。

## 使用

```ts
import { createAxiosConfig, createVipAxios, HttpStatus, vipAxios } from '@142vip/axios'

// 默认实例
await vipAxios.get('https://httpbin.org/get')

// 自定义实例
const client = createVipAxios(createAxiosConfig({
  baseURL: 'https://api.example.com',
  timeout: 5000,
}))
const { data } = await client.get('/users')
```

需要 VIP 解包拦截器时，自行挂载 `defaultVipRequestInterceptor` / `defaultVipResponseInterceptor`（见源码 `interceptors.ts`）。

`axios` 与 `axios-retry` 的具名导出从本包引入。请求头、错误判断不要再写 `from 'axios'`：

```ts
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from '@142vip/axios'
import { AxiosError, AxiosHeaders, HttpStatus, isAxiosError } from '@142vip/axios'

const headers = AxiosHeaders.from({ Accept: 'application/json' })
```

发请求用 `vipAxios` / `createVipAxios`。`export *` 不会带上这两个依赖的默认导出。

包本身是 `"type": "module"`。CommonJS 下游（例如 Nest 的 `nodenext`）因此仍能从 ESM 声明里拿到 `isAxiosError`、`AxiosRequestConfig` 等具名符号；若声明被当成 CJS，这些名字会消失。

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/axios
```

## 参考

- [axios](https://www.npmjs.com/package/axios)
- [@142vip/axios](https://www.npmjs.com/package/@142vip/axios)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
