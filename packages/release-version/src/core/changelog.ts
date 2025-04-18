import type { ReleaseOperation } from './operation'
import { VipConsole, VipExecutor, VipNodeJS, VipSymbols } from '@142vip/utils'

/**
 * 生成CHANGELOG.md文档
 */
export async function updateChangelogDoc(operation: ReleaseOperation): Promise<void> {
  if (operation.options.changelog) {
    VipConsole.log(`${VipSymbols.info} Generate CHANGELOG.md By @142vip/changelog ${operation.options.execute}`)
    try {
      const filePath = VipNodeJS.pathJoin(operation.options.cwd, 'CHANGELOG.md')
      const baseCommand = `npx changelog --output "${filePath}" --name v${operation.state.newVersion}`
      // 支持monorepo子模块
      await VipExecutor.execShell(operation.options.scopeName != null
        ? { command: `${baseCommand} --scopeName ${operation.options.scopeName}`, description: `MonoRepo模式，生成${operation.options.scopeName}模块的CHANGELOG文档` }
        : { command: baseCommand, description: '普通模式，生成CHANGELOG文档' })
    }
    catch (e) {
      VipConsole.log(`${VipSymbols.error} Happen Error In Generate CHANGELOG!!!`)
      VipConsole.error(e)
      VipNodeJS.exitProcess(1)
    }

    VipConsole.log(`${VipSymbols.success} Generate CHANGELOG.md Finished`)
  }
}
