import type {
  CopyrightFileType,
  CopyrightOptions,
  DocumentSection,
} from './copyright.interface'
import fs from 'node:fs'
import {
  VipColor,
  VipConsole,
  vipLogger,
  VipNodeJS,
} from '@142vip/utils'
import {
  Document,
  Packer,
} from 'docx'
import {
  getPageSectionInDocx,
  getSourceCodeFiles,
  isSourceCodeLine,
  readSourceCodeLinesByFile,
} from './source-code.utils'

/**
 * 软著源代码生成器
 * - 支持Java、JavaScript、TypeScript、Python、C、C++、Go、Swift、PHP、Rust、Shell、SQL、YAML、XML、HTML、Text等语言
 * - 支持生成源代码文档
 * - 支持生成源代码文档的前30页、后30页、前后30页
 */
export class VipCopyright {
  /**
   * 最大页数
   */
  private readonly pageCount: number

  /**
   * docx文档，一页的最大代码行数
   */
  private readonly maxLineCountInPage: number

  /**
   * 版权标题
   */
  private readonly copyrightTitle: string
  /**
   * 版权对应的版本
   * - V1.0
   */
  private readonly copyrightVersion: string

  /**
   * 扫描的最大代码行数，默认2000
   */
  private readonly maxScanSourceLineCount: number

  /**
   * 是否需要终端打印日志
   */
  private readonly consoleLogger: boolean

  constructor(copyrightTitle: string, copyrightVersion: string, options?: CopyrightOptions) {
    if (!(copyrightTitle.endsWith('平台') || copyrightTitle.endsWith('系统'))) {
      vipLogger.println()
      VipConsole.log(VipColor.red('申请著作权登记的软件的全称。软件名称应简短明确，针对性强。建议以“平台”或“系统”结尾，例如：xxx平台'))
      vipLogger.println()
      VipNodeJS.exitProcess(1)
    }
    if (!copyrightVersion.startsWith('V')) {
      vipLogger.println()
      VipConsole.log(VipColor.red('申请著作权登记的软件的版本号。版本号一般情况下按照“V数字”或“数字”的方式填写，例如：V1.0或2.0.1'))
      vipLogger.println()
      VipNodeJS.exitProcess(1)
    }

    this.copyrightTitle = copyrightTitle
    this.copyrightVersion = copyrightVersion

    this.pageCount = options?.pageCount ?? 30
    this.maxLineCountInPage = options?.maxLineCountInPage ?? 50
    this.maxScanSourceLineCount = options?.maxScanSourceLineCount ?? 2000
    this.consoleLogger = options?.logger ?? false
  }

  /**
   * 快速生成文档
   */
  public static async quickGenerateDocx(options: {
    copyrightTitle: string
    copyrightVersion: string
    sourceCodeDir: string
    fileType: CopyrightFileType
  }): Promise<void> {
    const vipCopyright = new VipCopyright(options.copyrightTitle, options.copyrightVersion)
    await vipCopyright.generateDocx(options.sourceCodeDir, options.fileType)
  }

  /**
   * 生成源代码文档
   */
  public async generateDocx(sourceCodeDir: string, fileType: CopyrightFileType): Promise<void> {
    const storeDocxDir = VipNodeJS.getProcessCwd()

    const beginSourceDocPath = VipNodeJS.pathJoin(storeDocxDir, `${this.copyrightTitle}${this.copyrightVersion}-代码(前${this.pageCount}页).docx`)
    const endSourceDocPath = VipNodeJS.pathJoin(storeDocxDir, `${this.copyrightTitle}${this.copyrightVersion}-代码(后${this.pageCount}页).docx`)
    const sourceDocPath = VipNodeJS.pathJoin(storeDocxDir, `${this.copyrightTitle}${this.copyrightVersion}-代码(前后${this.pageCount}页).docx`)

    // 扫描
    const { beginSourceCode, endSourceCode, allSourceCode } = this.scanSourceCode(sourceCodeDir, fileType)

    // 前30页
    await this.saveCodeToDocx(beginSourceDocPath, beginSourceCode, this.pageCount)

    // 后30页
    await this.saveCodeToDocx(endSourceDocPath, endSourceCode, this.pageCount)

    // 整个代码
    await this.saveCodeToDocx(sourceDocPath, allSourceCode, this.pageCount * 2)

    if (this.consoleLogger) {
      // 存放目录
      VipConsole.log(VipColor.red(`文档存放目录：${storeDocxDir}`))
      vipLogger.println()
      VipConsole.log(VipColor.green('著作权登记的源代码文档自动生成完毕！！！'))
      vipLogger.println()
      VipConsole.log(`源代码前30页文档路径：${beginSourceDocPath}`)
      VipConsole.log(`源代码后30页文档路径：${endSourceDocPath}`)
      VipConsole.log(`源代码连续60页文档：${sourceDocPath}`)
      VipConsole.log(`扫描的代码共计：${VipColor.green(allSourceCode.length.toString())} 行`)
      vipLogger.println()
    }
  }

  /**
   * 存储代码到文档中
   */
  public async saveCodeToDocx(fileName: string, sourceLines: string[], pageCount: number): Promise<void> {
    const pageSections: DocumentSection[] = []
    let currentPage = 0
    for (let line = 0; line < sourceLines.length; line += this.maxLineCountInPage) {
      currentPage++
      if (currentPage > pageCount) {
        break
      }

      // 按页截取代码，拼接文档的一页
      pageSections.push(getPageSectionInDocx({
        copyrightTitle: this.copyrightTitle,
        pageCount,
        sourceCodes: sourceLines.slice(line, line + this.maxLineCountInPage),
      }))
    }

    // 生成文档
    const document = new Document({ sections: pageSections })

    const buffer = await Packer.toBuffer(document)
    fs.writeFileSync(fileName, buffer)
  }

  /**
   * 根据文件路径，扫描源码
   */
  public scanSourceCode(sourceCodeDir: string, fileType: CopyrightFileType): {
    beginSourceCode: string[]
    endSourceCode: string[]
    allSourceCode: string[]
  } {
    const beginSourceCode: string[] = []
    const endSourceCode: string[] = []
    //
    const sourceCodeFiles = getSourceCodeFiles(sourceCodeDir, fileType)

    // 从前往后扫描
    for (const file of sourceCodeFiles) {
      const lines = readSourceCodeLinesByFile(file)
      for (const line of lines) {
        if (isSourceCodeLine(line) && beginSourceCode.length < this.maxScanSourceLineCount) {
          beginSourceCode.push(line)
        }
      }

      // 跳出
      if (beginSourceCode.length >= this.maxScanSourceLineCount) {
        break
      }
    }

    // 从后往前扫
    for (let len = sourceCodeFiles.length - 1; len >= 0; len--) {
      const lines = readSourceCodeLinesByFile(sourceCodeFiles[len])
      for (const line of lines) {
        if (isSourceCodeLine(line) && endSourceCode.length < this.maxScanSourceLineCount) {
          endSourceCode.push(line)
        }
      }

      if (endSourceCode.length >= this.maxScanSourceLineCount) {
        break
      }
    }

    return {
      beginSourceCode,
      endSourceCode,
      allSourceCode: beginSourceCode.concat(endSourceCode),
    }
  }
}
