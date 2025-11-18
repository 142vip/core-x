class VipDataTransform {
  /**
   * 字符串脱敏，生成指定长度的字符串，默认6位，默认模板：*
   */
  public sensitiveStr(length?: number, template?: string): string {
    return (template ?? '*').repeat(length ?? 6)
  }

  /**
   * 手机号脱敏
   */
  public sensitivePhoneNum(phone: string, template?: string): string {
    const phoneStr = phone.trim()
    const len = phoneStr.length
    // 前3位、后4位，中间按照template模板加密，默认*
    if (len > 7) {
      return phoneStr.replace(/(\d{3})\d*(\d{4})/, `$1${this.sensitiveStr(len - 7, template)}$2`)
    }

    return phoneStr
  }

  // /**
  //  * jwt数据加密
  //  * @param payload
  //  * @param secretOrPrivateKey
  //  * @param expiresIn
  //  */
  // public jwtEncrypt(payload: string | object, secretOrPrivateKey?: Secret | PrivateKey, expiresIn?: string | number): string {
  //   // 类型优化
  //   return jwt.sign(payload, secretOrPrivateKey, {
  //     expiresIn,
  //   })
  // }
  //
  // /**
  //  * jwt数据解密
  //  * @param data
  //  * @param cryptoKey
  //  */
  // public jwtDecrypt(data: string, secretOrPrivateKey: Secret | PrivateKey): string | object | null {
  //   try {
  //     return jwt.verify(data, secretOrPrivateKey)
  //   }
  //   catch {
  //     return null
  //   }
  // }
}

export const vipDataTransform = new VipDataTransform()
