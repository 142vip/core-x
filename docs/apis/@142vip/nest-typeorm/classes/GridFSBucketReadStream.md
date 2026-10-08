[API 参考](../../../index.md) / [@142vip/nest-typeorm](../index.md) / GridFSBucketReadStream

# 类: GridFSBucketReadStream

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3061

A readable stream that enables you to read buffers from GridFS.

Do not instantiate this class directly. Use `openDownloadStream()` instead.

## theme_extends

- `Readable`

## 实现

- `ReadableStream`

## 构造函数

### 构造函数

> **new GridFSBucketReadStream**(`opts?`): `GridFSBucketReadStream`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:132

#### 参数

##### opts?

`ReadableOptions`

#### 返回

`GridFSBucketReadStream`

#### 继承自

`Readable.constructor`

## 属性

### closed

> `readonly` **closed**: `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:126

Is `true` after `'close'` has been emitted.

#### 添加于

v18.0.0

#### 继承自

`Readable.closed`

***

### destroyed

> **destroyed**: `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:121

Is `true` after `readable.destroy()` has been called.

#### 添加于

v8.0.0

#### 继承自

`Readable.destroyed`

***

### errored

> `readonly` **errored**: `Error` \| `null`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:131

Returns error if the stream has been destroyed with an error.

#### 添加于

v18.0.0

#### 继承自

`Readable.errored`

***

### readable

> **readable**: `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:77

Is `true` if it is safe to call [read](#read), which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

#### 添加于

v11.4.0

#### 实现了

`NodeJS.ReadableStream.readable`

#### 继承自

`Readable.readable`

***

### readableAborted

> `readonly` **readableAborted**: `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:71

**`Experimental`**

Returns whether the stream was destroyed or errored before emitting `'end'`.

#### 添加于

v16.8.0

#### 继承自

`Readable.readableAborted`

***

### readableDidRead

> `readonly` **readableDidRead**: `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:83

**`Experimental`**

Returns whether `'data'` has been emitted.

#### 添加于

v16.7.0, v14.18.0

#### 继承自

`Readable.readableDidRead`

***

### readableEncoding

> `readonly` **readableEncoding**: `BufferEncoding` \| `null`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:88

Getter for the property `encoding` of a given `Readable` stream. The `encoding` property can be set using the [setEncoding](#setencoding) method.

#### 添加于

v12.7.0

#### 继承自

`Readable.readableEncoding`

***

### readableEnded

> `readonly` **readableEnded**: `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:93

