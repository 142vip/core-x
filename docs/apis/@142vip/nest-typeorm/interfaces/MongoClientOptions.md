[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / MongoClientOptions

# 接口: MongoClientOptions

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3630

Describes all possible URI query options for the mongo client

## 参阅

https://www.mongodb.com/docs/manual/reference/connection-string

## theme_extends

- [`BSONSerializeOptions`](BSONSerializeOptions.md).[`SupportedNodeConnectionOptions`](../type-aliases/SupportedNodeConnectionOptions.md)

## 属性

### ALPNProtocols?

> `optional` **ALPNProtocols?**: `string`[] \| `Uint8Array`\<`ArrayBufferLike`\> \| `Uint8Array`\<`ArrayBufferLike`\>[]

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/tls.d.ts:526

An array of strings or a Buffer naming possible ALPN protocols.
(Protocols should be ordered by their priority.)

#### 继承自

`SupportedNodeConnectionOptions.ALPNProtocols`

***

### appName?

> `optional` **appName?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3706

The name of the application that created this MongoClient instance. MongoDB 3.4 and newer will print this value in the server log upon establishing each connection. It is also recorded in the slow query log and profile collections

***

### auth?

> `optional` **auth?**: [`Auth`](Auth.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3690

The auth settings for when connection to server.

***

### authMechanism?

> `optional` **authMechanism?**: [`AuthMechanism`](../type-aliases/AuthMechanism.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3694

Specify the authentication mechanism that MongoDB will use to authenticate the connection.

***

### authMechanismProperties?

> `optional` **authMechanismProperties?**: [`AuthMechanismProperties`](AuthMechanismProperties.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3696

Specify properties for the specified authMechanism as a comma-separated list of colon-separated key-value pairs.

***

### authSource?

> `optional` **authSource?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3692

Specify the database name associated with the user’s credentials.

***

### autoEncryption?

> `optional` **autoEncryption?**: [`AutoEncryptionOptions`](AutoEncryptionOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3778

Optionally enable in-use auto encryption

#### 备注

Automatic encryption is an enterprise only feature that only applies to operations on a collection. Automatic encryption is not supported for operations on a database or view, and operations that are not bypassed will result in error
 (see [libmongocrypt: Auto Encryption Allow-List](https://github.com/mongodb/specifications/blob/master/source/client-side-encryption/client-side-encryption.rst#libmongocrypt-auto-encryption-allow-list)). To bypass automatic encryption for all operations, set bypassAutoEncryption=true in AutoEncryptionOpts.

 Automatic encryption requires the authenticated user to have the [listCollections privilege action](https://www.mongodb.com/docs/manual/reference/command/listCollections/#dbcmd.listCollections).

 If a MongoClient with a limited connection pool size (i.e a non-zero maxPoolSize) is configured with AutoEncryptionOptions, a separate internal MongoClient is created if any of the following are true:
 - AutoEncryptionOptions.keyVaultClient is not passed.
 - AutoEncryptionOptions.bypassAutomaticEncryption is false.

If an internal MongoClient is created, it is configured with the same options as the parent MongoClient except minPoolSize is set to 0 and AutoEncryptionOptions is omitted.

***

### bsonRegExp?

> `optional` **bsonRegExp?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:331

return BSON regular expressions as BSONRegExp instances.

#### 继承自

[`DeserializeOptions`](../namespaces/BSON/interfaces/DeserializeOptions.md).[`bsonRegExp`](../namespaces/BSON/interfaces/DeserializeOptions.md#bsonregexp)

***

### ca?

> `optional` **ca?**: `string` \| `Buffer`\<`ArrayBufferLike`\> \| (`string` \| `Buffer`\<`ArrayBufferLike`\>)[]

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/tls.d.ts:823

Optionally override the trusted CA certificates. Default is to trust
the well-known CAs curated by Mozilla. Mozilla's CAs are completely
replaced when CAs are explicitly specified using this option.

#### 继承自

`SupportedNodeConnectionOptions.ca`

***

### cert?

> `optional` **cert?**: `string` \| `Buffer`\<`ArrayBufferLike`\> \| (`string` \| `Buffer`\<`ArrayBufferLike`\>)[]

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/tls.d.ts:835

Cert chains in PEM format. One cert chain should be provided per
 private key. Each cert chain should consist of the PEM formatted
 certificate for a provided private key, followed by the PEM
 formatted intermediate certificates (if any), in order, and not
 including the root CA (the root CA must be pre-known to the peer,
 see ca). When providing multiple cert chains, they do not have to
 be in the same order as their private keys in key. If the
 intermediate certificates are not provided, the peer will not be
 able to validate the certificate, and the handshake will fail.

#### 继承自

`SupportedNodeConnectionOptions.cert`

***

### checkKeys?

> `optional` **checkKeys?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:913

the serializer will check if keys are valid.

#### 继承自

[`SerializeOptions`](../namespaces/BSON/interfaces/SerializeOptions.md).[`checkKeys`](../namespaces/BSON/interfaces/SerializeOptions.md#checkkeys)

***

### checkServerIdentity?

> `optional` **checkServerIdentity?**: (`hostname`, `cert`) => `Error` \| `undefined`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/tls.d.ts:599

Verifies the certificate `cert` is issued to `hostname`.

Returns [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object, populating it with `reason`, `host`, and `cert` on
failure. On success, returns [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Undefined_type).

This function is intended to be used in combination with the`checkServerIdentity` option that can be passed to connect and as
such operates on a `certificate object`. For other purposes, consider using `x509.checkHost()` instead.

This function can be overwritten by providing an alternative function as the `options.checkServerIdentity` option that is passed to `tls.connect()`. The
overwriting function can call `tls.checkServerIdentity()` of course, to augment
the checks done with additional verification.

This function is only called if the certificate passed all other checks, such as
being issued by trusted CA (`options.ca`).

Earlier versions of Node.js incorrectly accepted certificates for a given`hostname` if a matching `uniformResourceIdentifier` subject alternative name
was present (see [CVE-2021-44531](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44531)). Applications that wish to accept`uniformResourceIdentifier` subject alternative names can use
a custom `options.checkServerIdentity` function that implements the desired behavior.

#### 参数

##### hostname

`string`

The host name or IP address to verify the certificate against.

##### cert

`PeerCertificate`

A `certificate object` representing the peer's certificate.

#### 返回

`Error` \| `undefined`

#### 添加于

v0.8.4

#### 继承自

`SupportedNodeConnectionOptions.checkServerIdentity`

***

### ciphers?

> `optional` **ciphers?**: `string`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/tls.d.ts:849

Cipher suite specification, replacing the default. For more
information, see modifying the default cipher suite. Permitted
ciphers can be obtained via tls.getCiphers(). Cipher names must be
uppercased in order for OpenSSL to accept them.

#### 继承自

`SupportedNodeConnectionOptions.ciphers`

***

### compressors?

> `optional` **compressors?**: `string` \| (`"none"` \| `"snappy"` \| `"zlib"` \| `"zstd"`)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3656

An array or comma-delimited string of compressors to enable network compression for communication between this client and a mongod/mongos instance.

***

### connectTimeoutMS?

> `optional` **connectTimeoutMS?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3652

The time in milliseconds to attempt a connection before timing out.

***

### crl?

> `optional` **crl?**: `string` \| `Buffer`\<`ArrayBufferLike`\> \| (`string` \| `Buffer`\<`ArrayBufferLike`\>)[]

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/tls.d.ts:858

PEM formatted CRLs (Certificate Revocation Lists).

#### 继承自

`SupportedNodeConnectionOptions.crl`

***

### directConnection?

> `optional` **directConnection?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3712

Allow a driver to force a Single topology type with a connection string containing one host

***

### driverInfo?

> `optional` **driverInfo?**: [`DriverInfo`](DriverInfo.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3780

Allows a wrapping driver to amend the client metadata generated by the driver to include information about the wrapping driver

***

### ecdhCurve?

> `optional` **ecdhCurve?**: `string`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/tls.d.ts:874

A string describing a named curve or a colon separated list of curve
NIDs or names, for example P-521:P-384:P-256, to use for ECDH key
agreement. Set to auto to select the curve automatically. Use
crypto.getCurves() to obtain a list of available curve names. On
recent releases, openssl ecparam -list_curves will also display the
name and description of each available elliptic curve. Default:
tls.DEFAULT_ECDH_CURVE.

#### 继承自

`SupportedNodeConnectionOptions.ecdhCurve`

***

### enableUtf8Validation?

> `optional` **enableUtf8Validation?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:710

Enable utf8 validation when deserializing BSON documents.  Defaults to true.

#### 继承自

[`BSONSerializeOptions`](BSONSerializeOptions.md).[`enableUtf8Validation`](BSONSerializeOptions.md#enableutf8validation)

***

### family?

> `optional` **family?**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/net.d.ts:55

#### 继承自

`SupportedNodeConnectionOptions.family`

***

### fieldsAsRaw?

> `optional` **fieldsAsRaw?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:329

allow to specify if there what fields we wish to return as unserialized raw buffer.

#### 继承自

[`DeserializeOptions`](../namespaces/BSON/interfaces/DeserializeOptions.md).[`fieldsAsRaw`](../namespaces/BSON/interfaces/DeserializeOptions.md#fieldsasraw)

***

### forceServerObjectId?

> `optional` **forceServerObjectId?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3756

Force server to assign `_id` values instead of driver

***

### heartbeatFrequencyMS?

> `optional` **heartbeatFrequencyMS?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3702

heartbeatFrequencyMS controls when the driver checks the state of the MongoDB deployment. Specify the interval (in milliseconds) between checks, counted from the end of the previous check until the beginning of the next one.

***

### hints?

> `optional` **hints?**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/net.d.ts:54

#### 继承自

`SupportedNodeConnectionOptions.hints`

***

### ignoreUndefined?

> `optional` **ignoreUndefined?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:917

serialize will not emit undefined fields **(default:true)**

#### 继承自

[`SerializeOptions`](../namespaces/BSON/interfaces/SerializeOptions.md).[`ignoreUndefined`](../namespaces/BSON/interfaces/SerializeOptions.md#ignoreundefined)

***

### ~~journal?~~

> `optional` **journal?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3729

The journal write concern

#### 已被弃用

Please use the `writeConcern` option instead

***

### keepAlive?

> `optional` **keepAlive?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3752

TCP Connection keep alive enabled

***

### keepAliveInitialDelay?

> `optional` **keepAliveInitialDelay?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3754

The number of milliseconds to wait before initiating keepAlive on the TCP socket

***

### key?

> `optional` **key?**: `string` \| `Buffer`\<`ArrayBufferLike`\> \| (`string` \| `Buffer`\<`ArrayBufferLike`\> \| `KeyObject`)[]

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/tls.d.ts:891

Private keys in PEM format. PEM allows the option of private keys
being encrypted. Encrypted keys will be decrypted with
options.passphrase. Multiple keys using different algorithms can be
provided either as an array of unencrypted key strings or buffers,
or an array of objects in the form \{pem: \<string|buffer\>[,
passphrase: \<string\>]\}. The object form can only occur in an array.
object.passphrase is optional. Encrypted keys will be decrypted with
object.passphrase if provided, or options.passphrase if it is not.

#### 继承自

`SupportedNodeConnectionOptions.key`

***

### loadBalanced?

> `optional` **loadBalanced?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3714

Instruct the driver it is connecting to a load balancer fronting a mongos like service

***

### localAddress?

> `optional` **localAddress?**: `string`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/net.d.ts:52

#### 继承自

`SupportedNodeConnectionOptions.localAddress`

***

### localPort?

> `optional` **localPort?**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/net.d.ts:53

#### 继承自

`SupportedNodeConnectionOptions.localPort`

***

### localThresholdMS?

> `optional` **localThresholdMS?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3698

The size (in milliseconds) of the latency window for selecting among multiple suitable MongoDB instances.

***

### lookup?

> `optional` **lookup?**: `LookupFunction`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/net.d.ts:56

#### 继承自

`SupportedNodeConnectionOptions.lookup`

***

### maxConnecting?

> `optional` **maxConnecting?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3674

The maximum number of connections that may be in the process of being established concurrently by the connection pool.

***

### maxIdleTimeMS?

> `optional` **maxIdleTimeMS?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3676

The maximum number of milliseconds that a connection can remain idle in the pool before being removed and closed.

***

### maxPoolSize?

> `optional` **maxPoolSize?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3670

The maximum number of connections in the connection pool.

***

### maxStalenessSeconds?

> `optional` **maxStalenessSeconds?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3686

Specifies, in seconds, how stale a secondary can be before the client stops using it for read operations.

***

### minDHSize?

> `optional` **minDHSize?**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/tls.d.ts:602

#### 继承自

`SupportedNodeConnectionOptions.minDHSize`

***

### minHeartbeatFrequencyMS?

> `optional` **minHeartbeatFrequencyMS?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3704

Sets the minimum heartbeat frequency. In the event that the driver has to frequently re-check a server's availability, it will wait at least this long since the previous check to avoid wasted effort.

***

### minPoolSize?

> `optional` **minPoolSize?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3672

The minimum number of connections in the connection pool.

***

### monitorCommands?

> `optional` **monitorCommands?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3760

Enable command monitoring for this client

***

### noDelay?

> `optional` **noDelay?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3750

TCP Connection no delay

***

### passphrase?

> `optional` **passphrase?**: `string`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/tls.d.ts:928

Shared passphrase used for a single private key and/or a PFX.

#### 继承自

`SupportedNodeConnectionOptions.passphrase`

***

### pfx?

> `optional` **pfx?**: `string` \| `Buffer`\<`ArrayBufferLike`\> \| (`string` \| `Buffer`\<`ArrayBufferLike`\> \| `PxfObject`)[]

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/tls.d.ts:939

PFX or PKCS12 encoded private key and certificate chain. pfx is an
alternative to providing key and cert individually. PFX is usually
encrypted, if it is, passphrase will be used to decrypt it. Multiple
PFX can be provided either as an array of unencrypted PFX buffers,
or an array of objects in the form \{buf: \<string|buffer\>[,
passphrase: \<string\>]\}. The object form can only occur in an array.
object.passphrase is optional. Encrypted PFX will be decrypted with
object.passphrase if provided, or options.passphrase if it is not.

#### 继承自

`SupportedNodeConnectionOptions.pfx`

***

### pkFactory?

> `optional` **pkFactory?**: [`PkFactory`](PkFactory.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3758

A primary key factory function for generation of custom `_id` keys

***

### promoteBuffers?

> `optional` **promoteBuffers?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:325

when deserializing a Binary will return it as a node.js Buffer instance.

#### 继承自

[`DeserializeOptions`](../namespaces/BSON/interfaces/DeserializeOptions.md).[`promoteBuffers`](../namespaces/BSON/interfaces/DeserializeOptions.md#promotebuffers)

***

### promoteLongs?

> `optional` **promoteLongs?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:323

when deserializing a Long will fit it into a Number if it's smaller than 53 bits.

#### 继承自

[`DeserializeOptions`](../namespaces/BSON/interfaces/DeserializeOptions.md).[`promoteLongs`](../namespaces/BSON/interfaces/DeserializeOptions.md#promotelongs)

***

### promoteValues?

> `optional` **promoteValues?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:327

when deserializing will promote BSON values to their Node.js closest equivalent types.

#### 继承自

[`DeserializeOptions`](../namespaces/BSON/interfaces/DeserializeOptions.md).[`promoteValues`](../namespaces/BSON/interfaces/DeserializeOptions.md#promotevalues)

***

### proxyHost?

> `optional` **proxyHost?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3782

Configures a Socks5 proxy host used for creating TCP connections.

***

### proxyPassword?

> `optional` **proxyPassword?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3788

Configures a Socks5 proxy password when the proxy in proxyHost requires username/password authentication.

***

### proxyPort?

> `optional` **proxyPort?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3784

Configures a Socks5 proxy port used for creating TCP connections.

***

### proxyUsername?

> `optional` **proxyUsername?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3786

Configures a Socks5 proxy username when the proxy in proxyHost requires username/password authentication.

***

### raw?

> `optional` **raw?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:708

Enabling the raw option will return a [Node.js Buffer](https://nodejs.org/api/buffer.html)
which is allocated using [allocUnsafe API](https://nodejs.org/api/buffer.html#static-method-bufferallocunsafesize).
See this section from the [Node.js Docs here](https://nodejs.org/api/buffer.html#what-makes-bufferallocunsafe-and-bufferallocunsafeslow-unsafe)
for more detail about what "unsafe" refers to in this context.
If you need to maintain your own editable clone of the bytes returned for an extended life time of the process, it is recommended you allocate
your own buffer and clone the contents:

#### 示例

```ts
const raw = await collection.findOne({}, { raw: true });
const myBuffer = Buffer.alloc(raw.byteLength);
myBuffer.set(raw, 0);
// Only save and use `myBuffer` beyond this point
```

#### 备注

Please note there is a known limitation where this option cannot be used at the MongoClient level (see [NODE-3946](https://jira.mongodb.org/browse/NODE-3946)).
It does correctly work at `Db`, `Collection`, and per operation the same as other BSON options work.

#### 继承自

[`BSONSerializeOptions`](BSONSerializeOptions.md).[`raw`](BSONSerializeOptions.md#raw)

***

### readConcern?

> `optional` **readConcern?**: [`ReadConcernLike`](../type-aliases/ReadConcernLike.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3680

Specify a read concern for the collection (only MongoDB 3.2 or higher supported)

***

### readConcernLevel?

> `optional` **readConcernLevel?**: [`ReadConcernLevel`](../type-aliases/ReadConcernLevel.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3682

The level of isolation

***

### readPreference?

> `optional` **readPreference?**: [`ReadPreference`](../classes/ReadPreference.md) \| [`ReadPreferenceMode`](../type-aliases/ReadPreferenceMode.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3684

Specifies the read preferences for this connection

***

### readPreferenceTags?

> `optional` **readPreferenceTags?**: [`TagSet`](../type-aliases/TagSet.md)[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3688

Specifies the tags document as a comma-separated list of colon-separated key-value pairs.

***

### rejectUnauthorized?

> `optional` **rejectUnauthorized?**: `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/tls.d.ts:543

If true the server will reject any connection which is not
authorized with the list of supplied CAs. This option only has an
effect if requestCert is true.

#### 默认值

```ts
true
```

#### 继承自

`SupportedNodeConnectionOptions.rejectUnauthorized`

***

### replicaSet?

> `optional` **replicaSet?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3632

Specifies the name of the replica set, if the mongod is a member of a replica set.

***

### retryReads?

> `optional` **retryReads?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3708

Enables retryable reads.

***

### retryWrites?

> `optional` **retryWrites?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3710

Enable retryable writes.

***

### secureContext?

> `optional` **secureContext?**: `SecureContext`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/tls.d.ts:509

An optional TLS context object from tls.createSecureContext()

#### 继承自

`SupportedNodeConnectionOptions.secureContext`

***

### secureProtocol?

> `optional` **secureProtocol?**: `string`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/tls.d.ts:957

Legacy mechanism to select the TLS protocol version to use, it does
not support independent control of the minimum and maximum version,
and does not support limiting the protocol to TLSv1.3. Use
minVersion and maxVersion instead. The possible values are listed as
SSL_METHODS, use the function names as strings. For example, use
'TLSv1_1_method' to force TLS version 1.1, or 'TLS_method' to allow
any TLS protocol version up to TLSv1.3. It is not recommended to use
TLS versions less than 1.2, but it may be required for
interoperability. Default: none, see minVersion.

#### 继承自

`SupportedNodeConnectionOptions.secureProtocol`

***

### serializeFunctions?

> `optional` **serializeFunctions?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:915

serialize the javascript functions **(default:false)**.

#### 继承自

[`SerializeOptions`](../namespaces/BSON/interfaces/SerializeOptions.md).[`serializeFunctions`](../namespaces/BSON/interfaces/SerializeOptions.md#serializefunctions)

***

### serverApi?

> `optional` **serverApi?**: [`ServerApi`](ServerApi.md) \| `"1"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3762

Server API version

***

### servername?

> `optional` **servername?**: `string`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/tls.d.ts:600

#### 继承自

`SupportedNodeConnectionOptions.servername`

***

### serverSelectionTimeoutMS?

> `optional` **serverSelectionTimeoutMS?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3700

Specifies how long (in milliseconds) to block for server selection before throwing an exception.

***

### session?

> `optional` **session?**: `Buffer`\<`ArrayBufferLike`\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/tls.d.ts:601

An optional Buffer instance containing a TLS session.

#### 继承自

`SupportedNodeConnectionOptions.session`

***

### socketTimeoutMS?

> `optional` **socketTimeoutMS?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3654

The time in milliseconds to attempt a send or receive on a socket before the attempt times out.

***

### srvMaxHosts?

> `optional` **srvMaxHosts?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3660

The maximum number of hosts to connect to when using an srv connection string, a setting of `0` means unlimited hosts

***

### srvServiceName?

> `optional` **srvServiceName?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3668

Modifies the srv URI to look like:

`_{srvServiceName}._tcp.{hostname}.{domainname}`

Querying this DNS URI is expected to respond with SRV records

***

### ssl?

> `optional` **ssl?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3636

A boolean to enable or disables TLS/SSL for the connection. (The ssl option is equivalent to the tls option.)

***

### sslCA?

> `optional` **sslCA?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3740

SSL Certificate file path.

***

### sslCert?

> `optional` **sslCert?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3742

SSL Certificate file path.

***

### sslCRL?

> `optional` **sslCRL?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3748

SSL Certificate revocation list file path.

***

### sslKey?

> `optional` **sslKey?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3744

SSL Key file file path.

***

### sslPass?

> `optional` **sslPass?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3746

SSL Certificate pass phrase.

***

### sslValidate?

> `optional` **sslValidate?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3738

Validate mongod server certificate against Certificate Authority

***

### tls?

> `optional` **tls?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3634

Enables or disables TLS/SSL for the connection.

***

### tlsAllowInvalidCertificates?

> `optional` **tlsAllowInvalidCertificates?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3646

Bypasses validation of the certificates presented by the mongod/mongos instance

***

### tlsAllowInvalidHostnames?

> `optional` **tlsAllowInvalidHostnames?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3648

Disables hostname validation of the certificate presented by the mongod/mongos instance.

***

### tlsCAFile?

> `optional` **tlsCAFile?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3644

Specifies the location of a local .pem file that contains the root certificate chain from the Certificate Authority. This file is used to validate the certificate presented by the mongod/mongos instance.

***

### tlsCertificateFile?

> `optional` **tlsCertificateFile?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3638

Specifies the location of a local TLS Certificate

***

### tlsCertificateKeyFile?

> `optional` **tlsCertificateKeyFile?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3640

Specifies the location of a local .pem file that contains either the client's TLS/SSL certificate and key or only the client's TLS/SSL key when tlsCertificateFile is used to provide the certificate.

***

### tlsCertificateKeyFilePassword?

> `optional` **tlsCertificateKeyFilePassword?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3642

Specifies the password to de-crypt the tlsCertificateKeyFile.

***

### tlsInsecure?

> `optional` **tlsInsecure?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3650

Disables various certificate validations.

***

### useBigInt64?

> `optional` **useBigInt64?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/bson.typings.d.ts:321

when deserializing a Long will return as a BigInt.

#### 继承自

[`DeserializeOptions`](../namespaces/BSON/interfaces/DeserializeOptions.md).[`useBigInt64`](../namespaces/BSON/interfaces/DeserializeOptions.md#usebigint64)

***

### ~~w?~~

> `optional` **w?**: [`W`](../type-aliases/W.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3719

The write concern w value

#### 已被弃用

Please use the `writeConcern` option instead

***

### waitQueueTimeoutMS?

> `optional` **waitQueueTimeoutMS?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3678

The maximum time in milliseconds that a thread can wait for a connection to become available.

***

### writeConcern?

> `optional` **writeConcern?**: [`WriteConcern`](../classes/WriteConcern.md) \| [`WriteConcernSettings`](WriteConcernSettings.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3736

A MongoDB WriteConcern, which describes the level of acknowledgement
requested from MongoDB for write operations.

#### 参阅

https://www.mongodb.com/docs/manual/reference/write-concern/

***

### ~~wtimeoutMS?~~

> `optional` **wtimeoutMS?**: `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3724

The write concern timeout

#### 已被弃用

Please use the `writeConcern` option instead

***

### zlibCompressionLevel?

> `optional` **zlibCompressionLevel?**: `0` \| `1` \| `3` \| `2` \| `6` \| `4` \| `5` \| `8` \| `9` \| `7`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3658

An integer that specifies the compression level if using zlib for network compression.
