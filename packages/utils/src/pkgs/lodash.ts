import _ from 'lodash'

/** 外部 JSON 解析后的平面对象；键为 string，值为任意 JSON 可序列化类型 */
export type JsonRecord = Record<string, unknown>

/**
 * 判断 `unknown` 是否为平面对象（非数组、非 null、非 Date 等）。
 * 语义与 `vipLodash.isPlainObject` 一致，附带 TypeScript 类型收窄。
 */
export function isJsonRecord(value: unknown): value is JsonRecord {
  return _.isPlainObject(value)
}

/**
 * 将边界 `unknown` 收窄为 `JsonRecord`；非平面对象时返回 `{}`。
 * 用于 HTTP / CDN JSON 字段读取，避免 `value as Record<string, unknown>`。
 */
export function toJsonRecord(value: unknown): JsonRecord {
  return isJsonRecord(value) ? value : {}
}

/**
 * lodash的一些方法
 */
export const vipLodash = _.omit(_, ['VERSION'])
