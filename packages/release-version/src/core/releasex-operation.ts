import type { ChangelogCliOptions } from '@142vip/changelog'
import type {
  ReleaseVersionOperationOptions,
  ReleaseVersionOperationState,
  ReleaseVersionOptions,
  ReleaseVersionProgress,
  ReleaseVersionResults,
  ReleaseVersionStatePatch,
} from '../releasex.interface'
import { changelogApi } from '@142vip/changelog'
import {
  VipColor,
  VipConsole,
  VipExecutor,
  VipInquirer,
  vipLogger,
  VipNodeJS,
  VipNpm,
  VipPackageJSON,
  VipSymbols,
} from '@142vip/utils'
import { VersionHooks, VersionProgressEvent } from '../releasex.interface'

/**
 * 单次发版流程的状态机：持有选项、中间状态，并编排完整发版步骤
 */
export class ReleaseVersionOperation {
  /** 归一化后的发版选项（commit / tag / push 等） */
  public readonly options: ReleaseVersionOperationOptions

  /** 发版过程中的中间状态（版本号、commit/tag 文案等） */
  public readonly state: ReleaseVersionOperationState = {
    release: undefined,
    currentVersion: '',
    currentVersionSource: '',
    newVersion: '',
    commitMessage: '',
    tagName: '',
  }

  /** 原始入参（含 `confirm`、`preid` 等未进入 `options` 的字段） */
  private readonly releaseOptions: ReleaseVersionOptions

  private constructor(options: ReleaseVersionOperationOptions, releaseOptions: ReleaseVersionOptions) {
    this.options = options
    this.releaseOptions = releaseOptions
    if (options.currentVersion) {
      this.patchState({ currentVersion: options.currentVersion, currentVersionSource: 'user' })
    }
  }

  /** 根据当前 state 与 options 生成对外结果快照 */
  public get results(): ReleaseVersionResults {
    return {
      release: this.state.release,
      currentVersion: this.state.currentVersion,
      newVersion: this.state.newVersion,
      commit: this.options.commit ? this.state.commitMessage : false,
      tag: this.options.tag ? this.state.tagName : false,
    }
  }

  /**
   * 创建发版操作实例（仅归一化选项，不读写磁盘）
   */
  public static async create(input: ReleaseVersionOptions): Promise<ReleaseVersionOperation> {
    const options = await ReleaseVersionOperation.normalizeReleaseOptions(input)
    return new ReleaseVersionOperation(options, input)
  }

  /**
   * 解析当前版本与目标版本（交互式选择新版本）
   * - 不修改 `package.json`，不写 CHANGELOG
   */
  public async resolveVersions(): Promise<this> {
    await this.loadCurrentVersion()
    await this.resolveNewVersion()
    return this
  }

  /**
   * 发版准备阶段：确认 → preversion → 写版本 → CHANGELOG → execute → version 脚本
   */
  public async prepareRelease(): Promise<this> {
    if (this.releaseOptions.confirm) {
      this.printReleasePlan()
      await this.promptConfirmRelease()
    }

    await this.runPreVersionScript()
    this.writePackageVersion()
    await this.writeChangelog()
    await this.runExecuteCommand()
    await this.runVersionScript()
    return this
  }

  /**
   * 发版收尾阶段：git commit → tag → postversion → push
   */
  public async finalizeRelease(): Promise<this> {
    await this.commitToGit()
    await this.createGitTag()
    await this.runPostVersionScript()
    await this.pushToRemote()
    return this
  }

  /**
   * 将 `ReleaseVersionOptions` 收窄为内部统一的 `ReleaseVersionOperationOptions`
   */
  private static async normalizeReleaseOptions(
    options: ReleaseVersionOptions,
  ): Promise<ReleaseVersionOperationOptions> {
    let tag
    if (typeof options.tag === 'string') {
      tag = { name: options.tag }
    }
    else if (options.tag) {
      tag = { name: 'v' }
    }

    let commit
    if (typeof options.commit === 'string') {
      commit = { all: !!options.all, skipGitVerify: !!options.skipGitVerify, message: options.commit }
    }
    else if (options.commit || tag || options.push) {
      commit = { all: !!options.all, skipGitVerify: !!options.skipGitVerify, message: 'chore: release v' }
    }

    return {
      commit,
      tag,
      push: !!options.push,
      cwd: options.cwd ?? VipNodeJS.getProcessCwd(),
      ignoreScripts: !!options.ignoreScripts,
      execute: options.execute,
      currentVersion: options.currentVersion,
      changelog: !!options.changelog,
      changelogPrerelease: options.changelogPrerelease,
      scopeName: options.scopeName,
    }
  }

