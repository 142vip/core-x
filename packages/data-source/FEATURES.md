# @142vip/data-source

技术说明。不随 npm 发布。

## 定位

为多类型外部数据源提供统一的连接与查询入口（`DataSourceConnector`），返回 `DataSourceParseResponse`；覆盖 SQL、NoSQL、HTTP API 与 CSV。

## 功能

### 子路径

- `@142vip/data-source`：主入口（`src/index.ts` 聚合 `core/`、`data-source.interface.ts`、`data-source.manager.ts`、`data-source.utils.ts`）

### 通用接口（`data-source.interface.ts`）

- `DataSourceResponseError`
  - `message?: string`
- `DataSourceParseResponse<T = unknown> extends DataSourceResponseError`
  - `success: boolean`
  - `data?: T`
- `DataSourceTable`
  - `name: string`
  - `schema: string`
- `DataSourceColumn`
  - `table: string`
  - `name: string`
  - `schema: string`
  - `type: string`
  - `comment?: string`
- `ColumnComment`
  - `name: string`
  - `comment: string`
- `ApiQueryConfig`
  - `path: string`
  - `params: string`
  - `body: string`
  - `headers: string`
- `DataSourceConnectionOptions`（SQL 基础连接）
  - `host: string`
  - `port: number`
  - `username: string`
  - `password: string`
  - `querySql: string`

### 连接器契约（`data-source.connector.ts`）

- `DataSourceConnector<T>`
  - `getConnectionData(params: T): Promise<DataSourceParseResponse>`

### 管理器契约（`data-source.manager.ts`，接口约定，供上层实现）

- `DataSourceManager`
  - `parseData(): Promise<DataSourceParseResponse>`
  - `testConnect(): Promise<DataSourceParseResponse>`
  - `getDataBaseNames(): Promise<DataSourceParseResponse<string[]>>`
  - `getTableNames(): Promise<DataSourceParseResponse<DataSourceTable[]>>`
  - `getTableColumns(tableName: string, schema?: string): Promise<DataSourceParseResponse<DataSourceColumn[]>>`

### 工具函数（`data-source.utils.ts`）

- `testURL(url: string): boolean`
- `checkPasswordIsNil(password?: string | null): { password: string | null }`：空密码返回 `null`，非空返回 `'******'`
- `handlerDataSourceConnectError<T>(dataSourceName: string, error: any): DataSourceParseResponse<T>`

### SQL / NoSQL 连接器（`core/sql/`）

均实现 `DataSourceConnector<T>`，公开方法均为 `getConnectionData(options): Promise<DataSourceParseResponse>`。

- `VipMysql` + `MysqlOptions extends DataSourceConnectionOptions`
  - 额外字段：`database: string`
  - 连接 flag：`flags: ['-CONNECT_ATTRS']`（兼容 Doris）
- `VipPostgreSql` + `PostgreSqlOptions extends DataSourceConnectionOptions`
  - 额外字段：`database: string`
- `VipOracle` + `OracleOptions extends DataSourceConnectionOptions`
  - 额外字段：`sid?: string`、`serviceName?: string`
- `VipSqlServer` + `SqlServerOptions extends DataSourceConnectionOptions`
  - 额外字段：`database: string`
- `VipMongo` + `MongoDBOptions extends Omit<DataSourceConnectionOptions, 'querySql'>`
  - 额外字段：`database: string`、`table: string`、`findFilter?: Record<string, any>`、`findOptions?: Record<string, any>`
- `VipClickhouse` + `ClickHouseOptions extends DataSourceConnectionOptions`
  - 额外字段：`database: string`
- `VipDameng` + `DamengOptions extends DataSourceConnectionOptions`（无额外必填字段）
- `VipKingBase` + `KingBaseOptions extends DataSourceConnectionOptions`
  - 额外字段：`database: string`
- `VipIbmDB` + `IbmDBOptions extends DataSourceConnectionOptions`
  - 额外字段：`database: string`

### API 连接器（`core/apis/`）

- `VipHttpApi` + `HttpApiOptions extends AxiosRequestConfig`
  - `getConnectionData<T>(options): Promise<DataSourceParseResponse<T>>`：`status === 200` 时直接返回 axios `data`，否则 `{ success: false }`
- `VipAliGatewayApi` + `AliGatewayApiOptions extends AliGatewayAPIAuth`
  - `AliGatewayAPIAuth`：`appKey: string`、`appSecret: string`
  - 额外字段：`method: 'post' | 'get' | 'put' | 'delete'`（须全小写）、`url: string`、`bodyParams?: Record<string, unknown>`、`headerParams?: Record<string, unknown>`
  - 内部超时：`AliGateway_API_TIMEOUT = 30000`
- `VipDTableApi` + `DTableApiOptions`
  - `apiKey: string`
  - `tableId: string`
  - `viewId: string`
  - `maxRecords?: number`（默认分页上限 `1000`）
  - 关联类型：`DTableAPIData`（`page?`、`size?`、`total?`、`records?`）
  - 默认 API 基址：`https://oapi.dtable.cloud/v0`
- `VipDtStackApi` + `DTStackAPIOptions extends DTStackAPIAuth`
  - `DTStackAPIAuth`：`apiId: number`、`appKey: number`、`appSecret: string`
  - 额外字段：`url: string`、`method: 'GET' | 'POST'`、`pathParams: string`、`headerParams: Record<string, unknown>`、`bodyParams: Record<string, unknown>`、`queryParams: Record<string, unknown>`

### CSV 连接器（`core/vip-csv.ts`）

- `VipCsv` + `CSVOptions`
  - `file: Buffer`
  - `encode: string`（支持 `'utf8'`、`'gbk'` 或自动检测）
  - 解析使用 `csv-parse/sync`，`columns: true`、`skip_empty_lines: true`

### `package.json` 运行时依赖（与 peer 对齐）

- `@clickhouse/client@1.18.5`
- `aliyun-api-gateway@1.1.6`
- `axios@1.11.0`
- `csv-parse@5.5.0`
- `dmdb@1.0.18856`
- `ibm_db@3.3.2`
- `iconv-lite@0.6.3`
- `jschardet@3.0.0`
- `lodash@4.17.21`
- `mongodb@6.19.0`
- `mssql@11.0.1`
- `oracledb@6.1.0`
- `pg@8.11.3`

## 配置

### SQL 类共用 `DataSourceConnectionOptions` 键

- `host`
- `port`
- `username`
- `password`
- `querySql`

### 各连接器额外键

见上文「SQL / NoSQL 连接器」「API 连接器」「CSV 连接器」各 `*Options` 字段列表。

## 最佳实践

- 仅安装实际用到的驱动，避免全量 peer 依赖
- 用 `result.success` 分支处理，`message` 含失败原因
- 密码日志用 `checkPasswordIsNil` 脱敏
- MySQL 连接已设 `flags: ['-CONNECT_ATTRS']` 兼容 Doris，勿随意移除
- 元数据能力按 `DataSourceManager` 接口在业务层封装，当前包以 `getConnectionData` 为主

## 构建

`unbuild` → `cd packages/data-source && pnpm build`

## 验证

```shell
cd packages/data-source && pnpm build && pnpm test && pnpm typecheck
```

## 演示

无
