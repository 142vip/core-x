# @142vip/nest

技术说明。不随 npm 发布。

## 定位

Nest 应用**基础层**：统一 HTTP 响应体、全局异常过滤、Swagger 响应 schema 装饰器、分页 DTO/VO、`class-transformer` 查询参数转换装饰器。

**不包含**：应用启动、`config/` 加载、Logger/Redis/TypeORM 基础设施模块（分别见 `@142vip/nest-starter`、`@142vip/nest-logger`、`@142vip/nest-redis`、`@142vip/nest-typeorm`）。

编译为 **CommonJS**（`tsc`），勿单独改为 ESM。

## 功能

入口 `src/index.ts` 再导出：

- `./app.module`
- `./decorators`
- `./dtos`
- `./filters`
- `./interceptors`
- `./interfaces`

`src/constants.ts` 中的元数据键**不**从包入口导出，仅供包内装饰器与拦截器使用。

### 类型 `app.module.ts`

- `NestModule` — `Type | DynamicModule`，业务模块类型别名

### 拦截器 `interceptors/`

#### `ResponseInterceptor`

- 注册为 `APP_INTERCEPTOR` 时，将 HTTP 成功响应统一为 `{ success: true, data }`
- 强制 HTTP 状态码为 `200`（`HttpStatus.OK`）
- 根据 handler 元数据对 `data` 做 VO 转换：
  - `METADATA_KEY_PAGINATION_VO_CLASS` → 调用 `PaginationVo.format(ItemVoClass, response)`
  - `METADATA_KEY_RESPONSE_VO_CLASS_KEY` → `plainToInstance(resVoClass, item)`（数组逐项转换，对象直接转换）
- **跳过**（直接 `next.handle()`，不改写响应）：
  - `context.getType() !== 'http'`
  - handler 带 Nest 内置 `SSE_METADATA`
  - handler 带 `METADATA_KEY_RESPONSE_SKIP_KEY`（由 `ApiResponseSkip()` 设置）

#### `PropagationInterceptor`

- `propagationContext` — `AsyncLocalStorage<Store>`，`Store.headers` 为 `Record<string, string | string[] | undefined>`
- 在 `propagationContext.run({ headers }, () => next.handle())` 内执行后续链路
- 按上下文类型读取 headers：
  - `http`：`request.headers`；非 SSE 时回写响应头 `x-request-id`（取自请求头同名字段）
  - `ws`：`socket.handshake.headers`，若 `data.headers` 存在则合并覆盖
  - `rpc`：`rpcContext.getMap()`（无 `getMap` 时 `{}`）
  - 其它类型：`{}`

### 过滤器 `filters/`

#### `GlobalFilter`

- `@Catch()` 捕获全部异常
- 日志：`HttpException` 且 `getStatus() < 500` → `warn`；其余 → `error`
- `host.getType() === 'rmq'`：仅记 error 与 `host.getArgs()`，**不**写 HTTP 响应
- HTTP 响应 JSON：`{ success: false, message }`
  - `message`：`HttpException` 取 `getResponse().message ?? getResponse()`；`Error` 取 `message`；其它为 `'未知错误'`
- HTTP 状态码：
  - `HttpException` → `getStatus()`
  - `http-errors` 的 `HttpError` 且 `statusCode === HttpStatus.PAYLOAD_TOO_LARGE` → 保留 `413`
  - 其余 → `HttpStatus.OK`（`200`）

### Swagger 装饰器 `decorators/swagger.decorator.ts`

内部枚举 `ResponseDataType`（不导出）：`object_data`、`array_data`、`paginated_data`、`null_data`。

- `ApiResponseObject<T>(voClass)` — `HttpCode(200)` + `SetMetadata(METADATA_KEY_RESPONSE_VO_CLASS_KEY, voClass)` + `ApiExtraModels(voClass)` + OpenAPI schema（`data` 为单个 `$ref`）
- `ApiResponseList<T>(voClass)` — 同上元数据键；OpenAPI `data` 为 `voClass` 数组
- `ApiResponsePagination<T>(voClass)` — `SetMetadata(METADATA_KEY_PAGINATION_VO_CLASS, voClass)`；OpenAPI `data` 为 `PaginationVo` + `records` 数组
- `ApiResponseNull()` — `HttpCode(200)` + `ApiOkResponse({ type: ResponseNullVo })`，不写 VO 元数据
- `ApiResponseSkip()` — `SetMetadata(METADATA_KEY_RESPONSE_SKIP_KEY, true)`，不写 Swagger 响应 schema

所有带 VO 的装饰器均 `HttpCode(HttpStatus.OK)`，并与 `ResponseInterceptor` 元数据键对齐。

### Transform 装饰器 `decorators/transform.decorator.ts`

均为 `class-transformer` 的 `Transform` 包装，返回 `PropertyDecorator`：

