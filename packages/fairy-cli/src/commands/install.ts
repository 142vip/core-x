import type { VipCommander, VipPackageCliCommander } from '@142vip/utils'
import type { InstallCliOptions } from '../utils'
import { CommandEnum } from '../constant'
import {
  buildCiInstallPreview,
  buildLocalNpmInstallPreview,
  buildLocalPnpmInstallPreview,
  execCiInstall,
  execLocalNpmInstall,
  execLocalPnpmInstall,
  INSTALL_REGISTRY_PRESETS,
  isCiInstallMode,
  mergeInstallCliOptions,
  registerFairySubcommand,
  resolveHookCommands,
  runFairyHook,
  runOrDryRun,
} from '../utils'

async function runInstallWithFairyLifecycle(
  installArgs: InstallCliOptions,
  actionLabel: string,
  installPreview: string | string[],
  installExec: () => Promise<void>,
): Promise<void> {
  const previewSteps = [
    ...resolveHookCommands('preinstall'),
    ...(Array.isArray(installPreview) ? installPreview : [installPreview]),
    ...resolveHookCommands('postinstall'),
  ]

  await runOrDryRun(installArgs.dryRun, actionLabel, previewSteps, async () => {
    await runFairyHook('preinstall')
    await installExec()
    await runFairyHook('postinstall')
  })
}

function appendInstallCommandOptions(command: VipCommander): void {
  const { npm, alibaba, tencent } = INSTALL_REGISTRY_PRESETS
  command
    .option('-f, --force', '仅 `fa i`：强制更新 lock（pnpm / npm --force）；默认按 lock 安装。`fa ci` 固定 `--frozen-lockfile --force`', false)
    .option(
      '--npm-registry [url]',
      `pnpm / npm 源：仅写开关为 npm 官方（${npm}）；可跟自定义 url；亦可用阿里 / 腾讯快捷开关`,
    )
    .option('--npm-ali-registry', `使用阿里源（${alibaba}）`, false)
    .option('--npm-tencent-registry', `使用腾讯源（${tencent}）`, false)
    .option(
      '--corepack-registry [url]',
      `corepack 拉 pnpm 的 npm 源：仅写开关为 npm 官方（${npm}）；可跟自定义 url`,
    )
    .option('--corepack-ali-registry', `corepack 使用阿里 npm 源（${alibaba}）`, false)
    .option('--corepack-tencent-registry', `corepack 使用腾讯 npm 源（${tencent}）`, false)
    .option('--npm', '本地安装使用 npm（默认 pnpm）', false)
    .option('--ignore-scripts', '安装依赖时不执行 package.json 中的 scripts', false)
    .option(
      '--hook-only <name>',
      '仅执行 fairy.config → hooks 中对应命令（如 preinstall / postinstall），不安装依赖',
    )
    .allowExcessArguments(true)
    .allowUnknownOption(true)
}

/** `fa i` 仍拒绝未知选项；`fa ci` 把它们追加到 pnpm，对应 `"$@"` */
function rejectUnknownInstallOptions(command: VipCommander): void {
  const unknown = command.args.find(token => token.startsWith('-'))
  if (unknown != null) {
    command.error(`error: unknown option '${unknown}'`, { code: 'commander.unknownOption' })
  }
}

/**
 * 注册 `fa install`（aliases: `i` / `ci` / …）。
 *
 * - `fa i`：有 lock 按 lock 安装；无 lock 生成 lock；`-f` 强制更新 lock；安装前打印工具链版本
 * - `fa ci`：corepack + `pnpm i --frozen-lockfile --force "$@"`，并执行 hooks
 */
export async function installMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand(program, CommandEnum.INSTALL, async (args: InstallCliOptions, command: VipCommander) => {
    const installArgs = mergeInstallCliOptions(args)
    const ciMode = isCiInstallMode()
    if (!ciMode) {
      rejectUnknownInstallOptions(command)
    }
    const extraPnpmArgs = ciMode ? command.args : undefined

    if (installArgs.hookOnly != null && installArgs.hookOnly.trim() !== '') {
      const hookName = installArgs.hookOnly.trim()
      const preview = resolveHookCommands(hookName)
      await runOrDryRun(installArgs.dryRun, `hook ${hookName}`, preview, async () => {
        await runFairyHook(hookName)
      })
      return
    }

    if (isCiInstallMode()) {
      const preview = buildCiInstallPreview(installArgs, extraPnpmArgs)
      await runInstallWithFairyLifecycle(installArgs, 'ci', preview, async () => {
        await execCiInstall(installArgs, extraPnpmArgs)
      })
      return
    }

    if (installArgs.npm) {
      const preview = buildLocalNpmInstallPreview(installArgs)
      await runInstallWithFairyLifecycle(installArgs, 'install', preview, async () => {
        await execLocalNpmInstall(installArgs)
      })
      return
    }

    const preview = buildLocalPnpmInstallPreview(installArgs)
    await runInstallWithFairyLifecycle(installArgs, 'install', preview, async () => {
      await execLocalPnpmInstall(installArgs)
    })
  }, appendInstallCommandOptions)
}
