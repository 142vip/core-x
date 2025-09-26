# @142vip/egg-grpc-server

[![NPM version](https://img.shields.io/npm/v/@142vip/egg-grpc-server?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/egg-grpc-server)

## 安装

```shell
# npm
npm install @142vip/egg-grpc-server
# pnpm
pnpm i @142vip/egg-grpc-server
```

## 配置

### 默认配置

`@142vip/egg-grpc-server`插件，做如下默认限定：

- 只在`agent.js`中加载，防止在`app.js`中加载，因为`app.js`是在每个worker中都加载的，同一端口会被占用，导致启动失败。
- 限定proto文件的加载方式

```js
const { defaultPluginConfig, PluginLoader } = require('@142vip/egg')
const { name: pkgName } = require('../package.json')

module.exports = {
  grpcServer: defaultPluginConfig(pkgName, {
    default: {
      loaderOptions: {
        keepCase: true,
        longs: Stri,
        enums: String,
        defaults: true,
        oneofs: true,
      },
    },
    // Grpc只在agent.js中加载
    loaders: [PluginLoader.AGENT],
  }),
}
```

### 单实例配置

```js
const { exampleProto } = require('@142vip/egg-grpc-server/example/example-grpc')
const { GrpcConnectURI } = require('@142vip/grpc')

module.exports = {
  grpcServer: {
    client: {
      connectUri: GrpcConnectURI.PORT_50001,
      protoPaths: [exampleProto],
    },
  },
}
```

### 多实例配置

```javascript
const { exampleProto } = require('@142vip/egg-grpc-server/example/example-grpc')
const { GrpcConnectURI } = require('@142vip/grpc')

module.exports = {
  grpcServer: {
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

### 更多配置

`@142vip/egg-grpc-client`客户端：

- [默认配置](https://github.com/142vip/core-x/tree/main/packages/egg-grpc-client/config/config.default.js)
- [单实例配置](https://github.com/142vip/core-x/tree/main/apps/egg-demo/config/config.grpc-client.js)
- [多实例配置](https://github.com/142vip/core-x/tree/main/apps/egg-demo/config/config.grpc-client-multiple.js)

`@142vip/egg-grpc-server`服务端：

- [默认配置](https://github.com/142vip/core-x/tree/main/packages/egg-grpc-server/config/config.default.js)
- [单实例配置](https://github.com/142vip/core-x/tree/main/apps/egg-demo/config/config.grpc-server.js)
- [多实例配置](https://github.com/142vip/core-x/tree/main/apps/egg-demo/config/config.grpc-server-multiple.js)

## 使用

### 定义proto文件

### 实现rpc方法

基于Egg框架的目录风格，在app目录下，新建grpc目录。所有的rpc方法通过使用该目录下的js文件管理。例如，新建`Example.js`文件

```javascript
// app/grpc/Example.js

const BaseGrpcService = require('@142vip/egg-grpc-server/core/base-grpc.service')

/**
 * 直接继承GrpcExampleService方法，用来演示
 * - 可以另外拓展
 */
class Example extends BaseGrpcService {
  async test() {
    const { ctx } = this
    console.log('test:', ctx.method)
  }

  // async ClientToServer(requestData) {
  //   console.log(11, this)
  //   const { app } = this
  //   console.log(123, app)
  //   console.log(123123, app.grpc)
  //   return await clientToServer(requestData)
  // }
}

module.exports = Example
```

**注意：在Egg框架下的所有rpc方法实现，都要继承`BaseGrpcService`父类实现，类似框架的`Service`加载模式，这样才能在对应实现类中使用`this.app`对象，融入`Egg`框架体系**

## 参考

- [egg-demo](https://github.com/142vip/core-x/tree/main/apps/egg-demo)
- [@142vip/grpc](https://www.npmjs.com/package/@142vip/grpc)
- [@142vip/egg](https://www.npmjs.com/package/@142vip/egg)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
