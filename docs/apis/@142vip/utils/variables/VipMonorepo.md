[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipMonorepo

# Variable: VipMonorepo

> `const` **VipMonorepo**: `object`

Defined in: [packages/utils/src/core/monorepo.ts:79](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/core/monorepo.ts#L79)

## Type Declaration

### getPackageJSONPathList()

> **getPackageJSONPathList**: () => `string`[]

获取monorepo下所有包的package.json，返回所有包的路径列表

#### Returns

`string`[]

### getPkgJSONPath()

> **getPkgJSONPath**: (`pkgName`, `filter?`) => `undefined` \| [`PackageJSONWithPath`](../interfaces/PackageJSONWithPath.md)

获取某个包的PkgJSON信息

#### Parameters

##### pkgName

`string`

##### filter?

`string` | `string`[]

#### Returns

`undefined` \| [`PackageJSONWithPath`](../interfaces/PackageJSONWithPath.md)

### getPkgNames()

> **getPkgNames**: (`filter?`) => `string`[]

获取所有包名
- 仅仅支持pnpm
参考命令：`pnpm ls --json --only-projects ${filter} --depth -1`

#### Parameters

##### filter?

`string` | `string`[]

#### Returns

`string`[]

### getReleasePkgJSON()

> **getReleasePkgJSON**: (`filter?`) => [`PackageJSONWithPath`](../interfaces/PackageJSONWithPath.md)[]

获取发布的包名
参考：
- pnpm 命令： https://pnpm.io/cli/list
- filter参数： https://pnpm.io/filtering

#### Parameters

##### filter?

`string` | `string`[]

#### Returns

[`PackageJSONWithPath`](../interfaces/PackageJSONWithPath.md)[]
