[API 参考](../../../index.md) / [@142vip/utils](../index.md) / VipDayjs

# 类: VipDayjs

定义于: [packages/utils/src/pkgs/dayjs.ts:44](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/dayjs.ts#L44)

## 构造函数

### 构造函数

> **new VipDayjs**(): `VipDayjs`

#### 返回

`VipDayjs`

## 方法

### formatCurrentDateToStr()

> **formatCurrentDateToStr**(): `string`

定义于: [packages/utils/src/pkgs/dayjs.ts:151](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/dayjs.ts#L151)

时间格式化当前时间，默认： 年-月-日 时:分:秒

#### 返回

`string`

***

### formatCurrentDateToTimestamp()

> **formatCurrentDateToTimestamp**(): `string`

定义于: [packages/utils/src/pkgs/dayjs.ts:144](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/dayjs.ts#L144)

时间戳格式化当前时间
- 格式： 20240809152030123

#### 返回

`string`

***

### formatCurrentDateToYMD()

> **formatCurrentDateToYMD**(): `string`

定义于: [packages/utils/src/pkgs/dayjs.ts:136](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/dayjs.ts#L136)

年月日格式化当前时间
- 格式： 2024-08-09

#### 返回

`string`

***

### formatDateToStr()

> **formatDateToStr**(`date`, `template?`): `string`

定义于: [packages/utils/src/pkgs/dayjs.ts:114](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/dayjs.ts#L114)

时间格式化，默认： 年-月-日 时:分:秒

#### 参数

##### date

`string` \| `number` \| `Date` \| `Dayjs` \| `null` \| `undefined`

##### template?

`string`

#### 返回

`string`

***

### formatMonthDay()

> **formatMonthDay**(`date`, `locale?`): `string`

定义于: [packages/utils/src/pkgs/dayjs.ts:124](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/dayjs.ts#L124)

格式化为月日（时间轴标题等）
- 中文：`8月9日`
- 英文：`Aug 9`

#### 参数

##### date

`string` \| `number` \| `Date` \| `Dayjs` \| `null` \| `undefined`

##### locale?

`string` = `'zh'`

#### 返回

`string`

***

### formatToISOStr()

> **formatToISOStr**(`date?`): `string`

定义于: [packages/utils/src/pkgs/dayjs.ts:159](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/dayjs.ts#L159)

格式化为 ISO-8601 字符串（UTC）。
用于 `meta.fetchedAt`、Token 过期时间等业务持久化字段。

#### 参数

##### date?

`string` \| `number` \| `Date` \| `Dayjs` \| `null`

#### 返回

`string`

***

### getCurrentTimestamp()

> **getCurrentTimestamp**(): `number`

定义于: [packages/utils/src/pkgs/dayjs.ts:74](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/dayjs.ts#L74)

获取当前时间戳。单位：毫秒

#### 返回

`number`

***

### getExpiredTimestamp()

> **getExpiredTimestamp**(`duration?`): `number`

定义于: [packages/utils/src/pkgs/dayjs.ts:91](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/dayjs.ts#L91)

获取过期时间戳。单位：毫秒

#### 参数

##### duration?

`number` = `...`

过期时间，默认：1小时

#### 返回

`number`

***

### getOriginDayjs()

> **getOriginDayjs**(`date?`): `Dayjs`

定义于: [packages/utils/src/pkgs/dayjs.ts:63](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/dayjs.ts#L63)

获取原始dayjs对象

#### 参数

##### date?

`string` \| `number` \| `Date` \| `Dayjs` \| `null`

#### 返回

`Dayjs`

***

### getTimestamp()

> **getTimestamp**(`date`): `number`

定义于: [packages/utils/src/pkgs/dayjs.ts:82](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/dayjs.ts#L82)

获取时间戳。单位：毫秒

#### 参数

##### date

`string` \| `number` \| `Date` \| `Dayjs` \| `null` \| `undefined`

#### 返回

`number`

***

### getYear()

> **getYear**(): `number`

定义于: [packages/utils/src/pkgs/dayjs.ts:67](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/dayjs.ts#L67)

#### 返回

`number`

***

### isAfterNow()

> **isAfterNow**(`date?`): `boolean`

定义于: [packages/utils/src/pkgs/dayjs.ts:107](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/dayjs.ts#L107)

是否在当前时间之后

#### 参数

##### date?

`string` \| `number` \| `Date` \| `Dayjs` \| `null`

#### 返回

`boolean`

***

### isBeforeByTtl()

> **isBeforeByTtl**(`anchorMs`, `ttlMs`, `nowMs?`): `boolean`

定义于: [packages/utils/src/pkgs/dayjs.ts:168](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/dayjs.ts#L168)

判断自 `anchorMs` 起是否仍在 `ttlMs` 有效期内（`now - anchorMs < ttlMs`）。
用于内存/Session 缓存、前端热数据节流等。

#### 参数

##### anchorMs

`number`

##### ttlMs

`number`

##### nowMs?

`number`

#### 返回

`boolean`

***

### isBeforeNow()

> **isBeforeNow**(`date?`): `boolean`

定义于: [packages/utils/src/pkgs/dayjs.ts:99](https://github.com/142vip/core-x/blob/62c7d1d986dbb5f12ff446de0788198e0aad92cc/packages/utils/src/pkgs/dayjs.ts#L99)

是否在当前时间之前

#### 参数

##### date?

`string` \| `number` \| `Date` \| `Dayjs` \| `null`

#### 返回

`boolean`
