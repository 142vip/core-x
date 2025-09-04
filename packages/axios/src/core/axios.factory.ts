import type { AxiosInstance, CreateAxiosDefaults } from 'axios'
import axios from 'axios'
import { InterceptorType } from './interceptors'

/**
 * VipAxios实例类型
 * - 继承自AxiosInstance，添加了自定义方法
 * - 提供了清除拦截器的方法
 * - 提供了获取默认配置的方法
 */
export interface VipAxiosInstance extends AxiosInstance {
  clearInterceptor: (type: InterceptorType) => void
  getConfig: () => CreateAxiosDefaults | undefined
}

/**
 * axios
 * - 参考：https://www.npmjs.com/package/axios#features
 */
export class AxiosFactory {
  private readonly axiosInstance: AxiosInstance
  private readonly config: CreateAxiosDefaults | undefined
  constructor(config?: CreateAxiosDefaults) {
    this.config = config
    this.axiosInstance = config == null ? axios : axios.create(config)
  }

  /**
   * 创建vipAxios实例
   */
  public createAxiosInstance(): VipAxiosInstance {
    return Object.assign(this.axiosInstance, {
      clearInterceptor: this.clearInterceptor.bind(this),
      getConfig: this.getConfig.bind(this),
    })
  }

  /**
   * 获取用户初始化的axios实例的默认配置
   */
  public getConfig(): CreateAxiosDefaults | undefined {
    return this.config
  }

  /**
   * 清除拦截器
   */
  public clearInterceptor(type: InterceptorType): void {
    // 移除请求拦截器
    if (type === InterceptorType.REQUEST) {
      this.axiosInstance.interceptors.request.clear()
    }
    // 移除响应拦截器
    if (type === InterceptorType.RESPONSE) {
      this.axiosInstance.interceptors.response.clear()
    }
  }
}

/**
 * 按照配置创建VipAxios的实例
 */
export function createVipAxios(config?: CreateAxiosDefaults): VipAxiosInstance {
  return new AxiosFactory(config).createAxiosInstance()
}

/**
 * 按照默认配置创建VipAxios的实例
 * - axios模块默认的实例对象
 */
export const vipAxios = new AxiosFactory().createAxiosInstance()
