[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / FindOperator

# 类: FindOperator\<T\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:8

Find Operator used in Find Conditions.

## theme_extended_by

- [`EqualOperator`](EqualOperator.md)

## 类型参数

### T

`T`

## 构造函数

### 构造函数

> **new FindOperator**\<`T`\>(`type`, `value`, `useParameter?`, `multipleParameters?`, `getSql?`, `objectLiteralParameters?`): `FindOperator`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:34

#### 参数

##### type

[`FindOperatorType`](../type-aliases/FindOperatorType.md)

##### value

`FindOperator`\<`T`\> \| `T`

##### useParameter?

`boolean`

##### multipleParameters?

`boolean`

##### getSql?

`SqlGeneratorType`

##### objectLiteralParameters?

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

#### 返回

`FindOperator`\<`T`\>

## 属性

### @instanceof

> `readonly` **@instanceof**: `symbol`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:9

## 访问器

### child

#### Getter 签名

> **get** **child**(): `FindOperator`\<`T`\> \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:60

Gets the child FindOperator if it exists

##### 返回

`FindOperator`\<`T`\> \| `undefined`

***

### getSql

#### Getter 签名

> **get** **getSql**(): `SqlGeneratorType` \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:64

Gets the SQL generator

##### 返回

`SqlGeneratorType` \| `undefined`

***

### multipleParameters

#### Getter 签名

> **get** **multipleParameters**(): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:44

Indicates if multiple parameters must be used for this operator.
Extracts final value if value is another find operator.

##### 返回

`boolean`

***

### objectLiteralParameters

#### Getter 签名

> **get** **objectLiteralParameters**(): [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:56

Gets ObjectLiteral parameters.

##### 返回

[`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `undefined`

***

### type

#### Getter 签名

> **get** **type**(): [`FindOperatorType`](../type-aliases/FindOperatorType.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:48

Gets the Type of this FindOperator

##### 返回

[`FindOperatorType`](../type-aliases/FindOperatorType.md)

***

### useParameter

#### Getter 签名

> **get** **useParameter**(): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:39

Indicates if parameter is used or not for this operator.
Extracts final value if value is another find operator.

##### 返回

`boolean`

***

### value

#### Getter 签名

> **get** **value**(): `T`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:52

Gets the final value needs to be used as parameter value.

##### 返回

`T`

## 方法

### transformValue()

> **transformValue**(`transformer`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:65

#### 参数

##### transformer

[`ValueTransformer`](../interfaces/ValueTransformer.md) \| [`ValueTransformer`](../interfaces/ValueTransformer.md)[]

#### 返回

`void`
