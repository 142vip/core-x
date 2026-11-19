import _ from 'lodash'

/** 外部 JSON 解析后的平面对象；键为 string，值为任意 JSON 可序列化类型 */
export type JsonRecord = Record<string, unknown>

type CompactFalsy = false | 0 | '' | null | undefined

function isJsonRecord(value: unknown): value is JsonRecord {
  return _.isPlainObject(value)
}

function toJsonRecord(value: unknown): JsonRecord {
  return isJsonRecord(value) ? value : {}
}

/**
 * 从未知 JSON 里取出下一层对象。
 * `isJsonRecord` 只回答「这一层是不是平面对象」，不按字段往下读。
 * 外层或该字段是数组、`null`、字符串时返回 `null`。
 * 各平台解析 `data` / `article_info` 用它，不要再写本地 `readRecord`。
 */
function readJsonRecord(value: unknown, key: string): JsonRecord | null {
  if (!isJsonRecord(value)) {
    return null
  }
  const nested = value[key]
  return isJsonRecord(nested) ? nested : null
}

/**
 * `[0, 1)` 均匀随机小数，对应 `Math.random()`。
 * 用于请求抖动、缓存打散、演示数据。
 * 不要用来生成令牌、密码或会话密钥，那些用 `vipNanoId` / `crypto`。
 */
function randomUnit(): number {
  return Math.random()
}

/**
 * `[min, max]` 闭区间上的均匀随机整数。
 * 两端先取整（较小端向上、较大端向下），顺序反了会交换。
 * 用来替换 `Math.floor(Math.random() * (max - min + 1)) + min`，避免各处手写边界。
 * 与 lodash 自带的 `random` 分开命名，避免覆盖它的浮点模式。
 */
function randomInt(min: number, max: number): number {
  const start = Math.ceil(Math.min(min, max))
  const end = Math.floor(Math.max(min, max))
  if (end < start) {
    return start
  }
  return start + Math.floor(randomUnit() * (end - start + 1))
}

function compactMap<T, R>(
  collection: readonly T[] | null | undefined,
  iteratee: (item: T, index: number) => R,
): Array<Exclude<R, CompactFalsy>> {
  if (collection == null) {
    return []
  }
  return _.compact(collection.map(iteratee)) as Array<Exclude<R, CompactFalsy>>
}

/**
 * 泛型约束：任意「对象」类型（`T extends object`）。
 * 不使用 `Record<string, unknown>` 作为约束——interface 类型没有显式 index
 * signature，会被 `Record<string, unknown>` 约束拒绝（TS2344）。
 * 函数仅做按键取值 / 浅比较，不依赖 index signature。
 */

/**
 * 从 `next` 中提取相对 `original` 发生变化的字段。
 * - 使用 `_.isEqual` 做深度比较，避免对象值内容一致但引用不同导致误判
 * - 典型场景：编辑抽屉「仅提交变更字段」，减少请求体与后端 diff 成本
 *
 * @example
 * ```ts
 * const changed = vipLodash.pickDiffFields(
 *   { name: '旧', description: '旧描述' },
 *   { name: '新', description: '旧描述' },
 *   ['name', 'description'],
 * )
 * // => { name: '新' }
 * ```
 */
function pickDiffFields<T extends object>(
  original: Partial<T> | null | undefined,
  next: Partial<T>,
  keys: Array<keyof T>,
): Partial<T> {
  const base: Partial<T> = original ?? {}
  const candidates = Object.fromEntries(keys.map(key => [key, next[key]]))

  return _.pickBy(candidates, (value, key) => {
    return !_.isEqual(base[key as keyof T], value)
  }) as Partial<T>
}

/**
 * 移除对象中值为 `undefined` 的字段，保留 `null`、`false`、`0`、`''` 等有效值。
 * - 典型场景：组装请求参数时剔除「未填写」的可选字段（`undefined` 不会被 JSON 序列化，但显式剔除更可控）
 *
 * @example
 * ```ts
 * vipLodash.omitUndefined({ name: 'x', id: undefined, status: null })
 * // => { name: 'x', status: null }
 * ```
 */
function omitUndefined<T extends object>(obj: T): Partial<T> {
  return _.omitBy(obj, _.isUndefined) as Partial<T>
}

const lodashBase = _.omit(_, ['VERSION'])

/**
 * 在 lodash 之上的扩展方法（命名勿与 lodash 原生冲突，避免覆盖 `pick` / `map` 等）。
 */
const vipLodashExtensions = {
  isJsonRecord,
  toJsonRecord,
  readJsonRecord,
  randomUnit,
  randomInt,
  compactMap,
  pickDiffFields,
  omitUndefined,
} as const

export type VipLodash = typeof lodashBase & typeof vipLodashExtensions

/**
 * lodash 二次封装：先展开 lodash 原生能力，再挂载扩展。
 * 扩展键与 lodash 原生方法互斥；新增扩展前须确认 lodash 无同名导出。
 */
export const vipLodash = {
  ...lodashBase,
  ...vipLodashExtensions,
} as VipLodash
