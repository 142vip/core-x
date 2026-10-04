import type { VipCliIdentity } from './cli-presentation'
import { EventEmitter } from 'node:events'
import { Command as CommanderRoot } from 'commander'
import { formatVipCliBanner } from './cli-presentation'
import { VipConsole } from './console'
import { setVipConsoleTraceEnabled } from './console-trace'

export { isVipConsoleTraceEnabled, setVipConsoleTraceEnabled } from './console-trace'

export interface VipCommanderDetailOptions {
  command: string
  aliases: string[]
  summary: string
  description: string
}

export interface VipCommanderOptions {
  /** 注册 `--dry-run`（子命令 `-h` 展示，紧挨 `--help` 上方） */
  dryRun?: boolean
  /** 注册 `--vip`（子命令 `-h` 展示，紧挨 `--help` 上方） */
  vip?: boolean
  /** 注册 `--trace`（根程序 `-h` 展示；开启后 `VipConsole.trace` 输出执行日志） */
  trace?: boolean
  /** 注册 `-h, --help`（置于 Options 末尾） */
  help?: boolean
}

/** 子命令 / standalone bin 通用 Options 默认项 */
export const vipCommanderDefaultOptions: VipCommanderOptions = {
  dryRun: true,
  vip: true,
  trace: true,
  help: true,
}

/** 子命令注册默认项，等同 `vipCommanderDefaultOptions` */
export const vipCommanderSubcommandOptions = vipCommanderDefaultOptions

/** 根程序 `fa -h`：仅 trace + help（不含 dry-run / vip） */
const vipCommanderRootOptions: VipCommanderOptions = {
  dryRun: false,
  vip: false,
  trace: true,
  help: true,
}

/** 从当前命令及其父级读取 `--trace`，同步追踪开关 */
function applyVipCommanderTraceFromCommand(command: VipCommander): void {
  const globalOpts = command.optsWithGlobals() as VipCommanderOptions
  if (globalOpts.trace) {
    setVipConsoleTraceEnabled(true)
  }
}

/** 注册 dry-run / vip / trace / help 通用选项 */
function appendVipCommanderCommonOptions(command: VipCommander, options: VipCommanderOptions): VipCommander {
  if (options.dryRun) {
    command.option('--dry-run', '试运行，不修改文件或执行副作用', false)
  }

  if (options.vip) {
    command.option('--vip', '@142vip 组织项目专用能力', false)
  }

  if (options.trace) {
    command.option('--trace', '开启 CLI 执行日志，便于复现与排查', false)
  }

  if (options.help) {
    command.helpOption('-h, --help', '显示帮助信息')
  }

  return command
}

export type VipCommanderDetailRecord<T extends string> = Record<T, VipCommanderDetailOptions>

export interface RegisterVipCommanderCommandOptions<TArgs extends unknown[] = unknown[]> {
  /** 注册业务参数（仅 `.option` / `.argument`，不含 action） */
  registerBusinessOptions: (command: VipCommander) => void
  action: (...args: TArgs) => void | Promise<void>
}

/**
 * 终端交互（基础类）
 * 参考：https://www.npmjs.com/package/commander
 */
export class VipCommander extends CommanderRoot {
  /** 构造时传入的 npm 版本，由 `registerCliVersionBanner` 注册 `-v` */
  protected readonly vipCliVersion: string

  constructor(name: string, version: string, description?: string) {
    super(name)
    this.vipCliVersion = version
    this.helpCommand(false)

    if (description != null) {
      this.description(description)
    }

    this.hook('preAction', (thisCommand, actionCommand) => {
      const activeCommand = (actionCommand ?? thisCommand) as VipCommander
      applyVipCommanderTraceFromCommand(activeCommand)
    })
  }

  public init(
    options: Pick<VipCommanderDetailOptions, 'summary' | 'description'>,
  ): VipCommander {
    return this.summary(options.summary)
      .description(options.description) as VipCommander
  }

  public initCommand(options: VipCommanderDetailOptions): VipCommander {
    return this.command(options.command)
      .aliases(options.aliases)
      .summary(options.summary)
      .description(options.description) as VipCommander
  }

  public override async parseAsync(
    argv?: readonly string[],
    parseOptions?: { from: 'node' | 'user' },
  ): Promise<this> {
    setVipConsoleTraceEnabled(false)
    return super.parseAsync(argv, parseOptions)
  }
}

/**
 * packages 目录 CLI 统一基类（fairy-cli / changelog / releasex / agent-skills）
 * 继承 `VipCommander`，封装子命令与 standalone 的标准注册顺序。
 */
export class VipPackageCliCommander extends VipCommander {
  /** 按配置注册 dry-run / vip / trace / help */
  private appendCommonOptions(command: VipCommander, options: VipCommanderOptions): VipCommander {
    return appendVipCommanderCommonOptions(command, options)
  }

