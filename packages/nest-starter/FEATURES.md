# @142vip/nest-starter

技术说明。不随 npm 发布。

## 定位

Nest 应用**启动与配置中枢**：解析 `config/` 下 JS 配置、`nest-typed-config` 校验、按 `StarterConfig` 条件注册 Logger / Redis / TypeORM / Swagger，并挂载 `@142vip/nest` 全局拦截器与 `GlobalFilter`。

业务入口：`NestStarter.getInstance().start(AppModule, Config)`。配置就绪后可通过 `nestStaterConfig`、`nestAppConfig`、`getConfig` 读取。

**不导出**（内部实现）：`NestRootModule`、`NestUtil`、`SwaggerManager`、`nestProcess`、`nest-exit.util`。

## 功能

入口 `src/index.ts` 导出：

- `NestAppConfig`（`app.config.ts`）
- `config/` 全部（见下文「配置类与工具」）
- `NestConfigModule`、`useConfigModule`、`getConfig`、`getOptionalConfig`、`nestStaterConfig`、`nestAppConfig`（`config.module.ts`）
- `NestAppModuleClass`、`NestStarterAppModule`、`resolveAppModule`（`nest-app.module.ts`）
- `NestStarter`（`nest-starter.ts`）

### `NestStarter`

#### `getInstance(nestApplicationOptions?: NestApplicationOptions)`

- 单例；首次调用创建实例并缓存 `nestApplicationOptions`（传入 `NestFactory.create` 时与 `{ bufferLogs: true }` 合并）

#### `start(appModule: NestStarterAppModule, rootConfigSchema: ClassConstructor<NestAppConfig>)`

启动顺序：

1. `armNestWatchForceExit()` — watch 模式退出清理
2. `nestConfigUtil.resolveAsync()` — 解析配置文件路径；`NestConfigResolveError` 时 `exitWithNestCliShutdown(1)`
3. `NestConfigModule.register(rootConfigSchema, { configPath })` + `useConfigModule(ConfigModule, rootConfigSchema)`
4. `selectConfig` 读根配置；`enableLogger` 时用 `vipLogger.logByBlank` 打印 JSON
5. `resolveAppModule(appModule)` — 有 `static register()` 则调用（此时 `nestStaterConfig` 已可用）
6. `NestRootModule.register({ imports: [ConfigModule, ...registerGlobalModules(), businessModule], providers: getProviders() })`
7. `NestFactory.create(rootModule, { bufferLogs: true, ...nestApplicationOptions })`
8. `enableLogger` → `NestLoggerModule.useLogger(app)`
9. `app.enableVersioning({ type: VersioningType.URI })`
10. `enableSwagger && swagger != null` → `new SwaggerManager(swagger).register(app)`
11. `app.enableShutdownHooks()`
12. `GET /health` → `200` + `'SERVER OK'`
13. `app.listen(nestStaterConfig.port!)`
14. `NestUtil.printAppModuleStarterLogger()` — 在 `enableLogger` 时打印应用启动信息（`nodeEnv` / `config` / `appName` / `globalPrefix`）、HTTP 地址、Swagger 地址（`enableSwagger` 时）

#### `registerGlobalModules()`（`protected`）

按 `nestStaterConfig` 条件 `imports`：

- `enableLogger` → `NestLoggerModule.register({ consoleLogger: { level: LoggerLevelEnum.trace } })`（**未**读取 `starter.logger` 字段）
- `redis != null` → `NestRedisModule.register(redis)`
- `typeorm != null` → `NestTypeOrmModule.forRoot(typeorm)`

#### `getProviders()`（`protected`）

全局 `APP_INTERCEPTOR`：

- `PropagationInterceptor`
- `ResponseInterceptor`
- `ClassSerializerInterceptor`

全局 `APP_FILTER`：

- `GlobalFilter`

（`APP_PIPE` / `APP_GUARD` 相关代码已注释，未启用。）

### 业务模块约定 `nest-app.module.ts`

- `NestAppModuleClass` — 约定 `static register(): NestModule`（接口约束，非强制继承）
- `NestStarterAppModule` — `Type` | `DynamicModule` | `NestAppModuleClass`
- `resolveAppModule(appModule)` — 检测到 `register` 函数则调用，否则原样作为 Nest 模块

### 配置模块 `config.module.ts`

