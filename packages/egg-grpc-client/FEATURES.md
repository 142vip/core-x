# @142vip/egg-grpc-client

技术说明。不随 npm 发布。

## 定位

Egg 插件：挂载 `@142vip/grpc` 的 `GrpcClient` 到 `app.grpcClient`；配置顶层键为 `grpcClient`（与 `eggPlugin.name` 一致）。

## 功能

### 插件元信息

- npm 包名：`@142vip/egg-grpc-client`
- `eggPlugin.name`：`grpcClient`
- `RegisterEggPluginName`：`EGG_GRPC_CLIENT` → `'grpcClient'`
- 依赖：`@142vip/egg`、`@142vip/grpc`

### 入口文件

- `app.js`：`EggGrpcClientAppBoot` extends `EggPluginBoot`（构造参数名为 `agent`，实际传入 app）
- `agent.js`：`EggGrpcClientAgentBoot` extends `EggPluginBoot`
- 工厂：`createEggGrpcClientInstance`（`core/grpc-client.js`）

### `createEggGrpcClientInstance(pluginConfig, app)` 流程

1. `VipEggPluginLogger.getInstance(pluginConfig, app)`
2. 解构 `connectUri`、`protoPaths`、`loaderOptions` from `pluginConfig`
3. `new GrpcClient(connectUri)`
4. `new GrpcProtoLoader(protoPaths, loaderOptions)`
5. 遍历 `grpcProtoLoader.getServicePaths()`：
   - `getClientServiceConstructor(servicePath)` → `registerService(servicePath, constructor)`
6. `grpcClient.getServiceSize() === 0` 时 `pluginLogger.error('grpc client connect size is 0')`
7. `pluginLogger.log('plugin init')`
8. 返回 `grpcClient`

源码注释 `TODO 考虑将grpcClient实例挂载ctx上`（未实现）。

### 返回实例 `GrpcClient`（`@142vip/grpc`）方法

- `registerService(servicePath, IServiceClientConstructor)`
- `getService<T>(servicePath)`：获取 RPC Service 客户端；未注册抛 `GrpcException`
- `getConnectUri()`：连接地址
- `getServicePaths()`：已注册 service path 数组
- `getServiceSize()`：已注册服务数量
- `removeService(servicePath?)`：关闭连接；`servicePath` 为空时关闭全部

### 挂载 API（`app.grpcClient`）

```js
app.grpcClient.getInstance() // 默认实例名 default
app.grpcClient.getInstance('name')
app.grpcClient.getInstances()
app.grpcClient.getInstanceNames()
```

典型调用链：

```js
const grpcClient = app.grpcClient.getInstance()
const exampleClient = grpcClient.getService(exampleProtoServicePath)
// exampleProtoServicePath = 'vip.grpc.example.v1.Example'（@142vip/grpc）
```

### `config/config.default.js` 默认

```js
grpcClient: defaultPluginConfig('@142vip/egg-grpc-client', {
  client: {
    connectUri: GrpcConnectURI.PORT_50001, // @142vip/grpc
    protoPaths: [exampleProto], // @142vip/grpc protos/example.proto
  },
})
```

`loaders` 默认 `['app']`。

## 配置

顶层键 **`grpcClient`**：

- `default`：`pkgName` 及共享项
- `client`（单实例，与 `default` 合并）
  - `connectUri`：gRPC 服务地址（如 `GrpcConnectURI.PORT_50003`）
  - `protoPaths`：proto 文件路径数组
  - `loaderOptions`：可选，传给 `GrpcProtoLoader`（默认见 `@142vip/grpc` `DEFAULT_LOADER_OPTIONS`）
- `clients`：多客户端 `{ instanceName: { connectUri, protoPaths, loaderOptions } }`
- `loaders`：默认 `['app']`；Agent 侧调用时在 `loaders` 中加入 `'agent'`

## 最佳实践

- 先 `const grpcClient = app.grpcClient.getInstance()`，再 `grpcClient.getService(servicePath)` 调用 RPC；勿使用不存在的虚构路径（例如 `app.grpcClient.example.unary`）。
- `servicePath` 与 proto 定义一致（demo 使用 `exampleProtoServicePath` = `'vip.grpc.example.v1.Example'`）。
- 与 `egg-grpc-server` 联调时对齐 `connectUri` 与 `protoPaths`（参考 `apps/egg-demo/config/config.grpc-client.js`）。
- 多下游服务使用 `clients` + `getInstance(name)`。
- `getServiceSize() === 0` 时检查 proto 路径与 `loaderOptions`。
- 测试可配合 `@142vip/grpc` 的 `sendGrpcRequest`、`GrpcExampleServiceMethod`。

## 构建

无 `build` 脚本；发布 `agent.js`、`app.js`、`config/`、`core/` 源码。

## 验证

```shell
cd apps/egg-demo && pnpm test
# EGG_SERVER_ENV=grpc-client          → config/config.grpc-client.js
# EGG_SERVER_ENV=grpc-client-multiple → config/config.grpc-client-multiple.js
```

测试：`apps/egg-demo/test/egg-grpc-client/simple-instance.spec.ts`、`multiple-instance.spec.ts`。

## 演示

`apps/egg-demo`：

- `config/plugin.js` 启用 `grpcClient`（`env: ['grpc-client', 'grpc-client-multiple']`）
- `config/config.grpc-client.js`：`connectUri: GrpcConnectURI.PORT_50003`、`protoPaths: [exampleProto]`
- `test/egg-grpc-client/egg-grpc-client.ts`：`getService(exampleProtoServicePath)` + `sendGrpcRequest`
