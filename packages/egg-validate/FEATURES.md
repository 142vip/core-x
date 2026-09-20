# @142vip/egg-validate

技术说明。不随 npm 发布。

## 定位

Egg 插件：计划对 REST 参数做 Joi 校验；**当前为骨架**，`core/validate.js` 未形成稳定可用的校验实例。

## 功能

### 插件元信息

- npm 包名：`@142vip/egg-validate`
- `eggPlugin.name`：`validate`
- `RegisterEggPluginName`：`EGG_VALIDATE` → `'validate'`
- 依赖：`@142vip/egg`、`@142vip/utils`、`joi@17.13.3`

### 入口文件

- `app.js`：`EggValidateAppBoot` extends `EggPluginBoot`
- `agent.js`：`EggValidateAgentBoot` extends `EggPluginBoot`（构造参数名为 `app`，实际传入 agent）
- 工厂：`createEggValidateInstance`（`core/validate.js`）

### `createEggValidateInstance(pluginConfig, app)`

1. `VipEggPluginLogger.getInstance(pluginConfig, app)`
2. `Joi.object({})` 创建空 schema
3. `validateSchema.validateAsync()`（无入参）
4. 成功则 `return result`（Promise）；`catch` 时 `pluginLogger.error`
5. 末尾 `pluginLogger.log('plugin init')`（`return` 后不可达）

当前**未**向业务暴露可用的 Joi 校验 API 或 `ctx` 挂载。

### 挂载 API（`app.validate`）

配置正确且 `EggPluginManager` 加载成功时：

- `getInstance(name?)` → 工厂返回值（当前为 `validateAsync()` 的 Promise 或 `undefined`）
- `getInstances()` / `getInstanceNames()`

### 已知问题：包内 `config/config.default.js` 配置键错误

插件仓库内 `config/config.default.js` 导出为：

```js
module.exports = {
  swagger: defaultPluginConfig(pkgName, { // ← 错误：应为 validate
    default: {},
    client: {},
  }),
}
```

- `EggPluginManager` 读取 `config.validate`（`RegisterEggPluginName.EGG_VALIDATE`）
- 包内默认配置写在 **`swagger`** 键下，**不会**被合并到 `validate`
- 与 `@142vip/egg-swagger` 的 `swagger` 配置无关，属历史拷贝错误
- 应用须自行在 `config/config.default.js` 定义 **`validate`** 段

## 配置

应用侧顶层键必须为 **`validate`**：

- `default`：`pkgName` 及共享配置
- `client`：单实例扩展（当前工厂未消费业务 schema）
- `clients`：多实例扩展
- `loaders`：默认 `['app']`

**勿**使用插件包内自带的 `swagger` 顶层键作为 validate 配置。

## 最佳实践

- 在业务项目 `config/config.default.js` 显式添加 `validate` 段，不要依赖插件包内错误的 `swagger` 键。
- 完成实现前，Controller 层继续使用 Egg 内置校验或自行 `require('joi')`。
- 修复配置键后，用 `app.validate.getInstanceNames()` 确认插件已加载。
- 与 `egg-swagger` 同时启用时注意配置键分别为 `validate` 与 `swagger`。
- 关注后续版本 `createEggValidateInstance` 的返回值形态再接入业务。

## 构建

无 `build` 脚本；发布 `agent.js`、`app.js`、`config/`、`core/` 源码。

## 验证

```shell
cd apps/egg-demo && pnpm test
```

`apps/egg-demo` 未默认启用 `validate` 插件。

## 演示

无
