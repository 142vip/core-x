[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipNpm

# Variable: VipNpm

> `const` **VipNpm**: `object`

Defined in: [packages/utils/src/core/npm.ts:162](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/core/npm.ts#L162)

## Type Declaration

### formatVersionStr()

> **formatVersionStr**: (`template`, `newVersion`) => `string`

接受版本字符串模板（例如“release v”或“This is the %s release”）。
- 如果模板包含任何“%s”占位符，则它们将替换为版本号;
- 否则，版本号将追加到字符串

#### Parameters

##### template

`string`

##### newVersion

`string`

#### Returns

`string`

### getNodeVersion()

> **getNodeVersion**: () => `Promise`\<`null` \| `string`\>

获取node版本

#### Returns

`Promise`\<`null` \| `string`\>

### getNpmVersion()

> **getNpmVersion**: () => `Promise`\<`null` \| `string`\>

获取npm版本

#### Returns

`Promise`\<`null` \| `string`\>

### getPackageJSONByPnpm()

> **getPackageJSONByPnpm**: (`pnpmLsCommand`) => [`PackageJSONWithPath`](../interfaces/PackageJSONWithPath.md)[]

获取pnpm ls命令执行后的结果，并返回一个PackageJSON
参考：
- pnpm 命令： https://pnpm.io/cli/list
- filter参数： https://pnpm.io/filtering

#### Parameters

##### pnpmLsCommand

`string`

#### Returns

[`PackageJSONWithPath`](../interfaces/PackageJSONWithPath.md)[]

### getPnpmVersion()

> **getPnpmVersion**: () => `Promise`\<`null` \| `string`\>

#### Returns

`Promise`\<`null` \| `string`\>

### getTurboPackApps()

> **getTurboPackApps**: () => `Promise`\<`string`[]\>

获取TurboPack匹配到的所有apps

#### Returns

`Promise`\<`string`[]\>

### getTurboPackVersion()

> **getTurboPackVersion**: () => `Promise`\<`null` \| `string`\>

#### Returns

`Promise`\<`null` \| `string`\>

### installByNpm()

> **installByNpm**: (`args`) => `Promise`\<`void`\>

基于npm安装依赖

#### Parameters

##### args

###### cwd?

`string`

###### force?

`boolean`

###### registry?

`string`

#### Returns

`Promise`\<`void`\>

### installByPnpm()

> **installByPnpm**: (`args`) => `Promise`\<`void`\>

基于pnpm安装依赖

#### Parameters

##### args

###### cwd?

`string`

###### force?

`boolean`

###### registry?

`string`

#### Returns

`Promise`\<`void`\>

### isExistNodeJs()

> **isExistNodeJs**: () => `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

### isExistNpm()

> **isExistNpm**: () => `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

### isExistPnpm()

> **isExistPnpm**: () => `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

### isExistTurboPack()

> **isExistTurboPack**: () => `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

### userLogin()

> **userLogin**: (`args`) => `Promise`\<`void`\>

#### Parameters

##### args

###### registry

`string`

#### Returns

`Promise`\<`void`\>
