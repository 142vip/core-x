# @142vip/egg-sequelize

技术说明。不随 npm 发布。

## 定位

Egg 插件：通过 `@142vip/egg` 的 `SequelizeORM` 创建 Sequelize 连接实例，挂载到 `app.sequelize`；配置顶层键为 `sequelize`。

**实体约定 `VipSequelize`（`BaseOptions` / `BaseEntity` / `createEntity`）定义在 `@142vip/egg`，本包不导出。**

## 功能

### 插件元信息

- npm 包名：`@142vip/egg-sequelize`
- `eggPlugin.name`：`sequelize`
- `RegisterEggPluginName`：`EGG_SEQUELIZE` → `'sequelize'`
- 依赖：`@142vip/egg`、`@142vip/utils`、`sequelize@6.37.7`

### 入口文件

- `app.js`：`EggSequelizeAppBoot` extends `EggPluginBoot`
- `agent.js`：`EggSequelizeAgentBoot` extends `EggPluginBoot`（构造参数名为 `app`，实际传入 agent）
- 工厂：`createEggSequelizeInstance`（`core/sequelize.js`）

### `createEggSequelizeInstance(pluginConfig, app)` 流程

1. `VipEggPluginLogger.getInstance(pluginConfig, app)`
2. `new SequelizeORM(pluginConfig)` → `getConnect()` 得到 `sequelize` 实例
3. `authenticateRetry(sequelize, Max_Retry_Count)`，`Max_Retry_Count = 3`
   - 成功：`pluginLogger.log('连接成功！！！')`
   - `SequelizeConnectionRefusedError`：递减计数、`warn` 后递归重试
   - 其他错误或重试耗尽：`pluginLogger.error` / `throw`
4. 返回 `sequelize`（Sequelize 实例）
5. 源码注释 `todo 基于Sequelize对象，自动加载entity`（未实现）

### `SequelizeORM`（`@142vip/egg` `src/orm/sequelize.ts`）

- `getConnect()`：
  - `options.connectUri != null` → `new Sequelize(connectUri, options)`
  - 否则 → `new Sequelize(options)`
  - 支持 `options.Sequelize` 自定义构造器
- `retry()`：`authenticate()`
- `disconnect()`：`close()`

### `VipSequelize`（`@142vip/egg`，供业务定义 Model）

- `BaseOptions`：`freezeTableName: false`、`timestamps: true`、`createdAt: 'createTime'`、`updatedAt: 'updateTime'`、`deletedAt: false`、`beforeBulkUpdate` 强制 `individualHooks`
- `BaseEntity`：`id`（BIGINT PK）、`deleted`（BIGINT default false）
- `createEntity(userSequelizeEntity)`：合并 `BaseEntity` 与用户字段

### 挂载 API（`app.sequelize`）

- `getInstance(name?)` → Sequelize 实例
- `getInstances()` / `getInstanceNames()`

### 遗留文件 `core/sequelize-plus.js`（未接入主插件）

导出函数 `(app) => { ... }`，**当前 `app.js` 未引用**：

- 读取 `app.config.sequelizePlus`（独立配置键，与 `sequelize` 无关）
- 默认 `delegate: 'model'`、`baseDir: 'model'`、`benchmark: true`
- `define.freezeTableName: false`、`define.underscored: true`
- 支持 `datasources` 多数据源数组
- 自动 `loadToApp` 加载 `app/<baseDir>` 下 Model、`associate()` 关联
- `app.beforeStart` 对每个库 `authenticate` 重试（最多 3 次，间隔 2s）

### `config/config.default.js` 默认

```js
sequelize: defaultPluginConfig('@142vip/egg-sequelize', {
  default: {
    database: null,
    connectionLimit: 5,
  },
  client: {},
})
```

## 配置

顶层键 **`sequelize`**：

- `default`：`pkgName`、`database`、`connectionLimit`（占位，传给 `SequelizeORM` 的 Sequelize 标准选项）
- `client`：单实例 Sequelize 连接选项，字段为 Sequelize `Options`（至少常见：`host`、`port`、`username`、`password`、`database`、`dialect`、`logging`、`timezone`、`pool`；完整键以 Sequelize 文档为准）
- `clients`：多数据源
- `connectUri`：可选连接串（`SequelizeORM` 优先使用）
- `Sequelize`：可选自定义 Sequelize 构造器
- `loaders`：默认 `['app']`

勿与遗留 `sequelizePlus` 配置键混用（见 `core/sequelize-plus.js`）。

## 最佳实践

- 使用 `app.sequelize.getInstance()` 获取 Sequelize；连接参数放在 `client` / `clients`。
- 实体字段约定引用 `@142vip/egg` 的 `VipSequelize.BaseEntity` / `BaseOptions` / `createEntity`，不要从本包 import。
- 启动期连接失败会重试并写 `VipEggPluginLogger` 日志，仍须保证数据库可达。
- 不要依赖 `sequelize-plus.js`，除非在应用中自行 `require` 并配置 `sequelizePlus`。
- 多库用 `clients` + `getInstance('name')`。

## 构建

无 `build` 脚本；发布 `agent.js`、`app.js`、`config/`、`core/` 源码。

## 验证

```shell
cd apps/egg-demo && pnpm test
```

`apps/egg-demo/config/plugin.js` **未**默认启用 `sequelize` 插件。

## 演示

无（`egg-demo` 未集成；可按需在业务项目配置 `sequelize` 顶层键）。
