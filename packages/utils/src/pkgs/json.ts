import type { PackageJSONMainFest } from '../core'
import { klona } from 'klona/json'
import { VipNodeJS } from '../core'
import { detectIndent } from '../extends/detect-indent'
import { detectNewline } from '../extends/detect-newline'

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
  const indent = detectIndent(dataStr).indent
  const newline = detectNewline(dataStr)

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
