import type { VipCommander } from '@142vip/utils'
import process from 'node:process'
import { HttpMethod, VipConsole, VipNodeJS } from '@142vip/utils'
import fetch from 'node-fetch'
import { CliCommandEnum } from '../shared'

/**
 * cnpm 同步状态
 */
enum CNPMPackageState {
  Waiting = 'waiting',
  Processing = 'processing',
  Success = 'success',
}

/**
 * 同步包的响应
 */
interface RequestSync {
  ok: boolean
  // logId: string
  id: string
}

// https://registry-direct.npmmirror.com/-/package/@142vip/vitepress/syncs
// {
//   "ok": true,
//   "id": "66e10e1be561c46e1becf19a",
//   "type": "sync_package",
//   "state": "waiting"
// }

/**
 * 发起同步请求，同步模块
 */
async function requestSync(packageName: string): Promise<void> {
  // https://registry-direct.npmmirror.com/-/package/@142vip/vitepress/syncs
  // `https://registry.npmmirror.com/${packageName}/sync`
  const syncUrl = `https://registry-direct.npmmirror.com/-/package/${packageName}/syncs`

  const response = await fetch(syncUrl, {
    method: HttpMethod.PUT,
  })

  // if (response.status === 404 || !response.ok) {
  //
  // }

  const { ok, id: logId } = await response.json() as RequestSync

  if (!ok) {
    VipConsole.log(`requestSync--json : ${await response.json()}`)
    VipNodeJS.exitProcess(1)
  }
  setTimeout(async () => {
    const logUrl = await getPackageSyncState(packageName, logId)
    await getPackageSyncLog(logUrl)
  }, 2000)
}

interface SyncState {
  ok: boolean
  id: string
  type: string
  state: CNPMPackageState
  logUrl: string
}

/**
 * 获取包的同步状态
 */
async function getPackageSyncState(packageName: string, logId: string): Promise<string> {
  const stateUrl = `https://registry.npmmirror.com/-/package/${packageName}/syncs/${logId}`
  const response = await fetch(stateUrl)
  const stateRes = await response.json() as SyncState

  // 正常的请求 && stateRes.state === CNPMPackageState.Success
  if (stateRes.ok) {
    return stateRes.logUrl
  }
  console.log('getPackageSyncState-->err', stateRes)
  process.exit(1)
}

async function getPackageSyncLog(logUrl: string): Promise<void> {
  const response = await fetch(logUrl)

  const syncLog = await response.text()
  VipConsole.log(`getPackageSyncLog: ${syncLog.toString()}`)
}

/**
 * 同步到cnpm仓库
 * @param packageNames
 */
async function execSync(packageNames: string[]): Promise<void> {
  for (const packageName of packageNames) {
    setTimeout(async () => {
      VipConsole.log(`---------模块：${packageName} 开始同步 ------- \n`)
      await requestSync(packageName)
    }, 1000)
  }
}

/**
 * sync命令入口
 */
export async function syncMain(program: VipCommander): Promise<void> {
  program
    .command(CliCommandEnum.SYNC)
    .description('同步npm仓库的模块包到cnpm仓库')
    .argument('[packageNames...]', '需要同步的模块包名称，支持多个。例如： @142vip/fairy-cli')
    .action(async (packageNames: string[]) => {
      await execSync(packageNames)
    })
}
