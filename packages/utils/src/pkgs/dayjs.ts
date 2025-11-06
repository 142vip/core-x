import dayjs from 'dayjs'

export class VipDayjs {
  /**
   * 时间格式：年-月-日 时:分:秒
   */
  private readonly FORMAT_TEMPLATE_STR = 'YYYY-MM-DD HH:mm:ss'
  /**
   * 获取当前时间戳。单位：毫秒
   */
  public getCurrentTimestamp(): number {
    return dayjs().valueOf()
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
  public isBeforeNow(date: Date): boolean {
    return dayjs().isBefore(dayjs(date))
  }

  /**
   * 是否在当前时间之后
   * @param date
   */
  public isAfterNow(date: Date): boolean {
    return dayjs().isAfter(dayjs(date))
  }

  /**
   * 时间格式化，默认： 年-月-日 时:分:秒
   */
  public formatDateToStr(date: Date, template?: string): string {
    return dayjs(date).format(template ?? this.FORMAT_TEMPLATE_STR)
  }

  /**
   * 年月日格式化当前时间
   * - 格式： 2024-08-09
   */
  public formatDateToYMD(): string {
    return this.formatDateToStr(new Date(), 'YYYY-MM-DD')
  }
}

// 导出
export const vipDayjs = new VipDayjs()
