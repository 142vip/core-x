[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipQs

# 变量: VipQs

> `const` **VipQs**: `object`

定义于: [packages/utils/src/pkgs/qs.ts:18](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/utils/src/pkgs/qs.ts#L18)

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
