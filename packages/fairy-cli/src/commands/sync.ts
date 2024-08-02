import { execShell } from '@142vip/common'

export interface SyncOptions {

}

/**
 * 同步到cnpm仓库
 * @param packageNames
 */
export async function execSync(packageNames: string[]) {
  await execShell(packageNames.map(packageName => ({
    command: `npx cpnm sync ${packageName}`,
    description: `同步模块${packageName}到cnpm仓库`,
  })))
}
