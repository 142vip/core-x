import type { DataSourceParseResponse, DataSourceResponseError } from '../../data-source.interface'
import os from 'node:os'
import { DataSourceManager } from '@142vip/data-source'
import { isEmpty } from 'lodash'

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
    catch (err) {
      const error = err as DataSourceResponseError
      return { success: false, message: isEmpty(error?.message) ? '执行sql语句失败' : JSON.stringify(error.message) }
    }
    finally {
      await connection?.close()
    }
  }
}
