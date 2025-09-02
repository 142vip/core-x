import type { DataSourceParseResponse } from './data-source.interface'

/**
 * 数据源连接器
 */
export interface DataSourceConnector<T> {
  /**
   * 获取连接数据
   */
  getConnectionData: (params: T) => Promise<DataSourceParseResponse>
}
