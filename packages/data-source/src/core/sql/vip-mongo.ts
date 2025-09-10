import type { Db, Document, WithId } from 'mongodb'
import type { DataSourceConnector } from '../../data-source.connector'
import type { DataSourceConnectionOptions, DataSourceParseResponse } from '../../data-source.interface'
import { MongoClient } from 'mongodb'
import { handlerDataSourceConnectError } from '../../data-source.utils'

export interface MongoDBOptions extends Omit<DataSourceConnectionOptions, 'querySql'> {
  database: string
  table: string
  findFilter?: Record<string, any>
  findOptions?: Record<string, any>
}

interface FindTableDataOptions extends Pick<MongoDBOptions, 'table' | 'findFilter' | 'findOptions'> {}

const MONGO_DEFAULT_TIMEOUT = 60 * 1000

/**
 * MongoDB数据源
 */
export class VipMongo implements DataSourceConnector<MongoDBOptions> {
  /**
   * 获取连接数据
   */
  public async getConnectionData(options: MongoDBOptions): Promise<DataSourceParseResponse<WithId<Document>[]>> {
    let client: MongoClient | undefined
    try {
      client = await this.getMongoClient(options)
      const mongoDB = client.db(options.database)
      return await this.findTableData(mongoDB, options)
    }
    catch (error) {
      return handlerDataSourceConnectError(VipMongo.name, error)
    }
    finally {
      await client?.close()
    }
  }

  /**
   * 查询表中的数据
   * @private
   */
  private async findTableData(mongoDB: Db, options: FindTableDataOptions): Promise<DataSourceParseResponse<WithId<Document>[]>> {
    const filter = options.findFilter == null ? {} : options.findFilter
    const findOptions = {
      maxTimeMS: MONGO_DEFAULT_TIMEOUT,
      ...options.findOptions == null ? {} : options.findOptions,
    }

    const data = await mongoDB.collection(options.table)
      .find(filter, findOptions)
      .toArray()

    return { success: true, data }
  }

  /**
   * 建立连接，获取MongoDB客户端
   * @private
   */
  private async getMongoClient(options: MongoDBOptions): Promise<MongoClient> {
    // const url = `mongodb://${options.host}:${options.port}/${options.database}`
    const url = `mongodb://${options.host}:${options.port}`
    return await MongoClient.connect(url, {
      auth: { username: options.username, password: options.password },
    })
  }
}
