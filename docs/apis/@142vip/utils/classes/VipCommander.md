[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipCommander

# Class: VipCommander

Defined in: [packages/utils/src/pkgs/commander.ts:38](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/pkgs/commander.ts#L38)

终端交互
参考：https://www.npmjs.com/package/commander

## Extends

- `Command`

## Constructors

### Constructor

> **new VipCommander**(`name`, `version`, `description?`): `VipCommander`

Defined in: [packages/utils/src/pkgs/commander.ts:39](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/pkgs/commander.ts#L39)

#### Parameters

##### name

`string`

##### version

`string`

##### description?

`string`

#### Returns

`VipCommander`

#### Overrides

`Command.constructor`

## Properties

### args

> **args**: `string`[]

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:298

#### Inherited from

`Command.args`

***

### commands

> `readonly` **commands**: readonly `Command`[]

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:300

#### Inherited from

`Command.commands`

***

### options

> `readonly` **options**: readonly `Option`[]

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:301

#### Inherited from

`Command.options`

***

### parent

> **parent**: `null` \| `Command`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:303

#### Inherited from

`Command.parent`

***

### processedArgs

> **processedArgs**: `any`[]

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:299

#### Inherited from

`Command.processedArgs`

***

### registeredArguments

> `readonly` **registeredArguments**: readonly `Argument`[]

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:302

#### Inherited from

`Command.registeredArguments`

## Methods

### action()

> **action**(`fn`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:547

Register callback `fn` for the command.

#### Parameters

##### fn

(...`args`) => `void` \| `Promise`\<`void`\>

#### Returns

`this`

`this` command for chaining

#### Example

```
program
  .command('serve')
  .description('start service')
  .action(function() {
    // do work here
  });
```

#### Inherited from

`Command.action`

***

### addArgument()

> **addArgument**(`arg`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:421

Define argument syntax for command, adding a prepared argument.

#### Parameters

##### arg

`Argument`

#### Returns

`this`

`this` command for chaining

#### Inherited from

`Command.addArgument`

***

### addCommand()

> **addCommand**(`cmd`, `opts?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:384

Add a prepared subcommand.

See .command() for creating an attached subcommand which inherits settings from its parent.

#### Parameters

##### cmd

`Command`

##### opts?

`CommandOptions`

#### Returns

`this`

`this` command for chaining

#### Inherited from

`Command.addCommand`

***

### addHelpCommand()

#### Call Signature

> **addHelpCommand**(`cmd`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:454

Add prepared custom help command.

##### Parameters

###### cmd

`Command`

##### Returns

`this`

##### Inherited from

`Command.addHelpCommand`

#### Call Signature

> **addHelpCommand**(`nameAndArgs`, `description?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:456

##### Parameters

###### nameAndArgs

`string`

###### description?

`string`

##### Returns

`this`

##### Deprecated

since v12, instead use helpCommand

##### Inherited from

`Command.addHelpCommand`

#### Call Signature

> **addHelpCommand**(`enable?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:458

##### Parameters

###### enable?

`boolean`

##### Returns

`this`

##### Deprecated

since v12, instead use helpCommand

##### Inherited from

`Command.addHelpCommand`

***

### addHelpOption()

> **addHelpOption**(`option`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:921

Supply your own option to use for the built-in help option.
This is an alternative to using helpOption() to customise the flags and description etc.

#### Parameters

##### option

`Option`

#### Returns

`this`

#### Inherited from

`Command.addHelpOption`

***

### addHelpText()

#### Call Signature

> **addHelpText**(`position`, `text`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:938

Add additional text to be displayed with the built-in help.

Position is 'before' or 'after' to affect just this command,
and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.

##### Parameters

###### position

`AddHelpTextPosition`

###### text

`string`

##### Returns

`this`

##### Inherited from

`Command.addHelpText`

#### Call Signature

> **addHelpText**(`position`, `text`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:939

Add additional text to be displayed with the built-in help.

Position is 'before' or 'after' to affect just this command,
and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.

##### Parameters

###### position

`AddHelpTextPosition`

###### text

(`context`) => `string`

##### Returns

`this`

##### Inherited from

`Command.addHelpText`

***

### addOption()

> **addOption**(`option`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:627

Add a prepared Option.

See .option() and .requiredOption() for creating and attaching an option in a single call.

#### Parameters

##### option

`Option`

#### Returns

`this`

#### Inherited from

`Command.addOption`

***

### alias()

#### Call Signature

> **alias**(`alias`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:821

Set an alias for the command.

You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.

##### Parameters

###### alias

`string`

##### Returns

`this`

`this` command for chaining

##### Inherited from

`Command.alias`

#### Call Signature

> **alias**(): `string`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:825

Get alias for the command.

##### Returns

`string`

##### Inherited from

`Command.alias`

***

### aliases()

#### Call Signature

> **aliases**(`aliases`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:834

Set aliases for the command.

Only the first alias is shown in the auto-generated help.

##### Parameters

###### aliases

readonly `string`[]

##### Returns

`this`

`this` command for chaining

##### Inherited from

`Command.aliases`

#### Call Signature

> **aliases**(): `string`[]

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:838

Get aliases for the command.

##### Returns

`string`[]

##### Inherited from

`Command.aliases`

***

### allowExcessArguments()

> **allowExcessArguments**(`allowExcess?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:696

Allow excess command-arguments on the command line. Pass false to make excess arguments an error.

#### Parameters

##### allowExcess?

`boolean`

#### Returns

`this`

`this` command for chaining

#### Inherited from

`Command.allowExcessArguments`

***

### allowUnknownOption()

> **allowUnknownOption**(`allowUnknown?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:689

Allow unknown options on the command line.

#### Parameters

##### allowUnknown?

`boolean`

#### Returns

`this`

`this` command for chaining

#### Inherited from

`Command.allowUnknownOption`

***

### argument()

#### Call Signature

> **argument**\<`T`\>(`flags`, `description`, `fn`, `defaultValue?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:408

Define argument syntax for command.

The default is that the argument is required, and you can explicitly
indicate this with <> around the name. Put [] around the name for an optional argument.

##### Type Parameters

###### T

`T`

##### Parameters

###### flags

`string`

###### description

`string`

###### fn

(`value`, `previous`) => `T`

###### defaultValue?

`T`

##### Returns

`this`

`this` command for chaining

##### Example

```
program.argument('<input-file>');
program.argument('[output-file]');
```

##### Inherited from

`Command.argument`

#### Call Signature

> **argument**(`name`, `description?`, `defaultValue?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:414

Define argument syntax for command.

The default is that the argument is required, and you can explicitly
indicate this with <> around the name. Put [] around the name for an optional argument.

##### Parameters

###### name

`string`

###### description?

`string`

###### defaultValue?

`unknown`

##### Returns

`this`

`this` command for chaining

##### Example

```
program.argument('<input-file>');
program.argument('[output-file]');
```

##### Inherited from

`Command.argument`

***

### arguments()

> **arguments**(`names`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:435

Define argument syntax for command, adding multiple at once (without descriptions).

See also .argument().

#### Parameters

##### names

`string`

#### Returns

`this`

`this` command for chaining

#### Example

```
program.arguments('<cmd> [env]');
```

#### Inherited from

`Command.arguments`

***

### combineFlagAndOptionalValue()

> **combineFlagAndOptionalValue**(`combine?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:682

Alter parsing of short flags with optional values.

#### Parameters

##### combine?

`boolean`

#### Returns

`this`

`this` command for chaining

#### Example

```
// for `.option('-f,--flag [value]'):
.combineFlagAndOptionalValue(true)  // `-f80` is treated like `--flag=80`, this is the default behaviour
.combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`
```

#### Inherited from

`Command.combineFlagAndOptionalValue`

***

### command()

#### Call Signature

> **command**(`nameAndArgs`, `opts?`): `Command`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:341

Define a command, implemented using an action handler.

##### Parameters

###### nameAndArgs

`string`

command name and arguments, args are  `<required>` or `[optional]` and last may also be `variadic...`

###### opts?

`CommandOptions`

configuration options

##### Returns

`Command`

new command

##### Remarks

The command description is supplied using `.description`, not as a parameter to `.command`.

##### Example

```ts
program
  .command('clone <source> [destination]')
  .description('clone a repository into a newly created directory')
  .action((source, destination) => {
    console.log('clone command called')
  })
```

##### Inherited from

`Command.command`

#### Call Signature

> **command**(`nameAndArgs`, `description`, `opts?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:363

Define a command, implemented in a separate executable file.

##### Parameters

###### nameAndArgs

`string`

command name and arguments, args are  `<required>` or `[optional]` and last may also be `variadic...`

###### description

`string`

description of executable command

###### opts?

`ExecutableCommandOptions`

configuration options

##### Returns

`this`

`this` command for chaining

##### Remarks

The command description is supplied as the second parameter to `.command`.

##### Example

```ts
program
  .command('start <service>', 'start named service')
  .command('stop [service]', 'stop named service, or all if no name supplied')
```

##### Inherited from

`Command.command`

***

### configureHelp()

#### Call Signature

> **configureHelp**(`configuration`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:491

You can customise the help by overriding Help properties using configureHelp(),
or with a subclass of Help by overriding createHelp().

##### Parameters

###### configuration

`HelpConfiguration`

##### Returns

`this`

##### Inherited from

`Command.configureHelp`

#### Call Signature

> **configureHelp**(): `HelpConfiguration`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:493

Get configuration

##### Returns

`HelpConfiguration`

##### Inherited from

`Command.configureHelp`

***

### configureOutput()

#### Call Signature

> **configureOutput**(`configuration`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:511

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

##### Parameters

###### configuration

`OutputConfiguration`

##### Returns

`this`

##### Inherited from

`Command.configureOutput`

#### Call Signature

> **configureOutput**(): `OutputConfiguration`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:513

Get configuration

##### Returns

`OutputConfiguration`

##### Inherited from

`Command.configureOutput`

***

### copyInheritedSettings()

> **copyInheritedSettings**(`sourceCommand`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:520

Copy settings that are useful to have in common across root command and subcommands.

(Used internally when adding a command using `.command()` so subcommands inherit parent settings.)

#### Parameters

##### sourceCommand

`Command`

#### Returns

`this`

#### Inherited from

`Command.copyInheritedSettings`

***

### createArgument()

> **createArgument**(`name`, `description?`): `Argument`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:392

Factory routine to create a new unattached argument.

See .argument() for creating an attached argument, which uses this routine to
create the argument. You can override createArgument to return a custom argument.

#### Parameters

##### name

`string`

##### description?

`string`

#### Returns

`Argument`

#### Inherited from

`Command.createArgument`

***

### createCommand()

> **createCommand**(`name?`): `Command`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:375

Factory routine to create a new unattached command.

See .command() for creating an attached subcommand, which uses this routine to
create the command. You can override createCommand to customise subcommands.

#### Parameters

##### name?

`string`

#### Returns

`Command`

#### Inherited from

`Command.createCommand`

***

### createHelp()

> **createHelp**(): `Help`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:485

You can customise the help with a subclass of Help by overriding createHelp,
or by overriding Help properties using configureHelp().

#### Returns

`Help`

#### Inherited from

`Command.createHelp`

***

### createOption()

> **createOption**(`flags`, `description?`): `Option`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:620

Factory routine to create a new unattached option.

See .option() for creating an attached option, which uses this routine to
create the option. You can override createOption to return a custom option.

#### Parameters

##### flags

`string`

##### description?

`string`

#### Returns

`Option`

#### Inherited from

`Command.createOption`

***

### description()

#### Call Signature

> **description**(`str`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:794

Set the description.

##### Parameters

###### str

`string`

##### Returns

`this`

`this` command for chaining

##### Inherited from

`Command.description`

#### Call Signature

> **description**(`str`, `argsDescription`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:796

##### Parameters

###### str

`string`

###### argsDescription

`Record`\<`string`, `string`\>

##### Returns

`this`

##### Deprecated

since v8, instead use .argument to add command argument with description

##### Inherited from

`Command.description`

#### Call Signature

> **description**(): `string`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:800

Get the description.

##### Returns

`string`

##### Inherited from

`Command.description`

***

### enablePositionalOptions()

> **enablePositionalOptions**(`positional?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:706

Enable positional options. Positional means global options are specified before subcommands which lets
subcommands reuse the same option names, and also enables subcommands to turn on passThroughOptions.

The default behaviour is non-positional and global options may appear anywhere on the command line.

#### Parameters

##### positional?

`boolean`

#### Returns

`this`

`this` command for chaining

#### Inherited from

`Command.enablePositionalOptions`

***

### error()

> **error**(`message`, `errorOptions?`): `never`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:479

Display error message and exit (or call exitOverride).

#### Parameters

##### message

`string`

##### errorOptions?

`ErrorOptions`

#### Returns

`never`

#### Inherited from

`Command.error`

***

### executableDir()

#### Call Signature

> **executableDir**(`path`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:889

Set the directory for searching for executable subcommands of this command.

##### Parameters

###### path

`string`

##### Returns

`this`

`this` command for chaining

##### Example

```ts
program.executableDir(__dirname)
// or
program.executableDir('subcommands')
```

##### Inherited from

`Command.executableDir`

#### Call Signature

> **executableDir**(): `null` \| `string`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:893

Get the executable search directory.

##### Returns

`null` \| `string`

##### Inherited from

`Command.executableDir`

***

### exitOverride()

> **exitOverride**(`callback?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:474

Register callback to use as replacement for calling process.exit.

#### Parameters

##### callback?

(`err`) => `void`

#### Returns

`this`

#### Inherited from

`Command.exitOverride`

***

### getOptionValue()

> **getOptionValue**(`key`): `any`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:644

Retrieve option value.

#### Parameters

##### key

`string`

#### Returns

`any`

#### Inherited from

`Command.getOptionValue`

***

### getOptionValueSource()

> **getOptionValueSource**(`key`): `OptionValueSource`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:663

Get source of option value.

#### Parameters

##### key

`string`

#### Returns

`OptionValueSource`

#### Inherited from

`Command.getOptionValueSource`

***

### getOptionValueSourceWithGlobals()

> **getOptionValueSourceWithGlobals**(`key`): `OptionValueSource`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:668

Get source of option value. See also .optsWithGlobals().

#### Parameters

##### key

`string`

#### Returns

`OptionValueSource`

#### Inherited from

`Command.getOptionValueSourceWithGlobals`

***

### help()

#### Call Signature

> **help**(`context?`): `never`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:928

Output help information and exit.

Outputs built-in help, and custom text added using `.addHelpText()`.

##### Parameters

###### context?

`HelpContext`

##### Returns

`never`

##### Inherited from

`Command.help`

#### Call Signature

> **help**(`cb?`): `never`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:930

##### Parameters

###### cb?

(`str`) => `string`

##### Returns

`never`

##### Deprecated

since v7

##### Inherited from

`Command.help`

***

### helpCommand()

#### Call Signature

> **helpCommand**(`nameAndArgs`, `description?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:448

Customise or override default help command. By default a help command is automatically added if your command has subcommands.

##### Parameters

###### nameAndArgs

`string`

###### description?

`string`

##### Returns

`this`

##### Example

```ts
program.helpCommand('help [cmd]')
program.helpCommand('help [cmd]', 'show help')
program.helpCommand(false) // suppress default help command
program.helpCommand(true) // add help command even if no subcommands
```

##### Inherited from

`Command.helpCommand`

#### Call Signature

> **helpCommand**(`enable`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:449

Customise or override default help command. By default a help command is automatically added if your command has subcommands.

##### Parameters

###### enable

`boolean`

##### Returns

`this`

##### Example

```ts
program.helpCommand('help [cmd]')
program.helpCommand('help [cmd]', 'show help')
program.helpCommand(false) // suppress default help command
program.helpCommand(true) // add help command even if no subcommands
```

##### Inherited from

`Command.helpCommand`

***

### helpInformation()

> **helpInformation**(`context?`): `string`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:908

Return command help documentation.

#### Parameters

##### context?

`HelpContext`

#### Returns

`string`

#### Inherited from

`Command.helpInformation`

***

### helpOption()

> **helpOption**(`flags?`, `description?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:915

You can pass in flags and a description to override the help
flags and help description for your command. Pass in false
to disable the built-in help option.

#### Parameters

##### flags?

`string` | `boolean`

##### description?

`string`

#### Returns

`this`

#### Inherited from

`Command.helpOption`

***

### hook()

> **hook**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:463

Add hook for life cycle event.

#### Parameters

##### event

`HookEvent`

##### listener

(`thisCommand`, `actionCommand`) => `void` \| `Promise`\<`void`\>

#### Returns

`this`

#### Inherited from

`Command.hook`

***

### init()

> **init**(`options`, `args`): `Command`

Defined in: [packages/utils/src/pkgs/commander.ts:53](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/pkgs/commander.ts#L53)

初始化，不包括命令

#### Parameters

##### options

`Pick`\<[`VipCommanderDetailOptions`](../interfaces/VipCommanderDetailOptions.md), `"summary"` \| `"description"`\>

##### args

[`VipCommanderOptions`](../interfaces/VipCommanderOptions.md) = `{}`

#### Returns

`Command`

***

### initCommand()

> **initCommand**(`options`, `args`): `Command`

Defined in: [packages/utils/src/pkgs/commander.ts:63](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/pkgs/commander.ts#L63)

对命令初始化，增加aliases，summary，description等信息
- 增加默认的一些参数

#### Parameters

##### options

[`VipCommanderDetailOptions`](../interfaces/VipCommanderDetailOptions.md)

##### args

[`VipCommanderOptions`](../interfaces/VipCommanderOptions.md) = `{}`

#### Returns

`Command`

***

### name()

#### Call Signature

> **name**(`str`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:856

Set the name of the command.

##### Parameters

###### str

`string`

##### Returns

`this`

`this` command for chaining

##### Inherited from

`Command.name`

#### Call Signature

> **name**(): `string`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:860

Get the name of the command.

##### Returns

`string`

##### Inherited from

`Command.name`

***

### nameFromFilename()

> **nameFromFilename**(`filename`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:875

Set the name of the command from script filename, such as process.argv[1],
or require.main.filename, or __filename.

(Used internally and public although not documented in README.)

#### Parameters

##### filename

`string`

#### Returns

`this`

`this` command for chaining

#### Example

```ts
program.nameFromFilename(require.main.filename)
```

#### Inherited from

`Command.nameFromFilename`

***

### on()

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:947

Add a listener (callback) for when events occur. (Implemented using EventEmitter.)

#### Parameters

##### event

`string` | `symbol`

##### listener

(...`args`) => `void`

#### Returns

`this`

#### Inherited from

`Command.on`

***

### option()

#### Call Signature

> **option**(`flags`, `description?`, `defaultValue?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:569

Define option with `flags`, `description`, and optional argument parsing function or `defaultValue` or both.

The `flags` string contains the short and/or long flags, separated by comma, a pipe or space. A required
option-argument is indicated by `<>` and an optional option-argument by `[]`.

See the README for more details, and see also addOption() and requiredOption().

##### Parameters

###### flags

`string`

###### description?

`string`

###### defaultValue?

`string` | `boolean` | `string`[]

##### Returns

`this`

`this` command for chaining

##### Example

```js
program
  .option('-p, --pepper', 'add pepper')
  .option('-p, --pizza-type <TYPE>', 'type of pizza') // required option-argument
  .option('-c, --cheese [CHEESE]', 'add extra cheese', 'mozzarella') // optional option-argument with default
  .option('-t, --tip <VALUE>', 'add tip to purchase cost', Number.parseFloat) // custom parse function
```

##### Inherited from

`Command.option`

#### Call Signature

> **option**\<`T`\>(`flags`, `description`, `parseArg`, `defaultValue?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:574

Define option with `flags`, `description`, and optional argument parsing function or `defaultValue` or both.

The `flags` string contains the short and/or long flags, separated by comma, a pipe or space. A required
option-argument is indicated by `<>` and an optional option-argument by `[]`.

See the README for more details, and see also addOption() and requiredOption().

##### Type Parameters

###### T

`T`

##### Parameters

###### flags

`string`

###### description

`string`

###### parseArg

(`value`, `previous`) => `T`

###### defaultValue?

`T`

##### Returns

`this`

`this` command for chaining

##### Example

```js
program
  .option('-p, --pepper', 'add pepper')
  .option('-p, --pizza-type <TYPE>', 'type of pizza') // required option-argument
  .option('-c, --cheese [CHEESE]', 'add extra cheese', 'mozzarella') // optional option-argument with default
  .option('-t, --tip <VALUE>', 'add tip to purchase cost', Number.parseFloat) // custom parse function
```

##### Inherited from

`Command.option`

#### Call Signature

> **option**(`flags`, `description`, `regexp`, `defaultValue?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:581

##### Parameters

###### flags

`string`

###### description

`string`

###### regexp

`RegExp`

###### defaultValue?

`string` | `boolean` | `string`[]

##### Returns

`this`

##### Deprecated

since v7, instead use choices or a custom function

##### Inherited from

`Command.option`

***

### opts()

> **opts**\<`T`\>(): `T`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:781

Return an object containing local option values as key-value pairs

#### Type Parameters

##### T

`T` *extends* `OptionValues`

#### Returns

`T`

#### Inherited from

`Command.opts`

***

### optsWithGlobals()

> **optsWithGlobals**\<`T`\>(): `T`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:786

Return an object containing merged local and global option values as key-value pairs.

#### Type Parameters

##### T

`T` *extends* `OptionValues`

#### Returns

`T`

#### Inherited from

`Command.optsWithGlobals`

***

### outputHelp()

#### Call Signature

> **outputHelp**(`context?`): `void`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:901

Output help information for this command.

Outputs built-in help, and custom text added using `.addHelpText()`.

##### Parameters

###### context?

`HelpContext`

##### Returns

`void`

##### Inherited from

`Command.outputHelp`

#### Call Signature

> **outputHelp**(`cb?`): `void`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:903

##### Parameters

###### cb?

(`str`) => `string`

##### Returns

`void`

##### Deprecated

since v7

##### Inherited from

`Command.outputHelp`

***

### parse()

> **parse**(`argv?`, `parseOptions?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:740

Parse `argv`, setting options and invoking commands when defined.

Use parseAsync instead of parse if any of your action handlers are async.

Call with no parameters to parse `process.argv`. Detects Electron and special node options like `node --eval`. Easy mode!

Or call with an array of strings to parse, and optionally where the user arguments start by specifying where the arguments are `from`:
- `'node'`: default, `argv[0]` is the application and `argv[1]` is the script being run, with user arguments after that
- `'electron'`: `argv[0]` is the application and `argv[1]` varies depending on whether the electron application is packaged
- `'user'`: just user arguments

#### Parameters

##### argv?

readonly `string`[]

##### parseOptions?

`ParseOptions`

#### Returns

`this`

`this` command for chaining

#### Example

```
program.parse(); // parse process.argv and auto-detect electron and special node flags
program.parse(process.argv); // assume argv[0] is app and argv[1] is script
program.parse(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
```

#### Inherited from

`Command.parse`

***

### parseAsync()

> **parseAsync**(`argv?`, `parseOptions?`): `Promise`\<`VipCommander`\>

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:761

Parse `argv`, setting options and invoking commands when defined.

Call with no parameters to parse `process.argv`. Detects Electron and special node options like `node --eval`. Easy mode!

Or call with an array of strings to parse, and optionally where the user arguments start by specifying where the arguments are `from`:
- `'node'`: default, `argv[0]` is the application and `argv[1]` is the script being run, with user arguments after that
- `'electron'`: `argv[0]` is the application and `argv[1]` varies depending on whether the electron application is packaged
- `'user'`: just user arguments

#### Parameters

##### argv?

readonly `string`[]

##### parseOptions?

`ParseOptions`

#### Returns

`Promise`\<`VipCommander`\>

Promise

#### Example

```
await program.parseAsync(); // parse process.argv and auto-detect electron and special node flags
await program.parseAsync(process.argv); // assume argv[0] is app and argv[1] is script
await program.parseAsync(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
```

#### Inherited from

`Command.parseAsync`

***

### parseOptions()

> **parseOptions**(`argv`): `ParseOptionsResult`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:776

Parse options from `argv` removing known options,
and return argv split into operands and unknown arguments.

    argv => operands, unknown
    --known kkk op => [op], []
    op --known kkk => [op], []
    sub --unknown uuu op => [sub], [--unknown uuu op]
    sub -- --unknown uuu op => [sub --unknown uuu op], []

#### Parameters

##### argv

`string`[]

#### Returns

`ParseOptionsResult`

#### Inherited from

`Command.parseOptions`

***

### passThroughOptions()

> **passThroughOptions**(`passThrough?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:717

Pass through options that come after command-arguments rather than treat them as command-options,
so actual command-options come before command-arguments. Turning this on for a subcommand requires
positional options to have been enabled on the program (parent commands).

The default behaviour is non-positional and options may appear before or after command-arguments.

#### Parameters

##### passThrough?

`boolean`

#### Returns

`this`

`this` command for chaining

#### Inherited from

`Command.passThroughOptions`

***

### requiredOption()

#### Call Signature

> **requiredOption**(`flags`, `description?`, `defaultValue?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:594

Define a required option, which must have a value after parsing. This usually means
the option must be specified on the command line. (Otherwise the same as .option().)

The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.

##### Parameters

###### flags

`string`

###### description?

`string`

###### defaultValue?

`string` | `boolean` | `string`[]

##### Returns

`this`

##### Inherited from

`Command.requiredOption`

#### Call Signature

> **requiredOption**\<`T`\>(`flags`, `description`, `parseArg`, `defaultValue?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:599

Define a required option, which must have a value after parsing. This usually means
the option must be specified on the command line. (Otherwise the same as .option().)

The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.

##### Type Parameters

###### T

`T`

##### Parameters

###### flags

`string`

###### description

`string`

###### parseArg

(`value`, `previous`) => `T`

###### defaultValue?

`T`

##### Returns

`this`

##### Inherited from

`Command.requiredOption`

#### Call Signature

> **requiredOption**(`flags`, `description`, `regexp`, `defaultValue?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:606

##### Parameters

###### flags

`string`

###### description

`string`

###### regexp

`RegExp`

###### defaultValue?

`string` | `boolean` | `string`[]

##### Returns

`this`

##### Deprecated

since v7, instead use choices or a custom function

##### Inherited from

`Command.requiredOption`

***

### setOptionValue()

> **setOptionValue**(`key`, `value`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:649

Store option value.

#### Parameters

##### key

`string`

##### value

`unknown`

#### Returns

`this`

#### Inherited from

`Command.setOptionValue`

***

### setOptionValueWithSource()

> **setOptionValueWithSource**(`key`, `value`, `source`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:654

Store option value and where the value came from.

#### Parameters

##### key

`string`

##### value

`unknown`

##### source

`OptionValueSource`

#### Returns

`this`

#### Inherited from

`Command.setOptionValueWithSource`

***

### showHelpAfterError()

> **showHelpAfterError**(`displayHelp?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:525

Display the help or a custom message after an error occurs.

#### Parameters

##### displayHelp?

`string` | `boolean`

#### Returns

`this`

#### Inherited from

`Command.showHelpAfterError`

***

### showSuggestionAfterError()

> **showSuggestionAfterError**(`displaySuggestion?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:530

Display suggestion of similar commands for unknown commands, or options for unknown options.

#### Parameters

##### displaySuggestion?

`boolean`

#### Returns

`this`

#### Inherited from

`Command.showSuggestionAfterError`

***

### storeOptionsAsProperties()

#### Call Signature

> **storeOptionsAsProperties**\<`T`\>(): `VipCommander` & `T`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:635

Whether to store option values as properties on command object,
or store separately (specify false). In both cases the option values can be accessed using .opts().

##### Type Parameters

###### T

`T` *extends* `OptionValues`

##### Returns

`VipCommander` & `T`

`this` command for chaining

##### Inherited from

`Command.storeOptionsAsProperties`

#### Call Signature

> **storeOptionsAsProperties**\<`T`\>(`storeAsProperties`): `VipCommander` & `T`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:636

Whether to store option values as properties on command object,
or store separately (specify false). In both cases the option values can be accessed using .opts().

##### Type Parameters

###### T

`T` *extends* `OptionValues`

##### Parameters

###### storeAsProperties

`true`

##### Returns

`VipCommander` & `T`

`this` command for chaining

##### Inherited from

`Command.storeOptionsAsProperties`

#### Call Signature

> **storeOptionsAsProperties**(`storeAsProperties?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:639

Whether to store option values as properties on command object,
or store separately (specify false). In both cases the option values can be accessed using .opts().

##### Parameters

###### storeAsProperties?

`boolean`

##### Returns

`this`

`this` command for chaining

##### Inherited from

`Command.storeOptionsAsProperties`

***

### summary()

#### Call Signature

> **summary**(`str`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:808

Set the summary. Used when listed as subcommand of parent.

##### Parameters

###### str

`string`

##### Returns

`this`

`this` command for chaining

##### Inherited from

`Command.summary`

#### Call Signature

> **summary**(): `string`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:812

Get the summary.

##### Returns

`string`

##### Inherited from

`Command.summary`

***

### usage()

#### Call Signature

> **usage**(`str`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:845

Set the command usage.

##### Parameters

###### str

`string`

##### Returns

`this`

`this` command for chaining

##### Inherited from

`Command.usage`

#### Call Signature

> **usage**(): `string`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:849

Get the command usage.

##### Returns

`string`

##### Inherited from

`Command.usage`

***

### version()

#### Call Signature

> **version**(`str`, `flags?`, `description?`): `this`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:315

Set the program version to `str`.

This method auto-registers the "-V, --version" flag
which will print the version number when passed.

You can optionally supply the  flags and description to override the defaults.

##### Parameters

###### str

`string`

###### flags?

`string`

###### description?

`string`

##### Returns

`this`

##### Inherited from

`Command.version`

#### Call Signature

> **version**(): `undefined` \| `string`

Defined in: node\_modules/.pnpm/commander@12.1.0/node\_modules/commander/typings/index.d.ts:319

Get the program version.

##### Returns

`undefined` \| `string`

##### Inherited from

`Command.version`
