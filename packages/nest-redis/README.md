# @142vip/nest-redis

[![NPM version](https://img.shields.io/npm/v/@142vip/nest-redis?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/nest-redis)

Nest.js 框架下 Redis 使用最佳实践

## 安装

```shell
# npm
npm install @142vip/nest-redis @142vip/nest @142vip/redis

# pnpm
pnpm add @142vip/nest-redis @142vip/nest @142vip/redis
```

## 功能

- [x] 全局动态模块 `NestRedisModule.register`
- [x] `RedisService`：JSON 序列化的 `setEx` / `getEx` / `del`（延迟双删）
- [x] `@InjectRedisClient()` 注入底层 `RedisClient`（`@142vip/redis`）
- [x] `RedisKeyManager` 统一 key 前缀

## 配置

`RedisConfig`（与 `@142vip/redis` 一致）常见字段：`url?: string`。

在 `nest-starter` 的 `config/*.js` 中：

```js
module.exports = {
  starter: {
    port: 3000,
    redis: { url: 'redis://127.0.0.1:6379' },
  },
}
```

## 使用

注册模块（`nest-starter` 在 `starter.redis` 存在时自动注册）：

```ts
import { NestRedisModule } from '@142vip/nest-redis'

NestRedisModule.register({ url: 'redis://127.0.0.1:6379' })
```

注入使用：

```ts
import type { RedisClient } from '@142vip/redis'
import { InjectRedisClient, RedisService } from '@142vip/nest-redis'
import { Injectable } from '@nestjs/common'

@Injectable()
export class CacheService {
  constructor(
    private readonly redis: RedisService,
    @InjectRedisClient() private readonly client: RedisClient,
  ) {}

  async save(key: string, value: unknown, ttlMinutes: number) {
    await this.redis.setEx(key, value, ttlMinutes * 60)
  }
}
```

Key 前缀：

```ts
import { RedisKeyManager } from '@142vip/nest-redis'

const keys = new RedisKeyManager('my-app')
keys.generateKey('user:1') // my-app:user:1
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/nest-redis
```

## 参考

- [@142vip/nest-redis](https://www.npmjs.com/package/@142vip/nest-redis)
- [@142vip/redis](https://www.npmjs.com/package/@142vip/redis)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
