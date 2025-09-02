import type { QueryResult, QueryResultRow } from 'pg'
import type { DataSourceConnector } from '../../data-source.connector'
import type { DataSourceConnectionOptions, DataSourceParseResponse } from '../../data-source.interface'
import { Pool } from 'pg'
import { handlerDataSourceConnectError } from '../../data-source.utils'

export interface KingBaseOptions extends DataSourceConnectionOptions {
  database: string
}

/**
 * 金仓数据源
 */
export class VipKingBase implements DataSourceConnector<KingBaseOptions> {
  /**
   * 获取连接数据
   */
  public async getConnectionData(options: KingBaseOptions): Promise<DataSourceParseResponse> {
    let connection
    try {
      connection = new Pool({
        host: options.host,
        port: options.port,
        database: options.database,
        user: options.username,
        password: options.password,
      })
      // 执行sql语句
      const queryResult: QueryResult<QueryResultRow> = await connection.query(options.querySql)
      const data = queryResult.rows != null ? queryResult.rows : []

      // 处理数据格式
      return { success: true, data }
    }
    catch (error) {
      return handlerDataSourceConnectError(VipKingBase.name, error)
    }
    finally {
      await connection?.end()
    }
  }
}
