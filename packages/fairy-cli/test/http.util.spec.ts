import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals'

import { fetchJson, fetchText } from '../src/utils/http.util'

describe('http.util', () => {
  const fetchMock = jest.fn<typeof fetch>()

  beforeEach(() => {
    fetchMock.mockReset()
    globalThis.fetch = fetchMock as typeof fetch
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('fetchJson 解析 2xx JSON 响应', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true }),
    } as Response)

    await expect(fetchJson<{ ok: boolean }>('https://example.com/api')).resolves.toEqual({ ok: true })
  })

  it('fetchText 读取 2xx 文本响应', async () => {
    fetchMock.mockResolvedValue({
      ok: true,
      text: async () => 'sync-log',
    } as Response)

    await expect(fetchText('https://example.com/log')).resolves.toBe('sync-log')
  })

  it('非 2xx 时抛出 FairyHttpError', async () => {
    fetchMock.mockResolvedValue({
      ok: false,
      status: 404,
      text: async () => 'not found',
    } as Response)

    await expect(fetchJson('https://example.com/missing')).rejects.toMatchObject({
      name: 'FairyHttpError',
      status: 404,
      url: 'https://example.com/missing',
    })
  })
})
