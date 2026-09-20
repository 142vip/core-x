# @142vip/redis

技术说明。不随 npm 发布。

## 定位

薄封装 `ioredis@5.6.0`，统一单机/哨兵与集群客户端创建入口，供 Nest 插件与脚本复用。

## 功能

### 子路径

- `@142vip/redis`：主入口（`src/index.ts` → `src/core/`）

### 枚举 `RedisMode`（`core/redis.interface.ts`）

- `STANDARD = 'standard'`
- `CLUSTER = 'cluster'`
- `SENTINEL = 'sentinel'`

### 类型（`core/redis.interface.ts`）

- `RedisClientConfig extends RedisOptions`：单机/哨兵配置，可选 `url?: string`
- `RedisClusterConfig`：
  - `clusterNodes: ClusterNode[]`
  - `clusterOptions?: ClusterOptions`
- `RedisConfig extends RedisClientConfig, Partial<RedisClusterConfig>`：单机与集群字段合并
- `RedisClient`：`Redis | Cluster` 类型别名

### 类 `RedisFactory`（`core/redis.factory.ts`）

- `createClient(config: RedisClientConfig): Redis`
  - `config.url != null` → `new Redis(config.url, config)`
  - 否则 → `new Redis(config)`
- `createCluster(config: RedisClusterConfig): Cluster`
  - `new Redis.Cluster(config.clusterNodes, config.clusterOptions)`
- `getClient(config: RedisConfig): RedisClient`
  - `config.clusterNodes != null` → `createCluster(config as RedisClusterConfig)`
  - 否则 → `createClient(config)`

## 配置

本包不新增自定义配置键；`RedisClientConfig` / `RedisClusterConfig` 字段遵循 [ioredis 选项](https://github.com/redis/ioredis#connect-to-redis)。常见键：`host`、`port`、`password`、`db`、`username`、`keyPrefix`、`sentinels`、`sentinelPassword`、`name`（sentinel）、`lazyConnect`、`connectTimeout`、`maxRetriesPerRequest`、`enableReadyCheck`、`tls`。

## 最佳实践

- 应用生命周期内复用单例 `RedisFactory` 与 client，避免泄漏连接
- 集群与单机配置勿混用同一 `RedisConfig` 对象
- Nest 项目优先 `@142vip/nest-redis` 模块注入
- 生产环境通过 `url` 或 sentinel 配置高可用
- 业务 TTL 常量使用 `@142vip/utils` 的 `TimeDurationMs` 或 `TimeDurationSec` 枚举

## 构建

`unbuild` → `cd packages/redis && pnpm build`

## 验证

```shell
cd packages/redis && pnpm build && pnpm typecheck
```

## 演示

无
