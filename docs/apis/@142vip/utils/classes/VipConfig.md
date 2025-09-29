[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipConfig

# 类: VipConfig

定义于: [packages/utils/src/pkgs/config.ts:8](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/utils/src/pkgs/config.ts#L8)

配置加载

## 构造函数

### 构造函数

> **new VipConfig**(): `VipConfig`

#### 返回

`VipConfig`

## 方法

### loadCliConfig()

> **loadCliConfig**\<`T`\>(`configName`, `defaultValue`, `cosmiconfigOptions?`): `T`

定义于: [packages/utils/src/pkgs/config.ts:14](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/utils/src/pkgs/config.ts#L14)

加载配置
- 本地配置，形如：xxx.config.ts
- 包配置，package.json中的xxx字段

#### 类型参数

##### T

`T`

#### 参数

##### configName

`string`

##### defaultValue

`any`

##### cosmiconfigOptions?

`Partial`\<`OptionsSync`\>

#### 返回

`T`

***

### loadConfig()

> **loadConfig**\<`T`\>(`configName`, `cosmiconfigOptions?`): `undefined` \| `T`

定义于: [packages/utils/src/pkgs/config.ts:27](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/utils/src/pkgs/config.ts#L27)

加载cli配置

#### 类型参数

##### T

`T`

#### 参数

##### configName

`string`

##### cosmiconfigOptions?

`Partial`\<`OptionsSync`\>

#### 返回

`undefined` \| `T`

***

### mergeCommanderConfig()

> **mergeCommanderConfig**\<`T`\>(`cliConfig`, `commanderConfig`): `T`

定义于: [packages/utils/src/pkgs/config.ts:43](https://github.com/142vip/core-x/blob/724c9f80a9f43d7639fb0f15c0381f9ca258849b/packages/utils/src/pkgs/config.ts#L43)

合并配置

#### 类型参数

##### T

`T`

#### 参数

##### cliConfig

`Partial`\<`T`\>

cli自定义配置

##### commanderConfig

`Partial`\<`T`\>

用户在cli终端输入的配置

#### 返回

`T`
