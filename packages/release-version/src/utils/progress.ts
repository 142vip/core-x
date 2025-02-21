import type { VersionBumpProgress } from '../types'
import { VipConsole, VipSymbols } from '@142vip/utils'
import { ProgressEvent } from '../types'

/**
 * 显示进度
 * @param progress
 */
export function showProgress(progress: VersionBumpProgress) {
  switch (progress.event) {
    case ProgressEvent.FileUpdated:
      VipConsole.log(`${VipSymbols.success} Updated ${progress.updatedFiles.pop()} to ${progress.newVersion}`)
      break

    case ProgressEvent.FileSkipped:
      VipConsole.log(`${VipSymbols.info} ${progress.skippedFiles.pop()} did not need to be updated`)
      break

    case ProgressEvent.GitCommit:
      VipConsole.log(`${VipSymbols.success} Git commit`)
      break

    case ProgressEvent.GitTag:
      VipConsole.log(`${VipSymbols.success} Git tag`)
      break

    case ProgressEvent.GitPush:
      VipConsole.log(`${VipSymbols.success} Git push`)
      break

    case ProgressEvent.NpmScript:
      VipConsole.log(`${VipSymbols.success} Npm run ${progress.script}`)
      break
  }
}
