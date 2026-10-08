[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / globPatternToRegExp

# 函数: globPatternToRegExp()

> **globPatternToRegExp**(`globPattern`): `RegExp`

定义于: [packages/fairy-cli/src/utils/clean-path.util.ts:19](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/clean-path.util.ts#L19)

将 `fa clean` 使用的 glob 片段转为正则。
仅支持 `*`（单段）与 `**`（跨段），与 `generateDirPatterns` 输出一致。

## 参数

### globPattern

`string`

## 返回

`RegExp`