- `NestConfigModule.register(ConfigSchema, options?)` — `TypedConfigModule.forRoot` + `fileLoader({ absolutePath })`；`options.configPath` 存在时调用 `nestConfigUtil.log`
- `useConfigModule(configModule, rootConfigSchema?)` — `NestStarter.start` 内绑定当前配置模块与 Schema
- `getConfig<T>(schema)` — `selectConfig`，不存在抛 `Config ${name} not found`
- `getOptionalConfig<T>(schema)` — `allowOptional: true`
- `nestStaterConfig` — `StarterConfig` 代理，每次属性访问重新 `getConfig(StarterConfig)`
- `nestAppConfig` — 根配置代理，读 `activeRootConfigSchema`（默认 `NestAppConfig`）

`nestStaterConfig` / `nestAppConfig` / `getConfig` 在 `useConfigModule` 之前访问会抛：`配置尚未就绪：请先完成 NestStarter.start()...`

### 根配置 `NestAppConfig`

- `starter: StarterConfig` — `@ValidateNested` `@Type(() => StarterConfig)` `@IsNotEmpty`

### `StarterConfig`（`config/starter.config.ts`）

- `port: number` — 必填，监听端口
- `globalPrefix?: string` — 可选；**当前 `start()` 未调用 `setGlobalPrefix`**，仅在 `NestUtil` 启动日志中展示
- `redis?: RedisConfig`
- `typeorm?: TypeormMysqlConfig | TypeormPostgresConfig` — `@Type` 工厂：读 `typeorm.type` 或 `new URL(typeorm.url).protocol`（去尾 `:`）选 `TypeormPostgresConfig` / `TypeormMysqlConfig`；无法识别时默认 `TypeormPostgresConfig`
- `sequelize?: SequelizeConfig` — 配置类占位，starter 未自动注册 Sequelize 模块
- `enableSwagger?: boolean`
- `swagger?: SwaggerConfig`
- `enableLogger?: boolean`
- `logger?: LoggerConfig` — 校验用；**`registerGlobalModules` 未使用此字段**

### 配置解析 `nestConfigUtil`（`config/config.util.ts`）

#### 枚举

- `NestDevMode` — `production` | `development`
- `NestConfigLogLevel` — `error` | `warning` | `info`

#### 类型

- `NestConfigPathOptions` — `cwd?` `configDirName?`（默认 `config`）`absolutePath?` `configPath?` `devConfig?`
- `NestConfigPath` — `devMode` `devEnv` `configDir` `configFilePath` `configFileName`
- `NestConfigResolveError` — `logLevel` + `message`；Error 级在非 Jest 环境会先终端输出再 `exit(1)`

#### 方法

- `resolveAsync(options?)` — `NestStarter.start` 使用；开发模式可交互选择 `xxx.config.js`
- `resolveSync(options?)` — 非交互；优先 `config.js`；仅一个 `xxx.config.js` 时可自动选中
- `log(configPath)` — 打印启动模式、环境名、配置文件绝对路径

#### 目录约定（默认 `config/`）

- `config.js` — 生产配置（`NODE_ENV !== local` 时必须存在）
- `xxx.config.js` — 开发配置，`xxx` 为环境名（示例：`local`、`staging`、`test`、`dev`）；环境名须匹配 `^[a-z][\w-]*$`，不可为 `production`

#### 开发模式判定

- `NODE_ENV=local`（`nestProcess.isLocalStartNest()`）→ 开发模式

#### 开发配置选择优先级

1. `options.devConfig` / 环境变量 `RUN_ENV` / `DEV_CONFIG` / `NEST_DEV_CONFIG`
2. 缓存 `node_modules/.cache/@142vip/nest-starter/dev-config`（含 `nestCliPid` 时与当前 nest CLI 祖先进程匹配）
3. 仅一个 `xxx.config.js` → 直接使用并写入缓存
4. TTY 交互 `VipInquirer.promptSelect`（结果写入缓存；Ctrl+C 安全退出）

非 TTY 且多个开发配置且未设环境变量 → `NestConfigResolveError`。

### 插件配置类（`config/plugin/`）

#### `RedisConfig`

- `url?: string`

#### `LoggerConfig`

- `consoleLogger?: ConsoleLoggerConfig`
- `fileLogger?: FileLoggerConfig`

`ConsoleLoggerConfig`：

- `level?: LoggerLevelEnum`（来自 `@142vip/nest-logger`）

`FileLoggerConfig` — 空类，占位。

#### `SwaggerConfig`

- `docPath: string` — 默认 `'doc'`；`@TransformUriPath()` 去前导 `/`
- `envs: Record<string, string>` — 默认 `{ local: 'http://127.0.0.1' }`；供 `NestUtil` 拼 Swagger URL
- `builderOptions: Record<string, any>` — 传入内部 `SwaggerDocumentBuilder`（`title` `description` `version` `serviceTerm` `contact` `license` `globalResponses`）

#### `SequelizeConfig`

- `a?: string` — 占位字段

