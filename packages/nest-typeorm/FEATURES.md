# @142vip/nest-typeorm

技术说明。不随 npm 发布。

## 定位

Nest + TypeORM 的薄封装：`@Global()` 模块直接委托 `@nestjs/typeorm` 的 `forRoot` / `forRootAsync` / `forFeature`，避免额外包装导致 `DataSource` 无法全局注入。

提供 `DataType` 枚举供连接类型判别；**不**包含 `TypeormConfig` / `TypeormMysqlConfig` / `TypeormPostgresConfig`（这些配置类在 `@142vip/nest-starter` 的 `config/plugin/typeorm.config.ts` 导出）。

通过 `pkgs.ts` 再导出 `@nestjs/typeorm` 与 `typeorm` 全量符号，便于业务单一入口 import。

## 功能

入口 `src/index.ts` 导出：

- `DataType`（`core/data-type.ts`）
- `NestTypeOrmModule`（`core/typeorm.module.ts`）
- `pkgs.ts` 全部（`export * from '@nestjs/typeorm'` + `export * from 'typeorm'`）

### `NestTypeOrmModule`（`@Global()` `@Module({})`）

- `forRoot(options?: TypeOrmModuleOptions = {}): DynamicModule` — 直接 `TypeOrmModule.forRoot(options)`
- `forRootAsync(options: TypeOrmModuleAsyncOptions): DynamicModule` — 直接 `TypeOrmModule.forRootAsync(options)`
- `forFeature(entities: EntityClassOrSchema[] = [], dataSource?: DataSource | DataSourceOptions | string = DEFAULT_DATA_SOURCE_NAME): DynamicModule` — 直接 `TypeOrmModule.forFeature(entities, dataSource)`
- `register(config: TypeOrmModuleOptions): DynamicModule` — 别名，等同 `forRoot(config)`

### `DataType` 枚举

- `MYSQL = 'mysql'`
- `POSTGRES = 'postgres'`

用于 `nest-starter` 的 `StarterConfig.typeorm` `@Type` 工厂选择 `TypeormMysqlConfig` / `TypeormPostgresConfig`。

### `pkgs.ts` 再导出范围

- `@nestjs/typeorm`：`export *` 全部再导出（常用：`TypeOrmModule`、`InjectRepository`、`InjectDataSource`、`getRepositoryToken`、`getDataSourceToken`）
- `typeorm`：`export *` 全部再导出（常用：`Entity`、`Column`、`PrimaryGeneratedColumn`、`Repository`、`DataSource`、`MigrationInterface`、`In`、`Like`、`IsNull`）

本包**不**维护 typeorm 符号白名单；以安装版本 `typeorm@0.3.30` / `@nestjs/typeorm@11.0.0` 的公开 API 为准。

### 与 `nest-starter` 的联动（配置类归属 starter）

`NestStarter.registerGlobalModules` 在 `nestStaterConfig.typeorm != null` 时调用：

```ts
NestTypeOrmModule.forRoot(nestStaterConfig.typeorm)
```

传入对象须满足 `@142vip/nest-starter` 导出的配置类（经 class-validator 校验后作为 `TypeOrmModuleOptions`）：

**`TypeormConfig` 公共字段**（`nest-starter` `config/plugin/typeorm.config.ts`）：

- `url?` `host?` `port?` `username?` `password?` `database?`
- `type` — `DataType.MYSQL` | `DataType.POSTGRES`
- `autoLoadEntities` — 默认 `true`
- `synchronize` — 默认 `false`
- `logging` — 默认 `false`
- `poolSize?` — 最大 `25`

**`TypeormMysqlConfig` 额外**：

- `type` — 固定 `mysql`
- `supportBigNumbers` — 默认 `true`
- `bigNumberStrings` — 默认 `false`
- `charset` — 默认 `'utf8mb4_unicode_ci'`

**`TypeormPostgresConfig` 额外**：

- `type` — 固定 `postgres`
- `parseInt8` — 默认 `true`
- `schema?`

`StarterConfig` 根据 `typeorm.type` 或 `url` 协议（`postgres:` / `mysql:`）选择校验类。

### peerDependencies

- `@142vip/nest`
- `@nestjs/typeorm` `11.0.0`
- `typeorm` `0.3.30`

## 配置

本包无独立配置。连接参数通过应用 `config/config.js` 或 `config/xxx.config.js` 的 `starter.typeorm` 写入，由 `nest-starter` 校验后传入 `NestTypeOrmModule.forRoot`。

自定义 Nest 应用可直接 `NestTypeOrmModule.forRoot({ ... })` 或 `forRootAsync`，选项形状同 `@nestjs/typeorm` 文档。

## 最佳实践

- 生产环境保持 `synchronize: false`，用迁移管理 schema
- 实体在业务模块 `NestTypeOrmModule.forFeature([Entity])` 注册；根连接仅 `forRoot` 一次
- 优先 `url` 连接串；多环境用不同 `xxx.config.js` 隔离
- import TypeORM 符号优先从 `@142vip/nest-typeorm` 统一入口，减少与 peer 版本漂移
- 勿再包一层自定义 `TypeOrmModule`，避免 `DataSource` 注入失败（源码注释已说明委托原因）
- MySQL 需要 emoji 时使用 starter 默认 `utf8mb4_unicode_ci`
- 与 `nest-starter` 联用时删除手写 `TypeOrmModule.forRoot`，只配 `starter.typeorm`

## 构建

`tsc` → CommonJS

```shell
cd packages/nest-typeorm && pnpm build
```

## 验证

```shell
cd packages/nest-typeorm && pnpm build && pnpm typecheck && pnpm test
```

## 演示

`apps/nest-demo`：

- `config/test.config.js` — `starter.typeorm`（PostgreSQL `url`、`synchronize` `logging`）
- `AppModule.register()` — `nestStaterConfig.typeorm != null` 时加载 `TypeormExampleModule`
- `typeorm-example` — `forFeature`、`InjectRepository`、`user-account.entity` 示例
