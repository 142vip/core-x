# @142vip/egg-redis

技术说明。不随 npm 发布。

## 定位

Egg 插件：基于 ioredis 创建 Redis 客户端，挂载到 `app.redis`；配置顶层键为 `redis`。

## 功能

### 插件元信息

- npm 包名：`@142vip/egg-redis`
- `eggPlugin.name`：`redis`
- `RegisterEggPluginName`：`EGG_REDIS` → `'redis'`
- 依赖：`@142vip/egg`、`@142vip/utils`、`ioredis@5.6.0`

### 入口文件

- `app.js`：`EggRedisAppBoot` extends `EggPluginBoot`
- `agent.js`：`EggRedisAgentBoot` extends `EggPluginBoot`
- 工厂：`createRedisInstance`（`core/redis.js`）

### 内部类 `EggRedis`

- `constructor(config, app)`：保存 `config`、`app`；`RedisClass = config.Redis ?? require('ioredis')`
- `static getInstance(pluginConfig, app)`：模块级单例，首次调用 `_createClient()`
- `_createClient()`：按 `config.mode` 分支创建客户端，注册 `connect` / `error` 事件日志

模式分支（`config.mode` 对比 `@142vip/egg` `RedisMode`）：

- `RedisMode.CLUSTER`（`'cluster'`）→ `addCluster()`：`new RedisClass.Cluster(clusterNodes, clusterOptions)`
- `RedisMode.SENTINEL`（`'sentinel'`）→ `addSentinel()`：`new RedisClass({ sentinels, ...config })`
- 其他值（含 `config.default.js` 的 `'default'`、`'standard'`、未设置）→ `addStandalone()`：`new RedisClass(config)`

`addStandalone()` 断言：`(host && port && password !== undefined && db !== undefined) || path` 必须满足其一。

`addCluster()` 断言：每个 `nodes[]` 项须含 `host`、`port`。

`addSentinel()` 断言：`sentinels` 非空，每项含 `host`、`port`。

### `createRedisInstance(pluginConfig, app)`

调用 `EggRedis.getInstance(pluginConfig, app)`，返回 ioredis 客户端（`Redis` 或 `Cluster`）。

### 挂载 API（`app.redis`）

- `getInstance(name?)` → ioredis 实例
- `getInstances()` / `getInstanceNames()`

### `config/config.default.js` 默认

```js
redis: defaultPluginConfig('@142vip/egg-redis', {
  default: {
    mode: 'default', // 非 RedisMode 枚举值，走 addStandalone 分支
  },
  client: {},
})
```

文件内注释块展示三种模式示例配置（单机 / 哨兵 `mode: 'sentinels'` / 集群 `mode: 'cluster'`）。

## 配置

顶层键 **`redis`**：

- `default`
  - `pkgName`：由 `defaultPluginConfig` 注入
  - `mode`：`'standard'` | `'cluster'` | `'sentinel'` | 其他（含 `'default'`）均走单机分支
- `client`：单实例 ioredis 选项（与 `default` 合并后为 `pluginConfig`）
  - 单机常用：`host`、`port`、`password`（可为 `''`）、`db`、`path`
  - 集群：`mode: 'cluster'`、`nodes: [{ host, port }, ...]`、`options`（传给 `Cluster` 构造函数第二参）
  - 哨兵：`mode: 'sentinel'`、`sentinels: [{ host, port }, ...]`，其余 ioredis 哨兵选项展开到构造参数
- `clients`：多 Redis 多实例
- `Redis`：可选，替换 ioredis 构造器（`require('ioredis')` 或自定义模块）
- `loaders`：默认 `['app']`

## 最佳实践

- 单机必须提供 `host`、`port`、`password`（可为空字符串）、`db`，或提供 `path`；否则 `assert` 失败。
- 集群、哨兵模式按 `core/redis.js` 与 `config/config.default.js` 注释块配置 `nodes` / `sentinels`。
- `mode` 建议使用 `RedisMode` 枚举值（`'standard'` / `'cluster'` / `'sentinel'`），避免依赖 `'default'` 隐式分支。
- 多 Redis 用 `clients` + `getInstance(name)`。
- Agent 需 Redis 时在 `loaders` 中加入 `'agent'`。
- `EggRedis.getInstance` 为进程内单例；多实例场景依赖 `EggPluginManager` 的 `clients` 分别构造，而非 `EggRedis` 静态单例（当前实现下多实例各调一次 `createRedisInstance`）。

## 构建

无 `build` 脚本；发布 `agent.js`、`app.js`、`config/`、`core/` 源码。

## 验证

```shell
cd apps/egg-demo && pnpm test
```

`apps/egg-demo/config/plugin.js` **未**默认启用 `redis` 插件；需自行在业务项目 `config/plugin.js` 与 `config/config.*.js` 中配置后测试。

## 演示

无（`egg-demo` 未集成 `egg-redis`；可按需在 `apps/egg-demo` 或业务项目中参照 `config/config.default.js` 注释启用）。
