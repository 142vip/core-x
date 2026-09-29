[API 参考](../../../index.md) / [@142vip/release-version](../index.md) / ReleaseVersionOperation

# 类: ReleaseVersionOperation

定义于: [release-version/src/core/releasex-operation.ts:27](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/core/releasex-operation.ts#L27)

单次发版流程的状态机：持有选项、中间状态，并编排完整发版步骤

## 属性

### options

> `readonly` **options**: [`ReleaseVersionOperationOptions`](../interfaces/ReleaseVersionOperationOptions.md)

定义于: [release-version/src/core/releasex-operation.ts:29](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/core/releasex-operation.ts#L29)

归一化后的发版选项（commit / tag / push 等）

***

### state

> `readonly` **state**: [`ReleaseVersionOperationState`](../interfaces/ReleaseVersionOperationState.md)

定义于: [release-version/src/core/releasex-operation.ts:32](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/core/releasex-operation.ts#L32)

发版过程中的中间状态（版本号、commit/tag 文案等）

## 访问器

### results

#### Getter 签名

> **get** **results**(): [`ReleaseVersionResults`](../interfaces/ReleaseVersionResults.md)

定义于: [release-version/src/core/releasex-operation.ts:53](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/core/releasex-operation.ts#L53)

根据当前 state 与 options 生成对外结果快照

##### 返回

[`ReleaseVersionResults`](../interfaces/ReleaseVersionResults.md)

## 方法

### finalizeRelease()

> **finalizeRelease**(): `Promise`\<`ReleaseVersionOperation`\>

定义于: [release-version/src/core/releasex-operation.ts:101](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/core/releasex-operation.ts#L101)

发版收尾阶段：git commit → tag → postversion → push

#### 返回

`Promise`\<`ReleaseVersionOperation`\>

***

### prepareRelease()

> **prepareRelease**(): `Promise`\<`ReleaseVersionOperation`\>

定义于: [release-version/src/core/releasex-operation.ts:84](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/core/releasex-operation.ts#L84)

发版准备阶段：确认 → preversion → 写版本 → CHANGELOG → execute → version 脚本

#### 返回

`Promise`\<`ReleaseVersionOperation`\>

***

### printReleasePlan()

> **printReleasePlan**(`title?`): `void`

定义于: [release-version/src/core/releasex-operation.ts:175](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/core/releasex-operation.ts#L175)

打印发版计划摘要（CLI 试运行与发版前确认复用）

#### 参数

##### title?

`string` = `'发版计划：'`

#### 返回

`void`

***

### resolveVersions()

> **resolveVersions**(): `Promise`\<`ReleaseVersionOperation`\>

定义于: [release-version/src/core/releasex-operation.ts:75](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/core/releasex-operation.ts#L75)

解析当前版本与目标版本（交互式选择新版本）
- 不修改 `package.json`，不写 CHANGELOG

#### 返回

`Promise`\<`ReleaseVersionOperation`\>

***

### create()

> `static` **create**(`input`): `Promise`\<`ReleaseVersionOperation`\>

定义于: [release-version/src/core/releasex-operation.ts:66](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/release-version/src/core/releasex-operation.ts#L66)

创建发版操作实例（仅归一化选项，不读写磁盘）

#### 参数

##### input

[`ReleaseVersionOptions`](../interfaces/ReleaseVersionOptions.md)

#### 返回

`Promise`\<`ReleaseVersionOperation`\>
