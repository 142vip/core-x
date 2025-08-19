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
 * 处理错误
 * @param error
 */
export function handlerError(error: any) {
  let message = '执行SQL语句失败'
  if (!isEmpty(error?.message)) {
    message = JSON.stringify(error.message)
  }

  return { success: false, message }
}
