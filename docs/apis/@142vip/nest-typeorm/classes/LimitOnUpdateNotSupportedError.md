[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / LimitOnUpdateNotSupportedError

# 类: LimitOnUpdateNotSupportedError

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/error/LimitOnUpdateNotSupportedError.d.ts:5

Thrown when user tries to build an UPDATE query with LIMIT but the database does not support it.

## theme_extends

- [`TypeORMError`](TypeORMError.md)

## 构造函数

### 构造函数

> **new LimitOnUpdateNotSupportedError**(): `LimitOnUpdateNotSupportedError`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/error/LimitOnUpdateNotSupportedError.d.ts:6

#### 返回

`LimitOnUpdateNotSupportedError`

#### 重写了

[`TypeORMError`](TypeORMError.md).[`constructor`](TypeORMError.md#constructor)

## 属性

### cause?

> `optional` **cause?**: `unknown`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### 继承自

[`TypeORMError`](TypeORMError.md).[`cause`](TypeORMError.md#cause)

***

### message

> **message**: `string`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### 继承自

[`TypeORMError`](TypeORMError.md).[`message`](TypeORMError.md#message)

***

### stack?

> `optional` **stack?**: `string`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### 继承自

[`TypeORMError`](TypeORMError.md).[`stack`](TypeORMError.md#stack)

***

### prepareStackTrace?

> `static` `optional` **prepareStackTrace?**: (`err`, `stackTraces`) => `any`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

#### 参数

##### err

`Error`

##### stackTraces

`CallSite`[]

#### 返回

`any`

#### 参阅

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### 继承自

[`TypeORMError`](TypeORMError.md).[`prepareStackTrace`](TypeORMError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/globals.d.ts:145

#### 继承自

[`TypeORMError`](TypeORMError.md).[`stackTraceLimit`](TypeORMError.md#stacktracelimit)

## 访问器

### name

#### Getter 签名

> **get** **name**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/error/TypeORMError.d.ts:2

##### 返回

`string`

#### 继承自

[`TypeORMError`](TypeORMError.md).[`name`](TypeORMError.md#name)

## 方法

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

#### 参数

##### targetObject

`object`

##### constructorOpt?

`Function`

#### 返回

`void`

#### 继承自

[`TypeORMError`](TypeORMError.md).[`captureStackTrace`](TypeORMError.md#capturestacktrace)
