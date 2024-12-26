import { klona } from 'klona/json'

/**
 * json克隆复制
 * 参考：https://www.npmjs.com/package/klona
 */
function clone<T>(json: T) {
  return klona(json)
}

/**
 * JSON序列化
 * @param value
 * @param replacer
 * @param space
 */
function stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string {
  return JSON.stringify(value, replacer, space)
}

/**
 * 解析JSON串
 * @param originData
 * @param defaultData
 */
function parse<T>(originData: string | undefined | null, defaultData: T): T {
  if (originData == null || originData.length === 0) {
    return defaultData
  }
  return JSON.parse(originData)
}

/**
 * 处理JSON
 */
export const VipJSON = {
  clone,
  stringify,
  parse,
}
