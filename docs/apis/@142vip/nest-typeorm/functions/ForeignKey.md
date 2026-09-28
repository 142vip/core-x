[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ForeignKey

# 函数: ForeignKey()

## 调用签名

> **ForeignKey**\<`T`\>(`typeFunctionOrTarget`, `options?`): `PropertyDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/ForeignKey.d.ts:8

Creates a database foreign key. Can be used on entity property or on entity.
Can create foreign key with composite columns when used on entity.
Warning! Don't use this with relations; relation decorators create foreign keys automatically.

### 类型参数

#### T

`T`

### 参数

#### typeFunctionOrTarget

`string` \| ((`type?`) => [`ObjectType`](../type-aliases/ObjectType.md)\<`T`\>)

#### options?

`ForeignKeyOptions`

### 返回

`PropertyDecorator`

## 调用签名

> **ForeignKey**\<`T`\>(`typeFunctionOrTarget`, `inverseSide`, `options?`): `PropertyDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/ForeignKey.d.ts:14

Creates a database foreign key. Can be used on entity property or on entity.
Can create foreign key with composite columns when used on entity.
Warning! Don't use this with relations; relation decorators create foreign keys automatically.

### 类型参数

#### T

`T`

### 参数

#### typeFunctionOrTarget

`string` \| ((`type?`) => [`ObjectType`](../type-aliases/ObjectType.md)\<`T`\>)

#### inverseSide

`string` \| ((`object`) => `any`)

#### options?

`ForeignKeyOptions`

### 返回

`PropertyDecorator`

## 调用签名

> **ForeignKey**\<`T`, `C`\>(`typeFunctionOrTarget`, `columnNames`, `referencedColumnNames`, `options?`): `ClassDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/ForeignKey.d.ts:20

Creates a database foreign key. Can be used on entity property or on entity.
Can create foreign key with composite columns when used on entity.
Warning! Don't use this with relations; relation decorators create foreign keys automatically.

### 类型参数

#### T

`T`

#### C

`C` *extends* readonly \[\] \| readonly `string`[]

### 参数

#### typeFunctionOrTarget

`string` \| ((`type?`) => [`ObjectType`](../type-aliases/ObjectType.md)\<`T`\>)

#### columnNames

`C`

#### referencedColumnNames

\{ \[K in string \| number \| symbol\]: string \}

#### options?

`ForeignKeyOptions`

### 返回

`ClassDecorator`
