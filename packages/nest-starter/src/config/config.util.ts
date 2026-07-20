import { VipColor, VipInquirer, vipLogger, VipNodeJS } from '@142vip/utils'
import { nestProcess } from '../nest-process'

const LOG_PREFIX = `[@142vip/nest-starter]`

/**
 * config 目录文件约定：
 * - config.js：生产环境配置
 * - xxx.config.js：开发环境配置（如 local.config.js、test.config.js）
 */
const CONFIG_DIR_RULES = {
  dirName: 'config',
  productionFileName: 'config.js',
  developmentFilePattern: /^(.+)\.config\.js$/,
} as const

/** 单配置文件场景下，引导用户拆分多环境配置 */
const MULTI_ENV_CONFIG_HINT = [
  '多环境配置建议:',
  `  生产环境: ${CONFIG_DIR_RULES.productionFileName}`,
  '  开发环境: local.config.js、test.config.js 等',
]

/** nest cli 子进程启动标识，watch 模式下需通知父进程退出 */
const NEST_CLI_CHILD_FLAG = '--enable-source-maps'

/** 终端配置日志级别 */
export enum NestConfigLogLevel {
  /** 无法继续启动 */
  Error = 'error',
  /** 提示性信息 */
  Warning = 'warning',
  /** 正常信息 */
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
 * 配置环境标识
 * - Production 对应 config.js
 * - 其余值对应同名 xxx.config.js（如 Local -> local.config.js）
 */
export enum NestDevEnv {
  Production = 'production',
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
  /** 开发环境标识，跳过交互选择 */
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

/** 开发配置文件描述 */
interface DevelopmentConfigFile {
  devEnv: NestDevEnv
  fileName: string
  filePath: string
}

/** config 目录扫描结果 */
interface ConfigDirectoryScanResult {
  configDir: string
  productionFilePath?: string
  developmentFiles: DevelopmentConfigFile[]
  invalidFileNames: string[]
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
 * 加载规则概览：
 * | 场景 | 方法 | 行为 |
 * |------|------|------|
 * | 生产启动（NODE_ENV !== local） | resolveAsync | 直接加载 config.js |
 * | 本地开发 + 交互终端 | resolveAsync | 单文件确认 / 多文件选择 |
 * | 本地开发 + 非交互终端 | resolveAsync | 优先 config.js，否则自动选唯一开发配置 |
 * | 模块导入阶段 | resolveSync | 不支持交互，优先 config.js |
 */
class NestConfigUtil {
  /** 判断是否为配置解析异常（日志已输出，无需再次打印堆栈） */
  public static isResolveError(error: unknown): error is NestConfigResolveError {
    return error instanceof NestConfigResolveError
  }

  /**
   * 异步解析配置路径
   * - NestStarter.start() 调用，支持 local 环境下终端交互
   */
  public async resolveAsync(options: NestConfigPathOptions = {}): Promise<NestConfigPath> {
    const explicit = this.resolveExplicit(options)
    if (explicit != null) {
      return explicit
    }

    const scanResult = this.scanConfigDirectory(options)

    if (options.devConfig != null) {
      return this.resolveDevelopmentConfigByEnv(scanResult, options.devConfig)
    }

    // 生产路径：nest start / 部署环境，不弹交互
    if (!nestProcess.isLocalStartNest()) {
      return this.resolveProductionConfig(scanResult)
    }

    return this.resolveLocalDevConfig(scanResult)
  }

  /**
   * 同步解析配置路径
   * - 供 NestAppConfigModule 模块导入阶段使用，无法做终端交互
   * - 存在 config.js 时优先使用；仅一个开发配置时可自动选中
   */
  public resolveSync(options: NestConfigPathOptions = {}): NestConfigPath {
    const explicit = this.resolveExplicit(options)
    if (explicit != null) {
      return explicit
    }

    const scanResult = this.scanConfigDirectory(options)

    if (options.devConfig != null) {
      return this.resolveDevelopmentConfigByEnv(scanResult, options.devConfig)
    }

    if (scanResult.productionFilePath != null) {
      return this.resolveProductionConfig(scanResult)
    }

    if (scanResult.developmentFiles.length === 1) {
      return this.buildDevelopmentConfigPath(scanResult, scanResult.developmentFiles[0]!)
    }

    if (scanResult.developmentFiles.length > 0) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        '存在多个开发配置文件，请通过 NestStarter.start() 启动选择',
        '或传入 devConfig 指定配置名，例如: devConfig=local',
      ])
    }

    return this.resolveProductionConfig(scanResult)
  }

