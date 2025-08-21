export interface DataSourceResponseError {
  message?: string
}

/**
 * 数据源解析返回
 */
export interface DataSourceParseResponse<T = unknown> {
  success: boolean
  message?: string
  data?: T
}

/**
 * 表列表
 */
export interface DataSourceTable {
  name: string
  schema: string
}

/**
 * 表的列信息
 */
export interface DataSourceColumn {
  table: string
  name: string
  schema: string
  type: string
  comment?: string
}

/**
 * 表的列描述信息
 */
export interface ColumnComment {
  name: string
  comment: string
}

/**
 * API Query 配置
 */
export interface ApiQueryConfig {
  path: string
  params: string
  body: string
  headers: string
}

/**
 * 连接配置
 */
export interface DataSourceConnectionOptions {
  host: string
  port: number
  username: string
  password: string
  database: string
  querySql: string
}
