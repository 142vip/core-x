[API 参考](../../../index.md) / [@142vip/nest](../index.md) / GlobalFilter

# 类: GlobalFilter

定义于: [filters/global.filter.ts:13](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest/src/filters/global.filter.ts#L13)

## 实现

- `ExceptionFilter`\<`Error` \| `HttpException` \| `unknown`\>

## 构造函数

### 构造函数

> **new GlobalFilter**(): `GlobalFilter`

#### 返回

`GlobalFilter`

## 属性

### logger

> `protected` `readonly` **logger**: `Logger`

定义于: [filters/global.filter.ts:14](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest/src/filters/global.filter.ts#L14)

## 方法

### catch()

> **catch**(`e`, `host`): `Promise`\<`void`\>

定义于: [filters/global.filter.ts:16](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest/src/filters/global.filter.ts#L16)

Method to implement a custom exception filter.

#### 参数

##### e

`unknown`

##### host

`ArgumentsHost`

used to access an array of arguments for
the in-flight request

#### 返回

`Promise`\<`void`\>

#### 实现了

`ExceptionFilter.catch`
