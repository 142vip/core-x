# @142vip/egg-swagger

技术说明。不随 npm 发布。

## 定位

Egg 插件占位：`eggPlugin.name` 为 `swagger`；`core/swagger.js` **尚未实现** Swagger / OpenAPI 文档能力，仅验证插件挂载链路。

## 功能

### 插件元信息

- npm 包名：`@142vip/egg-swagger`
- `eggPlugin.name`：`swagger`
- `RegisterEggPluginName`：`EGG_SWAGGER` → `'swagger'`
- 依赖：`@142vip/egg`、`@142vip/utils`

### 入口文件

- `app.js`：`EggSwaggerAppBoot` extends `EggPluginBoot`
- `agent.js`：`EggSwaggerAgentBoot` extends `EggPluginBoot`
- 工厂：`createEggSwaggerInstance`（`core/swagger.js`）

### `createEggSwaggerInstance(pluginConfig, app)`

1. `VipEggPluginLogger.getInstance(pluginConfig, app)`
2. `pluginLogger.log('plugin init')`
3. **无返回值**（`undefined`）；不创建 Swagger UI / spec 对象

### 挂载 API（`app.swagger`）

由 `@142vip/egg` `EggPluginManager` 注入（配置存在且 loaders 匹配时）：

- `getInstance(name?)` → `undefined`（当前工厂无返回实例）
- `getInstances()` → `{ default: undefined }`（单实例场景）
- `getInstanceNames()` → `['default']`

### `config/config.default.js` 默认

```js
swagger: defaultPluginConfig('@142vip/egg-swagger', {
  default: {},
  client: {},
})
```

`loaders` 默认 `['app']`。

## 配置

顶层键 **`swagger`**（与 `RegisterEggPluginName.EGG_SWAGGER` 一致）：

- `default`：空对象占位；含 `pkgName`
- `client`：单实例扩展位（当前未消费）
- `clients`：多实例扩展位（当前未消费）
- `loaders`：默认 `['app']`

与 `@142vip/egg-validate` 包内错误的 `swagger` 配置键无关：validate 插件应使用 **`validate`** 键（见 `egg-validate` FEATURES）。

## 最佳实践

- 生产环境勿依赖本包提供 API 文档能力；待 `createEggSwaggerInstance` 实现后再接入。
- 启用插件仅验证挂载链路时，检查 `coreLogger` 中 `[pkgName] plugin init` 日志即可。
- 配置键必须为 `swagger`，不要写入 `validate` 或其他键。
- 与 `egg-validate` 同时规划时，两插件配置键分别为 `swagger` 与 `validate`，互不替代。

## 构建

无 `build` 脚本；发布 `agent.js`、`app.js`、`config/`、`core/` 源码。

## 验证

```shell
cd apps/egg-demo && pnpm test
```

`apps/egg-demo` 未默认启用 `swagger` 插件。

## 演示

无
