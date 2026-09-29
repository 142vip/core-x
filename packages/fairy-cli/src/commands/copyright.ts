import type { VipPackageCliCommander } from '@142vip/utils'
import { CopyrightFileType, VipCopyright } from '@142vip/copyright'
import {
  VipColor,
  VipConsole,
  VipInquirer,
} from '@142vip/utils'
import { CommandEnum, FairyCommandOptions } from '../constant'
import { registerFairySubcommand, runOrDryRun } from '../utils'

interface CopyrightOptions extends FairyCommandOptions {
  maxLineCount: number
  maxSourceCount: number
}

/** `fa copyright`：交互生成软著登记用源代码文档（委托 `@142vip/copyright`）。 */
export async function copyrightMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand(program, CommandEnum.COPYRIGHT, async (args: CopyrightOptions) => {
    const copyrightTitle = await VipInquirer.promptInputRequired('申请著作权登记的软件的全称：')
    const copyrightVersion = await VipInquirer.promptInputRequired('申请著作权登记的软件的版本号：')
    const sourceCodeDir = await VipInquirer.promptInputRequired('源代码扫描目录：')
    const fileType = await VipInquirer.promptSelect<CopyrightFileType>(
      '源代码编程语言类型：',
      Object.values(CopyrightFileType),
    )

    const steps = [
      `全称: ${copyrightTitle}`,
      `版本: ${copyrightVersion}`,
      `目录: ${sourceCodeDir}`,
      `语言: ${fileType}`,
      `每页行数: ${args.maxLineCount}`,
      `最大扫描行数: ${args.maxSourceCount}`,
      '生成软著源代码 DOCX',
    ]

    await runOrDryRun(args.dryRun, 'copyright', steps, async () => {
      const vipCopyright = new VipCopyright(copyrightTitle, copyrightVersion, {
        logger: args.trace === true,
        maxLineCountInPage: args.maxLineCount,
        maxScanSourceLineCount: args.maxSourceCount,
      })

      await vipCopyright.generateDocx(sourceCodeDir, fileType)
      VipConsole.log(`${VipColor.greenBright('copyright:')} 源代码文档已生成`)
    })
  }, (command) => {
    command
      .option('-l,--max-line-count <n>', '每页最大行数', (value: string) => Number.parseInt(value, 10), 50)
      .option('-s,--max-source-count <n>', '扫描的最大代码行数', (value: string) => Number.parseInt(value, 10), 2000)
  })
}
