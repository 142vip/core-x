import type { DataSourceColumn, DataSourceParseResponse, DataSourceTable } from './data-source.interface'

/**
 * 数据源管理器
 */
export class DataSourceManager {
  public async parseData(): Promise<DataSourceParseResponse> {
    return { success: true, data: [] }
  }

  public async testConnect(): Promise<DataSourceParseResponse> {
    return { success: true }
  }

  public async getDataBaseNameList(): Promise<DataSourceParseResponse<string[]>> {
    return { success: true, data: [] }
  }

  /**
   * 获取表名列表
   */
  public async getTableNames(): Promise<DataSourceParseResponse<DataSourceTable[]>> {
    return { success: true, data: [] }
  }

  /**
   * 获取表字段列表
   */
  public async getTableColumns(_tableName: string, _schema?: string): Promise<DataSourceParseResponse<DataSourceColumn[]>> {
    return { success: true, data: [] }
  }

  public async getConnectionData(_options: unknown): Promise<DataSourceParseResponse> {
    return { success: true, data: [] }
  }
}
