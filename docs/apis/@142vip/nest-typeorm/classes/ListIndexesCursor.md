[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / ListIndexesCursor

# 类: ListIndexesCursor

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3399

Typescript type safe event emitter

## theme_extends

- [`AbstractCursor`](AbstractCursor.md)

## 构造函数

### 构造函数

> **new ListIndexesCursor**(`collection`, `options?`): `ListIndexesCursor`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3402

#### 参数

##### collection

[`Collection`](Collection.md)

##### options?

[`ListIndexesOptions`](../interfaces/ListIndexesOptions.md)

#### 返回

`ListIndexesCursor`

#### 重写了

[`AbstractCursor`](AbstractCursor.md).[`constructor`](AbstractCursor.md#constructor)

## 属性

### options?

> `optional` **options?**: [`ListIndexesOptions`](../interfaces/ListIndexesOptions.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3401

***

### parent

> **parent**: [`Collection`](Collection.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3400

***

### captureRejections

> `static` **captureRejections**: `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:459

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

#### 添加于

v13.4.0, v12.16.0

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`captureRejections`](AbstractCursor.md#capturerejections)

***

### captureRejectionSymbol

> `readonly` `static` **captureRejectionSymbol**: *typeof* [`captureRejectionSymbol`](AbstractCursor.md#capturerejectionsymbol)

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:452

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

#### 添加于

v13.4.0, v12.16.0

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`captureRejectionSymbol`](AbstractCursor.md#capturerejectionsymbol)

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:498

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for _all_`EventEmitter` instances, the `events.defaultMaxListeners` property
can be used. If this value is not a positive number, a `RangeError` is thrown.

Take caution when setting the `events.defaultMaxListeners` because the
change affects _all_ `EventEmitter` instances, including those created before
the change is made. However, calling `emitter.setMaxListeners(n)` still has
precedence over `events.defaultMaxListeners`.

This is not a hard limit. The `EventEmitter` instance will allow
more listeners to be added but will output a trace warning to stderr indicating
that a "possible EventEmitter memory leak" has been detected. For any single
`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()` methods can be used to
temporarily avoid this warning:

```js
import { EventEmitter } from 'node:events'

const emitter = new EventEmitter()
emitter.setMaxListeners(emitter.getMaxListeners() + 1)
emitter.once('event', () => {
  // do stuff
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0))
})
```

The `--trace-warnings` command-line flag can be used to display the
stack trace for such warnings.

The emitted warning can be inspected with `process.on('warning')` and will
have the additional `emitter`, `type`, and `count` properties, referring to
the event emitter instance, the event's name and the number of attached
listeners, respectively.
Its `name` property is set to `'MaxListenersExceededWarning'`.

#### 添加于

v0.11.2

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`defaultMaxListeners`](AbstractCursor.md#defaultmaxlisteners)

***

### errorMonitor

> `readonly` `static` **errorMonitor**: *typeof* [`errorMonitor`](AbstractCursor.md#errormonitor)

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:445

This symbol shall be used to install a listener for only monitoring `'error'` events. Listeners installed using this symbol are called before the regular `'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an `'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

#### 添加于

v13.6.0, v12.17.0

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`errorMonitor`](AbstractCursor.md#errormonitor)

## 访问器

### closed

#### Getter 签名

> **get** **closed**(): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:20

##### 返回

`boolean`

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`closed`](AbstractCursor.md#closed)

***

### id

#### Getter 签名

> **get** **id**(): [`Long`](../namespaces/BSON/classes/Long.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:16

##### 返回

[`Long`](../namespaces/BSON/classes/Long.md) \| `undefined`

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`id`](AbstractCursor.md#id)

***

### killed

#### Getter 签名

> **get** **killed**(): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:21

##### 返回

`boolean`

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`killed`](AbstractCursor.md#killed)

***

### loadBalanced

#### Getter 签名

> **get** **loadBalanced**(): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:22

##### 返回

`boolean`

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`loadBalanced`](AbstractCursor.md#loadbalanced)

***

### namespace

#### Getter 签名

> **get** **namespace**(): [`MongoDBNamespace`](MongoDBNamespace.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:17

##### 返回

[`MongoDBNamespace`](MongoDBNamespace.md)

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`namespace`](AbstractCursor.md#namespace)

***

### readConcern

#### Getter 签名

> **get** **readConcern**(): [`ReadConcern`](ReadConcern.md) \| `undefined`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:19

##### 返回

[`ReadConcern`](ReadConcern.md) \| `undefined`

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`readConcern`](AbstractCursor.md#readconcern)

***

### readPreference

#### Getter 签名

> **get** **readPreference**(): [`ReadPreference`](ReadPreference.md)

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:18

##### 返回

[`ReadPreference`](ReadPreference.md)

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`readPreference`](AbstractCursor.md#readpreference)

## 方法

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncGenerator`\<`any`, `void`, `void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:27

#### 返回

`AsyncGenerator`\<`any`, `void`, `void`\>

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`[asyncIterator]`](AbstractCursor.md#asynciterator)

***

### \[captureRejectionSymbol\]()?

> `optional` **\[captureRejectionSymbol\]**\<`K`\>(`error`, `event`, ...`args`): `void`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:136

#### 类型参数

##### K

`K`

#### 参数

##### error

`Error`

##### event

`string` \| `symbol`

##### args

...`AnyRest`

#### 返回

`void`

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`[captureRejectionSymbol]`](AbstractCursor.md#capturerejectionsymbol-1)

***

### addCursorFlag()

> **addCursorFlag**(`flag`, `value`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:58

Add a cursor flag to the cursor

#### 参数

##### flag

`"tailable"` \| `"oplogReplay"` \| `"noCursorTimeout"` \| `"awaitData"` \| `"exhaust"` \| `"partial"`

The flag to set, must be one of following ['tailable', 'oplogReplay', 'noCursorTimeout', 'awaitData', 'partial' -.

##### value

`boolean`

The flag boolean value.

#### 返回

`this`

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`addCursorFlag`](AbstractCursor.md#addcursorflag)

***

### addListener()

#### 调用签名

> **addListener**\<`EventKey`\>(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5079

Alias for `emitter.on(eventName, listener)`.

##### 类型参数

###### EventKey

`EventKey` *extends* `"close"`

##### 参数

###### event

`EventKey`

###### listener

[`AbstractCursorEvents`](../type-aliases/AbstractCursorEvents.md)\[`EventKey`\]

##### 返回

`this`

##### 添加于

v0.1.26

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`addListener`](AbstractCursor.md#addlistener)

#### 调用签名

> **addListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5080

Alias for `emitter.on(eventName, listener)`.

##### 参数

###### event

[`CommonEvents`](../type-aliases/CommonEvents.md)

###### listener

(`eventName`, `listener`) => `void`

##### 返回

`this`

##### 添加于

v0.1.26

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`addListener`](AbstractCursor.md#addlistener)

#### 调用签名

> **addListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5081

Alias for `emitter.on(eventName, listener)`.

##### 参数

###### event

`string` \| `symbol`

###### listener

[`GenericListener`](../type-aliases/GenericListener.md)

##### 返回

`this`

##### 添加于

v0.1.26

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`addListener`](AbstractCursor.md#addlistener)

***

### batchSize()

> **batchSize**(`value`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:125

Set the batch size for the cursor.

#### 参数

##### value

`number`

The number of documents to return per batch. See [command documentation](https://www.mongodb.com/docs/manual/reference/command/find/|find).

#### 返回

`this`

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`batchSize`](AbstractCursor.md#batchsize)

***

### bufferedCount()

> **bufferedCount**(): `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:24

Returns current buffered documents length

#### 返回

`number`

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`bufferedCount`](AbstractCursor.md#bufferedcount)

***

### clone()

> **clone**(): `ListIndexesCursor`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3403

Returns a new uninitialized copy of this cursor, with options matching those that have been set on the current instance

#### 返回

`ListIndexesCursor`

#### 重写了

[`AbstractCursor`](AbstractCursor.md).[`clone`](AbstractCursor.md#clone)

***

### close()

> **close**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:44

#### 返回

`Promise`\<`void`\>

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`close`](AbstractCursor.md#close-1)

***

### emit()

> **emit**\<`EventKey`\>(`event`, ...`args`): `boolean`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5097

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events'

const myEmitter = new EventEmitter()

// First listener
myEmitter.on('event', () => {
  console.log('Helloooo! first listener')
})
// Second listener
myEmitter.on('event', (arg1, arg2) => {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`)
})
// Third listener
myEmitter.on('event', (...args) => {
  const parameters = args.join(', ')
  console.log(`event with parameters ${parameters} in third listener`)
})

console.log(myEmitter.listeners('event'))

myEmitter.emit('event', 1, 2, 3, 4, 5)

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### 类型参数

##### EventKey

`EventKey` *extends* `"close"`

#### 参数

##### event

`symbol` \| `EventKey`

##### args

...`Parameters`\<[`AbstractCursorEvents`](../type-aliases/AbstractCursorEvents.md)\[`EventKey`\]\>

#### 返回

`boolean`

#### 添加于

v0.1.26

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`emit`](AbstractCursor.md#emit)

***

### eventNames()

> **eventNames**(): `string`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5105

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events'

const myEE = new EventEmitter()
myEE.on('foo', () => {})
myEE.on('bar', () => {})

const sym = Symbol('symbol')
myEE.on(sym, () => {})

console.log(myEE.eventNames())
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### 返回

`string`[]

#### 添加于

v6.0.0

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`eventNames`](AbstractCursor.md#eventnames)

***

### forEach()

> **forEach**(`iterator`): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:43

Iterates over all the documents for this cursor using the iterator, callback pattern.

If the iterator returns `false`, iteration will stop.

#### 参数

##### iterator

(`doc`) => `boolean` \| `void`

The iteration callback.

#### 返回

`Promise`\<`void`\>

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`forEach`](AbstractCursor.md#foreach)

***

### getMaxListeners()

> **getMaxListeners**(): `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5106

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [EventEmitter.defaultMaxListeners](AbstractCursor.md#defaultmaxlisteners).

#### 返回

`number`

#### 添加于

v1.0.0

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`getMaxListeners`](AbstractCursor.md#getmaxlisteners)

***

### hasNext()

> **hasNext**(): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:29

#### 返回

`Promise`\<`boolean`\>

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`hasNext`](AbstractCursor.md#hasnext)

***

### listenerCount()

> **listenerCount**\<`EventKey`\>(`type`): `number`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5098

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### 类型参数

##### EventKey

`EventKey` *extends* `"close"`

#### 参数

##### type

`string` \| `symbol` \| `EventKey`

#### 返回

`number`

#### 添加于

v3.2.0

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`listenerCount`](AbstractCursor.md#listenercount)

***

### listeners()

> **listeners**\<`EventKey`\>(`event`): [`AbstractCursorEvents`](../type-aliases/AbstractCursorEvents.md)\[`EventKey`\][]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5095

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!')
})
console.log(util.inspect(server.listeners('connection')))
// Prints: [ [Function] ]
```

#### 类型参数

##### EventKey

`EventKey` *extends* `"close"`

#### 参数

##### event

`string` \| `symbol` \| `EventKey`

#### 返回

[`AbstractCursorEvents`](../type-aliases/AbstractCursorEvents.md)\[`EventKey`\][]

#### 添加于

v0.1.26

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`listeners`](AbstractCursor.md#listeners)

***

### map()

> **map**\<`T`\>(`transform`): [`AbstractCursor`](AbstractCursor.md)\<`T`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:101

Map all documents using the provided function
If there is a transform set on the cursor, that will be called first and the result passed to
this function's transform.

#### 类型参数

##### T

`T` = `any`

#### 参数

##### transform

(`doc`) => `T`

The mapping transformation method.

#### 返回

[`AbstractCursor`](AbstractCursor.md)\<`T`\>

#### 备注

**Note** Cursors use `null` internally to indicate that there are no more documents in the cursor. Providing a mapping
function that maps values to `null` will result in the cursor closing itself before it has finished iterating
all documents.  This will **not** result in a memory leak, just surprising behavior.  For example:

```typescript
const cursor = collection.find({})
cursor.map(() => null)

const documents = await cursor.toArray()
// documents is always [], regardless of how many documents are in the collection.
```

Other falsey values are allowed:

```typescript
const cursor = collection.find({})
cursor.map(() => '')

const documents = await cursor.toArray()
// documents is now an array of empty strings
```

**Note for Typescript Users:** adding a transform changes the return type of the iteration of this cursor,
it **does not** return a new instance of a cursor. This means when calling map,
you should always assign the result to a new variable in order to get a correctly typed cursor variable.
Take note of the following example:

#### 示例

```typescript
const cursor: FindCursor<Document> = coll.find()
const mappedCursor: FindCursor<number> = cursor.map(doc => Object.keys(doc).length)
const keyCounts: number[] = await mappedCursor.toArray() // cursor.toArray() still returns Document[]
```

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`map`](AbstractCursor.md#map)

***

### maxTimeMS()

> **maxTimeMS**(`value`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:119

Set a maxTimeMS on the cursor query, allowing for hard timeout limits on queries (Only supported on MongoDB 2.6 or higher)

#### 参数

##### value

`number`

Number of milliseconds to wait before aborting the query.

#### 返回

`this`

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`maxTimeMS`](AbstractCursor.md#maxtimems)

***

### next()

> **next**(): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:31

Get the next available document from the cursor, returns null if no more documents are available.

#### 返回

`Promise`\<`any`\>

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`next`](AbstractCursor.md#next)

***

### off()

#### 调用签名

> **off**\<`EventKey`\>(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5091

Alias for `emitter.removeListener()`.

##### 类型参数

###### EventKey

`EventKey` *extends* `"close"`

##### 参数

###### event

`EventKey`

###### listener

[`AbstractCursorEvents`](../type-aliases/AbstractCursorEvents.md)\[`EventKey`\]

##### 返回

`this`

##### 添加于

v10.0.0

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`off`](AbstractCursor.md#off)

#### 调用签名

> **off**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5092

Alias for `emitter.removeListener()`.

##### 参数

###### event

[`CommonEvents`](../type-aliases/CommonEvents.md)

###### listener

(`eventName`, `listener`) => `void`

##### 返回

`this`

##### 添加于

v10.0.0

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`off`](AbstractCursor.md#off)

#### 调用签名

> **off**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5093

Alias for `emitter.removeListener()`.

##### 参数

###### event

`string` \| `symbol`

###### listener

[`GenericListener`](../type-aliases/GenericListener.md)

##### 返回

`this`

##### 添加于

v10.0.0

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`off`](AbstractCursor.md#off)

***

### on()

#### 调用签名

> **on**\<`EventKey`\>(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5082

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!')
})
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events'

const myEE = new EventEmitter()
myEE.on('foo', () => console.log('a'))
myEE.prependListener('foo', () => console.log('b'))
myEE.emit('foo')
// Prints:
//   b
//   a
```

##### 类型参数

###### EventKey

`EventKey` *extends* `"close"`

##### 参数

###### event

`EventKey`

###### listener

[`AbstractCursorEvents`](../type-aliases/AbstractCursorEvents.md)\[`EventKey`\]

The callback function

##### 返回

`this`

##### 添加于

v0.1.101

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`on`](AbstractCursor.md#on)

#### 调用签名

> **on**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5083

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!')
})
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events'

const myEE = new EventEmitter()
myEE.on('foo', () => console.log('a'))
myEE.prependListener('foo', () => console.log('b'))
myEE.emit('foo')
// Prints:
//   b
//   a
```

##### 参数

###### event

[`CommonEvents`](../type-aliases/CommonEvents.md)

###### listener

(`eventName`, `listener`) => `void`

The callback function

##### 返回

`this`

##### 添加于

v0.1.101

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`on`](AbstractCursor.md#on)

#### 调用签名

> **on**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5084

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!')
})
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events'

const myEE = new EventEmitter()
myEE.on('foo', () => console.log('a'))
myEE.prependListener('foo', () => console.log('b'))
myEE.emit('foo')
// Prints:
//   b
//   a
```

##### 参数

###### event

`string` \| `symbol`

###### listener

[`GenericListener`](../type-aliases/GenericListener.md)

The callback function

##### 返回

`this`

##### 添加于

v0.1.101

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`on`](AbstractCursor.md#on)

***

### once()

#### 调用签名

> **once**\<`EventKey`\>(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5085

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!')
})
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events'

const myEE = new EventEmitter()
myEE.once('foo', () => console.log('a'))
myEE.prependOnceListener('foo', () => console.log('b'))
myEE.emit('foo')
// Prints:
//   b
//   a
```

##### 类型参数

###### EventKey

`EventKey` *extends* `"close"`

##### 参数

###### event

`EventKey`

###### listener

[`AbstractCursorEvents`](../type-aliases/AbstractCursorEvents.md)\[`EventKey`\]

The callback function

##### 返回

`this`

##### 添加于

v0.3.0

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`once`](AbstractCursor.md#once)

#### 调用签名

> **once**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5086

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!')
})
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events'

const myEE = new EventEmitter()
myEE.once('foo', () => console.log('a'))
myEE.prependOnceListener('foo', () => console.log('b'))
myEE.emit('foo')
// Prints:
//   b
//   a
```

##### 参数

###### event

[`CommonEvents`](../type-aliases/CommonEvents.md)

###### listener

(`eventName`, `listener`) => `void`

The callback function

##### 返回

`this`

##### 添加于

v0.3.0

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`once`](AbstractCursor.md#once)

#### 调用签名

> **once**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5087

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!')
})
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events'

const myEE = new EventEmitter()
myEE.once('foo', () => console.log('a'))
myEE.prependOnceListener('foo', () => console.log('b'))
myEE.emit('foo')
// Prints:
//   b
//   a
```

##### 参数

###### event

`string` \| `symbol`

###### listener

[`GenericListener`](../type-aliases/GenericListener.md)

The callback function

##### 返回

`this`

##### 添加于

v0.3.0

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`once`](AbstractCursor.md#once)

***

### prependListener()

#### 调用签名

> **prependListener**\<`EventKey`\>(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5099

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!')
})
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### 类型参数

###### EventKey

`EventKey` *extends* `"close"`

##### 参数

###### event

`EventKey`

###### listener

[`AbstractCursorEvents`](../type-aliases/AbstractCursorEvents.md)\[`EventKey`\]

The callback function

##### 返回

`this`

##### 添加于

v6.0.0

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`prependListener`](AbstractCursor.md#prependlistener)

#### 调用签名

> **prependListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5100

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!')
})
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### 参数

