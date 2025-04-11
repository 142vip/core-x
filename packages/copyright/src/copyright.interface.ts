import type { Footer, Header, Paragraph } from 'docx'

/**
 * 软著支持的源代码文件类型
 */
export enum CopyrightFileType {
  JAVA = 'java',
  JAVASCRIPT = 'js',
  TYPESCRIPT = 'ts',
  PYTHON = 'py',
  C = 'c',
  CPP = 'cpp',
  GO = 'go',
  SWIFT = 'swift',
  PHP = 'php',
  RUST = 'rs',
  SHELL = 'sh',
  SQL = 'sql',
  YAML = 'yaml',
  YML = 'yml',
  JSON = 'json',
  XML = 'xml',
  HTML = 'html',
  TEXT = 'txt',
}

/**
 * 文档页
 */
export interface DocumentSection {
  headers: {
    default: Header
  }
  footers: {
    default: Footer
  }
  children: Paragraph[]
}

/**
 * 版权对象实例化参数
 * - 可选
 */
export interface CopyrightOptions {
  /**
   * 每页最大行数
   */
  maxLineCountInPage?: number
  /**
   * 扫描的最大代码行数
   */
  maxScanSourceLineCount?: number
  /**
   * 是否开启控制台日志
   */
  logger?: boolean
}
