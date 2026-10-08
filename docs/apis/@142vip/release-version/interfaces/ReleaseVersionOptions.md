[API 参考](../../../index.md) / [@142vip/release-version](../index.md) / ReleaseVersionOptions

# 接口: ReleaseVersionOptions

定义于: [release-version/src/releasex.interface.ts:19](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L19)

`releaseVersion` / CLI 入参

## 属性

### all?

> `optional` **all?**: `boolean`

定义于: [release-version/src/releasex.interface.ts:40](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L40)

`git commit --all`（提交全部变更，不仅版本文件）

***

### changelog?

> `optional` **changelog?**: `boolean`

定义于: [release-version/src/releasex.interface.ts:23](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L23)

是否生成 `CHANGELOG.md`

***

### changelogPrerelease?

> `optional` **changelogPrerelease?**: `boolean`

定义于: [release-version/src/releasex.interface.ts:25](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L25)

覆盖 `@142vip/changelog` 的 GitHub Release 预发布标记

***

### commit?

> `optional` **commit?**: `string` \| `boolean`

定义于: [release-version/src/releasex.interface.ts:32](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L32)

是否创建 git commit；可为自定义 message
- `%s` 替换为新版本号；无 `%s` 时追加版本号

***

### confirm?

> `optional` **confirm?**: `boolean`

定义于: [release-version/src/releasex.interface.ts:42](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L42)

`true` 时发版前交互确认，默认 `true`

***

### currentVersion?

> `optional` **currentVersion?**: `string`

定义于: [release-version/src/releasex.interface.ts:27](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L27)

指定当前版本（跳过从 `package.json` 读取）

***

### cwd?

> `optional` **cwd?**: `string`

定义于: [release-version/src/releasex.interface.ts:46](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L46)

工作目录，默认 `process.cwd()`

***

### execute?

> `optional` **execute?**: `string`

定义于: [release-version/src/releasex.interface.ts:50](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L50)

写入新版本号后、git commit 前执行的 shell 命令

***

### ignoreScripts?

> `optional` **ignoreScripts?**: `boolean`

定义于: [release-version/src/releasex.interface.ts:48](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L48)

忽略 `preversion` / `version` / `postversion` 脚本

***

### preid?

> `optional` **preid?**: `string`

定义于: [release-version/src/releasex.interface.ts:21](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L21)

预发布标识（如 `alpha`），默认 CLI 为 `alpha`

***

### push?

> `optional` **push?**: `boolean`

定义于: [release-version/src/releasex.interface.ts:38](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L38)

是否 push commit / tag 到远程，默认 `true`

***

### recursive?

> `optional` **recursive?**: `boolean`

定义于: [release-version/src/releasex.interface.ts:54](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L54)

递归处理子目录 `package.json`（根发版场景）

***

### scopeName?

> `optional` **scopeName?**: `string`

定义于: [release-version/src/releasex.interface.ts:52](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L52)

Monorepo 子包 npm 名（CHANGELOG scope 过滤）

***

### skipGitVerify?

> `optional` **skipGitVerify?**: `boolean`

定义于: [release-version/src/releasex.interface.ts:44](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L44)

`git commit --no-verify`

***

### tag?

> `optional` **tag?**: `string` \| `boolean`

定义于: [release-version/src/releasex.interface.ts:36](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/release-version/src/releasex.interface.ts#L36)

是否创建 git tag；可为自定义 tag 模板（如 `v%s`）