###### event

[`CommonEvents`](../type-aliases/CommonEvents.md)

###### listener

(`eventName`, `listener`) => `void`

The callback function

##### 返回

`this`

##### 添加于

v6.0.0

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`prependListener`](AbstractCursor.md#prependlistener)

#### 调用签名

> **prependListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5101

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!')
})
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### 参数

###### event

`string` \| `symbol`

###### listener

[`GenericListener`](../type-aliases/GenericListener.md)

The callback function

##### 返回

`this`

##### 添加于

v6.0.0

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`prependListener`](AbstractCursor.md#prependlistener)

***

### prependOnceListener()

#### 调用签名

> **prependOnceListener**\<`EventKey`\>(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5102

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!')
})
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### 类型参数

###### EventKey

`EventKey` *extends* `"close"`

##### 参数

###### event

`EventKey`

###### listener

[`AbstractCursorEvents`](../type-aliases/AbstractCursorEvents.md)\[`EventKey`\]

The callback function

##### 返回

`this`

##### 添加于

v6.0.0

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`prependOnceListener`](AbstractCursor.md#prependoncelistener)

#### 调用签名

> **prependOnceListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5103

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!')
})
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### 参数

###### event

[`CommonEvents`](../type-aliases/CommonEvents.md)

###### listener

(`eventName`, `listener`) => `void`

