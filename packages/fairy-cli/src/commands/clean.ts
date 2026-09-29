import type { VipPackageCliCommander } from '@142vip/utils'
import {
  logVipCliTrace,
  VipColor,
  VipConsole,
  VipInquirer,
  VipNodeJS,
} from '@142vip/utils'
import { name, version } from '../../package.json'
import { CommandEnum, FairyCommandOptions } from '../constant'
import {
  deleteByPatterns,
  logDryRunSteps,
  registerFairySubcommand,
} from '../utils'

const FAIRY_CLI_IDENTITY = { name, version }

interface CleanOptions extends FairyCommandOptions {
  dist?: boolean
  nuxt?: boolean
  midway?: boolean
  ignoreTips?: boolean
  turbo?: boolean
  vite?: boolean
  deps?: boolean
  coverage?: boolean
  gitHooks?: boolean
  force?: boolean
  all?: boolean
}

type CleanTargetKey = Exclude<keyof CleanOptions, keyof FairyCommandOptions | 'ignoreTips' | 'force' | 'all'>

const CLEAN_TARGET_RULES: ReadonlyArray<{
  key: CleanTargetKey
  dirs: string | string[]
}> = [
  { key: 'deps', dirs: 'node_modules' },
  { key: 'dist', dirs: ['dist', '!node_modules/**/dist'] },
  { key: 'nuxt', dirs: ['.nuxt', '.output'] },
  { key: 'midway', dirs: ['run', 'logs', 'typings'] },
  { key: 'turbo', dirs: '.turbo' },
  { key: 'vite', dirs: '.vite' },
  { key: 'coverage', dirs: 'coverage' },
  { key: 'gitHooks', dirs: '.git/hooks' },
]

/**
 * 生成删除 glob 规则（供 `fa clean` 与单测复用）
 */
export function generateDirPatterns(dirName: string | string[], delAll?: boolean): string[] {
  const dirs = typeof dirName === 'string' ? [dirName] : [...dirName]

  if (delAll) {
    return dirs.map(dir => (dir.startsWith('!') ? `!**/${dir.slice(1)}` : `**/${dir}`))
  }

  return dirs
}

function collectCleanPatterns(options: CleanOptions): string[] {
  const patterns: string[] = []

  for (const { key, dirs } of CLEAN_TARGET_RULES) {
    if (options[key] !== true) {
      continue
    }
    patterns.push(...generateDirPatterns(dirs, options.all))
  }

  return patterns
}

/** 按选项收集 glob → 确认 → 删除（或 dry-run 预览） */
async function runClean(options: CleanOptions): Promise<void> {
  const dirPatterns = collectCleanPatterns(options)

  if (dirPatterns.length === 0) {
    VipConsole.error(
      `${VipColor.redBright('clean:')} 未指定删除目标，请传入 ${VipColor.cyan('--dist')}、${VipColor.cyan('--deps')} 等选项`,
    )
    VipNodeJS.existErrorProcess()
    return
  }

  logVipCliTrace(FAIRY_CLI_IDENTITY, 'clean: 规则', { patterns: dirPatterns, all: options.all === true })

  if (!options.ignoreTips && !options.dryRun) {
    const confirmed = await VipInquirer.promptConfirm('是否删除匹配的构建产物与缓存？', true)
    if (!confirmed) {
      VipConsole.log(`${VipColor.yellow('clean:')} 已取消`)
      VipNodeJS.existErrorProcess()
      return
    }
  }

  const deletedDirs = await deleteByPatterns(dirPatterns, {
    dryRun: options.dryRun,
    force: options.force,
  })

  if (options.dryRun) {
    logDryRunSteps('clean', [
      `匹配规则: ${dirPatterns.join(', ')}`,
      ...deletedDirs.map(target => `rm -rf ${target}`),
    ])
    return
  }

  logVipCliTrace(FAIRY_CLI_IDENTITY, 'clean: 完成', { deletedCount: deletedDirs.length, deletedDirs })
  VipConsole.log(`${VipColor.greenBright('clean:')} 已删除 ${deletedDirs.length} 项`)
}

/** `fa clean`：按 glob 删除 dist、缓存、node_modules 等构建产物。 */
export async function cleanMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand(program, CommandEnum.CLEAN, async (args: CleanOptions) => {
    await runClean(args)
  }, (command) => {
    command
      .option('-n,--nuxt', '删除 Nuxt 构建目录（.nuxt、.output）', false)
      .option('-d,--dist', '删除 dist 目录', false)
      .option('-m,--midway', '删除 Midway 构建目录', false)
      .option('-t,--turbo', '删除 Turbo 缓存目录', false)
      .option('--vite', '删除 Vite 缓存目录', false)
      .option('--deps', '删除 node_modules 目录', false)
      .option('-c,--coverage', '删除 coverage 目录', false)
      .option('--git-hooks', '删除 .git/hooks 目录', false)
      .option('-f,--force', '强制删除', false)
      .option('-a,--all', '递归匹配子目录', false)
      .option('--ignore-tips', '跳过确认，直接删除', false)
  })
}