#### `TypeormConfig` / `TypeormMysqlConfig` / `TypeormPostgresConfig`（**本包导出，非 nest-typeorm**）

`TypeormConfig`（实现 `BaseDataSourceOptions`）：

- `url?` `host?` `port?`（`@TransformToNumber`）`username?` `password?` `database?`
- `type!: DataType.MYSQL | DataType.POSTGRES`（枚举来自 `@142vip/nest-typeorm`）
- `autoLoadEntities` — 默认 `true`
- `synchronize` — 默认 `false`
- `logging` — 默认 `false`
- `poolSize?` — `@Max(25)`

`TypeormMysqlConfig` extends `TypeormConfig`：

- `type` — 固定 `DataType.MYSQL`
- `supportBigNumbers` — 默认 `true`
- `bigNumberStrings` — 默认 `false`
- `charset` — 默认 `'utf8mb4_unicode_ci'`

`TypeormPostgresConfig` extends `TypeormConfig`：

- `type` — 固定 `DataType.POSTGRES`
- `parseInt8` — 默认 `true`
- `schema?`

### 内部 Swagger（未从入口导出）

- `SwaggerManager` — `register(app)`：`SwaggerDocumentBuilder` + `SwaggerModule.createDocument`（`extraModels` 含 `@142vip/nest` 的 `ResponseVo` 系列与分页 DTO/VO）+ `SwaggerModule.setup(docPath, ...)`
- `getTemplate(envName, uiPath, apiUrl)` — 终端 Swagger 日志模板

### `NestUtil`（内部）

- `printAppModuleStarterLogger()` — `enableLogger` 时打印应用名、`NODE_ENV`、配置文件名、`globalPrefix`、本机/局域网 HTTP 地址、各 `swagger.envs` 的 Doc/JSON URL

### peerDependencies

- `@142vip/nest`
- `@142vip/nest-logger`
- `@142vip/nest-redis`
- `@142vip/nest-typeorm`
- `@142vip/utils`

`package.json` 中上述包为 `dependencies`（workspace 内联）。

## 配置

### 配置文件示例（`config/local.config.js`）

```js
module.exports = {
  starter: {
    port: 3000,
    enableSwagger: true,
    enableLogger: true,
    redis: { url: 'redis://127.0.0.1:6379' },
    typeorm: {
      url: 'postgres://user:pass@127.0.0.1:5432/db',
      synchronize: false,
    },
    swagger: {
      docPath: 'doc',
      envs: { local: 'http://127.0.0.1' },
    },
  },
}
```

### 环境变量

- `NODE_ENV=local` — 开发模式，加载 `xxx.config.js`
- `RUN_ENV` / `DEV_CONFIG` / `NEST_DEV_CONFIG` — 指定开发配置环境名（对应 `{name}.config.js`）
- `APP` — `NestUtil` 启动日志中的应用名（`nestProcess.getAppEnv()`）

## 最佳实践

- 入口只调用 `NestStarter.getInstance().start(AppModule, Config)`，避免手写 `NestFactory.create` + `listen`
- 生产部署确保 `config/config.js` 存在；本地用 `local.config.js` / `test.config.js` 隔离密钥
- 多开发配置时用 `RUN_ENV=local`（或 `DEV_CONFIG`）跳过交互，适合 CI 与非 TTY
- 需按配置开关子模块时，业务 `AppModule` 实现 `static register()`，在内读 `nestStaterConfig`（见 `apps/nest-demo`）
- `nestStaterConfig` 须在 `start` 完成之后访问（含 `register()` 内，因 `useConfigModule` 已执行）
- TypeORM 连接类型可由 `typeorm.type` 或 `url` 协议推断；配置类用本包导出的 `TypeormMysqlConfig` / `TypeormPostgresConfig`
- `enableVersioning(URI)` 在 Swagger 注册之前执行（`start` 内已保证）
- 若需自定义日志级别，当前须改 `registerGlobalModules` 或自行 `NestLoggerModule.register`；`starter.logger` 仅做 schema 校验

## 构建

`tsc` → CommonJS

```shell
cd packages/nest-starter && pnpm build
```

## 验证

```shell
cd packages/nest-starter && pnpm build && pnpm typecheck && pnpm test
```

## 演示

`apps/nest-demo`：

- `src/main.ts` — `NestStarter.getInstance().start(AppModule, Config)`
- `config/test.config.js` — `port` `redis` `typeorm` `enableLogger` `enableSwagger` `globalPrefix`
- `AppModule.register()` — 按 `nestStaterConfig.typeorm` / `redis` 条件加载 `TypeormExampleModule` / `RedisExampleModule`
