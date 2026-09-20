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

- [x] `createVipAxios` / `vipAxios` 创建带扩展方法的 Axios 实例
- [x] `AxiosFactory` 工厂与 `clearInterceptor` / `getConfig`
- [x] 默认请求/响应拦截器与 VIP 响应解包（`HttpStatus.OK` 时返回 `data`）
- [x] `HttpStatus`、`HttpMethod` 枚举
- [x] 爬虫场景随机 `User-Agent` / `Accept-Language` 请求头

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
