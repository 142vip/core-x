[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipExecutor

# 变量: VipExecutor

> `const` **VipExecutor**: `object`

定义于: [packages/utils/src/core/exec.ts:176](https://github.com/142vip/core-x/blob/a868d72f351cc457f350d05d38d540d6494a8ff2/packages/utils/src/core/exec.ts#L176)

执行器

## 类型声明

### commandStandardExecutor()

> **commandStandardExecutor**: (`cmd`) => `Promise`\<`unknown`\>

标准Linux命令执行器
- 支持打印结果
- 异步

#### 参数

##### cmd

`Command`

#### 返回

`Promise`\<`unknown`\>

### execCommand()

> **execCommand**: (`cmd`, `opts?`) => `Promise`\<[`CmdResult`](../interfaces/CmdResult.md)\>

同步执行命令，并返回结果

#### 参数

##### cmd

`Command`

##### opts?

`Omit`\<`SpawnOptionsWithoutStdio`, `"cwd"` \| `"stdio"`\>

#### 返回

`Promise`\<[`CmdResult`](../interfaces/CmdResult.md)\>

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
