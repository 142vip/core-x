/**
 * 数据源请求失败时想赢结构
 */
export interface DataSourceResponseError {
  message?: string
}

/**
 * 数据源解析返回
 */
export interface DataSourceParseResponse<T = unknown> extends DataSourceResponseError {
  success: boolean
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
 * SQL连接基础配置
 */
export interface DataSourceConnectionOptions {
  host: string
  port: number
  username: string
  password: string
  querySql: string
}

// /**
//  * 数据源管理器
//  */
// export interface DataSourceManager {
//   /**
//    * 解析数据
//    */
//   parseData: () => Promise<DataSourceParseResponse>
//   /**
//    * 测试连接
//    */
//   testConnect: () => Promise<DataSourceParseResponse>
//   /**
//    * 获取表名列表
//    */
//   getDataBaseNames: () => Promise<DataSourceParseResponse<string[]>>
//   /**
//    * 获取表名列表
//    */
//   getTableNames: () => Promise<DataSourceParseResponse<DataSourceTable[]>>
//   /**
//    * 获取表字段列表
//    */
//   getTableColumns: (tableName: string, schema?: string) => Promise<DataSourceParseResponse<DataSourceColumn[]>>
// }
//
// /**
//  * 数据源连接器
//  */
// export interface DataSourceConnector<T> {
//   /**
//    * 获取连接数据
//    */
//   getConnectionData: (params: T) => Promise<DataSourceParseResponse>
// }