The callback function

##### 返回

`this`

##### 添加于

v6.0.0

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`prependOnceListener`](AbstractCursor.md#prependoncelistener)

#### 调用签名

> **prependOnceListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5104

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!')
})
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### 参数

###### event

`string` \| `symbol`

###### listener

[`GenericListener`](../type-aliases/GenericListener.md)

The callback function

##### 返回

`this`

##### 添加于

v6.0.0

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`prependOnceListener`](AbstractCursor.md#prependoncelistener)

***

### rawListeners()

> **rawListeners**\<`EventKey`\>(`event`): [`AbstractCursorEvents`](../type-aliases/AbstractCursorEvents.md)\[`EventKey`\][]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5096

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events'

const emitter = new EventEmitter()
emitter.once('log', () => console.log('log once'))

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log')
const logFnWrapper = listeners[0]

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener()

// Logs "log once" to the console and removes the listener
logFnWrapper()

emitter.on('log', () => console.log('log persistently'))
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log')

// Logs "log persistently" twice
newListeners[0]()
emitter.emit('log')
```

#### 类型参数

##### EventKey

`EventKey` *extends* `"close"`

#### 参数

##### event

`string` \| `symbol` \| `EventKey`

#### 返回

[`AbstractCursorEvents`](../type-aliases/AbstractCursorEvents.md)\[`EventKey`\][]

#### 添加于

v9.4.0

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`rawListeners`](AbstractCursor.md#rawlisteners)

***

### readBufferedDocuments()

> **readBufferedDocuments**(`number?`): `any`[]

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:26

Returns current buffered documents

#### 参数

##### number?

`number`

#### 返回

`any`[]

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`readBufferedDocuments`](AbstractCursor.md#readbuffereddocuments)

***

### removeAllListeners()

> **removeAllListeners**\<`EventKey`\>(`event?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5094

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### 类型参数

##### EventKey

`EventKey` *extends* `"close"`

#### 参数

##### event?

`string` \| `symbol` \| `EventKey`

#### 返回

`this`

#### 添加于

v0.1.26

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`removeAllListeners`](AbstractCursor.md#removealllisteners)

***

### removeListener()

#### 调用签名

> **removeListener**\<`EventKey`\>(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5088

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
function callback(stream) {
  console.log('someone connected!')
}
server.on('connection', callback)
// ...
server.removeListener('connection', callback)
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events'

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()

function callbackA() {
  console.log('A')
  myEmitter.removeListener('event', callbackB)
}

function callbackB() {
  console.log('B')
}

myEmitter.on('event', callbackA)

myEmitter.on('event', callbackB)

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event')
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event')
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events'

const ee = new EventEmitter()

function pong() {
  console.log('pong')
}

ee.on('ping', pong)
ee.once('ping', pong)
ee.removeListener('ping', pong)

ee.emit('ping')
ee.emit('ping')
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### 类型参数

###### EventKey

`EventKey` *extends* `"close"`

##### 参数

###### event

`EventKey`

###### listener

[`AbstractCursorEvents`](../type-aliases/AbstractCursorEvents.md)\[`EventKey`\]

##### 返回

`this`

##### 添加于

v0.1.26

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`removeListener`](AbstractCursor.md#removelistener)

#### 调用签名

> **removeListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5089

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
function callback(stream) {
  console.log('someone connected!')
}
server.on('connection', callback)
// ...
server.removeListener('connection', callback)
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events'

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()

function callbackA() {
  console.log('A')
  myEmitter.removeListener('event', callbackB)
}

function callbackB() {
  console.log('B')
}

myEmitter.on('event', callbackA)

myEmitter.on('event', callbackB)

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event')
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event')
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events'

const ee = new EventEmitter()

function pong() {
  console.log('pong')
}

ee.on('ping', pong)
ee.once('ping', pong)
ee.removeListener('ping', pong)

ee.emit('ping')
ee.emit('ping')
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### 参数

###### event

[`CommonEvents`](../type-aliases/CommonEvents.md)

###### listener

(`eventName`, `listener`) => `void`

##### 返回

`this`

##### 添加于

v0.1.26

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`removeListener`](AbstractCursor.md#removelistener)

#### 调用签名

> **removeListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5090

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
function callback(stream) {
  console.log('someone connected!')
}
server.on('connection', callback)
// ...
server.removeListener('connection', callback)
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events'

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()

function callbackA() {
  console.log('A')
  myEmitter.removeListener('event', callbackB)
}

function callbackB() {
  console.log('B')
}

myEmitter.on('event', callbackA)

myEmitter.on('event', callbackB)

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event')
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event')
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events'

const ee = new EventEmitter()

function pong() {
  console.log('pong')
}

ee.on('ping', pong)
ee.once('ping', pong)
ee.removeListener('ping', pong)

ee.emit('ping')
ee.emit('ping')
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### 参数

###### event

`string` \| `symbol`

###### listener

[`GenericListener`](../type-aliases/GenericListener.md)

##### 返回

`this`

##### 添加于

v0.1.26

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`removeListener`](AbstractCursor.md#removelistener)

***

### rewind()

> **rewind**(): `void`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:131

Rewind this cursor to its uninitialized state. Any options that are present on the cursor will
remain in effect. Iterating this cursor will cause new queries to be sent to the server, even
if the resultant data has already been retrieved by this cursor.

#### 返回

`void`

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`rewind`](AbstractCursor.md#rewind)

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:5107

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### 参数

##### n

`number`

#### 返回

`this`

#### 添加于

v0.3.5

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`setMaxListeners`](AbstractCursor.md#setmaxlisteners)

***

### stream()

> **stream**(`options?`): `Readable` & `AsyncIterable`\<`any`, `any`, `any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:28

#### 参数

##### options?

[`CursorStreamOptions`](../interfaces/CursorStreamOptions.md)

#### 返回

`Readable` & `AsyncIterable`\<`any`, `any`, `any`\>

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`stream`](AbstractCursor.md#stream)

***

### toArray()

> **toArray**(): `Promise`\<`any`[]\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:51

Returns an array of documents. The caller is responsible for making sure that there
is enough memory to store the results. Note that the array only contains partial
results when this cursor had been previously accessed. In that case,
cursor.rewind() can be used to reset the cursor.

#### 返回

`Promise`\<`any`[]\>

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`toArray`](AbstractCursor.md#toarray)

***

### tryNext()

> **tryNext**(): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:35

Try to get the next available document from the cursor or `null` if an empty batch is returned

#### 返回

`Promise`\<`any`\>

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`tryNext`](AbstractCursor.md#trynext)

***

### withReadConcern()

> **withReadConcern**(`readConcern`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:113

Set the ReadPreference for the cursor.

#### 参数

##### readConcern

[`ReadConcernLike`](../type-aliases/ReadConcernLike.md)

#### 返回

`this`

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`withReadConcern`](AbstractCursor.md#withreadconcern)

***

### withReadPreference()

> **withReadPreference**(`readPreference`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:107

Set the ReadPreference for the cursor.

#### 参数

##### readPreference

[`ReadPreferenceLike`](../type-aliases/ReadPreferenceLike.md)

The new read preference for the cursor.

#### 返回

`this`

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`withReadPreference`](AbstractCursor.md#withreadpreference)

***

### addAbortListener()

> `static` **addAbortListener**(`signal`, `resource`): `Disposable`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:437

**`Experimental`**

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events'

function example(signal) {
  let disposable
  try {
    signal.addEventListener('abort', e => e.stopImmediatePropagation())
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    })
  }
  finally {
    disposable?.[Symbol.dispose]()
  }
}
```

#### 参数

##### signal

`AbortSignal`

##### resource

(`event`) => `void`

#### 返回

`Disposable`

Disposable that removes the `abort` listener.

#### 添加于

v20.5.0

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`addAbortListener`](AbstractCursor.md#addabortlistener)

***

### getEventListeners()

> `static` **getEventListeners**(`emitter`, `name`): `Function`[]

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:358

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { EventEmitter, getEventListeners } from 'node:events'

{
  const ee = new EventEmitter()
  const listener = () => console.log('Events are fun')
  ee.on('foo', listener)
  console.log(getEventListeners(ee, 'foo')) // [ [Function: listener] ]
}
{
  const et = new EventTarget()
  const listener = () => console.log('Events are fun')
  et.addEventListener('foo', listener)
  console.log(getEventListeners(et, 'foo')) // [ [Function: listener] ]
}
```

#### 参数

##### emitter

`EventEmitter`\<`DefaultEventMap`\> \| `EventTarget`

##### name

`string` \| `symbol`

#### 返回

`Function`[]

#### 添加于

v15.2.0, v14.17.0

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`getEventListeners`](AbstractCursor.md#geteventlisteners)

***

### getMaxListeners()

> `static` **getMaxListeners**(`emitter`): `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:387

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { EventEmitter, getMaxListeners, setMaxListeners } from 'node:events'

{
  const ee = new EventEmitter()
  console.log(getMaxListeners(ee)) // 10
  setMaxListeners(11, ee)
  console.log(getMaxListeners(ee)) // 11
}
{
  const et = new EventTarget()
  console.log(getMaxListeners(et)) // 10
  setMaxListeners(11, et)
  console.log(getMaxListeners(et)) // 11
}
```

#### 参数

##### emitter

`EventEmitter`\<`DefaultEventMap`\> \| `EventTarget`

#### 返回

`number`

#### 添加于

v19.9.0

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`getMaxListeners`](AbstractCursor.md#getmaxlisteners-1)

***

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `eventName`): `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:330

A class method that returns the number of listeners for the given `eventName` registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events'

const myEmitter = new EventEmitter()
myEmitter.on('event', () => {})
myEmitter.on('event', () => {})
console.log(listenerCount(myEmitter, 'event'))
// Prints: 2
```

#### 参数

##### emitter

`EventEmitter`

The emitter to query

##### eventName

`string` \| `symbol`

The event name

#### 返回

`number`

#### 添加于

v0.9.12

#### 已被弃用

Since v3.2.0 - Use `listenerCount` instead.

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`listenerCount`](AbstractCursor.md#listenercount-1)

***

### on()

#### 调用签名

> `static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterator`\<`any`[]\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:303

```js
import { EventEmitter, on } from 'node:events'
import process from 'node:process'

const ee = new EventEmitter()

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar')
  ee.emit('foo', 42)
})

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event) // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { EventEmitter, on } from 'node:events'
import process from 'node:process'

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter()

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar')
    ee.emit('foo', 42)
  })

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event) // prints ['bar'] [42]
  }
  // Unreachable here
})()

