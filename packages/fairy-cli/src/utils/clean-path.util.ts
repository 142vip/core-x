import { readdir, rm } from 'node:fs/promises'
import path from 'node:path'
import { VipNodeJS } from '@142vip/utils'

/** `fa clean` 删除选项，对应原 `del` 包的 `dryRun` / `force` */
export interface DeleteByPatternsOptions {
  /** 试运行：仅返回将删除的路径，不执行 `fs.rm` */
  dryRun?: boolean
  /** 等同 Node `fs.rm({ force })`，忽略不存在路径 */
  force?: boolean
  /** 解析 glob 与删除的基准目录，默认 `process.cwd()` */
  cwd?: string
}

/**
 * 将 `fa clean` 使用的 glob 片段转为正则。
 * 仅支持 `*`（单段）与 `**`（跨段），与 `generateDirPatterns` 输出一致。
 */
export function globPatternToRegExp(globPattern: string): RegExp {
  let regex = ''
  for (let index = 0; index < globPattern.length; index++) {
    const char = globPattern[index]
    if (char === '*' && globPattern[index + 1] === '*') {
      if (globPattern[index + 2] === '/') {
        regex += '(?:.*/)?'
        index += 2
      }
      else {
        regex += '.*'
        index += 1
      }
    }
    else if (char === '*') {
      regex += '[^/]*'
    }
    else {
      regex += char.replace(/[\\^$+?.()|[\]{}]/g, '\\$&')
    }
  }
  return new RegExp(`^${regex}$`)
}

/** 将绝对路径转为相对 cwd 的 POSIX 风格路径，便于 glob 匹配 */
function toPosixRelative(cwd: string, absolutePath: string): string {
  return path.relative(cwd, absolutePath).split(path.sep).join('/')
}

/** 自 cwd 递归收集所有文件/目录的相对路径（含点目录） */
async function collectRelativePaths(cwd: string, rootDir: string): Promise<string[]> {
  const relativePaths: string[] = []
  const walk = async (currentDir: string): Promise<void> => {
    const entries = await readdir(currentDir, { withFileTypes: true })
    for (const entry of entries) {
      const absolutePath = path.join(currentDir, entry.name)
      relativePaths.push(toPosixRelative(cwd, absolutePath))
      if (entry.isDirectory()) {
        await walk(absolutePath)
      }
    }
  }
  await walk(rootDir)
  return relativePaths
}

/**
 * 根据 include / exclude glob 列表解析待删除的绝对路径。
 * exclude 规则以 `!` 开头，例如 `!` + `**` + `/node_modules/` + `**` + `/dist`。
 */
export async function resolveDeleteTargets(cwd: string, patterns: string[]): Promise<string[]> {
  const includePatterns = patterns.filter(pattern => !pattern.startsWith('!'))
  const excludePatterns = patterns
    .filter(pattern => pattern.startsWith('!'))
    .map(pattern => pattern.slice(1))

  const needsWalk = includePatterns.some(pattern => pattern.includes('*'))
    || excludePatterns.length > 0
  const matched = new Set<string>()

  const tryAdd = (absolutePath: string): void => {
    if (!VipNodeJS.existPath(absolutePath)) {
      return
    }
    const relativePath = toPosixRelative(cwd, absolutePath)
    const excluded = excludePatterns.some(pattern => globPatternToRegExp(pattern).test(relativePath))
    if (!excluded) {
      matched.add(path.resolve(absolutePath))
    }
  }

  // 无通配符的规则：直接解析为 cwd 下的相对路径
  for (const pattern of includePatterns) {
    if (!pattern.includes('*')) {
      tryAdd(path.resolve(cwd, pattern))
    }
  }

  // 含 `**` 或存在 exclude 时遍历工作区再匹配
  if (needsWalk) {
    const relativePaths = await collectRelativePaths(cwd, cwd)
    for (const relativePath of relativePaths) {
      const included = includePatterns.some(pattern => globPatternToRegExp(pattern).test(relativePath))
      if (included) {
        tryAdd(path.resolve(cwd, relativePath))
      }
    }
  }

  // 长路径优先，便于日志展示时父目录在前
  return [...matched].sort((left, right) => right.length - left.length)
}

/**
 * 按 glob 规则删除文件或目录（Node 内置 `fs.rm`，无第三方 `del` 依赖）。
 */
export async function deleteByPatterns(
  patterns: string[],
  options: DeleteByPatternsOptions = {},
): Promise<string[]> {
  const cwd = options.cwd ?? VipNodeJS.getProcessCwd()
  const targets = await resolveDeleteTargets(cwd, patterns)
  const deleted: string[] = []

  for (const target of targets) {
    deleted.push(target)
    if (options.dryRun) {
      continue
    }
    await rm(target, {
      recursive: true,
      force: options.force ?? false,
    })
  }

  return deleted
}
