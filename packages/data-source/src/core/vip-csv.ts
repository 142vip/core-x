import type { DataSourceParseResponse } from '../data-source.interface'
import { parse } from 'csv-parse/sync'
import iconv from 'iconv-lite'
import jsCharDet from 'jschardet'
import { DataSourceManager } from '../data-source.manager'
import { handlerDataSourceConnectError } from '../data-source.utils'

interface CSVOptions {
  // eslint-disable-next-line node/prefer-global/buffer
  file: Buffer
  encode: string
}

export class VipCsv extends DataSourceManager {
  public override async getConnectionData(options: CSVOptions): Promise<DataSourceParseResponse> {
    try {
      // 获取编码 支持自动获取
      const charset = ['utf8', 'gbk'].includes(options.encode)
        ? options.encode
        : this.getCharset(jsCharDet.detect(options.file).encoding)

      const decodeStr = iconv.decode(options.file, charset)

      const parseCsvData = parse(decodeStr, {
        columns: true,
        skip_empty_lines: true,
      })

      return { success: true, data: parseCsvData }
    }
    catch (error) {
      return handlerDataSourceConnectError(VipCsv.name, error)
    }
  }

  /**
   * 获取字符串编码
   */
  private getCharset(charset: string): string {
    switch (charset) {
      case 'UTF-8':
        return 'utf8'
      case 'UTF-16BE':
        return 'utf16-be'
      case 'UTF-16LE':
        return 'utf16-le'
      case 'ascii':
        return 'ascii'
      default:
        return 'gbk'
    }
  }
}
