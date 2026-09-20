# @142vip/redis

[![NPM version](https://img.shields.io/npm/v/@142vip/redis?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/redis)

Redis 通用工具，基于 ioredis 的封装。

## 安装

```shell
# npm
npm install @142vip/redis ioredis

# pnpm
pnpm add @142vip/redis ioredis
```

## 功能

- [x] `RedisFactory` 创建单机/哨兵/集群客户端
- [x] `RedisMode` 连接模式枚举
- [x] `RedisConfig` / `RedisClientConfig` / `RedisClusterConfig` 类型

## 配置

`RedisClientConfig` 继承 ioredis `RedisOptions`，可选 `url`。

集群使用 `clusterNodes` + 可选 `clusterOptions`。

## 使用

```ts
import { RedisFactory } from '@142vip/redis'

const factory = new RedisFactory()

// 单机或 URL
const client = factory.createClient({ host: '127.0.0.1', port: 6379 })
// 或 factory.getClient({ url: 'redis://127.0.0.1:6379' })

// 集群
const cluster = factory.createCluster({
  clusterNodes: [{ host: '127.0.0.1', port: 7000 }],
})
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/redis
```

## 参考

- [@142vip/redis](https://www.npmjs.com/package/@142vip/redis)
- [ioredis](https://github.com/redis/ioredis)
- [@142vip/nest-redis](https://www.npmjs.com/package/@142vip/nest-redis)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
