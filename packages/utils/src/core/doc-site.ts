function getProcessEnv(key: string): string | undefined {
  if (typeof process === 'undefined' || process.env == null) {
    return undefined
  }

  return process.env[key]
}

/**
 * 博客站点的工具方法
 */
export class VipDocSite {
  /**
   * 默认的环境变量的键
   */
  public readonly defaultEnvKey: string = 'NEED_PROXY'

  /**
   * 用于区分base路径，是否nginx代理
   * - 路径名称
   * - 默认环境变量 NEED_PROXY
   * @param baseName 路径名称
   * @param envKey 环境变量的键
   */
  public getBase(baseName: string, envKey?: string): '/' | `/${string}/` {
    const needProxy = !!getProcessEnv(envKey ?? this.defaultEnvKey)

    return needProxy ? `/${baseName}/` : '/'
  }
}

/**
 * VipDocSite的快速初始化对象
 */
export const vipDocSite = new VipDocSite()
