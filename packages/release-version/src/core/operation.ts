import type { NpmScript, ProgressEvent, VersionBumpOptions, VersionBumpProgress, VersionBumpResults } from '../types'
import type { NormalizedOptions } from './normalize-options'
import { normalizeOptions } from './normalize-options'
import type { ReleaseType } from './release-type'

type ProgressCallback = (progress: VersionBumpProgress) => void

interface OperationState {
  release: ReleaseType | undefined
  currentVersionSource: string
  currentVersion: string
  newVersion: string
  commitMessage: string
  tagName: string
  updatedFiles: string[]
  skippedFiles: string[]
}

interface UpdateOperationState extends Partial<OperationState> {
  event?: ProgressEvent
  script?: NpmScript
}

/**
 * All  the inputs, outputs, and state of a single `versionBump()` call.
 */
export class Operation {
  /**
   * The options for this operation.
   */
  public options: NormalizedOptions

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
    updatedFiles: [],
    skippedFiles: [],
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
      updatedFiles: state.updatedFiles.slice(),
      skippedFiles: state.skippedFiles.slice(),
    }
  }

  /**
   * The callback that's used to report the progress of the operation.
   */
  private readonly _progress?: ProgressCallback

  /**
   * Private constructor.  Use the `Operation.start()` static method instead.
   */
  private constructor(options: NormalizedOptions, progress?: ProgressCallback) {
    this.options = options
    this._progress = progress
    if (options.currentVersion) {
      this.update({
        currentVersion: options.currentVersion,
        currentVersionSource: 'user',
      })
    }
  }

  /**
   * Starts a new `versionBump()` operation.
   */
  public static async start(input: VersionBumpOptions): Promise<Operation> {
    // Validate and normalize the options
    const options = await normalizeOptions(input)

    return new Operation(options, input.progress)
  }

  /**
   * 更新操作状态和结果，并将更新后的进度报告给上层
   */
  public update({ event, script, ...newState }: UpdateOperationState): this {
    // Update the operation state
    Object.assign(this.state, newState)

    // Report the progress to the user
    if (event && this._progress) {
      this._progress({ event, script, ...this.results })
    }

    return this
  }
}
