# @142vip/nest-logger

[![NPM version](https://img.shields.io/npm/v/@142vip/nest-logger?labelColor=0b3d52&color=1da469&label=version)](https://www.npmjs.com/package/@142vip/nest-logger)

Nest.js 框架日志模块，集成终端、文件等形式日志

## 安装

```shell
# npm
npm install @142vip/nest-logger @142vip/nest

# pnpm
pnpm add @142vip/nest-logger @142vip/nest
```

## 功能

- [x] 基于 `nestjs-pino` + `pino` 的 Nest 日志模块
- [x] `NestLoggerModule.register` 注册多路输出（终端 / 文件）
- [x] `NestLoggerModule.useLogger` 替换 Nest 内置 Logger
- [x] `@InjectLogger()` 注入 `PinoLogger`（封装 `InjectPinoLogger`）
- [x] 终端美化输出 `ConsoleLogger`（`pino-pretty`）
- [x] HTTP 请求 `x-request-id` 作为 `genReqId`

## 配置

通过 `NestLoggerConfig` 传入 `register`：

```ts
import { LoggerLevelEnum, NestLoggerModule } from '@142vip/nest-logger'

NestLoggerModule.register({
  consoleLogger: { level: LoggerLevelEnum.info },
  // fileLogger: pino destination stream（可选）
})
```

`@142vip/nest-starter` 在 `enableLogger: true` 时自动注册，默认终端级别 `trace`。

## 使用

服务内注入日志：

```ts
import { InjectLogger } from '@142vip/nest-logger'
import { Injectable } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'

@Injectable()
export class AppService {
  constructor(@InjectLogger(AppService.name) private readonly logger: PinoLogger) {}

  demo() {
    this.logger.info('hello')
  }
}
```

应用启动后启用框架日志：

```ts
import { NestLoggerModule } from '@142vip/nest-logger'

NestLoggerModule.useLogger(app)
```

## 升级

```shell
# 依赖更新
pnpm upgrade @142vip/nest-logger
```

## 参考

- [@142vip/nest-logger](https://www.npmjs.com/package/@142vip/nest-logger)
- [nestjs-pino](https://github.com/iamolegga/nestjs-pino)

## 证书

[MIT](https://opensource.org/license/MIT)

Copyright (c) 2019-present, @142vip 储凡

**仅供学习参考，商业使用请保留作者版权信息，作者不保证也不承担任何软件的使用风险。**
