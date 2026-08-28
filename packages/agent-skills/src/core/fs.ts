/**
 * 仅保留「utils 不够、有真实组合逻辑」的 IO 辅助。
 * pathJoin / pathResolve / pathDirname / existPath 等直接调 VipNodeJS。
 */
import fs from 'node:fs'
import { VipNodeJS } from '@142vip/utils'

/** utils.mkdirSync 无 recursive；同步落盘前确保父目录存在 */
export function ensureDir(dirPath: string): void {
  fs.mkdirSync(dirPath, { recursive: true })
}

/** VipNodeJS.readdirSync 类型偏窄；固定 withFileTypes 读目录项 */
export function readdirWithTypes(dirPath: string): fs.Dirent[] {
  return fs.readdirSync(dirPath, { withFileTypes: true })
}

/** 复制文件，必要时先创建目标父目录 */
export function copyFile(fromPath: string, toPath: string): void {
  ensureDir(VipNodeJS.pathDirname(toPath))
  fs.copyFileSync(fromPath, toPath)
}

/** 写 UTF-8 文本，必要时先创建父目录 */
export function writeTextFile(filePath: string, content: string): void {
  ensureDir(VipNodeJS.pathDirname(filePath))
  VipNodeJS.writeFileByUTF8(filePath, content)
}

/** 二进制逐字节比较两文件是否完全一致 */
export function filesEqual(leftPath: string, rightPath: string): boolean {
  const leftBytes = fs.readFileSync(leftPath)
  const rightBytes = fs.readFileSync(rightPath)
  return leftBytes.equals(rightBytes)
}
