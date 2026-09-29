[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / Raw

# 函数: Raw()

## 调用签名

> **Raw**\<`T`\>(`value`): [`FindOperator`](../classes/FindOperator.md)\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/operator/Raw.d.ts:7

Find Options Operator.
Example: \{ someField: Raw("12") \}

### 类型参数

#### T

`T`

### 参数

#### value

`string`

### 返回

[`FindOperator`](../classes/FindOperator.md)\<`any`\>

## 调用签名

> **Raw**\<`T`\>(`sqlGenerator`): [`FindOperator`](../classes/FindOperator.md)\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/operator/Raw.d.ts:12

Find Options Operator.
Example: \{ someField: Raw((columnAlias) =\> `${columnAlias} = 5`) \}

### 类型参数

#### T

`T`

### 参数

#### sqlGenerator

(`columnAlias`) => `string`

### 返回

[`FindOperator`](../classes/FindOperator.md)\<`any`\>

## 调用签名

> **Raw**\<`T`\>(`sqlGenerator`, `parameters`): [`FindOperator`](../classes/FindOperator.md)\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/operator/Raw.d.ts:18

Find Options Operator.
For escaping parameters use next syntax:
Example: \{ someField: Raw((columnAlias) =\> `${columnAlias} = :value`, \{ value: 5 \}) \}

### 类型参数

#### T

`T`

### 参数

#### sqlGenerator

(`columnAlias`) => `string`

#### parameters

[`ObjectLiteral`](../interfaces/ObjectLiteral.md)

### 返回

[`FindOperator`](../classes/FindOperator.md)\<`any`\>
