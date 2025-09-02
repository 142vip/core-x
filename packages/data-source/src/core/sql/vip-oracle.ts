import type { DataSourceConnector } from '../../data-source.connector'
import type { DataSourceConnectionOptions, DataSourceParseResponse } from '../../data-source.interface'
import os from 'node:os'
import { handlerDataSourceConnectError } from '../../data-source.utils'

export interface OracleOptions extends DataSourceConnectionOptions {
  sid?: string
  serviceName?: string
}

/**
 * Oracle 数据源
 */
export class VipOracle implements DataSourceConnector<OracleOptions> {
  /**
   * 获取连接数据
   */
  public async getConnectionData(options: OracleOptions): Promise<DataSourceParseResponse> {
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
        connectString: `${options.host}:${options.port}/${options.sid == null ? options.serviceName : options.sid}`,
      })
      const queryData = await connection.execute(options.querySql)

      return { success: true, data: queryData.rows }
    }
    catch (error) {
      return handlerDataSourceConnectError(VipOracle.name, error)
    }
    finally {
      await connection?.close()
    }
  }
}