  /** 在终端打印当前发版步骤进度 */
  private logProgress(progress: ReleaseVersionProgress): void {
    switch (progress.event) {
      case VersionProgressEvent.GitCommit:
        VipConsole.log(`${VipSymbols.success} Git commit`)
        break
      case VersionProgressEvent.GitTag:
        VipConsole.log(`${VipSymbols.success} Git tag`)
        break
      case VersionProgressEvent.GitPush:
        VipConsole.log(`${VipSymbols.success} Git push`)
        break
      case VersionProgressEvent.NpmScript:
        VipConsole.log(`${VipSymbols.success} Npm run ${progress.script}`)
        break
    }
  }

  /** 合并状态更新；传入 `event` 时同步打印进度 */
  private patchState({ event, script, ...newState }: ReleaseVersionStatePatch): this {
    Object.assign(this.state, newState)

    if (event) {
      this.logProgress({ event, script, ...this.results })
    }

    return this
  }

  /** 打印发版计划摘要（CLI 试运行与发版前确认复用） */
  public printReleasePlan(title = '发版计划：'): void {
    vipLogger.println()
    VipConsole.log(VipColor.cyan(title))

    if (this.options.changelog) {
      VipConsole.log(`  ${VipSymbols.info} 生成 CHANGELOG.md`)
    }
    if (this.options.commit) {
      VipConsole.log(`  ${VipSymbols.info} commit ${VipColor.bold(VipNpm.formatVersionStr(this.options.commit.message, this.state.newVersion))}`)
    }
    if (this.options.tag) {
      VipConsole.log(`  ${VipSymbols.info} tag ${VipColor.bold(VipNpm.formatVersionStr(this.options.tag.name, this.state.newVersion))}`)
    }
    if (this.options.execute) {
      VipConsole.log(`  ${VipSymbols.info} execute ${VipColor.bold(this.options.execute)}`)
    }
    if (this.options.push) {
      VipConsole.log(`  ${VipSymbols.info} push ${VipColor.green('yes')}`)
    }

    vipLogger.println()
    VipConsole.log(`    from ${VipColor.bold(this.state.currentVersion)}`)
    VipConsole.log(`      to ${VipColor.green(VipColor.bold(this.state.newVersion))}`)
    vipLogger.println()
  }

  /** 交互确认是否继续发版；取消时安全退出进程 */
  private async promptConfirmRelease(): Promise<void> {
    const isRelease = await VipInquirer.promptConfirm(
      `是否执行 ${VipColor.redBright('releasex')} 升级版本？`,
      false,
    )
    if (!isRelease) {
      vipLogger.logByBlank(VipColor.green('用户取消操作，安全退出。'))
      VipNodeJS.existSuccessProcess()
    }
  }

  /** 从 `package.json` 读取当前版本 */
  private async loadCurrentVersion(): Promise<void> {
    if (this.releaseOptions.currentVersion != null) {
      return
    }

    const currentVersion = VipPackageJSON.getCurrentVersion(this.releaseOptions.cwd)
    const file = VipPackageJSON.getPackagePath(this.releaseOptions.cwd)
    if (currentVersion != null) {
      this.patchState({ currentVersionSource: file, currentVersion })
    }
    else {
      vipLogger.logByBlank(`无法从项目中获取当前版本号，检查文件: ${file}.`)
    }
  }

  /** 交互选择或输入新版本号 */
  private async resolveNewVersion(): Promise<void> {
    const preid = this.releaseOptions.preid ?? 'alpha'
    const newVersion = await VipPackageJSON.promptReleaseVersion(this.state.currentVersion, preid)
    this.patchState({ newVersion })
  }

  /** 将新版本号写入 `package.json` */
  private writePackageVersion(): void {
    VipPackageJSON.updateVersion(this.state.newVersion, this.options.cwd)
  }

