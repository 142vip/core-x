# @142vip/axios

技术说明。不随 npm 发布。

## 定位

在 `axios@1.17.0` 之上封装工厂、拦截器模板与 HTTP 枚举，供 Node 爬虫与业务 HTTP 客户端复用。

## 功能

### 子路径

- `@142vip/axios`：主入口（`src/index.ts` 聚合 `core/`、`enum/`、`spider.utils.ts`）

### 类型与工厂（`core/axios.factory.ts`）

- `VipAxiosInstance`：扩展 `AxiosInstance`，附加实例方法
  - `clearInterceptor(type: InterceptorType): void`
  - `getConfig(): CreateAxiosDefaults | undefined`
- `AxiosFactory`：构造器接收 `CreateAxiosDefaults | undefined`
  - `createAxiosInstance(): VipAxiosInstance`
  - `getConfig(): CreateAxiosDefaults | undefined`
  - `clearInterceptor(type?: InterceptorType): void`：`type` 为空时同时清理请求与响应拦截器
- `createVipAxios(config?: CreateAxiosDefaults): VipAxiosInstance`
- `vipAxios`：无参默认实例（`new AxiosFactory().createAxiosInstance()`）

### 默认配置（`core/axios.config.ts`）

- `defaultAxiosConfig: CreateAxiosDefaults`
- `createAxiosConfig(userAxiosConfig?: Partial<CreateAxiosDefaults>): CreateAxiosDefaults`

### 拦截器（`core/interceptors.ts`）

- `InterceptorType` 枚举
  - `REQUEST = 'request'`
  - `RESPONSE = 'response'`
- `requestInterceptor(config: AxiosRequestConfig): AxiosRequestConfig`
- `responseInterceptor<T>(response: AxiosResponse): T`
- `defaultRequestInterceptor(config: AxiosRequestConfig): AxiosRequestConfig`
- `defaultResponseInterceptor(response: AxiosResponse): AxiosResponse`
- `defaultVipRequestInterceptor(config: AxiosRequestConfig): AxiosRequestConfig`（预留 traceId）
- `defaultVipResponseInterceptor(response: AxiosResponse): AxiosResponse`：`status === HttpStatus.OK` 时返回 `response.data`，否则返回完整 `response`

### 枚举 `HttpStatus`（`enum/http-status.enum.ts`）

- `CONTINUE = 100`
- `SWITCHING_PROTOCOLS = 101`
- `PROCESSING = 102`
- `EARLY_HINTS = 103`
- `OK = 200`
- `CREATED = 201`
- `ACCEPTED = 202`
- `NON_AUTHORITATIVE_INFORMATION = 203`
- `NO_CONTENT = 204`
- `RESET_CONTENT = 205`
- `PARTIAL_CONTENT = 206`
- `AMBIGUOUS = 300`
- `MOVED_PERMANENTLY = 301`
- `FOUND = 302`
- `SEE_OTHER = 303`
- `NOT_MODIFIED = 304`
- `TEMPORARY_REDIRECT = 307`
- `PERMANENT_REDIRECT = 308`
- `BAD_REQUEST = 400`
- `UNAUTHORIZED = 401`
- `PAYMENT_REQUIRED = 402`
- `FORBIDDEN = 403`
- `NOT_FOUND = 404`
- `METHOD_NOT_ALLOWED = 405`
- `NOT_ACCEPTABLE = 406`
- `PROXY_AUTHENTICATION_REQUIRED = 407`
- `REQUEST_TIMEOUT = 408`
- `CONFLICT = 409`
- `GONE = 410`
- `LENGTH_REQUIRED = 411`
- `PRECONDITION_FAILED = 412`
- `PAYLOAD_TOO_LARGE = 413`
- `URI_TOO_LONG = 414`
- `UNSUPPORTED_MEDIA_TYPE = 415`
- `REQUESTED_RANGE_NOT_SATISFIABLE = 416`
- `EXPECTATION_FAILED = 417`
- `I_AM_A_TEAPOT = 418`
- `MISDIRECTED = 421`
- `UNPROCESSABLE_ENTITY = 422`
- `FAILED_DEPENDENCY = 424`
- `PRECONDITION_REQUIRED = 428`
- `TOO_MANY_REQUESTS = 429`
- `INTERNAL_SERVER_ERROR = 500`
- `NOT_IMPLEMENTED = 501`
- `BAD_GATEWAY = 502`
- `SERVICE_UNAVAILABLE = 503`
- `GATEWAY_TIMEOUT = 504`
- `HTTP_VERSION_NOT_SUPPORTED = 505`
- `VARIANT_ALSO_NEGOTIATES = 506`
- `INSUFFICIENT_STORAGE = 507`
- `LOOP_DETECTED = 508`
- `NOT_EXTENDED = 510`
- `NETWORK_AUTHENTICATION_REQUIRED = 511`

### 枚举 `HttpMethod`（`enum/http-method.enum.ts`，全大写）

- `GET = 'GET'`
- `POST = 'POST'`
- `PUT = 'PUT'`
- `DELETE = 'DELETE'`
- `PATCH = 'PATCH'`
- `HEAD = 'HEAD'`
- `OPTIONS = 'OPTIONS'`

### 枚举 `HttpMethodLower`（`enum/http-method.enum.ts`，全小写）

- `GET = 'get'`
- `POST = 'post'`
- `PUT = 'put'`
- `DELETE = 'delete'`
- `PATCH = 'patch'`
- `HEAD = 'head'`
- `OPTIONS = 'options'`

### 爬虫工具（`spider.utils.ts`）

- `USER_AGENTS`：常见浏览器 User-Agent 常量数组
- `ACCEPT_LANGUAGES`：常见 Accept-Language 常量数组
- `getRandomUserAgent(): string`
- `getRandomAcceptLanguage(): string`
- `getRandomSpiderHeaders(): Record<'User-Agent' | 'Accept-Language', string>`

## 配置

### `defaultAxiosConfig` 内置键

- `timeout`：`10000`（毫秒）
- `headers['Content-Type']`：`'application/json'`

### `createAxiosConfig` 行为

- 以 `defaultAxiosConfig` 为基准，`Object.assign` 浅合并 `userAxiosConfig`
- 其余键遵循 [axios `CreateAxiosDefaults`](https://axios-http.com/docs/req_config)，本包不做字段白名单；常见可传 `baseURL`、`headers`、`adapter`、`params`、`auth`、`proxy`、`httpAgent`、`httpsAgent`、`maxRedirects`、`validateStatus`

## 最佳实践

- 业务层用 `HttpStatus` 枚举比较状态码，避免裸数字
- 需要解包 `data` 时使用 `defaultVipResponseInterceptor`，注意非 200 仍返回完整 `response`
- 更换拦截器前可调用 `clearInterceptor(InterceptorType.REQUEST)` 避免重复注册
- 爬虫请求在拦截器注入 `getRandomSpiderHeaders()` 降低固定指纹
- 单测见 `packages/axios/test/`

## 构建

`unbuild` → `cd packages/axios && pnpm build`

## 验证

```shell
cd packages/axios && pnpm build && pnpm test && pnpm typecheck
```

## 演示

无
