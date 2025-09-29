[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipCommander

# 类: VipCommander

定义于: [packages/utils/src/pkgs/commander.ts:38](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/utils/src/pkgs/commander.ts#L38)

终端交互
参考：https://www.npmjs.com/package/commander

## theme_extends

- `Command`

## 构造函数

### 构造函数

> **new VipCommander**(`name`, `version`, `description?`): `VipCommander`

定义于: [packages/utils/src/pkgs/commander.ts:39](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/utils/src/pkgs/commander.ts#L39)

#### 参数

##### name

`string`

##### version

`string`

##### description?

`string`

#### 返回

`VipCommander`

#### 重写了

`Command.constructor`

## 属性

### args

> **args**: `string`[]

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:298

#### 继承自

`Command.args`

***

### commands

> `readonly` **commands**: readonly `Command`[]

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:300

#### 继承自

`Command.commands`

***

### options

> `readonly` **options**: readonly `Option`[]

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:301

#### 继承自

`Command.options`

***

### parent

> **parent**: `null` \| `Command`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:303

#### 继承自

`Command.parent`

***

### processedArgs

> **processedArgs**: `any`[]

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:299

#### 继承自

`Command.processedArgs`

***

### registeredArguments

> `readonly` **registeredArguments**: readonly `Argument`[]

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:302

#### 继承自

`Command.registeredArguments`

## 方法

### action()

> **action**(`fn`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:547

Register callback `fn` for the command.

#### 参数

##### fn

(...`args`) => `void` \| `Promise`\<`void`\>

#### 返回

`this`

`this` command for chaining

#### 示例

```
program
  .command('serve')
  .description('start service')
  .action(function() {
    // do work here
  });
```

#### 继承自

`Command.action`

***

### addArgument()

> **addArgument**(`arg`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:421

Define argument syntax for command, adding a prepared argument.

#### 参数

##### arg

`Argument`

#### 返回

`this`

`this` command for chaining

#### 继承自

`Command.addArgument`

***

### addCommand()

> **addCommand**(`cmd`, `opts?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:384

Add a prepared subcommand.

See .command() for creating an attached subcommand which inherits settings from its parent.

#### 参数

##### cmd

`Command`

##### opts?

`CommandOptions`

#### 返回

`this`

`this` command for chaining

#### 继承自

`Command.addCommand`

***

### addHelpCommand()

#### 调用签名

> **addHelpCommand**(`cmd`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:454

Add prepared custom help command.

##### 参数

###### cmd

`Command`

##### 返回

`this`

##### 继承自

`Command.addHelpCommand`

#### 调用签名

> **addHelpCommand**(`nameAndArgs`, `description?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:456

##### 参数

###### nameAndArgs

`string`

###### description?

`string`

##### 返回

`this`

##### 已被弃用

since v12, instead use helpCommand

##### 继承自

`Command.addHelpCommand`

#### 调用签名

> **addHelpCommand**(`enable?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:458

##### 参数

###### enable?

`boolean`

##### 返回

`this`

##### 已被弃用

since v12, instead use helpCommand

##### 继承自

`Command.addHelpCommand`

***

### addHelpOption()

> **addHelpOption**(`option`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:921

Supply your own option to use for the built-in help option.
This is an alternative to using helpOption() to customise the flags and description etc.

#### 参数

##### option

`Option`

#### 返回

`this`

#### 继承自

`Command.addHelpOption`

***

### addHelpText()

#### 调用签名

> **addHelpText**(`position`, `text`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:938

Add additional text to be displayed with the built-in help.

Position is 'before' or 'after' to affect just this command,
and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.

##### 参数

###### position

`AddHelpTextPosition`

###### text

`string`

##### 返回

`this`

##### 继承自

`Command.addHelpText`

#### 调用签名

> **addHelpText**(`position`, `text`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:939

Add additional text to be displayed with the built-in help.

Position is 'before' or 'after' to affect just this command,
and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.

##### 参数

###### position

`AddHelpTextPosition`

###### text

(`context`) => `string`

##### 返回

`this`

##### 继承自

`Command.addHelpText`

***

### addOption()

> **addOption**(`option`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:627

Add a prepared Option.

See .option() and .requiredOption() for creating and attaching an option in a single call.

#### 参数

##### option

`Option`

#### 返回

`this`

#### 继承自

`Command.addOption`

***

### alias()

#### 调用签名

> **alias**(`alias`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:821

Set an alias for the command.

You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.

##### 参数

###### alias

`string`

##### 返回

`this`

`this` command for chaining

##### 继承自

`Command.alias`

#### 调用签名

> **alias**(): `string`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:825

Get alias for the command.

##### 返回

`string`

##### 继承自

`Command.alias`

***

### aliases()

#### 调用签名

> **aliases**(`aliases`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:834

Set aliases for the command.

Only the first alias is shown in the auto-generated help.

##### 参数

###### aliases

readonly `string`[]

##### 返回

`this`

`this` command for chaining

##### 继承自

`Command.aliases`

#### 调用签名

> **aliases**(): `string`[]

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:838

Get aliases for the command.

##### 返回

`string`[]

##### 继承自

`Command.aliases`

***

### allowExcessArguments()

> **allowExcessArguments**(`allowExcess?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:696

Allow excess command-arguments on the command line. Pass false to make excess arguments an error.

#### 参数

##### allowExcess?

`boolean`

#### 返回

`this`

`this` command for chaining

#### 继承自

`Command.allowExcessArguments`

***

### allowUnknownOption()

> **allowUnknownOption**(`allowUnknown?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:689

Allow unknown options on the command line.

#### 参数

##### allowUnknown?

`boolean`

#### 返回

`this`

`this` command for chaining

#### 继承自

`Command.allowUnknownOption`

***

### argument()

#### 调用签名

> **argument**\<`T`\>(`flags`, `description`, `fn`, `defaultValue?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:408

Define argument syntax for command.

The default is that the argument is required, and you can explicitly
indicate this with <> around the name. Put [] around the name for an optional argument.

##### 类型参数

###### T

`T`

##### 参数

###### flags

`string`

###### description

`string`

###### fn

(`value`, `previous`) => `T`

###### defaultValue?

`T`

##### 返回

`this`

`this` command for chaining

##### 示例

```
program.argument('<input-file>');
program.argument('[output-file]');
```

##### 继承自

`Command.argument`

#### 调用签名

> **argument**(`name`, `description?`, `defaultValue?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:414

Define argument syntax for command.

The default is that the argument is required, and you can explicitly
indicate this with <> around the name. Put [] around the name for an optional argument.

##### 参数

###### name

`string`

###### description?

`string`

###### defaultValue?

`unknown`

##### 返回

`this`

`this` command for chaining

##### 示例

```
program.argument('<input-file>');
program.argument('[output-file]');
```

##### 继承自

`Command.argument`

***

### arguments()

> **arguments**(`names`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:435

Define argument syntax for command, adding multiple at once (without descriptions).

See also .argument().

#### 参数

##### names

`string`

#### 返回

`this`

`this` command for chaining

#### 示例

```
program.arguments('<cmd> [env]');
```

#### 继承自

`Command.arguments`

***

### combineFlagAndOptionalValue()

> **combineFlagAndOptionalValue**(`combine?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:682

Alter parsing of short flags with optional values.

#### 参数

##### combine?

`boolean`

#### 返回

`this`

`this` command for chaining

#### 示例

```
// for `.option('-f,--flag [value]'):
.combineFlagAndOptionalValue(true)  // `-f80` is treated like `--flag=80`, this is the default behaviour
.combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`
```

#### 继承自

`Command.combineFlagAndOptionalValue`

***

### command()

#### 调用签名

> **command**(`nameAndArgs`, `opts?`): `Command`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:341

Define a command, implemented using an action handler.

##### 参数

###### nameAndArgs

`string`

command name and arguments, args are  `<required>` or `[optional]` and last may also be `variadic...`

###### opts?

`CommandOptions`

configuration options

##### 返回

`Command`

new command

##### 备注

The command description is supplied using `.description`, not as a parameter to `.command`.

##### 示例

```ts
program
  .command('clone <source> [destination]')
  .description('clone a repository into a newly created directory')
  .action((source, destination) => {
    console.log('clone command called')
  })
```

##### 继承自

`Command.command`

#### 调用签名

> **command**(`nameAndArgs`, `description`, `opts?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:363

Define a command, implemented in a separate executable file.

##### 参数

###### nameAndArgs

`string`

command name and arguments, args are  `<required>` or `[optional]` and last may also be `variadic...`

###### description

`string`

description of executable command

###### opts?

`ExecutableCommandOptions`

configuration options

##### 返回

`this`

`this` command for chaining

##### 备注

The command description is supplied as the second parameter to `.command`.

##### 示例

```ts
program
  .command('start <service>', 'start named service')
  .command('stop [service]', 'stop named service, or all if no name supplied')
```

##### 继承自

`Command.command`

***

### configureHelp()

#### 调用签名

> **configureHelp**(`configuration`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:491

You can customise the help by overriding Help properties using configureHelp(),
or with a subclass of Help by overriding createHelp().

##### 参数

###### configuration

`HelpConfiguration`

##### 返回

`this`

##### 继承自

`Command.configureHelp`

#### 调用签名

> **configureHelp**(): `HelpConfiguration`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:493

Get configuration

##### 返回

`HelpConfiguration`

##### 继承自

`Command.configureHelp`

***

### configureOutput()

#### 调用签名

> **configureOutput**(`configuration`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:511

The default output goes to stdout and stderr. You can customise this for special
applications. You can also customise the display of errors by overriding outputError.

The configuration properties are all functions:
```
// functions to change where being written, stdout and stderr
writeOut(str)
writeErr(str)
// matching functions to specify width for wrapping help
getOutHelpWidth()
getErrHelpWidth()
// functions based on what is being written out
outputError(str, write) // used for displaying errors, and not used for displaying help
```

##### 参数

###### configuration

`OutputConfiguration`

##### 返回

`this`

##### 继承自

`Command.configureOutput`

#### 调用签名

> **configureOutput**(): `OutputConfiguration`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:513

Get configuration

##### 返回

`OutputConfiguration`

##### 继承自

`Command.configureOutput`

***

### copyInheritedSettings()

> **copyInheritedSettings**(`sourceCommand`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:520

Copy settings that are useful to have in common across root command and subcommands.

(Used internally when adding a command using `.command()` so subcommands inherit parent settings.)

#### 参数

##### sourceCommand

`Command`

#### 返回

`this`

#### 继承自

`Command.copyInheritedSettings`

***

### createArgument()

> **createArgument**(`name`, `description?`): `Argument`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:392

Factory routine to create a new unattached argument.

See .argument() for creating an attached argument, which uses this routine to
create the argument. You can override createArgument to return a custom argument.

#### 参数

##### name

`string`

##### description?

`string`

#### 返回

`Argument`

#### 继承自

`Command.createArgument`

***

### createCommand()

> **createCommand**(`name?`): `Command`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:375

Factory routine to create a new unattached command.

See .command() for creating an attached subcommand, which uses this routine to
create the command. You can override createCommand to customise subcommands.

#### 参数

##### name?

`string`

#### 返回

`Command`

#### 继承自

`Command.createCommand`

***

### createHelp()

> **createHelp**(): `Help`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:485

You can customise the help with a subclass of Help by overriding createHelp,
or by overriding Help properties using configureHelp().

#### 返回

`Help`

#### 继承自

`Command.createHelp`

***

### createOption()

> **createOption**(`flags`, `description?`): `Option`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:620

Factory routine to create a new unattached option.

See .option() for creating an attached option, which uses this routine to
create the option. You can override createOption to return a custom option.

#### 参数

##### flags

`string`

##### description?

`string`

#### 返回

`Option`

#### 继承自

`Command.createOption`

***

### description()

#### 调用签名

> **description**(`str`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:794

Set the description.

##### 参数

###### str

`string`

##### 返回

`this`

`this` command for chaining

##### 继承自

`Command.description`

#### 调用签名

> **description**(`str`, `argsDescription`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:796

##### 参数

###### str

`string`

###### argsDescription

`Record`\<`string`, `string`\>

##### 返回

`this`

##### 已被弃用

since v8, instead use .argument to add command argument with description

##### 继承自

`Command.description`

#### 调用签名

> **description**(): `string`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:800

Get the description.

##### 返回

`string`

##### 继承自

`Command.description`

***

### enablePositionalOptions()

> **enablePositionalOptions**(`positional?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:706

Enable positional options. Positional means global options are specified before subcommands which lets
subcommands reuse the same option names, and also enables subcommands to turn on passThroughOptions.

The default behaviour is non-positional and global options may appear anywhere on the command line.

#### 参数

##### positional?

`boolean`

#### 返回

`this`

`this` command for chaining

#### 继承自

`Command.enablePositionalOptions`

***

### error()

> **error**(`message`, `errorOptions?`): `never`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:479

Display error message and exit (or call exitOverride).

#### 参数

##### message

`string`

##### errorOptions?

`ErrorOptions`

#### 返回

`never`

#### 继承自

`Command.error`

***

### executableDir()

#### 调用签名

> **executableDir**(`path`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:889

Set the directory for searching for executable subcommands of this command.

##### 参数

###### path

`string`

##### 返回

`this`

`this` command for chaining

##### 示例

```ts
program.executableDir(__dirname)
// or
program.executableDir('subcommands')
```

##### 继承自

`Command.executableDir`

#### 调用签名

> **executableDir**(): `null` \| `string`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:893

Get the executable search directory.

##### 返回

`null` \| `string`

##### 继承自

`Command.executableDir`

***

### exitOverride()

> **exitOverride**(`callback?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:474

Register callback to use as replacement for calling process.exit.

#### 参数

##### callback?

(`err`) => `void`

#### 返回

`this`

#### 继承自

`Command.exitOverride`

***

### getOptionValue()

> **getOptionValue**(`key`): `any`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:644

Retrieve option value.

#### 参数

##### key

`string`

#### 返回

`any`

#### 继承自

`Command.getOptionValue`

***

### getOptionValueSource()

> **getOptionValueSource**(`key`): `OptionValueSource`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:663

Get source of option value.

#### 参数

##### key

`string`

#### 返回

`OptionValueSource`

#### 继承自

`Command.getOptionValueSource`

***

### getOptionValueSourceWithGlobals()

> **getOptionValueSourceWithGlobals**(`key`): `OptionValueSource`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:668

Get source of option value. See also .optsWithGlobals().

#### 参数

##### key

`string`

#### 返回

`OptionValueSource`

#### 继承自

`Command.getOptionValueSourceWithGlobals`

***

### help()

#### 调用签名

> **help**(`context?`): `never`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:928

Output help information and exit.

Outputs built-in help, and custom text added using `.addHelpText()`.

##### 参数

###### context?

`HelpContext`

##### 返回

`never`

##### 继承自

`Command.help`

#### 调用签名

> **help**(`cb?`): `never`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:930

##### 参数

###### cb?

(`str`) => `string`

##### 返回

`never`

##### 已被弃用

since v7

##### 继承自

`Command.help`

***

### helpCommand()

#### 调用签名

> **helpCommand**(`nameAndArgs`, `description?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:448

Customise or override default help command. By default a help command is automatically added if your command has subcommands.

##### 参数

###### nameAndArgs

`string`

###### description?

`string`

##### 返回

`this`

##### 示例

```ts
program.helpCommand('help [cmd]')
program.helpCommand('help [cmd]', 'show help')
program.helpCommand(false) // suppress default help command
program.helpCommand(true) // add help command even if no subcommands
```

##### 继承自

`Command.helpCommand`

#### 调用签名

> **helpCommand**(`enable`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:449

Customise or override default help command. By default a help command is automatically added if your command has subcommands.

##### 参数

###### enable

`boolean`

##### 返回

`this`

##### 示例

```ts
program.helpCommand('help [cmd]')
program.helpCommand('help [cmd]', 'show help')
program.helpCommand(false) // suppress default help command
program.helpCommand(true) // add help command even if no subcommands
```

##### 继承自

`Command.helpCommand`

***

### helpInformation()

> **helpInformation**(`context?`): `string`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:908

Return command help documentation.

#### 参数

##### context?

`HelpContext`

#### 返回

`string`

#### 继承自

`Command.helpInformation`

***

### helpOption()

> **helpOption**(`flags?`, `description?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:915

You can pass in flags and a description to override the help
flags and help description for your command. Pass in false
to disable the built-in help option.

#### 参数

##### flags?

`string` | `boolean`

##### description?

`string`

#### 返回

`this`

#### 继承自

`Command.helpOption`

***

### hook()

> **hook**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:463

Add hook for life cycle event.

#### 参数

##### event

`HookEvent`

##### listener

(`thisCommand`, `actionCommand`) => `void` \| `Promise`\<`void`\>

#### 返回

`this`

#### 继承自

`Command.hook`

***

### init()

> **init**(`options`, `args`): `Command`

定义于: [packages/utils/src/pkgs/commander.ts:53](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/utils/src/pkgs/commander.ts#L53)

初始化，不包括命令

#### 参数

##### options

`Pick`\<[`VipCommanderDetailOptions`](../interfaces/VipCommanderDetailOptions.md), `"summary"` \| `"description"`\>

##### args

[`VipCommanderOptions`](../interfaces/VipCommanderOptions.md) = `{}`

#### 返回

`Command`

***

### initCommand()

> **initCommand**(`options`, `args`): `Command`

定义于: [packages/utils/src/pkgs/commander.ts:63](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/utils/src/pkgs/commander.ts#L63)

对命令初始化，增加aliases，summary，description等信息
- 增加默认的一些参数

#### 参数

##### options

[`VipCommanderDetailOptions`](../interfaces/VipCommanderDetailOptions.md)

##### args

[`VipCommanderOptions`](../interfaces/VipCommanderOptions.md) = `{}`

#### 返回

`Command`

***

### name()

#### 调用签名

> **name**(`str`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:856

Set the name of the command.

##### 参数

###### str

`string`

##### 返回

`this`

`this` command for chaining

##### 继承自

`Command.name`

#### 调用签名

> **name**(): `string`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:860

Get the name of the command.

##### 返回

`string`

##### 继承自

`Command.name`

***

### nameFromFilename()

> **nameFromFilename**(`filename`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:875

Set the name of the command from script filename, such as process.argv[1],
or require.main.filename, or __filename.

(Used internally and public although not documented in README.)

#### 参数

##### filename

`string`

#### 返回

`this`

`this` command for chaining

#### 示例

```ts
program.nameFromFilename(require.main.filename)
```

#### 继承自

`Command.nameFromFilename`

***

### on()

> **on**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:947

Add a listener (callback) for when events occur. (Implemented using EventEmitter.)

#### 参数

##### event

`string` | `symbol`

##### listener

(...`args`) => `void`

#### 返回

`this`

#### 继承自

`Command.on`

***

### option()

#### 调用签名

> **option**(`flags`, `description?`, `defaultValue?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:569

Define option with `flags`, `description`, and optional argument parsing function or `defaultValue` or both.

The `flags` string contains the short and/or long flags, separated by comma, a pipe or space. A required
option-argument is indicated by `<>` and an optional option-argument by `[]`.

See the README for more details, and see also addOption() and requiredOption().

##### 参数

###### flags

`string`

###### description?

`string`

###### defaultValue?

`string` | `boolean` | `string`[]

##### 返回

`this`

`this` command for chaining

##### 示例

```js
program
  .option('-p, --pepper', 'add pepper')
  .option('-p, --pizza-type <TYPE>', 'type of pizza') // required option-argument
  .option('-c, --cheese [CHEESE]', 'add extra cheese', 'mozzarella') // optional option-argument with default
  .option('-t, --tip <VALUE>', 'add tip to purchase cost', Number.parseFloat) // custom parse function
```

##### 继承自

`Command.option`

#### 调用签名

> **option**\<`T`\>(`flags`, `description`, `parseArg`, `defaultValue?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:574

Define option with `flags`, `description`, and optional argument parsing function or `defaultValue` or both.

The `flags` string contains the short and/or long flags, separated by comma, a pipe or space. A required
option-argument is indicated by `<>` and an optional option-argument by `[]`.

See the README for more details, and see also addOption() and requiredOption().

##### 类型参数

###### T

`T`

##### 参数

###### flags

`string`

###### description

`string`

###### parseArg

(`value`, `previous`) => `T`

###### defaultValue?

`T`

##### 返回

`this`

`this` command for chaining

##### 示例

```js
program
  .option('-p, --pepper', 'add pepper')
  .option('-p, --pizza-type <TYPE>', 'type of pizza') // required option-argument
  .option('-c, --cheese [CHEESE]', 'add extra cheese', 'mozzarella') // optional option-argument with default
  .option('-t, --tip <VALUE>', 'add tip to purchase cost', Number.parseFloat) // custom parse function
```

##### 继承自

`Command.option`

#### 调用签名

> **option**(`flags`, `description`, `regexp`, `defaultValue?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:581

##### 参数

###### flags

`string`

###### description

`string`

###### regexp

`RegExp`

###### defaultValue?

`string` | `boolean` | `string`[]

##### 返回

`this`

##### 已被弃用

since v7, instead use choices or a custom function

##### 继承自

`Command.option`

***

### opts()

> **opts**\<`T`\>(): `T`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:781

Return an object containing local option values as key-value pairs

#### 类型参数

##### T

`T` *extends* `OptionValues`

#### 返回

`T`

#### 继承自

`Command.opts`

***

### optsWithGlobals()

> **optsWithGlobals**\<`T`\>(): `T`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:786

Return an object containing merged local and global option values as key-value pairs.

#### 类型参数

##### T

`T` *extends* `OptionValues`

#### 返回

`T`

#### 继承自

`Command.optsWithGlobals`

***

### outputHelp()

#### 调用签名

> **outputHelp**(`context?`): `void`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:901

Output help information for this command.

Outputs built-in help, and custom text added using `.addHelpText()`.

##### 参数

###### context?

`HelpContext`

##### 返回

`void`

##### 继承自

`Command.outputHelp`

#### 调用签名

> **outputHelp**(`cb?`): `void`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:903

##### 参数

###### cb?

(`str`) => `string`

##### 返回

`void`

##### 已被弃用

since v7

##### 继承自

`Command.outputHelp`

***

### parse()

> **parse**(`argv?`, `parseOptions?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:740

Parse `argv`, setting options and invoking commands when defined.

Use parseAsync instead of parse if any of your action handlers are async.

Call with no parameters to parse `process.argv`. Detects Electron and special node options like `node --eval`. Easy mode!

Or call with an array of strings to parse, and optionally where the user arguments start by specifying where the arguments are `from`:
- `'node'`: default, `argv[0]` is the application and `argv[1]` is the script being run, with user arguments after that
- `'electron'`: `argv[0]` is the application and `argv[1]` varies depending on whether the electron application is packaged
- `'user'`: just user arguments

#### 参数

##### argv?

readonly `string`[]

##### parseOptions?

`ParseOptions`

#### 返回

`this`

`this` command for chaining

#### 示例

```
program.parse(); // parse process.argv and auto-detect electron and special node flags
program.parse(process.argv); // assume argv[0] is app and argv[1] is script
program.parse(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
```

#### 继承自

`Command.parse`

***

### parseAsync()

> **parseAsync**(`argv?`, `parseOptions?`): `Promise`\<`VipCommander`\>

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:761

Parse `argv`, setting options and invoking commands when defined.

Call with no parameters to parse `process.argv`. Detects Electron and special node options like `node --eval`. Easy mode!

Or call with an array of strings to parse, and optionally where the user arguments start by specifying where the arguments are `from`:
- `'node'`: default, `argv[0]` is the application and `argv[1]` is the script being run, with user arguments after that
- `'electron'`: `argv[0]` is the application and `argv[1]` varies depending on whether the electron application is packaged
- `'user'`: just user arguments

#### 参数

##### argv?

readonly `string`[]

##### parseOptions?

`ParseOptions`

#### 返回

`Promise`\<`VipCommander`\>

Promise

#### 示例

```
await program.parseAsync(); // parse process.argv and auto-detect electron and special node flags
await program.parseAsync(process.argv); // assume argv[0] is app and argv[1] is script
await program.parseAsync(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
```

#### 继承自

`Command.parseAsync`

***

### parseOptions()

> **parseOptions**(`argv`): `ParseOptionsResult`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:776

Parse options from `argv` removing known options,
and return argv split into operands and unknown arguments.

    argv => operands, unknown
    --known kkk op => [op], []
    op --known kkk => [op], []
    sub --unknown uuu op => [sub], [--unknown uuu op]
    sub -- --unknown uuu op => [sub --unknown uuu op], []

#### 参数

##### argv

`string`[]

#### 返回

`ParseOptionsResult`

#### 继承自

`Command.parseOptions`

***

### passThroughOptions()

> **passThroughOptions**(`passThrough?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:717

Pass through options that come after command-arguments rather than treat them as command-options,
so actual command-options come before command-arguments. Turning this on for a subcommand requires
positional options to have been enabled on the program (parent commands).

The default behaviour is non-positional and options may appear before or after command-arguments.

#### 参数

##### passThrough?

`boolean`

#### 返回

`this`

`this` command for chaining

#### 继承自

`Command.passThroughOptions`

***

### requiredOption()

#### 调用签名

> **requiredOption**(`flags`, `description?`, `defaultValue?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:594

Define a required option, which must have a value after parsing. This usually means
the option must be specified on the command line. (Otherwise the same as .option().)

The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.

##### 参数

###### flags

`string`

###### description?

`string`

###### defaultValue?

`string` | `boolean` | `string`[]

##### 返回

`this`

##### 继承自

`Command.requiredOption`

#### 调用签名

> **requiredOption**\<`T`\>(`flags`, `description`, `parseArg`, `defaultValue?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:599

Define a required option, which must have a value after parsing. This usually means
the option must be specified on the command line. (Otherwise the same as .option().)

The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.

##### 类型参数

###### T

`T`

##### 参数

###### flags

`string`

###### description

`string`

###### parseArg

(`value`, `previous`) => `T`

###### defaultValue?

`T`

##### 返回

`this`

##### 继承自

`Command.requiredOption`

#### 调用签名

> **requiredOption**(`flags`, `description`, `regexp`, `defaultValue?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:606

##### 参数

###### flags

`string`

###### description

`string`

###### regexp

`RegExp`

###### defaultValue?

`string` | `boolean` | `string`[]

##### 返回

`this`

##### 已被弃用

since v7, instead use choices or a custom function

##### 继承自

`Command.requiredOption`

***

### setOptionValue()

> **setOptionValue**(`key`, `value`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:649

Store option value.

#### 参数

##### key

`string`

##### value

`unknown`

#### 返回

`this`

#### 继承自

`Command.setOptionValue`

***

### setOptionValueWithSource()

> **setOptionValueWithSource**(`key`, `value`, `source`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:654

Store option value and where the value came from.

#### 参数

##### key

`string`

##### value

`unknown`

##### source

`OptionValueSource`

#### 返回

`this`

#### 继承自

`Command.setOptionValueWithSource`

***

### showHelpAfterError()

> **showHelpAfterError**(`displayHelp?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:525

Display the help or a custom message after an error occurs.

#### 参数

##### displayHelp?

`string` | `boolean`

#### 返回

`this`

#### 继承自

`Command.showHelpAfterError`

***

### showSuggestionAfterError()

> **showSuggestionAfterError**(`displaySuggestion?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:530

Display suggestion of similar commands for unknown commands, or options for unknown options.

#### 参数

##### displaySuggestion?

`boolean`

#### 返回

`this`

#### 继承自

`Command.showSuggestionAfterError`

***

### storeOptionsAsProperties()

#### 调用签名

> **storeOptionsAsProperties**\<`T`\>(): `VipCommander` & `T`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:635

Whether to store option values as properties on command object,
or store separately (specify false). In both cases the option values can be accessed using .opts().

##### 类型参数

###### T

`T` *extends* `OptionValues`

##### 返回

`VipCommander` & `T`

`this` command for chaining

##### 继承自

`Command.storeOptionsAsProperties`

#### 调用签名

> **storeOptionsAsProperties**\<`T`\>(`storeAsProperties`): `VipCommander` & `T`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:636

Whether to store option values as properties on command object,
or store separately (specify false). In both cases the option values can be accessed using .opts().

##### 类型参数

###### T

`T` *extends* `OptionValues`

##### 参数

###### storeAsProperties

`true`

##### 返回

`VipCommander` & `T`

`this` command for chaining

##### 继承自

`Command.storeOptionsAsProperties`

#### 调用签名

> **storeOptionsAsProperties**(`storeAsProperties?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:639

Whether to store option values as properties on command object,
or store separately (specify false). In both cases the option values can be accessed using .opts().

##### 参数

###### storeAsProperties?

`boolean`

##### 返回

`this`

`this` command for chaining

##### 继承自

`Command.storeOptionsAsProperties`

***

### summary()

#### 调用签名

> **summary**(`str`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:808

Set the summary. Used when listed as subcommand of parent.

##### 参数

###### str

`string`

##### 返回

`this`

`this` command for chaining

##### 继承自

`Command.summary`

#### 调用签名

> **summary**(): `string`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:812

Get the summary.

##### 返回

`string`

##### 继承自

`Command.summary`

***

### usage()

#### 调用签名

> **usage**(`str`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:845

Set the command usage.

##### 参数

###### str

`string`

##### 返回

`this`

`this` command for chaining

##### 继承自

`Command.usage`

#### 调用签名

> **usage**(): `string`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:849

Get the command usage.

##### 返回

`string`

##### 继承自

`Command.usage`

***

### version()

#### 调用签名

> **version**(`str`, `flags?`, `description?`): `this`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:315

Set the program version to `str`.

This method auto-registers the "-V, --version" flag
which will print the version number when passed.

You can optionally supply the  flags and description to override the defaults.

##### 参数

###### str

`string`

###### flags?

`string`

###### description?

`string`

##### 返回

`this`

##### 继承自

`Command.version`

#### 调用签名

> **version**(): `undefined` \| `string`

定义于: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:319

Get the program version.

##### 返回

`undefined` \| `string`

##### 继承自

`Command.version`
