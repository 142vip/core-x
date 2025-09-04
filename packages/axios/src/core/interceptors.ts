import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { HttpStatus } from '../enum/http-status.enum'

/**
 * 拦截器类型
 */
export enum InterceptorType {
  REQUEST = 'request',
  RESPONSE = 'response',
}

/**
 * 请求拦截器
 */
export function requestInterceptor(config: AxiosRequestConfig): AxiosRequestConfig {
  return config
}

/**
 * 响应拦截器
 */
export function responseInterceptor<T>(response: AxiosResponse): T {
  return response as T
}

/**
 * 默认请求拦截器
 */
export function defaultRequestInterceptor(config: AxiosRequestConfig): AxiosRequestConfig {
  return config
}

/**
 * 默认响应拦截器
 */
export function defaultResponseInterceptor(response: AxiosResponse): AxiosResponse {
  return response
}

export function defaultVipRequestInterceptor(config: AxiosRequestConfig): AxiosRequestConfig {
  // todo 添加traceId

  return config
}

export function defaultVipResponseInterceptor(response: AxiosResponse): AxiosResponse {
  // 200 响应状态码，
  if (response.status === HttpStatus.OK) {
    return response.data
  }
  return response
}
