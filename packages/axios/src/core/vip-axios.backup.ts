/**
 * axios
 * - 参考：https://www.npmjs.com/package/axios#features
 */
// class VipAxios {
//   private readonly axiosInstance: AxiosInstance
//   private config?: CreateAxiosDefaults
//   public static instance: VipAxios | null = null
//
//   /**
//    * axios默认配置
//    */
//   public defaults: AxiosDefaults
//
//   /**
//    * 拦截器
//    */
//   public interceptors: {
//     request: AxiosInterceptorManager<InternalAxiosRequestConfig>
//     response: AxiosInterceptorManager<AxiosResponse>
//   }
//
//   /**
//    * 构造函数
//    */
//   constructor(config?: CreateAxiosDefaults) {
//     // 这里要用深拷贝
//     this.config = config
//     this.axiosInstance = config == null ? axios : axios.create(config)
//
//     // 初始化默认配置、拦截器
//     this.defaults = this.axiosInstance.defaults
//     this.interceptors = {
//       request: this.axiosInstance.interceptors.request,
//       response: this.axiosInstance.interceptors.response,
//     }
//   }
//
//   /**
//    * 创建单例
//    */
//   public static getInstance(config?: CreateAxiosDefaults): VipAxios {
//     if (this.instance == null) {
//       this.instance = new VipAxios(config)
//     }
//     if (config != null) {
//       this.instance.setAxiosConfig(config)
//     }
//     return this.instance
//   }
//
//   public static clearInstance(): void {
//     this.instance = null
//   }
//
//   public setAxiosConfig(config: CreateAxiosDefaults): void {
//     this.config = config
//   }
//
//   /**
//    * 获取配置
//    */
//   public getAxiosConfig(): CreateAxiosDefaults | undefined {
//     return this.config
//   }
//
//   public async delete<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
//     return this.axiosInstance.delete(url, config)
//   }
//
//   public async get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
//     return this.axiosInstance.get(url, config)
//   }
//
//   /**
//    * 获取请求地址
//    * @param config
//    */
//   public getUri(config?: AxiosRequestConfig): string {
//     return this.axiosInstance.getUri(config)
//   }
//
//   public async head<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
//     return this.axiosInstance.head(url, config)
//   }
//
//   public async options<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
//     return this.axiosInstance.options(url, config)
//   }
//
//   public async patch<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
//     return this.axiosInstance.patch(url, data, config)
//   }
//
//   public async patchForm<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
//     return this.axiosInstance.patchForm(url, data, config)
//   }
//
//   public async post<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
//     return this.axiosInstance.post(url, data, config)
//   }
//
//   public async postForm<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
//     return this.axiosInstance.postForm(url, data, config)
//   }
//
//   public async put<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
//     return this.axiosInstance.put(url, data, config)
//   }
//
//   /**
//    * PUT 表单
//    * @param url
//    * @param data
//    * @param config
//    */
//   public async putForm<T = any, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R> {
//     return this.axiosInstance.putForm(url, data, config)
//   }
//
//   public async request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R> {
//     return this.axiosInstance.request(config)
//   }
//
//   /**
//    * 清除拦截器
//    */
//   public clearInterceptor(type: InterceptorType): void {
//     // 移除请求拦截器
//     if (type === InterceptorType.REQUEST) {
//       this.axiosInstance.interceptors.request.clear()
//     }
//     // 移除响应拦截器
//     if (type === InterceptorType.RESPONSE) {
//       this.axiosInstance.interceptors.response.clear()
//     }
//   }
// }
//
// /**
//  * 按照配置创建VipAxios的实例
//  */
// function createVipAxios(config?: CreateAxiosDefaults): VipAxiosInstance {
//   return new AxiosFactory(config).createAxios()
// }
//
// /**
//  * 按照默认配置创建VipAxios的实例
//  */
// const vipAxios = new AxiosFactory().createAxios()
