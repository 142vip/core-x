import type { DataSourceConnector } from '../../data-source.connector'
import type { DataSourceConnectionOptions, DataSourceParseResponse } from '../../data-source.interface'
import mysql from 'mysql2/promise'
import { handlerDataSourceConnectError } from '../../data-source.utils'

export interface MysqlOptions extends DataSourceConnectionOptions {
  database: string
}

/**
 * MySQL 数据源
 */
export class VipMysql implements DataSourceConnector<MysqlOptions> {
  /**
   * 获取连接数据
   */
  public async getConnectionData(options: MysqlOptions): Promise<DataSourceParseResponse> {
    let connection
    try {
      connection = await mysql.createConnection({
        host: options.host,
        port: options.port,
        user: options.username,
        password: options.password,
        database: options.database,
        // doris数据库不支持CONNECT_ATTRS flag
        flags: ['-CONNECT_ATTRS'],
      })
      const response = await connection.query(options.querySql)
      // 数据调整
      const data = Array.isArray(response[0]) ? response[0] : response

      return { success: true, data }
    }
    catch (error) {
      return handlerDataSourceConnectError(VipMysql.name, error)
    }
    finally {
      await connection?.end()
    }
  }
}
