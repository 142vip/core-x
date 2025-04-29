[API 参考](../../../packages.md) / [@142vip/fairy-cli](../index.md) / FairyCommandOptions

# 接口: FairyCommandOptions

定义于: [fairy-cli/src/enums/command.interface.ts:3](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/fairy-cli/src/enums/command.interface.ts#L3)

## theme_extends

- `Omit`\<[`VipCommanderOptions`](../../utils/interfaces/VipCommanderOptions.md), `"help"`\>

## 属性

### dryRun?

> `optional` **dryRun**: `boolean`

定义于: [utils/src/pkgs/commander.ts:14](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/utils/src/pkgs/commander.ts#L14)

试运行

#### 继承自

`Omit.dryRun`

***

### trace?

> `optional` **trace**: `boolean`

定义于: [utils/src/pkgs/commander.ts:24](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/utils/src/pkgs/commander.ts#L24)

是否开启日志追踪模式，打印重要执行日志

#### 继承自

`Omit.trace`

***

### vip?

> `optional` **vip**: `boolean`

定义于: [utils/src/pkgs/commander.ts:19](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/utils/src/pkgs/commander.ts#L19)

142vip 组织专用功能，用户标记是否用于142vip组织的项目

#### 继承自

`Omit.vip`
