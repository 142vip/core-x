import type { VipCommander } from '@142vip/utils'
import {
  HttpMethod,
  VipColor,
  VipConsole,
  VipInquirer,
  vipLogger,
  VipMonorepo,
  VipNodeJS,
} from '@142vip/utils'
import fetch from 'node-fetch'
import { CLI_COMMAND_DETAIL, CommandEnum } from '../enums'

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
    const logUrl = await getPackageSyncLogUrl(packageName, logId)
    if (logUrl != null) {
      await getPackageSyncLog(logUrl)
    }
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
async function getPackageSyncLogUrl(packageName: string, logId: string): Promise<string | null> {
  const stateUrl = `https://registry.npmmirror.com/-/package/${packageName}/syncs/${logId}`
  const response = await fetch(stateUrl)
  const stateRes = await response.json() as SyncState

  // 正常的请求 && stateRes.state === CNPMPackageState.Success
  if (stateRes.ok) {
    return stateRes.logUrl
  }
  vipLogger.error(`getPackageSyncState-->err:${stateRes}`)
  VipNodeJS.exitProcess(1)
  return null
}

async function getPackageSyncLog(logUrl: string): Promise<void> {
  const response = await fetch(logUrl)

  const syncLog = await response.text()
  VipConsole.log(`getPackageSyncLog: ${syncLog.toString()}`)
}

/**
 * 同步到国内仓库
 * - cnpm
 */
async function execSync(packageName: string): Promise<void> {
  setTimeout(async () => {
    vipLogger.log(`---------【@142vip/fairy-cli】模块：${VipColor.red(packageName)}，开始同步 ------- `)
    vipLogger.println()
    await requestSync(packageName)
  }, 1000)
}

/**
 * 在线搜索npm包
 */
async function searchNpmPkgOnline(input: string | undefined, options: { signal: AbortSignal }) {
  if (input == null) {
    return []
  }
  const response = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(input)}&size=20`,
    { signal: options.signal },
  )
  const data = (await response.json()) as {
    objects: ReadonlyArray<{ package: { name: string, description: string } }>
  }

  return data.objects.map(pkg => ({
    name: pkg.package.name,
    value: pkg.package.name,
    description: pkg.package.description,
  }))
}

/**
 * sync命令入口
 */
export async function syncMain(program: VipCommander): Promise<void> {
  program
    .initCommand(CLI_COMMAND_DETAIL[CommandEnum.SYNC])
    .argument('[packageName]', '需要同步的模块包名称')
    .action(async (packageName: string | undefined, options): Promise<void> => {
      // 142vip本地业务
      if (packageName == null && options.vip) {
        const pkgJSON = VipMonorepo.getReleasePkgJSON('./packages/*')
        const packageNames = pkgJSON.map(pkg => pkg.name)
        packageName = await VipInquirer.promptSelect('请选择需要同步的模块包名称：', packageNames)
      }
      // 在线查询，搜索npm包
      else {
        packageName = await VipInquirer.promptSearch('请输入需要同步的模块包名称：', searchNpmPkgOnline)
      }

      if (packageName != null) {
        await execSync(packageName)
      }
    })
}
