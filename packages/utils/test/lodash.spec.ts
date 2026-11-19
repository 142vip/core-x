import { describe, expect, it } from '@jest/globals'
import { vipLodash } from '../src/pkgs/lodash'

describe('vipLodash JSON 与随机数', () => {
  it('readJsonRecord 只取出下一层平面对象', () => {
    expect(vipLodash.readJsonRecord({ data: { a: 1 } }, 'data')).toEqual({ a: 1 })
    expect(vipLodash.readJsonRecord({ data: [] }, 'data')).toBeNull()
    expect(vipLodash.readJsonRecord({ data: 'x' }, 'data')).toBeNull()
    expect(vipLodash.readJsonRecord(null, 'data')).toBeNull()
    expect(vipLodash.readJsonRecord([], 'data')).toBeNull()
  })

  it('randomUnit 落在 [0, 1)', () => {
    for (let index = 0; index < 30; index += 1) {
      const value = vipLodash.randomUnit()
      expect(value).toBeGreaterThanOrEqual(0)
      expect(value).toBeLessThan(1)
    }
  })

  it('randomInt 落在闭区间且为整数', () => {
    for (let index = 0; index < 40; index += 1) {
      const value = vipLodash.randomInt(2, 4)
      expect(value).toBeGreaterThanOrEqual(2)
      expect(value).toBeLessThanOrEqual(4)
      expect(Number.isInteger(value)).toBe(true)
    }
    const swapped = vipLodash.randomInt(4, 2)
    expect(swapped).toBeGreaterThanOrEqual(2)
    expect(swapped).toBeLessThanOrEqual(4)
  })
})
