# @142vip/egg-grpc-server

技术说明。不随 npm 发布。

## 定位

Egg 插件：在 **Agent 进程**启动 gRPC Server，将 `app/grpc` 目录下 Service 类方法绑定到 proto RPC；配置顶层键为 `grpcServer`。

## 功能

### 插件元信息

- npm 包名：`@142vip/egg-grpc-server`
- `eggPlugin.name`：`grpcServer`
- `RegisterEggPluginName`：`EGG_GRPC_SERVER` → `'grpcServer'`
- 依赖：`@142vip/egg`、`@142vip/grpc`

### 入口文件

- `app.js`：`EggGrpcServerAppBoot` extends `EggPluginBoot`（存在但默认配置不在 app 加载）
- `agent.js`：`EggGrpcServerAgentBoot` extends `EggPluginBoot`（注释：**只在 agent.js 中加载**）
- 工厂：`createEggGrpcServerInstance`（`core/grpc-server.js`）

### `createEggGrpcServerInstance(pluginConfig, app)` 流程

1. `VipEggPluginLogger.getInstance(pluginConfig, app)`
2. 解构 `connectUri`、`protoPaths`、`loaderOptions`、`grpcServicePath`、`instanceName`（默认 `'default'`）
3. 若 `app.config.grpcServer.loaders` 含 `PluginLoader.APP` → `pluginLogger.error('GrpcServer 只允许在agent.js上加载，避免端口占用冲突')` 并 `return`
4. `new GrpcServer()`（`@142vip/grpc`）
5. `grpcPath = grpcServicePath ?? 'app/grpc'`（常量 `GRPC_SERVICE_PATH`）
6. 若 `app.__grpc == null`：
   - `app.loader.loadToContext(servicePaths, 'service', { call: true, fieldClass: '__grpc' })`
   - `servicePaths` 来自各 loadUnit 下 `join(unit.path, grpcPath)`，过滤 `node_modules`
7. `new GrpcProtoLoader(protoPaths, loaderOptions)`
8. `ctx = app.createAnonymousContext()`，`grpcServiceMap = ctx.service`
9. 遍历 `grpcProtoLoader.getGrpcServiceDetail()`：
   - 取 `serviceName`，在 `grpcServiceMap[serviceName]` 找实现类
   - 未找到 → `pluginLogger.error` 并 `return`
   - `bindServiceMethod(ServiceClientConstructor.service, serviceMethodHandler)` 绑定方法（大小写兼容）
   - `grpcServer.registerService(serviceDef, methodHandlers)`
10. `app.beforeStart`：`app.grpcServer.getInstance(instanceName).listen(connectUri)`，日志端口
11. `app.beforeClose`：对所有实例 `forceShutdown()`
12. 返回 `grpcServer`

### `bindServiceMethod(service, serviceMethod)`

对每个 proto 方法名 `methodName`：

- 查找 `serviceMethod[methodName]`、`serviceMethod[lowerFirst(methodName)]`、`serviceMethod[upperFirst(methodName)]`
- 生成 `handlers[methodNameLower]`、`handlers[methodNameUpper]`（`bind` 到实现方法）

### `BaseGrpcService`（`core/base-grpc.service.js`）

- `constructor(app)`：挂载 `this.app`、`this.ctx = app.createAnonymousContext()`、`this.config = app.config`
- 业务 gRPC Service 类可继承此类

### `example/example-grpc.js` 再导出（`@142vip/grpc`）

- `exampleProto`：proto 文件路径
- `GrpcConnectURI`
- `clientToServer`、`clientStreamToServer`、`clientToServerStream`、`clientStreamToServerStream`
- `GrpcExampleServerManager`

### 返回实例 `GrpcServer`（`@142vip/grpc`）主要方法

- `listen(connectUri)`：绑定端口并启动（含健康检查挂载）
- `registerService(serviceDef, handlers)`
- `setHealthStatus(methodName, status)`
- `forceShutdown()`：应用关闭时调用

### 挂载 API（`app.grpcServer` / `agent.grpcServer`）

- `getInstance(name?)` → `GrpcServer`（默认名 `default`）
- `getInstances()` / `getInstanceNames()`

### `config/config.default.js` 默认

```js
grpcServer: defaultPluginConfig('@142vip/egg-grpc-server', {
  default: {
    loaderOptions: {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    },
  },
  loaders: [PluginLoader.AGENT], // 仅 agent.js 加载
})
```

## 配置

顶层键 **`grpcServer`**：

- `default`
  - `pkgName`
  - `loaderOptions`：proto-loader 选项（见上）
- `client`（单实例，与 `default` 合并）
  - `connectUri`：监听地址（如 `GrpcConnectURI.PORT_50003`）
  - `protoPaths`：proto 文件路径数组
  - `loaderOptions`：可覆盖 `default.loaderOptions`
  - `grpcServicePath`：RPC 实现类目录，默认 `'app/grpc'`
  - `instanceName`：多实例名，默认 `'default'`
- `clients`：多 gRPC 服务实例
- `loaders`：**必须**为 `['agent']`（或至少不含 `'app'`）；含 `'app'` 时工厂拒绝启动并打 error 日志

## 最佳实践

- 保持 `loaders: ['agent']`，与包内 `config/config.default.js` 一致；勿在 application worker 启 gRPC 端口。
- RPC 实现类放在 `app/grpc/`（或 `grpcServicePath` 指定目录），**文件名 / 导出类名**须与 proto `service` 名对应（如 `Example.js` → `serviceName: 'Example'`）。
- 方法名与 proto RPC 一致；`bindServiceMethod` 支持首字母大小写映射。
- 客户端联调使用 `@142vip/egg-grpc-client`：`getInstance()` + `getService(exampleProtoServicePath)`。
- 示例 proto 与工具从 `@142vip/egg-grpc-server/example/example-grpc` 或 `@142vip/grpc` 引入，避免手写路径错误。
- 应用关闭依赖 `beforeClose` 中 `forceShutdown()`，避免端口占用。

## 构建

无 `build` 脚本；发布 `agent.js`、`app.js`、`config/`、`core/`、`example/` 源码。

## 验证

```shell
cd apps/egg-demo && pnpm test
# EGG_SERVER_ENV=grpc-server          → config/config.grpc-server.js
# EGG_SERVER_ENV=grpc-server-multiple → config/config.grpc-server-multiple.js
```

测试：`apps/egg-demo/test/egg-grpc-server/simple-instance.spec.ts`、`multiple-instance.spec.ts`。

## 演示

`apps/egg-demo`：

- `config/plugin.js` 启用 `grpcServer`（`env: ['grpc-server', 'grpc-server-multiple']`）
- `app/grpc/Example.js`：Example gRPC Service 实现
- `config/config.grpc-server.js`：`connectUri` + `protoPaths: [exampleProto]`
- 与 `egg-grpc-client` 同端口联调（`GrpcConnectURI.PORT_50003`）
