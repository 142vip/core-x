import type { VipPackageCliCommander } from '@142vip/utils'
import type { FairyCommandOptions } from '../fairy.interface'
import {
  VipColor,
  VipConsole,
  VipInquirer,
  vipLogger,
  VipNodeJS,
} from '@142vip/utils'
import { CommandEnum } from '../fairy.interface'
import { deleteByPatterns, logDryRunSteps, registerFairySubcommand } from '../utils'

/**
 * 删除配置
 */
interface DelOptions {
  dryRun?: boolean
  force?: boolean
  all?: boolean
  logger?: boolean
}

interface CleanUpOptions extends DelOptions, FairyCommandOptions {
  dist?: boolean
  nuxt?: boolean
  midway?: boolean
  ignoreTips?: boolean
  turbo?: boolean
  vite?: boolean
  deps?: boolean
  coverage?: boolean
  gitHooks?: boolean
}

/**
 * 生成删除 glob 规则（供 `fa clean` 与单测复用）
 */
export function generateDirPatterns(dirName: string | string[], delAll?: boolean): string[] {
  let delDirs: string[] = []

  if (typeof dirName === 'string') {
    delDirs.push(dirName)
  }
  else {
    delDirs.push(...dirName)
  }

  if (delAll) {
    delDirs = delDirs.map(dir => dir.startsWith('!') ? `!**/${dir.substring(1)}` : `**/${dir}`)
  }
  else {
    delDirs = delDirs.map(dir => `${dir}`)
  }

  return delDirs
}

/**
 * 删除文件或文件夹
 * - 恢复项目初始状态
 */
async function execCleanUp(args: CleanUpOptions): Promise<void> {
  const dirPatterns: string[] = []

  if (args.deps) {
    dirPatterns.push(...generateDirPatterns('node_modules', args.all))
  }

  if (args.dist) {
    dirPatterns.push(...generateDirPatterns(['dist', '!node_modules/**/dist'], args.all))
  }

  if (args.nuxt) {
    dirPatterns.push(...generateDirPatterns(['.nuxt', '.output'], args.all))
  }

  if (args.midway) {
    dirPatterns.push(...generateDirPatterns(['run', 'logs', 'typings'], args.all))
  }

  if (args.turbo) {
    dirPatterns.push(...generateDirPatterns('.turbo', args.all))
  }

  if (args.vite) {
    dirPatterns.push(...generateDirPatterns('.vite', args.all))
  }

  if (args.coverage) {
    dirPatterns.push(...generateDirPatterns('coverage', args.all))
  }

  if (args.gitHooks) {
    dirPatterns.push(...generateDirPatterns('.git/hooks', args.all))
  }

  if (dirPatterns.length === 0) {
    vipLogger.log(VipColor.red('删除规则为空，不做删除操作处理，请传入有效参数！！'))
    return VipNodeJS.existErrorProcess()
  }

  if (!args.ignoreTips && !args.dryRun) {
    const deleted = await VipInquirer.promptConfirm('是否需要删除?', true)

    if (!deleted) {
      return VipNodeJS.existErrorProcess()
    }
  }

  const deletedDirs = await deleteByPatterns(dirPatterns, {
    dryRun: args.dryRun,
    force: args.force,
  })

  if (args.dryRun) {
    logDryRunSteps('clean', [
      `匹配规则: ${dirPatterns.join(', ')}`,
      ...deletedDirs.map(target => `rm -rf ${target}`),
    ])
  }

  if (args.logger) {
    VipConsole.trace('删除规则：', dirPatterns)
    vipLogger.println()
    VipConsole.trace('删除的文件和目录：', deletedDirs)
  }
}

/**
 * fairy-cli clean 项目清理
 */
export async function cleanUpMain(program: VipPackageCliCommander): Promise<void> {
  registerFairySubcommand(program, CommandEnum.CLEAN, async (args: CleanUpOptions) => {
    await execCleanUp(args)
  }, (command) => {
    command
      .option('-n,--nuxt', '删除nuxt构建目录，包括.nuxt、.output目录', false)
      .option('-d,--dist', '删除dist目录', false)
      .option('-m,--midway', '删除midway构建目录', false)
      .option('-t,--turbo', '删除turbo缓存目录', false)
      .option('--vite', '删除vite缓存目录', false)
      .option('--deps', '删除node_modules目录', false)
      .option('-c,--coverage', '删除coverage目录', false)
      .option('--git-hooks', '删除.git/hooks目录', false)
      .option('-f,--force', '强制删除，默认值：false', false)
      .option('-a,--all', '深度删除所有', false)
      .option('--ignore-tips', '忽略提示，直接删除', false)
  })
}
