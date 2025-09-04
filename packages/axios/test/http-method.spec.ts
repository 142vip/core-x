import { HttpMethod, HttpMethodLower } from '@142vip/axios'

describe('测试HttpMethod枚举', () => {
  it('测试HttpMethod枚举 - 枚举值', () => {
    expect(HttpMethod.GET).toBe(HttpMethodLower.GET.toUpperCase())
    expect(HttpMethod.POST).toBe(HttpMethodLower.POST.toUpperCase())
    expect(HttpMethod.PUT).toBe(HttpMethodLower.PUT.toUpperCase())
    expect(HttpMethod.PATCH).toBe(HttpMethodLower.PATCH.toUpperCase())
    expect(HttpMethod.DELETE).toBe(HttpMethodLower.DELETE.toUpperCase())
  })

  it('测试HttpMethodLower枚举 - 枚举值', () => {
    expect(HttpMethodLower.GET).toBe(HttpMethod.GET.toLowerCase())
    expect(HttpMethodLower.POST).toBe(HttpMethod.POST.toLowerCase())
    expect(HttpMethodLower.PUT).toBe(HttpMethod.PUT.toLowerCase())
    expect(HttpMethodLower.PATCH).toBe(HttpMethod.PATCH.toLowerCase())
    expect(HttpMethodLower.DELETE).toBe(HttpMethod.DELETE.toLowerCase())
  })
})
