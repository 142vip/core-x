[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipNpmCiInstallOptions

# 接口: VipNpmCiInstallOptions

定义于: [packages/utils/src/core/npm.ts:243](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/core/npm.ts#L243)

## 属性

### corepackNpmRegistry?

> `optional` **corepackNpmRegistry?**: `string`

定义于: [packages/utils/src/core/npm.ts:247](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/core/npm.ts#L247)

corepack 下载 pnpm 用的 npm 源，默认 `COREPACK_REGISTRY` 或 npm 官方

***

### extraPnpmArgs?

> `optional` **extraPnpmArgs?**: `string` \| readonly `string`[]

定义于: [packages/utils/src/core/npm.ts:250](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/core/npm.ts#L250)

追加到 `pnpm i` 末尾，对应 `fa ci` 的 `"$@"`

***

### ignoreScripts?

> `optional` **ignoreScripts?**: `boolean`

定义于: [packages/utils/src/core/npm.ts:248](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/core/npm.ts#L248)

***

### registry?

> `optional` **registry?**: `string`

定义于: [packages/utils/src/core/npm.ts:245](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/core/npm.ts#L245)

pnpm 安装源，默认 `NPM_REGISTRY` 环境变量或 npmmirror
