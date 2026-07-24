import { mkdirSync, unlinkSync } from 'node:fs'
import { VipColor, VipInquirer, vipLogger, VipNodeJS } from '@142vip/utils'
import {
  exitWithNestCliShutdown,
  getNestCliAncestorPid,
  isNestCliSpawnedChild,
} from '../nest-exit.util'
import { nestProcess } from '../nest-process'

const LOG_PREFIX = `[@142vip/nest-starter]`

/** 开发配置选择缓存（运行时目录，勿放 dist：nest watch 会清空 dist） */
const DEV_CONFIG_CACHE_RELATIVE = 'node_modules/.cache/@142vip/nest-starter/dev-config'
const LEGACY_DEV_CONFIG_FILE = '.nest-starter-dev-config'

let devConfigCacheCleanupArmed = false

/**
 * config 目录约定（生产 / 开发隔离）：
 * - config.js：生产配置（生产模式必须存在）
 * - xxx.config.js：开发配置（任意环境名，如 local、staging、uat）
 */
const CONFIG_DIR_RULES = {
  dirName: 'config',
  /** 生产配置文件名 */
  productionFileName: 'config.js',
  /** 生产环境标识（对应 config.js；不可作为 xxx.config.js 的 xxx） */
  productionEnv: 'production',
  /** 匹配 xxx.config.js，捕获环境名 */
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

/** 配置启动模式：生产加载 config.js；开发加载 xxx.config.js */
export enum NestDevMode {
  Production = 'production',
  Development = 'development',
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
  /**
   * 指定开发配置环境名，跳过交互
   * - 对应文件：`{devConfig}.config.js`
   * - 示例：`local` → local.config.js，`staging` → staging.config.js
   */
  devConfig?: string
}

/** 解析后的配置文件路径信息 */
export interface NestConfigPath {
  /** 启动模式 */
  devMode: NestDevMode
  /** 环境名：生产为 production；开发为文件名前缀（如 local、staging） */
  devEnv: string
  configDir: string
  configFilePath: string
  configFileName: string
}

/** 开发配置文件描述（xxx.config.js） */
interface DevelopmentConfigFile {
  devEnv: string
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
 * 开发模式跳过交互优先级：
 * 1. options.devConfig / RUN_ENV / DEV_CONFIG / NEST_DEV_CONFIG
 * 2. 运行时缓存 node_modules/.cache/@142vip/nest-starter/dev-config（同 nest watch 会话内热重载复用）
 * 3. 仅一个 xxx.config.js
 * 4. 终端交互选择（并写入缓存）
 *
 * resolveSync：非交互兜底（优先 config.js）；业务启动请用 resolveAsync
 */
class NestConfigUtil {
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

    // 开发模式：环境变量 / 缓存 / 交互选择 xxx.config.js
    if (nestProcess.isLocalStartNest()) {
      const envDevConfig = this.resolveDevConfigFromEnv()
      if (envDevConfig != null) {
        return this.resolveDevelopmentConfigByEnv(scanResult, envDevConfig)
      }
      return this.resolveDevelopmentConfig(scanResult, options)
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
   * 从环境变量读取开发配置环境名（跨 nest watch 子进程继承）
   * - RUN_ENV / DEV_CONFIG / NEST_DEV_CONFIG
   */
  private resolveDevConfigFromEnv(): string | undefined {
    const envDevConfig = nestProcess.getRunEnv()
      ?? nestProcess.getEnv('DEV_CONFIG')
      ?? nestProcess.getEnv('NEST_DEV_CONFIG')

    if (envDevConfig == null) {
      return undefined
    }

    const trimmed = envDevConfig.trim()
    return trimmed.length > 0 ? trimmed : undefined
  }

  /**
   * 开发模式：仅处理 xxx.config.js
   * - 多个文件：优先复用上次选择缓存，否则终端交互
   * - 一个文件：直接使用
   */
  private async resolveDevelopmentConfig(
    scanResult: ConfigDirectoryScanResult,
    options: NestConfigPathOptions,
  ): Promise<NestConfigPath> {
    if (scanResult.developmentFiles.length === 0) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        '开发模式下未找到 xxx.config.js',
        '请创建开发配置，例如: local.config.js、staging.config.js',
      ])
    }

    if (scanResult.developmentFiles.length === 1) {
      const only = this.buildDevelopmentConfigPath(scanResult, scanResult.developmentFiles[0]!)
      this.persistLastDevConfig(scanResult, options, only.devEnv)
      return only
    }

    const cachedPath = this.resolveDevelopmentConfigFromCache(scanResult, options)
    if (cachedPath != null) {
      return cachedPath
    }

    if (!VipNodeJS.getProcessStdin().isTTY) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        '当前为非交互终端，无法选择开发配置',
        `可选环境: ${scanResult.developmentFiles.map(file => file.devEnv).join('、')}`,
        '请设置 RUN_ENV 或 DEV_CONFIG 指定环境，例如: RUN_ENV=local',
      ])
    }

    return this.promptSelectConfigFile(scanResult, options)
  }

  /** 读取上次交互选择；文件仍存在则复用（nest watch 热重载不再弹选择） */
  private resolveDevelopmentConfigFromCache(
    scanResult: ConfigDirectoryScanResult,
    options: NestConfigPathOptions,
  ): NestConfigPath | null {
    const cachedEnv = this.readLastDevConfig(scanResult, options)
    if (cachedEnv == null) {
      return null
    }

    const matchedFile = scanResult.developmentFiles.find(file => file.devEnv === cachedEnv)
    if (matchedFile == null) {
      return null
    }

    this.printTerminalLog(NestConfigLogLevel.Info, '配置复用', [
      `沿用上次选择: ${matchedFile.fileName}`,
      '热重载无需重新选择；重新选择可设置 RUN_ENV 或重启 dev 后重选',
    ])

    return this.buildDevelopmentConfigPath(scanResult, matchedFile)
  }

  /** 终端交互选择 xxx.config.js，并写入缓存供热重载复用 */
  private async promptSelectConfigFile(
    scanResult: ConfigDirectoryScanResult,
    options: NestConfigPathOptions,
  ): Promise<NestConfigPath> {
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

    this.persistLastDevConfig(scanResult, options, matchedFile.devEnv)
    return this.buildDevelopmentConfigPath(scanResult, matchedFile)
  }

  private readLastDevConfig(
    scanResult: ConfigDirectoryScanResult,
    options: NestConfigPathOptions,
  ): string | null {
    const cwd = options.cwd ?? VipNodeJS.getProcessCwd()
    const cachePath = VipNodeJS.pathJoin(cwd, DEV_CONFIG_CACHE_RELATIVE)

    if (VipNodeJS.existPath(cachePath)) {
      try {
        const raw = VipNodeJS.readFileToStrByUTF8(cachePath).trim()
        if (raw.length > 0) {
          let devEnv: string | null = null
          try {
            const parsed = JSON.parse(raw) as { devEnv?: string, nestCliPid?: number }
            if (typeof parsed.devEnv === 'string' && parsed.devEnv.trim().length > 0) {
              if (parsed.nestCliPid != null) {
                const currentPid = getNestCliAncestorPid()
                if (currentPid != null && currentPid === parsed.nestCliPid) {
                  devEnv = parsed.devEnv.trim().toLowerCase()
                }
              }
              else {
                devEnv = parsed.devEnv.trim().toLowerCase()
              }
            }
          }
          catch {
            const plain = raw.trim().toLowerCase()
            devEnv = plain.length > 0 ? plain : null
          }

          if (devEnv != null) {
            return devEnv
          }
        }
      }
      catch {
        // 继续尝试旧版缓存
      }
      this.clearLastDevConfig(cwd)
    }

    for (const legacyPath of [
      VipNodeJS.pathJoin(scanResult.configDir, LEGACY_DEV_CONFIG_FILE),
      VipNodeJS.pathJoin(cwd, LEGACY_DEV_CONFIG_FILE),
    ]) {
      if (!VipNodeJS.existPath(legacyPath)) {
        continue
      }

      try {
        const content = VipNodeJS.readFileToStrByUTF8(legacyPath).trim().toLowerCase()
        if (content.length > 0) {
          this.persistLastDevConfig(scanResult, options, content)
          try {
            unlinkSync(legacyPath)
          }
          catch { /* ignore */ }
          return content
        }
      }
      catch {
        // 继续尝试下一路径
      }
    }

    return null
  }

  private persistLastDevConfig(
    _scanResult: ConfigDirectoryScanResult,
    options: NestConfigPathOptions,
    devEnv: string,
  ): void {
    const cwd = options.cwd ?? VipNodeJS.getProcessCwd()
    const cachePath = VipNodeJS.pathJoin(cwd, DEV_CONFIG_CACHE_RELATIVE)
    const nestCliPid = isNestCliSpawnedChild() ? getNestCliAncestorPid() : undefined
    const payload = nestCliPid != null ? { devEnv, nestCliPid } : { devEnv }

    try {
      mkdirSync(VipNodeJS.pathDirname(cachePath), { recursive: true })
      VipNodeJS.writeFileByUTF8(cachePath, `${JSON.stringify(payload)}\n`)
    }
    catch {
      // 缓存写入失败不影响启动
    }

    if (!devConfigCacheCleanupArmed && isNestCliSpawnedChild()) {
      devConfigCacheCleanupArmed = true
      VipNodeJS.getProcess().once('SIGINT', () => {
        this.clearLastDevConfig(cwd)
      })
    }
  }

  private clearLastDevConfig(cwd?: string): void {
    const cachePath = VipNodeJS.pathJoin(cwd ?? VipNodeJS.getProcessCwd(), DEV_CONFIG_CACHE_RELATIVE)
    if (!VipNodeJS.existPath(cachePath)) {
      return
    }

    try {
      unlinkSync(cachePath)
    }
    catch {
      // 忽略清理失败
    }
  }

  /** VipInquirer 在 Ctrl+C 时返回 null，此处安全退出（含 nest watch 父进程） */
  private guardPromptResult<T>(value: T | undefined | null): T {
    if (value == null) {
      this.clearLastDevConfig()
      exitWithNestCliShutdown(0)
    }
    return value
  }

  /** 按环境名匹配 xxx.config.js（不可传 production，生产请用 config.js） */
  private resolveDevelopmentConfigByEnv(
    scanResult: ConfigDirectoryScanResult,
    devConfig: string,
  ): NestConfigPath {
    if (devConfig.trim().toLowerCase() === CONFIG_DIR_RULES.productionEnv) {
      return this.resolveProductionConfig(scanResult)
    }

    const normalizedDevConfig = this.normalizeDevelopmentEnv(devConfig)
    const matchedFile = scanResult.developmentFiles.find(file => file.devEnv === normalizedDevConfig)
    if (matchedFile == null) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `开发配置不存在: ${normalizedDevConfig}.config.js`,
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
      devEnv: CONFIG_DIR_RULES.productionEnv,
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
        devEnv: CONFIG_DIR_RULES.productionEnv,
        configDir,
        configFilePath,
        configFileName: fileName,
      }
    }

    return {
      devMode: NestDevMode.Development,
      devEnv: this.normalizeDevelopmentEnv(developmentEnvMatch![1]!),
      configDir,
      configFilePath,
      configFileName: fileName,
    }
  }

  /**
   * 规范化开发环境名（xxx.config.js 的 xxx）
   * - 任意合法前缀均可：local、staging、uat-v2 等
   * - 不可使用 production（生产请用 config.js）
   */
  private normalizeDevelopmentEnv(envName: string): string {
    const normalized = envName.trim().toLowerCase()
    if (normalized.length === 0) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        '开发配置环境名不能为空',
      ])
    }

    if (normalized === CONFIG_DIR_RULES.productionEnv) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `开发配置不可使用环境名: ${envName}`,
        `生产配置请使用 ${CONFIG_DIR_RULES.productionFileName}`,
      ])
    }

    if (!/^[a-z][\w-]*$/.test(normalized)) {
      this.raiseConfigIssue(NestConfigLogLevel.Error, '配置加载失败', [
        `非法开发环境名: ${envName}`,
        '仅允许字母、数字、下划线、连字符，且以字母开头',
        '示例: local.config.js、staging.config.js、uat-v2.config.js',
      ])
    }

    return normalized
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
        `开发配置: ${configDirName}/local.config.js、staging.config.js 等`,
      ])
    }

    return configDirPath
  }

  /**
   * 扫描 config 目录
   * - config.js → 生产
   * - 任意 xxx.config.js → 开发（xxx 为环境名，如 local、staging、uat）
   */
  private scanConfigDirectory(options: NestConfigPathOptions): ConfigDirectoryScanResult {
    const configDir = this.resolveConfigDirectory(options)
    const developmentFiles: DevelopmentConfigFile[] = []
    const invalidFileNames: string[] = []
    let productionFilePath: string | undefined

    for (const fileName of VipNodeJS.readdirSync(configDir).sort()) {
      // 忽略隐藏文件（如 .gitkeep）
      if (fileName.startsWith('.')) {
        continue
      }

      if (fileName === CONFIG_DIR_RULES.productionFileName) {
        productionFilePath = VipNodeJS.pathJoin(configDir, fileName)
        continue
      }

      const developmentEnvMatch = fileName.match(CONFIG_DIR_RULES.developmentFilePattern)
      if (developmentEnvMatch != null) {
        developmentFiles.push({
          devEnv: this.normalizeDevelopmentEnv(developmentEnvMatch[1]!),
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
        `示例: config.js、local.config.js、staging.config.js`,
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
