import type { VipAgentSkillCliOptions } from '@142vip/agent-skills'
import type { VipCommander, VipPackageCliCommander } from '@142vip/utils'
import {
  ProcessExitCodeEnum,
  VipColor,
  VipConsole,
  VipNodeJS,
} from '@142vip/utils'
import { loadFairyConfig, resolveFairyCommandDefaults } from '../config'
import { CommandEnum } from '../constant'
import { logFairyEquivalentCommand, registerFairySubcommand } from '../utils'

/** `fa ai` 选项（与 `@142vip/agent-skills` CLI 对齐） */
export type AiCommandOptions = VipAgentSkillCliOptions

const ENV_AGENT_SKILLS_TARGET = 'AGENT_SKILLS_TARGET'

async function loadAgentSkills(): Promise<Pick<typeof import('@142vip/agent-skills'), 'syncAgentSkills'>> {
  try {
    return await import('@142vip/agent-skills')
  }
  catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    VipConsole.error(`${VipColor.redBright('fa ai:')} 无法加载 ${VipColor.cyan('@142vip/agent-skills')}`)
    VipConsole.log(`  请先安装：${VipColor.green('pnpm add -D @142vip/agent-skills @142vip/utils')}`)
    if (message.includes('VipPackageCliCommander')) {
      VipConsole.log(
        VipColor.dim('  @142vip/utils 版本过旧（需 >=0.0.1-alpha.59）；请 npx fa ci 或 pnpm i 后使用 pnpm exec fa ai'),
      )
    }
    VipConsole.log(VipColor.dim(`  原因：${message}`))
    VipNodeJS.exitProcess(ProcessExitCodeEnum.FatalError)
    throw error
  }
}

/**
 * 目标根目录。`fairy.config` → `ai.target` 在进入本函数前已填入 `options.target`（命令行 `-t` 优先）。
 * 仍无 target 时：`AGENT_SKILLS_TARGET` → `cwd`。
 */
export function resolveAiTarget(options: AiCommandOptions): string {
  if (options.target != null && options.target !== '')
    return VipNodeJS.pathResolve(options.target)

  const envTarget = VipNodeJS.getProcessEnv(ENV_AGENT_SKILLS_TARGET)
  if (envTarget)
    return VipNodeJS.pathResolve(envTarget)

  return VipNodeJS.getProcessCwd()
}

/**
 * `fa ai`：默认把包内 skills 同步到下游 `.agents/skills/`。
 * `fa ai --check`：只比对漂移，不写盘；漂移时 exit 非 0 并提示执行 `fa ai` 修复。
 */
async function runAiCommand(options: AiCommandOptions): Promise<void> {
  const check = options.check === true
  const dryRun = options.dryRun ?? false
  const force = options.force ?? false

  if (check && dryRun) {
    VipConsole.error(`${VipColor.redBright('ai:')} --check 与 --dry-run 互斥，请只选其一`)
    VipNodeJS.exitProcess(ProcessExitCodeEnum.UsageError)
    return
  }

  const agentSkills = await loadAgentSkills()
  const targetRoot = resolveAiTarget(options)

  try {
    const syncOutcome = agentSkills.syncAgentSkills({
      target: targetRoot,
      dryRun: check ? false : dryRun,
      force,
      check,
    })

    if (check) {
      if (!syncOutcome.ok) {
        VipConsole.log(VipColor.dim(`漂移文件数：${syncOutcome.drifts.length}`))
        for (const driftPath of syncOutcome.drifts.slice(0, 20))
          VipConsole.log(`  ${VipColor.yellow(driftPath)}`)
        if (syncOutcome.drifts.length > 20)
          VipConsole.log(VipColor.dim(`  … 其余 ${syncOutcome.drifts.length - 20} 项省略`))
        VipConsole.log(VipColor.dim(`修复：${VipColor.green('fa ai')} -t <repoRoot>`))
        VipNodeJS.exitProcess(ProcessExitCodeEnum.FatalError)
      }
      return
    }

    VipConsole.log(
      `${VipColor.greenBright('ai:')} ${dryRun ? 'dry-run 完成' : '同步完成'} → ${VipColor.cyan(syncOutcome.dest)}`,
    )
  }
  catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    VipConsole.error(`${VipColor.redBright('ai:')} ${message}`)
    VipNodeJS.exitProcess(ProcessExitCodeEnum.FatalError)
  }
}

const AI_EQUIVALENT_FLAGS = [
  { key: 'target', flag: '-t', kind: 'value' },
  { key: 'check', flag: '--check', kind: 'boolean', defaultValue: false, offFlag: '--no-check' },
  { key: 'force', flag: '--force', kind: 'boolean', defaultValue: false, offFlag: '--no-force' },
  { key: 'dryRun', flag: '--dry-run', kind: 'boolean', defaultValue: false, offFlag: '--no-dry-run' },
] as const

const AI_CONFIG_KEYS = ['target', 'check', 'force', 'dryRun'] as const

/** 注册 `fa ai`。未在命令行写出的参数使用 `fairy.config` → `ai` */
export async function aiMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand(program, CommandEnum.AI, async (raw: AiCommandOptions, command: VipCommander) => {
    const { args, fromConfig } = resolveFairyCommandDefaults(command, raw, loadFairyConfig().ai, AI_CONFIG_KEYS)
    logFairyEquivalentCommand('ai', args, fromConfig, AI_EQUIVALENT_FLAGS)
    await runAiCommand(args)
  }, (command) => {
    command.allowExcessArguments(false)
    command
      .option('-t,--target <dir>', '下游项目根目录（默认 cwd；也可设 AGENT_SKILLS_TARGET）')
      .option('--check', '校验下游镜像是否与包内一致（不写入）', false)
      .option('--force', '目标无 package.json 时仍继续', false)
      .option('--no-check', '改为写入同步')
      .option('--no-force', '目标无 package.json 时停止')
  })
}
