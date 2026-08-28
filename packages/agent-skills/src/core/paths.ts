/**
 * 包路径与 package.json 元信息。
 * 包名 / 版本只从本包 package.json 读，不在源码散落硬编码。
 */
import { fileURLToPath } from 'node:url'
import { PackageJSON, VipNodeJS, VipPackageJSON } from '@142vip/utils'

/**
 * 解析包根目录（skills / templates / package.json 所在层）。
 * 从当前模块向上查找 package.json，兼容 src/core、dist/shared 等布局。
 */
export function getPackageRoot(): string {
  let currentDir = VipNodeJS.pathDirname(fileURLToPath(import.meta.url))
  for (let depth = 0; depth < 8; depth++) {
    if (VipPackageJSON.isExistPackageJSON(currentDir))
      return currentDir
    currentDir = VipNodeJS.pathDirname(currentDir)
  }
  throw new Error('Cannot resolve agent-skills package root (package.json not found)')
}

function readPackageMeta(): PackageJSON {
  return VipPackageJSON.getPackageJSON<PackageJSON>(getPackageRoot())
}

/** 本包 npm name（package.json） */
export function getPackageName(): string {
  return readPackageMeta().name
}

/** 本包 version（package.json） */
export function getVersion(): string {
  return readPackageMeta().version
}

export function getSkillsRoot(): string {
  return VipNodeJS.pathJoin(getPackageRoot(), 'skills')
}

export function getTemplatesRoot(): string {
  return VipNodeJS.pathJoin(getPackageRoot(), 'templates')
}
