import type { PackageJSON } from '@142vip/utils'

/**
 * 页脚参数
 */
interface FooterParams {
  license: string
  pkgName: string
  pkgVersion: string
  orgName?: string
  orgLink: string
  owner?: string
  ownerLink: string
}

/**
 * 页脚
 */
interface VipFooter {
  message: string
  copyright: string
}

/**
 * 获取通用型页脚内容
 */
export function getVipFooter(params: FooterParams): VipFooter {
  return {
    message: `The License <a href="${params.license}">📖 MIT </a>`,
    copyright: `
Release ${params.pkgName}@${params.pkgVersion} 😏<br> Copyright © 2019-present.&nbsp;
Repo <a href="${params.orgLink}" style="margin-right:5px;">${params.orgName ?? '@142vip'}</a>&nbsp;
Author <a href=${params.ownerLink}>👉${params.owner ?? '储凡'}</a>
`,
  }
}

/**
 * 团队成员
 */
export const vipTeamMembers = [
  {
    avatar: 'https://www.github.com/142vip.png',
    name: '142vip',
    title: '开源组织',
    links: [
      { icon: 'github', link: 'https://github.com/mmdapl' },
    ],
  },
  {
    avatar: 'https://www.github.com/mmdapl.png',
    name: '储凡',
    title: 'Creator',
    org: '142vip',
    orgLink: 'https://github.com/142vip',
    links: [
      { icon: 'github', link: 'https://github.com/mmdapl' },
    ],
  },
  // {
  //   avatar: 'https://www.github.com/chufan443.png',
  //   name: '微信公众号：储凡',
  //   title: 'CodeReviewer',
  //   org: '142vip',
  //   orgLink: 'https://github.com/142vip',
  //   links: [
  //     { icon: 'github', link: 'https://github.com/chufan443' },
  //   ],
  // },
  // {
  //   avatar: 'https://www.github.com/lir0115.png',
  //   name: '公众号：Rong姐姐好可爱',
  //   title: 'Committer',
  //   org: '142vip',
  //   orgLink: 'https://github.com/142vip',
  //   links: [
  //     { icon: 'github', link: 'https://github.com/lir0115' },
  //   ],
  // },
]

/**
 * 基本包结构
 */
export interface VipPackageJSON extends Pick<PackageJSON, 'name' | 'version'> {
  description: string
  private?: boolean
}

/**
 * 模块项目结构
 */
export interface VipProject extends VipPackageJSON {
  id?: string
  npm?: string
  changelog: string
  readme: string
  sourceCode: string
}
