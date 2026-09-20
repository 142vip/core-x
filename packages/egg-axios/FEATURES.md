# @142vip/egg-axios

技术说明。不随 npm 发布。

## 定位

在 Egg 应用中挂载 `@142vip/axios` 的 `VipAxiosInstance`；Egg 配置顶层键为 `axios`（与 `package.json` → `eggPlugin.name` 一致）。

## 功能

### 插件元信息

- npm 包名：`@142vip/egg-axios`
- `eggPlugin.name`：`axios`
- `RegisterEggPluginName`：`EGG_AXIOS` → `'axios'`
- 依赖：`@142vip/axios`、`@142vip/egg`

### 入口文件

- `app.js`：`EggAxiosAgentBoot` extends `EggPluginBoot`，构造参数为 `app`
- `agent.js`：`EggAxiosAgentBoot` extends `EggPluginBoot`，构造参数为 `agent`
- 两者均调用 `createEggAxiosInstance`（`core/axios.js`）

### `createEggAxiosInstance(pluginConfig, app)` 流程

1. `VipEggPluginLogger.getInstance(pluginConfig, app)`
2. 内置默认配置合并进 `pluginConfig`：
   - `headers.common['Content-Type']`：`application/json; charset=UTF-8`
   - `timeout`：`5000`
3. `mergeConfig(defaultConfig, pluginConfig)`（`@142vip/egg`）
4. `createVipAxios(config)`（`@142vip/axios`）
5. 注册请求拦截器：`pluginConfig.requestInterceptorsHandler ?? defaultRequestInterceptor`
6. 注册响应拦截器：`pluginConfig.responseInterceptorsHandler ?? defaultResponseInterceptor`
7. 拦截器 `onRejected` 经 `pluginLogger.error` 记录
8. 返回 `vipAxios` 实例

### 挂载 API（`app.axios` / `agent.axios`）

由 `@142vip/egg` `EggPluginManager` 注入：

- `getInstance(name?)` → `VipAxiosInstance`（单实例默认名 `default`）
- `getInstances()` → `Record<string, VipAxiosInstance>`
- `getInstanceNames()` → `['default']` 或 `clients` 的 key 数组

### `config/config.default.js` 默认

```js
axios: defaultPluginConfig('@142vip/egg-axios', {
  default: {
    requestInterceptorsHandler: defaultRequestInterceptor, // @142vip/axios
    responseInterceptorsHandler: defaultResponseInterceptor, // @142vip/axios
    timeout: 5 * 1000,
  },
  client: {},
})
```

`defaultPluginConfig` 自动附加 `loaders: ['app']`。

## 配置

顶层键 **`axios`**：

- `default`：与每个实例合并；必含 `pkgName`（由 `defaultPluginConfig` 注入）
  - `requestInterceptorsHandler`：覆盖 `@142vip/axios` 默认请求拦截器
  - `responseInterceptorsHandler`：覆盖默认响应拦截器
  - `timeout`：毫秒
  - 其余字段透传 `createVipAxios`（axios 配置项）
- `client`：单实例附加配置（与 `default` 深合并）
- `clients`：多实例 `{ [instanceName]: config }`；存在时走多实例挂载
- `loaders`：`'app'` / `'agent'` / `['app', 'agent']`，默认 `['app']`

`createEggAxiosInstance` 在 `pluginConfig` 层再次内置 `timeout: 5000` 与 `Content-Type` 默认值。

## 最佳实践

- 业务代码通过 `app.axios.getInstance()` 获取客户端，不要缓存构造阶段的裸配置对象。
- 多环境多上游时使用 `clients`，按名 `getInstance('upstreamName')` 区分。
- 与 `@142vip/axios` 的 `HttpMethod`、`HttpStatus`、`sendVipRequest` 配合写测试与断言。
- Agent 进程需要发 HTTP 时，在配置中把 `loaders` 加入 `'agent'` 并确保 `agent.js` 被 Egg 加载。
- 拦截器内错误会经 `VipEggPluginLogger.error` 记录，排查时查看 `coreLogger` 中 `[pkgName]` 前缀。

## 构建

无 `build` 脚本；`package.json` `files` 发布 `agent.js`、`app.js`、`config/`、`core/` 源码。

## 验证

```shell
cd apps/egg-demo && pnpm test
# EGG_SERVER_ENV=axios        → config/config.axios.js
# EGG_SERVER_ENV=axios-multiple → config/config.axios-multiple.js
```

测试目录：`apps/egg-demo/test/egg-axios/`（单实例、多实例、配置加载）。

## 演示

`apps/egg-demo`：

- `config/plugin.js` 启用 `axios` 插件（`env: ['axios', 'axios-multiple']`）
- `config/config.axios.js`：单实例 `client.timeout: 6000`
- `config/config.axios-multiple.js`：多实例 `clients`
- `test/egg-axios/simple-instance.spec.ts`、`multiple-instance.spec.ts`
