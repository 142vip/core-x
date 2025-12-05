[API 参考](../../../index.md) / [@142vip/redis](../index.md) / RedisConfig

# 接口: RedisConfig

定义于: [packages/redis/src/core/redis.interface.ts:33](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/redis/src/core/redis.interface.ts#L33)

Redis 建立连接配置

## theme_extends

- [`RedisClientConfig`](RedisClientConfig.md).`Partial`\<[`RedisClusterConfig`](RedisClusterConfig.md)\>

## 属性

### autoPipeliningIgnoredCommands?

> `optional` **autoPipeliningIgnoredCommands**: `string`[]

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:132

#### 默认值

```ts
[]
```

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`autoPipeliningIgnoredCommands`](RedisClientConfig.md#autopipeliningignoredcommands)

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

[`RedisClientConfig`](RedisClientConfig.md).[`autoResendUnfulfilledCommands`](RedisClientConfig.md#autoresendunfulfilledcommands)

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

[`RedisClientConfig`](RedisClientConfig.md).[`autoResubscribe`](RedisClientConfig.md#autoresubscribe)

***

### clusterNodes?

> `optional` **clusterNodes**: `ClusterNode`[]

定义于: [packages/redis/src/core/redis.interface.ts:26](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/redis/src/core/redis.interface.ts#L26)

#### 继承自

[`RedisClusterConfig`](RedisClusterConfig.md).[`clusterNodes`](RedisClusterConfig.md#clusternodes)

***

### clusterOptions?

> `optional` **clusterOptions**: `ClusterOptions`

定义于: [packages/redis/src/core/redis.interface.ts:27](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/redis/src/core/redis.interface.ts#L27)

#### 继承自

[`RedisClusterConfig`](RedisClusterConfig.md).[`clusterOptions`](RedisClusterConfig.md#clusteroptions)

***

### commandQueue?

> `optional` **commandQueue**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:134

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`commandQueue`](RedisClientConfig.md#commandqueue)

***

### commandTimeout?

> `optional` **commandTimeout**: `number`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:13

If a command does not return a reply within a set number of milliseconds,
a "Command timed out" error will be thrown.

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`commandTimeout`](RedisClientConfig.md#commandtimeout)

***

### connectionName?

> `optional` **connectionName**: `string`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:38

Set the name of the connection to make it easier to identity the connection
in client list.

#### 链接

https://redis.io/commands/client-setname

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`connectionName`](RedisClientConfig.md#connectionname)

***

### Connector?

> `optional` **Connector**: `ConnectorConstructor`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:7

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`Connector`](RedisClientConfig.md#connector)

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

[`RedisClientConfig`](RedisClientConfig.md).[`connectTimeout`](RedisClientConfig.md#connecttimeout)

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

[`RedisClientConfig`](RedisClientConfig.md).[`db`](RedisClientConfig.md#db)

***

### disconnectTimeout?

> `optional` **disconnectTimeout**: `number`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:41

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`disconnectTimeout`](RedisClientConfig.md#disconnecttimeout)

***

### enableAutoPipelining?

> `optional` **enableAutoPipelining**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:128

#### 默认值

```ts
false
```

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`enableAutoPipelining`](RedisClientConfig.md#enableautopipelining)

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

[`RedisClientConfig`](RedisClientConfig.md).[`enableOfflineQueue`](RedisClientConfig.md#enableofflinequeue)

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

[`RedisClientConfig`](RedisClientConfig.md).[`enableReadyCheck`](RedisClientConfig.md#enablereadycheck)

***

### enableTLSForSentinelMode?

> `optional` **enableTLSForSentinelMode**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:43

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`enableTLSForSentinelMode`](RedisClientConfig.md#enabletlsforsentinelmode)

***

### failoverDetector?

> `optional` **failoverDetector**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:51

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`failoverDetector`](RedisClientConfig.md#failoverdetector)

***

### family?

> `optional` **family**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/net.d.ts:55

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`family`](RedisClientConfig.md#family)

***

### host?

> `optional` **host**: `string`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/net.d.ts:51

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`host`](RedisClientConfig.md#host)

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

[`RedisClientConfig`](RedisClientConfig.md).[`keepAlive`](RedisClientConfig.md#keepalive)

***

### keyPrefix?

> `optional` **keyPrefix**: `string`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/utils/Commander.d.ts:5

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`keyPrefix`](RedisClientConfig.md#keyprefix)

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

[`RedisClientConfig`](RedisClientConfig.md).[`lazyConnect`](RedisClientConfig.md#lazyconnect)

***

### maxLoadingRetryTime?

> `optional` **maxLoadingRetryTime**: `number`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:124

#### 默认值

```ts
10000
```

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`maxLoadingRetryTime`](RedisClientConfig.md#maxloadingretrytime)

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

[`RedisClientConfig`](RedisClientConfig.md).[`maxRetriesPerRequest`](RedisClientConfig.md#maxretriesperrequest)

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

[`RedisClientConfig`](RedisClientConfig.md).[`monitor`](RedisClientConfig.md#monitor)

***

### name?

> `optional` **name**: `string`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:28

Master group name of the Sentinel

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`name`](RedisClientConfig.md#name)

***

### natMap?

> `optional` **natMap**: `NatMap`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:45

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`natMap`](RedisClientConfig.md#natmap)

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

[`RedisClientConfig`](RedisClientConfig.md).[`noDelay`](RedisClientConfig.md#nodelay)

***

### offlineQueue?

> `optional` **offlineQueue**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:133

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`offlineQueue`](RedisClientConfig.md#offlinequeue)

***

### password?

> `optional` **password**: `string`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:47

If set, client will send AUTH command with the value of this option when connected.

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`password`](RedisClientConfig.md#password)

***

### path?

> `optional` **path**: `string`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/net.d.ts:70

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`path`](RedisClientConfig.md#path)

***

### port?

> `optional` **port**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/net.d.ts:50

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`port`](RedisClientConfig.md#port)

***

### preferredSlaves?

> `optional` **preferredSlaves**: `PreferredSlaves`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:39

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`preferredSlaves`](RedisClientConfig.md#preferredslaves)

***

### readOnly?

> `optional` **readOnly**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:91

#### 默认值

```ts
false
```

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`readOnly`](RedisClientConfig.md#readonly)

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

[`RedisClientConfig`](RedisClientConfig.md).[`reconnectOnError`](RedisClientConfig.md#reconnectonerror)

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

[`RedisClientConfig`](RedisClientConfig.md).[`retryStrategy`](RedisClientConfig.md#retrystrategy)

***

### role?

> `optional` **role**: `"master"` \| `"slave"`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:32

#### 默认值

```ts
'master'
```

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`role`](RedisClientConfig.md#role)

***

### scripts?

> `optional` **scripts**: `Record`\<`string`, \{ `lua`: `string`; `numberOfKeys?`: `number`; `readOnly?`: `boolean`; \}\>

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:165

#### 默认值

```ts
undefined
```

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`scripts`](RedisClientConfig.md#scripts)

***

### sentinelCommandTimeout?

> `optional` **sentinelCommandTimeout**: `number`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:42

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`sentinelCommandTimeout`](RedisClientConfig.md#sentinelcommandtimeout)

***

### sentinelMaxConnections?

> `optional` **sentinelMaxConnections**: `number`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:50

#### 默认值

```ts
10
```

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`sentinelMaxConnections`](RedisClientConfig.md#sentinelmaxconnections)

***

### sentinelPassword?

> `optional` **sentinelPassword**: `string`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:35

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`sentinelPassword`](RedisClientConfig.md#sentinelpassword)

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

[`RedisClientConfig`](RedisClientConfig.md).[`sentinelReconnectStrategy`](RedisClientConfig.md#sentinelreconnectstrategy)

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

[`RedisClientConfig`](RedisClientConfig.md).[`sentinelRetryStrategy`](RedisClientConfig.md#sentinelretrystrategy)

***

### sentinels?

> `optional` **sentinels**: `Partial`\<`SentinelAddress`\>[]

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:36

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`sentinels`](RedisClientConfig.md#sentinels)

***

### sentinelTLS?

> `optional` **sentinelTLS**: `ConnectionOptions`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:44

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`sentinelTLS`](RedisClientConfig.md#sentineltls)

***

### sentinelUsername?

> `optional` **sentinelUsername**: `string`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:34

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`sentinelUsername`](RedisClientConfig.md#sentinelusername)

***

### showFriendlyErrorStack?

> `optional` **showFriendlyErrorStack**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/utils/Commander.d.ts:6

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`showFriendlyErrorStack`](RedisClientConfig.md#showfriendlyerrorstack)

***

### socketTimeout?

> `optional` **socketTimeout**: `number`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:20

If the socket does not receive data within a set number of milliseconds:
1. the socket is considered "dead" and will be destroyed
2. the client will reject any running commands (altought they might have been processed by the server)
3. the reconnect strategy will kick in (depending on the configuration)

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`socketTimeout`](RedisClientConfig.md#sockettimeout)

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

[`RedisClientConfig`](RedisClientConfig.md).[`stringNumbers`](RedisClientConfig.md#stringnumbers)

***

### tls?

> `optional` **tls**: `ConnectionOptions`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:33

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`tls`](RedisClientConfig.md#tls)

***

### updateSentinels?

> `optional` **updateSentinels**: `boolean`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/connectors/SentinelConnector/index.d.ts:46

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`updateSentinels`](RedisClientConfig.md#updatesentinels)

***

### url?

> `optional` **url**: `string`

定义于: [packages/redis/src/core/redis.interface.ts:19](https://github.com/142vip/core-x/blob/5d0d35d3e5446f66a5cf8e331168b57c03ee1203/packages/redis/src/core/redis.interface.ts#L19)

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`url`](RedisClientConfig.md#url)

***

### username?

> `optional` **username**: `string`

定义于: node\_modules/.pnpm/ioredis@5.6.0/node\_modules/ioredis/built/redis/RedisOptions.d.ts:43

If set, client will send AUTH command with the value of this option as the first argument when connected.
This is supported since Redis 6.

#### 继承自

[`RedisClientConfig`](RedisClientConfig.md).[`username`](RedisClientConfig.md#username)
