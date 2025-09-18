# @142vip/grpc

[![NPM version](https://img.shields.io/npm/v/@142vip/grpc?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/grpc)

`Grpc`工具包，支持`proto`文件加载、解析，`Grpc`客户端、服务端数据连接交互，支持健康检查。

## 安装

```shell
# npm
npm install @142vip/grpc
# pnpm
pnpm i @142vip/grpc
```

## 使用

### Proto解析

默认解析配置：

```typescript
export const DEFAULT_LOADER_OPTIONS: VipProtoLoaderOptions = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
}
```

### GRPC服务端

### GRPC客户端


## 最佳实践

- [GRPC服务端示例](example-client.js)
- [GRPC客户端示例](example-server.js)

## 健康检查

- [health.proto](./protos/health.proto)

## 单元测试

- [proto-loader.spec.ts](./test/proto-loader.spec.ts)
- [grpc-client.spec.ts](./test/grpc-client.spec.ts)
- [grpc-server.spec.ts](./test/grpc-server.spec.ts)

## 参考

- [GRPC 官网](https://grpc.io/docs/)
- [GRPC Node 官方文档](https://grpc.io/docs/languages/node/)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
