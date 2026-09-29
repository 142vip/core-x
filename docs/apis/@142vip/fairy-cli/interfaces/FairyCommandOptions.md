[API 参考](../../../index.md) / [@142vip/fairy-cli](../index.md) / FairyCommandOptions

# 接口: FairyCommandOptions

定义于: [packages/fairy-cli/src/fairy.interface.ts:8](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/fairy-cli/src/fairy.interface.ts#L8)

fairy-cli 各子命令 action 入参基类。
子命令通过 `registerFairySubcommand` 注入 `--dry-run` / `--vip`；
根程序在 `fairyCliMain` 中调用 `registerRootOptions`（`--trace` / `--help` / `--version`）。

## theme_extends

- `Omit`\<[`VipCommanderOptions`](../../utils/interfaces/VipCommanderOptions.md), `"help"`\>

## 属性

### dryRun?

> `optional` **dryRun?**: `boolean`

定义于: [packages/utils/src/pkgs/commander.ts:12](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/commander.ts#L12)

注册 `--dry-run`（子命令 `-h` 展示，紧挨 `--help` 上方）

#### 继承自

[`AiCommandOptions`](AiCommandOptions.md).[`dryRun`](AiCommandOptions.md#dryrun)

***

### trace?

> `optional` **trace?**: `boolean`

定义于: [packages/utils/src/pkgs/commander.ts:16](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/commander.ts#L16)

注册 `--trace`（根程序 `-h` 展示；开启后 `VipConsole.trace` 输出执行日志）

#### 继承自

[`AiCommandOptions`](AiCommandOptions.md).[`trace`](AiCommandOptions.md#trace)

***

### vip?

> `optional` **vip?**: `boolean`

定义于: [packages/utils/src/pkgs/commander.ts:14](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/commander.ts#L14)

注册 `--vip`（子命令 `-h` 展示，紧挨 `--help` 上方）

#### 继承自

[`AiCommandOptions`](AiCommandOptions.md).[`vip`](AiCommandOptions.md#vip)
