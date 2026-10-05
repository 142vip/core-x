import type { AxiosResponse } from 'axios'

/**
 * 响应体形态转换。
 * 当 `responseType` 不是 json、但响应 `Content-Type` 仍是 JSON 时，把 blob / arraybuffer 解析回对象，供上层按业务信封读取。
 */
export class AxiosResponseTransform {
  /** HTTP 状态是否视为成功（含 304） */
  public isSuccess(status: number): boolean {
    return (status >= 200 && status < 300) || status === 304
  }

  public isJson(response: AxiosResponse): boolean {
    const { responseType } = response.config
    return responseType === 'json' || responseType === undefined
  }

  private async transformBlobToJson(response: AxiosResponse): Promise<void> {
    try {
      let data: unknown = response.data

      if (typeof data === 'string') {
        data = JSON.parse(data)
      }

      if (Object.prototype.toString.call(data) === '[object Blob]') {
        const json = await (data as Blob).text()
        data = JSON.parse(json)
      }

      response.data = data
    }
    catch {
      // 保持原 data，由上层处理
    }
  }

  private async transformArrayBufferToJson(response: AxiosResponse): Promise<void> {
    try {
      let data: unknown = response.data

      if (typeof data === 'string') {
        data = JSON.parse(data)
      }

      if (Object.prototype.toString.call(data) === '[object ArrayBuffer]') {
        const json = new TextDecoder().decode(data as ArrayBuffer)
        data = JSON.parse(json)
      }

      response.data = data
    }
    catch {
      // 保持原 data，由上层处理
    }
  }

  public async transform(response: AxiosResponse): Promise<void> {
    const responseType = response.config?.responseType || 'json'
    if (responseType === 'json') {
      return
    }

    const rawContentType = response.headers['content-type']
    const contentType = Array.isArray(rawContentType)
      ? rawContentType.join(';')
      : String(rawContentType ?? '')
    if (!contentType.includes('application/json')) {
      return
    }

    if (responseType === 'blob') {
      await this.transformBlobToJson(response)
    }

    if (responseType === 'arraybuffer') {
      await this.transformArrayBufferToJson(response)
    }
  }
}

export const axiosResponse = new AxiosResponseTransform()
