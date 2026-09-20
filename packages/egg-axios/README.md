# @142vip/egg-axios

[![NPM version](https://img.shields.io/npm/v/@142vip/egg-axios?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/egg-axios)

Egg.js 框架下使用 `@142vip/axios` 的插件，简化 HTTP 请求配置。

## 安装

```shell
# npm
npm install @142vip/egg-axios @142vip/axios @142vip/egg

# pnpm
pnpm add @142vip/egg-axios @142vip/axios @142vip/egg
```

## 功能

- [x] 基于 `@142vip/axios` 的 `createVipAxios` 创建实例
- [x] 默认请求/响应拦截器（`defaultRequestInterceptor` / `defaultResponseInterceptor`）
- [x] 单实例（`client`）与多实例（`clients`）挂载
- [x] `app.axios.getInstance()` / `getInstances()` / `getInstanceNames()`
- [x] 支持 `app.js` 与 `agent.js` 加载（`EggAxiosAgentBoot`）

## 配置

`config/plugin.js`：

```js
module.exports = {
  axios: {
    enable: true,
    package: '@142vip/egg-axios',
  },
}
```

`config/config.default.js`（单实例）：

```js
module.exports = {
  axios: {
    client: {
      timeout: 6000,
      headers: {
        common: { 'Content-Type': 'application/json; charset=UTF-8' },
      },
    },
  },
}
```

插件自带默认（`config/config.default.js`）含 `default.timeout: 5000` 与上述拦截器，会与 `client` 合并。

多实例：将 `client` 换为 `clients: { example1: { timeout: 7000 }, example2: { ... } }`。

## 使用

```js
// Controller / Service
const vipAxios = this.app.axios.getInstance()
const res = await vipAxios.get('https://example.com/api')

// 多实例
const client1 = this.app.axios.getInstance('example1')
```

`createEggAxiosInstance`（`core/axios.js`）还支持 `requestInterceptorsHandler`、`responseInterceptorsHandler` 覆盖默认拦截器。

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/egg-axios
```

## 参考

- [@142vip/egg-axios](https://www.npmjs.com/package/@142vip/egg-axios)
- [@142vip/axios](https://www.npmjs.com/package/@142vip/axios)
- [@142vip/egg](https://www.npmjs.com/package/@142vip/egg)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
