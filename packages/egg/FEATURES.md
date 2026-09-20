# @142vip/egg

技术说明。不随 npm 发布。

## 定位

`@142vip/egg-*` 插件族的公共基座（unbuild 双格式库）。提供 Boot 生命周期、`defaultPluginConfig` / `mergeConfig` 配置合并、`EggPluginManager` 单/多实例挂载约定，以及 MySQL / Sequelize / Redis 工具类；**不包含** Egg 插件入口文件（`app.js` / `agent.js`）。

## 功能

### 包入口导出（`src/index.ts` → `dist/index.mjs` / `dist/index.cjs`）

- `EggAppBoot`：空应用 Boot 占位（`src/app.ts`），无生命周期实现
- `EggPluginBoot`：插件 Boot 基类；`didLoad()` 调用 `EggPluginManager.registerPlugin()`（`src/plugin/boot.ts`）
- `EggPluginManager`：插件注册管理器（`src/plugin/manager.ts`），由 `EggPluginBoot` 内部构造，**不**从 `src/plugin/index.ts` 单独导出
- `RegisterEggPluginName`：插件配置顶层键枚举（`src/plugin/plugin.interface.ts`）
  - `EGG_AXIOS` → `'axios'`
  - `EGG_MYSQL` → `'mysql'`
  - `EGG_REDIS` → `'redis'`
  - `EGG_SEQUELIZE` → `'sequelize'`
  - `EGG_RABBIT` → `'rabbit'`（枚举预留，无对应子插件）
  - `EGG_VALIDATE` → `'validate'`
  - `EGG_SWAGGER` → `'swagger'`
  - `EGG_GRPC_CLIENT` → `'grpcClient'`
  - `EGG_GRPC_SERVER` → `'grpcServer'`
- `PluginLoader`：`APP = 'app'`、`AGENT = 'agent'`，控制 `app.js` / `agent.js` 是否加载
- `PluginLoadType`：`SIMPLE = 'simple'`、`MULTIPLE = 'multiple'`
- `PluginLoadEnv`：`DEFAULT = 'default'`、`SIMPLE = 'simple'`、`MULTIPLE = 'multiple'`
- `PluginConfig`：插件配置接口，要求 `pkgName: string`
- `defaultPluginConfig(pkgName, userConfig)`：合并默认 `default.pkgName`、`loaders: ['app']` 与用户配置（`src/plugin/plugin.utils.ts`）
- `mergeConfig(defaultConfig, pluginConfig)`：基于 `vipLodash.merge` 深合并（`src/config.ts`）
- `registerPlugin(name, app, createInstance)`：配置存在时 `app.addSingleton`（旧 API，备份于 `src/plugin/register.ts` 注释块）
- `VipEggPluginLogger`：`getInstance(pluginConfig, app)` 单例；`log` / `warn` / `error` / `debug`，前缀 `[pkgName]`
- `VipMySQLPool`：mysql2 连接池封装（`src/orm/mysql.ts`）
  - `constructor(options)` / `static createPool(options)`
  - `query(sql)`：取连接 → 执行 → `releaseConnection`
  - `createDataBaseName(databaseName)`：`CREATE DATABASE IF NOT EXISTS …`
  - `transaction(transactionFun)`：`beginTransaction` → 执行 → `commit` / `rollback`
  - 公开属性 `pool: MySQLPool`
- `SequelizeORM`：Sequelize 连接封装（`src/orm/sequelize.ts`）
  - `getConnect()`：`connectUri` 存在时 `new Sequelize(connectUri, options)`，否则 `new Sequelize(options)`
  - `retry()`：`sequelize.authenticate()`
  - `disconnect()`：`sequelize.close()`
- `VipSequelize`：Sequelize 实体约定（**定义在 `@142vip/egg`，不在 `egg-sequelize`**）
  - `BaseOptions`：`freezeTableName`、`timestamps`、`createdAt: 'createTime'`、`updatedAt: 'updateTime'`、`deletedAt: false`、`beforeBulkUpdate` hook
  - `BaseEntity`：`id`（BIGINT PK autoIncrement）、`deleted`（BIGINT default false）
  - `createEntity(userSequelizeEntity)`：`Object.assign({}, BaseEntity, userSequelizeEntity)`
