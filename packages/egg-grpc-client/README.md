# @142vip/egg-grpc-client

[![NPM version](https://img.shields.io/npm/v/@142vip/egg-grpc-client?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/egg-grpc-client)

## 安装

```shell
# npm
npm install @142vip/egg-grpc-client
# pnpm
pnpm i @142vip/egg-grpc-client
```

## 配置

### 默认配置

```js
const { defaultPluginConfig } = require('@142vip/egg')
const { exampleProto, GrpcConnectURI } = require('@142vip/grpc')
const { name: pkgName } = require('../package.json')

module.exports = {
  grpcClient: defaultPluginConfig(pkgName, {
    client: {
      connectUri: GrpcConnectURI.PORT_50001,
      protoPaths: [exampleProto],
    },
  }),
}
```

### 单客户端

```js
const { exampleProto } = require('@142vip/egg-grpc-server/example/example-grpc')
const { GrpcConnectURI } = require('@142vip/grpc')

module.exports = {
  grpcClient: {
    client: {
      connectUri: GrpcConnectURI.PORT_50003,
      protoPaths: [exampleProto],
    },
  },
}
```

### 多客户端

```javascript
const { exampleProto } = require('@142vip/egg-grpc-server/example/example-grpc')
const { GrpcConnectURI } = require('@142vip/grpc')

module.exports = {
  grpcClient: {
    clients: {
      example1: {
        connectUri: GrpcConnectURI.PORT_50001,
        protoPaths: [exampleProto],
      },
      example2: {
        connectUri: GrpcConnectURI.PORT_50002,
        protoPaths: [exampleProto],
      },
    },
  },
}
```

## 使用

### 获取实例

```js
// 获取grpc客户端
const grpcClient = this.app.grpcClient

// 单客户端配置，获取实例
const defaultInstance = grpcClient.getInstance('default')

// 多客户端配置，获取实例
const example1Instance = grpcClient.getInstance('example1')
const example2Instance = grpcClient.getInstance('example2')
```

### 获取Service客户端

```js
const exampleService = example1Instance.getService(exampleProtoServicePath)
```

### 调用方法

#### 客户端非流式、服务端非流式

```js
import { exampleProtoServicePath, GrpcExampleServiceMethod, sendGrpcRequest } from '@142vip/grpc'

// 调用ClientToServer方法，客户端非流式、服务端非流式
const response = await sendGrpcRequest(exampleServiceClient, GrpcExampleServiceMethod.ClientToServer, {
  name: GrpcExampleServiceMethod.ClientToServer
})
console.log(`${GrpcExampleServiceMethod.ClientToServer} response===>`, response)
```

#### 客户端非流式、服务端流式

```js
import { exampleProtoServicePath, GrpcExampleServiceMethod, sendGrpcRequest } from '@142vip/grpc'

// 调用ClientToServerStream方法，客户端非流式、服务端流式
const response = await sendGrpcRequest(exampleServiceClient, GrpcExampleServiceMethod.ClientToServerStream, {
  name: GrpcExampleServiceMethod.ClientToServerStream
})
console.log(`${GrpcExampleServiceMethod.ClientToServerStream} response===>`, response)
```

#### 客户端流式、服务端非流式
```js
import { exampleProtoServicePath, GrpcExampleServiceMethod, sendGrpcRequest } from '@142vip/grpc'

// 调用ClientStreamToServerStream方法，客户端流式、服务端流式
const response = await sendGrpcRequest(exampleServiceClient, GrpcExampleServiceMethod.ClientStreamToServerStream, {
  name: GrpcExampleServiceMethod.ClientStreamToServerStream
})
console.log(`${GrpcExampleServiceMethod.ClientStreamToServerStream} response===>`, response)
```

#### 客户端流式、服务端流式

```js
import { exampleProtoServicePath, GrpcExampleServiceMethod, sendGrpcRequest } from '@142vip/grpc'

// 调用ClientStreamToServerStream方法，客户端流式、服务端流式
const response = await sendGrpcRequest(exampleServiceClient, GrpcExampleServiceMethod.ClientStreamToServerStream, {
  name: GrpcExampleServiceMethod.ClientStreamToServerStream
})
console.log(`${GrpcExampleServiceMethod.ClientStreamToServerStream} response===>`, response)
```

基于`sendGrpcRequest`方法，可以很方面地实现`GRPC`的四种模式调用，同时支持`async/await`操作，在业务中可以直接使用`try/catch`捕获异常。

## 单元测试

- [客户端请求](https://github.com/142vip/core-x/tree/main/apps/egg-demo/test/egg-grpc-client.ts)
- [单客户端测试](https://github.com/142vip/core-x/tree/main/apps/egg-demo/test/egg-grpc-client/simple-instance.spec.ts)
- [多客户端测试](https://github.com/142vip/core-x/tree/main/apps/egg-demo/test/egg-grpc-client/multi-instance.spec.ts)

## 参考

- [egg-demo](https://github.com/142vip/core-x/tree/main/apps/egg-demo)
- [@142vip/grpc](https://www.npmjs.com/package/@142vip/grpc)
- [@142vip/egg](https://www.npmjs.com/package/@142vip/egg)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
