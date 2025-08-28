import type { DataSourceParseResponse } from '../../data-source.interface'
import type { HttpApiOptions } from './vip-http-api'
import { DataSourceManager } from '../../data-source.manager'
import { handlerDataSourceConnectError } from '../../data-source.utils'
import { VipHttpApi } from './vip-http-api'

const DEFAULT_DTABLE_API_URL = 'https://oapi.dtable.cloud/v0'
const DEFAULT_MAX_RECORDS = 1000

type DTableRecords = unknown[]

interface DTablePaginationOptions {
  page?: number
  size?: number
}

/**
 * 表记录，分页后的格式
 */
export interface DTableAPIData {
  page?: number
  size?: number
  total?: number
  records?: any
}

export interface DTableApiOptions {
  apiKey: string
  /**
   * 表ID
   */
  tableId: string
  /**
   * 视图ID
   */
  viewId: string
  /**
   * 单次请求最大数量，最大1000，因为接口分页1000
   */
  maxRecords?: number
}

/**
 * DTable API
 */
export class VipDTableApi extends DataSourceManager {
  private vipHttpApi = new VipHttpApi()
  public override async getConnectionData(options: DTableApiOptions): Promise<DataSourceParseResponse<DTableRecords>> {
    try {
      const data = await this.getTableAllRecords(options)
      return { success: true, data }
    }
    catch (error) {
      return handlerDataSourceConnectError(VipDTableApi.name, error)
    }
  }

  public async getConnectionDataByConcurrency(options: DTableApiOptions): Promise<DataSourceParseResponse<DTableRecords>> {
    try {
      const data = await this.getTableAllRecordsByConcurrency(options)
      return { success: true, data }
    }
    catch (error) {
      return handlerDataSourceConnectError(VipDTableApi.name, error)
    }
  }

  /**
   * 获取分页表总数量
   * @private
   */
  public async getPaginationTotal(options: DTableApiOptions): Promise<number> {
    // 只拿total，少拿点
    const apiConfig = this.getApiConfig(options, { page: 1, size: 5 })
    const data = await this.vipHttpApi.getConnectionData<{ total: number }>(apiConfig)
    return data.data?.total ?? 0
  }

  /**
   * 循环获取所有记录，同步获取
   */
  private async getTableAllRecords(options: DTableApiOptions): Promise<DTableRecords> {
    const total = await this.getPaginationTotal(options)
    const maxPageSize = this.getMaxPageSize(options.maxRecords)
    const pageCount = Math.ceil(total / maxPageSize)

    const allFields: DTableRecords = []
    for (let page = 1; page <= pageCount; page++) {
      const apiConfig = this.getApiConfig(options, { page, size: maxPageSize })
      const data = await this.vipHttpApi.getConnectionData<{ records: { fields: unknown }[] }>(apiConfig)

      const currentFields = data.data?.records.map<unknown>(record => record.fields) ?? []
      allFields.push(...currentFields)
    }

    // 所有fields字段合并
    return allFields
  }

  /**
   * 并发获取所有记录，提高获取速度
   */
  private async getTableAllRecordsByConcurrency(options: DTableApiOptions): Promise<DTableRecords> {
    const total = await this.getPaginationTotal(options)
    const maxPageSize = this.getMaxPageSize(options.maxRecords)
    const pageCount = Math.ceil(total / maxPageSize)
    const promises = Array.from({ length: pageCount }, (_, index) => {
      const page = index + 1
      const apiConfig = this.getApiConfig(options, { page, size: maxPageSize })
      return this.vipHttpApi.getConnectionData<{ records: { fields: unknown }[] }>(apiConfig)
        .then(data => data.data?.records.map<unknown>(record => record.fields) ?? [])
    })

    const allFlatFields: DTableRecords[] = await Promise.all(promises)

    // 并行执行所有请求并合并结果
    return allFlatFields.flat()
  }

  /**
   * 分页最大数量
   * @param maxRecords
   * @private
   */
  private getMaxPageSize(maxRecords?: number): number {
    if (maxRecords == null || maxRecords <= 0 || maxRecords > DEFAULT_MAX_RECORDS) {
      return DEFAULT_MAX_RECORDS
    }
    return maxRecords
  }

  /**
   * 获取请求配置
   * @private
   */
  private getApiConfig(options: Omit<DTableApiOptions, 'maxRecords'>, pageOptions?: DTablePaginationOptions): HttpApiOptions {
    return {
      url: `${DEFAULT_DTABLE_API_URL}/tables/${options.tableId}/records`,
      method: 'GET',
      params: {
        view_id: options.viewId,
        page: pageOptions?.page ?? 1,
        size: pageOptions?.size ?? 1000,
      },
      headers: {
        Authorization: `Bearer ${options.apiKey}`,
      },
    }
  }
}