- `IORedis`：`createClient(config)`、`createCluster(nodes, options)`（`src/cache/redis.ts`）
- `RedisMode`：`STANDARD = 'standard'`、`CLUSTER = 'cluster'`、`SENTINEL = 'sentinel'`
- `BaseService`：Sequelize 实体占位 Service（`src/base/base.service.ts`），`insertData()` 为占位实现

### 未从包入口导出

- `src/grpc/base.grpc.service.ts`：`BaseGrpcService`（`app`、`ctx`、`config`、`testGrpcWithEgg()`）
- `src/grpc/example.grpc.service.ts`：`EggGrpcExampleService`

### `EggPluginManager` 挂载 API

配置存在且 `loaders` 与当前 `appOrAgent.type` 匹配时，在 `app[pluginName]`（或 `agent[pluginName]`）挂载管理器对象：

- `getInstance(name?)`：单实例默认名 `default`；多实例按 `clients` 的 key 取
- `getInstances()`：`Record<string, T>`
- `getInstanceNames()`：单实例 `['default']`；多实例为 `Object.keys(clients)`

`isLoaderPlugin()` 判定逻辑：

- `config[pluginName] == null` → 不加载
- `loaders` 含 `'app'` 且 `type !== 'application'` → 不加载
- `loaders` 含 `'agent'` 且 `type !== 'agent'` → 不加载

### 配置结构（`defaultPluginConfig` 生成）

```text
{
  default: { pkgName: '@142vip/egg-xxx', /* 各实例共享 */ },
  loaders: ['app'],           // 或 ['agent']、['app', 'agent']
  client: { /* 单实例，与 default 合并 */ },
  clients: { a: {}, b: {} },  // 多实例；存在时忽略单 client 逻辑
}
```

合并到实例时，`getPluginConfig(instanceName)` 注入 `instanceName` 与 `loaders`。

### 类型（`src/egg.interface.ts`）

- `EggApp`：`config`、`addSingleton`、`coreLogger`、`createAnonymousContext`、`[pluginName]`
- `EggPluginInstance<T>`：`getInstance` / `getInstances` / `getInstanceNames`
- `PluginCreateInstance`：`(config: EggPluginConfig, app: EggApp) => instance`
- `EggCoreLogger`：`info` / `warn` / `error` / `debug`

## 配置

本包为库，**无** `config/config.default.js`。子插件通过 `defaultPluginConfig(pkgName, userConfig)` 写入各自顶层键；`PluginConfig` 接口要求 `pkgName` 字段。

## 最佳实践

- 新建 `egg-*` 插件：`app.js` / `agent.js` 继承 `EggPluginBoot`，`pluginName` 使用 `RegisterEggPluginName` 枚举，避免硬编码字符串与配置键不一致。
- 单实例用 `client`，多数据源用 `clients`；通过 `getInstance(name)` 获取，**不要**假设 `app.axios` 直接是 axios 实例。
- `grpcServer` 默认仅在 `agent.js` 加载（见 `egg-grpc-server`）；其他插件默认 `loaders: ['app']`。
- 插件内日志统一用 `VipEggPluginLogger.getInstance(pluginConfig, app)`，前缀为 `pkgName`。
- Sequelize 实体约定用 `@142vip/egg` 的 `VipSequelize`，不要从 `egg-sequelize` 寻找。
- 修改公开 API 后执行 `pnpm build`，子插件以 workspace 依赖消费 `dist`。

## 构建

`unbuild` 双格式（`.mjs` + `.cjs`）。

```shell
cd packages/egg && pnpm build
```

## 验证

```shell
cd packages/egg && pnpm test
cd packages/egg && pnpm typecheck
```

## 演示

`apps/egg-demo`（通过各 `@142vip/egg-*` 插件集成验证）
