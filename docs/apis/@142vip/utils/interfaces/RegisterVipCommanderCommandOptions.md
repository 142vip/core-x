[API 参考](../../../index.md) / [@142vip/utils](../index.md) / RegisterVipCommanderCommandOptions

# 接口: RegisterVipCommanderCommandOptions\<TArgs\>

定义于: [packages/utils/src/pkgs/commander.ts:83](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/commander.ts#L83)

## 类型参数

### TArgs

`TArgs` *extends* `unknown`[] = `unknown`[]

## 属性

### action

> **action**: (...`args`) => `void` \| `Promise`\<`void`\>

定义于: [packages/utils/src/pkgs/commander.ts:86](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/commander.ts#L86)

#### 参数

##### args

...`TArgs`

#### 返回

`void` \| `Promise`\<`void`\>

***

### registerBusinessOptions

> **registerBusinessOptions**: (`command`) => `void`

定义于: [packages/utils/src/pkgs/commander.ts:85](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/commander.ts#L85)

注册业务参数（仅 `.option` / `.argument`，不含 action）

#### 参数

##### command

[`VipCommander`](../classes/VipCommander.md)

#### 返回

`void`
