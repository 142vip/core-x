[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipJSON

# 变量: VipJSON

> `const` **VipJSON**: `object`

定义于: [packages/utils/src/pkgs/json.ts:68](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/utils/src/pkgs/json.ts#L68)

处理JSON

## 类型声明

### clone()

> **clone**: \<`T`\>(`json`) => `T`

json克隆复制
参考：https://www.npmjs.com/package/klona

#### 类型参数

##### T

`T`

#### 参数

##### json

`T`

#### 返回

`T`

### parse()

> **parse**: \<`T`\>(`originData`, `defaultData`) => `T`

解析JSON串

#### 类型参数

##### T

`T`

#### 参数

##### originData

`undefined` | `null` | `string`

##### defaultData

`Partial`\<`T`\>

#### 返回

`T`

### readFile()

> **readFile**: (`name`, `cwd`) => `JSONFile`

Reads a JSON file and returns the parsed data.

#### 参数

##### name

`string`

##### cwd

`string`

#### 返回

`JSONFile`

### stringify()

> **stringify**: (`value`, `replacer?`, `space?`) => `string`

JSON序列化

#### 参数

##### value

`any`

##### replacer?

(`this`, `key`, `value`) => `any`

##### space?

`string` | `number`

#### 返回

`string`

### writeFile()

> **writeFile**: (`file`) => `void`

Writes the given data to the specified JSON file.

#### 参数

##### file

`JSONFile`

#### 返回

`void`
