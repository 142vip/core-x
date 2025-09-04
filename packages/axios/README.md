# @142vip/axios

[![NPM version](https://img.shields.io/npm/v/@142vip/axios?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/axios)

`Http`请求工具，支持通用化的自定义拦截器、自定义参数、自定义配置

## 安装

```bash
# npm
npm i @142vip/axios
# pnpm
pnpm i @142vip/axios
```

## 功能

- [x] 封装`AxiosFactory`父类，提供工厂方法
- [x] 提供`createVipAxios`函数，创建自定义`vipAxios`实例
- [x] 提供`vipAxios`默认实例
- [x] 提供默认拦截器函数，支持自定义拦截器

### 默认的axios实例

`@142vip/axios`模块，提供一个基于默认配置的axios实例 - `vipAxios`，可以直接使用

```ts
import { vipAxios } from '@142vip/axios'
```

### 自定义axios实例

```ts
// 用户自定义配置
const config = {
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
}

// vipAxios实例
const vipAxios = createVipAxios(config)
```

## 使用

- `vipAxios#request(config)`
- `vipAxios#get(url[, config])`
- `vipAxios#delete(url[, config])`
- `vipAxios#head(url[, config])`
- `vipAxios#options(url[, config])`
- `vipAxios#post(url[, data[, config]])`
- `vipAxios#put(url[, data[, config]])`
- `vipAxios#patch(url[, data[, config]])`
- `vipAxios#getUri([config])`

```ts
import { vipAxios } from '@142vip/axios'

/**
 * 测试Get请求类型
 */
async function test() {
  const response = await vipAxios({
    // coding xxx
  })
}
```

### GET请求

```ts
import { vipAxios } from '@142vip/axios'

/**
 * 测试Get请求类型
 */
async function testGet() {
  const response = await vipAxios.get('https://jsonplaceholder.typicode.com/posts')
}
```
### POST请求

```ts
import { HttpMethod, vipAxios } from '@142vip/axios'

/**
 * 测试Post请求类型
 */
async function testPost() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }
  const response = await vipAxios({
    url: apiUrl,
    method: HttpMethod.POST,
    data,
  })
}
```
### PUT请求

```ts
import { HttpMethod, vipAxios } from '@142vip/axios'

/**
 * 测试Put请求类型
 */
async function testPut() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'
  const data = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }
  const response = await vipAxios({
    url: apiUrl,
    method: HttpMethod.PUT,
    data,
  })
}
```
### PATCH请求

```ts
import { HttpMethod, vipAxios } from '@142vip/axios'

/**
 * 测试Patch请求类型
 */
async function testPatch() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'
  const data = {
    title: 'foo',
  }
  const headers = {
    'Content-type': 'application/json; charset=UTF-8',
  }
  const response = await vipAxios({
    url: apiUrl,
    method: HttpMethod.PATCH,
    data,
    headers,
  })
}
```

## 枚举

### 请求类型

```ts
/**
 * 适用于Axios的请求类型
 *  - 全大写
 */
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  // PURGE = 'PURGE',
  // LINK = 'LINK',
  // UNLINK = 'UNLINK',
}

/**
 * 其他场景适用的请求类型
 * - 全小写
 */
export enum HttpMethodLower {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
  HEAD = 'head',
  OPTIONS = 'options',
  // PURGE = 'purge',
  // LINK = 'link',
  // UNLINK = 'unlink',
}
```

### 状态码

```ts
/**
 * Http协议状态码
 */
export enum HttpStatus {
  CONTINUE = 100,
  SWITCHING_PROTOCOLS = 101,
  PROCESSING = 102,
  EARLY_HINTS = 103,
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NO_CONTENT = 204,
  RESET_CONTENT = 205,
  PARTIAL_CONTENT = 206,
  AMBIGUOUS = 300,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  TEMPORARY_REDIRECT = 307,
  PERMANENT_REDIRECT = 308,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  PAYLOAD_TOO_LARGE = 413,
  URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  REQUESTED_RANGE_NOT_SATISFIABLE = 416,
  EXPECTATION_FAILED = 417,
  I_AM_A_TEAPOT = 418,
  MISDIRECTED = 421,
  UNPROCESSABLE_ENTITY = 422,
  FAILED_DEPENDENCY = 424,
  PRECONDITION_REQUIRED = 428,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
  VARIANT_ALSO_NEGOTIATES = 506,
  INSUFFICIENT_STORAGE = 507,
  LOOP_DETECTED = 508,
  NOT_EXTENDED = 510,
  NETWORK_AUTHENTICATION_REQUIRED = 511,
}
```

## 参考

- [axios Github仓库](https://github.com/axios/axios)
- [axios NPM仓库](https://www.npmjs.com/package/axios)
- [axios 中文文档](https://www.axios-http.cn/docs/intro)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡
