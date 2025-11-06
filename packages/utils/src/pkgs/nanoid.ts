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

export class VipNanoId {
  /**
   * 获取NanoId对象，默认字符集为 Alphabet.DEFAULT，只有小写字母和数字
   * @param alphabet
   */
  public getNanoId(alphabet?: string): (size?: number) => string {
    return customAlphabet(alphabet ?? Alphabet.DEFAULT)
  }

  /**
   * 获取随机字符串，默认长度21
   * - 按照制定规则生成默认字符串
   */
  public getRandomId(size?: number): string {
    return nanoid(size)
  }

  /**
   * 获取纯数字的随机字符串
   * @param size
   */
  public getRandomNumberId(size?: number): string {
    return this.getNanoId(Alphabet.ONLY_NUMBER)(size)
  }

  /**
   * 获取纯字母的随机字符串，包含小写字母和大写字母
   * @param size
   */
  public getRandomCharId(size?: number): string {
    return this.getNanoId(Alphabet.ONLY_CHAR)(size)
  }

  /**
   * 获取复杂的随机字符串，包含数字、小写字母、大写字母和特殊字符
   * @param size
   */
  public getRandomComplexId(size?: number): string {
    return this.getNanoId(Alphabet.COMPLEX)(size)
  }
}

export const vipNanoId = new VipNanoId()
