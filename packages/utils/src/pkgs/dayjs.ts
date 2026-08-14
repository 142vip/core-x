import type { ConfigType } from 'dayjs'
import dayjs from 'dayjs'

/**
 * dayjs 常用日期格式模板。
 * 与 {@link VipDayjs} 配套使用，避免散落魔法字符串。
 */
export enum DateFormatTemplate {
  /** 年-月-日 时:分:秒 → 2024-08-09 15:20:30 */
  DATETIME = 'YYYY-MM-DD HH:mm:ss',
  /** 年-月-日 时:分 → 2024-08-09 15:20 */
  DATETIME_MINUTE = 'YYYY-MM-DD HH:mm',
  /** 年-月-日 → 2024-08-09 */
  DATE = 'YYYY-MM-DD',
  /** 年.月.日 → 2024.08.09 */
  DATE_DOT = 'YYYY.MM.DD',
  /** 年/月/日 → 2024/08/09 */
  DATE_SLASH = 'YYYY/MM/DD',
  /** 年月日（紧凑）→ 20240809 */
  DATE_COMPACT = 'YYYYMMDD',
  /** 年月日时分秒毫秒 → 20240809152030123 */
  TIMESTAMP = 'YYYYMMDDHHmmSSS',
  /** 年-月 → 2024-08 */
  YEAR_MONTH = 'YYYY-MM',
  /** 月-日 → 08-09 */
  MONTH_DAY = 'MM-DD',
  /** 月/日 → 08/09 */
  MONTH_DAY_SLASH = 'MM/DD',
  /** 月/日 时:分 → 08/09 15:20 */
  MONTH_DAY_TIME = 'MM/DD HH:mm',
  /** 时:分:秒 → 15:20:30 */
  TIME = 'HH:mm:ss',
  /** 时:分 → 15:20 */
  TIME_MINUTE = 'HH:mm',
  /** 中文年月日 → 2024年08月09日 */
  DATE_CN = 'YYYY年MM月DD日',
  /** 中文年月日 时:分:秒 → 2024年08月09日 15:20:30 */
  DATETIME_CN = 'YYYY年MM月DD日 HH:mm:ss',
}

export class VipDayjs {
  /**
   * 时间格式：年-月-日 时:分:秒
   */
  private readonly FORMAT_TEMPLATE_STR = DateFormatTemplate.DATETIME

  /**
   * 时间戳格式：年月日时分秒毫秒
   */
  private readonly FORMAT_TEMPLATE_STR_TIMESTAMP = DateFormatTemplate.TIMESTAMP

  /**
   * 日期格式：年-月-日
   */
  private readonly FORMAT_TEMPLATE_STR_DATE = DateFormatTemplate.DATE

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
  public formatDateToStr(date: ConfigType, template?: DateFormatTemplate | string): string {
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
  public formatToISOStr(date?: ConfigType): string {
    return dayjs(date).toISOString()
  }
}

/** VipDayjs 单例 */
export const vipDayjs = new VipDayjs()
