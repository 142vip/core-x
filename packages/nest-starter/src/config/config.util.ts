import { VipColor, VipInquirer, vipLogger, VipNodeJS } from '@142vip/utils'
import { nestProcess } from '../nest-process'

const LOG_PREFIX = `[@142vip/nest-starter]`

/**
 * config 目录约定：仅允许 xxx.config.js，用于多环境区分
 * 示例：local.config.js、test.config.js、prod.config.js
 */
const CONFIG_DIR_RULES = {
  dirName: 'config',
  /** 匹配 xxx.config.js，捕获环境名 */
  filePattern: /^(.+)\.config\.js$/,
} as const

/** nest cli 子进程启动标识，watch 模式下需通知父进程退出 */
const NEST_CLI_CHILD_FLAG = '--enable-source-maps'

/** 终端配置日志级别 */
export enum NestConfigLogLevel {
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
}

const LOG_LEVEL_LABEL: Record<NestConfigLogLevel, string> = {
  [NestConfigLogLevel.Error]: '异常',
  [NestConfigLogLevel.Warning]: '警告',
  [NestConfigLogLevel.Info]: '信息',
}

/** 配置启动模式 */
export enum NestDevMode {
  Production = 'production',
  Development = 'development',
}

/**
 * 配置环境标识，对应 xxx.config.js 中的 xxx
 * 例如：Local -> local.config.js，Prod -> prod.config.js
 */
export enum NestDevEnv {
  Prod = 'prod',
  Local = 'local',
  Test = 'test',
  Dev = 'dev',
}

export interface NestConfigPathOptions {
  /** 工作目录，默认 process.cwd() */
  cwd?: string
  /** 配置目录名，默认 config */
  configDirName?: string
  /** 显式指定配置文件绝对路径 */
  absolutePath?: string
  /** 预解析结果，供 NestConfigModule.register 跳过重复解析 */
  configPath?: NestConfigPath
  /** 指定环境名，跳过交互选择 */
  devConfig?: NestDevEnv
}

/** 解析后的配置文件路径信息 */
export interface NestConfigPath {
  devMode: NestDevMode
  devEnv: NestDevEnv
  configDir: string
  configFilePath: string
  configFileName: string
}

/** xxx.config.js 文件描述 */
interface ConfigFileEntry {
  devEnv: NestDevEnv
  fileName: string
  filePath: string
}

/** config 目录扫描结果 */
interface ConfigDirectoryScanResult {
  configDir: string
  configFiles: ConfigFileEntry[]
}

/**
 * 配置解析异常
 * - 日志已在抛出前输出；运行态由 raiseConfigIssue 直接退出进程
 */
export class NestConfigResolveError extends Error {
  public readonly logLevel: NestConfigLogLevel

  constructor(logLevel: NestConfigLogLevel, message: string) {
    super(message)
    this.name = 'NestConfigResolveError'
    this.logLevel = logLevel
  }
}

/**
 * Nest 配置路径解析工具
 *
 * 加载规则：
 * - NODE_ENV=local（开发）：交互选择 xxx.config.js；仅一个文件时直接使用
 * - 非 local：按 NODE_ENV 加载对应 {env}.config.js，默认 prod.config.js
 * - resolveSync：不支持交互，优先 prod.config.js，否则唯一配置文件
 */
class NestConfigUtil {
  public static isResolveError(error: unknown): error is NestConfigResolveError {
    return error instanceof NestConfigResolveError
  }

  /**
   * 异步解析配置路径
   * - NestStarter.start() 使用，开发模式下支持交互选择
   */
  public async resolveAsync(options: NestConfigPathOptions = {}): Promise<NestConfigPath> {
    const explicit = this.resolveExplicit(options)
    if (explicit != null) {
      return explicit
    }

    const scanResult = this.scanConfigDirectory(options)

    if (options.devConfig != null) {
      return this.resolveByEnv(scanResult, options.devConfig)
    }

    // 开发模式：交互选择多环境配置
    if (nestProcess.isLocalStartNest()) {
      return this.resolveDevConfig(scanResult)
    }

    // 非开发：按 NODE_ENV 加载对应配置，默认 prod
    return this.resolveByEnv(scanResult, this.resolveEnvFromNodeEnv())
  }

