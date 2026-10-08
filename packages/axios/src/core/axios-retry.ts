import type { AxiosInstance } from 'axios'
import type { IAxiosRetryConfig } from 'axios-retry'
import axiosRetry from 'axios-retry'

/**
 * 为已有 Axios 实例挂载 axios-retry。
 * 类型 `IAxiosRetryConfig` 从 `types/axios-exports.ts` 再导出，避免与运行时入口缠在一起。
 * @see https://www.npmjs.com/package/axios-retry
 */
export function createAxiosRetry(instance: AxiosInstance, config?: IAxiosRetryConfig): void {
  axiosRetry(instance, {
    retries: 0,
    ...(config ?? {}),
  })
}
