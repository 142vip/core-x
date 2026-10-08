[API 参考](../../../index.md) / [@142vip/nest](../index.md) / ResponseSuccessVo

# 类: ResponseSuccessVo\<T\>

定义于: [dtos/response.vo.ts:42](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest/src/dtos/response.vo.ts#L42)

响应-请求成功

## theme_extends

- [`ResponseVo`](ResponseVo.md)\<`T`\>

## 类型参数

### T

`T`

## 构造函数

### 构造函数

> **new ResponseSuccessVo**\<`T`\>(`obj`): `ResponseSuccessVo`\<`T`\>

定义于: [dtos/base.vo.ts:2](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest/src/dtos/base.vo.ts#L2)

#### 参数

##### obj

`T`

#### 返回

`ResponseSuccessVo`\<`T`\>

#### 继承自

[`ResponseVo`](ResponseVo.md).[`constructor`](ResponseVo.md#constructor)

## 属性

### data

> **data**: `T`

定义于: [dtos/response.vo.ts:51](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest/src/dtos/response.vo.ts#L51)

结果

***

### success

> **success**: `boolean`

定义于: [dtos/response.vo.ts:17](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/nest/src/dtos/response.vo.ts#L17)

操作结果

#### 示例

```ts
true
```

#### 继承自

[`ResponseVo`](ResponseVo.md).[`success`](ResponseVo.md#success)