  /**
   * 同步解析配置路径
   * - 供 NestAppConfigModule 模块导入使用，不支持交互
   */
  public resolveSync(options: NestConfigPathOptions = {}): NestConfigPath {
    const explicit = this.resolveExplicit(options)
    if (explicit != null) {
      return explicit
    }

    const scanResult = this.scanConfigDirectory(options)

    if (options.devConfig != null) {
      return this.resolveByEnv(scanResult, options.devConfig)
    }

    const prodFile = scanResult.configFiles.find(file => file.devEnv === NestDevEnv.Prod)
    if (prodFile != null) {
      return this.buildConfigPath(scanResult, prodFile)
    }

    if (scanResult.configFiles.length === 1) {
      return this.buildConfigPath(scanResult, scanResult.configFiles[0]!)
    }

    this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
      '存在多个配置文件，无法在模块导入阶段自动选择',
      '请通过 NestStarter.start() 启动并交互选择',
      '或传入 devConfig 指定环境，例如: devConfig=local',
      `可选配置: ${scanResult.configFiles.map(file => file.fileName).join(', ') || '无'}`,
    ])
  }

  /** 输出配置加载成功日志（仅 NestStarter.start 传入 configPath 时调用） */
  public log(configPath: NestConfigPath): void {
    const modeLabel = configPath.devMode === NestDevMode.Production ? '生产' : '开发'
    this.printTerminalLog(NestConfigLogLevel.Info, '配置加载', [
      `启动模式: ${modeLabel}`,
      `配置环境: ${configPath.devEnv}`,
      `配置文件: ${configPath.configFilePath}`,
    ])
  }

  private resolveExplicit(options: NestConfigPathOptions): NestConfigPath | null {
    if (options.configPath != null) {
      return options.configPath
    }

    if (options.absolutePath != null) {
      return this.resolveByAbsolutePath(options.absolutePath)
    }

    return null
  }

  /**
   * 开发模式配置解析
   * - 多个文件：终端交互选择
   * - 一个文件：直接使用
   * - 非 TTY：仅支持唯一文件或报错提示使用 devConfig
   */
  private async resolveDevConfig(scanResult: ConfigDirectoryScanResult): Promise<NestConfigPath> {
    if (scanResult.configFiles.length === 0) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `config 目录下未找到配置文件`,
        `请创建 xxx.config.js，例如: local.config.js、test.config.js`,
      ])
    }

    if (scanResult.configFiles.length === 1) {
      return this.buildConfigPath(scanResult, scanResult.configFiles[0]!)
    }

    if (!VipNodeJS.getProcessStdin().isTTY) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        '当前为非交互终端，无法选择配置文件',
        `可选环境: ${scanResult.configFiles.map(file => file.devEnv).join('、')}`,
        '请设置 devConfig 指定环境，例如: devConfig=local',
      ])
    }

    return this.promptSelectConfigFile(scanResult)
  }

  /** 终端交互选择 xxx.config.js */
  private async promptSelectConfigFile(scanResult: ConfigDirectoryScanResult): Promise<NestConfigPath> {
    const fileNameChoices = scanResult.configFiles.map(file => file.fileName)

    vipLogger.println()

    const selectedFileName = this.guardPromptResult(await VipInquirer.promptSelect(
      `${LOG_PREFIX} 请选择配置文件`,
      fileNameChoices,
    ))

    const matchedFile = scanResult.configFiles.find(file => file.fileName === selectedFileName)
    if (matchedFile == null) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `无效的配置选择: ${selectedFileName}`,
      ])
    }

    return this.buildConfigPath(scanResult, matchedFile)
  }

  /** VipInquirer 在 Ctrl+C 时返回 null，此处安全退出 */
  private guardPromptResult<T>(value: T | undefined | null): T {
    if (value == null) {
      exitPromptCancelled()
    }
    return value
  }

  /** 按环境名匹配 xxx.config.js */
  private resolveByEnv(scanResult: ConfigDirectoryScanResult, devEnv: NestDevEnv): NestConfigPath {
    const matchedFile = scanResult.configFiles.find(file => file.devEnv === devEnv)
    if (matchedFile == null) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `配置文件不存在: ${devEnv}.config.js`,
        `可选配置: ${scanResult.configFiles.map(file => file.fileName).join(', ') || '无'}`,
      ])
    }

    return this.buildConfigPath(scanResult, matchedFile)
  }

  /**
   * 非开发启动时，由 NODE_ENV 映射到配置环境
   * - 未设置或 production → prod（加载 prod.config.js）
   * - 其余值需与 NestDevEnv 一致（local / test / dev / prod）
   */
  private resolveEnvFromNodeEnv(): NestDevEnv {
    const nodeEnv = nestProcess.getNodeEnv()
    if (nodeEnv == null || nodeEnv === '' || nodeEnv === 'production') {
      return NestDevEnv.Prod
    }

    const matchedEnv = (Object.values(NestDevEnv) as string[]).find(value => value === nodeEnv)
    if (matchedEnv == null) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `不支持的 NODE_ENV: ${nodeEnv}`,
        `可选值: ${Object.values(NestDevEnv).join('、')}（production 等同于 prod）`,
        `将加载对应的 {env}.config.js`,
      ])
    }

    return matchedEnv as NestDevEnv
  }

  private buildConfigPath(
    scanResult: ConfigDirectoryScanResult,
    configFile: ConfigFileEntry,
  ): NestConfigPath {
    return {
      devMode: configFile.devEnv === NestDevEnv.Prod
        ? NestDevMode.Production
        : NestDevMode.Development,
      devEnv: configFile.devEnv,
      configDir: scanResult.configDir,
      configFilePath: configFile.filePath,
      configFileName: configFile.fileName,
    }
  }

  private resolveByAbsolutePath(absolutePath: string): NestConfigPath {
    const configFilePath = VipNodeJS.pathResolve(absolutePath)
    if (!VipNodeJS.existPath(configFilePath)) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `配置文件不存在: ${configFilePath}`,
      ])
    }

    const configDir = VipNodeJS.pathDirname(configFilePath)
    const fileName = configFilePath.split(/[/\\]/).pop()!
    const envMatch = fileName.match(CONFIG_DIR_RULES.filePattern)

    if (envMatch == null) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `非法配置文件: ${fileName}`,
        `仅允许 xxx.config.js，例如: local.config.js、prod.config.js`,
      ])
    }

    const configFile: ConfigFileEntry = {
      devEnv: this.parseConfigEnv(envMatch[1]!),
      fileName,
      filePath: configFilePath,
    }

    return this.buildConfigPath({ configDir, configFiles: [configFile] }, configFile)
  }

  /** 从文件名前缀解析环境标识（local.config.js -> local） */
  private parseConfigEnv(envName: string): NestDevEnv {
    const matchedEnv = (Object.values(NestDevEnv) as string[]).find(value => value === envName)
    if (matchedEnv == null) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `不支持的配置环境: ${envName}`,
        `可选值: ${Object.values(NestDevEnv).join('、')}`,
      ])
    }
    return matchedEnv as NestDevEnv
  }

  private resolveConfigDirectory(options: NestConfigPathOptions): string {
    const cwd = options.cwd ?? VipNodeJS.getProcessCwd()
    const configDirName = options.configDirName ?? CONFIG_DIR_RULES.dirName
    const configDirPath = VipNodeJS.pathResolve(cwd, configDirName)

    if (!VipNodeJS.isExistDir(configDirName, cwd)) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `未找到配置目录: ${configDirPath}`,
        `请创建 ${configDirName} 目录，并添加 xxx.config.js`,
        `示例: ${configDirName}/local.config.js、${configDirName}/prod.config.js`,
      ])
    }

    return configDirPath
  }

  /** 扫描 config 目录，仅允许 xxx.config.js */
  private scanConfigDirectory(options: NestConfigPathOptions): ConfigDirectoryScanResult {
    const configDir = this.resolveConfigDirectory(options)
    const configFiles: ConfigFileEntry[] = []
    const invalidFileNames: string[] = []

    for (const fileName of VipNodeJS.readdirSync(configDir).sort()) {
      const envMatch = fileName.match(CONFIG_DIR_RULES.filePattern)
      if (envMatch != null) {
        configFiles.push({
          devEnv: this.parseConfigEnv(envMatch[1]!),
          fileName,
          filePath: VipNodeJS.pathJoin(configDir, fileName),
        })
        continue
      }

      invalidFileNames.push(fileName)
    }

    if (invalidFileNames.length > 0) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `config 目录存在非法文件: ${invalidFileNames.join(', ')}`,
        `仅允许 xxx.config.js`,
        `示例: local.config.js、test.config.js、prod.config.js`,
      ])
    }

    return { configDir, configFiles }
  }

  private printTerminalLog(logLevel: NestConfigLogLevel, title: string, details: string[]): void {
    const message = buildLogMessage(
      `${LOG_PREFIX} [${LOG_LEVEL_LABEL[logLevel]}] ${title}`,
      details,
    )

    vipLogger.println()
    if (logLevel === NestConfigLogLevel.Error) {
      vipLogger.error(message)
    }
    else if (logLevel === NestConfigLogLevel.Warning) {
      vipLogger.log(`${VipColor.yellow(message)}`)
    }
    else {
      vipLogger.log(message)
    }
    vipLogger.println()
  }

  /**
   * 记录配置问题并终止流程
   * - Error：终端输出后直接 exit(1)，不打印堆栈
   * - 测试环境（JEST_WORKER_ID）保留抛错，供单元测试断言
   */
  private raiseConfigIssue(logLevel: NestConfigLogLevel, title: string, details: string[]): never {
    this.printTerminalLog(logLevel, title, details)

    if (logLevel === NestConfigLogLevel.Error && VipNodeJS.getProcessEnv('JEST_WORKER_ID') == null) {
      VipNodeJS.exitProcess(1)
    }

    const error = new NestConfigResolveError(
      logLevel,
      buildLogMessage(`${LOG_PREFIX} [${LOG_LEVEL_LABEL[logLevel]}] ${title}`, details),
    )
    error.stack = undefined
    throw error
  }
}

function buildLogMessage(title: string, details: string[]): string {
  return [title, ...details.map(detail => `  ${detail}`)].join('\n')
}

/**
 * 配置选择 Ctrl+C 取消后安全退出
 * - VipInquirer 已输出友好提示，此处处理 nest watch 父子进程退出
 */
function exitPromptCancelled(): never {
  const stdin = VipNodeJS.getProcessStdin()
  if (stdin.isTTY && typeof stdin.setRawMode === 'function') {
    const ttyStdin = stdin as NodeJS.ReadStream & { isRaw?: boolean }
    if (ttyStdin.isRaw) {
      try {
        stdin.setRawMode(false)
      }
      catch {
        // stdin 可能已关闭
      }
    }
  }

  if (VipNodeJS.getProcessArgv().includes(NEST_CLI_CHILD_FLAG)) {
    const parentPid = VipNodeJS.getProcess().ppid
    if (parentPid > 1) {
      try {
        VipNodeJS.getProcess().kill(parentPid, 'SIGINT')
      }
      catch {
        // 父进程可能已退出
      }
    }
  }

  VipNodeJS.exitProcess(0)
  return undefined as never
}

export const nestConfigUtil = new NestConfigUtil()