Becomes `true` when [`'end'`](https://nodejs.org/docs/latest-v22.x/api/stream.html#event-end) event is emitted.

#### 添加于

v12.9.0

#### 继承自

`Readable.readableEnded`

***

### readableFlowing

> `readonly` **readableFlowing**: `boolean` \| `null`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:99

This property reflects the current state of a `Readable` stream as described
in the [Three states](https://nodejs.org/docs/latest-v22.x/api/stream.html#three-states) section.

#### 添加于

v9.4.0

#### 继承自

`Readable.readableFlowing`

***

### readableHighWaterMark

> `readonly` **readableHighWaterMark**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:104

Returns the value of `highWaterMark` passed when creating this `Readable`.

#### 添加于

v9.3.0

#### 继承自

`Readable.readableHighWaterMark`

***

### readableLength

> `readonly` **readableLength**: `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:111

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

#### 添加于

v9.4.0

#### 继承自

`Readable.readableLength`

***

### readableObjectMode

> `readonly` **readableObjectMode**: `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:116

Getter for the property `objectMode` of a given `Readable` stream.

#### 添加于

v12.3.0

#### 继承自

`Readable.readableObjectMode`

***

### captureRejections

> `static` **captureRejections**: `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:459

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

#### 添加于

v13.4.0, v12.16.0

#### 继承自

`Readable.captureRejections`

***

### captureRejectionSymbol

> `readonly` `static` **captureRejectionSymbol**: *typeof* [`captureRejectionSymbol`](AbstractCursor.md#capturerejectionsymbol)

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:452

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

#### 添加于

v13.4.0, v12.16.0

#### 继承自

`Readable.captureRejectionSymbol`

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
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', () => {
  // do stuff
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
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

`Readable.defaultMaxListeners`

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

`Readable.errorMonitor`

## 方法

### \_construct()?

> `optional` **\_construct**(`callback`): `void`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:133

#### 参数

##### callback

(`error?`) => `void`

#### 返回

`void`

#### 继承自

`Readable._construct`

***

### \_destroy()

> **\_destroy**(`error`, `callback`): `void`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:574

#### 参数

##### error

`Error` \| `null`

##### callback

(`error?`) => `void`

#### 返回

`void`

#### 继承自

`Readable._destroy`

***

### \_read()

> **\_read**(`size`): `void`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:134

#### 参数

##### size

`number`

#### 返回

`void`

#### 继承自

`Readable._read`

***

### \[asyncDispose\]()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:659

Calls `readable.destroy()` with an `AbortError` and returns a promise that fulfills when the stream is finished.

#### 返回

`Promise`\<`void`\>

#### 添加于

v20.4.0

#### 继承自

`Readable.[asyncDispose]`

***

### \[asyncIterator\]()

> **\[asyncIterator\]**(): `AsyncIterator`\<`any`\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:654

#### 返回

`AsyncIterator`\<`any`\>

#### 实现了

`NodeJS.ReadableStream.[asyncIterator]`

#### 继承自

`Readable.[asyncIterator]`

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

#### 实现了

`NodeJS.ReadableStream.[captureRejectionSymbol]`

#### 继承自

`Readable.[captureRejectionSymbol]`

***

### abort()

> **abort**(): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3108

Marks this stream as aborted (will never push another `data` event)
and kills the underlying cursor. Will emit the 'end' event, and then
the 'close' event once the cursor is successfully killed.

#### 返回

`Promise`\<`void`\>

***

### addListener()

#### 调用签名

> **addListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:598

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### 参数

###### event

`"close"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.addListener`

##### 继承自

`Readable.addListener`

#### 调用签名

> **addListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:599

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### 参数

###### event

`"data"`

###### listener

(`chunk`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.addListener`

##### 继承自

`Readable.addListener`

#### 调用签名

> **addListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:600

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### 参数

###### event

`"end"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.addListener`

##### 继承自

`Readable.addListener`

#### 调用签名

> **addListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:601

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### 参数

###### event

`"error"`

###### listener

(`err`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.addListener`

##### 继承自

`Readable.addListener`

#### 调用签名

> **addListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:602

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### 参数

###### event

`"pause"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.addListener`

##### 继承自

`Readable.addListener`

#### 调用签名

> **addListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:603

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### 参数

###### event

`"readable"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.addListener`

##### 继承自

`Readable.addListener`

#### 调用签名

> **addListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:604

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### 参数

###### event

`"resume"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.addListener`

##### 继承自

`Readable.addListener`

#### 调用签名

> **addListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:605

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### 参数

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.addListener`

##### 继承自

`Readable.addListener`

***

### asIndexedPairs()

> **asIndexedPairs**(`options?`): `Readable`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:549

This method returns a new stream with chunks of the underlying stream paired with a counter
in the form `[index, chunk]`. The first index value is `0` and it increases by 1 for each chunk produced.

#### 参数

##### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

#### 返回

`Readable`

a stream of indexed pairs.

#### 添加于

v17.5.0

#### 继承自

`Readable.asIndexedPairs`

***

### compose()

> **compose**\<`T`\>(`stream`, `options?`): `T`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:36

#### 类型参数

##### T

`T` *extends* `ReadableStream`

#### 参数

##### stream

`T` \| `ComposeFnParam` \| `Iterable`\<`T`, `any`, `any`\> \| `AsyncIterable`\<`T`, `any`, `any`\>

##### options?

###### signal

`AbortSignal`

#### 返回

`T`

#### 继承自

`Readable.compose`

***

### destroy()

> **destroy**(`error?`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:586

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'` event (unless `emitClose` is set to `false`). After this call, the readable
stream will release any internal resources and subsequent calls to `push()` will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

#### 参数

##### error?

`Error`

Error which will be passed as payload in `'error'` event

#### 返回

`this`

#### 添加于

v8.0.0

#### 继承自

`Readable.destroy`

***

### drop()

> **drop**(`limit`, `options?`): `Readable`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:535

This method returns a new stream with the first *limit* chunks dropped from the start.

#### 参数

##### limit

`number`

the number of chunks to drop from the readable.

##### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

#### 返回

`Readable`

a stream with *limit* chunks dropped from the start.

#### 添加于

v17.5.0

#### 继承自

`Readable.drop`

***

### emit()

#### 调用签名

> **emit**(`event`): `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:606

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

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

##### 参数

###### event

`"close"`

##### 返回

`boolean`

##### 添加于

v0.1.26

##### 实现了

`NodeJS.ReadableStream.emit`

##### 继承自

`Readable.emit`

#### 调用签名

> **emit**(`event`, `chunk`): `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:607

##### 参数

###### event

`"data"`

###### chunk

`any`

##### 返回

`boolean`

##### 实现了

`NodeJS.ReadableStream.emit`

##### 继承自

`Readable.emit`

#### 调用签名

> **emit**(`event`): `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:608

##### 参数

###### event

`"end"`

##### 返回

`boolean`

##### 实现了

`NodeJS.ReadableStream.emit`

##### 继承自

`Readable.emit`

#### 调用签名

> **emit**(`event`, `err`): `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:609

##### 参数

###### event

`"error"`

###### err

`Error`

##### 返回

`boolean`

##### 实现了

`NodeJS.ReadableStream.emit`

##### 继承自

`Readable.emit`

#### 调用签名

> **emit**(`event`): `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:610

##### 参数

###### event

`"pause"`

##### 返回

`boolean`

##### 实现了

`NodeJS.ReadableStream.emit`

##### 继承自

`Readable.emit`

#### 调用签名

> **emit**(`event`): `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:611

##### 参数

###### event

`"readable"`

##### 返回

`boolean`

##### 实现了

`NodeJS.ReadableStream.emit`

##### 继承自

`Readable.emit`

#### 调用签名

> **emit**(`event`): `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:612

##### 参数

###### event

`"resume"`

##### 返回

`boolean`

##### 实现了

`NodeJS.ReadableStream.emit`

##### 继承自

`Readable.emit`

#### 调用签名

> **emit**(`event`, ...`args`): `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:613

##### 参数

###### event

`string` \| `symbol`

###### args

...`any`[]

##### 返回

`boolean`

##### 实现了

`NodeJS.ReadableStream.emit`

##### 继承自

`Readable.emit`

***

### end()

> **end**(`end?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3102

Sets the 0-based offset in bytes to start streaming from. Throws
an error if this stream has entered flowing mode
(e.g. if you've already called `on('data')`)

#### 参数

##### end?

`number`

Offset in bytes to stop reading at

#### 返回

`this`

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:922

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### 返回

(`string` \| `symbol`)[]

#### 添加于

v6.0.0

#### 实现了

`NodeJS.ReadableStream.eventNames`

#### 继承自

`Readable.eventNames`

***

### every()

> **every**(`fn`, `options?`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:514

This method is similar to `Array.prototype.every` and calls *fn* on each chunk in the stream
to check if all awaited return values are truthy value for *fn*. Once an *fn* call on a chunk
`await`ed return value is falsy, the stream is destroyed and the promise is fulfilled with `false`.
If all of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `true`.

#### 参数

##### fn

(`data`, `options?`) => `boolean` \| `Promise`\<`boolean`\>

a function to call on each chunk of the stream. Async or not.

##### options?

`ArrayOptions`

#### 返回

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for every one of the chunks.

#### 添加于

v17.5.0

#### 继承自

`Readable.every`

***

### filter()

> **filter**(`fn`, `options?`): `Readable`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:442

This method allows filtering the stream. For each chunk in the stream the *fn* function will be called
and if it returns a truthy value, the chunk will be passed to the result stream.
If the *fn* function returns a promise - that promise will be `await`ed.

#### 参数

##### fn

(`data`, `options?`) => `boolean` \| `Promise`\<`boolean`\>

a function to filter chunks from the stream. Async or not.

##### options?

`ArrayOptions`

#### 返回

`Readable`

a stream filtered with the predicate *fn*.

#### 添加于

v17.4.0, v16.14.0

#### 继承自

`Readable.filter`

***

### find()

#### 调用签名

> **find**\<`T`\>(`fn`, `options?`): `Promise`\<`T` \| `undefined`\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:497

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

##### 类型参数

###### T

`T`

##### 参数

###### fn

(`data`, `options?`) => `data is T`

a function to call on each chunk of the stream. Async or not.

###### options?

`ArrayOptions`

##### 返回

`Promise`\<`T` \| `undefined`\>

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

##### 添加于

v17.5.0

##### 继承自

`Readable.find`

#### 调用签名

> **find**(`fn`, `options?`): `Promise`\<`any`\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:501

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

##### 参数

###### fn

(`data`, `options?`) => `boolean` \| `Promise`\<`boolean`\>

a function to call on each chunk of the stream. Async or not.

###### options?

`ArrayOptions`

##### 返回

`Promise`\<`any`\>

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

##### 添加于

v17.5.0

##### 继承自

`Readable.find`

***

### flatMap()

> **flatMap**(`fn`, `options?`): `Readable`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:528

This method returns a new stream by applying the given callback to each chunk of the stream
and then flattening the result.

It is possible to return a stream or another iterable or async iterable from *fn* and the result streams
will be merged (flattened) into the returned stream.

#### 参数

##### fn

(`data`, `options?`) => `any`

a function to map over every chunk in the stream. May be async. May be a stream or generator.

##### options?

`ArrayOptions`

#### 返回

`Readable`

a stream flat-mapped with the function *fn*.

#### 添加于

v17.5.0

#### 继承自

`Readable.flatMap`

***

### forEach()

> **forEach**(`fn`, `options?`): `Promise`\<`void`\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:461

This method allows iterating a stream. For each chunk in the stream the *fn* function will be called.
If the *fn* function returns a promise - that promise will be `await`ed.

This method is different from `for await...of` loops in that it can optionally process chunks concurrently.
In addition, a `forEach` iteration can only be stopped by having passed a `signal` option
and aborting the related AbortController while `for await...of` can be stopped with `break` or `return`.
In either case the stream will be destroyed.

This method is different from listening to the `'data'` event in that it uses the `readable` event
in the underlying machinary and can limit the number of concurrent *fn* calls.

#### 参数

##### fn

(`data`, `options?`) => `void` \| `Promise`\<`void`\>

a function to call on each chunk of the stream. Async or not.

##### options?

`ArrayOptions`

#### 返回

`Promise`\<`void`\>

a promise for when the stream has finished.

#### 添加于

v17.5.0

#### 继承自

`Readable.forEach`

***

### getMaxListeners()

> **getMaxListeners**(): `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:774

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [EventEmitter.defaultMaxListeners](AbstractCursor.md#defaultmaxlisteners).

#### 返回

`number`

#### 添加于

v1.0.0

#### 实现了

`NodeJS.ReadableStream.getMaxListeners`

#### 继承自

`Readable.getMaxListeners`

***

### isPaused()

> **isPaused**(): `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:295

The `readable.isPaused()` method returns the current operating state of the `Readable`.
This is used primarily by the mechanism that underlies the `readable.pipe()` method.
In most typical cases, there will be no reason to use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

#### 返回

`boolean`

#### 添加于

v0.11.14

#### 实现了

`NodeJS.ReadableStream.isPaused`

#### 继承自

`Readable.isPaused`

***

### iterator()

> **iterator**(`options?`): `AsyncIterator`\<`any`\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:425

The iterator created by this method gives users the option to cancel the destruction
of the stream if the `for await...of` loop is exited by `return`, `break`, or `throw`,
or if the iterator should destroy the stream if the stream emitted an error during iteration.

#### 参数

##### options?

###### destroyOnReturn?

`boolean`

When set to `false`, calling `return` on the async iterator,
or exiting a `for await...of` iteration using a `break`, `return`, or `throw` will not destroy the stream.
**Default: `true`**.

#### 返回

`AsyncIterator`\<`any`\>

#### 添加于

v16.3.0

#### 继承自

`Readable.iterator`

***

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`, `listener?`): `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:868

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### 类型参数

##### K

`K`

#### 参数

##### eventName

`string` \| `symbol`

The name of the event being listened for

##### listener?

`Function`

The event handler function

#### 返回

`number`

#### 添加于

v3.2.0

#### 实现了

`NodeJS.ReadableStream.listenerCount`

#### 继承自

`Readable.listenerCount`

***

### listeners()

> **listeners**\<`K`\>(`eventName`): `Function`[]

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:787

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### 类型参数

##### K

`K`

#### 参数

##### eventName

`string` \| `symbol`

#### 返回

`Function`[]

#### 添加于

v0.1.26

#### 实现了

`NodeJS.ReadableStream.listeners`

#### 继承自

`Readable.listeners`

***

### map()

> **map**(`fn`, `options?`): `Readable`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:433

This method allows mapping over the stream. The *fn* function will be called for every chunk in the stream.
If the *fn* function returns a promise - that promise will be `await`ed before being passed to the result stream.

#### 参数

##### fn

(`data`, `options?`) => `any`

a function to map over every chunk in the stream. Async or not.

##### options?

`ArrayOptions`

#### 返回

`Readable`

a stream mapped with the function *fn*.

#### 添加于

v17.4.0, v16.14.0

#### 继承自

`Readable.map`

***

### off()

> **off**\<`K`\>(`eventName`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:747

Alias for `emitter.removeListener()`.

#### 类型参数

##### K

`K`

#### 参数

##### eventName

`string` \| `symbol`

##### listener

(...`args`) => `void`

#### 返回

`this`

#### 添加于

v10.0.0

#### 实现了

`NodeJS.ReadableStream.off`

#### 继承自

`Readable.off`

***

### on()

#### 调用签名

> **on**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:614

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### 参数

###### event

`"close"`

###### listener

() => `void`

The callback function

##### 返回

`this`

##### 添加于

v0.1.101

##### 实现了

`NodeJS.ReadableStream.on`

##### 继承自

`Readable.on`

#### 调用签名

> **on**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:615

##### 参数

###### event

`"data"`

###### listener

(`chunk`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.on`

##### 继承自

`Readable.on`

#### 调用签名

> **on**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:616

##### 参数

###### event

`"end"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.on`

##### 继承自

`Readable.on`

#### 调用签名

> **on**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:617

##### 参数

###### event

`"error"`

###### listener

(`err`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.on`

##### 继承自

`Readable.on`

#### 调用签名

> **on**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:618

##### 参数

###### event

`"pause"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.on`

##### 继承自

`Readable.on`

#### 调用签名

> **on**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:619

##### 参数

###### event

`"readable"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.on`

##### 继承自

`Readable.on`

#### 调用签名

> **on**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:620

##### 参数

###### event

`"resume"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.on`

##### 继承自

`Readable.on`

#### 调用签名

> **on**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:621

##### 参数

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.on`

##### 继承自

`Readable.on`

***

### once()

#### 调用签名

> **once**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:622

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### 参数

###### event

`"close"`

###### listener

() => `void`

The callback function

##### 返回

`this`

##### 添加于

v0.3.0

##### 实现了

`NodeJS.ReadableStream.once`

##### 继承自

`Readable.once`

#### 调用签名

> **once**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:623

##### 参数

###### event

`"data"`

###### listener

(`chunk`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.once`

##### 继承自

`Readable.once`

#### 调用签名

> **once**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:624

##### 参数

###### event

`"end"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.once`

##### 继承自

`Readable.once`

#### 调用签名

> **once**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:625

##### 参数

###### event

`"error"`

###### listener

(`err`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.once`

##### 继承自

`Readable.once`

#### 调用签名

> **once**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:626

##### 参数

###### event

`"pause"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.once`

##### 继承自

`Readable.once`

#### 调用签名

> **once**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:627

##### 参数

###### event

`"readable"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.once`

##### 继承自

`Readable.once`

#### 调用签名

> **once**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:628

##### 参数

###### event

`"resume"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.once`

##### 继承自

`Readable.once`

#### 调用签名

> **once**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:629

##### 参数

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.once`

##### 继承自

`Readable.once`

***

### pause()

> **pause**(): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:259

The `readable.pause()` method will cause a stream in flowing mode to stop
emitting `'data'` events, switching out of flowing mode. Any data that
becomes available will remain in the internal buffer.

```js
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  readable.pause();
  console.log('There will be no additional data for 1 second.');
  setTimeout(() => {
    console.log('Now data will start flowing again.');
    readable.resume();
  }, 1000);
});
```

The `readable.pause()` method has no effect if there is a `'readable'` event listener.

#### 返回

`this`

#### 添加于

v0.9.4

#### 实现了

`NodeJS.ReadableStream.pause`

#### 继承自

`Readable.pause`

***

### pipe()

> **pipe**\<`T`\>(`destination`, `options?`): `T`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:30

#### 类型参数

##### T

`T` *extends* `WritableStream`

#### 参数

##### destination

`T`

##### options?

###### end?

`boolean`

#### 返回

`T`

#### 实现了

`NodeJS.ReadableStream.pipe`

#### 继承自

`Readable.pipe`

***

### prependListener()

#### 调用签名

> **prependListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:630

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### 参数

###### event

`"close"`

###### listener

() => `void`

The callback function

##### 返回

`this`

##### 添加于

v6.0.0

##### 实现了

`NodeJS.ReadableStream.prependListener`

##### 继承自

`Readable.prependListener`

#### 调用签名

> **prependListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:631

##### 参数

###### event

`"data"`

###### listener

(`chunk`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.prependListener`

##### 继承自

`Readable.prependListener`

#### 调用签名

> **prependListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:632

##### 参数

###### event

`"end"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.prependListener`

##### 继承自

`Readable.prependListener`

#### 调用签名

> **prependListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:633

##### 参数

###### event

`"error"`

###### listener

(`err`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.prependListener`

##### 继承自

`Readable.prependListener`

#### 调用签名

> **prependListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:634

##### 参数

###### event

`"pause"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.prependListener`

##### 继承自

`Readable.prependListener`

#### 调用签名

> **prependListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:635

##### 参数

###### event

`"readable"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.prependListener`

##### 继承自

`Readable.prependListener`

#### 调用签名

> **prependListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:636

##### 参数

###### event

`"resume"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.prependListener`

##### 继承自

`Readable.prependListener`

#### 调用签名

> **prependListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:637

##### 参数

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.prependListener`

##### 继承自

`Readable.prependListener`

***

### prependOnceListener()

#### 调用签名

> **prependOnceListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:638

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### 参数

###### event

`"close"`

###### listener

() => `void`

The callback function

##### 返回

`this`

##### 添加于

v6.0.0

##### 实现了

`NodeJS.ReadableStream.prependOnceListener`

##### 继承自

`Readable.prependOnceListener`

#### 调用签名

> **prependOnceListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:639

##### 参数

###### event

`"data"`

###### listener

(`chunk`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.prependOnceListener`

##### 继承自

`Readable.prependOnceListener`

#### 调用签名

> **prependOnceListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:640

##### 参数

###### event

`"end"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.prependOnceListener`

##### 继承自

`Readable.prependOnceListener`

#### 调用签名

> **prependOnceListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:641

##### 参数

###### event

`"error"`

###### listener

(`err`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.prependOnceListener`

##### 继承自

`Readable.prependOnceListener`

#### 调用签名

> **prependOnceListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:642

##### 参数

###### event

`"pause"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.prependOnceListener`

##### 继承自

`Readable.prependOnceListener`

#### 调用签名

> **prependOnceListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:643

##### 参数

###### event

`"readable"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.prependOnceListener`

##### 继承自

`Readable.prependOnceListener`

#### 调用签名

> **prependOnceListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:644

##### 参数

###### event

`"resume"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.prependOnceListener`

##### 继承自

`Readable.prependOnceListener`

#### 调用签名

> **prependOnceListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:645

##### 参数

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.prependOnceListener`

##### 继承自

`Readable.prependOnceListener`

***

### push()

> **push**(`chunk`, `encoding?`): `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:415

#### 参数

##### chunk

`any`

##### encoding?

`BufferEncoding`

#### 返回

`boolean`

#### 继承自

`Readable.push`

***

### rawListeners()

> **rawListeners**\<`K`\>(`eventName`): `Function`[]

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:818

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### 类型参数

##### K

`K`

#### 参数

##### eventName

`string` \| `symbol`

#### 返回

`Function`[]

#### 添加于

v9.4.0

#### 实现了

`NodeJS.ReadableStream.rawListeners`

#### 继承自

`Readable.rawListeners`

***

### read()

> **read**(`size?`): `any`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:212

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If
`size` bytes are not available to be read, `null` will be returned _unless_ the
stream has ended, in which case all of the data remaining in the internal buffer
will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the `size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

#### 参数

##### size?

`number`

Optional argument to specify how much data to read.

#### 返回

`any`

#### 添加于

v0.9.4

#### 实现了

`NodeJS.ReadableStream.read`

#### 继承自

`Readable.read`

***

### reduce()

#### 调用签名

> **reduce**\<`T`\>(`fn`, `initial?`, `options?`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:564

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

##### 类型参数

###### T

`T` = `any`

##### 参数

###### fn

(`previous`, `data`, `options?`) => `T`

a reducer function to call over every chunk in the stream. Async or not.

###### initial?

`undefined`

the initial value to use in the reduction.

###### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

##### 返回

`Promise`\<`T`\>

a promise for the final value of the reduction.

##### 添加于

v17.5.0

##### 继承自

`Readable.reduce`

#### 调用签名

> **reduce**\<`T`\>(`fn`, `initial`, `options?`): `Promise`\<`T`\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:569

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

##### 类型参数

###### T

`T` = `any`

##### 参数

###### fn

(`previous`, `data`, `options?`) => `T`

a reducer function to call over every chunk in the stream. Async or not.

###### initial

`T`

the initial value to use in the reduction.

###### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

##### 返回

`Promise`\<`T`\>

a promise for the final value of the reduction.

##### 添加于

v17.5.0

##### 继承自

`Readable.reduce`

***

### removeAllListeners()

> **removeAllListeners**(`eventName?`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:758

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### 参数

##### eventName?

`string` \| `symbol`

#### 返回

`this`

#### 添加于

v0.1.26

#### 实现了

`NodeJS.ReadableStream.removeAllListeners`

#### 继承自

`Readable.removeAllListeners`

***

### removeListener()

#### 调用签名

> **removeListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:646

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
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
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### 参数

###### event

`"close"`

###### listener

() => `void`

##### 返回

`this`

##### 添加于

v0.1.26

##### 实现了

`NodeJS.ReadableStream.removeListener`

##### 继承自

`Readable.removeListener`

#### 调用签名

> **removeListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:647

##### 参数

###### event

`"data"`

###### listener

(`chunk`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.removeListener`

##### 继承自

`Readable.removeListener`

#### 调用签名

> **removeListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:648

##### 参数

###### event

`"end"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.removeListener`

##### 继承自

`Readable.removeListener`

#### 调用签名

> **removeListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:649

##### 参数

###### event

`"error"`

###### listener

(`err`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.removeListener`

##### 继承自

`Readable.removeListener`

#### 调用签名

> **removeListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:650

##### 参数

###### event

`"pause"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.removeListener`

##### 继承自

`Readable.removeListener`

#### 调用签名

> **removeListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:651

##### 参数

###### event

`"readable"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.removeListener`

##### 继承自

`Readable.removeListener`

#### 调用签名

> **removeListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:652

##### 参数

###### event

`"resume"`

###### listener

() => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.removeListener`

##### 继承自

`Readable.removeListener`

#### 调用签名

> **removeListener**(`event`, `listener`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:653

##### 参数

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### 返回

`this`

##### 实现了

`NodeJS.ReadableStream.removeListener`

##### 继承自

`Readable.removeListener`

***

### resume()

> **resume**(): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:278

The `readable.resume()` method causes an explicitly paused `Readable` stream to
resume emitting `'data'` events, switching the stream into flowing mode.

The `readable.resume()` method can be used to fully consume the data from a
stream without actually processing any of that data:

```js
getReadableStreamSomehow()
  .resume()
  .on('end', () => {
    console.log('Reached the end, but did not read anything.');
  });
```

The `readable.resume()` method has no effect if there is a `'readable'` event listener.

#### 返回

`this`

#### 添加于

v0.9.4

#### 实现了

`NodeJS.ReadableStream.resume`

#### 继承自

`Readable.resume`

***

### setEncoding()

> **setEncoding**(`encoding`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:237

The `readable.setEncoding()` method sets the character encoding for
data read from the `Readable` stream.

By default, no encoding is assigned and stream data will be returned as `Buffer` objects. Setting an encoding causes the stream data
to be returned as strings of the specified encoding rather than as `Buffer` objects. For instance, calling `readable.setEncoding('utf8')` will cause the
output data to be interpreted as UTF-8 data, and passed as strings. Calling `readable.setEncoding('hex')` will cause the data to be encoded in hexadecimal
string format.

The `Readable` stream will properly handle multi-byte characters delivered
through the stream that would otherwise become improperly decoded if simply
pulled from the stream as `Buffer` objects.

```js
const readable = getReadableStreamSomehow();
readable.setEncoding('utf8');
readable.on('data', (chunk) => {
  assert.equal(typeof chunk, 'string');
  console.log('Got %d characters of string data:', chunk.length);
});
```

#### 参数

##### encoding

`BufferEncoding`

The encoding to use.

#### 返回

`this`

#### 添加于

v0.9.4

#### 实现了

`NodeJS.ReadableStream.setEncoding`

#### 继承自

`Readable.setEncoding`

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:768

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

#### 实现了

`NodeJS.ReadableStream.setMaxListeners`

#### 继承自

`Readable.setMaxListeners`

***

### some()

> **some**(`fn`, `options?`): `Promise`\<`boolean`\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:483

This method is similar to `Array.prototype.some` and calls *fn* on each chunk in the stream
until the awaited return value is `true` (or any truthy value). Once an *fn* call on a chunk
`await`ed return value is truthy, the stream is destroyed and the promise is fulfilled with `true`.
If none of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `false`.

#### 参数

##### fn

(`data`, `options?`) => `boolean` \| `Promise`\<`boolean`\>

a function to call on each chunk of the stream. Async or not.

##### options?

`ArrayOptions`

#### 返回

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for at least one of the chunks.

#### 添加于

v17.5.0

#### 继承自

`Readable.some`

***

### start()

> **start**(`start?`): `this`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3094

Sets the 0-based offset in bytes to start streaming from. Throws
an error if this stream has entered flowing mode
(e.g. if you've already called `on('data')`)

#### 参数

##### start?

`number`

0-based offset in bytes to start streaming from

#### 返回

`this`

***

### take()

> **take**(`limit`, `options?`): `Readable`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:542

This method returns a new stream with the first *limit* chunks.

#### 参数

##### limit

`number`

the number of chunks to take from the readable.

##### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

#### 返回

`Readable`

a stream with *limit* chunks taken.

#### 添加于

v17.5.0

#### 继承自

`Readable.take`

***

### toArray()

> **toArray**(`options?`): `Promise`\<`any`[]\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:473

This method allows easily obtaining the contents of a stream.

As this method reads the entire stream into memory, it negates the benefits of streams. It's intended
for interoperability and convenience, not as the primary way to consume streams.

#### 参数

##### options?

`Pick`\<`ArrayOptions`, `"signal"`\>

#### 返回

`Promise`\<`any`[]\>

a promise containing an array with the contents of the stream.

#### 添加于

v17.5.0

#### 继承自

`Readable.toArray`

***

### unpipe()

> **unpipe**(`destination?`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:322

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
import fs from 'node:fs';
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

#### 参数

##### destination?

`WritableStream`

Optional specific stream to unpipe

#### 返回

`this`

#### 添加于

v0.9.4

#### 实现了

`NodeJS.ReadableStream.unpipe`

#### 继承自

`Readable.unpipe`

***

### unshift()

> **unshift**(`chunk`, `encoding?`): `void`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:388

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
import { StringDecoder } from 'node:string_decoder';
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.includes('\n\n')) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
        return;
      }
      // Still reading the header.
      header += str;
    }
  }
}
```

Unlike [push](#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [\_read](#read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

#### 参数

##### chunk

`any`

Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must
be a \{string\}, \{Buffer\}, \{TypedArray\}, \{DataView\} or `null`. For object mode streams, `chunk` may be any JavaScript value.

##### encoding?

`BufferEncoding`

Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`.

#### 返回

`void`

#### 添加于

v0.9.11

#### 实现了

`NodeJS.ReadableStream.unshift`

#### 继承自

`Readable.unshift`

***

### wrap()

> **wrap**(`stream`): `this`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:414

Prior to Node.js 0.10, streams did not implement the entire `node:stream` module API as it is currently defined. (See `Compatibility` for more
information.)

When using an older Node.js library that emits `'data'` events and has a [pause](#pause) method that is advisory only, the `readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
import { OldReader } from './old-api-module.js';
import { Readable } from 'node:stream';
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

#### 参数

##### stream

`ReadableStream`

An "old style" readable stream

#### 返回

`this`

#### 添加于

v0.9.4

#### 实现了

`NodeJS.ReadableStream.wrap`

#### 继承自

`Readable.wrap`

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
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
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

`Readable.addAbortListener`

***

### from()

> `static` **from**(`iterable`, `options?`): `Readable`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:60

A utility method for creating Readable Streams out of iterators.

#### 参数

##### iterable

`Iterable`\<`any`, `any`, `any`\> \| `AsyncIterable`\<`any`, `any`, `any`\>

Object implementing the `Symbol.asyncIterator` or `Symbol.iterator` iterable protocol. Emits an 'error' event if a null value is passed.

##### options?

`ReadableOptions`

Options provided to `new stream.Readable([options])`. By default, `Readable.from()` will set `options.objectMode` to `true`, unless this is explicitly opted out by setting `options.objectMode` to `false`.

#### 返回

`Readable`

#### 添加于

v12.3.0, v10.17.0

#### 继承自

`Readable.from`

***

### fromWeb()

> `static` **fromWeb**(`readableStream`, `options?`): `Readable`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:975

**`Experimental`**

A utility method for creating a `Readable` from a web `ReadableStream`.

#### 参数

##### readableStream

`ReadableStream`

##### options?

`Pick`\<`ReadableOptions`, `"encoding"` \| `"highWaterMark"` \| `"objectMode"` \| `"signal"`\>

#### 返回

`Readable`

#### 添加于

v17.0.0

#### 继承自

`Readable.fromWeb`

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
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
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

`Readable.getEventListeners`

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
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
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

`Readable.getMaxListeners`

***

### isDisturbed()

> `static` **isDisturbed**(`stream`): `boolean`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:65

Returns whether the stream has been read from or cancelled.

#### 参数

##### stream

`Readable` \| `ReadableStream`

#### 返回

`boolean`

#### 添加于

v16.8.0

#### 继承自

`Readable.isDisturbed`

***

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `eventName`): `number`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:330

A class method that returns the number of listeners for the given `eventName` registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
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

`Readable.listenerCount`

***

### on()

#### 调用签名

> `static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterator`\<`any`[]\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:303

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

Use the `close` option to specify an array of event names that will end the iteration:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
  ee.emit('close');
});

for await (const event of on(ee, 'foo', { close: ['close'] })) {
  console.log(event); // prints ['bar'] [42]
}
// the loop will exit after 'close' is emitted
console.log('done'); // prints 'done'
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

`Readable.on`

#### 调用签名

> `static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterator`\<`any`[]\>

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:308

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

Use the `close` option to specify an array of event names that will end the iteration:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
  ee.emit('close');
});

for await (const event of on(ee, 'foo', { close: ['close'] })) {
  console.log(event); // prints ['bar'] [42]
}
// the loop will exit after 'close' is emitted
console.log('done'); // prints 'done'
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

`Readable.on`

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
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()` is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
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

`Readable.once`

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
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()` is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
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

`Readable.once`

***

### setMaxListeners()

> `static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/events.d.ts:402

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
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

`Readable.setMaxListeners`

***

### toWeb()

> `static` **toWeb**(`streamReadable`): `ReadableStream`

定义于: node\_modules/.pnpm/@types+node@22.10.7/node\_modules/@types/node/stream.d.ts:984

**`Experimental`**

A utility method for creating a web `ReadableStream` from a `Readable`.

#### 参数

##### streamReadable

`Readable`

#### 返回

`ReadableStream`

#### 添加于

v17.0.0

#### 继承自

`Readable.toWeb`

## Events

### CLOSE

> `readonly` `static` **CLOSE**: `"close"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3086

Fired when the stream is exhausted and the underlying cursor is killed

***

### DATA

> `readonly` `static` **DATA**: `"data"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3076

Emitted when a chunk of data is available to be consumed.

***

### END

> `readonly` `static` **END**: `"end"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3081

Fired when the stream is exhausted (no more data events).

***

### ERROR

> `readonly` `static` **ERROR**: `"error"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3066

An error occurred

***

### FILE

> `readonly` `static` **FILE**: `"file"`

定义于: node\_modules/.pnpm/typeorm@0.3.30\_ioredis@5.6.0\_mongodb@6.19.0\_mssql@11.0.1\_mysql2@3.15.1\_pg@8.11.3\_ts-node@10.9\_6zvdq3z7xgsf663jy3j6oymho4/node\_modules/typeorm/driver/mongodb/typings.d.ts:3071

Fires when the stream loaded the file document corresponding to the provided id.
