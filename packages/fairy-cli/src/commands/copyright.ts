import type { VipCommander } from '@142vip/utils'
import { CopyrightFileType, VipCopyright } from '@142vip/copyright'
import { VipColor, VipConsole, VipInquirer, vipLogger, VipNodeJS } from '@142vip/utils'
import { CLI_COMMAND_DETAIL, CommandEnum } from '../enums'

interface CopyrightOptions {
  maxLineCount: number
  maxSourceCount: number
  dryRun: boolean
  logger: boolean
}

/**
 * copyright命令
 * - 参考 @142vip/copyright模块
 */
export async function copyrightMain(program: VipCommander): Promise<void> {
  program
    .initCommand(CLI_COMMAND_DETAIL[CommandEnum.COPYRIGHT])
    .option('-l,--max-line-count', '每页最大行数', value => Number.parseInt(value), 50)
    .option('-s,--max-source-count', '扫描的最大代码行数', value => Number.parseInt(value), 2000)
    .action(async (args: CopyrightOptions): Promise<void> => {
      const copyrightTitle = await VipInquirer.promptInputRequired('申请著作权登记的软件的全称：')
      const copyrightVersion = await VipInquirer.promptInputRequired('申请著作权登记的软件的版本号：')
      const sourceCodeDir = await VipInquirer.promptInputRequired('源代码扫描目录：')
      const fileType = await VipInquirer.promptSelect<CopyrightFileType>('源代码编程语言类型：', Object.values(CopyrightFileType))

      // 试运行
      if (args.dryRun) {
        vipLogger.println()
        vipLogger.println()
        VipConsole.log(VipColor.green('申请软件著作权登记的源代码文档生成，试运行：'))
        VipConsole.log(VipColor.dim(`软件的全称：${copyrightTitle}`))
        VipConsole.log(VipColor.dim(`软件的版本：${copyrightVersion}`))
        VipConsole.log(VipColor.dim(`源代码扫描目录：${sourceCodeDir}`))
        VipConsole.log(VipColor.dim(`源代码编程语言类型：${fileType}`))
        vipLogger.println()
        VipNodeJS.existErrorProcess()
      }

      const vipCopyright = new VipCopyright(copyrightTitle, copyrightVersion, {
        logger: args.logger,
        maxLineCountInPage: args.maxLineCount,
        maxScanSourceLineCount: args.maxSourceCount,
      })

      // 生成源代码文档
      await vipCopyright.generateDocx(sourceCodeDir, fileType)
    })
}
