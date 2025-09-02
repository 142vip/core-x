import type { DataSourceColumn, DataSourceParseResponse, DataSourceTable } from './data-source.interface'
/**
 * 数据源管理器
 */
export interface DataSourceManager {
  /**
   * 解析数据
   */
  parseData: () => Promise<DataSourceParseResponse>
  /**
   * 测试连接
   */
  testConnect: () => Promise<DataSourceParseResponse>
  /**
   * 获取表名列表
   */
  getDataBaseNames: () => Promise<DataSourceParseResponse<string[]>>
  /**
   * 获取表名列表
   */
  getTableNames: () => Promise<DataSourceParseResponse<DataSourceTable[]>>
  /**
   * 获取表字段列表
   */
  getTableColumns: (tableName: string, schema?: string) => Promise<DataSourceParseResponse<DataSourceColumn[]>>
}
