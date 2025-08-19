import type { QueryResult, QueryResultRow } from 'pg'
import type { DataSourceParseResponse, DataSourceResponseError } from '../../data-source.interface'
import { DataSourceManager } from '@142vip/data-source'
import { isEmpty } from 'lodash'
import { Client } from 'pg'

interface PostgreSqlOptions {
  connectURL: string
  querySql: string
}

/**
 * PostgreSQL 数据源
 */
export class VipPostgreSql extends DataSourceManager {
  /**
   * 获取连接数据
   */
  public override async getConnectionData(options: PostgreSqlOptions): Promise<DataSourceParseResponse> {
    let pgClient
    try {
      pgClient = new Client({
        connectionString: options.connectURL,
        statement_timeout: 5000,
      })
      // 连接
      await pgClient.connect()

      // 查询
      const queryResult: QueryResult<QueryResultRow> = await pgClient.query(options.querySql)

      return { success: true, data: queryResult.rows != null ? queryResult.rows : [] }
    }
    catch (err) {
      const error = err as DataSourceResponseError
      return { success: false, message: isEmpty(error?.message) ? '执行sql语句失败' : JSON.stringify(error.message) }
    }
    finally {
      await pgClient?.end()
    }
  }
}
