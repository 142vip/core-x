[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / TreeChildren

# 函数: TreeChildren()

> **TreeChildren**(`options?`): `PropertyDecorator`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/decorator/tree/TreeChildren.d.ts:5

Marks an entity property as a children of the tree.
"Tree children" will contain all children (bind) of this entity.

## 参数

### options?

#### cascade?

`boolean` \| (`"insert"` \| `"update"` \| `"remove"` \| `"soft-remove"` \| `"recover"`)[]

## 返回

`PropertyDecorator`
