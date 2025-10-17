[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipExecutor

# Variable: VipExecutor

> `const` **VipExecutor**: `object`

Defined in: [packages/utils/src/core/exec.ts:221](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/core/exec.ts#L221)

执行器

## Type Declaration

### commandStandardExecutor()

> **commandStandardExecutor**: (`cmd`) => `Promise`\<[`StandardExecutorResponse`](../interfaces/StandardExecutorResponse.md)\>

标准Linux命令执行器
- 支持打印结果
- 异步

#### Parameters

##### cmd

[`Command`](../type-aliases/Command.md)

#### Returns

`Promise`\<[`StandardExecutorResponse`](../interfaces/StandardExecutorResponse.md)\>

### execCommand()

> **execCommand**: (`cmd`, `opts?`) => `Promise`\<[`CommandResponse`](../interfaces/CommandResponse.md)\>

异步执行命令，并返回结果

#### Parameters

##### cmd

[`Command`](../type-aliases/Command.md)

##### opts?

`Omit`\<`SpawnOptionsWithoutStdio`, `"stdio"` \| `"cwd"`\>

#### Returns

`Promise`\<[`CommandResponse`](../interfaces/CommandResponse.md)\>

### execCommandSync()

> **execCommandSync**: (`cmd`, `cwd?`) => `string`

#### Parameters

##### cmd

`string`

##### cwd?

`string`

#### Returns

`string`

### execShell()

> **execShell**: (`commands`) => `Promise`\<`void`\>

脚本执行器，执行shell命令

#### Parameters

##### commands

`string` | [`ShellCommand`](../interfaces/ShellCommand.md) | [`ShellCommand`](../interfaces/ShellCommand.md)[]

#### Returns

`Promise`\<`void`\>

### getCommandTrimResponse()

> **getCommandTrimResponse**: (`command`) => `Promise`\<`null` \| `string`\>

获取命令执行的trim操作后的结果

#### Parameters

##### command

`string`

#### Returns

`Promise`\<`null` \| `string`\>
