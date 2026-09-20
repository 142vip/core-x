# @142vip/grpc

[![NPM version](https://img.shields.io/npm/v/@142vip/grpc?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/grpc)

Grpc 工具包，支持 proto 文件加载、解析，Grpc 客户端、服务端数据连接交互，支持健康检查。

## 安装

```shell
# npm
npm install @142vip/grpc

# pnpm
pnpm add @142vip/grpc
```

## 功能

- [x] `GrpcProtoLoader` 加载 proto 并解析 service
- [x] `GrpcClient` 注册/获取 gRPC 服务客户端
- [x] `GrpcServer` 注册服务、监听端口、内置健康检查
- [x] `grpcSimpleHandler` / `grpcStreamHandler` 服务端方法包装
- [x] 示例：`GrpcExampleService` `GrpcExampleServerManager`
- [x] 包内 `pnpm dev:client` / `dev:server` 示例脚本

## 配置

`GrpcProtoLoader` 默认 `DEFAULT_LOADER_OPTIONS`（`keepCase`、`longs: String`、`enums: String`）；可传入 `VipProtoLoaderOptions` 覆盖。

## 使用

```ts
import {
  exampleProto,
  exampleProtoServicePath,
  GrpcClient,
  GrpcProtoLoader,
  GrpcServer,
  grpcSimpleHandler,
} from '@142vip/grpc'

const loader = new GrpcProtoLoader(exampleProto)
const ServiceCtor = loader.getClientServiceConstructor(exampleProtoServicePath)

const client = new GrpcClient('localhost:50051')
client.registerService(exampleProtoServicePath, ServiceCtor)

const server = new GrpcServer()
// server.addService(...) 见包内 example
await server.listen('0.0.0.0:50051')
```

本地示例：

```shell
cd packages/grpc && pnpm dev:server
cd packages/grpc && pnpm dev:client
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/grpc
```

## 参考

- [@142vip/grpc](https://www.npmjs.com/package/@142vip/grpc)
- [@grpc/grpc-js](https://www.npmjs.com/package/@grpc/grpc-js)
- [@142vip/egg-grpc-client](https://www.npmjs.com/package/@142vip/egg-grpc-client) / [egg-grpc-server](https://www.npmjs.com/package/@142vip/egg-grpc-server)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
