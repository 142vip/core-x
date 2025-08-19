import type { config } from 'mssql'
import type { DataSourceParseResponse } from '../../data-source.interface'
import { DataSourceManager } from '@142vip/data-source'
import { ConnectionPool } from 'mssql'
import { handlerError } from '../../data-source.utils'

interface MsSQLOptions {
  host: string
  port: number
  username: string
  password: string
  database: string
  querySql: string
}

/**
 * SQL Server 数据源
 */
export class VipMssql extends DataSourceManager {
  /**
   * 获取连接数据
   */
  public override async getConnectionData(options: MsSQLOptions): Promise<DataSourceParseResponse> {
    let connection
    try {
      const pool = new ConnectionPool({
        user: options.username,
        password: options.password,
        server: options.host,
        port: options.port,
        database: options.database,

        // encrypt: true, //使用windows azure，需要设置次配置。
        trustServerCertificate: true, // 新版要设为true，否则会报“ConnectionError: Failed to connect to localhost:1433 - self signed certificate”错误。
        // issues: https://github.com/tediousjs/tedious/issues/1449
        cryptoCredentialsDetails: {
          ciphers: 'DEFAULT@SECLEVEL=0',
        },
      } as config)

      connection = await pool.connect()
      const queryRes = await connection.request().query(options.querySql)

      return { success: true, data: queryRes != null ? queryRes.recordset : [] }
    }
    catch (err) {
      return handlerError(err)
    }
    finally {
      await connection?.close()
    }
  }
}
