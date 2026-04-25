import dayjs, { ConfigType } from 'dayjs'

export class VipDayjs {
  /**
   * 时间格式：年-月-日 时:分:秒
   */
  private readonly FORMAT_TEMPLATE_STR = 'YYYY-MM-DD HH:mm:ss'

  /**
   * 时间戳格式：年月日时分秒毫秒
   */
  private readonly FORMAT_TEMPLATE_STR_TIMESTAMP = 'YYYYMMDDHHmmSSS'

  /**
   * 日期格式：年-月-日
   */
  private readonly FORMAT_TEMPLATE_STR_DATE = 'YYYY-MM-DD'
  /**
   * 获取当前时间戳。单位：毫秒
   */
  public getCurrentTimestamp(): number {
    return dayjs().valueOf()
  }

  /**
   * 获取时间戳。单位：毫秒
   */
  public getTimestamp(date: ConfigType): number {
    return dayjs(date).valueOf()
  }

  /**
   * 获取过期时间戳。单位：毫秒
   * @param duration 过期时间，默认：1小时
   */
  public getExpiredTimestamp(duration = 60 * 60 * 1000): number {
    return this.getCurrentTimestamp() + duration
  }

  /**
   * 是否在当前时间之前
   * @param date
   */
  public isBeforeNow(date?: ConfigType): boolean {
    return dayjs().isBefore(dayjs(date))
  }

  /**
   * 是否在当前时间之后
   * @param date
   */
  public isAfterNow(date?: ConfigType): boolean {
    return dayjs().isAfter(dayjs(date))
  }

  /**
   * 时间格式化，默认： 年-月-日 时:分:秒
   */
  public formatDateToStr(date: ConfigType, template?: string): string {
    return dayjs(date).format(template ?? this.FORMAT_TEMPLATE_STR)
  }

  /**
   * 年月日格式化当前时间
   * - 格式： 2024-08-09
   */
  public formatCurrentDateToYMD(): string {
    return this.formatDateToStr(new Date(), this.FORMAT_TEMPLATE_STR_DATE)
  }

  /**
   * 时间戳格式化当前时间
   * - 格式： 20240809152030123
   */
  public formatCurrentDateToTimestamp(): string {
    return this.formatDateToStr(new Date(), this.FORMAT_TEMPLATE_STR_TIMESTAMP)
  }

  /**
   * 时间格式化当前时间，默认： 年-月-日 时:分:秒
   */
  public formatCurrentDateToStr(): string {
    return this.formatDateToStr(new Date(), this.FORMAT_TEMPLATE_STR)
  }

  /**
   * 格式化时间为ISO字符串
   * @param date
   */
  public formatToISOStr(date?: dayjs.ConfigType): string {
    return dayjs(date).toISOString()
  }
}

// 导出
export const vipDayjs = new VipDayjs()
