[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipNpm

# 变量: VipNpm

> `const` **VipNpm**: `object`

定义于: [packages/utils/src/core/npm.ts:162](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/utils/src/core/npm.ts#L162)

## 类型声明

### formatVersionStr()

> **formatVersionStr**: (`template`, `newVersion`) => `string`

接受版本字符串模板（例如“release v”或“This is the %s release”）。
- 如果模板包含任何“%s”占位符，则它们将替换为版本号;
- 否则，版本号将追加到字符串

#### 参数

##### template

`string`

##### newVersion

`string`

#### 返回

`string`

### getNodeVersion()

> **getNodeVersion**: () => `Promise`\<`null` \| `string`\>

获取node版本

#### 返回

`Promise`\<`null` \| `string`\>

### getNpmVersion()

> **getNpmVersion**: () => `Promise`\<`null` \| `string`\>

获取npm版本

#### 返回

`Promise`\<`null` \| `string`\>

### getPackageJSONByPnpm()

> **getPackageJSONByPnpm**: (`pnpmLsCommand`) => [`PackageJSONWithPath`](../interfaces/PackageJSONWithPath.md)[]

获取pnpm ls命令执行后的结果，并返回一个PackageJSON
参考：
- pnpm 命令： https://pnpm.io/cli/list
- filter参数： https://pnpm.io/filtering

#### 参数

##### pnpmLsCommand

`string`

#### 返回

[`PackageJSONWithPath`](../interfaces/PackageJSONWithPath.md)[]

### getPnpmVersion()

> **getPnpmVersion**: () => `Promise`\<`null` \| `string`\>

#### 返回

`Promise`\<`null` \| `string`\>

### getTurboPackApps()

> **getTurboPackApps**: () => `Promise`\<`string`[]\>

获取TurboPack匹配到的所有apps

#### 返回

`Promise`\<`string`[]\>

### getTurboPackVersion()

> **getTurboPackVersion**: () => `Promise`\<`null` \| `string`\>

#### 返回

`Promise`\<`null` \| `string`\>

### installByNpm()

> **installByNpm**: (`args`) => `Promise`\<`void`\>

基于npm安装依赖

#### 参数

##### args

###### cwd?

`string`

###### force?

`boolean`

###### registry?

`string`

#### 返回

`Promise`\<`void`\>

### installByPnpm()

> **installByPnpm**: (`args`) => `Promise`\<`void`\>

基于pnpm安装依赖

#### 参数

##### args

###### cwd?

`string`

###### force?

`boolean`

###### registry?

`string`

#### 返回

`Promise`\<`void`\>

### isExistNodeJs()

> **isExistNodeJs**: () => `Promise`\<`boolean`\>

#### 返回

`Promise`\<`boolean`\>

### isExistNpm()

> **isExistNpm**: () => `Promise`\<`boolean`\>

#### 返回

`Promise`\<`boolean`\>

### isExistPnpm()

> **isExistPnpm**: () => `Promise`\<`boolean`\>

#### 返回

`Promise`\<`boolean`\>

### isExistTurboPack()

> **isExistTurboPack**: () => `Promise`\<`boolean`\>

#### 返回

`Promise`\<`boolean`\>

### userLogin()

> **userLogin**: (`args`) => `Promise`\<`void`\>

#### 参数

##### args

###### registry

`string`

#### 返回

`Promise`\<`void`\>
