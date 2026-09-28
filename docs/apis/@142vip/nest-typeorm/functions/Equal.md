[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / Equal

# 函数: Equal()

> **Equal**\<`T`\>(`value`): [`EqualOperator`](../classes/EqualOperator.md)\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/find-options/operator/Equal.d.ts:11

Find Options Operator.
This operator is handy to provide object value for non-relational properties of the Entity.

Examples:
     \{ someField: Equal("value") \}
     \{ uuid: Equal(new UUID()) \}

## 类型参数

### T

`T`

## 参数

### value

`T` \| [`FindOperator`](../classes/FindOperator.md)\<`T`\>

## 返回

[`EqualOperator`](../classes/EqualOperator.md)\<`T`\>
