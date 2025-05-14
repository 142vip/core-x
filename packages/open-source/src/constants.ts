import type { VipAuthorInfo } from './author.interface'

/**
 * 一些地址信息
 */
export enum OPEN_SOURCE_ADDRESS {
  // 作者
  AUTHOR_NAME = '微信公众号：储凡',
  AUTHOR_EMAIL = 'fairy_vip@2925.com',

  // 仓库
  GITHUB_REPO_408 = 'https://github.com/142vip/408CSFamily',
  GITHUB_REPO_JSC = 'https://github.com/142vip/JavaScriptCollection',
  GITHUB_REPO_CORE_X = 'https://github.com/142vip/core-x',
  GITHUB_REPO_OAUTH = 'https://github.com/142vip/142vip-oauth',

  GITEE_REPO_408 = 'https://gitee.com/chufan443/408CSFamily',
  GITEE_REPO_JSC = 'https://gitee.com/chufan443/JavaScriptCollection',
  GITEE_REPO_CORE_X = 'https://gitee.com/chufan443/core-x',

  /**
   * 142vip 仓库地址
   * - 格式：`${VipDockerAddress}/项目代号:${pkg.name}-${pkg.version}`
   * - 例如：registry.cn-hangzhou.aliyuncs.com/142vip/docs:JavaScriptCollection-0.0.1
   */
  DOCKER_ALIYUNCS_VIP = 'registry.cn-hangzhou.aliyuncs.com/142vip',
  // 名称
  DOCKER_NETWORK_NAME = 'service_env_net',
  // 子网掩码
  DOCKER_NETWORK_SUBNET = '172.30.0.0/24',
  // 网关
  DOCKER_NETWORK_GATEWAY = '172.30.0.1',

  // Github 组织名称
  GITHUB_ORGANIZATION_NAME = '142vip',

  // 账号主页
  HOME_PAGE_GITHUB_VIP = 'https://github.com/142vip',
  HOME_PAGE_GITHUB_MMDAPL = 'https://github.com/mmdapl',
  HOME_PAGE_GITHUB_CHU_FAN = 'https://github.com/chufan443',
  HOME_PAGE_GITHUB_LIR0015 = 'https://github.com/lir0015',

  HOME_PAGE_GITEE_MMDAPL = 'https://gitee.com/mmdapl',
  HOME_PAGE_GITEE_VIP = 'https://gitee.com/chufan443',
  // npm
  HOME_PAGE_NPM_MMDAPL = 'https://www.npmjs.com/~mmdapl',

  // 自媒体主页
  HOME_PAGE_BILIBILI = 'https://space.bilibili.com/350937042',
  HOME_PAGE_CSDN = 'https://blog.csdn.net/Mmdapl',
  HOME_PAGE_JUE_JIN = 'https://juejin.im/user/448256476724807',

  // 域名
  HOME_PAGE_DOMAIN_VIP = 'https://142vip.cn',
  HOME_PAGE_DOMAIN_408 = 'https://408.142vip.cn',
  // HOME_PAGE_DOMAIN_JSC = 'https://js.142vip.cn',

  // 证书
  LICENCE_GITHUB = 'https://github.com/142vip/LICENSE',
  LICENCE_CORE_X = 'https://github.com/142vip/core-x/blob/main/LICENSE',
  LICENCE_OAUTH = 'https://github.com/142vip/142vip-oauth/blob/main/LICENSE',
}

/**
 * 开源作者
 */
export const OPEN_SOURCE_AUTHOR: VipAuthorInfo = {
  name: OPEN_SOURCE_ADDRESS.AUTHOR_NAME,
  email: OPEN_SOURCE_ADDRESS.AUTHOR_EMAIL,
  url: OPEN_SOURCE_ADDRESS.HOME_PAGE_GITHUB_VIP,
  homePage: OPEN_SOURCE_ADDRESS.HOME_PAGE_DOMAIN_VIP,
  github: OPEN_SOURCE_ADDRESS.HOME_PAGE_GITEE_MMDAPL,
  githubVip: OPEN_SOURCE_ADDRESS.HOME_PAGE_GITEE_VIP,
  gitee: OPEN_SOURCE_ADDRESS.HOME_PAGE_GITEE_VIP,
}
