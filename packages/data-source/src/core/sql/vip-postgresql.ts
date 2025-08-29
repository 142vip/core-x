import type { QueryResult, QueryResultRow } from 'pg'
import type { DataSourceConnectionOptions, DataSourceParseResponse } from '../../data-source.interface'
import { Client } from 'pg'
import { DataSourceManager } from '../../data-source.manager'
import { handlerDataSourceConnectError } from '../../data-source.utils'

export interface PostgreSqlOptions extends DataSourceConnectionOptions {
  database: string
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
        connectionString: this.getConnectURL(options),
        statement_timeout: 5000,
      })
      // 连接
      await pgClient.connect()

      // 查询
      const queryResult: QueryResult<QueryResultRow> = await pgClient.query(options.querySql)

      return { success: true, data: queryResult.rows != null ? queryResult.rows : [] }
    }
    catch (error) {
      return handlerDataSourceConnectError(VipPostgreSql.name, error)
    }
    finally {
      await pgClient?.end()
    }
  }

  /**
   * 获取连接地址
   * @private
   */
  private getConnectURL(options: PostgreSqlOptions): string {
    return `postgresql://${options.username}:${options.password}@${options.host}:${options.port}/${options.database}`
  }
}
