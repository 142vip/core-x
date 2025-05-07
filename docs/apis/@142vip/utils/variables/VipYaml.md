[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipYaml

# 变量: VipYaml

> `const` **VipYaml**: `object`

定义于: [packages/utils/src/pkgs/yaml.ts:3](https://github.com/142vip/core-x/blob/1eb80b292cacf818428b26e34edc36554f5c80fb/packages/utils/src/pkgs/yaml.ts#L3)

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
