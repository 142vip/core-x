[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipDayjs

# 类: VipDayjs

定义于: [packages/utils/src/pkgs/dayjs.ts:3](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/dayjs.ts#L3)

## 构造函数

### 构造函数

> **new VipDayjs**(): `VipDayjs`

#### 返回

`VipDayjs`

## 方法

### formatCurrentDateToStr()

> **formatCurrentDateToStr**(): `string`

定义于: [packages/utils/src/pkgs/dayjs.ts:75](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/dayjs.ts#L75)

时间格式化当前时间，默认： 年-月-日 时:分:秒

#### 返回

`string`

***

### formatCurrentDateToTimestamp()

> **formatCurrentDateToTimestamp**(): `string`

定义于: [packages/utils/src/pkgs/dayjs.ts:68](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/dayjs.ts#L68)

时间戳格式化当前时间
- 格式： 20240809152030123

#### 返回

`string`

***

### formatCurrentDateToYMD()

> **formatCurrentDateToYMD**(): `string`

定义于: [packages/utils/src/pkgs/dayjs.ts:60](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/dayjs.ts#L60)

年月日格式化当前时间
- 格式： 2024-08-09

#### 返回

`string`

***

### formatDateToStr()

> **formatDateToStr**(`date`, `template?`): `string`

定义于: [packages/utils/src/pkgs/dayjs.ts:52](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/dayjs.ts#L52)

时间格式化，默认： 年-月-日 时:分:秒

#### 参数

##### date

`undefined` | `null` | `string` | `number` | `Dayjs` | `Date`

##### template?

`string`

#### 返回

`string`

***

### formatToISOStr()

> **formatToISOStr**(`date?`): `string`

定义于: [packages/utils/src/pkgs/dayjs.ts:83](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/dayjs.ts#L83)

格式化时间为ISO字符串

#### 参数

##### date?

`null` | `string` | `number` | `Dayjs` | `Date`

#### 返回

`string`

***

### getCurrentTimestamp()

> **getCurrentTimestamp**(): `number`

定义于: [packages/utils/src/pkgs/dayjs.ts:21](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/dayjs.ts#L21)

获取当前时间戳。单位：毫秒

#### 返回

`number`

***

### getExpiredTimestamp()

> **getExpiredTimestamp**(`duration`): `number`

定义于: [packages/utils/src/pkgs/dayjs.ts:29](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/dayjs.ts#L29)

获取过期时间戳。单位：毫秒

#### 参数

##### duration

`number` = `...`

过期时间，默认：1小时

#### 返回

`number`

***

### isAfterNow()

> **isAfterNow**(`date?`): `boolean`

定义于: [packages/utils/src/pkgs/dayjs.ts:45](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/dayjs.ts#L45)

是否在当前时间之后

#### 参数

##### date?

`null` | `string` | `number` | `Dayjs` | `Date`

#### 返回

`boolean`

***

### isBeforeNow()

> **isBeforeNow**(`date?`): `boolean`

定义于: [packages/utils/src/pkgs/dayjs.ts:37](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/utils/src/pkgs/dayjs.ts#L37)

是否在当前时间之前

#### 参数

##### date?

`null` | `string` | `number` | `Dayjs` | `Date`

#### 返回

`boolean`