  /** 输出配置加载成功日志（仅 NestStarter.start 传入 configPath 时调用） */
  public log(configPath: NestConfigPath): void {
    const devModeLabel = configPath.devMode === NestDevMode.Production ? '生产' : '开发'
    this.printTerminalLog(NestConfigLogLevel.Info, '配置加载', [
      `启动模式: ${devModeLabel}`,
      `配置文件: ${configPath.configFilePath}`,
    ])
  }

  /** 解析显式指定的配置路径（configPath / absolutePath） */
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
   * local 开发启动入口
   * - 0 个文件：走生产配置校验（提示创建 config.js）
   * - 1 个文件：确认启动并提示多环境配置
   * - 多个文件：交互选择
   */
  private async resolveLocalDevConfig(scanResult: ConfigDirectoryScanResult): Promise<NestConfigPath> {
    const fileCount = countConfigFiles(scanResult)

    if (fileCount === 0) {
      return this.resolveProductionConfig(scanResult)
    }

    if (!VipNodeJS.getProcessStdin().isTTY) {
      return this.resolveLocalDevConfigNonInteractive(scanResult)
    }

    if (fileCount === 1) {
      return this.promptConfirmSingleConfig(scanResult)
    }

    return this.promptSelectConfigFile(scanResult)
  }

