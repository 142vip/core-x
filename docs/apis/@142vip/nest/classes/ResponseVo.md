[API 参考](../../../index.md) / [@142vip/nest](../index.md) / ResponseVo

# 类: ResponseVo\<T\>

定义于: [dtos/response.vo.ts:6](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/nest/src/dtos/response.vo.ts#L6)

## theme_extends

- [`BaseVo`](BaseVo.md)\<`T`\>

## theme_extended_by

- [`ResponseSuccessVo`](ResponseSuccessVo.md)
- [`ResponseErrorVo`](ResponseErrorVo.md)

## 类型参数

### T

`T`

## 构造函数

### 构造函数

> **new ResponseVo**\<`T`\>(`obj`): `ResponseVo`\<`T`\>

定义于: [dtos/base.vo.ts:2](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/nest/src/dtos/base.vo.ts#L2)

#### 参数

##### obj

`T`

#### 返回

`ResponseVo`\<`T`\>

#### 继承自

[`BaseVo`](BaseVo.md).[`constructor`](BaseVo.md#constructor)

## 属性

### success

> **success**: `boolean`

定义于: [dtos/response.vo.ts:17](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/nest/src/dtos/response.vo.ts#L17)

操作结果

#### 示例

```ts
true
```
