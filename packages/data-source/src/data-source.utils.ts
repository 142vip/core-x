import type { DataSourceParseResponse } from './data-source.interface'

/**
 * 正则校验url
 */
export function testURL(url: string): boolean {
  return /(?:http|ftp|https):\/\/[\w\-]+(?:\.[\w\-]+)+(?:[\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/.test(url)
}

/**
 * 检查密码是否为空
 */
export function checkPasswordIsNil(password?: string | null): { password: string | null } {
  return isEmpty(password) ? { password: null } : { password: '******' }
}

/**
 * 判断是否为空
 */
function isEmpty(value: any): boolean {
  return ((value == null || value === ''))
}

/**
 * 数据源处理错误
 */
export function handlerDataSourceConnectError<T>(dataSourceName: string, error: any): DataSourceParseResponse<T> {
  let message = `${dataSourceName}数据源，执行失败`
  if (!isEmpty(error?.message)) {
    message = JSON.stringify(error.message)
  }

  return { success: false, message }
}
