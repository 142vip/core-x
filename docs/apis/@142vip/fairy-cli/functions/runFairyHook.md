[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / runFairyHook

# 函数: runFairyHook()

> **runFairyHook**(`hookName`, `cwd?`): `Promise`\<`void`\>

定义于: [packages/fairy-cli/src/utils/hooks.util.ts:200](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/fairy-cli/src/utils/hooks.util.ts#L200)

执行 `hooks` 中某一阶段的命令（npm 生命周期 / 自定义名，非 git 写入）。
`postinstall` 结束后会自动尝试安装 git 钩子（若配置了 `precommit` / `commitmsg` 等）。

## 参数

### hookName

`string`

### cwd?

`string` = `...`

## 返回

`Promise`\<`void`\>
