# @142vip/grpc

技术说明。不随 npm 发布。

## 定位

Node.js gRPC 封装：proto 加载、`GrpcClient` / `GrpcServer`、一元与流式 handler 包装、统一 `{ data, error }` 响应与健康检查。供 `@142vip/egg-grpc-client`、`@142vip/egg-grpc-server` 与业务服务使用。

## 功能

### 子路径

- `@142vip/grpc`：主入口（`src/index.ts`）

### 核心类

**`GrpcClient`**（`src/core/grpc-client.ts`）

- `constructor(connectUri: string)`
- `registerService(servicePath, IServiceClientConstructor): void`
- `getService<T>(servicePath): T`（未连接时按已注册构造函数自动重连）
- `getConnectUri(): string`
- `getServicePaths(): string[]`
- `getServiceSize(): number`
- `removeService(servicePath?): void`（关闭单个或全部连接）

**`GrpcServer`**（`src/core/grpc-server.ts`）

- `constructor()` → 内部 `init()`
- `listen(connectUri): Promise<number>`（`bindAsync` + 自动挂载健康检查）
- `setHealthStatus(methodName, status: GrpcHealthStatus): void`
- `registerService(serviceDef, methodHandlers: UntypedMethodImplementation): void`
- `getConnectUris(): string[]`
- `getConnectInfo(): GrpcConnectInfo[]`
- `forceShutdown(): void`
- 内置 health 服务：`check`、`watch`（流式）、`list`

**`GrpcProtoLoader`**（`src/core/grpc-proto-loader.ts`）

- `constructor(protoPath: string | string[], loaderOptions?: VipProtoLoaderOptions)`
- `getPackageNames(): string[]`
- `getServiceName(servicePath): string`
- `getLoaderOptions(): VipProtoLoaderOptions`
- `getServicePaths(): string[]`
- `getServiceDetail(): GrpcServicePath[]`
- `getGrpcServiceDetail(): GrpcServiceDetail[]`
- `getServerServiceDefinition(servicePath): ServiceDefinition`
- `getClientServiceConstructor(servicePath): ServiceClientConstructor`
- `isProtobufTypeDefinition(obj): boolean`

**`DEFAULT_LOADER_OPTIONS`**

```text
{ keepCase: true, longs: String, enums: String, defaults: true, oneofs: true }
```

### Handler 与异常

- `grpcSimpleHandler(methodFunc): HandleUnaryCall`（`src/core/grpc.handler.ts`）
- `grpcStreamHandler(methodType, methodFunc)`：支持 `clientStream` / `serverStream` / `bidiStream`
- `GrpcException`（`src/core/grpc-exception.ts`）
- `grpcErrorHandler<T>(error, requestData): GrpcTraceError`
- `GRPC_ERROR_CODE` 枚举：
  - `UNKNOWN = 2`
  - `CLIENT_SERVICE_NOT_REGISTERED = 40421`
  - `METHOD_NOT_FOUND = 40422`
  - `METHOD_TYPE_NOT_SUPPORTED = 40402`
  - `INVALID_ARGUMENT = 40001`
  - `CLIENT_REQUEST = 50081`
  - `SERVER_UNKNOWN = 50091`
  - `HANDLE_UNARY_CALL = 50001`
  - `HANDLE_SERVER_STREAM_CELLl = 50002`
  - `HANDLE_CLIENT_STREAM_CALL = 50003`
  - `HANDLE_BIDI_STREAM_CALL = 50004`
  - `HANDLE_UNKNOWN = 50005`
  - `HEALTH_STATUS_NOT_FOUND = 50011`
  - `HEALTH_LIST = 50012`
  - `PROTO_ARGUMENT_ERROR = 50021`

### 工具函数（`src/utils/grpc.util.ts`）

- `methodNameToUpperFirst(methodName): string`
- `generateTraceId(): string`
- `getMethodType(methodName, serviceDef): ServiceMethodType`
- `getSimpleGrpcClient()`、`getStreamGrpcClient()`（占位）
- `sendGrpcRequest<RequestData, ResponseData>(serviceClient, methodName, requestData): Promise<ResponseData | ResponseData[]>`

### Proto 常量（`src/utils/proto.util.ts`）

路径：

- `healthProto`、`testProto`、`exampleProto`
- `protos`：上述三者数组

服务路径常量：

