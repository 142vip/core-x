[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipNodeJS

# 变量: VipNodeJS

> `const` **VipNodeJS**: `object`

定义于: [packages/utils/src/core/nodejs.ts:250](https://github.com/142vip/core-x/blob/a868d72f351cc457f350d05d38d540d6494a8ff2/packages/utils/src/core/nodejs.ts#L250)

## 类型声明

### existErrorProcess()

> **existErrorProcess**: () => `void`

异常退出进程，错误码为1

#### 返回

`void`

### existPath()

> **existPath**: (`path`) => `boolean`

路径是否存在

#### 参数

##### path

`PathLike`

#### 返回

`boolean`

### existSuccessProcess()

> **existSuccessProcess**: () => `void`

正常退出进程，退出码为0，异常无法捕获

#### 返回

`void`

### exitProcess()

> **exitProcess**: (`exitCode?`) => `void`

进程退出

#### 参数

##### exitCode?

`number`

#### 返回

`void`

### getCPUArch()

> **getCPUArch**: () => `Architecture`

CPU 架构

#### 返回

`Architecture`

### getProcessArgv()

> **getProcessArgv**: () => `string`[]

进程参数

#### 返回

`string`[]

### getProcessArgvByIndex()

> **getProcessArgvByIndex**: (`index`) => `string`

根据索引获取进程参数
node process-args.js one two=three four
Would generate the output:
0: /usr/local/bin/node
1: /Users/xxx/work/node/process-args.js
2: one
3: two=three
4: fou

#### 参数

##### index

`number`

#### 返回

`string`

### getProcessCwd()

> **getProcessCwd**: () => `string`

进程工作目录

#### 返回

`string`

### getProcessEnv()

> **getProcessEnv**: (`key`) => `undefined` \| `string`

进程环境变量

#### 参数

##### key

`string`

#### 返回

`undefined` \| `string`

### getProcessFirstArgv()

> **getProcessFirstArgv**: () => `string`

进程第一个参数

#### 返回

`string`

### getProcessPlatform()

> **getProcessPlatform**: () => `Platform`

进程平台

#### 返回

`Platform`

### getProcessStdin()

> **getProcessStdin**: () => `ReadStream`

#### 返回

`ReadStream`

### getProcessStdout()

> **getProcessStdout**: () => `WriteStream`

#### 返回

`WriteStream`

### getProcessVersions()

> **getProcessVersions**: () => `ProcessVersions`

进程版本信息

#### 返回

`ProcessVersions`

### isBuffer()

> **isBuffer**: (`data`) => `boolean`

#### 参数

##### data

`object`

#### 返回

`boolean`

### isDirectory()

> **isDirectory**: (`path`) => `boolean`

是否为目录

#### 参数

##### path

`PathLike`

#### 返回

`boolean`

### isExistDir()

> **isExistDir**: (`name`, `cwd?`) => `boolean`

目录是否存在

#### 参数

##### name

`string`

##### cwd?

`string`

#### 返回

`boolean`

### isExistFile()

> **isExistFile**: (`name`, `cwd?`) => `boolean`

是否存在文件

#### 参数

##### name

`string`

##### cwd?

`string`

#### 返回

`boolean`

### pathDirname()

> **pathDirname**: (`dirPath`) => `string`

#### 参数

##### dirPath

`string`

#### 返回

`string`

### pathExtname()

> **pathExtname**: (`path`) => `string`

路径扩展名

#### 参数

##### path

`string`

#### 返回

`string`

### pathJoin()

> **pathJoin**: (...`paths`) => `string`

路径拼接
- path.join()

#### 参数

##### paths

...`string`[]

#### 返回

`string`

### pathResolve()

> **pathResolve**: (...`pathSegments`) => `string`

#### 参数

##### pathSegments

...`string`[]

#### 返回

`string`

### pick()

> **pick**: \<`T`, `K`\>(`obj`, `keys`) => `Pick`\<`T`, `K`\>

#### 类型参数

##### T

`T`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### 参数

##### obj

`T`

##### keys

`K`[]

#### 返回

`Pick`\<`T`, `K`\>

### printStandardNodeDevEnv()

> **printStandardNodeDevEnv**: () => `Promise`\<`void`\>

打印标准的Node开发环境信息

#### 返回

`Promise`\<`void`\>

### readdirSync()

> **readdirSync**: (`path`, `options?`) => `string`[]

读取目录

#### 参数

##### path

`PathLike`

##### options?

`null` | `BufferEncoding` | \{ `encoding`: BufferEncoding \| null; `recursive?`: `boolean`; `withFileTypes?`: `false`; \}

#### 返回

`string`[]

### readFileToStrByUTF8()

> **readFileToStrByUTF8**: (`filePath`) => `string`

读文件

#### 参数

##### filePath

`PathLike`

#### 返回

`string`

### setProcessEnv()

> **setProcessEnv**: (`key`, `value`) => `void`

#### 参数

##### key

`string`

##### value

`string`

#### 返回

`void`

### writeFileByUTF8()

> **writeFileByUTF8**: (`filePath`, `data`) => `void`

写文件

#### 参数

##### filePath

`PathLike`

##### data

`string` | `ArrayBufferView`\<`ArrayBufferLike`\>

#### 返回

`void`
