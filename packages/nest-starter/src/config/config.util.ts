import { VipColor, VipInquirer, vipLogger, VipNodeJS } from '@142vip/utils'
import { exitWithNestCliShutdown } from '../nest-exit.util'
import { nestProcess } from '../nest-process'

const LOG_PREFIX = `[@142vip/nest-starter]`

/**
 * config 目录约定（生产 / 开发隔离）：
 * - config.js：生产配置（生产模式必须存在）
 * - xxx.config.js：开发多环境配置（如 local.config.js、test.config.js）
 */
const CONFIG_DIR_RULES = {
  dirName: 'config',
  productionFileName: 'config.js',
  developmentFilePattern: /^(.+)\.config\.js$/,
} as const

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
  /** 生产：加载 config.js */
  Production = 'production',
  /** 开发：加载 xxx.config.js */
  Development = 'development',
}

/**
 * 配置环境标识
 * - Production 对应 config.js
 * - 其余对应同名 xxx.config.js（如 Local -> local.config.js）
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
  /** 开发环境标识，跳过交互选择（仅开发模式有效） */
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

/** 开发配置文件描述（xxx.config.js） */
interface DevelopmentConfigFile {
  devEnv: NestDevEnv
  fileName: string
  filePath: string
}

/** config 目录扫描结果 */
interface ConfigDirectoryScanResult {
  configDir: string
  /** 生产配置 config.js */
  productionFilePath?: string
  /** 开发配置 xxx.config.js */
  developmentFiles: DevelopmentConfigFile[]
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
 * 模式隔离：
 * | 模式 | 判定 | 行为 |
 * |------|------|------|
 * | 开发 | NODE_ENV=local | 交互选择 xxx.config.js（仅一个时直接使用） |
 * | 生产 | NODE_ENV !== local | 必须存在并加载 config.js |
 *
 * resolveSync：非交互兜底（优先 config.js）；业务启动请用 resolveAsync
 */
class NestConfigUtil {
  public static isResolveError(error: unknown): error is NestConfigResolveError {
    return error instanceof NestConfigResolveError
  }

  /**
   * 异步解析配置路径
   * - NestStarter.start() 使用
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

    // 开发模式：交互选择 xxx.config.js
    if (nestProcess.isLocalStartNest()) {
      return this.resolveDevelopmentConfig(scanResult)
    }

    // 生产模式：必须加载 config.js
    return this.resolveProductionConfig(scanResult)
  }

  /**
   * 同步解析配置路径
   * - 不支持交互；优先 config.js
   * - 开发场景下若无 config.js 且仅一个 xxx.config.js 则可自动选中
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
        '模块导入阶段无法自动选择配置文件',
        '请添加生产配置: config/config.js',
        '或通过 NestStarter.start()（NODE_ENV=local）交互选择 xxx.config.js',
        `当前开发配置: ${scanResult.developmentFiles.map(file => file.fileName).join(', ')}`,
      ])
    }

    return this.resolveProductionConfig(scanResult)
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
   * 开发模式：仅处理 xxx.config.js
   * - 多个文件：终端交互选择
   * - 一个文件：直接使用
   */
  private async resolveDevelopmentConfig(scanResult: ConfigDirectoryScanResult): Promise<NestConfigPath> {
    if (scanResult.developmentFiles.length === 0) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        '开发模式下未找到 xxx.config.js',
        '请创建开发配置，例如: local.config.js、test.config.js',
      ])
    }

    if (scanResult.developmentFiles.length === 1) {
      return this.buildDevelopmentConfigPath(scanResult, scanResult.developmentFiles[0]!)
    }

    if (!VipNodeJS.getProcessStdin().isTTY) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        '当前为非交互终端，无法选择开发配置',
        `可选环境: ${scanResult.developmentFiles.map(file => file.devEnv).join('、')}`,
        '请设置 devConfig 指定环境，例如: devConfig=local',
      ])
    }

    return this.promptSelectConfigFile(scanResult)
  }

  /** 终端交互选择 xxx.config.js */
  private async promptSelectConfigFile(scanResult: ConfigDirectoryScanResult): Promise<NestConfigPath> {
    const fileNameChoices = scanResult.developmentFiles.map(file => file.fileName)

    vipLogger.println()

    const selectedFileName = this.guardPromptResult(await VipInquirer.promptSelect(
      `${LOG_PREFIX} 请选择配置文件`,
      fileNameChoices,
    ))

    const matchedFile = scanResult.developmentFiles.find(file => file.fileName === selectedFileName)
    if (matchedFile == null) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `无效的配置选择: ${selectedFileName}`,
      ])
    }

    return this.buildDevelopmentConfigPath(scanResult, matchedFile)
  }

  /** VipInquirer 在 Ctrl+C 时返回 null，此处安全退出（含 nest watch 父进程） */
  private guardPromptResult<T>(value: T | undefined | null): T {
    if (value == null) {
      exitWithNestCliShutdown(0)
    }
    return value
  }

  /** 按环境名匹配 xxx.config.js（不可指定 Production，生产请用 config.js） */
  private resolveDevelopmentConfigByEnv(
    scanResult: ConfigDirectoryScanResult,
    devConfig: NestDevEnv,
  ): NestConfigPath {
    if (devConfig === NestDevEnv.Production) {
      return this.resolveProductionConfig(scanResult)
    }

    const matchedFile = scanResult.developmentFiles.find(file => file.devEnv === devConfig)
    if (matchedFile == null) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `开发配置不存在: ${devConfig}.config.js`,
        `可选配置: ${scanResult.developmentFiles.map(file => file.fileName).join(', ') || '无'}`,
      ])
    }

    return this.buildDevelopmentConfigPath(scanResult, matchedFile)
  }

  /** 生产模式：必须存在 config.js */
  private resolveProductionConfig(scanResult: ConfigDirectoryScanResult): NestConfigPath {
    if (scanResult.productionFilePath == null) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `未找到生产配置文件: ${VipNodeJS.pathJoin(scanResult.configDir, CONFIG_DIR_RULES.productionFileName)}`,
        `生产模式必须在 config 目录创建 ${CONFIG_DIR_RULES.productionFileName}`,
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

    if (isProductionFile) {
      return {
        devMode: NestDevMode.Production,
        devEnv: NestDevEnv.Production,
        configDir,
        configFilePath,
        configFileName: fileName,
      }
    }

    return {
      devMode: NestDevMode.Development,
      devEnv: this.parseDevelopmentEnv(developmentEnvMatch![1]!),
      configDir,
      configFilePath,
      configFileName: fileName,
    }
  }

  /** 从文件名前缀解析开发环境（local.config.js -> local） */
  private parseDevelopmentEnv(envName: string): NestDevEnv {
    const matchedEnv = (Object.values(NestDevEnv) as string[])
      .filter(value => value !== NestDevEnv.Production)
      .find(value => value === envName)

    if (matchedEnv == null) {
      const supportedEnvList = Object.values(NestDevEnv)
        .filter(env => env !== NestDevEnv.Production)
        .join('、')
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `不支持的开发环境: ${envName}`,
        `可选值: ${supportedEnvList}`,
        `生产配置请使用 ${CONFIG_DIR_RULES.productionFileName}`,
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

  /**
   * 扫描 config 目录
   * - config.js → 生产
   * - xxx.config.js → 开发（xxx 不可为非法环境名）
   */
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

    return { configDir, productionFilePath, developmentFiles }
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
      // watch 模式下同步通知 nest CLI，避免仅子进程退出、父进程仍挂起
      exitWithNestCliShutdown(1)
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

export const nestConfigUtil = new NestConfigUtil()
