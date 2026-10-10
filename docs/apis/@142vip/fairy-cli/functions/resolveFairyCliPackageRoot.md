[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / resolveFairyCliPackageRoot

# 函数: resolveFairyCliPackageRoot()

> **resolveFairyCliPackageRoot**(): `string`

定义于: [packages/fairy-cli/src/utils/pkg.util.ts:22](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/pkg.util.ts#L22)

包根目录（`src/utils` 与 `dist/shared` 构建产物均可解析）。
禁止通过本包 npm 名 import 自身；读取 `config/` 等资源用此工具。

## 返回

`string`
