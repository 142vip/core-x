import type { VipCommanderOptions, VipPackageCliCommander } from '@142vip/utils'
import {
  VipColor,
  VipConsole,
  VipInquirer,
  vipLogger,
  VipMonorepo,
  VipNodeJS,
} from '@142vip/utils'
import { name as fairyCliPackageName } from '../../package.json'
import { CommandEnum } from '../fairy.interface'
import { fetchJson, fetchText, logDryRunSteps, registerFairySubcommand, runOrDryRun } from '../utils'

enum CNPMPackageState {
  Waiting = 'waiting',
  Processing = 'processing',
  Success = 'success',
}

interface RequestSync {
  ok: boolean
  id: string
}

interface SyncState {
  ok: boolean
  id: string
  type: string
  state: CNPMPackageState
  logUrl: string
}

function NPMSYNC_PUT(packageName: string) {
  return `https://registry-direct.npmmirror.com/-/package/${packageName}/syncs`
}

function NPMSYNC_STATE(packageName: string, logId: string) {
  return `https://registry.npmmirror.com/-/package/${packageName}/syncs/${logId}`
}

function NPM_SEARCH(keyword: string) {
  return `https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(keyword)}&size=20`
}

/** 发起 cnpm 同步 */
async function requestSync(packageName: string, dryRun?: boolean): Promise<void> {
  const syncUrl = NPMSYNC_PUT(packageName)

  await runOrDryRun(dryRun, 'sync', [
    `PUT ${syncUrl}`,
    `GET ${NPMSYNC_STATE(packageName, '{id}')}（约 2s 后轮询）`,
    `GET {logUrl}（拉取同步日志）`,
  ], async () => {
    const responseJSON = await fetchJson<RequestSync>(syncUrl, { method: 'PUT' })

    if (!responseJSON.ok) {
      VipConsole.log(`requestSync--json : ${JSON.stringify(responseJSON)}`)
      VipNodeJS.existErrorProcess()
    }

    setTimeout(async () => {
      const logUrl = await getPackageSyncLogUrl(packageName, responseJSON.id)
      if (logUrl != null) {
        await getPackageSyncLog(logUrl)
      }
    }, 2000)
  })
}

async function getPackageSyncLogUrl(packageName: string, logId: string): Promise<string | null> {
  const stateUrl = NPMSYNC_STATE(packageName, logId)
  const stateRes = await fetchJson<SyncState>(stateUrl)

  if (stateRes.ok) {
    return stateRes.logUrl
  }
  vipLogger.error(`getPackageSyncState-->err:${JSON.stringify(stateRes)}`)
  VipNodeJS.existErrorProcess()
  return null
}

async function getPackageSyncLog(logUrl: string): Promise<void> {
  const syncLog = await fetchText(logUrl)
  VipConsole.log(`getPackageSyncLog: ${syncLog}`)
}

async function execSync(packageName: string, dryRun?: boolean): Promise<void> {
  if (dryRun) {
    logDryRunSteps('sync', [`延迟 1s 后执行同步流程`, `包名: ${packageName}`])
    await requestSync(packageName, true)
    return
  }

  setTimeout(async () => {
    vipLogger.logByBlank(`---------【${fairyCliPackageName}】模块：${VipColor.green(packageName)}，开始同步 ------- `)
    await requestSync(packageName, false)
  }, 1000)
}

/** npm 在线搜索（供 Inquirer promptSearch 使用） */
async function searchNpmPkgOnline(input: string | undefined, options: { signal: AbortSignal }) {
  if (input == null) {
    return []
  }

  const data = await fetchJson<{
    objects: ReadonlyArray<{
      package: {
        name: string
        description: string
      }
    }>
  }>(NPM_SEARCH(input), { signal: options.signal })

  return data.objects.map(pkg => ({
    name: pkg.package.name,
    value: pkg.package.name,
    description: pkg.package.description,
  }))
}

/**
 * `fa sync`：将指定 npm 包同步到 CNPM 镜像（npmmirror sync API）。
 * - `--vip`：从 Monorepo `packages/*` 交互选包
 * - `--dry-run`：只打印 HTTP 步骤
 */
export async function syncMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand<[string | undefined, VipCommanderOptions]>(program, CommandEnum.SYNC, async (packageName, options) => {
    if (packageName == null && options.vip) {
      const pkgJSON = VipMonorepo.getReleasePkgJSON('./packages/*')
      const packageNames = pkgJSON.map(pkg => pkg.name)
      packageName = await VipInquirer.promptSearch('请选择需要同步的模块包名称：', VipInquirer.handleSimpleSearchSource(packageNames))
    }
    else if (packageName == null) {
      packageName = await VipInquirer.promptSearch('请输入需要同步的模块包名称：', searchNpmPkgOnline)
    }

    if (packageName != null) {
      await execSync(packageName, options.dryRun)
    }
  }, (command) => {
    command.argument('[packageName]', '需要同步的模块包名称')
  })
}
