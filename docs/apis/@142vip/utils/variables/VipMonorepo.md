[API 参考](../../../packages.md) / [@142vip/utils](../index.md) / VipMonorepo

# 变量: VipMonorepo

> `const` **VipMonorepo**: `object`

定义于: [packages/utils/src/core/monorepo.ts:79](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/utils/src/core/monorepo.ts#L79)

## 类型声明

### getPackageJSONPathList()

> **getPackageJSONPathList**: () => `string`[]

获取monorepo下所有包的package.json，返回所有包的路径列表

#### 返回

`string`[]

### getPkgJSONPath()

> **getPkgJSONPath**: (`pkgName`, `filter?`) => `undefined` \| [`PackageJSONWithPath`](../interfaces/PackageJSONWithPath.md)

获取某个包的PkgJSON信息

#### 参数

##### pkgName

`string`

##### filter?

`string` | `string`[]

#### 返回

`undefined` \| [`PackageJSONWithPath`](../interfaces/PackageJSONWithPath.md)

### getPkgNames()

> **getPkgNames**: (`filter?`) => `string`[]

获取所有包名
- 仅仅支持pnpm
参考命令：`pnpm ls --json --only-projects ${filter} --depth -1`

#### 参数

##### filter?

`string` | `string`[]

#### 返回

`string`[]

### getReleasePkgJSON()

> **getReleasePkgJSON**: (`filter?`) => [`PackageJSONWithPath`](../interfaces/PackageJSONWithPath.md)[]

获取发布的包名
参考：
- pnpm 命令： https://pnpm.io/cli/list
- filter参数： https://pnpm.io/filtering

#### 参数

##### filter?

`string` | `string`[]

#### 返回

[`PackageJSONWithPath`](../interfaces/PackageJSONWithPath.md)[]