process.nextTick(() => ac.abort())
```

Use the `close` option to specify an array of event names that will end the iteration:

```js
import { EventEmitter, on } from 'node:events'
import process from 'node:process'

const ee = new EventEmitter()

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar')
  ee.emit('foo', 42)
  ee.emit('close')
})

for await (const event of on(ee, 'foo', { close: ['close'] })) {
  console.log(event) // prints ['bar'] [42]
}
// the loop will exit after 'close' is emitted
console.log('done') // prints 'done'
```

##### 参数

###### emitter

`EventEmitter`

###### eventName

`string` \| `symbol`

###### options?

`StaticEventEmitterIteratorOptions`

##### 返回

`AsyncIterator`\<`any`[]\>

An `AsyncIterator` that iterates `eventName` events emitted by the `emitter`

##### 添加于

v13.6.0, v12.16.0

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`on`](AbstractCursor.md#on-1)

#### 调用签名

> `static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterator`\<`any`[]\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:308

```js
import { EventEmitter, on } from 'node:events'
import process from 'node:process'

const ee = new EventEmitter()

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar')
  ee.emit('foo', 42)
})

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event) // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { EventEmitter, on } from 'node:events'
import process from 'node:process'

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter()

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar')
    ee.emit('foo', 42)
  })

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event) // prints ['bar'] [42]
  }
  // Unreachable here
})()

