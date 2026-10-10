[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipPackageCliErrorPresentation

# 接口: VipPackageCliErrorPresentation

定义于: [packages/utils/src/pkgs/cli-presentation.ts:175](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/cli-presentation.ts#L175)

根程序解析失败时的展示配置（与 `fa` 未知子命令页同构）

## 属性

### binAliases?

> `optional` **binAliases?**: `string`

定义于: [packages/utils/src/pkgs/cli-presentation.ts:178](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/cli-presentation.ts#L178)

`logVipCliBanner` 的别名行（彩色字符串）

***

### identity

> **identity**: [`VipCliIdentity`](VipCliIdentity.md)

定义于: [packages/utils/src/pkgs/cli-presentation.ts:176](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/cli-presentation.ts#L176)

***

### renderExcessArgumentsExtra?

> `optional` **renderExcessArgumentsExtra?**: (`subcommand`) => `boolean`

定义于: [packages/utils/src/pkgs/cli-presentation.ts:189](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/cli-presentation.ts#L189)

多余参数时的额外提示；返回 `true` 表示已完整输出，不再打印默认查看帮助行。

#### 参数

##### subcommand

`string` \| `undefined`

#### 返回

`boolean`

***

### renderHelpHintLine

> **renderHelpHintLine**: () => `string`

定义于: [packages/utils/src/pkgs/cli-presentation.ts:185](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/cli-presentation.ts#L185)

页脚「查看帮助：…」（可多行，含缩进）

#### 返回

`string`

***

### renderSupportedCommands?

> `optional` **renderSupportedCommands?**: () => `string`

定义于: [packages/utils/src/pkgs/cli-presentation.ts:183](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/cli-presentation.ts#L183)

未知子命令时输出「可用子命令」对齐列表；多子命令 CLI（如 `fa`）传入。
standalone bin 可省略，仅展示横幅 + 错误 + 查看帮助。

#### 返回

`string`