  /** 根程序 `fa -h`：trace + help + version */
  public registerRootOptions(): this {
    this.appendCommonOptions(this, vipCommanderRootOptions)
    return this
  }

  /**
   * 根 `-v` / `--version`：横幅输出（含首尾空行），不打印裸版本号。
   * 须在 `registerRootOptions` / `appendStandaloneOptions` 之后、解析前调用。
   */
  public registerCliVersionBanner(
    identity: VipCliIdentity,
    options?: { binAliases?: string },
  ): this {
    this.version(this.vipCliVersion, '-v, --version', '查看 CLI 版本信息')
    const root = this as CommanderRoot
    const emitter = root as unknown as EventEmitter
    emitter.removeAllListeners('option:version')
    emitter.on('option:version', () => {
      VipConsole.log(formatVipCliBanner(identity, options))
      const exitPrivate = (root as unknown as {
        _exit: (exitCode: number, code: string, message: string) => void
      })._exit
      exitPrivate.call(root, 0, 'commander.version', identity.version)
    })
    return this
  }

  /** 子命令通用 Options（dry-run / vip / trace / help） */
  public appendSubcommandOptions(
    command: VipCommander,
    options: VipCommanderOptions = vipCommanderSubcommandOptions,
  ): VipCommander {
    return this.appendCommonOptions(command, options)
  }

  /** standalone bin 通用 Options（与默认项一致） */
  public appendStandaloneOptions(command: VipCommander): VipCommander {
    return this.appendCommonOptions(command, vipCommanderDefaultOptions)
  }

  /**
   * fairy-cli 子命令：initCommand → 业务参数 → dry-run / vip / trace → action
   */
  public registerSubcommand<TArgs extends unknown[]>(
    detail: VipCommanderDetailOptions,
    options: RegisterVipCommanderCommandOptions<TArgs>,
    commanderOptions: VipCommanderOptions = vipCommanderSubcommandOptions,
  ): VipCommander {
    const command = this.initCommand(detail)
    options.registerBusinessOptions(command)
    this.appendSubcommandOptions(command, commanderOptions)
    command.action(options.action)
    return command
  }

  /**
   * 独立 bin：init → 业务参数 → dry-run / vip / trace → action
   */
  public registerStandalone<TArgs extends unknown[]>(
    detail: Pick<VipCommanderDetailOptions, 'summary' | 'description'>,
    options: RegisterVipCommanderCommandOptions<TArgs>,
  ): VipCommander {
    const command = this.init(detail)
    options.registerBusinessOptions(command)
    this.appendStandaloneOptions(command)
    command.action(options.action)
    return command
  }

  /** 独立 bin 入口：注册后 `parse` */
  public bootstrapStandalone<TArgs extends unknown[]>(
    detail: Pick<VipCommanderDetailOptions, 'summary' | 'description'>,
    options: RegisterVipCommanderCommandOptions<TArgs>,
    argv: readonly string[],
  ): void {
    this.registerStandalone(detail, options)
    this.parse(argv)
  }
}

/** commander `exitOverride` 回调中的错误码（与底层 commander 一致） */
export const VIP_COMMANDER_EXIT_UNKNOWN_COMMAND = 'commander.unknownCommand'
export const VIP_COMMANDER_EXIT_EXCESS_ARGUMENTS = 'commander.excessArguments'
/** `program.help()` / 根 `-h` 展示帮助后的正常退出 */
export const VIP_COMMANDER_EXIT_HELP = 'commander.help'
export const VIP_COMMANDER_EXIT_HELP_DISPLAYED = 'commander.helpDisplayed'
/** 根 `-v` / `--version` 展示版本后的正常退出 */
export const VIP_COMMANDER_EXIT_VERSION = 'commander.version'

export interface VipCommanderExitError {
  code: string
  message: string
  exitCode: number
}

/** 判断是否为 VipCommander / commander 解析阶段抛出的可处理错误 */
export function isVipCommanderExitError(error: unknown): error is VipCommanderExitError {
  if (error == null || typeof error !== 'object') {
    return false
  }
  const record = error as Record<string, unknown>
  return typeof record.code === 'string' && typeof record.message === 'string'
}

/**
 * 为命令树注册 `exitOverride`，并屏蔽默认 `error:` stderr（由 `onError` 统一输出）。
 */
export function registerVipCommanderExitOverrideTree(
  root: VipCommander,
  onError: (error: VipCommanderExitError) => void,
): void {
  const attach = (command: VipCommander): void => {
    command.configureOutput({
      writeErr: () => {},
    })
    command.exitOverride((error) => {
      if (isVipCommanderExitError(error)) {
        onError(error)
        return
      }
      throw error
    })
    for (const sub of command.commands) {
      attach(sub as VipCommander)
    }
  }
  attach(root)
}
