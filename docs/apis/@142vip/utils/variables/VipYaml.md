[API 参考](../../../packages.md) / [@142vip/utils](../index.md) / VipYaml

# 变量: VipYaml

> `const` **VipYaml**: `object`

定义于: [packages/utils/src/pkgs/yaml.ts:3](https://github.com/142vip/core-x/blob/293ce1057e8ca17514533d1e98d7acd05ef45b34/packages/utils/src/pkgs/yaml.ts#L3)

## 类型声明

### load()

> **load**: (`str`, `opts?`) => `unknown`

#### 参数

##### str

`string`

##### opts?

`LoadOptions`

#### 返回

`unknown`

### loadAll()

> **loadAll**: \{(`str`, `iterator?`, `opts?`): `unknown`[]; (`str`, `iterator`, `opts?`): `void`; \}

#### 调用签名

> (`str`, `iterator?`, `opts?`): `unknown`[]

##### 参数

###### str

`string`

###### iterator?

`null`

###### opts?

`LoadOptions`

##### 返回

`unknown`[]

#### 调用签名

> (`str`, `iterator`, `opts?`): `void`

##### 参数

###### str

`string`

###### iterator

(`doc`) => `void`

###### opts?

`LoadOptions`

##### 返回

`void`
