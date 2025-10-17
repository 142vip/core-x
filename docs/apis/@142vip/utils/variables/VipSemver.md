[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipSemver

# Variable: VipSemver

> `const` **VipSemver**: `object`

Defined in: [packages/utils/src/pkgs/semver.ts:101](https://github.com/142vip/core-x/blob/15d5bc9ef4bece78c0e60bdf074a2d245f625100/packages/utils/src/pkgs/semver.ts#L101)

参考：https://www.npmjs.com/package/semver

## Type Declaration

### clean()

> **clean**: (`version`, `optionsOrLoose?`) => `null` \| `string`

Returns cleaned (removed leading/trailing whitespace, remove '=v' prefix) and parsed version, or null if version is invalid.

#### Parameters

##### version

`string`

##### optionsOrLoose?

`boolean` | `Options`

#### Returns

`null` \| `string`

### compare()

> **compare**: (`v1`, `v2`, `optionsOrLoose?`) => `-1` \| `0` \| `1`

Compares two versions excluding build identifiers (the bit after `+` in the semantic version string).

Sorts in ascending order when passed to `Array.sort()`.

#### Parameters

##### v1

`string` | `SemVer`

##### v2

`string` | `SemVer`

##### optionsOrLoose?

`boolean` | `Options`

#### Returns

`-1` \| `0` \| `1`

- `0` if `v1` == `v2`
- `1` if `v1` is greater
- `-1` if `v2` is greater.

### createSemver()

> **createSemver**: (`version`, `optionsOrLoose?`) => `SemVer`

支持原生创建Semver实例

#### Parameters

##### version

`string` | `SemVer`

##### optionsOrLoose?

`boolean` | `RangeOptions`

#### Returns

`SemVer`

### eq()

> **eq**: (`v1`, `v2`, `optionsOrLoose?`) => `boolean`

v1 == v2 This is true if they're logically equivalent, even if they're not the exact same string. You already know how to compare strings.

#### Parameters

##### v1

`string` | `SemVer`

##### v2

`string` | `SemVer`

##### optionsOrLoose?

`boolean` | `Options`

#### Returns

`boolean`

### getNextVersions()

> **getNextVersions**: (`currentVersion`, `preid?`) => `null` \| [`NextVersion`](../interfaces/NextVersion.md)

获取下一个版本

#### Parameters

##### currentVersion

`string`

##### preid?

`string`

#### Returns

`null` \| [`NextVersion`](../interfaces/NextVersion.md)

### gt()

> **gt**: (`v1`, `v2`, `optionsOrLoose?`) => `boolean`

v1 > v2

#### Parameters

##### v1

`string` | `SemVer`

##### v2

`string` | `SemVer`

##### optionsOrLoose?

`boolean` | `Options`

#### Returns

`boolean`

### inc()

> **inc**: \{(`version`, `release`, `optionsOrLoose?`, `identifier?`): `null` \| `string`; (`version`, `release`, `identifier?`, `identifierBase?`): `null` \| `string`; \}

#### Call Signature

> (`version`, `release`, `optionsOrLoose?`, `identifier?`): `null` \| `string`

Return the version incremented by the release type (major, premajor, minor, preminor, patch, prepatch, or prerelease), or null if it's not valid.

##### Parameters

###### version

`string` | `SemVer`

###### release

`ReleaseType`

###### optionsOrLoose?

`boolean` | `Options`

###### identifier?

`string`

##### Returns

`null` \| `string`

#### Call Signature

> (`version`, `release`, `identifier?`, `identifierBase?`): `null` \| `string`

Return the version incremented by the release type (major, premajor, minor, preminor, patch, prepatch, or prerelease), or null if it's not valid.

##### Parameters

###### version

`string` | `SemVer`

###### release

`ReleaseType`

###### identifier?

`string`

###### identifierBase?

`false` | `IdentifierBase`

##### Returns

`null` \| `string`

### isPrereleaseType()

> **isPrereleaseType**: (`value`) => `boolean`

Determines whether the specified value is a pre-release.

#### Parameters

##### value

`ReleaseType`

#### Returns

`boolean`

### isReleaseType()

> **isReleaseType**: (`value`) => `boolean`

Determines whether the specified value is a valid ReleaseType string.

#### Parameters

##### value

`ReleaseType`

#### Returns

`boolean`

### lt()

> **lt**: (`v1`, `v2`, `optionsOrLoose?`) => `boolean`

v1 < v2

#### Parameters

##### v1

`string` | `SemVer`

##### v2

`string` | `SemVer`

##### optionsOrLoose?

`boolean` | `Options`

#### Returns

`boolean`

### originImportSemVer

> **originImportSemVer**: `__module`

### parse()

> **parse**: (`version`, `optionsOrLoose?`) => `null` \| `SemVer`

Return the parsed version as a SemVer object, or null if it's not valid.

#### Parameters

##### version

`undefined` | `null` | `string` | `SemVer`

##### optionsOrLoose?

`boolean` | `Options`

#### Returns

`null` \| `SemVer`

### prerelease()

> **prerelease**: (`version`, `optionsOrLoose?`) => `null` \| readonly (`string` \| `number`)[]

Returns an array of prerelease components, or null if none exist.

#### Parameters

##### version

`string` | `SemVer`

##### optionsOrLoose?

`boolean` | `Options`

#### Returns

`null` \| readonly (`string` \| `number`)[]

### satisfies()

> **satisfies**: (`version`, `range`, `optionsOrLoose?`) => `boolean`

Return true if the version satisfies the range.

#### Parameters

##### version

`string` | `SemVer`

##### range

`string` | `Range`

##### optionsOrLoose?

`boolean` | `RangeOptions`

#### Returns

`boolean`

### valid()

> **valid**: (`version`, `optionsOrLoose?`) => `null` \| `string`

Return the parsed version as a string, or null if it's not valid.

#### Parameters

##### version

`undefined` | `null` | `string` | `SemVer`

##### optionsOrLoose?

`boolean` | `Options`

#### Returns

`null` \| `string`
