[API 参考](../../../../../index.md) / [@142vip/nest-typeorm](../../../index.md) / [BSON](../index.md) / Timestamp

# 类: Timestamp

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:966

## theme_extends

- [`LongWithoutOverridesClass`](../variables/LongWithoutOverridesClass.md)

## 构造函数

### 构造函数

> **new Timestamp**(`int`): `Timestamp`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:972

#### 参数

##### int

`bigint`

A 64-bit bigint representing the Timestamp.

#### 返回

`Timestamp`

#### 重写了

`LongWithoutOverridesClass.constructor`

### 构造函数

> **new Timestamp**(`long`): `Timestamp`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:976

#### 参数

##### long

[`Long`](Long.md)

A 64-bit Long representing the Timestamp.

#### 返回

`Timestamp`

#### 重写了

`LongWithoutOverridesClass.constructor`

### 构造函数

> **new Timestamp**(`value`): `Timestamp`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:980

#### 参数

##### value

A pair of two values indicating timestamp and increment.

###### i

`number`

###### t

`number`

#### 返回

`Timestamp`

#### 重写了

`LongWithoutOverridesClass.constructor`

## 属性

### \_\_isLong\_\_

> **\_\_isLong\_\_**: `boolean`

#### 继承自

`LongWithoutOverridesClass.__isLong__`

***

### add

> **add**: (`addend`) => [`Long`](Long.md)

Returns the sum of this and the specified Long.

#### 参数

##### addend

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.add`

***

### and

> **and**: (`other`) => [`Long`](Long.md)

Returns the sum of this and the specified Long.

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

[`Long`](Long.md)

Sum

#### 继承自

`LongWithoutOverridesClass.and`

***

### comp

> **comp**: (`other`) => `-1` \| `0` \| `1`

This is an alias of [Long.compare](Long.md#compare)

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

`-1` \| `0` \| `1`

#### 继承自

`LongWithoutOverridesClass.comp`

***

### compare

> **compare**: (`other`) => `-1` \| `0` \| `1`

Compares this Long's value with the specified's.

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

`-1` \| `0` \| `1`

0 if they are the same, 1 if the this is greater and -1 if the given one is greater

#### 继承自

`LongWithoutOverridesClass.compare`

***

### div

> **div**: (`divisor`) => [`Long`](Long.md)

This is an alias of [Long.divide](Long.md#divide)

#### 参数

##### divisor

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.div`

***

### divide

> **divide**: (`divisor`) => [`Long`](Long.md)

Returns this Long divided by the specified. The result is signed if this Long is signed or unsigned if this Long is unsigned.

#### 参数

##### divisor

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

[`Long`](Long.md)

Quotient

#### 继承自

`LongWithoutOverridesClass.divide`

***

### eq

> **eq**: (`other`) => `boolean`

