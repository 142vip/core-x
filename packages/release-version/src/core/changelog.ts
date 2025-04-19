import type { ReleaseOperation } from './version-operation'
import {
  VipColor,
  VipConsole,
  VipExecutor,
  VipNodeJS,
  VipSymbols,
} from '@142vip/utils'

/**
 * 生成CHANGELOG.md文档
 */
export async function updateChangelogDoc(operation: ReleaseOperation): Promise<void> {
  if (operation.options.changelog) {
    VipConsole.log(`${VipSymbols.info} 基于 ${VipColor.greenBright('@142vip/changelog')} 模块生成CHANGELOG.md文档，执行命令： ${operation.options.execute}`)
    try {
      const filePath = VipNodeJS.pathJoin(operation.options.cwd, 'CHANGELOG.md')
      const baseCommand = `npx changelog --output "${filePath}" --name v${operation.state.newVersion}`
      // 支持monorepo子模块
      await VipExecutor.execShell(operation.options.scopeName != null
        ? { command: `${baseCommand} --scopeName ${operation.options.scopeName}`, description: `MonoRepo模式，生成 ${VipColor.greenBright(operation.options.scopeName)} 模块的CHANGELOG文档` }
        : { command: baseCommand, description: '普通模式，生成CHANGELOG文档' })
    }
    catch (e) {
      VipConsole.log(`${VipSymbols.error} 生成CHANGELOG.md文档时发生错误`)
      VipConsole.error(e)
      VipNodeJS.existErrorProcess()
    }

    VipConsole.log(`${VipSymbols.success} 生成CHANGELOG.md文档结束`)
  }
}
