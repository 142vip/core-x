[API 参考](../../../index.md) / [@142vip/nest](../index.md) / PropagationInterceptor

# 类: PropagationInterceptor

定义于: [interceptors/propagation.interceptor.ts:14](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/nest/src/interceptors/propagation.interceptor.ts#L14)

## 实现

- `NestInterceptor`

## 构造函数

### 构造函数

> **new PropagationInterceptor**(): `PropagationInterceptor`

#### 返回

`PropagationInterceptor`

## 方法

### intercept()

> **intercept**(`context`, `next`): `Observable`\<`unknown`\>

定义于: [interceptors/propagation.interceptor.ts:15](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/nest/src/interceptors/propagation.interceptor.ts#L15)

Method to implement a custom interceptor.

#### 参数

##### context

`ExecutionContext`

an `ExecutionContext` object providing methods to access the
route handler and class about to be invoked.

##### next

`CallHandler`

a reference to the `CallHandler`, which provides access to an
`Observable` representing the response stream from the route handler.

#### 返回

`Observable`\<`unknown`\>

#### 实现了

`NestInterceptor.intercept`
