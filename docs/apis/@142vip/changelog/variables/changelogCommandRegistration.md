[API 参考](../../../index.md) / [@142vip/changelog](../index.md) / changelogCommandRegistration

# 变量: changelogCommandRegistration

> `const` **changelogCommandRegistration**: `object`

定义于: [changelog/src/changelog-cli.ts:44](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/changelog/src/changelog-cli.ts#L44)

`registerSubcommand` / `registerStandalone` 共用载荷（业务参数 + action）

## 类型声明

### action

> **action**: (`options`) => `Promise`\<`void`\> = `runChangelogCli`

standalone bin 与 `fa changelog` 共用的 action

#### 参数

##### options

[`ChangelogCliOptions`](../interfaces/ChangelogCliOptions.md)

#### 返回

`Promise`\<`void`\>

### registerBusinessOptions

> **registerBusinessOptions**: (`command`) => `void` = `registerChangelogOptions`

业务 CLI 参数：token / 标签区间 / 输出路径等

#### 参数

##### command

[`VipCommander`](../../utils/classes/VipCommander.md)

#### 返回

`void`
