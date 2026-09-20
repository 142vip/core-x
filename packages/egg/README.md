# @142vip/egg

[![NPM version](https://img.shields.io/npm/v/@142vip/egg?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/egg)

Egg.js 框架二次封装：插件 Boot 基类、实例挂载约定，以及 MySQL / Sequelize / Redis 客户端工厂。

## 安装

```shell
# npm
npm install @142vip/egg

# pnpm
pnpm add @142vip/egg
```

## 功能

- [x] `EggPluginBoot`：子插件生命周期与 `didLoad` 时注册实例
- [x] `EggPluginManager`：单实例 / 多实例挂载到 `app[pluginName]`
- [x] `defaultPluginConfig` / `mergeConfig`：插件默认配置合并
- [x] `RegisterEggPluginName` / `PluginLoader`：插件名与加载时机枚举
- [x] `VipEggPluginLogger`：基于 `app.coreLogger` 的插件日志
- [x] `VipMySQLPool`：mysql2 连接池封装
- [x] `SequelizeORM` / `VipSequelize`：Sequelize 连接与实体约定
- [x] `IORedis` / `RedisMode`：ioredis 客户端工厂
- [x] `registerPlugin`：基于 Egg `addSingleton` 的简易注册（旧路径）

## 配置

本包为库，无 Egg `plugin.js` 条目。子插件通过 `defaultPluginConfig` 生成 `config.default.js` 顶层键（如 `axios`、`mysql`）。

子插件 `config/config.default.js` 最小示例：

```js
const { defaultPluginConfig } = require('@142vip/egg')
const { name: pkgName } = require('../package.json')

module.exports = {
  axios: defaultPluginConfig(pkgName, {
    default: { timeout: 5000 },
    client: {},
    // 多实例时使用 clients: { db1: {}, db2: {} }
  }),
}
```

挂载后访问约定（各 `egg-*` 插件一致）：

```js
app.axios.getInstance() // 单实例，名称为 default
app.axios.getInstance('example1') // 多实例
app.axios.getInstances()
app.axios.getInstanceNames()
```

## 使用

```js
const {
  EggPluginBoot,
  RegisterEggPluginName,
  defaultPluginConfig,
  VipMySQLPool,
  SequelizeORM,
  RedisMode,
} = require('@142vip/egg')
```

在自定义 Egg 插件 `app.js` 中继承 `EggPluginBoot`：

```js
const { RegisterEggPluginName, EggPluginBoot } = require('@142vip/egg')
const { createMyInstance } = require('./core/my-plugin')

class MyPluginAppBoot extends EggPluginBoot {
  constructor(app) {
    super({
      pluginName: RegisterEggPluginName.EGG_AXIOS, // 换成对应枚举值
      appOrAgent: app,
      createEggPluginInstance: createMyInstance,
    })
  }
}

module.exports = MyPluginAppBoot
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/egg
```

## 参考

- [@142vip/egg](https://www.npmjs.com/package/@142vip/egg)
- [Egg.js 应用启动](https://www.eggjs.org/zh-CN/basics/app-start)
- 配套插件：`@142vip/egg-axios`、`@142vip/egg-mysql`、`@142vip/egg-redis`、`@142vip/egg-sequelize`、`@142vip/egg-grpc-client`、`@142vip/egg-grpc-server`、`@142vip/egg-swagger`、`@142vip/egg-validate`

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
