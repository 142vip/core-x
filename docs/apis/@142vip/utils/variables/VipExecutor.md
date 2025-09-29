[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipExecutor

# 变量: VipExecutor

> `const` **VipExecutor**: `object`

定义于: [packages/utils/src/core/exec.ts:221](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/utils/src/core/exec.ts#L221)

执行器

## 类型声明

### commandStandardExecutor()

> **commandStandardExecutor**: (`cmd`) => `Promise`\<[`StandardExecutorResponse`](../interfaces/StandardExecutorResponse.md)\>

标准Linux命令执行器
- 支持打印结果
- 异步

#### 参数

##### cmd

[`Command`](../type-aliases/Command.md)

#### 返回

`Promise`\<[`StandardExecutorResponse`](../interfaces/StandardExecutorResponse.md)\>

### execCommand()

> **execCommand**: (`cmd`, `opts?`) => `Promise`\<[`CommandResponse`](../interfaces/CommandResponse.md)\>

异步执行命令，并返回结果

#### 参数

##### cmd

[`Command`](../type-aliases/Command.md)

##### opts?

`Omit`\<`SpawnOptionsWithoutStdio`, `"stdio"` \| `"cwd"`\>

#### 返回

`Promise`\<[`CommandResponse`](../interfaces/CommandResponse.md)\>

### execCommandSync()

> **execCommandSync**: (`cmd`, `cwd?`) => `string`

#### 参数

##### cmd

`string`

##### cwd?

`string`

#### 返回

`string`

### execShell()

> **execShell**: (`commands`) => `Promise`\<`void`\>

脚本执行器，执行shell命令

#### 参数

##### commands

`string` | [`ShellCommand`](../interfaces/ShellCommand.md) | [`ShellCommand`](../interfaces/ShellCommand.md)[]

#### 返回

`Promise`\<`void`\>

### getCommandTrimResponse()

> **getCommandTrimResponse**: (`command`) => `Promise`\<`null` \| `string`\>

获取命令执行的trim操作后的结果

#### 参数

##### command

`string`

#### 返回

`Promise`\<`null` \| `string`\>
