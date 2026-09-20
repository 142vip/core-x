# @142vip/nest-logger

技术说明。不随 npm 发布。

## 定位

Nest 与 **Pino** 的桥接层：动态模块注册、`nestjs-pino` HTTP 请求日志、终端 `pino-pretty` 输出。

供 `@142vip/nest-starter` 在 `enableLogger` 时挂载；也可在自定义 Nest 应用中单独 `NestLoggerModule.register` + `useLogger`。

## 功能

入口 `src/index.ts` 导出：

- `ConsoleLogger`、`NestConsoleLoggerConfig`（`adapter/console.logger.ts`）
- `NestLoggerConfig`（`core/logger.config.ts`）
- `InjectLogger`、`NestLogger`（`core/logger.decorator.ts`）
- `NestLoggerAdapter`、`LoggerLevelEnum`（`core/logger.interface.ts`）
- `NestLoggerModule`（`core/logger.module.ts`）

### `NestLoggerModule`

#### `register(loggerConfig: NestLoggerConfig): DynamicModule`

- 内部 `LoggerModule.forRootAsync({ useFactory })`
- 构建 `pino.multistream(loggers)`：
  - `consoleLogger != null` → stream 为 `new ConsoleLogger(consoleLogger)`，level 为 `consoleLogger.level`
  - `fileLogger != null` → stream 为 `fileLogger` 本身，level 为 `fileLogger.level`
- `pinoHttp` 配置数组：
  - 第一项：`genReqId: req => req.headers['x-request-id'] ?? '123'`，`level: 'trace'`
  - 第二项：`pino.multistream(loggers)`

#### `useLogger(app: INestApplication): INestApplication`

- `app.get(Logger)`（`nestjs-pino` 的 `Logger`）
- `app.useLogger(logger)`
- `app.flushLogs()`

### 装饰器与类 `core/logger.decorator.ts`

- `InjectLogger(context?: string)` — 等价 `InjectPinoLogger(context)`，注入 **`PinoLogger`**
- `NestLogger` — 继承 `PinoLogger` 的空子类（可扩展）

### 类型与枚举 `core/logger.interface.ts`

- `NestLoggerAdapter` — `{ write(msg: string): void | Promise<void> }`
- `LoggerLevelEnum` — `error` | `warn` | `info` | `debug` | `trace`

### `NestLoggerConfig` `core/logger.config.ts`

- `consoleLogger?: NestConsoleLoggerConfig`
- `fileLogger?: any` — pino 兼容的 stream 对象（需带 `level` 字段供 multistream 使用）

### `ConsoleLogger` `adapter/console.logger.ts`

- 实现 `NestLoggerAdapter`
- 构造：`PinoPretty({ ...options, destination: process.stdout })`
- `write(msg)` → `stream.push(msg)`

### `NestConsoleLoggerConfig`

- 继承 `pino-pretty` 的 `PrettyOptions`
- `level?: LoggerLevelEnum`

### 运行时依赖（`package.json` `dependencies`）

- `nestjs-pino` `4.4.1`
- `pino` `10.1.0`
- `pino-http` `11.0.0`
- `pino-pretty` `11.3.0`

### peerDependencies

- `@142vip/nest`

## 配置

### 包内 `NestLoggerConfig`

- `consoleLogger` — 终端 pretty 流；`level` 控制该 stream 级别
- `fileLogger` — 任意 pino destination stream（类型为 `any`）

### `@142vip/nest-starter` 侧 `LoggerConfig`（`StarterConfig.logger`，校验用）

- `consoleLogger.level` — `LoggerLevelEnum`
- `fileLogger` — `FileLoggerConfig` 空占位类

**注意**：`NestStarter.registerGlobalModules` 当前固定 `NestLoggerModule.register({ consoleLogger: { level: LoggerLevelEnum.trace } })`，**未**合并 `starter.logger` 配置。

## 最佳实践

- 业务服务用 `@InjectLogger(ClassName.name)` 注入 **`PinoLogger`**，与 `nestjs-pino` 文档一致
- `NestFactory.create` 时设 `bufferLogs: true`（`nest-starter` 已默认），创建后调用 `NestLoggerModule.useLogger(app)`
- 请求链路传递 `x-request-id`，与 `genReqId` 对齐
- 生产可降低 `consoleLogger.level`；文件或其它目的地走 `fileLogger` stream
- 勿与 Nest 内置 `Logger` 混用于同一服务；统一走 Pino
- 扩展格式化优先改 `ConsoleLogger` / `pino-pretty` 选项，避免重复封装 HTTP 日志

## 构建

`tsc` → CommonJS

```shell
cd packages/nest-logger && pnpm build
```

## 验证

```shell
cd packages/nest-logger && pnpm build && pnpm typecheck && pnpm test
```

## 演示

`apps/nest-demo` 在 `config/test.config.js` 中 `enableLogger: true`，经 `nest-starter` 自动注册本模块并 `useLogger`。
