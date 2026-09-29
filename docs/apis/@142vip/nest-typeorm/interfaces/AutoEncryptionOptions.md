[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / AutoEncryptionOptions

# 接口: AutoEncryptionOptions

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:482

## 属性

### bypassAutoEncryption?

> `optional` **bypassAutoEncryption?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:571

Allows the user to bypass auto encryption, maintaining implicit decryption

***

### bypassQueryAnalysis?

> `optional` **bypassQueryAnalysis?**: `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:573

**`Experimental`**

Public Technical Preview: Allows users to bypass query analysis

***

### encryptedFieldsMap?

> `optional` **encryptedFieldsMap?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:569

**`Experimental`**

Public Technical Preview: Supply a schema for the encrypted fields in the document

***

### extraOptions?

> `optional` **extraOptions?**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:578

#### cryptSharedLibPath?

> `optional` **cryptSharedLibPath?**: `string`

Full path to a MongoDB Crypt shared library to be used (instead of mongocryptd).

This needs to be the path to the file itself, not a directory.
It can be an absolute or relative path. If the path is relative and
its first component is `$ORIGIN`, it will be replaced by the directory
containing the mongodb-client-encryption native addon file. Otherwise,
the path will be interpreted relative to the current working directory.

Currently, loading different MongoDB Crypt shared library files from different
MongoClients in the same process is not supported.

If this option is provided and no MongoDB Crypt shared library could be loaded
from the specified location, creating the MongoClient will fail.

If this option is not provided and `cryptSharedLibRequired` is not specified,
the AutoEncrypter will attempt to spawn and/or use mongocryptd according
to the mongocryptd-specific `extraOptions` options.

Specifying a path prevents mongocryptd from being used as a fallback.

Requires the MongoDB Crypt shared library, available in MongoDB 6.0 or higher.

#### cryptSharedLibRequired?

> `optional` **cryptSharedLibRequired?**: `boolean`

If specified, never use mongocryptd and instead fail when the MongoDB Crypt
shared library could not be loaded.

This is always true when `cryptSharedLibPath` is specified.

Requires the MongoDB Crypt shared library, available in MongoDB 6.0 or higher.

#### mongocryptdBypassSpawn?

> `optional` **mongocryptdBypassSpawn?**: `boolean`

If true, autoEncryption will not attempt to spawn a mongocryptd before connecting

#### mongocryptdSpawnArgs?

> `optional` **mongocryptdSpawnArgs?**: `string`[]

Command line arguments to use when auto-spawning a mongocryptd

#### mongocryptdSpawnPath?

> `optional` **mongocryptdSpawnPath?**: `string`

The path to the mongocryptd executable on the system

#### mongocryptdURI?

> `optional` **mongocryptdURI?**: `string`

A local process the driver communicates with to determine how to encrypt values in a command.
Defaults to "mongodb://%2Fvar%2Fmongocryptd.sock" if domain sockets are available or "mongodb://localhost:27020" otherwise

***

### keyVaultClient?

> `optional` **keyVaultClient?**: [`MongoClient`](../classes/MongoClient.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:484

A `MongoClient` used to fetch keys from a key vault

***

### keyVaultNamespace?

> `optional` **keyVaultNamespace?**: `string`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:486

The namespace where keys are stored in the key vault

***

### kmsProviders?

> `optional` **kmsProviders?**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:488

Configuration options that are used by specific KMS providers during key generation, encryption, and decryption.

#### aws?

> `optional` **aws?**: \{ `accessKeyId`: `string`; `secretAccessKey`: `string`; `sessionToken?`: `string`; \} \| `Record`\<`string`, `never`\>

Configuration options for using 'aws' as your KMS provider

##### theme_union_members

###### 类型字面量

\{ `accessKeyId`: `string`; `secretAccessKey`: `string`; `sessionToken?`: `string`; \}

###### accessKeyId

> **accessKeyId**: `string`

The access key used for the AWS KMS provider

###### secretAccessKey

> **secretAccessKey**: `string`

The secret access key used for the AWS KMS provider

###### sessionToken?

> `optional` **sessionToken?**: `string`

An optional AWS session token that will be used as the
X-Amz-Security-Token header for AWS requests.

***

`Record`\<`string`, `never`\>

#### azure?

> `optional` **azure?**: `Record`\<`string`, `never`\> \| \{ `clientId`: `string`; `clientSecret`: `string`; `identityPlatformEndpoint?`: `string`; `tenantId`: `string`; \} \| \{ `accessToken`: `string`; \}

Configuration options for using 'azure' as your KMS provider

##### theme_union_members

`Record`\<`string`, `never`\>

***

###### 类型字面量

\{ `clientId`: `string`; `clientSecret`: `string`; `identityPlatformEndpoint?`: `string`; `tenantId`: `string`; \}

###### clientId

> **clientId**: `string`

The client ID to authenticate a registered application

###### clientSecret

> **clientSecret**: `string`

The client secret to authenticate a registered application

###### identityPlatformEndpoint?

> `optional` **identityPlatformEndpoint?**: `string`

If present, a host with optional port. E.g. "example.com" or "example.com:443".
This is optional, and only needed if customer is using a non-commercial Azure instance
(e.g. a government or China account, which use different URLs).
Defaults to "login.microsoftonline.com"

###### tenantId

> **tenantId**: `string`

The tenant ID identifies the organization for the account

***

###### 类型字面量

\{ `accessToken`: `string`; \}

###### accessToken

> **accessToken**: `string`

If present, an access token to authenticate with Azure.

#### gcp?

> `optional` **gcp?**: `Record`\<`string`, `never`\> \| \{ `email`: `string`; `endpoint?`: `string`; `privateKey`: `string` \| `Buffer`\<`ArrayBufferLike`\>; \} \| \{ `accessToken`: `string`; \}

Configuration options for using 'gcp' as your KMS provider

##### theme_union_members

`Record`\<`string`, `never`\>

***

###### 类型字面量

\{ `email`: `string`; `endpoint?`: `string`; `privateKey`: `string` \| `Buffer`\<`ArrayBufferLike`\>; \}

###### email

> **email**: `string`

The service account email to authenticate

###### endpoint?

> `optional` **endpoint?**: `string`

If present, a host with optional port. E.g. "example.com" or "example.com:443".
Defaults to "oauth2.googleapis.com"

###### privateKey

> **privateKey**: `string` \| `Buffer`\<`ArrayBufferLike`\>

A PKCS#8 encrypted key. This can either be a base64 string or a binary representation

***

###### 类型字面量

\{ `accessToken`: `string`; \}

###### accessToken

> **accessToken**: `string`

If present, an access token to authenticate with GCP.

#### kmip?

> `optional` **kmip?**: `object`

Configuration options for using 'kmip' as your KMS provider

##### kmip.endpoint?

> `optional` **endpoint?**: `string`

The output endpoint string.
The endpoint consists of a hostname and port separated by a colon.
E.g. "example.com:123". A port is always present.

#### local?

> `optional` **local?**: `object`

Configuration options for using 'local' as your KMS provider

##### local.key

> **key**: `string` \| `Buffer`\<`ArrayBufferLike`\>

The master key used to encrypt/decrypt data keys.
A 96-byte long Buffer or base64 encoded string.

***

### options?

> `optional` **options?**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:574

#### logger?

> `optional` **logger?**: (`level`, `message`) => `void`

An optional hook to catch logging messages from the underlying encryption engine

##### 参数

###### level

[`AutoEncryptionLoggerLevel`](../type-aliases/AutoEncryptionLoggerLevel.md)

###### message

`string`

##### 返回

`void`

***

### proxyOptions?

> `optional` **proxyOptions?**: [`ProxyOptions`](ProxyOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:624

***

### schemaMap?

> `optional` **schemaMap?**: [`Document`](../namespaces/BSON/interfaces/Document.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:567

A map of namespaces to a local JSON schema for encryption

**NOTE**: Supplying options.schemaMap provides more security than relying on JSON Schemas obtained from the server.
It protects against a malicious server advertising a false JSON Schema, which could trick the client into sending decrypted data that should be encrypted.
Schemas supplied in the schemaMap only apply to configuring automatic encryption for Client-Side Field Level Encryption.
Other validation rules in the JSON schema will not be enforced by the driver and will result in an error.

***

### tlsOptions?

> `optional` **tlsOptions?**: `object`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:626

The TLS options to use connecting to the KMS provider

#### aws?

> `optional` **aws?**: [`AutoEncryptionTlsOptions`](AutoEncryptionTlsOptions.md)

#### azure?

> `optional` **azure?**: [`AutoEncryptionTlsOptions`](AutoEncryptionTlsOptions.md)

#### gcp?

> `optional` **gcp?**: [`AutoEncryptionTlsOptions`](AutoEncryptionTlsOptions.md)

#### kmip?

> `optional` **kmip?**: [`AutoEncryptionTlsOptions`](AutoEncryptionTlsOptions.md)

#### local?

> `optional` **local?**: [`AutoEncryptionTlsOptions`](AutoEncryptionTlsOptions.md)
