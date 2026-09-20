# @142vip/egg-redis

[![NPM version](https://img.shields.io/npm/v/@142vip/egg-redis?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/egg-redis)

Egg.js 框架下使用 Redis 的插件，基于 ioredis，支持单机、集群与哨兵模式。

## 安装

```shell
# npm
npm install @142vip/egg-redis @142vip/egg ioredis

# pnpm
pnpm add @142vip/egg-redis @142vip/egg ioredis
```

## 功能

- [x] ioredis 客户端（可配置 `Redis` 构造器覆盖）
- [x] `RedisMode`：`standard`（默认）、`cluster`、`sentinel`
- [x] 单实例 / 多实例挂载
- [x] `app.redis.getInstance()` 返回 ioredis 客户端
- [x] `EggRedisAppBoot` / `EggRedisAgentBoot`

## 配置

`config/plugin.js`：

```js
module.exports = {
  redis: {
    enable: true,
    package: '@142vip/egg-redis',
  },
}
```

`config/config.default.js`（单机）：

```js
module.exports = {
  redis: {
    client: {
      host: '127.0.0.1',
      port: 6379,
      password: '',
      db: 0,
    },
  },
}
```

集群：`client.mode` 为 `@142vip/egg` 的 `RedisMode.CLUSTER`（`'cluster'`），并配置 `nodes: [{ host, port }, ...]`。

哨兵：`mode: 'sentinel'`，`sentinels: [{ host, port }, ...]`，其余字段传入 ioredis。

## 使用

```js
const redis = this.app.redis.getInstance()
await redis.set('key', 'value')
const val = await redis.get('key')
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/egg-redis
```

## 参考

- [@142vip/egg-redis](https://www.npmjs.com/package/@142vip/egg-redis)
- [@142vip/egg](https://www.npmjs.com/package/@142vip/egg)
- [ioredis](https://www.npmjs.com/package/ioredis)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
