# @142vip/redis

## 安装

```shell
# npm
npm install @142vip/redis
# pnpm
pnpm i @142vip/redis
```

## 使用

### 创建工厂类
```typescript
import { RedisFactory } from '@142vip/redis'

// 初始化工厂类实例
const redisFactory = new RedisFactory()
```

- `redisFactory.createClient()` ：创建客户端
- `redisFactory.createCluster()` ：创建集群客户端
- `redisFactory.getClient()` ：获取客户端

## 配置

### 简单&哨兵模式
```typescript
// 默认连接 127.0.0.1:6379
redisFactory.getClient()
// 连接 127.0.0.1:6380, db 4,使用密码 123456
redisFactory.getClient({
  url: 'redis://:123456@127.0.0.1:6380/4',
})
// 用户名、密码都可以通过 URI 传递。
redisFactory.getClient({
  url: 'redis://username:password@127.0.0.1:6380/4',
})
redisFactory.getClient({
  port: 6379, // 端口
  host: '127.0.0.1', // host主机地址
  username: 'default', // 需要redis版本大于6
  password: 'my-top-secret',
  db: 0, // 默认0
})
```

### 集群模式

```typescript
redisFactory.getClient({
  clusterNodes: [
    {
      host: '127.0.0.1',
      port: 6379,
    },
    {
      host: '127.0.0.1',
      port: 6380,
    },
  ],
  // 可选
  clusterOptions: {
    // 集群模式下，每个节点的连接配置
    redisOptions: {
      username: 'default', // 需要redis版本大于6
      password: 'my-top-secret',
      db: 0, // 默认0
    },
  },
})
```

## 最佳实践

- [egg-redis](https://github.com/eggjs/egg-redis)
- [@142vip/nest-redis](https://github.com/142vip/nest-redis)

## 参考

- [IORedis Npm](https://www.npmjs.com/package/redis)
- [IORedis Github](https://github.com/luin/ioredis)
- [IORedis 官网](https://redis.io/)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
