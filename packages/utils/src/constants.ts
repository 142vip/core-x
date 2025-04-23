import { VipNodeJS } from './core'

/**
 * 一些地址信息
 */
export enum OPEN_SOURCE_ADDRESS {
  // 仓库
  GITHUB_REPO_408 = 'https://github.com/142vip/408CSFamily',
  GITHUB_REPO_JSC = 'https://github.com/142vip/JavaScriptCollection',
  GITHUB_REPO_CORE_X = 'https://github.com/142vip/core-x',
  GITHUB_REPO_OAUTH = 'https://github.com/142vip/142vip-oauth',

  /**
   * 142vip 仓库地址
   * - 格式：`${VipDockerAddress}/项目代号:${pkg.name}-${pkg.version}`
   * - 例如：registry.cn-hangzhou.aliyuncs.com/142vip/docs:JavaScriptCollection-0.0.1
   */
  DOCKER_ALIYUNCS_VIP = 'registry.cn-hangzhou.aliyuncs.com/142vip',

  // Github 组织名称
  GITHUB_ORGANIZATION_NAME = '142vip',

  // 账号主页
  HOME_PAGE_VIP = 'https://github.com/142vip',
  HOME_PAGE_MMDAPL = 'https://github.com/mmdapl',
  HOME_PAGE_CHU_FAN = 'https://github.com/chufan443',
  HOME_PAGE_LIR0015 = 'https://github.com/lir0015',

  // 证书
  LICENCE_GITHUB = 'https://github.com/142vip/LICENSE',
  LICENCE_CORE_X = 'https://github.com/142vip/core-x/blob/main/LICENSE',
  LICENCE_OAUTH = 'https://github.com/142vip/142vip-oauth/blob/main/LICENSE',
}

export interface VipAuthorInfo {
  name: string
  email: string
  url: string
  homePage: string
  github: string
  githubVip: string
  gitee: string
}

/**
 * 开源作者
 */
export const OPEN_SOURCE_AUTHOR: VipAuthorInfo = {
  name: '微信公众号：储凡',
  email: 'fairy_vip@2925.com',
  url: 'https://github.com/142vip',
  homePage: 'https://142vip.cn',
  github: 'https://github.com/mmdapl',
  githubVip: 'https://github.com/142vip',
  gitee: 'https://gitee.com/chufan443',
}

/**
 * 用于区分base路径，是否nginx代理
 * - 路径名称
 * - 环境变量 NEED_PROXY
 * @param baseName
 */
export function getDocSiteBase(baseName: string): '/' | `/${string}/` {
  const needProxy = VipNodeJS.getProcessEnv('NEED_PROXY') ?? false

  return needProxy ? `/${baseName}/` : '/'
}

/**
 * Docker部署自定义网络
 */
export const VIP_DEPLOY_DOCKER_ENV = {
  // 名称
  NETWORK_NAME: 'service_env_net',
  // 子网掩码
  NETWORK_SUBNET: '172.30.0.0/24',
  // 网关
  NETWORK_GATEWAY: '172.30.0.1',
}

/**
 * monorepo模式下，默认的发布根目录名称
 */
export const DEFAULT_RELEASE_ROOT_NAME = 'main'