- `TransformToBoolean()` — `string`：`'true'`/`'1'` → `true`，`'false'`/`'0'` → `false`，其它原样；`number` → `Boolean(value)`；其它类型原样
- `TransformToNumber()` — `Number(value)`
- `TransformToNumberArray()` — `string`：逗号分隔后 `Number(trim)`；`object` 且为数组：逐项 `Number`；其它原样
- `TransformToStringArray()` — `string`：`split(',')`；`object` 且为数组：逐项 `String`；其它原样
- `TransformToStringAndNumberArray()` — `string`：逗号分隔，可解析为数字则 number，否则保留字符串；数组同理
- `TransformUriPath()` — 去掉前导 `/`
- `Trim()` — `value?.trim()`
- `DtoTransformToBoolean()` — 读 `p.obj[p.key]`，`'true'`/`'false'` 转布尔，否则 `undefined`
- `DtoDecodeURI()` — `decodeURI`；失败抛 `HttpException('参数格式异常', HttpStatus.BAD_REQUEST)`
- `DefaultValue(value?)` — `null`/`undefined` 时填 `value`（`??`）
- `StrDesensitize()` — 字符串脱敏：长度 0 → `''`；≤2 全 `*`；3~4 首尾保留；更长保留前 2 与后 2

### DTO / VO `dtos/`

#### 常量

- `DEFAULT_PAGE_NUM` — `1`
- `DEFAULT_PAGE_SIZE` — `10`

#### 类

- `BaseVo<T>` — 构造 `Object.assign(this, obj)`
- `BaseEntityDto` — `@Exclude()`；`id: number`（`@Expose` `@IsPositive` `@ApiProperty`）
- `BaseEntityVo` extends `BaseVo` — `id` `createdAt` `updatedAt`（均 `@Expose` `@ApiProperty`）
- `PaginationDto` — `pageNum` `pageSize`（`@IsOptional` `@IsPositive`；非法时用 `DEFAULT_PAGE_NUM` / `DEFAULT_PAGE_SIZE`）
- `PaginationVo<T>` extends `BaseVo` — `records` `pageNum` `pageSize` `pageCount` `total`
  - 静态 `format<T>(ItemVoCla, params)` — `records` 逐项 `plainToInstance`，`pageCount = Math.ceil(total / pageSize)`
- `ResponseVo<T>` — `success: boolean`
- `ResponseNullVo<T>` — `success: boolean`（无 `data` 字段）
- `ResponseSuccessVo<T>` extends `ResponseVo` — `data: T`
- `ResponseErrorVo<T>` extends `ResponseVo` — `message: string`

### 接口 `interfaces/pagination.ts`

- `PaginationParams` — `pageNum: number` `pageSize: number`
- `PaginationResponse<T>` extends `PaginationParams` — `pageCount?: number` `total: number` `records: T[]`

### peerDependencies（`package.json`）

- `@nestjs/common` `11.1.27`
- `@nestjs/core` `11.1.27`
- `@nestjs/platform-express` `11.1.27`
- `@nestjs/swagger` `11.4.5`
- `class-transformer` `0.5.1`
- `class-validator` `0.15.1`
- `fancy-log` `2.0.0`
- `nest-typed-config` `2.10.1`
- `nestjs-pino` `4.6.1`
- `reflect-metadata` `0.2.2`
- `rxjs` `7.8.2`

## 配置

无包级配置文件。拦截器/过滤器由应用在模块中注册，或由 `@142vip/nest-starter` 通过 `APP_INTERCEPTOR` / `APP_FILTER` 自动挂载。

## 最佳实践

- `@Injectable()` 类**禁止** `import type` 注入（Nest DI 需要值导入）
- 列表/详情接口配合 `ApiResponsePagination` / `ApiResponseObject` / `ApiResponseList`，让 `ResponseInterceptor` 自动 `plainToInstance`
- 分页入参使用或继承 `PaginationDto`，出参形状与 `PaginationVo.format` 一致（含 `total` `records`）
- 文件流、SSE、需保留原始状态码的接口使用 `ApiResponseSkip()`
- 查询参数布尔/数组/URI 解码优先用包内 `Transform*` / `Dto*` 装饰器
- `GlobalFilter` 对非 `HttpException` 的 5xx 仍可能返回 HTTP 200 包体（`success: false`），业务层勿依赖状态码表达业务失败以外的语义
- 本包为 CommonJS 产物，与 Nest 系其它包保持一致，勿单独迁 ESM

## 构建

`tsc` → `dist/*.js`（CommonJS）

```shell
cd packages/nest && pnpm build
```

## 验证

```shell
cd packages/nest && pnpm build && pnpm typecheck && pnpm test
```

## 演示

`apps/nest-demo` 经 `@142vip/nest-starter` 挂载本包拦截器与过滤器；示例见 `rest-example`（`ApiResponseObject` / `ApiResponsePagination` / `PaginationDto`）。
