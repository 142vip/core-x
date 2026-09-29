[API 参考](../../../../../index.md) / [@142vip/nest-typeorm](../../../index.md) / [BSON](../index.md) / BSONError

# 类: BSONError

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:103

## theme_extends

- `Error`

## theme_extended_by

- [`BSONRuntimeError`](BSONRuntimeError.md)
- [`BSONVersionError`](BSONVersionError.md)

## 构造函数

### 构造函数

> **new BSONError**(`message`): `BSONError`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:105

#### 参数

##### message

`string`

#### 返回

`BSONError`

#### 重写了

`Error.constructor`

## 属性

### cause?

> `optional` **cause?**: `unknown`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### 继承自

`Error.cause`

***

### message

> **message**: `string`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### 继承自

`Error.message`

***

### stack?

> `optional` **stack?**: `string`

定义于: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### 继承自

`Error.stack`

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

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/globals.d.ts:145

#### 继承自

`Error.stackTraceLimit`

## 访问器

### name

#### Getter 签名

> **get** **name**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:104

##### 返回

`string`

#### 重写了

`Error.name`

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

`Error.captureStackTrace`

***

### isBSONError()

> `static` **isBSONError**(`value`): `value is BSONError`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:115

All errors thrown from the BSON library inherit from `BSONError`.
This method can assist with determining if an error originates from the BSON library
even if it does not pass an `instanceof` check against this class' constructor.

#### 参数

##### value

`unknown`

any javascript value that needs type checking

#### 返回

`value is BSONError`
