# @142vip/nest-logger

[![NPM version](https://img.shields.io/npm/v/@142vip/nest-logger?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/nest-logger)

## 安装

```shell
# npm
npm install @142vip/nest-logger
# pnpm
pnpm i @142vip/nest-logger
```

## 配置

## 日志注册

```typescript
NestLoggerModule.register({
  consoleLogger: {
    // ...
  },
  fileLogger: {
    // ...
  },
})
```

## 开启日志

```typescript
// app 实例，使用Logger
NestLoggerModule.useLogger(app)
```
## 日志打印

### 使用 `Logger` 类，不推荐

```typescript
import { Logger } from '@nestjs/common'

export class MyService {
  private readonly logger = new Logger(MyService.name)
  foo() {
    this.logger.verbose({ foo: 'bar' }, 'baz %s', 'qux')
    this.logger.debug('foo %s %o', 'bar', { baz: 'qux' })
    this.logger.log('foo')
  }
}
```

### 使用 `InjectLogger` 装饰器，推荐

```typescript
import { InjectLogger, NestLogger } from '@142vip/nest-logger'

export class MyService {
  constructor(
    private readonly logger: PinoLogger
  ) {
    this.logger.setContext(MyService.name)
  }

  constructor(
    @InjectLogger(MyService.name)
    private readonly logger: NestLogger
  ) {}

  foo() {
    // PinoLogger has same methods as pino instance
    this.logger.trace({ foo: 'bar' }, 'baz %s', 'qux')
    this.logger.debug('foo %s %o', 'bar', { baz: 'qux' })
    this.logger.info('foo')
  }
}
```

### 构造函数初始化

```typescript
import { InjectLogger, NestLogger } from '@142vip/nest-logger'

export class MyService {
  constructor(
    private readonly logger: NestLogger
  ) {
    this.logger.setContext(MyService.name)
  }

  foo() {
    this.logger.trace({ foo: 'bar' }, 'baz %s', 'qux')
    this.logger.debug('foo %s %o', 'bar', { baz: 'qux' })
    this.logger.info('foo')
  }
}
```

## 参考

- [nestjs-pino](https://www.npmjs.com/package/nestjs-pino)
- [pino](https://github.com/pinojs/pino)
- [pino-pretty](https://github.com/pinojs/pino-pretty)
- [pino-http](https://github.com/pinojs/pino-http)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
