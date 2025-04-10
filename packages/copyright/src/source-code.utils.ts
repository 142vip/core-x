import type { CopyrightFileType, DocumentSection } from './copyright.interface'
import fs from 'node:fs'
import { VipNodeJS } from '@142vip/utils'
import { Footer, Header, PageNumber, Paragraph, TextRun } from 'docx'

/**
 * 判断是否为源代码行
 * - 去掉空行
 */
export function isSourceCodeLine(line: string): boolean {
  return line.length > 0
}

/**
 * 读取文件
 */
export function readSourceCodeLinesByFile(filePath: string): string[] {
  const content = fs.readFileSync(filePath, 'utf-8')
  return content.split('\n')
}

/**
 * 根据文件类型获取文件列表
 */
export function getSourceCodeFiles(dirPath: string, fileType: CopyrightFileType): string[] {
  const files: string[] = []
  const entries = fs.readdirSync(dirPath, {
    withFileTypes: true,
  })

  for (const entry of entries) {
    const fullPath = VipNodeJS.pathJoin(dirPath, entry.name)
    // 目录递归
    if (entry.isDirectory()) {
      files.push(...getSourceCodeFiles(fullPath, fileType))
    }

    // 文件
    else if (entry.isFile() && entry.name.endsWith(fileType)) {
      files.push(fullPath)
    }
  }

  return files.sort()
}

/**
 * 获取文档中每一页的内容，包括页头、正文、页脚
 */
export function getPageSectionInDocx(options: {
  copyrightTitle: string
  pageCount: number
  sourceCodes: string[]
}): DocumentSection {
  return {
    // 页头
    headers: {
      default: new Header({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: options.copyrightTitle,
                font: '黑体',
                bold: true,
                size: 16,
              }),
            ],
            alignment: 'start',
          }),
        ],
      }),
    },
    // 页脚
    footers: {
      default: new Footer({
        children: [
          new Paragraph({
            children: [
              new TextRun({
                children: [PageNumber.CURRENT],
                font: '黑体',
                size: 16,
              }),
              new TextRun({
                text: ` / ${options.pageCount}`,
                font: '黑体',
                size: 16,
              }),
            ],
            alignment: 'end',
          }),
        ],
      }),
    },
    // 正文部分
    children: options.sourceCodes.map(codeLine =>
      new Paragraph({
        children: [
          new TextRun({
            text: codeLine,
            font: 'Arial Narrow',
            size: 21,
          }),
        ],
      }),
    ),
  }
}
