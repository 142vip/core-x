import type { DataSourceParseResponse } from '../../data-source.interface'
import os from 'node:os'
import { DataSourceManager } from '../../data-source.manager'
import { handlerDataSourceConnectError } from '../../data-source.utils'

interface OracleOptions {
  host: string
  port: number
  username: string
  password: string
  database: string
  querySql: string
}

/**
 * Oracle 数据源
 */
export class VipOracle extends DataSourceManager {
  /**
   * 获取连接数据
   */
  public override async getConnectionData(options: OracleOptions): Promise<DataSourceParseResponse> {
    // eslint-disable-next-line ts/no-require-imports
    const oracledb = require('oracledb')
    oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

    let connection
    try {
      if (os.arch() === 'x64')
        oracledb.initOracleClient()
      connection = await oracledb.getConnection({
        user: options.username,
        password: options.password,
        server: options.host,
        port: options.port,
        database: options.database,
      })
      const result = await connection.execute(options.querySql)
      return { success: true, data: result.rows }
    }
    catch (error) {
      return handlerDataSourceConnectError(VipOracle.name, error)
    }
    finally {
      await connection?.close()
    }
  }
}
