[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipQs

# 类: VipQs

定义于: [packages/utils/src/pkgs/qs.ts:4](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/qs.ts#L4)

## 构造函数

### 构造函数

> **new VipQs**(): `VipQs`

#### 返回

`VipQs`

## 方法

### parse()

> **parse**(`str`, `options?`): `ParsedQs`

定义于: [packages/utils/src/pkgs/qs.ts:15](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/qs.ts#L15)

解析 query string

#### 参数

##### str

`string`

##### options?

IParseOptions\<BooleanOptional\> & \{ decoder?: undefined; \}

#### 返回

`ParsedQs`

***

### stringify()

> **stringify**(`obj`, `options?`): `string`

定义于: [packages/utils/src/pkgs/qs.ts:8](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/qs.ts#L8)

序列化 query string

#### 参数

##### obj

`any`

##### options?

`IStringifyOptions`\<`BooleanOptional`\>

#### 返回

`string`