  /** 非交互终端（CI / 管道）下的 local 配置解析 */
  private resolveLocalDevConfigNonInteractive(scanResult: ConfigDirectoryScanResult): NestConfigPath {
    if (scanResult.productionFilePath != null) {
      return this.resolveProductionConfig(scanResult)
    }

    if (scanResult.developmentFiles.length === 1) {
      return this.buildDevelopmentConfigPath(scanResult, scanResult.developmentFiles[0]!)
    }

    this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
      '当前为非交互终端，无法选择开发配置',
      `可选环境: ${scanResult.developmentFiles.map(file => file.devEnv).join('、')}`,
      '请设置 devConfig 指定配置名，例如: devConfig=local',
    ])
  }

  /** 仅一个配置文件时，确认启动并提示多环境配置拆分 */
  private async promptConfirmSingleConfig(scanResult: ConfigDirectoryScanResult): Promise<NestConfigPath> {
    const configPath = this.resolveSingleAvailableConfig(scanResult)

    vipLogger.println()
    this.printTerminalLog(NestConfigLogLevel.Warning, '配置提示', [
      `当前仅发现配置文件: ${configPath.configFileName}`,
      ...MULTI_ENV_CONFIG_HINT,
    ])

    const confirmed = this.guardPromptResult(await VipInquirer.promptConfirm(
      `${LOG_PREFIX} 是否使用 ${configPath.configFileName} 启动？`,
      true,
    ))

    if (!confirmed) {
      VipNodeJS.existSuccessProcess()
    }

    return configPath
  }

  /** 多个配置文件时，终端交互选择 */
  private async promptSelectConfigFile(scanResult: ConfigDirectoryScanResult): Promise<NestConfigPath> {
    const fileNameChoices = [
      ...(scanResult.productionFilePath == null ? [] : [CONFIG_DIR_RULES.productionFileName]),
      ...scanResult.developmentFiles.map(file => file.fileName),
    ]

    vipLogger.println()

    const selectedFileName = this.guardPromptResult(await VipInquirer.promptSelect(
      `${LOG_PREFIX} 请选择配置文件`,
      fileNameChoices,
    ))

    if (selectedFileName === CONFIG_DIR_RULES.productionFileName) {
      return this.resolveProductionConfig(scanResult)
    }

    const matchedFile = scanResult.developmentFiles.find(file => file.fileName === selectedFileName)
    if (matchedFile == null) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `无效的配置选择: ${selectedFileName}`,
      ])
    }

    return this.buildDevelopmentConfigPath(scanResult, matchedFile)
  }

  /**
   * VipInquirer 在 Ctrl+C 时已输出友好提示并返回 null
   * - 此处负责 nest watch 场景下的进程退出
   */
  private guardPromptResult<T>(value: T | undefined | null): T {
    if (value == null) {
      exitPromptCancelled()
    }
    return value
  }

  /** 目录中仅有一个配置文件时的解析结果 */
  private resolveSingleAvailableConfig(scanResult: ConfigDirectoryScanResult): NestConfigPath {
    if (scanResult.productionFilePath != null) {
      return this.resolveProductionConfig(scanResult)
    }

    return this.buildDevelopmentConfigPath(scanResult, scanResult.developmentFiles[0]!)
  }

  /** 按 devConfig 环境名匹配 xxx.config.js */
  private resolveDevelopmentConfigByEnv(
    scanResult: ConfigDirectoryScanResult,
    devConfig: NestDevEnv,
  ): NestConfigPath {
    const matchedFile = scanResult.developmentFiles.find(file => file.devEnv === devConfig)
    if (matchedFile == null) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `开发配置不存在: ${devConfig}.config.js`,
        `可选配置: ${scanResult.developmentFiles.map(file => file.fileName).join(', ') || '无'}`,
      ])
    }

    return this.buildDevelopmentConfigPath(scanResult, matchedFile)
  }

  /** 解析生产配置 config.js，不存在时终止启动 */
  private resolveProductionConfig(scanResult: ConfigDirectoryScanResult): NestConfigPath {
    if (scanResult.productionFilePath == null) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `未找到生产配置文件: ${VipNodeJS.pathJoin(scanResult.configDir, CONFIG_DIR_RULES.productionFileName)}`,
        `请在 config 目录创建 ${CONFIG_DIR_RULES.productionFileName}`,
      ])
    }

    return {
      devMode: NestDevMode.Production,
      devEnv: NestDevEnv.Production,
      configDir: scanResult.configDir,
      configFilePath: scanResult.productionFilePath,
      configFileName: CONFIG_DIR_RULES.productionFileName,
    }
  }

  private buildDevelopmentConfigPath(
    scanResult: ConfigDirectoryScanResult,
    configFile: DevelopmentConfigFile,
  ): NestConfigPath {
    return {
      devMode: NestDevMode.Development,
      devEnv: configFile.devEnv,
      configDir: scanResult.configDir,
      configFilePath: configFile.filePath,
      configFileName: configFile.fileName,
    }
  }

  /** 校验并解析用户显式传入的绝对路径 */
  private resolveByAbsolutePath(absolutePath: string): NestConfigPath {
    const configFilePath = VipNodeJS.pathResolve(absolutePath)
    if (!VipNodeJS.existPath(configFilePath)) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `配置文件不存在: ${configFilePath}`,
      ])
    }

    const configDir = VipNodeJS.pathDirname(configFilePath)
    const fileName = configFilePath.split(/[/\\]/).pop()!
    const isProductionFile = fileName === CONFIG_DIR_RULES.productionFileName
    const developmentEnvMatch = fileName.match(CONFIG_DIR_RULES.developmentFilePattern)

    if (!isProductionFile && developmentEnvMatch == null) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `非法配置文件: ${fileName}`,
        `仅允许 ${CONFIG_DIR_RULES.productionFileName} 与 xxx.config.js`,
      ])
    }

    return {
      devMode: isProductionFile ? NestDevMode.Production : NestDevMode.Development,
      devEnv: isProductionFile
        ? NestDevEnv.Production
        : this.parseDevelopmentEnv(developmentEnvMatch![1]!),
      configDir,
      configFilePath,
      configFileName: fileName,
    }
  }

  /** 从文件名前缀解析开发环境标识（如 local.config.js -> local） */
  private parseDevelopmentEnv(envName: string): NestDevEnv {
    const matchedEnv = (Object.values(NestDevEnv) as string[]).find(value => value === envName)
    if (matchedEnv == null) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `不支持的开发环境: ${envName}`,
        `可选值: ${Object.values(NestDevEnv).filter(env => env !== NestDevEnv.Production).join('、')}`,
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
        `请创建 ${configDirName} 目录`,
        `生产配置: ${configDirName}/${CONFIG_DIR_RULES.productionFileName}`,
        `开发配置: ${configDirName}/local.config.js、test.config.js 等`,
      ])
    }

    return configDirPath
  }

  /** 扫描 config 目录，校验文件命名约定 */
  private scanConfigDirectory(options: NestConfigPathOptions): ConfigDirectoryScanResult {
    const configDir = this.resolveConfigDirectory(options)
    const developmentFiles: DevelopmentConfigFile[] = []
    const invalidFileNames: string[] = []
    let productionFilePath: string | undefined

    for (const fileName of VipNodeJS.readdirSync(configDir).sort()) {
      if (fileName === CONFIG_DIR_RULES.productionFileName) {
        productionFilePath = VipNodeJS.pathJoin(configDir, fileName)
        continue
      }

      const developmentEnvMatch = fileName.match(CONFIG_DIR_RULES.developmentFilePattern)
      if (developmentEnvMatch != null) {
        developmentFiles.push({
          devEnv: this.parseDevelopmentEnv(developmentEnvMatch[1]!),
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
        `仅允许 ${CONFIG_DIR_RULES.productionFileName} 与 xxx.config.js`,
        `示例: config.js、local.config.js、test.config.js`,
      ])
    }

    return { configDir, productionFilePath, developmentFiles, invalidFileNames }
  }

  /** 输出分级终端日志，避免直接抛出未格式化的 Error 堆栈 */
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

/** 统计 config 目录中合法配置文件数量 */
function countConfigFiles(scanResult: ConfigDirectoryScanResult): number {
  return (scanResult.productionFilePath != null ? 1 : 0) + scanResult.developmentFiles.length
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
