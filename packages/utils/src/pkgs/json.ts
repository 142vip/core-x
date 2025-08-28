import type { PackageJSONMainFest } from '../core'
import { klona } from 'klona/json'
import { VipNodeJS } from '../core'

/**
 * json克隆复制
 * 参考：https://www.npmjs.com/package/klona
 */
function clone<T>(json: T) {
  return klona(json)
}

/**
 * JSON序列化
 */
function stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string {
  return JSON.stringify(value, replacer, space)
}

/**
 * 解析JSON串
 */
function parse<T>(originData: string | undefined | null, defaultData: Partial<T>): T {
  if (originData == null || originData.length === 0) {
    return defaultData as T
  }
  return JSON.parse(originData)
}

interface JSONFile {
  path: string
  data: PackageJSONMainFest
  indent: string
  // 换行符
  newline: string | undefined
}

/**
 * Reads a JSON file and returns the parsed data.
 */
function readFile(name: string, cwd: string): JSONFile {
  const filePath = VipNodeJS.pathJoin(cwd, name)
  const dataStr = VipNodeJS.readFileToStrByUTF8(filePath)
  const data = parse<PackageJSONMainFest>(dataStr, {})
  // 1. 检测缩进（优先从第二行分析，兼容空文件或单行JSON）
  const lines = dataStr.split(/\r?\n/)
  let indent = '  ' // 默认2个空格
  if (lines.length > 1) {
    const firstContentLine = lines.find(line => line.trim() !== '')
    if (firstContentLine) {
      const indentMatch = firstContentLine.match(/^(\s+)/)
      if (indentMatch)
        indent = indentMatch[1]
    }
  }

  // 2. 检测换行符（优先CRLF，其次LF）
  const newline = dataStr.includes('\r\n') ? '\r\n' : '\n'

  return { path: filePath, data, indent, newline }
}

/**
 * Writes the given data to the specified JSON file.
 */
function writeFile(file: JSONFile): void {
  let jsonStr = JSON.stringify(file.data, undefined, file.indent)

  if (file.newline)
    jsonStr += file.newline

  return VipNodeJS.writeFileByUTF8(file.path, jsonStr)
}

/**
 * 处理JSON
 */
export const VipJSON = {
  clone,
  stringify,
  parse,
  readFile,
  writeFile,
}
