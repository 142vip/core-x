[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipCommanderOptions

# 接口: VipCommanderOptions

定义于: [packages/utils/src/pkgs/commander.ts:10](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/commander.ts#L10)

## theme_extended_by

- [`ChangelogCliOptions`](../../changelog/interfaces/ChangelogCliOptions.md)
- [`ReleaseVersionCliOptions`](../../release-version/interfaces/ReleaseVersionCliOptions.md)

## 属性

### dryRun?

> `optional` **dryRun?**: `boolean`

定义于: [packages/utils/src/pkgs/commander.ts:12](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/commander.ts#L12)

注册 `--dry-run`（子命令 `-h` 展示，紧挨 `--help` 上方）

***

### help?

> `optional` **help?**: `boolean`

定义于: [packages/utils/src/pkgs/commander.ts:18](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/commander.ts#L18)

注册 `-h, --help`（置于 Options 末尾）

***

### trace?

> `optional` **trace?**: `boolean`

定义于: [packages/utils/src/pkgs/commander.ts:16](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/commander.ts#L16)

注册 `--trace`（根程序 `-h` 展示；开启后 `VipConsole.trace` 输出执行日志）

***

### vip?

> `optional` **vip?**: `boolean`

定义于: [packages/utils/src/pkgs/commander.ts:14](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/commander.ts#L14)

注册 `--vip`（子命令 `-h` 展示，紧挨 `--help` 上方）
