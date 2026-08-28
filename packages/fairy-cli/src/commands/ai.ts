import type { VipAgentSkillCliOptions } from '@142vip/agent-skills'
import type { VipCommander } from '@142vip/utils'
import {
  ProcessExitCodeEnum,
  VipColor,
  VipConsole,
  vipLogger,
  VipNodeJS,
} from '@142vip/utils'
import { CLI_COMMAND_DETAIL, CommandEnum } from '../enums'

/**
 * ai 子命令可执行的操作
 * - sync：将包内通用 skills 同步到目标项目 `.agents/skills/`
 * - check：只比对、不写盘（漂移时非 0 退出）
 * - info：查看已安装的 agent-skills 元信息
 */
const AI_ACTIONS = ['sync', 'check', 'info'] as const
type AiAction = (typeof AI_ACTIONS)[number]

/**
 * `fa ai` / `fairy ai` 命令选项。
 *
 * 继承 `@142vip/agent-skills` 的 {@link VipAgentSkillCliOptions}
 *（`--target` / `--dry-run` / `--force` / `--check` 字段语义一致），
 * 本命令不额外叠加字段；后续若有专有选项在此 extends 扩展即可。
 *
 * 可选布尔由 VipCommander / commander 默认值与解构默认收口，
 * **禁止**业务路径再包一层 `Boolean(...)`。
 */
export interface AiCommandOptions extends VipAgentSkillCliOptions {}

/** 环境变量：未传 --target 时可用（与 vip-agent-skills CLI 一致） */
const ENV_AGENT_SKILLS_TARGET = 'AGENT_SKILLS_TARGET'

/**
 * 动态加载 @142vip/agent-skills，缺失时给出安装提示（不硬绑死启动）。
 * 核心能力全部委托给该包，fairy-cli 只做命令拼装与参数透传。
 */
async function loadAgentSkills(): Promise<typeof import('@142vip/agent-skills')> {
  try {
    return await import('@142vip/agent-skills')
  }
  catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    VipConsole.error(`${VipColor.redBright('@142vip/fairy-cli ai:')} 无法加载 ${VipColor.cyan('@142vip/agent-skills')}`)
    VipConsole.log(`  请先安装：${VipColor.green('pnpm add -D @142vip/agent-skills')}`)
    VipConsole.log(`  或：${VipColor.green('npm install -D @142vip/agent-skills')}`)
    VipConsole.log(VipColor.dim(`  原因：${message}`))
    VipNodeJS.exitProcess(ProcessExitCodeEnum.FatalError)
    // 类型收窄：exit 后不可达
    throw error
  }
}

/**
 * 解析并规范化 action；支持 `--check` 覆盖为 check。
 */
function resolveAction(rawAction: string | undefined, options: AiCommandOptions): AiAction {
  // 兼容：fa ai --check 未写 action；check 由 commander 默认 false
  const { check = false } = options
  if (check)
    return 'check'

  const actionName = (rawAction || 'sync').toLowerCase()
  if ((AI_ACTIONS as readonly string[]).includes(actionName))
    return actionName as AiAction

  VipConsole.error(`${VipColor.redBright('ai:')} 未知操作 ${VipColor.yellow(String(rawAction))}`)
  VipConsole.log(`  可用：${AI_ACTIONS.map(name => VipColor.cyan(name)).join(' | ')}`)
  VipConsole.log(`  示例：${VipColor.green('fa ai sync')} · ${VipColor.green('fa ai check')} · ${VipColor.green('fa ai info')}`)
  VipNodeJS.exitProcess(ProcessExitCodeEnum.UsageError)
  throw new Error('unreachable')
}

/**
 * 解析目标目录：--target > AGENT_SKILLS_TARGET > cwd
 */
function resolveTarget(options: AiCommandOptions): string {
  if (options.target != null && options.target !== '')
    return VipNodeJS.pathResolve(options.target)

  const envTarget = VipNodeJS.getProcessEnv(ENV_AGENT_SKILLS_TARGET)
  if (envTarget)
    return VipNodeJS.pathResolve(envTarget)

  return VipNodeJS.getProcessCwd()
}

/**
 * 打印 agent-skills 包信息（不写盘）
 */
async function printAgentSkillsInfo(): Promise<void> {
  const agentSkills = await loadAgentSkills()
  const packageName = agentSkills.getPackageName()
  const version = agentSkills.getVersion()
  const skillsRoot = agentSkills.getSkillsRoot()
  const coreSkillNames = agentSkills.CORE_SKILL_NAMES

  vipLogger.println()
  VipConsole.log(`${VipColor.greenBright('AI Agent Skills')}`)
  VipConsole.log(`  package : ${VipColor.cyan(packageName)}@${version}`)
  VipConsole.log(`  skills  : ${VipColor.dim(skillsRoot)}`)
  VipConsole.log(`  core    : ${coreSkillNames.map(name => VipColor.cyan(name)).join(', ')}`)
  VipConsole.log(`  dest    : ${VipColor.dim('.agents/skills/')} （同步目标相对路径）`)
  VipConsole.log(`  note    : 永不覆盖本地 ${VipColor.yellow('business-map')}`)
  vipLogger.println()
  VipConsole.log(VipColor.dim(`用法：fa ai sync | fa ai check | fa ai info`))
  VipConsole.log(VipColor.dim(`     fa ai sync -t . --dry-run`))
  vipLogger.println()
}

/**
 * 执行 sync / check，透传至 syncAgentSkills（VipAgentSkillSyncOptions）。
 */
async function runSyncOrCheck(action: 'sync' | 'check', options: AiCommandOptions): Promise<void> {
  const check = action === 'check'
  // 可选布尔：解构默认收口，禁止 Boolean(...)
  const {
    dryRun = false,
    force = false,
  } = options

  // 与 vip-agent-skills CLI 一致：check 与 dry-run 互斥
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
      VipConsole.log(VipColor.dim('修复：fa ai sync -t <repoRoot>'))
      VipNodeJS.exitProcess(ProcessExitCodeEnum.FatalError)
      return
    }

    // sync / check 成功时，agent-skills 内部已打印进度；此处仅补一句摘要
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
 * ai 命令入口
 * - `fa ai` / `fairy ai` / `fairy-cli` 同源 bin（cli.mjs）
 * - 能力复用 `@142vip/agent-skills` 的 `syncAgentSkills` API，不重复实现 IO
 * - 选项类型见 {@link AiCommandOptions}（extends VipAgentSkillCliOptions）
 *
 * @example
 * ```shell
 * fa ai
 * fa ai sync
 * fa ai sync -t . --dry-run
 * fa ai check -t .
 * fa ai info
 * fa a sync --force
 * ```
 */
export async function aiMain(program: VipCommander): Promise<void> {
  program
    .initCommand(CLI_COMMAND_DETAIL[CommandEnum.AI], {
      // 默认开启 --dry-run；info / check 场景自行忽略
      dryRun: true,
      // 日志由 agent-skills 侧输出，无需再挂 --trace
      trace: false,
    })
    .argument('[action]', `操作：${AI_ACTIONS.join(' | ')}（默认 sync）`, 'sync')
    .option('-t, --target <dir>', '下游项目根目录（默认 cwd；也可设 AGENT_SKILLS_TARGET）')
    .option('--force', '目标无 package.json 时仍继续', false)
    .option('--check', '校验模式（等价于 action=check）', false)
    .action(async (action: string, options: AiCommandOptions): Promise<void> => {
      const resolvedAction = resolveAction(action, options)

      if (resolvedAction === 'info') {
        await printAgentSkillsInfo()
        return
      }

      await runSyncOrCheck(resolvedAction, options)
    })
}
