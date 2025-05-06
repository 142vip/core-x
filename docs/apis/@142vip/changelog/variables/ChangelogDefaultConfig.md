[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / ChangelogDefaultConfig

# 变量: ChangelogDefaultConfig

> `const` **ChangelogDefaultConfig**: `object`

定义于: [changelog/src/shared/config.ts:9](https://github.com/142vip/core-x/blob/a868d72f351cc457f350d05d38d540d6494a8ff2/packages/changelog/src/shared/config.ts#L9)

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

> **header**: `string` = `'# Changelog\n\nAll notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.\n'`

### prerelease

> **prerelease**: `boolean` = `true`

### scopeMap

> **scopeMap**: `object` = `{}`

### titles

> **titles**: `object`

#### titles.breakingChanges

> **titles.breakingChanges**: `string` = `'🚨 Breaking Changes'`

### types

> **types**: `object`

#### types.build

> **types.build**: `object`

#### types.build.semver

> **types.build.semver**: `string` = `'patch'`

#### types.build.title

> **types.build.title**: `string` = `'📦 Build'`

#### types.docs

> **types.docs**: `object`

#### types.docs.semver

> **types.docs.semver**: `string` = `'patch'`

#### types.docs.title

> **types.docs.title**: `string` = `'📖 Documentation'`

#### types.feat

> **types.feat**: `object`

#### types.feat.semver

> **types.feat.semver**: `string` = `'minor'`

#### types.feat.title

> **types.feat.title**: `string` = `'✨ Features'`

#### types.fix

> **types.fix**: `object`

#### types.fix.semver

> **types.fix.semver**: `string` = `'patch'`

#### types.fix.title

> **types.fix.title**: `string` = `'🐛 Bug Fixes'`

#### types.perf

> **types.perf**: `object`

#### types.perf.semver

> **types.perf.semver**: `string` = `'patch'`

#### types.perf.title

> **types.perf.title**: `string` = `'🔥 Performance'`

#### types.refactor

> **types.refactor**: `object`

#### types.refactor.semver

> **types.refactor.semver**: `string` = `'patch'`

#### types.refactor.title

> **types.refactor.title**: `string` = `'💅 Refactors'`

#### types.release

> **types.release**: `object`

#### types.release.semver

> **types.release.semver**: `string` = `'patch'`

#### types.release.title

> **types.release.title**: `string` = `'😏 Release Packages'`

#### types.types

> **types.types**: `object`

#### types.types.semver

> **types.types.semver**: `string` = `'patch'`

#### types.types.title

> **types.types.title**: `string` = `'🌊 Types'`
