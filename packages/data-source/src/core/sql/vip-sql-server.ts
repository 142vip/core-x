import type { DataSourceConnector } from '../../data-source.connector'
import type { DataSourceConnectionOptions, DataSourceParseResponse } from '../../data-source.interface'
import sqlServer from 'mssql'
import { handlerDataSourceConnectError } from '../../data-source.utils'

export interface SqlServerOptions extends DataSourceConnectionOptions {
  database: string
}

/**
 * SQL Server 数据源
 */
export class VipSqlServer implements DataSourceConnector<SqlServerOptions> {
  /**
   * 获取连接数据
   */
  public async getConnectionData(options: SqlServerOptions): Promise<DataSourceParseResponse> {
    let connection
    try {
      connection = await sqlServer.connect({
        server: options.host,
        port: options.port,
        user: options.username,
        password: options.password,
        database: options.database,
        // 连接池
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000,
        },
        options: {
          // encrypt: true, //使用windows azure，需要设置次配置。
          trustServerCertificate: true, // 新版要设为true，否则会报“ConnectionError: Failed to connect to localhost:1433 - self signed certificate”错误。
          // issues: https://github.com/tediousjs/tedious/issues/1449
          cryptoCredentialsDetails: {
            ciphers: 'DEFAULT@SECLEVEL=0',
          },
        },
      })

      const queryRes = await connection.request().query(options.querySql)
      const data = queryRes != null ? queryRes.recordset : []

      return { success: true, data }
    }
    catch (error) {
      return handlerDataSourceConnectError(VipSqlServer.name, error)
    }
    finally {
      await connection?.close()
    }
  }
}
