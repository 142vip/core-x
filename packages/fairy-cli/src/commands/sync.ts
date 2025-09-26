import type { VipCommander } from '@142vip/utils'
import { vipAxios } from '@142vip/axios'
import {
  VipColor,
  VipConsole,
  VipInquirer,
  vipLogger,
  VipMonorepo,
  VipNodeJS,
} from '@142vip/utils'
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

  const { data: responseJSON } = await vipAxios.put<RequestSync>(syncUrl)

  // if (response.status === 404 || !response.ok) {
  //
  // }

  if (!responseJSON.ok) {
    VipConsole.log(`requestSync--json : ${responseJSON}`)
    VipNodeJS.existErrorProcess()
  }
  setTimeout(async () => {
    const logUrl = await getPackageSyncLogUrl(packageName, responseJSON.id)
    if (logUrl != null) {
      await getPackageSyncLog(logUrl)
    }
  }, 2000)
}

/**
 * 同步的状态
 */
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
  const { data: stateRes } = await vipAxios.get<SyncState>(stateUrl)

  // 正常的请求 && stateRes.state === CNPMPackageState.Success
  if (stateRes.ok) {
    return stateRes.logUrl
  }
  vipLogger.error(`getPackageSyncState-->err:${stateRes}`)
  VipNodeJS.existErrorProcess()
  return null
}

async function getPackageSyncLog(logUrl: string): Promise<void> {
  const { data: syncLog } = await vipAxios.get(logUrl)

  VipConsole.log(`getPackageSyncLog: ${syncLog.toString()}`)
}

/**
 * 同步到国内仓库
 * - cnpm
 */
async function execSync(packageName: string): Promise<void> {
  setTimeout(async () => {
    vipLogger.logByBlank(`---------【@142vip/fairy-cli】模块：${VipColor.green(packageName)}，开始同步 ------- `)
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
  const { data } = await vipAxios.get<{
    objects: ReadonlyArray<{
      package: {
        name: string
        description: string
      }
    }>
  }>(`https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(input)}&size=20`, {
    signal: options.signal,
  })

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
    .initCommand(CLI_COMMAND_DETAIL[CommandEnum.SYNC], { vip: true })
    .argument('[packageName]', '需要同步的模块包名称')
    .action(async (packageName: string | undefined, options): Promise<void> => {
      // 142vip本地业务
      if (packageName == null && options.vip) {
        const pkgJSON = VipMonorepo.getReleasePkgJSON('./packages/*')
        const packageNames = pkgJSON.map(pkg => pkg.name)
        packageName = await VipInquirer.promptSearch('请选择需要同步的模块包名称：', VipInquirer.handleSimpleSearchSource(packageNames))
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
