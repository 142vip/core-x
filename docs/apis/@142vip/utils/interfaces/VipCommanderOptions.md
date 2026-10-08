[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipCommanderOptions

# 接口: VipCommanderOptions

定义于: [packages/utils/src/pkgs/commander.ts:17](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/commander.ts#L17)

## theme_extended_by

- [`ChangelogCliOptions`](../../changelog/interfaces/ChangelogCliOptions.md)
- [`ReleaseVersionCliOptions`](../../release-version/interfaces/ReleaseVersionCliOptions.md)

## 属性

### dryRun?

> `optional` **dryRun?**: `boolean`

定义于: [packages/utils/src/pkgs/commander.ts:19](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/commander.ts#L19)

注册 `--dry-run`（子命令 `-h` 展示，紧挨 `--help` 上方）

***

### help?

> `optional` **help?**: `boolean`

定义于: [packages/utils/src/pkgs/commander.ts:25](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/commander.ts#L25)

注册 `-h, --help`（置于 Options 末尾）

***

### trace?

> `optional` **trace?**: `boolean`

定义于: [packages/utils/src/pkgs/commander.ts:23](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/commander.ts#L23)

注册 `--trace`（根程序 `-h` 展示；开启后 `VipConsole.trace` 输出执行日志）

***

### vip?

> `optional` **vip?**: `boolean`

定义于: [packages/utils/src/pkgs/commander.ts:21](https://github.com/142vip/core-x/blob/07b411873b9c06c2202845e56f8d11a93f1c33fe/packages/utils/src/pkgs/commander.ts#L21)

注册 `--vip`（子命令 `-h` 展示，紧挨 `--help` 上方）
