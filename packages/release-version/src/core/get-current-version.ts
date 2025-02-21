import type { Operation } from './operation'
import { valid as isValidVersion } from 'semver'
import { readJsonFile } from './fs'
import { isManifest } from './manifest'

/**
 * 从package.json等文件中查找当前版本号。
 * 如果找不到版本号，则会抛出错误
 * @param operation
 */
export async function getCurrentVersion(operation: Operation): Promise<Operation> {
  if (operation.state.currentVersion)
    return operation

  const { cwd, files } = operation.options

  // Check all JSON files in the files list
  const filesToCheck = files.filter(file => file.endsWith('.json'))

  // Always check package.json
  if (!filesToCheck.includes('package.json'))
    filesToCheck.push('package.json')

  // Check each file, in order, and return the first valid version number we find
  for (const file of filesToCheck) {
    const currentVersion = await readVersion(file, cwd)

    if (currentVersion) {
      // We found the current version number!
      return operation.update({ currentVersionSource: file, currentVersion })
    }
  }

  // If we get here, then no version number was found
  throw new Error(`Unable to determine the current version number. Checked ${filesToCheck.join(', ')}.`)
}

/**
 * 尝试从指定的 JSON 文件中读取版本号。
 * 版本号，如果文件没有版本号，则未定义
 */
async function readVersion(file: string, cwd: string): Promise<string | undefined> {
  try {
    const { data: manifest } = await readJsonFile(file, cwd)

    if (isManifest(manifest) && isValidVersion(manifest.version)) {
      return manifest.version
    }
  }
  catch {
    // Ignore errors (no such file, not valid JSON, etc.)
    // Just try the next file instead.
    return undefined
  }
}
