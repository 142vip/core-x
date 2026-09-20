# @142vip/egg-mysql

技术说明。不随 npm 发布。

## 定位

Egg 插件：通过 `@142vip/egg` 的 `VipMySQLPool` 创建 mysql2 连接池，挂载到 `app.mysql`（或 `agent.mysql`）；配置顶层键为 `mysql`。

## 功能

### 插件元信息

- npm 包名：`@142vip/egg-mysql`
- `eggPlugin.name`：`mysql`
- `RegisterEggPluginName`：`EGG_MYSQL` → `'mysql'`
- 依赖：`@142vip/egg`、`@142vip/utils`

### 入口文件

- `app.js`：`EggMysqlAppBoot` extends `EggPluginBoot`
- `agent.js`：`EggMysqlAgentBoot` extends `EggPluginBoot`
- 工厂：`createEggMysqlInstance`（`core/mysql.js`）

### `createEggMysqlInstance(pluginConfig, app)` 流程

1. `VipEggPluginLogger.getInstance(pluginConfig, app)`
2. `new VipMySQLPool({ ... })`，读取字段：
   - `host` → `pluginConfig.host`
   - `port` → `pluginConfig.port`
   - `user` → `pluginConfig.userName`（**注意驼峰 `userName`，非 `username`**）
   - `password` → `pluginConfig.password`
   - `database` → `pluginConfig.database`
   - 池参数固定：`waitForConnections: true`、`connectionLimit: 10`、`maxIdle: 10`、`idleTimeout: 60000`、`queueLimit: 0`、`enableKeepAlive: true`、`keepAliveInitialDelay: 0`
3. 若 `pluginConfig.database != null`，调用 `vipMysqlPool.createDataBaseName(database)`
4. 返回 `vipMysqlPool.pool`（mysql2 `Pool` 对象）
5. 失败时 `pluginLogger.error`，无 throw

### 挂载 API（`app.mysql`）

- `getInstance(name?)` → mysql2 `Pool`
- `getInstances()` → `Record<string, Pool>`
- `getInstanceNames()` → `['default']` 或 `clients` key 列表

### `config/config.default.js` 默认

```js
mysql: defaultPluginConfig('@142vip/egg-mysql', {
  default: {
    database: null,
    connectionLimit: 5, // 写入 default；实例创建时 connectionLimit 固定为 10
  },
  client: {
    username: 'root', // 注意：core/mysql.js 读取 userName，此处 username 不会生效
  },
})
```

## 配置

顶层键 **`mysql`**：

- `default`
  - `pkgName`：由 `defaultPluginConfig` 注入
  - `database`：库名；非 null 时自动 `CREATE DATABASE IF NOT EXISTS`
  - `connectionLimit`：写入 `default` 占位，**当前 `core/mysql.js` 未读取**，池固定 `connectionLimit: 10`
- `client`：单实例连接信息（与 `default` 深合并后作为 `pluginConfig`）
  - 生效字段：`host`、`port`、`userName`、`password`、`database`
  - `config.default.js` 示例中的 `username` **不会**映射到 `userName`
- `clients`：多库多实例 `{ db1: { host, port, userName, password, database }, db2: { ... } }`
- `loaders`：默认 `['app']`

## 最佳实践

- 连接账号字段在 `client` / `clients` 中写 **`userName`**（与 `core/mysql.js` 一致），不要仅写 `username`。
- 生产环境在 `client` / `clients` 中显式填写 `host`、`port`、`password`。
- 多库场景用 `clients`，Service 内 `app.mysql.getInstance('逻辑名')` 取池。
- 连接失败时查看 `coreLogger` 中 `[pkgName]` 前缀错误日志（`dataBase create failed`）。
- Agent 进程需要访问 MySQL 时将 `loaders` 包含 `'agent'`。

## 构建

无 `build` 脚本；发布 `agent.js`、`app.js`、`config/`、`core/` 源码。

## 验证

```shell
cd apps/egg-demo && pnpm test
# EGG_SERVER_ENV=mysql          → config/config.mysql.js
# EGG_SERVER_ENV=mysql-multiple → config/config.mysql-multiple.js
```

测试：`apps/egg-demo/test/egg-mysql/simple-instance.spec.ts`。

## 演示

`apps/egg-demo`：

- `config/plugin.js` 启用 `mysql`（`env: ['mysql', 'mysql-multiple']`）
- `config/config.mysql.js`：单实例 `host` / `port` / `username` / `password`（演示配置用 `username`，生产应改为 `userName`）
- `config/config.mysql-multiple.js`：多实例 `clients`