- Health：`healthProtoServicePath = 'vip.grpc.health.v1.Health'`，`healthProtoPackageName`，`healthProtoServiceName`
- Example：`exampleProtoServicePath = 'vip.grpc.example.v1.Example'`，`exampleProtoPackageName`，`exampleProtoServiceName`
- Test：`testProtoSimpleServicePath = 'vip.grpc.test.v1.SimpleService'`，`testProtoStreamServicePath = 'vip.grpc.test.v1.StreamService'`，`testProtoPackageName`，`testProtoSimpleServiceName`，`testProtoStreamServiceName`

### 类型与枚举（`src/enum/`）

**`grpc.interface.ts`**

- `ServiceClientDefinitionMap`
- `GrpcConnectInfo`：`connectUri`、`port`
- `GrpcConnectURI`：`PORT_50001` | `PORT_50002` | `PORT_50003`（`127.0.0.1:5000x`）
- `ServiceMethodType`：`Unary` | `ClientStream` | `ServerStream` | `BidiStream`
- `ServiceMethodFuncImpl`、`UntypedMethodImplementation`
- `GrpcTraceError`、`GrpcResponse<DataType>`、`GrpcRequest`（可选 `traceId`）

**`health.interface.ts`**

- `GrpcHealthStatus`：`UNKNOWN` | `SERVING` | `NOT_SERVING` | `SERVICE_UNKNOWN`
- `GrpcHealthErrorCode.GRPC_STATUS_NOT_FOUND = 5`
- `GRPC_SERVER_METHOD_NAME = 'grpcServer'`
- `GrpcHealthCheckOrWatchRequest`、`GrpcHealthCheckOrWatchResponse`、`GrpcHealthListRequest`、`GrpcHealthListDataResponse`、`GrpcHealthListResponse`、`GrpcHealthStatusWatcher`

**`proto.interface.ts`**

- `VipProtoLoaderOptions`、`ParsedGrpcObject`、`GrpcServicePath`、`GrpcServiceDetail`

**`server-type.interface.ts`**：导出 `ServerUnaryCall`、`ServerWritableStream`、`sendUnaryData`、`HandleCall`、`UntypedHandleCall`、`UntypedServiceImplementation`、`Server`（内部另有未导出的 `ServerReadableStream` / `ServerDuplexStream` 别名供实现使用）

**`object-stream.interface.ts`**：导出 `WriteCallback`、`IntermediateObjectReadable`、`ObjectReadable`、`IntermediateObjectWritable`、`ObjectWritable`

### 示例（`src/example.ts` / `example.manager.ts`）

- `ExampleRequestDataType`、`ExampleResponseDataType`
- `GrpcExampleService` / `grpcExampleService`：方法 `clientToServer`、`clientStreamToServer`、`clientToServerStream`、`clientStreamToServerStream`
- 同名导出函数：`clientToServer`、`clientStreamToServer`、`clientToServerStream`、`clientStreamToServerStream`
- `GrpcExampleServiceMethod`：`ClientToServer`、`ClientStreamToServer`、`ClientToServerStream`、`ClientStreamToServerStream`
- `GrpcExampleServerManager`：`registerService()`、`listen(connectUri)`、`getGrpcServer()`、`getServiceClient(connectUri)`、`shutdown()`

## 配置

无独立配置文件。运行时配置项：

- proto 文件路径（构造 `GrpcProtoLoader`）
- `VipProtoLoaderOptions`（覆盖 `DEFAULT_LOADER_OPTIONS`）
- 服务监听地址（如 `GrpcConnectURI` 或自定义 `host:port`）
- 客户端 `connectUri`（`GrpcClient` 使用 `grpc.credentials.createInsecure()`）

## 最佳实践

- 服务端方法实现返回业务数据即可；`grpcSimpleHandler` / `grpcStreamHandler` 自动包装为 `{ data }` 或 `{ error: GrpcTraceError }`
- 请求体建议带 `traceId`；缺失时 `grpcErrorHandler` 用 `generateTraceId()` 补齐
- 客户端先 `registerService(servicePath, constructor)` 再 `getService`
- 方法名与 proto 定义一致；内部通过 `methodNameToUpperFirst` 匹配 `ServiceDefinition`
- 示例联调：`GrpcExampleServerManager` + `exampleProtoServicePath`

## 构建

`unbuild` 双格式；proto 文件随包发布（`src/protos/`）

```shell
cd packages/grpc && pnpm build
```

## 验证

```shell
cd packages/grpc && pnpm build && pnpm typecheck
cd packages/grpc && pnpm test
```

## 演示

无独立 `apps/*-demo`；Egg 插件族 `egg-grpc-client`、`egg-grpc-server` 与 `apps/egg-demo` 集成验证。
