/**
 * fairy-cli 内置 HTTP（Node 18+ `fetch`），避免额外依赖 `@142vip/axios`。
 */

/** 非 2xx 响应时抛出，携带 status / url / 响应体摘要 */
export class FairyHttpError extends Error {
  readonly status: number
  readonly url: string

  constructor(status: number, url: string, body?: string) {
    const detail = body != null && body.length > 0 ? `: ${body}` : ''
    super(`HTTP ${status} ${url}${detail}`)
    this.name = 'FairyHttpError'
    this.status = status
    this.url = url
  }
}

/** 读取失败响应体；网络异常时回落空串，避免掩盖原始 HTTP 错误 */
async function readErrorBody(response: Response): Promise<string> {
  try {
    return await response.text()
  }
  catch {
    return ''
  }
}

/** 发起请求并在非 2xx 时抛出 `FairyHttpError` */
async function request(url: string, init?: RequestInit): Promise<Response> {
  const response = await fetch(url, init)
  if (!response.ok) {
    const body = await readErrorBody(response)
    throw new FairyHttpError(response.status, url, body)
  }
  return response
}

/** 请求并解析 JSON（CNPM 同步等 API） */
export async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await request(url, init)
  return await response.json() as T
}

/** 请求并读取纯文本（同步日志等） */
export async function fetchText(url: string, init?: RequestInit): Promise<string> {
  const response = await request(url, init)
  return await response.text()
}
