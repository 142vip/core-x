export * from './core/axios-response.transform'
export * from './core/axios-retry'
export * from './core/axios.config'
export * from './core/axios.factory'
export * from './core/interceptors'
export * from './enum/http-method.enum'
export * from './enum/http-status.enum'
export * from './spider.utils'

/**
 * 具名再导出 axios / axios-retry，下游不要 `from 'axios'`。
 * 本包 `package.json` 必须是 `"type": "module"`。否则 Nest 这类 CommonJS + `nodenext`
 * 会把 `dist/index.d.ts` 当成 CJS，`export *` 解析到 axios 的 `index.d.cts`（`export =`），
 * `isAxiosError`、`AxiosRequestConfig`、`AxiosResponse` 等具名符号全部丢失，编译直接失败。
 */
export * from 'axios'
export * from 'axios-retry'
