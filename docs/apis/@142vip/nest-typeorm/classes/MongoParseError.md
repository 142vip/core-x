[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / MongoParseError

# 类: MongoParseError

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4099

An error used when attempting to parse a value (like a connection string)

## theme_extends

- [`MongoDriverError`](MongoDriverError.md)

## 构造函数

### 构造函数

> **new MongoParseError**(`message`): `MongoParseError`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4100

#### 参数

##### message

`string`

#### 返回

`MongoParseError`

#### 重写了

[`MongoDriverError`](MongoDriverError.md).[`constructor`](MongoDriverError.md#constructor)

## 属性

### cause?

> `optional` **cause?**: `Error`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3912

#### 继承自

[`MongoDriverError`](MongoDriverError.md).[`cause`](MongoDriverError.md#cause)

***

### code?

> `optional` **code?**: `string` \| `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3909

This is a number in MongoServerError and a string in MongoDriverError

#### 继承自

[`MongoDriverError`](MongoDriverError.md).[`code`](MongoDriverError.md#code)

***

### connectionGeneration?

> `optional` **connectionGeneration?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3911

#### 继承自

[`MongoDriverError`](MongoDriverError.md).[`connectionGeneration`](MongoDriverError.md#connectiongeneration)

***

### message

> **message**: `string`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### 继承自

[`MongoDriverError`](MongoDriverError.md).[`message`](MongoDriverError.md#message)

***

### stack?

> `optional` **stack?**: `string`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### 继承自

[`MongoDriverError`](MongoDriverError.md).[`stack`](MongoDriverError.md#stack)

***

### topologyVersion?

> `optional` **topologyVersion?**: [`TopologyVersion`](../interfaces/TopologyVersion.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3910

#### 继承自

[`MongoDriverError`](MongoDriverError.md).[`topologyVersion`](MongoDriverError.md#topologyversion)

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

[`MongoDriverError`](MongoDriverError.md).[`prepareStackTrace`](MongoDriverError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/globals.d.ts:145

#### 继承自

[`MongoDriverError`](MongoDriverError.md).[`stackTraceLimit`](MongoDriverError.md#stacktracelimit)

## 访问器

### errmsg

#### Getter 签名

> **get** **errmsg**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3916

Legacy name for server error responses

##### 返回

`string`

#### 继承自

[`MongoDriverError`](MongoDriverError.md).[`errmsg`](MongoDriverError.md#errmsg)

***

### errorLabels

#### Getter 签名

> **get** **errorLabels**(): `string`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3925

##### 返回

`string`[]

#### 继承自

[`MongoDriverError`](MongoDriverError.md).[`errorLabels`](MongoDriverError.md#errorlabels)

***

### name

#### Getter 签名

> **get** **name**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4101

##### 返回

`string`

#### 重写了

[`MongoDriverError`](MongoDriverError.md).[`name`](MongoDriverError.md#name)

## 方法

### addErrorLabel()

> **addErrorLabel**(`label`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3924

#### 参数

##### label

`string`

#### 返回

`void`

#### 继承自

[`MongoDriverError`](MongoDriverError.md).[`addErrorLabel`](MongoDriverError.md#adderrorlabel)

***

### hasErrorLabel()

> **hasErrorLabel**(`label`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3923

Checks the error to see if it has an error label

#### 参数

##### label

`string`

The error label to check for

#### 返回

`boolean`

returns true if the error has the provided error label

#### 继承自

[`MongoDriverError`](MongoDriverError.md).[`hasErrorLabel`](MongoDriverError.md#haserrorlabel)

***

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

[`MongoDriverError`](MongoDriverError.md).[`captureStackTrace`](MongoDriverError.md#capturestacktrace)
