[API 参考](../../../index.md) / [@142vip/copyright](../index.md) / VipCopyright

# 类: VipCopyright

定义于: [copyright.ts:30](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/copyright/src/copyright.ts#L30)

软著源代码生成器
- 支持Java、JavaScript、TypeScript、Python、C、C++、Go、Swift、PHP、Rust、Shell、SQL、YAML、XML、HTML、Text等语言
- 支持生成源代码文档
- 支持生成源代码文档的前30页、后30页、前后30页

## 构造函数

### 构造函数

> **new VipCopyright**(`copyrightTitle`, `copyrightVersion`, `options?`): `VipCopyright`

定义于: [copyright.ts:56](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/copyright/src/copyright.ts#L56)

#### 参数

##### copyrightTitle

`string`

##### copyrightVersion

`string`

##### options?

[`CopyrightOptions`](../interfaces/CopyrightOptions.md)

#### 返回

`VipCopyright`

## 方法

### generateDocx()

> **generateDocx**(`sourceCodeDir`, `fileType`): `Promise`\<`void`\>

定义于: [copyright.ts:94](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/copyright/src/copyright.ts#L94)

生成源代码文档

#### 参数

##### sourceCodeDir

`string`

##### fileType

[`CopyrightFileType`](../enumerations/CopyrightFileType.md)

#### 返回

`Promise`\<`void`\>

***

### saveCodeToDocx()

> **saveCodeToDocx**(`fileName`, `sourceLines`, `pageCount`): `Promise`\<`void`\>

定义于: [copyright.ts:130](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/copyright/src/copyright.ts#L130)

存储代码到文档中

#### 参数

##### fileName

`string`

##### sourceLines

`string`[]

##### pageCount

`number`

#### 返回

`Promise`\<`void`\>

***

### scanSourceCode()

> **scanSourceCode**(`sourceCodeDir`, `fileType`): `object`

定义于: [copyright.ts:157](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/copyright/src/copyright.ts#L157)

根据文件路径，扫描源码

#### 参数

##### sourceCodeDir

`string`

##### fileType

[`CopyrightFileType`](../enumerations/CopyrightFileType.md)

#### 返回

`object`

##### allSourceCode

> **allSourceCode**: `string`[]

##### beginSourceCode

> **beginSourceCode**: `string`[]

##### endSourceCode

> **endSourceCode**: `string`[]

***

### quickGenerateDocx()

> `static` **quickGenerateDocx**(`options`): `Promise`\<`void`\>

定义于: [copyright.ts:81](https://github.com/142vip/core-x/blob/d7c32a4c72e7e50fa8291351a2283aaafcc1d8c3/packages/copyright/src/copyright.ts#L81)

快速生成文档

#### 参数

##### options

###### copyrightTitle

`string`

###### copyrightVersion

`string`

###### fileType

[`CopyrightFileType`](../enumerations/CopyrightFileType.md)

###### sourceCodeDir

`string`

#### 返回

`Promise`\<`void`\>
