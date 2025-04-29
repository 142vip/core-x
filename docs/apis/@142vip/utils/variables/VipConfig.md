[API 参考](../../../packages.md) / [@142vip/utils](../index.md) / VipConfig

# 变量: VipConfig

> `const` **VipConfig**: `object`

定义于: [packages/utils/src/pkgs/config.ts:33](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/utils/src/pkgs/config.ts#L33)

配置加载

## 类型声明

### loadCliConfig()

> **loadCliConfig**: \<`T`\>(`configName`, `defaultValue`, `c12Options?`) => `Promise`\<`T`\>

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

##### c12Options?

`LoadConfigOptions`\<`UserInputConfig`, `ConfigLayerMeta`\>

#### 返回

`Promise`\<`T`\>

### mergeCommanderConfig()

> **mergeCommanderConfig**: \<`T`\>(`cliConfig`, `commanderConfig`) => `T`

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
