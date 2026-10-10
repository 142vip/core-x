[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / resolveInstallRegistryUrl

# 函数: resolveInstallRegistryUrl()

> **resolveInstallRegistryUrl**(`flags`, `options`): `string`

定义于: [packages/fairy-cli/src/utils/install.util.ts:31](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/install.util.ts#L31)

解析 registry URL（优先级：自定义 url → 腾讯 → 阿里 → 仅 `--*-registry` → 环境变量 → 默认值）。

## 参数

### flags

[`InstallRegistryCliFlags`](../interfaces/InstallRegistryCliFlags.md)

### options

#### defaultUrl

`string`

#### envVar

`string`

## 返回

`string`
