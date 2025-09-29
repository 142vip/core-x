[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / ChangelogDefaultConfig

# 变量: ChangelogDefaultConfig

> `const` **ChangelogDefaultConfig**: `object`

定义于: [changelog/src/shared/config.ts:21](https://github.com/142vip/core-x/blob/d978b443ed1221c42602080459c0a22aae31b2d5/packages/changelog/src/shared/config.ts#L21)

默认配置

## 类型声明

### baseUrl

> **baseUrl**: `string` = `'github.com'`

### baseUrlApi

> **baseUrlApi**: `string` = `'api.github.com'`

### capitalize

> **capitalize**: `boolean` = `true`

### contributors

> **contributors**: `boolean` = `true`

### emoji

> **emoji**: `boolean` = `true`

### group

> **group**: `boolean` = `true`

### header

> **header**: `string` = `CONFIG_DEFAULT_HEADER`

### prerelease

> **prerelease**: `boolean` = `true`

### scopeMap

> **scopeMap**: `object` = `{}`

### titles

> **titles**: `object`

#### titles.breakingChanges

> **breakingChanges**: `string` = `'🚨 Breaking Changes'`

### types

> **types**: `object`

#### types.build

> **build**: `object`

#### types.build.semver

> **semver**: `string` = `'patch'`

#### types.build.title

> **title**: `string` = `'📦 Build'`

#### types.docs

> **docs**: `object`

#### types.docs.semver

> **semver**: `string` = `'patch'`

#### types.docs.title

> **title**: `string` = `'📖 Documentation'`

#### types.feat

> **feat**: `object`

#### types.feat.semver

> **semver**: `string` = `'minor'`

#### types.feat.title

> **title**: `string` = `'✨ Features'`

#### types.fix

> **fix**: `object`

#### types.fix.semver

> **semver**: `string` = `'patch'`

#### types.fix.title

> **title**: `string` = `'🐛 Bug Fixes'`

#### types.perf

> **perf**: `object`

#### types.perf.semver

> **semver**: `string` = `'patch'`

#### types.perf.title

> **title**: `string` = `'🔥 Performance'`

#### types.refactor

> **refactor**: `object`

#### types.refactor.semver

> **semver**: `string` = `'patch'`

#### types.refactor.title

> **title**: `string` = `'💅 Refactors'`

#### types.release

> **release**: `object`

#### types.release.semver

> **semver**: `string` = `'patch'`

#### types.release.title

> **title**: `string` = `'😏 Release Packages'`

#### types.types

> **types**: `object`

#### types.types.semver

> **semver**: `string` = `'patch'`

#### types.types.title

> **title**: `string` = `'🌊 Types'`
