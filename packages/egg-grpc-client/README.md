# @142vip/egg-grpc-client

[![NPM version](https://img.shields.io/npm/v/@142vip/egg-grpc-client?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/egg-grpc-client)

Egg.js 框架下 gRPC 客户端插件，基于 `@142vip/grpc` 的 `GrpcClient` 与 `GrpcProtoLoader`。

## 安装

```shell
# npm
npm install @142vip/egg-grpc-client @142vip/grpc @142vip/egg

# pnpm
pnpm add @142vip/egg-grpc-client @142vip/grpc @142vip/egg
```

## 功能

- [x] 按 `protoPaths` 加载 proto 并 `registerService`
- [x] 单实例 / 多实例挂载到 `app.grpcClient`
- [x] `app.grpcClient.getInstance()` 返回 `GrpcClient`
- [x] 通过 `grpcClient.getService(servicePath)` 获取 RPC 客户端
- [x] `EggGrpcClientAppBoot` / `EggGrpcClientAgentBoot`

## 配置

`config/plugin.js`：

```js
module.exports = {
  grpcClient: {
    enable: true,
    package: '@142vip/egg-grpc-client',
  },
}
```

`config/config.default.js`：

```js
const { exampleProto } = require('@142vip/egg-grpc-server/example/example-grpc')
const { GrpcConnectURI } = require('@142vip/grpc')

module.exports = {
  grpcClient: {
    client: {
      connectUri: GrpcConnectURI.PORT_50003,
      protoPaths: [exampleProto],
      loaderOptions: {}, // 可选，传给 GrpcProtoLoader
    },
  },
}
```

插件默认（包内 `config/config.default.js`）使用 `GrpcConnectURI.PORT_50001` 与 `@142vip/grpc` 的 `exampleProto`。

## 使用

```js
const { exampleProtoServicePath, sendGrpcRequest, GrpcExampleServiceMethod } = require('@142vip/grpc')

const grpcClient = this.app.grpcClient.getInstance()
const serviceClient = grpcClient.getService(exampleProtoServicePath)
// sendGrpcRequest(serviceClient, GrpcExampleServiceMethod.ClientToServer, { name: '...' })
```

多实例：

```js
const client = this.app.grpcClient.getInstance('example1')
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/egg-grpc-client
```

## 参考

- [@142vip/egg-grpc-client](https://www.npmjs.com/package/@142vip/egg-grpc-client)
- [@142vip/grpc](https://www.npmjs.com/package/@142vip/grpc)
- [@142vip/egg-grpc-server](https://www.npmjs.com/package/@142vip/egg-grpc-server)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
