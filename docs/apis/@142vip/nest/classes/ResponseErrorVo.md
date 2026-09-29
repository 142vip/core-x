[API 参考](../../../index.md) / [@142vip/nest](../index.md) / ResponseErrorVo

# 类: ResponseErrorVo\<T\>

定义于: [dtos/response.vo.ts:58](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/nest/src/dtos/response.vo.ts#L58)

响应-请求失败

## theme_extends

- [`ResponseVo`](ResponseVo.md)\<`T`\>

## 类型参数

### T

`T`

## 构造函数

### 构造函数

> **new ResponseErrorVo**\<`T`\>(`obj`): `ResponseErrorVo`\<`T`\>

定义于: [dtos/base.vo.ts:2](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/nest/src/dtos/base.vo.ts#L2)

#### 参数

##### obj

`T`

#### 返回

`ResponseErrorVo`\<`T`\>

#### 继承自

[`ResponseVo`](ResponseVo.md).[`constructor`](ResponseVo.md#constructor)

## 属性

### message

> **message**: `string`

定义于: [dtos/response.vo.ts:69](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/nest/src/dtos/response.vo.ts#L69)

错误信息

#### 示例

```ts
'参数错误'
```

***

### success

> **success**: `boolean`

定义于: [dtos/response.vo.ts:17](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/nest/src/dtos/response.vo.ts#L17)

操作结果

#### 示例

```ts
true
```

#### 继承自

[`ResponseVo`](ResponseVo.md).[`success`](ResponseVo.md#success)
