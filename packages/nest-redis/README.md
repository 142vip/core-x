# @142vip/nest-redis

[![NPM version](https://img.shields.io/npm/v/@142vip/nest-redis?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/nest-redis)

## 安装

```shell
# npm
npm install @142vip/nest-redis
# pnpm
pnpm i @142vip/nest-redis
```

## 配置

```typescript
import { RedisConfig } from '@142vip/redis'

// 简单配置
const config: RedisConfig = {
  url: 'redis://localhost:6379',
}

// 集群配置
const clusterConfig: RedisConfig = {
  clusterNodes: [
    {
      url: 'redis://localhost:6379',
    },
    {
      url: 'redis://localhost:6380',
    },
  ],
}
// ...
```

## 使用

### 模块注入
```typescript
import { RedisModule } from '@142vip/nest-redis'

@Module({
  imports: [RedisModule.register({
    url: 'redis://localhost:6379',
  })],
})
export class AppModule {}
```

### 使用服务
```typescript
import { RedisService } from '@142vip/nest-redis'

@Injectable()
export class AppService {
  constructor(
    private readonly redisService: RedisService
  ) {}
}
```

`RedisService`类实例化后，可以直接使用类对应的方法，代码的最佳实践，可以参考模块：[redis-example](https://github.com/142vip/core-x/apps/nest-demo/src/core/redis-example)

## 参考

- [NPM @142vip/redis](https://www.npmjs.com/package/@142vip/redis)
- [Redis 官网](https://redis.io/)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