This is an alias of [Long.equals](Long.md#equals)

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.eq`

***

### equals

> **equals**: (`other`) => `boolean`

Tests if this Long's value equals the specified's.

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

Other value

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.equals`

***

### eqz

> **eqz**: () => `boolean`

This is an alias of [Long.isZero](Long.md#iszero)

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.eqz`

***

### ge

> **ge**: (`other`) => `boolean`

This is an alias of [Long.greaterThanOrEqual](Long.md#greaterthanorequal)

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.ge`

***

### getHighBits

> **getHighBits**: () => `number`

Gets the high 32 bits as a signed integer.

#### 返回

`number`

#### 继承自

`LongWithoutOverridesClass.getHighBits`

***

### getHighBitsUnsigned

> **getHighBitsUnsigned**: () => `number`

Gets the high 32 bits as an unsigned integer.

#### 返回

`number`

#### 继承自

`LongWithoutOverridesClass.getHighBitsUnsigned`

***

### getLowBits

> **getLowBits**: () => `number`

Gets the low 32 bits as a signed integer.

#### 返回

`number`

#### 继承自

`LongWithoutOverridesClass.getLowBits`

***

### getLowBitsUnsigned

> **getLowBitsUnsigned**: () => `number`

Gets the low 32 bits as an unsigned integer.

#### 返回

`number`

#### 继承自

`LongWithoutOverridesClass.getLowBitsUnsigned`

***

### getNumBitsAbs

> **getNumBitsAbs**: () => `number`

Gets the number of bits needed to represent the absolute value of this Long.

#### 返回

`number`

#### 继承自

`LongWithoutOverridesClass.getNumBitsAbs`

***

### greaterThan

> **greaterThan**: (`other`) => `boolean`

Tests if this Long's value is greater than the specified's.

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.greaterThan`

***

### greaterThanOrEqual

> **greaterThanOrEqual**: (`other`) => `boolean`

Tests if this Long's value is greater than or equal the specified's.

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.greaterThanOrEqual`

***

### gt

> **gt**: (`other`) => `boolean`

This is an alias of [Long.greaterThan](Long.md#greaterthan)

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.gt`

***

### gte

> **gte**: (`other`) => `boolean`

This is an alias of [Long.greaterThanOrEqual](Long.md#greaterthanorequal)

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.gte`

***

### high

> **high**: `number`

#### 继承自

`LongWithoutOverridesClass.high`

***

### isEven

> **isEven**: () => `boolean`

Tests if this Long's value is even.

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.isEven`

***

### isNegative

> **isNegative**: () => `boolean`

Tests if this Long's value is negative.

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.isNegative`

***

### isOdd

> **isOdd**: () => `boolean`

Tests if this Long's value is odd.

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.isOdd`

***

### isPositive

> **isPositive**: () => `boolean`

Tests if this Long's value is positive.

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.isPositive`

***

### isZero

> **isZero**: () => `boolean`

Tests if this Long's value equals zero.

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.isZero`

***

### le

> **le**: (`other`) => `boolean`

This is an alias of [Long.lessThanOrEqual](Long.md#lessthanorequal)

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.le`

***

### lessThan

> **lessThan**: (`other`) => `boolean`

Tests if this Long's value is less than the specified's.

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.lessThan`

***

### lessThanOrEqual

> **lessThanOrEqual**: (`other`) => `boolean`

Tests if this Long's value is less than or equal the specified's.

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.lessThanOrEqual`

***

### low

> **low**: `number`

#### 继承自

`LongWithoutOverridesClass.low`

***

### lt

> **lt**: (`other`) => `boolean`

This is an alias of [Long#lessThan](Long.md#lessthan).

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.lt`

***

### lte

> **lte**: (`other`) => `boolean`

This is an alias of [Long.lessThanOrEqual](Long.md#lessthanorequal)

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.lte`

***

### mod

> **mod**: (`divisor`) => [`Long`](Long.md)

This is an alias of [Long.modulo](Long.md#modulo)

#### 参数

##### divisor

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.mod`

***

### modulo

> **modulo**: (`divisor`) => [`Long`](Long.md)

Returns this Long modulo the specified.

#### 参数

##### divisor

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.modulo`

***

### mul

> **mul**: (`multiplier`) => [`Long`](Long.md)

This is an alias of [Long.multiply](Long.md#multiply)

#### 参数

##### multiplier

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.mul`

***

### multiply

> **multiply**: (`multiplier`) => [`Long`](Long.md)

Returns the product of this and the specified Long.

#### 参数

##### multiplier

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

Multiplier

#### 返回

[`Long`](Long.md)

Product

#### 继承自

`LongWithoutOverridesClass.multiply`

***

### ne

> **ne**: (`other`) => `boolean`

This is an alias of [Long.notEquals](Long.md#notequals)

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.ne`

***

### neg

> **neg**: () => [`Long`](Long.md)

This is an alias of [Long.negate](Long.md#negate)

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.neg`

***

### negate

> **negate**: () => [`Long`](Long.md)

Returns the Negation of this Long's value.

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.negate`

***

### neq

> **neq**: (`other`) => `boolean`

This is an alias of [Long.notEquals](Long.md#notequals)

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.neq`

***

### not

> **not**: () => [`Long`](Long.md)

Returns the bitwise NOT of this Long.

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.not`

***

### notEquals

> **notEquals**: (`other`) => `boolean`

Tests if this Long's value differs from the specified's.

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

`boolean`

#### 继承自

`LongWithoutOverridesClass.notEquals`

***

### or

> **or**: (`other`) => [`Long`](Long.md)

Returns the bitwise OR of this Long and the specified.

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md)

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.or`

***

### rem

> **rem**: (`divisor`) => [`Long`](Long.md)

This is an alias of [Long.modulo](Long.md#modulo)

#### 参数

##### divisor

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.rem`

***

### shiftLeft

> **shiftLeft**: (`numBits`) => [`Long`](Long.md)

Returns this Long with bits shifted to the left by the given amount.

#### 参数

##### numBits

`number` \| [`Long`](Long.md)

Number of bits

#### 返回

[`Long`](Long.md)

Shifted Long

#### 继承自

`LongWithoutOverridesClass.shiftLeft`

***

### shiftRight

> **shiftRight**: (`numBits`) => [`Long`](Long.md)

Returns this Long with bits arithmetically shifted to the right by the given amount.

#### 参数

##### numBits

`number` \| [`Long`](Long.md)

Number of bits

#### 返回

[`Long`](Long.md)

Shifted Long

#### 继承自

`LongWithoutOverridesClass.shiftRight`

***

### shiftRightUnsigned

> **shiftRightUnsigned**: (`numBits`) => [`Long`](Long.md)

Returns this Long with bits logically shifted to the right by the given amount.

#### 参数

##### numBits

`number` \| [`Long`](Long.md)

Number of bits

#### 返回

[`Long`](Long.md)

Shifted Long

#### 继承自

`LongWithoutOverridesClass.shiftRightUnsigned`

***

### shl

> **shl**: (`numBits`) => [`Long`](Long.md)

This is an alias of [Long.shiftLeft](Long.md#shiftleft)

#### 参数

##### numBits

`number` \| [`Long`](Long.md)

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.shl`

***

### shr

> **shr**: (`numBits`) => [`Long`](Long.md)

This is an alias of [Long.shiftRight](Long.md#shiftright)

#### 参数

##### numBits

`number` \| [`Long`](Long.md)

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.shr`

***

### shr\_u

> **shr\_u**: (`numBits`) => [`Long`](Long.md)

This is an alias of [Long.shiftRightUnsigned](Long.md#shiftrightunsigned)

#### 参数

##### numBits

`number` \| [`Long`](Long.md)

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.shr_u`

***

### shru

> **shru**: (`numBits`) => [`Long`](Long.md)

This is an alias of [Long.shiftRightUnsigned](Long.md#shiftrightunsigned)

#### 参数

##### numBits

`number` \| [`Long`](Long.md)

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.shru`

***

### sub

> **sub**: (`subtrahend`) => [`Long`](Long.md)

This is an alias of [Long.subtract](Long.md#subtract)

#### 参数

##### subtrahend

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.sub`

***

### subtract

> **subtract**: (`subtrahend`) => [`Long`](Long.md)

Returns the difference of this and the specified Long.

#### 参数

##### subtrahend

`string` \| `number` \| [`Long`](Long.md) \| `Timestamp`

Subtrahend

#### 返回

[`Long`](Long.md)

Difference

#### 继承自

`LongWithoutOverridesClass.subtract`

***

### toBigInt

> **toBigInt**: () => `bigint`

Converts the Long to a BigInt (arbitrary precision).

#### 返回

`bigint`

#### 继承自

`LongWithoutOverridesClass.toBigInt`

***

### toBytes

> **toBytes**: (`le?`) => `number`[]

Converts this Long to its byte representation.

#### 参数

##### le?

`boolean`

Whether little or big endian, defaults to big endian

#### 返回

`number`[]

Byte representation

#### 继承自

`LongWithoutOverridesClass.toBytes`

***

### toBytesBE

> **toBytesBE**: () => `number`[]

Converts this Long to its big endian byte representation.

#### 返回

`number`[]

Big endian byte representation

#### 继承自

`LongWithoutOverridesClass.toBytesBE`

***

### toBytesLE

> **toBytesLE**: () => `number`[]

Converts this Long to its little endian byte representation.

#### 返回

`number`[]

Little endian byte representation

#### 继承自

`LongWithoutOverridesClass.toBytesLE`

***

### toInt

> **toInt**: () => `number`

Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.

#### 返回

`number`

#### 继承自

`LongWithoutOverridesClass.toInt`

***

### toNumber

> **toNumber**: () => `number`

Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).

#### 返回

`number`

#### 继承自

`LongWithoutOverridesClass.toNumber`

***

### toSigned

> **toSigned**: () => [`Long`](Long.md)

Converts this Long to signed.

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.toSigned`

***

### toString

> **toString**: (`radix?`) => `string`

Converts the Long to a string written in the specified radix.

#### 参数

##### radix?

`number`

Radix (2-36), defaults to 10

#### 返回

`string`

#### 抛出

RangeError If `radix` is out of range

#### 继承自

`LongWithoutOverridesClass.toString`

***

### toUnsigned

> **toUnsigned**: () => [`Long`](Long.md)

Converts this Long to unsigned.

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.toUnsigned`

***

### unsigned

> **unsigned**: `boolean`

#### 继承自

`LongWithoutOverridesClass.unsigned`

***

### xor

> **xor**: (`other`) => [`Long`](Long.md)

Returns the bitwise XOR of this Long and the given one.

#### 参数

##### other

`string` \| `number` \| [`Long`](Long.md)

#### 返回

[`Long`](Long.md)

#### 继承自

`LongWithoutOverridesClass.xor`

***

### MAX\_VALUE

> `readonly` `static` **MAX\_VALUE**: [`Long`](Long.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:968

## 访问器

### \_bsontype

#### Getter 签名

> **get** **\_bsontype**(): `"Timestamp"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:967

##### 返回

`"Timestamp"`

## 方法

### inspect()

> **inspect**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:1005

#### 返回

`string`

***

### toJSON()

> **toJSON**(): `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:984

#### 返回

`object`

##### $timestamp

> **$timestamp**: `string`

***

### fromBits()

> `static` **fromBits**(`lowBits`, `highBits`): `Timestamp`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:997

Returns a Timestamp for the given high and low bits. Each is assumed to use 32 bits.

#### 参数

##### lowBits

`number`

the low 32-bits.

##### highBits

`number`

the high 32-bits.

#### 返回

`Timestamp`

***

### fromInt()

> `static` **fromInt**(`value`): `Timestamp`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:988

Returns a Timestamp represented by the given (32-bit) integer value.

#### 参数

##### value

`number`

#### 返回

`Timestamp`

***

### fromNumber()

> `static` **fromNumber**(`value`): `Timestamp`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:990

Returns a Timestamp representing the given number value, provided that it is a finite number. Otherwise, zero is returned.

#### 参数

##### value

`number`

#### 返回

`Timestamp`

***

### fromString()

> `static` **fromString**(`str`, `optRadix`): `Timestamp`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:1004

Returns a Timestamp from the given string, optionally using the given radix.

#### 参数

##### str

`string`

the textual representation of the Timestamp.

##### optRadix

`number`

the radix in which the text is written.

#### 返回

`Timestamp`
