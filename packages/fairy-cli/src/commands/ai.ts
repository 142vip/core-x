import type { VipAgentSkillCliOptions } from '@142vip/agent-skills'
import type { VipPackageCliCommander } from '@142vip/utils'
import {
  ProcessExitCodeEnum,
  VipColor,
  VipConsole,
  VipNodeJS,
} from '@142vip/utils'
import { CommandEnum } from '../fairy.interface'
import { registerFairySubcommand } from '../utils'

/** `fa ai` 专有选项（在 agent-skills 共享字段之上增加 `--sync`） */
export interface AiCommandOptions extends VipAgentSkillCliOptions {
  /** 同步到下游 `.agents/skills/`（与 `--check` 互斥；均未传时默认同步） */
  sync?: boolean
}

const ENV_AGENT_SKILLS_TARGET = 'AGENT_SKILLS_TARGET'

async function loadAgentSkills(): Promise<typeof import('@142vip/agent-skills')> {
  try {
    return await import('@142vip/agent-skills')
  }
  catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    VipConsole.error(`${VipColor.redBright('fa ai:')} 无法加载 ${VipColor.cyan('@142vip/agent-skills')}`)
    VipConsole.log(`  请先安装：${VipColor.green('pnpm add -D @142vip/agent-skills')}`)
    VipConsole.log(VipColor.dim(`  原因：${message}`))
    VipNodeJS.exitProcess(ProcessExitCodeEnum.FatalError)
    throw error
  }
}

/**
 * 解析运行模式：`--check` 与 `--sync` 互斥；均未指定时默认同步。
 */
export function resolveAiRunMode(options: AiCommandOptions): 'sync' | 'check' {
  const { check = false, sync = false } = options

  if (check && sync) {
    VipConsole.error(`${VipColor.redBright('ai:')} --sync 与 --check 互斥，请只选其一`)
    VipNodeJS.exitProcess(ProcessExitCodeEnum.UsageError)
    throw new Error('unreachable')
  }

  if (check)
    return 'check'

  return 'sync'
}

/** 解析目标目录：--target > AGENT_SKILLS_TARGET > cwd */
export function resolveTarget(options: AiCommandOptions): string {
  if (options.target != null && options.target !== '')
    return VipNodeJS.pathResolve(options.target)

  const envTarget = VipNodeJS.getProcessEnv(ENV_AGENT_SKILLS_TARGET)
  if (envTarget)
    return VipNodeJS.pathResolve(envTarget)

  return VipNodeJS.getProcessCwd()
}

async function runSyncOrCheck(mode: 'sync' | 'check', options: AiCommandOptions): Promise<void> {
  const check = mode === 'check'
  const {
    dryRun = false,
    force = false,
  } = options

  if (check && dryRun) {
    VipConsole.error(`${VipColor.redBright('ai:')} --check 与 --dry-run 互斥，请只选其一`)
    VipNodeJS.exitProcess(ProcessExitCodeEnum.UsageError)
    return
  }

  const agentSkills = await loadAgentSkills()
  const targetRoot = resolveTarget(options)

  try {
    const syncOutcome = agentSkills.syncAgentSkills({
      target: targetRoot,
      dryRun: check ? false : dryRun,
      force,
      check,
    })

    if (check && !syncOutcome.ok) {
      VipConsole.log(VipColor.dim(`漂移文件数：${syncOutcome.drifts.length}`))
      if (syncOutcome.drifts.length > 0) {
        for (const driftPath of syncOutcome.drifts.slice(0, 20))
          VipConsole.log(`  ${VipColor.yellow(driftPath)}`)
        if (syncOutcome.drifts.length > 20)
          VipConsole.log(VipColor.dim(`  … 其余 ${syncOutcome.drifts.length - 20} 项省略`))
      }
      VipConsole.log(VipColor.dim(`修复：${VipColor.green('fa ai --sync')} -t <repoRoot>`))
      VipNodeJS.exitProcess(ProcessExitCodeEnum.FatalError)
      return
    }

    if (!check) {
      VipConsole.log(
        `${VipColor.greenBright('ai:')} ${dryRun ? 'dry-run 完成' : '同步完成'} → ${VipColor.cyan(syncOutcome.dest)}`,
      )
    }
  }
  catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    VipConsole.error(`${VipColor.redBright('ai:')} ${message}`)
    VipNodeJS.exitProcess(ProcessExitCodeEnum.FatalError)
  }
}

/**
 * Agent Skills：`fa ai --sync` / `fa ai --check`，能力委托 `@142vip/agent-skills`。
 */
export async function aiMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand(program, CommandEnum.AI, async (options: AiCommandOptions) => {
    const mode = resolveAiRunMode(options)
    await runSyncOrCheck(mode, options)
  }, (command) => {
    command.allowExcessArguments(false)
    command
      .option('-t, --target <dir>', '下游项目根目录（默认 cwd；也可设 AGENT_SKILLS_TARGET）')
      .option('--sync', '同步通用 Skills 到 .agents/skills/', false)
      .option('--check', '校验下游镜像是否与包内一致', false)
      .option('--force', '目标无 package.json 时仍继续', false)
  })
}