  /** 调用 `@142vip/changelog` 写入 `CHANGELOG.md` */
  private async writeChangelog(): Promise<void> {
    if (!this.options.changelog) {
      return
    }

    VipConsole.log(`${VipSymbols.info} 基于 ${VipColor.greenBright('@142vip/changelog')} 生成 CHANGELOG.md`)

    const filePath = VipNodeJS.pathJoin(this.options.cwd, 'CHANGELOG.md')
    const cliOptions: ChangelogCliOptions = {
      output: filePath,
      name: `v${this.state.newVersion}`,
      ...(this.options.scopeName != null ? { scopeName: this.options.scopeName } : {}),
      ...(this.options.changelogPrerelease != null
        ? { prerelease: this.options.changelogPrerelease }
        : {}),
    }

    try {
      await changelogApi.writeChangelogFile(cliOptions)
      VipConsole.log(`${VipSymbols.success} 生成 CHANGELOG.md 文档结束`)
    }
    catch (error) {
      VipConsole.log(`${VipSymbols.error} 生成 CHANGELOG.md 文档时发生错误`)
      VipConsole.error(error)
      VipNodeJS.existErrorProcess()
    }
  }

  /** 执行 `options.execute` 配置的 shell 命令 */
  private async runExecuteCommand(): Promise<void> {
    if (!this.options.execute) {
      return
    }

    VipConsole.log(`${VipSymbols.info} Executing Script ${this.options.execute}`)
    await VipExecutor.execShell({ command: this.options.execute, description: '执行 execute 提供的命令' })
    VipConsole.log(`${VipSymbols.success} Script Finished`)
  }

  /** 执行指定的 npm lifecycle 脚本（存在且未 `ignoreScripts` 时） */
  private async runLifecycleScript(script: VersionHooks): Promise<void> {
    if (this.options.ignoreScripts) {
      return
    }

    const manifest = VipPackageJSON.getPackageJSON(this.options.cwd)
    if (!VipPackageJSON.isPackageJSON(manifest) || !VipPackageJSON.hasScript(manifest, script)) {
      return
    }

    const existNpm = await VipNpm.isExistNpm()
    if (!existNpm) {
      vipLogger.log(VipColor.red('未安装 npm，请先安装 Node.js 环境。'))
      VipNodeJS.existErrorProcess()
    }

    await VipExecutor.execShell({ command: `npm run ${script} --silent`, description: '运行脚本命令' })
    this.patchState({ event: VersionProgressEvent.NpmScript, script })
  }

  private async runPreVersionScript(): Promise<void> {
    await this.runLifecycleScript(VersionHooks.PreVersion)
  }

  private async runVersionScript(): Promise<void> {
    await this.runLifecycleScript(VersionHooks.Version)
  }

  private async runPostVersionScript(): Promise<void> {
    await this.runLifecycleScript(VersionHooks.PostVersion)
  }

  /** 按配置创建 git commit */
  private async commitToGit(): Promise<void> {
    if (!this.options.commit) {
      return
    }

    const commitOptions = this.options.commit
    const args = ['--allow-empty']

    if (commitOptions.all) {
      args.push('--all')
    }
    if (commitOptions.skipGitVerify) {
      args.push('--no-verify')
    }

    const commitMessage = VipNpm.formatVersionStr(commitOptions.message, this.state.newVersion)
    args.push('--message', `'${commitMessage}'`)

    await VipExecutor.execShell({
      command: `git commit ${args.join(' ')}`,
      description: '提交 git commit 信息',
    })
    this.patchState({
      event: VersionProgressEvent.GitCommit,
      commitMessage,
    })
  }

  /** 按配置创建 annotated git tag */
  private async createGitTag(): Promise<void> {
    if (!this.options.tag) {
      return
    }

    const { commit, tag } = this.options
    const args = [
      '--annotate',
      '--message',
      `'${VipNpm.formatVersionStr(commit!.message, this.state.newVersion)}'`,
    ]

    const tagName = VipNpm.formatVersionStr(tag.name, this.state.newVersion)
    args.push(tagName)

    await VipExecutor.execShell({ command: `git tag ${args.join(' ')}`, description: '创建 Tag 标签' })
    this.patchState({ event: VersionProgressEvent.GitTag, tagName })
  }

  /** 按配置 push commit 与 tags */
  private async pushToRemote(): Promise<void> {
    if (!this.options.push) {
      return
    }

    await VipExecutor.execShell({ command: 'git push', description: '推送变更' })

    if (this.options.tag) {
      await VipExecutor.execShell({ command: 'git push --tags', description: '推送所有标签' })
    }

    this.patchState({ event: VersionProgressEvent.GitPush })
  }
}
