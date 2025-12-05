[API 参考](../../../index.md) / [@142vip/redis](../index.md) / RedisClientConfig

# 接口: RedisClientConfig

定义于: [packages/redis/src/core/redis.interface.ts:18](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/redis/src/core/redis.interface.ts#L18)

单机、哨兵配置

## theme_extends

- `RedisOptions`

## theme_extended_by

- [`RedisConfig`](RedisConfig.md)

## 属性

### autoPipeliningIgnoredCommands?

> `optional` **autoPipeliningIgnoredCommands**: `string`[]

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:132

#### 默认值

```ts
[]
```

#### 继承自

`RedisOptions.autoPipeliningIgnoredCommands`

***

### autoResendUnfulfilledCommands?

> `optional` **autoResendUnfulfilledCommands**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:65

Whether or not to resend unfulfilled commands on reconnect.
Unfulfilled commands are most likely to be blocking commands such as `brpop` or `blpop`.

#### 默认值

```ts
true
```

#### 继承自

`RedisOptions.autoResendUnfulfilledCommands`

***

### autoResubscribe?

> `optional` **autoResubscribe**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:59

When the client reconnects, channels subscribed in the previous connection will be
resubscribed automatically if `autoResubscribe` is `true`.

#### 默认值

```ts
true
```

#### 继承自

`RedisOptions.autoResubscribe`

***

### commandQueue?

> `optional` **commandQueue**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:134

#### 继承自

`RedisOptions.commandQueue`

***

### commandTimeout?

> `optional` **commandTimeout**: `number`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:13

If a command does not return a reply within a set number of milliseconds,
a "Command timed out" error will be thrown.

#### 继承自

`RedisOptions.commandTimeout`

***

### connectionName?

> `optional` **connectionName**: `string`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:38

Set the name of the connection to make it easier to identity the connection
in client list.

#### 链接

https://redis.io/commands/client-setname

#### 继承自

`RedisOptions.connectionName`

***

### Connector?

> `optional` **Connector**: `ConnectorConstructor`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:7

#### 继承自

`RedisOptions.Connector`

***

### connectTimeout?

> `optional` **connectTimeout**: `number`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:102

How long the client will wait before killing a socket due to inactivity during initial connection.

#### 默认值

```ts
10000
```

#### 继承自

`RedisOptions.connectTimeout`

***

### db?

> `optional` **db**: `number`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:53

Database index to use.

#### 默认值

```ts
0
```

#### 继承自

`RedisOptions.db`

***

### disconnectTimeout?

> `optional` **disconnectTimeout**: `number`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:41

#### 继承自

`RedisOptions.disconnectTimeout`

***

### enableAutoPipelining?

> `optional` **enableAutoPipelining**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:128

#### 默认值

```ts
false
```

#### 继承自

`RedisOptions.enableAutoPipelining`

***

### enableOfflineQueue?

> `optional` **enableOfflineQueue**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:145

By default, if the connection to Redis server has not been established, commands are added to a queue
and are executed once the connection is "ready" (when `enableReadyCheck` is true, "ready" means
the Redis server has loaded the database from disk, otherwise means the connection to the Redis
server has been established). If this option is false, when execute the command when the connection
isn't ready, an error will be returned.

#### 默认值

```ts
true
```

#### 继承自

`RedisOptions.enableOfflineQueue`

***

### enableReadyCheck?

> `optional` **enableReadyCheck**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:153

The client will sent an INFO command to check whether the server is still loading data from the disk (
which happens when the server is just launched) when the connection is established, and only wait until
the loading process is finished before emitting the `ready` event.

#### 默认值

```ts
true
```

#### 继承自

`RedisOptions.enableReadyCheck`

***

### enableTLSForSentinelMode?

> `optional` **enableTLSForSentinelMode**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:43

#### 继承自

`RedisOptions.enableTLSForSentinelMode`

***

### failoverDetector?

> `optional` **failoverDetector**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:51

#### 继承自

`RedisOptions.failoverDetector`

***

### family?

> `optional` **family**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/net.d.ts:55

#### 继承自

`RedisOptions.family`

***

### host?

> `optional` **host**: `string`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/net.d.ts:51

#### 继承自

`RedisOptions.host`

***

### keepAlive?

> `optional` **keepAlive**: `number`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:26

Enable/disable keep-alive functionality.

#### 链接

https://nodejs.org/api/net.html#socketsetkeepaliveenable-initialdelay

#### 默认值

```ts
0
```

#### 继承自

`RedisOptions.keepAlive`

***

### keyPrefix?

> `optional` **keyPrefix**: `string`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/utils/Commander.d.ts:5

#### 继承自

`RedisOptions.keyPrefix`

***

### lazyConnect?

> `optional` **lazyConnect**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:161

When a Redis instance is initialized, a connection to the server is immediately established. Set this to
true will delay the connection to the server until the first command is sent or `redis.connect()` is called
explicitly.

#### 默认值

```ts
false
```

#### 继承自

`RedisOptions.lazyConnect`

***

### maxLoadingRetryTime?

> `optional` **maxLoadingRetryTime**: `number`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:124

#### 默认值

```ts
10000
```

#### 继承自

`RedisOptions.maxLoadingRetryTime`

***

### maxRetriesPerRequest?

> `optional` **maxRetriesPerRequest**: `null` \| `number`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:120

The commands that don't get a reply due to the connection to the server is lost are
put into a queue and will be resent on reconnect (if allowed by the `retryStrategy` option).
This option is used to configure how many reconnection attempts should be allowed before
the queue is flushed with a `MaxRetriesPerRequestError` error.
Set this options to `null` instead of a number to let commands wait forever
until the connection is alive again.

#### 默认值

```ts
20
```

#### 继承自

`RedisOptions.maxRetriesPerRequest`

***

### monitor?

> `optional` **monitor**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:109

This option is used internally when you call `redis.monitor()` to tell Redis
to enter the monitor mode when the connection is established.

#### 默认值

```ts
false
```

#### 继承自

`RedisOptions.monitor`

***

### name?

> `optional` **name**: `string`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:28

Master group name of the Sentinel

#### 继承自

`RedisOptions.name`

***

### natMap?

> `optional` **natMap**: `NatMap`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:45

#### 继承自

`RedisOptions.natMap`

***

### noDelay?

> `optional` **noDelay**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:32

Enable/disable the use of Nagle's algorithm.

#### 链接

https://nodejs.org/api/net.html#socketsetnodelaynodelay

#### 默认值

```ts
true
```

#### 继承自

`RedisOptions.noDelay`

***

### offlineQueue?

> `optional` **offlineQueue**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:133

#### 继承自

`RedisOptions.offlineQueue`

***

### password?

> `optional` **password**: `string`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:47

If set, client will send AUTH command with the value of this option when connected.

#### 继承自

`RedisOptions.password`

***

### path?

> `optional` **path**: `string`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/net.d.ts:70

#### 继承自

`RedisOptions.path`

***

### port?

> `optional` **port**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/net.d.ts:50

#### 继承自

`RedisOptions.port`

***

### preferredSlaves?

> `optional` **preferredSlaves**: `PreferredSlaves`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:39

#### 继承自

`RedisOptions.preferredSlaves`

***

### readOnly?

> `optional` **readOnly**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:91

#### 默认值

```ts
false
```

#### 继承自

`RedisOptions.readOnly`

***

### reconnectOnError?

> `optional` **reconnectOnError**: `null` \| `ReconnectOnError`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:87

Whether or not to reconnect on certain Redis errors.
This options by default is `null`, which means it should never reconnect on Redis errors.
You can pass a function that accepts an Redis error, and returns:
- `true` or `1` to trigger a reconnection.
- `false` or `0` to not reconnect.
- `2` to reconnect and resend the failed command (who triggered the error) after reconnection.

#### 示例

```js
const redis = new Redis({
  reconnectOnError(err) {
    const targetError = 'READONLY'
    if (err.message.includes(targetError)) {
      // Only reconnect when the error contains "READONLY"
      return true // or `return 1;`
    }
  },
})
```

#### 默认值

```ts
null
```

#### 继承自

`RedisOptions.reconnectOnError`

***

### retryStrategy()?

> `optional` **retryStrategy**: (`times`) => `null` \| `number` \| `void`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:8

#### 参数

##### times

`number`

#### 返回

`null` \| `number` \| `void`

#### 继承自

`RedisOptions.retryStrategy`

***

### role?

> `optional` **role**: `"master"` \| `"slave"`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:32

#### 默认值

```ts
'master'
```

#### 继承自

`RedisOptions.role`

***

### scripts?

> `optional` **scripts**: `Record`\<`string`, \{ `lua`: `string`; `numberOfKeys?`: `number`; `readOnly?`: `boolean`; \}\>

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:165

#### 默认值

```ts
undefined
```

#### 继承自

`RedisOptions.scripts`

***

### sentinelCommandTimeout?

> `optional` **sentinelCommandTimeout**: `number`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:42

#### 继承自

`RedisOptions.sentinelCommandTimeout`

***

### sentinelMaxConnections?

> `optional` **sentinelMaxConnections**: `number`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:50

#### 默认值

```ts
10
```

#### 继承自

`RedisOptions.sentinelMaxConnections`

***

### sentinelPassword?

> `optional` **sentinelPassword**: `string`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:35

#### 继承自

`RedisOptions.sentinelPassword`

***

### sentinelReconnectStrategy()?

> `optional` **sentinelReconnectStrategy**: (`retryAttempts`) => `null` \| `number` \| `void`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:38

#### 参数

##### retryAttempts

`number`

#### 返回

`null` \| `number` \| `void`

#### 继承自

`RedisOptions.sentinelReconnectStrategy`

***

### sentinelRetryStrategy()?

> `optional` **sentinelRetryStrategy**: (`retryAttempts`) => `null` \| `number` \| `void`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:37

#### 参数

##### retryAttempts

`number`

#### 返回

`null` \| `number` \| `void`

#### 继承自

`RedisOptions.sentinelRetryStrategy`

***

### sentinels?

> `optional` **sentinels**: `Partial`\<`SentinelAddress`\>[]

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:36

#### 继承自

`RedisOptions.sentinels`

***

### sentinelTLS?

> `optional` **sentinelTLS**: `ConnectionOptions`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:44

#### 继承自

`RedisOptions.sentinelTLS`

***

### sentinelUsername?

> `optional` **sentinelUsername**: `string`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:34

#### 继承自

`RedisOptions.sentinelUsername`

***

### showFriendlyErrorStack?

> `optional` **showFriendlyErrorStack**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/utils/Commander.d.ts:6

#### 继承自

`RedisOptions.showFriendlyErrorStack`

***

### socketTimeout?

> `optional` **socketTimeout**: `number`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:20

If the socket does not receive data within a set number of milliseconds:
1. the socket is considered "dead" and will be destroyed
2. the client will reject any running commands (altought they might have been processed by the server)
3. the reconnect strategy will kick in (depending on the configuration)

#### 继承自

`RedisOptions.socketTimeout`

***

### stringNumbers?

> `optional` **stringNumbers**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:97

When enabled, numbers returned by Redis will be converted to JavaScript strings instead of numbers.
This is necessary if you want to handle big numbers (above `Number.MAX_SAFE_INTEGER` === 2^53).

#### 默认值

```ts
false
```

#### 继承自

`RedisOptions.stringNumbers`

***

### tls?

> `optional` **tls**: `ConnectionOptions`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:33

#### 继承自

`RedisOptions.tls`

***

### updateSentinels?

> `optional` **updateSentinels**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:46

#### 继承自

`RedisOptions.updateSentinels`

***

### url?

> `optional` **url**: `string`

定义于: [packages/redis/src/core/redis.interface.ts:19](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/redis/src/core/redis.interface.ts#L19)

***

### username?

> `optional` **username**: `string`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:43

If set, client will send AUTH command with the value of this option as the first argument when connected.
This is supported since Redis 6.

#### 继承自

`RedisOptions.username`
