import { customAlphabet, nanoid } from 'nanoid'

/**
 * 参考：https://github.com/ai/nanoid
 */

/**
 * 字符集
 */
export enum Alphabet {
  DEFAULT = '0123456789abcdefghijklmnopqrstuvwxyz',
  ONLY_NUMBER = '0123456789',
  ONLY_CHAR = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  COMPLEX = '-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
}
/**
 * 获取NanoId对象
 * @param alphabet
 */
function getNanoId(alphabet?: string): (size?: number) => string {
  return customAlphabet(alphabet ?? Alphabet.DEFAULT)
}

/**
 * 获取随机字符串
 * - 按照制定规则生成默认字符串
 */
function getRandomId(size?: number): string {
  return nanoid(size)
}

export const VipNanoId = {
  getRandomId,
  getNanoId,
}