process.nextTick(() => ac.abort())
```

Use the `close` option to specify an array of event names that will end the iteration:

```js
import { EventEmitter, on } from 'node:events'
import process from 'node:process'

const ee = new EventEmitter()

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar')
  ee.emit('foo', 42)
  ee.emit('close')
})

for await (const event of on(ee, 'foo', { close: ['close'] })) {
  console.log(event) // prints ['bar'] [42]
}
// the loop will exit after 'close' is emitted
console.log('done') // prints 'done'
```

##### 参数

###### emitter

`EventTarget`

###### eventName

`string`

###### options?

`StaticEventEmitterIteratorOptions`

##### 返回

`AsyncIterator`\<`any`[]\>

An `AsyncIterator` that iterates `eventName` events emitted by the `emitter`

##### 添加于

v13.6.0, v12.16.0

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`on`](AbstractCursor.md#on-1)

***

### once()

#### 调用签名

> `static` **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:217

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { EventEmitter, once } from 'node:events'
import process from 'node:process'

const ee = new EventEmitter()

process.nextTick(() => {
  ee.emit('myevent', 42)
})

const [value] = await once(ee, 'myevent')
console.log(value)

const err = new Error('kaboom')
process.nextTick(() => {
  ee.emit('error', err)
})

try {
  await once(ee, 'myevent')
}
catch (err) {
  console.error('error happened', err)
}
```

