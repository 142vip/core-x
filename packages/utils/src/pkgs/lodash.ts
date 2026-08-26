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

function compactMap<T, R>(
  collection: readonly T[] | null | undefined,
  iteratee: (item: T, index: number) => R,
): Array<Exclude<R, CompactFalsy>> {
  if (collection == null) {
    return []
  }
  return _.compact(collection.map(iteratee)) as Array<Exclude<R, CompactFalsy>>
}

const lodashBase = _.omit(_, ['VERSION'])

/**
 * 在 lodash 之上的扩展方法（命名勿与 lodash 原生冲突，避免覆盖 `pick` / `map` 等）。
 */
const vipLodashExtensions = {
  isJsonRecord,
  toJsonRecord,
  compactMap,
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
