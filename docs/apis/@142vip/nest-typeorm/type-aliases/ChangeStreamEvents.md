[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ChangeStreamEvents

# 类型别名: ChangeStreamEvents\<TSchema, TChange\>

> **ChangeStreamEvents**\<`TSchema`, `TChange`\> = `object` & [`AbstractCursorEvents`](AbstractCursorEvents.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:1079

## 类型声明

### change()

> **change**(`change`): `void`

#### 参数

##### change

`TChange`

#### 返回

`void`

### end()

> **end**(): `void`

#### 返回

`void`

### error()

> **error**(`error`): `void`

#### 参数

##### error

`Error`

#### 返回

`void`

### init()

> **init**(`response`): `void`

#### 参数

##### response

`any`

#### 返回

`void`

### more()

> **more**(`response?`): `void`

#### 参数

##### response?

`any`

#### 返回

`void`

### response()

> **response**(): `void`

#### 返回

`void`

### resumeTokenChanged()

> **resumeTokenChanged**(`token`): `void`

#### 参数

##### token

`unknown`

#### 返回

`void`

## 类型参数

### TSchema

`TSchema` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = [`Document`](../namespaces/BSON/interfaces/Document.md)

### TChange

`TChange` *extends* [`Document`](../namespaces/BSON/interfaces/Document.md) = [`ChangeStreamDocument`](ChangeStreamDocument.md)\<`TSchema`\>
