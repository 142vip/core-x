[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / resolveFairyScriptsConfig

# 函数: resolveFairyScriptsConfig()

> **resolveFairyScriptsConfig**(`cwd?`): [`FairyScriptsConfig`](../type-aliases/FairyScriptsConfig.md)

定义于: [packages/fairy-cli/src/utils/scripts.util.ts:41](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/scripts.util.ts#L41)

聚合 `fa run` 可用脚本（仅合并，不执行）。

优先级从低到高：默认 `scripts` → `fairy.config` → `scripts`（同名整段覆盖）→ `package.json` → `scripts`。

## 参数

### cwd?

`string` = `...`

## 返回

[`FairyScriptsConfig`](../type-aliases/FairyScriptsConfig.md)
