/**
 * 常用时间跨度（毫秒）。
 * 纯数值枚举，无 Node 依赖，浏览器 / 服务端均可通过
 * `@142vip/utils`、`@142vip/utils/browser` 或 `@142vip/utils/enums` 引用。
 * 业务 TTL、过期时间请基于这些单位组合，避免散落 `60 * 1000` 魔法数。
 */
export enum TimeDurationMs {
  /** 1 秒 */
  ONE_SECOND = 1000,
  /** 1 分钟 */
  ONE_MINUTE = 60_000,
  /** 5 分钟 */
  FIVE_MINUTE = 300_000,
  /** 30 分钟 */
  THIRTY_MINUTE = 1_800_000,
  /** 1 小时 */
  ONE_HOUR = 3_600_000,
  /** 1 天 */
  ONE_DAY = 86_400_000,
  /** 3 天 */
  THREE_DAY = 259_200_000,
  /** 5 天 */
  FIVE_DAY = 432_000_000,
  /** 1 周（7 天） */
  ONE_WEEK = 604_800_000,
  /** 2 周 */
  TWO_WEEK = 1_209_600_000,
  /** 1 月（按 30 天近似） */
  ONE_MONTH = 2_592_000_000,
  /** 3 月（按 90 天近似） */
  THREE_MONTH = 7_776_000_000,
}

/**
 * 常用时间跨度（秒）。
 * Redis TTL 等按秒计时的场景使用；浏览器 / 服务端均可安全引用。
 */
export enum TimeDurationSec {
  /** 1 秒 */
  ONE_SECOND = 1,
  /** 1 分钟 */
  ONE_MINUTE = 60,
  /** 5 分钟 */
  FIVE_MINUTE = 300,
  /** 30 分钟 */
  THIRTY_MINUTE = 1_800,
  /** 1 小时 */
  ONE_HOUR = 3_600,
  /** 1 天 */
  ONE_DAY = 86_400,
  /** 3 天 */
  THREE_DAY = 259_200,
  /** 5 天 */
  FIVE_DAY = 432_000,
  /** 1 周（7 天） */
  ONE_WEEK = 604_800,
  /** 2 周 */
  TWO_WEEK = 1_209_600,
  /** 1 月（按 30 天近似） */
  ONE_MONTH = 2_592_000,
  /** 3 月（按 90 天近似） */
  THREE_MONTH = 7_776_000,
}
