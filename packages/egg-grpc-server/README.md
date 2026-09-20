# @142vip/egg-grpc-server

[![NPM version](https://img.shields.io/npm/v/@142vip/egg-grpc-server?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/egg-grpc-server)

Egg.js 框架下 gRPC 服务端插件：加载 `app/grpc` 下 Service 实现并绑定 proto 方法。

## 安装

```shell
# npm
npm install @142vip/egg-grpc-server @142vip/grpc @142vip/egg

# pnpm
pnpm add @142vip/egg-grpc-server @142vip/grpc @142vip/egg
```

## 功能

- [x] `GrpcServer` 注册 proto 服务与方法 handler
- [x] 从 `app/grpc`（可配置 `grpcServicePath`）加载 Egg `Service` 实现类
- [x] 默认**仅在 `agent.js` 加载**（`loaders: ['agent']`），避免端口冲突
- [x] `app.beforeStart` 监听 `connectUri`；`beforeClose` 调用 `forceShutdown`
- [x] `app.grpcServer.getInstance()` 返回 `GrpcServer`
- [x] `example/example-grpc.js` 提供示例 proto 与 handler 工具
- [x] `core/base-grpc.service.js`：`BaseGrpcService` 基类

## 配置

`config/plugin.js`：

```js
module.exports = {
  grpcServer: {
    enable: true,
    package: '@142vip/egg-grpc-server',
  },
}
```

`config/config.default.js`：

```js
const { exampleProto } = require('@142vip/egg-grpc-server/example/example-grpc')
const { GrpcConnectURI } = require('@142vip/grpc')

module.exports = {
  grpcServer: {
    client: {
      connectUri: GrpcConnectURI.PORT_50003,
      protoPaths: [exampleProto],
      grpcServicePath: 'app/grpc', // 可选，默认 app/grpc
      loaderOptions: {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
      },
    },
  },
}
```

包内默认 `loaders: [PluginLoader.AGENT]`；若在配置中加入 `'app'` 加载，插件会报错并拒绝启动服务。

## 使用

在 `app/grpc/Example.js` 继承 `egg.Service`，实现与 proto 同名的 RPC 方法：

```js
const { clientToServer } = require('@142vip/egg-grpc-server/example/example-grpc')
const { Service } = require('egg')

class Example extends Service {
  async ClientToServer(requestData) {
    return await clientToServer(requestData)
  }
}
module.exports = Example
```

获取服务端实例：

```js
const server = this.app.grpcServer.getInstance()
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/egg-grpc-server
```

## 参考

- [@142vip/egg-grpc-server](https://www.npmjs.com/package/@142vip/egg-grpc-server)
- [@142vip/grpc](https://www.npmjs.com/package/@142vip/grpc)
- [@142vip/egg-grpc-client](https://www.npmjs.com/package/@142vip/egg-grpc-client)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
