# @142vip/nest-redis

技术说明。不随 npm 发布。

## 定位

在 Nest 中注册**全局** Redis 客户端（`@142vip/redis` `RedisFactory`），提供 JSON 序列化封装的 `RedisService` 与 DI 装饰器。

由 `@142vip/nest-starter` 在 `starter.redis` 存在时调用 `NestRedisModule.register`；也可在自定义应用中单独注册。

## 功能

入口 `src/index.ts` 导出：

- `REDIS_CLIENT_TOKEN`（`core/redis.constants.ts`）
- `InjectRedisClient`（`core/redis.decorator.ts`）
- `NestRedisModule`（`core/redis.module.ts`）
- `RedisService`（`core/redis.service.ts`）
- `RedisKeyManager`（`redis-key.manager.ts`）

### `NestRedisModule`

#### `register(config: RedisConfig): DynamicModule`

- `global: true`
- 构造单例 `RedisService(config)`
- Providers：
  - `{ provide: REDIS_CLIENT_TOKEN, useValue: redisService.getClient() }`
  - `{ provide: RedisService, useValue: redisService }`
- `exports` 与 providers 相同

### `RedisService`

构造时保存 `config` 并调用 `getClient()` 创建 `client`（`register` 时 `getClient()` 与注入 token 为同一实例逻辑）。

- `getClient(): RedisClient` — `new RedisFactory().getClient(this.config)`（每次调用会新建 Factory；构造器内已缓存 `this.client`）
- `setEx<T>(key, data, expiredTime): Promise<void>` — `JSON.stringify(data)` + `client.set(key, json, 'EX', expiredTime)`；**`expiredTime` 单位为秒**（JSDoc 写「分钟」与实现不一致，以 `EX` 为准）
- `getEx<T>(key): Promise<T | null>` — `GET` + `JSON.parse`；`null` 或解析失败返回 `null`
- `del(key): Promise<void>` — 立即 `del`，`setTimeout` 1s 后再 `del` 一次（延迟双删）

### `InjectRedisClient()`

- `@Inject(REDIS_CLIENT_TOKEN)`
- 注入类型为 `@142vip/redis` 的 `RedisClient`（`ioredis` `Redis` 或 `Cluster`）

### `REDIS_CLIENT_TOKEN`

- `Symbol('@142vip/nest-redis#client-token')`

### `RedisKeyManager<T extends string>`

- `constructor(clientKey: T)` — 业务 key 前缀
- `generateKey(key: string): string` — `` `${clientKey}:${key}` ``

### `RedisConfig`（来自 `@142vip/redis`，非本包定义）

`RedisConfig` extends `RedisClientConfig` + `Partial<RedisClusterConfig>`：

- `RedisClientConfig`（含 `RedisOptions`）：`url?` 及 ioredis 单机/哨兵选项
- `RedisClusterConfig`：`clusterNodes?` `clusterOptions?`
- `RedisMode` 枚举（`standard` | `cluster` | `sentinel`）在 `@142vip/redis` 定义

`nest-starter` 的 `RedisConfig` 仅校验 `url?: string`，传入 `NestRedisModule.register` 时仍兼容完整 `RedisConfig` 形状。

### peerDependencies

- `@142vip/nest`
- `@142vip/redis`

## 配置

### 应用配置（`nest-starter` `StarterConfig.redis`）

写在 `config/config.js` 或 `config/xxx.config.js`：

```js
module.exports = {
  starter: {
    redis: {
      url: 'redis://127.0.0.1:6379',
    },
  },
}
```

字段与 `@142vip/redis` `RedisConfig` 一致；starter 侧 class-validator 仅强制 `url` 为可选字符串。

本包无独立配置文件。

## 最佳实践

- 缓存对象用 `RedisService.setEx` / `getEx`，避免手写 `JSON.stringify`
- 多业务线用 `RedisKeyManager` 统一前缀，防止 key 冲突
- 需要原生命令或 pipeline 时用 `@InjectRedisClient()` 获取 `RedisClient`
- 与 `nest-starter` 联用时只配 `starter.redis`，勿重复 `NestRedisModule.register`
- `setEx` 第三参按**秒**传 TTL（与 ioredis `EX` 一致）
- `del` 的延迟双删可缓解缓存穿透；高一致场景仍须在业务层校验
- 连接配置变更后须重启进程（client 在 `register` 时创建）

## 构建

`tsc` → CommonJS

```shell
cd packages/nest-redis && pnpm build
```

## 验证

```shell
cd packages/nest-redis && pnpm build && pnpm typecheck && pnpm test
```

## 演示

`apps/nest-demo`：

- `config/test.config.js` — `starter.redis.url`
- `AppModule.register()` — `nestStaterConfig.redis != null` 时加载 `RedisExampleModule`
- `redis-example` — 演示 `RedisService` / `InjectRedisClient` 用法
