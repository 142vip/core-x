[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / MongoSystemError

# 类: MongoSystemError

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4157

An error signifying a general system issue

## theme_extends

- [`MongoError`](MongoError.md)

## theme_extended_by

- [`MongoServerSelectionError`](MongoServerSelectionError.md)

## 构造函数

### 构造函数

> **new MongoSystemError**(`message`, `reason`): `MongoSystemError`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4160

#### 参数

##### message

`string`

##### reason

[`TopologyDescription`](TopologyDescription.md)

#### 返回

`MongoSystemError`

#### 重写了

[`MongoError`](MongoError.md).[`constructor`](MongoError.md#constructor)

## 属性

### cause?

> `optional` **cause?**: `Error`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3912

#### 继承自

[`MongoError`](MongoError.md).[`cause`](MongoError.md#cause)

***

### code?

> `optional` **code?**: `string` \| `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3909

This is a number in MongoServerError and a string in MongoDriverError

#### 继承自

[`MongoError`](MongoError.md).[`code`](MongoError.md#code)

***

### connectionGeneration?

> `optional` **connectionGeneration?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3911

#### 继承自

[`MongoError`](MongoError.md).[`connectionGeneration`](MongoError.md#connectiongeneration)

***

### message

> **message**: `string`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### 继承自

[`MongoError`](MongoError.md).[`message`](MongoError.md#message)

***

### reason?

> `optional` **reason?**: [`TopologyDescription`](TopologyDescription.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4159

An optional reason context, such as an error saved during flow of monitoring and selecting servers

***

### stack?

> `optional` **stack?**: `string`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### 继承自

[`MongoError`](MongoError.md).[`stack`](MongoError.md#stack)

***

### topologyVersion?

> `optional` **topologyVersion?**: [`TopologyVersion`](../interfaces/TopologyVersion.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3910

#### 继承自

[`MongoError`](MongoError.md).[`topologyVersion`](MongoError.md#topologyversion)

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

[`MongoError`](MongoError.md).[`prepareStackTrace`](MongoError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/globals.d.ts:145

#### 继承自

[`MongoError`](MongoError.md).[`stackTraceLimit`](MongoError.md#stacktracelimit)

## 访问器

### errmsg

#### Getter 签名

> **get** **errmsg**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3916

Legacy name for server error responses

##### 返回

`string`

#### 继承自

[`MongoError`](MongoError.md).[`errmsg`](MongoError.md#errmsg)

***

### errorLabels

#### Getter 签名

> **get** **errorLabels**(): `string`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3925

##### 返回

`string`[]

#### 继承自

[`MongoError`](MongoError.md).[`errorLabels`](MongoError.md#errorlabels)

***

### name

#### Getter 签名

> **get** **name**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:4161

##### 返回

`string`

#### 重写了

[`MongoError`](MongoError.md).[`name`](MongoError.md#name)

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

[`MongoError`](MongoError.md).[`addErrorLabel`](MongoError.md#adderrorlabel)

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

[`MongoError`](MongoError.md).[`hasErrorLabel`](MongoError.md#haserrorlabel)

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

[`MongoError`](MongoError.md).[`captureStackTrace`](MongoError.md#capturestacktrace)
