import type { DataSourceParseResponse } from '../../data-source.interface'
import mysql from 'mysql2/promise'
import { DataSourceManager } from '../../data-source.manager'
import { handlerDataSourceConnectError } from '../../data-source.utils'

export interface MysqlOptions {
  host: string
  port: number
  username: string
  password: string
  database: string
  querySql: string
}

/**
 * MySQL 数据源
 */
export class VipMysql extends DataSourceManager {
  /**
   * 获取连接数据
   */
  public override async getConnectionData(options: MysqlOptions): Promise<DataSourceParseResponse> {
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
      // 数据过滤
      return { success: true, data: Array.isArray(response[0]) ? response[0] : response }
    }
    catch (error) {
      return handlerDataSourceConnectError(VipMysql.name, error)
    }
    finally {
      await connection?.end()
    }
  }
}
