[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipNanoId

# 类: VipNanoId

定义于: [packages/utils/src/pkgs/nanoid.ts:19](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/nanoid.ts#L19)

## 构造函数

### 构造函数

> **new VipNanoId**(): `VipNanoId`

#### 返回

`VipNanoId`

## 方法

### getNanoId()

> **getNanoId**(`alphabet?`): (`size?`) => `string`

定义于: [packages/utils/src/pkgs/nanoid.ts:24](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/nanoid.ts#L24)

获取NanoId对象，默认字符集为 Alphabet.DEFAULT，只有小写字母和数字

#### 参数

##### alphabet?

`string`

#### 返回

> (`size?`): `string`

##### 参数

###### size?

`number`

##### 返回

`string`

***

### getRandomCharId()

> **getRandomCharId**(`size?`): `string`

定义于: [packages/utils/src/pkgs/nanoid.ts:48](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/nanoid.ts#L48)

获取纯字母的随机字符串，包含小写字母和大写字母

#### 参数

##### size?

`number`

#### 返回

`string`

***

### getRandomComplexId()

> **getRandomComplexId**(`size?`): `string`

定义于: [packages/utils/src/pkgs/nanoid.ts:72](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/nanoid.ts#L72)

获取复杂的随机字符串，包含数字、小写字母、大写字母和特殊字符

#### 参数

##### size?

`number`

#### 返回

`string`

***

### getRandomId()

> **getRandomId**(`size?`): `string`

定义于: [packages/utils/src/pkgs/nanoid.ts:32](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/nanoid.ts#L32)

获取随机字符串，默认长度21
- 按照制定规则生成默认字符串

#### 参数

##### size?

`number`

#### 返回

`string`

***

### getRandomLowerCharId()

> **getRandomLowerCharId**(`size?`): `string`

定义于: [packages/utils/src/pkgs/nanoid.ts:56](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/nanoid.ts#L56)

获取纯小写字母的随机字符串

#### 参数

##### size?

`number`

#### 返回

`string`

***

### getRandomNumberId()

> **getRandomNumberId**(`size?`): `string`

定义于: [packages/utils/src/pkgs/nanoid.ts:40](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/nanoid.ts#L40)

获取纯数字的随机字符串

#### 参数

##### size?

`number`

#### 返回

`string`

***

### getRandomUpperCharId()

> **getRandomUpperCharId**(`size?`): `string`

定义于: [packages/utils/src/pkgs/nanoid.ts:64](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/nanoid.ts#L64)

获取纯大写字母的随机字符串

#### 参数

##### size?

`number`

#### 返回

`string`
