[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipPackageJSON

# Variable: VipPackageJSON

> `const` **VipPackageJSON**: `object`

Defined in: [packages/utils/src/core/package-json.ts:214](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/core/package-json.ts#L214)

package.json处理

## Type Declaration

### getCurrentVersion()

> **getCurrentVersion**: (`cwd?`) => `null` \| `string`

读取package.json文件，获取version字段

#### Parameters

##### cwd?

`string`

#### Returns

`null` \| `string`

### getPackageJSON()

> **getPackageJSON**: \<`T`\>(`cwd?`) => `T` & [`PackageJSONMainFest`](../interfaces/PackageJSONMainFest.md)

获取package.json信息

#### Type Parameters

##### T

`T`

#### Parameters

##### cwd?

`string`

#### Returns

`T` & [`PackageJSONMainFest`](../interfaces/PackageJSONMainFest.md)

### getPackagePath()

> **getPackagePath**: (`cwd?`) => `string`

获取package.json的路径

#### Parameters

##### cwd?

`string`

#### Returns

`string`

### getPkgGreenLabel()

> **getPkgGreenLabel**: (`pkgName`) => `string`

#### Parameters

##### pkgName

`string`

#### Returns

`string`

### getPkgRedLabel()

> **getPkgRedLabel**: (`pkgName`) => `string`

#### Parameters

##### pkgName

`string`

#### Returns

`string`

### getReleaseVersion()

> **getReleaseVersion**: (`currentVersion`, `releaseType`) => `null` \| `string`

基于当前版本，生成新的version

#### Parameters

##### currentVersion

`string`

##### releaseType

`ReleaseType`

#### Returns

`null` \| `string`

### getVersionGitTag()

> **getVersionGitTag**: () => `null` \| `string`

获取仓库Version对应的tag
- 优先从package.json中获取version
- version对应的tag不存在时，再从git记录中获取最新tag

#### Returns

`null` \| `string`

### hasScript()

> **hasScript**: (`packageJSON`, `script`) => `boolean`

判断package.json文件中是否存在指定的脚本

#### Parameters

##### packageJSON

[`PackageJSONMainFest`](../interfaces/PackageJSONMainFest.md)

##### script

`string`

#### Returns

`boolean`

### isExistPackageJSON()

> **isExistPackageJSON**: (`cwd?`) => `boolean`

判断package.json是否存在，存在则返回绝对路径

#### Parameters

##### cwd?

`string`

#### Returns

`boolean`

### isExistPackageLock()

> **isExistPackageLock**: (`cwd?`) => `boolean`

判断package-lock.json是否存在

#### Parameters

##### cwd?

`string`

#### Returns

`boolean`

### isExistPnpmLock()

> **isExistPnpmLock**: (`cwd?`) => `boolean`

判断是否存在pnpm-lock.yaml文件

#### Parameters

##### cwd?

`string`

#### Returns

`boolean`

### isPackageJSON()

> **isPackageJSON**: (`packageJSON`) => `boolean`

判断是否为package.json读取的JSON对象
- name|version | description  必须存在一个

#### Parameters

##### packageJSON

[`PackageJSONMainFest`](../interfaces/PackageJSONMainFest.md)

#### Returns

`boolean`

### promptReleaseVersion()

> **promptReleaseVersion**: (`currentVersion`, `preid?`) => `Promise`\<`string`\>

提供选择框，支持用户自动选择version

#### Parameters

##### currentVersion

`string`

##### preid?

`string`

#### Returns

`Promise`\<`string`\>

### replaceOrAddToJSON()

> **replaceOrAddToJSON**: (`json`, `cwd?`) => `void`

增加或替换JSON数据
- add      增加key、value
- replace  替换某个key的值

#### Parameters

##### json

`Record`\<`string`, `unknown`\>

##### cwd?

`string`

#### Returns

`void`

### runScript()

> **runScript**: (`scriptName`, `cwd?`) => `Promise`\<`void`\>

执行脚本

#### Parameters

##### scriptName

`string`

##### cwd?

`string`

#### Returns

`Promise`\<`void`\>

### updateVersion()

> **updateVersion**: (`newVersion`, `cwd?`) => `void`

更新package.json中的version字段

#### Parameters

##### newVersion

`string`

##### cwd?

`string`

#### Returns

`void`
