[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / EqualOperator

# 类: EqualOperator\<T\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/EqualOperator.d.ts:2

Find Operator used in Find Conditions.

## theme_extends

- [`FindOperator`](FindOperator.md)\<`T`\>

## 类型参数

### T

`T`

## 构造函数

### 构造函数

> **new EqualOperator**\<`T`\>(`value`): `EqualOperator`\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/EqualOperator.d.ts:4

#### 参数

##### value

`T` \| [`FindOperator`](FindOperator.md)\<`T`\>

#### 返回

`EqualOperator`\<`T`\>

#### 重写了

[`FindOperator`](FindOperator.md).[`constructor`](FindOperator.md#constructor)

## 属性

### @instanceof

> `readonly` **@instanceof**: `symbol`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/EqualOperator.d.ts:3

#### 重写了

[`FindOperator`](FindOperator.md).[`@instanceof`](FindOperator.md#instanceof)

## 访问器

### child

#### Getter 签名

> **get** **child**(): [`FindOperator`](FindOperator.md)\<`T`\> \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:60

Gets the child FindOperator if it exists

##### 返回

[`FindOperator`](FindOperator.md)\<`T`\> \| `undefined`

#### 继承自

[`FindOperator`](FindOperator.md).[`child`](FindOperator.md#child)

***

### getSql

#### Getter 签名

> **get** **getSql**(): `SqlGeneratorType` \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:64

Gets the SQL generator

##### 返回

`SqlGeneratorType` \| `undefined`

#### 继承自

[`FindOperator`](FindOperator.md).[`getSql`](FindOperator.md#getsql)

***

### multipleParameters

#### Getter 签名

> **get** **multipleParameters**(): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:44

Indicates if multiple parameters must be used for this operator.
Extracts final value if value is another find operator.

##### 返回

`boolean`

#### 继承自

[`FindOperator`](FindOperator.md).[`multipleParameters`](FindOperator.md#multipleparameters)

***

### objectLiteralParameters

#### Getter 签名

> **get** **objectLiteralParameters**(): [`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:56

Gets ObjectLiteral parameters.

##### 返回

[`ObjectLiteral`](../interfaces/ObjectLiteral.md) \| `undefined`

#### 继承自

[`FindOperator`](FindOperator.md).[`objectLiteralParameters`](FindOperator.md#objectliteralparameters)

***

### type

#### Getter 签名

> **get** **type**(): [`FindOperatorType`](../type-aliases/FindOperatorType.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:48

Gets the Type of this FindOperator

##### 返回

[`FindOperatorType`](../type-aliases/FindOperatorType.md)

#### 继承自

[`FindOperator`](FindOperator.md).[`type`](FindOperator.md#type)

***

### useParameter

#### Getter 签名

> **get** **useParameter**(): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:39

Indicates if parameter is used or not for this operator.
Extracts final value if value is another find operator.

##### 返回

`boolean`

#### 继承自

[`FindOperator`](FindOperator.md).[`useParameter`](FindOperator.md#useparameter)

***

### value

#### Getter 签名

> **get** **value**(): `T`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:52

Gets the final value needs to be used as parameter value.

##### 返回

`T`

#### 继承自

[`FindOperator`](FindOperator.md).[`value`](FindOperator.md#value)

## 方法

### transformValue()

> **transformValue**(`transformer`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/FindOperator.d.ts:65

#### 参数

##### transformer

[`ValueTransformer`](../interfaces/ValueTransformer.md) \| [`ValueTransformer`](../interfaces/ValueTransformer.md)[]

#### 返回

`void`

#### 继承自

[`FindOperator`](FindOperator.md).[`transformValue`](FindOperator.md#transformvalue)
