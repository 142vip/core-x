import symbols from 'log-symbols'
import type { VersionBumpProgress } from '../types'
import { ProgressEvent } from '../types'

/**
 * 显示进度
 * @param progress
 */
export function showProgress(progress: VersionBumpProgress) {
  switch (progress.event) {
    case ProgressEvent.FileUpdated:
      console.log(symbols.success, `Updated ${progress.updatedFiles.pop()} to ${progress.newVersion}`)
      break

    case ProgressEvent.FileSkipped:
      console.log(symbols.info, `${progress.skippedFiles.pop()} did not need to be updated`)
      break

    case ProgressEvent.GitCommit:
      console.log(symbols.success, 'Git commit')
      break

    case ProgressEvent.GitTag:
      console.log(symbols.success, 'Git tag')
      break

    case ProgressEvent.GitPush:
      console.log(symbols.success, 'Git push')
      break

    case ProgressEvent.NpmScript:
      console.log(symbols.success, `Npm run ${progress.script}`)
      break
  }
}
