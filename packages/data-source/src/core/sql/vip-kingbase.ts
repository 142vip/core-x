import type { QueryResult, QueryResultRow } from 'pg'
import type { DataSourceParseResponse, DataSourceResponseError } from '../../data-source.interface'
import { DataSourceManager } from '@142vip/data-source'
import { isEmpty } from 'lodash'
import { Pool } from 'pg'

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
    catch (err) {
      const error = err as DataSourceResponseError
      return { success: false, message: isEmpty(error?.message) ? '执行sql语句失败' : JSON.stringify(error.message) }
    }
    finally {
      await connection?.end()
    }
  }
}
