[API 参考](../../../../../index.md) / [@142vip/nest-typeorm](../../../index.md) / [BSON](../index.md) / Binary

# 类: Binary

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:6

A class representation of the BSON Binary type.

## theme_extends

- [`BSONValue`](BSONValue.md)

## theme_extended_by

- [`UUID`](UUID.md)

## 构造函数

### 构造函数

> **new Binary**(`buffer?`, `subType?`): `Binary`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:42

Create a new Binary instance.

This constructor can accept a string as its first argument. In this case,
this string will be encoded using ISO-8859-1, **not** using UTF-8.
This is almost certainly not what you want. Use `new Binary(Buffer.from(string))`
instead to convert the string to a Buffer using UTF-8 first.

#### 参数

##### buffer?

`string` \| [`BinarySequence`](../type-aliases/BinarySequence.md)

a buffer object containing the binary data.

##### subType?

`number`

the option binary type.

#### 返回

`Binary`

#### 重写了

[`BSONValue`](BSONValue.md).[`constructor`](BSONValue.md#constructor)

## 属性

### buffer

> **buffer**: `Uint8Array`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:28

***

### position

> **position**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:30

***

### sub\_type

> **sub\_type**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:29

***

### BUFFER\_SIZE

> `readonly` `static` **BUFFER\_SIZE**: `256` = `256`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:9

Initial buffer default size

***

### SUBTYPE\_BYTE\_ARRAY

> `readonly` `static` **SUBTYPE\_BYTE\_ARRAY**: `2` = `2`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:15

Byte Array BSON type

***

### SUBTYPE\_COLUMN

> `readonly` `static` **SUBTYPE\_COLUMN**: `7` = `7`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:25

Column BSON type

***

### SUBTYPE\_DEFAULT

> `readonly` `static` **SUBTYPE\_DEFAULT**: `0` = `0`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:11

Default BSON type

***

### SUBTYPE\_ENCRYPTED

> `readonly` `static` **SUBTYPE\_ENCRYPTED**: `6` = `6`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:23

Encrypted BSON type

***

### SUBTYPE\_FUNCTION

> `readonly` `static` **SUBTYPE\_FUNCTION**: `1` = `1`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:13

Function BSON type

***

### SUBTYPE\_MD5

> `readonly` `static` **SUBTYPE\_MD5**: `5` = `5`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:21

MD5 BSON type

***

### SUBTYPE\_USER\_DEFINED

> `readonly` `static` **SUBTYPE\_USER\_DEFINED**: `128` = `128`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:27

User BSON type

***

### SUBTYPE\_UUID

> `readonly` `static` **SUBTYPE\_UUID**: `4` = `4`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:19

UUID BSON type

***

### ~~SUBTYPE\_UUID\_OLD~~

> `readonly` `static` **SUBTYPE\_UUID\_OLD**: `3` = `3`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:17

Deprecated UUID BSON type

#### 已被弃用

Please use SUBTYPE_UUID

## 访问器

### \_bsontype

#### Getter 签名

> **get** **\_bsontype**(): `"Binary"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:7

##### 返回

`"Binary"`

#### 重写了

[`BSONValue`](BSONValue.md).[`_bsontype`](BSONValue.md#bsontype)

## 方法

### inspect()

> **inspect**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:79

#### 返回

`string`

#### 重写了

[`BSONValue`](BSONValue.md).[`inspect`](BSONValue.md#inspect)

***

### length()

> **length**(): `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:71

the length of the binary sequence

#### 返回

`number`

***

### put()

> **put**(`byteValue`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:48

Updates this binary with byte_value.

#### 参数

##### byteValue

`string` \| `number` \| `Uint8Array`\<`ArrayBufferLike`\> \| `number`[]

a single byte we wish to write.

#### 返回

`void`

***

### read()

> **read**(`position`, `length`): [`BinarySequence`](../type-aliases/BinarySequence.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:62

Reads **length** bytes starting at **position**.

#### 参数

##### position

`number`

read from the given position in the Binary.

##### length

`number`

the number of bytes to read.

#### 返回

[`BinarySequence`](../type-aliases/BinarySequence.md)

***

### toJSON()

> **toJSON**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:72

#### 返回

`string`

***

### toString()

> **toString**(`encoding?`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:73

Returns a string representation of an object.

#### 参数

##### encoding?

`"utf8"` \| `"utf-8"` \| `"base64"` \| `"hex"`

#### 返回

`string`

***

### toUUID()

> **toUUID**(): [`UUID`](UUID.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:74

#### 返回

[`UUID`](UUID.md)

***

### value()

> **value**(`asRaw?`): `string` \| [`BinarySequence`](../type-aliases/BinarySequence.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:69

Returns the value of this binary as a string.

#### 参数

##### asRaw?

`boolean`

Will skip converting to a string

#### 返回

`string` \| [`BinarySequence`](../type-aliases/BinarySequence.md)

#### 备注

This is handy when calling this function conditionally for some key value pairs and not others

***

### write()

> **write**(`sequence`, `offset`): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:55

Writes a buffer or string to the binary.

#### 参数

##### sequence

`string` \| [`BinarySequence`](../type-aliases/BinarySequence.md)

a string or buffer to be written to the Binary BSON object.

##### offset

`number`

specify the binary of where to write the content.

#### 返回

`void`

***

### createFromBase64()

> `static` **createFromBase64**(`base64`, `subType?`): `Binary`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:78

Creates an Binary instance from a base64 string

#### 参数

##### base64

`string`

##### subType?

`number`

#### 返回

`Binary`

***

### createFromHexString()

> `static` **createFromHexString**(`hex`, `subType?`): `Binary`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:76

Creates an Binary instance from a hex digit string

#### 参数

##### hex

`string`

##### subType?

`number`

#### 返回

`Binary`
