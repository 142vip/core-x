import { Command as CommanderRoot } from 'commander'

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

let vipConsoleTraceEnabled = false

/** 由 `VipCommander` 在解析 `--trace` 后调用 */
export function setVipConsoleTraceEnabled(enabled: boolean): void {
  vipConsoleTraceEnabled = enabled
}

/** 当前是否处于 CLI 追踪模式（`--trace`） */
export function isVipConsoleTraceEnabled(): boolean {
  return vipConsoleTraceEnabled
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
  constructor(name: string, version: string, description?: string) {
    super(name)
    this.helpCommand(false)
    this.version(version, '-v, --version', '查看 CLI 版本信息')

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

  public override async parseAsync(argv?: readonly string[]): Promise<this> {
    setVipConsoleTraceEnabled(false)
    return super.parseAsync(argv)
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
