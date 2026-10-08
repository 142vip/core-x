[API 参考](../../../index.md) / [@142vip/axios](../index.md) / IAxiosRetryConfig

# 接口: IAxiosRetryConfig

定义于: node\_modules/.pnpm/axios-retry@4.5.0\_axios@1.17.0/node\_modules/axios-retry/dist/cjs/index.d.ts:2

## 属性

### onMaxRetryTimesExceeded?

> `optional` **onMaxRetryTimesExceeded?**: (`error`, `retryCount`) => `void` \| `Promise`\<`void`\>

定义于: node\_modules/.pnpm/axios-retry@4.5.0\_axios@1.17.0/node\_modules/axios-retry/dist/cjs/index.d.ts:30

After all the retries are failed, this callback will be called with the last error
before throwing the error.

#### 参数

##### error

[`AxiosError`](AxiosError.md)

##### retryCount

`number`

#### 返回

`void` \| `Promise`\<`void`\>

***

### onRetry?

> `optional` **onRetry?**: (`retryCount`, `error`, `requestConfig`) => `void` \| `Promise`\<`void`\>

定义于: node\_modules/.pnpm/axios-retry@4.5.0\_axios@1.17.0/node\_modules/axios-retry/dist/cjs/index.d.ts:25

A callback to get notified when a retry occurs, the number of times it has occurred, and the error

#### 参数

##### retryCount

`number`

##### error

[`AxiosError`](AxiosError.md)

##### requestConfig

[`AxiosRequestConfig`](AxiosRequestConfig.md)

#### 返回

`void` \| `Promise`\<`void`\>

***

### retries?

> `optional` **retries?**: `number`

定义于: node\_modules/.pnpm/axios-retry@4.5.0\_axios@1.17.0/node\_modules/axios-retry/dist/cjs/index.d.ts:7

The number of times to retry before failing
default: 3

***

### retryCondition?

> `optional` **retryCondition?**: (`error`) => `boolean` \| `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/axios-retry@4.5.0\_axios@1.17.0/node\_modules/axios-retry/dist/cjs/index.d.ts:17

A callback to further control if a request should be retried.
default: it retries if it is a network error or a 5xx error on an idempotent request (GET, HEAD, OPTIONS, PUT or DELETE).

#### 参数

##### error

[`AxiosError`](AxiosError.md)

#### 返回

`boolean` \| `Promise`\<`boolean`\>

***

### retryDelay?

> `optional` **retryDelay?**: (`retryCount`, `error`) => `number`

定义于: node\_modules/.pnpm/axios-retry@4.5.0\_axios@1.17.0/node\_modules/axios-retry/dist/cjs/index.d.ts:21

A callback to further control the delay between retry requests. By default there is no delay.

#### 参数

##### retryCount

`number`

##### error

[`AxiosError`](AxiosError.md)

#### 返回

`number`

***

### shouldResetTimeout?

> `optional` **shouldResetTimeout?**: `boolean`

定义于: node\_modules/.pnpm/axios-retry@4.5.0\_axios@1.17.0/node\_modules/axios-retry/dist/cjs/index.d.ts:12

Defines if the timeout should be reset between retries
default: false

***

### validateResponse?

> `optional` **validateResponse?**: ((`response`) => `boolean`) \| `null`

定义于: node\_modules/.pnpm/axios-retry@4.5.0\_axios@1.17.0/node\_modules/axios-retry/dist/cjs/index.d.ts:35

A callback to define whether a response should be resolved or rejected. If null is passed, it will fallback to
the axios default (only 2xx status codes are resolved).
