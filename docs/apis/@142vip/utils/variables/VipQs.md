[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipQs

# 变量: VipQs

> `const` **VipQs**: `object`

定义于: [packages/utils/src/pkgs/qs.ts:18](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/utils/src/pkgs/qs.ts#L18)

## 类型声明

### parse()

> **parse**: (`str`, `options?`) => `ParsedQs`

解析 query string

#### 参数

##### str

`string`

##### options?

IParseOptions\<BooleanOptional\> & \{ decoder?: undefined; \}

#### 返回

`ParsedQs`

### stringify()

> **stringify**: (`obj`, `options?`) => `string`

序列化 query string

#### 参数

##### obj

`any`

##### options?

`IStringifyOptions`\<`BooleanOptional`\>

#### 返回

`string`
