[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / ChangelogCliOptions

# 接口: ChangelogCliOptions

定义于: [changelog/src/core/changelog.interface.ts:96](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L96)

CLI / 程序化调用入参（合并 VipCommander 通用选项）

## theme_extends

- [`VipCommanderOptions`](../../utils/interfaces/VipCommanderOptions.md)

## 属性

### dryRun?

> `optional` **dryRun?**: `boolean`

定义于: [utils/src/pkgs/commander.ts:12](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/commander.ts#L12)

注册 `--dry-run`（子命令 `-h` 展示，紧挨 `--help` 上方）

#### 继承自

[`VipCommanderOptions`](../../utils/interfaces/VipCommanderOptions.md).[`dryRun`](../../utils/interfaces/VipCommanderOptions.md#dryrun)

***

### from?

> `optional` **from?**: `string`

定义于: [changelog/src/core/changelog.interface.ts:100](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L100)

起始 Git 标签或 commit

***

### github?

> `optional` **github?**: `string`

定义于: [changelog/src/core/changelog.interface.ts:104](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L104)

远程仓库 `owner/repo`；默认从 git remote 推断

***

### help?

> `optional` **help?**: `boolean`

定义于: [utils/src/pkgs/commander.ts:18](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/commander.ts#L18)

注册 `-h, --help`（置于 Options 末尾）

#### 继承自

[`VipCommanderOptions`](../../utils/interfaces/VipCommanderOptions.md).[`help`](../../utils/interfaces/VipCommanderOptions.md#help)

***

### name?

> `optional` **name?**: `string`

定义于: [changelog/src/core/changelog.interface.ts:106](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L106)

Release / CHANGELOG 版本标题；默认与 `to` 一致

***

### output?

> `optional` **output?**: `string`

定义于: [changelog/src/core/changelog.interface.ts:110](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L110)

CHANGELOG.md 输出路径（建议绝对路径）

***

### prerelease?

> `optional` **prerelease?**: `boolean`

定义于: [changelog/src/core/changelog.interface.ts:108](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L108)

是否标记为 GitHub Pre-release；默认 `false`（Latest）

***

### scopeName?

> `optional` **scopeName?**: `string`

定义于: [changelog/src/core/changelog.interface.ts:112](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L112)

Monorepo 子包 scope 名（仅收录该 scope 的提交）

***

### to?

> `optional` **to?**: `string`

定义于: [changelog/src/core/changelog.interface.ts:102](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L102)

结束 Git 标签或 commit；默认当前 HEAD 对应 tag / 分支

***

### token?

> `optional` **token?**: `string`

定义于: [changelog/src/core/changelog.interface.ts:98](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/core/changelog.interface.ts#L98)

GitHub Personal Access Token；亦可 `GITHUB_TOKEN` / `TOKEN` 环境变量

***

### trace?

> `optional` **trace?**: `boolean`

定义于: [utils/src/pkgs/commander.ts:16](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/commander.ts#L16)

注册 `--trace`（根程序 `-h` 展示；开启后 `VipConsole.trace` 输出执行日志）

#### 继承自

[`VipCommanderOptions`](../../utils/interfaces/VipCommanderOptions.md).[`trace`](../../utils/interfaces/VipCommanderOptions.md#trace)

***

### vip?

> `optional` **vip?**: `boolean`

定义于: [utils/src/pkgs/commander.ts:14](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/commander.ts#L14)

注册 `--vip`（子命令 `-h` 展示，紧挨 `--help` 上方）

#### 继承自

[`VipCommanderOptions`](../../utils/interfaces/VipCommanderOptions.md).[`vip`](../../utils/interfaces/VipCommanderOptions.md#vip)
