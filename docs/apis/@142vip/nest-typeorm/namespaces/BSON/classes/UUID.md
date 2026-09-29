[API 参考](../../../../../index.md) / [@142vip/nest-typeorm](../../../index.md) / [BSON](../index.md) / UUID

# 类: UUID

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:1020

A class representation of the BSON UUID type.

## theme_extends

- [`Binary`](Binary.md)

## 构造函数

### 构造函数

> **new UUID**(`input?`): `UUID`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:1027

Create an UUID type

#### 参数

##### input?

`string` \| `Uint8Array`\<`ArrayBufferLike`\> \| `UUID`

Can be a 32 or 36 character hex string (dashes excluded/included) or a 16 byte binary Buffer.

#### 返回

`UUID`

#### 重写了

[`Binary`](Binary.md).[`constructor`](Binary.md#constructor)

## 属性

### buffer

> **buffer**: `Uint8Array`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:28

#### 继承自

[`Binary`](Binary.md).[`buffer`](Binary.md#buffer)

***

### position

> **position**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:30

#### 继承自

[`Binary`](Binary.md).[`position`](Binary.md#position)

***

### sub\_type

> **sub\_type**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:29

#### 继承自

[`Binary`](Binary.md).[`sub_type`](Binary.md#sub-type)

***

### BUFFER\_SIZE

> `readonly` `static` **BUFFER\_SIZE**: `256` = `256`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:9

Initial buffer default size

#### 继承自

[`Binary`](Binary.md).[`BUFFER_SIZE`](Binary.md#buffer-size)

***

### cacheHexString

> `static` **cacheHexString**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:1021

***

### SUBTYPE\_BYTE\_ARRAY

> `readonly` `static` **SUBTYPE\_BYTE\_ARRAY**: `2` = `2`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:15

Byte Array BSON type

#### 继承自

[`Binary`](Binary.md).[`SUBTYPE_BYTE_ARRAY`](Binary.md#subtype-byte-array)

***

### SUBTYPE\_COLUMN

> `readonly` `static` **SUBTYPE\_COLUMN**: `7` = `7`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:25

Column BSON type

#### 继承自

[`Binary`](Binary.md).[`SUBTYPE_COLUMN`](Binary.md#subtype-column)

***

### SUBTYPE\_DEFAULT

> `readonly` `static` **SUBTYPE\_DEFAULT**: `0` = `0`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:11

Default BSON type

#### 继承自

[`Binary`](Binary.md).[`SUBTYPE_DEFAULT`](Binary.md#subtype-default)

***

### SUBTYPE\_ENCRYPTED

> `readonly` `static` **SUBTYPE\_ENCRYPTED**: `6` = `6`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:23

Encrypted BSON type

#### 继承自

[`Binary`](Binary.md).[`SUBTYPE_ENCRYPTED`](Binary.md#subtype-encrypted)

***

### SUBTYPE\_FUNCTION

> `readonly` `static` **SUBTYPE\_FUNCTION**: `1` = `1`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:13

Function BSON type

#### 继承自

[`Binary`](Binary.md).[`SUBTYPE_FUNCTION`](Binary.md#subtype-function)

***

### SUBTYPE\_MD5

> `readonly` `static` **SUBTYPE\_MD5**: `5` = `5`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:21

MD5 BSON type

#### 继承自

[`Binary`](Binary.md).[`SUBTYPE_MD5`](Binary.md#subtype-md5)

***

### SUBTYPE\_USER\_DEFINED

> `readonly` `static` **SUBTYPE\_USER\_DEFINED**: `128` = `128`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:27

User BSON type

#### 继承自

[`Binary`](Binary.md).[`SUBTYPE_USER_DEFINED`](Binary.md#subtype-user-defined)

***

### SUBTYPE\_UUID

> `readonly` `static` **SUBTYPE\_UUID**: `4` = `4`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:19

UUID BSON type

#### 继承自

[`Binary`](Binary.md).[`SUBTYPE_UUID`](Binary.md#subtype-uuid)

***

### ~~SUBTYPE\_UUID\_OLD~~

> `readonly` `static` **SUBTYPE\_UUID\_OLD**: `3` = `3`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:17

Deprecated UUID BSON type

#### 已被弃用

Please use SUBTYPE_UUID

#### 继承自

[`Binary`](Binary.md).[`SUBTYPE_UUID_OLD`](Binary.md#subtype-uuid-old)

## 访问器

### \_bsontype

#### Getter 签名

> **get** **\_bsontype**(): `"Binary"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:7

##### 返回

`"Binary"`

#### 继承自

[`Binary`](Binary.md).[`_bsontype`](Binary.md#bsontype)

***

### id

#### Getter 签名

> **get** **id**(): `Uint8Array`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:1032

The UUID bytes

##### 返回

`Uint8Array`

## 方法

### equals()

> **equals**(`otherId`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:1053

Compares the equality of this UUID with `otherID`.

#### 参数

##### otherId

`string` \| `Uint8Array`\<`ArrayBufferLike`\> \| `UUID`

UUID instance to compare against.

#### 返回

`boolean`

***

### inspect()

> **inspect**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:1074

#### 返回

`string`

#### 重写了

[`Binary`](Binary.md).[`inspect`](Binary.md#inspect)

***

### length()

> **length**(): `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:71

the length of the binary sequence

#### 返回

`number`

#### 继承自

[`Binary`](Binary.md).[`length`](Binary.md#length)

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

#### 继承自

[`Binary`](Binary.md).[`put`](Binary.md#put)

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

#### 继承自

[`Binary`](Binary.md).[`read`](Binary.md#read)

***

### toBinary()

> **toBinary**(): [`Binary`](Binary.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:1057

Creates a Binary instance from the current UUID.

#### 返回

[`Binary`](Binary.md)

***

### toHexString()

> **toHexString**(`includeDashes?`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:1038

Returns the UUID id as a 32 or 36 character hex string representation, excluding/including dashes (defaults to 36 character dash separated)

#### 参数

##### includeDashes?

`boolean`

should the string exclude dash-separators.

#### 返回

`string`

***

### toJSON()

> **toJSON**(): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:1047

Converts the id into its JSON string representation.
A 36 character (dashes included) hex string in the format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

#### 返回

`string`

#### 重写了

[`Binary`](Binary.md).[`toJSON`](Binary.md#tojson)

***

### toString()

> **toString**(`encoding?`): `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:1042

Converts the id into a 36 character (dashes included) hex string, unless a encoding is specified.

#### 参数

##### encoding?

`"base64"` \| `"hex"`

#### 返回

`string`

#### 重写了

[`Binary`](Binary.md).[`toString`](Binary.md#tostring)

***

### toUUID()

> **toUUID**(): `UUID`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:74

#### 返回

`UUID`

#### 继承自

[`Binary`](Binary.md).[`toUUID`](Binary.md#touuid)

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

#### 继承自

[`Binary`](Binary.md).[`value`](Binary.md#value)

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

#### 继承自

[`Binary`](Binary.md).[`write`](Binary.md#write)

***

### createFromBase64()

> `static` **createFromBase64**(`base64`): `UUID`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:1073

Creates an UUID from a base64 string representation of an UUID.

#### 参数

##### base64

`string`

#### 返回

`UUID`

#### 重写了

[`Binary`](Binary.md).[`createFromBase64`](Binary.md#createfrombase64)

***

### createFromHexString()

> `static` **createFromHexString**(`hexString`): `UUID`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:1071

Creates an UUID from a hex string representation of an UUID.

#### 参数

##### hexString

`string`

32 or 36 character hex string (dashes excluded/included).

#### 返回

`UUID`

#### 重写了

[`Binary`](Binary.md).[`createFromHexString`](Binary.md#createfromhexstring)

***

### generate()

> `static` **generate**(): `Uint8Array`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:1061

Generates a populated buffer containing a v4 uuid

#### 返回

`Uint8Array`

***

### isValid()

> `static` **isValid**(`input`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:1066

Checks if a value is a valid bson UUID

#### 参数

##### input

`string` \| `Uint8Array`\<`ArrayBufferLike`\> \| `UUID`

UUID, string or Buffer to validate.

#### 返回

`boolean`
