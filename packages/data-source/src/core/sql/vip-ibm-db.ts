import type { DataSourceParseResponse, DataSourceResponseError } from '../../data-source.interface'
import { DataSourceManager } from '@142vip/data-source'
import { isEmpty } from 'lodash'

interface IbmDBOptions {
  connectURL: string
  querySql: string
}

/**
 * DB2 数据源
 */
export class VipIbmDB extends DataSourceManager {
  /**
   * 获取连接数据
   */
  public override async getConnectionData(options: IbmDBOptions): Promise<DataSourceParseResponse> {
    // eslint-disable-next-line ts/no-require-imports
    const ibmdb = require('ibm_db')
    let connection
    try {
      connection = ibmdb()
      await connection.open(options.connectURL)
    }
    catch (err) {
      const error = err as DataSourceResponseError
      return { success: false, message: isEmpty(error?.message) ? '数据库配置错误，连接失败' : JSON.stringify(error.message) }
    }

    try {
      const data = await connection.query(options.querySql)
      return { success: true, data }
    }
    catch (err) {
      const error = err as DataSourceResponseError
      return { success: false, message: isEmpty(error?.message) ? '执行sql语句失败' : JSON.stringify(error.message) }
    }
    finally {
      await connection.close()
    }
  }
}
