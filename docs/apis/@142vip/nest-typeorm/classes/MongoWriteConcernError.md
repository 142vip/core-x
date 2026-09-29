[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / MongoWriteConcernError

# 类: MongoWriteConcernError

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4220

An error thrown when the server reports a writeConcernError

## theme_extends

- [`MongoServerError`](MongoServerError.md)

## 可索引

> \[`key`: `string`\]: `any`

## 构造函数

### 构造函数

> **new MongoWriteConcernError**(`message`, `result?`): `MongoWriteConcernError`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4223

#### 参数

##### message

[`ErrorDescription`](../interfaces/ErrorDescription.md)

##### result?

[`Document`](../namespaces/BSON/interfaces/Document.md)

#### 返回

`MongoWriteConcernError`

#### 重写了

[`MongoServerError`](MongoServerError.md).[`constructor`](MongoServerError.md#constructor)

## 属性

### cause?

> `optional` **cause?**: `Error`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3912

#### 继承自

[`MongoServerError`](MongoServerError.md).[`cause`](MongoServerError.md#cause)

***

### code?

> `optional` **code?**: `string` \| `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3909

This is a number in MongoServerError and a string in MongoDriverError

#### 继承自

[`MongoServerError`](MongoServerError.md).[`code`](MongoServerError.md#code)

***

### codeName?

> `optional` **codeName?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4135

#### 继承自

[`MongoServerError`](MongoServerError.md).[`codeName`](MongoServerError.md#codename)

***

### connectionGeneration?

> `optional` **connectionGeneration?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3911

#### 继承自

[`MongoServerError`](MongoServerError.md).[`connectionGeneration`](MongoServerError.md#connectiongeneration)

***

### errInfo?

> `optional` **errInfo?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4137

#### 继承自

[`MongoServerError`](MongoServerError.md).[`errInfo`](MongoServerError.md#errinfo)

***

### message

> **message**: `string`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### 继承自

[`MongoServerError`](MongoServerError.md).[`message`](MongoServerError.md#message)

***

### ok?

> `optional` **ok?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4138

#### 继承自

[`MongoServerError`](MongoServerError.md).[`ok`](MongoServerError.md#ok)

***

### result?

> `optional` **result?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4222

The result document (provided if ok: 1)

***

### stack?

> `optional` **stack?**: `string`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### 继承自

[`MongoServerError`](MongoServerError.md).[`stack`](MongoServerError.md#stack)

***

### topologyVersion?

> `optional` **topologyVersion?**: [`TopologyVersion`](../interfaces/TopologyVersion.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3910

#### 继承自

[`MongoServerError`](MongoServerError.md).[`topologyVersion`](MongoServerError.md#topologyversion)

***

### writeConcernError?

> `optional` **writeConcernError?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4136

#### 继承自

[`MongoServerError`](MongoServerError.md).[`writeConcernError`](MongoServerError.md#writeconcernerror)

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

[`MongoServerError`](MongoServerError.md).[`prepareStackTrace`](MongoServerError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/globals.d.ts:145

#### 继承自

[`MongoServerError`](MongoServerError.md).[`stackTraceLimit`](MongoServerError.md#stacktracelimit)

## 访问器

### errmsg

#### Getter 签名

> **get** **errmsg**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3916

Legacy name for server error responses

##### 返回

`string`

#### 继承自

[`MongoServerError`](MongoServerError.md).[`errmsg`](MongoServerError.md#errmsg)

***

### errorLabels

#### Getter 签名

> **get** **errorLabels**(): `string`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3925

##### 返回

`string`[]

#### 继承自

[`MongoServerError`](MongoServerError.md).[`errorLabels`](MongoServerError.md#errorlabels)

***

### name

#### Getter 签名

> **get** **name**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4224

##### 返回

`string`

#### 重写了

[`MongoServerError`](MongoServerError.md).[`name`](MongoServerError.md#name)

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

[`MongoServerError`](MongoServerError.md).[`addErrorLabel`](MongoServerError.md#adderrorlabel)

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

[`MongoServerError`](MongoServerError.md).[`hasErrorLabel`](MongoServerError.md#haserrorlabel)

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

[`MongoServerError`](MongoServerError.md).[`captureStackTrace`](MongoServerError.md#capturestacktrace)