The special handling of the `'error'` event is only used when `events.once()` is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events'

const ee = new EventEmitter()

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch(err => console.error('error', err.message))

ee.emit('error', new Error('boom'))

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events'

const ee = new EventEmitter()
const ac = new AbortController()

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal })
    console.log('event emitted!')
  }
  catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!')
    }
    else {
      console.error('There was an error', error.message)
    }
  }
}

foo(ee, 'foo', ac.signal)
ac.abort() // Abort waiting for the event
ee.emit('foo') // Prints: Waiting for the event was canceled!
```

##### 参数

###### emitter

`EventEmitter`

###### eventName

`string` \| `symbol`

###### options?

`StaticEventEmitterOptions`

##### 返回

`Promise`\<`any`[]\>

##### 添加于

v11.13.0, v10.16.0

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`once`](AbstractCursor.md#once-1)

#### 调用签名

> `static` **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:222

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { EventEmitter, once } from 'node:events'
import process from 'node:process'

const ee = new EventEmitter()

process.nextTick(() => {
  ee.emit('myevent', 42)
})

const [value] = await once(ee, 'myevent')
console.log(value)

const err = new Error('kaboom')
process.nextTick(() => {
  ee.emit('error', err)
})

try {
  await once(ee, 'myevent')
}
catch (err) {
  console.error('error happened', err)
}
```

