[API 参考](../../../index.md) / [@142vip/release-version](../index.md) / parseReleaseVersionCliOptions

# 函数: parseReleaseVersionCliOptions()

> **parseReleaseVersionCliOptions**(`cliOptions`): [`ReleaseVersionOptions`](../interfaces/ReleaseVersionOptions.md)

定义于: [release-version/src/config.ts:50](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/config.ts#L50)

合并默认配置、用户配置文件与 CLI 参数，得到完整的 `ReleaseVersionOptions`

`mergeCommanderConfig` 以空对象为 merge 目标，不会改写 `releaseVersionDefaultConfig` 常量

## 参数

### cliOptions

[`ReleaseVersionCliOptions`](../interfaces/ReleaseVersionCliOptions.md)

## 返回

[`ReleaseVersionOptions`](../interfaces/ReleaseVersionOptions.md)
