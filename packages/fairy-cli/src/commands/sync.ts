import process from 'node:process'
import type { Command } from 'commander'
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

async function requestSync(packageName: string) {
  // https://registry-direct.npmmirror.com/-/package/@142vip/vitepress/syncs
  // `https://registry.npmmirror.com/${packageName}/sync`
  const syncUrl = `https://registry-direct.npmmirror.com/-/package/${packageName}/syncs`

  const response = await fetch(syncUrl, { method: 'PUT' })

  // if (response.status === 404 || !response.ok) {
  //
  // }

  const { ok, id: logId } = await response.json() as RequestSync

  if (!ok) {
    console.log('requestSync--json', await response.json())
    process.exit(1)
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

async function getPackageSyncState(packageName: string, logId: string) {
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

async function getPackageSyncLog(logUrl: string) {
  const response = await fetch(logUrl)

  const syncLog = await response.text()
  // console.log('getPackageSyncLog', syncLog)
  console.log(syncLog.toString())
}

/**
 * 同步到cnpm仓库
 * @param packageNames
 */
async function execSync(packageNames: string[]) {
  for (const packageName of packageNames) {
    setTimeout(async () => {
      console.log(`---------模块：${packageName} 开始同步 ------- \n`)
      await requestSync(packageName)
    }, 1000)
  }
}

/**
 * sync命令入口
 */
export async function syncMain(program: Command): Promise<void> {
  program
    .command(CliCommandEnum.SYNC)
    .description('同步npm仓库的模块包到cnpm仓库')
    .argument('[packageNames...]', '需要同步的模块包名称，支持多个。例如： @142vip/fairy-cli')
    .action(async (packageNames: string[]) => {
      await execSync(packageNames)
    })
}