The special handling of the `'error'` event is only used when `events.once()` is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events'

const ee = new EventEmitter()

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch(err => console.error('error', err.message))

ee.emit('error', new Error('boom'))

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events'

const ee = new EventEmitter()
const ac = new AbortController()

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal })
    console.log('event emitted!')
  }
  catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!')
    }
    else {
      console.error('There was an error', error.message)
    }
  }
}

foo(ee, 'foo', ac.signal)
ac.abort() // Abort waiting for the event
ee.emit('foo') // Prints: Waiting for the event was canceled!
```

##### 参数

###### emitter

`EventTarget`

###### eventName

`string`

###### options?

`StaticEventEmitterOptions`

##### 返回

`Promise`\<`any`[]\>

##### 添加于

v11.13.0, v10.16.0

##### 继承自

[`AbstractCursor`](AbstractCursor.md).[`once`](AbstractCursor.md#once-1)

***

### setMaxListeners()

> `static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:402

```js
import { EventEmitter, setMaxListeners } from 'node:events'

const target = new EventTarget()
const emitter = new EventEmitter()

setMaxListeners(5, target, emitter)
```

#### 参数

##### n?

`number`

A non-negative number. The maximum number of listeners per `EventTarget` event.

##### eventTargets

...(`EventEmitter`\<`DefaultEventMap`\> \| `EventTarget`)[]

Zero or more \{EventTarget\} or \{EventEmitter\} instances. If none are specified, `n` is set as the default max for all newly created \{EventTarget\} and \{EventEmitter\}
objects.

#### 返回

`void`

#### 添加于

v15.4.0

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`setMaxListeners`](AbstractCursor.md#setmaxlisteners-1)

## Events

### CLOSE

> `readonly` `static` **CLOSE**: `"close"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:15

#### 继承自

[`AbstractCursor`](AbstractCursor.md).[`CLOSE`](AbstractCursor.md#close)
