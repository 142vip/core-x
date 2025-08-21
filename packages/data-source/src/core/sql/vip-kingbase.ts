import type { QueryResult, QueryResultRow } from 'pg'
import type { DataSourceParseResponse } from '../../data-source.interface'
import { Pool } from 'pg'
import { DataSourceManager } from '../../data-source.manager'
import { handlerDataSourceConnectError } from '../../data-source.utils'

interface KingBaseOptions {
  host: string
  port: number
  username: string
  password: string
  database: string
  querySql: string
}

/**
 * 金仓数据源
 */
export class VipKingBase extends DataSourceManager {
  /**
   * 获取连接数据
   */
  public override async getConnectionData(options: KingBaseOptions): Promise<DataSourceParseResponse> {
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

      // 处理数据格式
      return { success: true, data: queryResult.rows != null ? queryResult.rows : [] }
    }
    catch (error) {
      return handlerDataSourceConnectError(VipKingBase.name, error)
    }
    finally {
      await connection?.end()
    }
  }
}
