import fsSync from 'node:fs'
import * as process from 'node:process'
import { execShell } from '@142vip/common'

export interface TurboPackOptions {
  dev?: boolean
  build?: boolean
}

export async function execTurboPack(repoNames: string[], args: TurboPackOptions) {
  // 判断当前目录下是否有turbo.json配置文件
  if (!fsSync.existsSync('turbo.json')) {
    console.log('项目根目录下缺少turbo.json配置文件，查看Turborepo官网：<https://turbo.build/repo/docs>')
    process.exit(1)
  }

  // npx turbo run dev
  if (args.dev) {
    await execShell(`npx turbo run dev ${getFilterRepo(repoNames)} --color --only`)
  }

  // npx turbo run build
  if (args.build) {
    await execShell(`npx turbo run build ${getFilterRepo(repoNames)} --color --only`)
  }
}

/**
 * 获取需要执行命令的repo
 * - 支持多个--filter
 * - 支持所有repo
 * @param repoNames
 */
function getFilterRepo(repoNames: string[]) {
  return repoNames.map(name => `--filter=${name}`).join(' ')
}
