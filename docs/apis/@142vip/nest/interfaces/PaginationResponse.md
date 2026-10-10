[API 参考](../../../index.md) / [@142vip/nest](../index.md) / PaginationResponse

# 接口: PaginationResponse\<T\>

定义于: [interfaces/pagination.ts:19](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest/src/interfaces/pagination.ts#L19)

分页的响应参数

## theme_extends

- [`PaginationParams`](PaginationParams.md)

## 类型参数

### T

`T`

## 属性

### pageCount?

> `optional` **pageCount?**: `number`

定义于: [interfaces/pagination.ts:23](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest/src/interfaces/pagination.ts#L23)

总页数，拦截器最后处理

***

### pageNum

> **pageNum**: `number`

定义于: [interfaces/pagination.ts:9](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest/src/interfaces/pagination.ts#L9)

页号

#### 继承自

[`PaginationParams`](PaginationParams.md).[`pageNum`](PaginationParams.md#pagenum)

***

### pageSize

> **pageSize**: `number`

定义于: [interfaces/pagination.ts:13](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest/src/interfaces/pagination.ts#L13)

单页大小

#### 继承自

[`PaginationParams`](PaginationParams.md).[`pageSize`](PaginationParams.md#pagesize)

***

### records

> **records**: `T`[]

定义于: [interfaces/pagination.ts:31](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest/src/interfaces/pagination.ts#L31)

分页数据

***

### total

> **total**: `number`

定义于: [interfaces/pagination.ts:27](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest/src/interfaces/pagination.ts#L27)

数据总数
