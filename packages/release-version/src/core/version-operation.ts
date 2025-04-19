import type { VipReleaseType } from '@142vip/utils'
import type {
  ReleaseOperationOptions,
  VersionBumpOptions,
  VersionBumpProgress,
  VersionBumpResults,
  VersionHooksEnum,
} from '../enums'
import { VipConsole, VipNodeJS, VipSymbols } from '@142vip/utils'
import { VersionProgressEventEnum } from '../enums'

interface OperationState {
  release: VipReleaseType | undefined
  currentVersionSource: string
  currentVersion: string
  newVersion: string
  commitMessage: string
  tagName: string
}

interface UpdateOperationState extends Partial<OperationState> {
  event?: VersionProgressEventEnum
  script?: VersionHooksEnum
}

/**
 * 显示进度
 */
function showProgress(progress: VersionBumpProgress) {
  switch (progress.event) {
    case VersionProgressEventEnum.GitCommit:
      VipConsole.log(`${VipSymbols.success} Git commit`)
      break

    case VersionProgressEventEnum.GitTag:
      VipConsole.log(`${VipSymbols.success} Git tag`)
      break

    case VersionProgressEventEnum.GitPush:
      VipConsole.log(`${VipSymbols.success} Git push`)
      break

    case VersionProgressEventEnum.NpmScript:
      VipConsole.log(`${VipSymbols.success} Npm run ${progress.script}`)
      break
  }
}

/**
 * 参数转换
 */
async function transformToReleaseOperationOptions(options: VersionBumpOptions): Promise<ReleaseOperationOptions> {
  let tag
  if (typeof options.tag === 'string')
    tag = { name: options.tag }

  else if (options.tag)
    tag = { name: 'v' }

  // NOTE: This must come AFTER `tag` and `push`, because it relies on them
  let commit
  if (typeof options.commit === 'string')
    commit = { all: !!options.all, skipGitVerify: !!options.skipGitVerify, message: options.commit }

  else if (options.commit || tag || options.push)
    commit = { all: !!options.all, skipGitVerify: !!options.skipGitVerify, message: 'chore: release v' }

  return {
    commit,
    tag,
    push: !!options.push,
    cwd: options.cwd ?? VipNodeJS.getProcessCwd(),
    ignoreScripts: !!options.ignoreScripts,
    execute: options.execute,
    currentVersion: options.currentVersion,
    changelog: !!options.changelog,
    // 允许用户不输入
    scopeName: options.scopeName,
  }
}

/**
 * All  the inputs, outputs, and state of a single `versionBump()` call.
 */
export class ReleaseOperation {
  /**
   * The options for this operation.
   */
  public options: ReleaseOperationOptions

  /**
   * The current state of the operation.
   */
  public readonly state: Readonly<OperationState> = {
    release: undefined,
    currentVersion: '',
    currentVersionSource: '',
    newVersion: '',
    commitMessage: '',
    tagName: '',
  }

  /**
   * Private constructor.  Use the `Operation.start()` static method instead.
   */
  private constructor(options: ReleaseOperationOptions) {
    this.options = options
    if (options.currentVersion) {
      this.update({ currentVersion: options.currentVersion, currentVersionSource: 'user' })
    }
  }

  /**
   * The results of the operation.
   */
  public get results(): VersionBumpResults {
    const options = this.options
    const state = this.state

    return {
      release: state.release,
      currentVersion: state.currentVersion,
      newVersion: state.newVersion,
      commit: options.commit ? state.commitMessage : false,
      tag: options.tag ? state.tagName : false,
    }
  }

  /**
   * 开始一个全新的`versionBump()`操作
   */
  public static async start(input: VersionBumpOptions): Promise<ReleaseOperation> {
    const options = await transformToReleaseOperationOptions(input)

    return new ReleaseOperation(options)
  }

  /**
   * 更新操作状态和结果，并将更新后的进度报告给上层
   */
  public update({ event, script, ...newState }: UpdateOperationState): this {
    // Update the operation state
    Object.assign(this.state, newState)

    // 存在事件时，展示事件执行进度，todo 配置quiet模式
    if (event) {
      showProgress({ event, script, ...this.results })
    }

    return this
  }
}
