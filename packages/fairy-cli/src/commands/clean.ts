import * as process from 'node:process'
import confirm from '@inquirer/confirm'
import { deleteAsync } from 'del'
import type { Command } from 'commander'
import { CliCommandEnum } from '../shared'

/**
 * 删除配置
 */
interface DelOptions {
  dryRun?: boolean
  force?: boolean
  all?: boolean
}

interface CleanUpOptions extends DelOptions {
  dist?: boolean
  nuxt?: boolean
  midway?: boolean
  ignoreTips?: boolean
  turbo?: boolean
  vite?: boolean
}

/**
 * 删除文件或文件夹
 * - 恢复项目初始状态
 */
async function execCleanUp(args: CleanUpOptions) {
  // 默认删除node_modules
  const dirPatterns = generateDirPatterns('node_modules', args.all)

  // 删除各层级dist目录，dist
  if (args.dist) {
    dirPatterns.push(...generateDirPatterns('dist', args.all))
  }

  // 删除nuxt构建目录，.nuxt output
  if (args.nuxt) {
    dirPatterns.push(...generateDirPatterns(['.nuxt', 'output'], args.all))
  }

  // 删除midway构建目录，run logs
  if (args.midway) {
    dirPatterns.push(...generateDirPatterns(['run', 'logs'], args.all))
  }

  // 删除turbo缓存目录
  if (args.turbo) {
    dirPatterns.push(...generateDirPatterns('.turbo', args.all))
  }

  // 删除vite缓存目录
  if (args.vite) {
    dirPatterns.push(...generateDirPatterns('.vite', args.all))
  }

  // 删除前，对话框确认
  if (!args.ignoreTips) {
    const deleted = await confirm({
      message: '是否需要删除?',
      default: true,
    })

    if (!deleted) {
      // 不删除，非0退出
      process.exit(1)
    }
  }

  // 需要删除的目录
  console.log('删除规则：', dirPatterns)

  // 删除
  const deletedDirs = await deleteAsync(dirPatterns, {
    dryRun: args.dryRun,
    force: args.force,
    dot: true,
  })
  console.log(deletedDirs)
}

function generateDirPatterns(dirName: string | string[], delAll?: boolean) {
  let delDirs: string[] = []

  if (typeof dirName === 'string') {
    delDirs.push(dirName)
  }
  else {
    delDirs.push(...dirName)
  }

  if (delAll) {
    // 删除程序上下文中所有的该目录
    delDirs = delDirs.map(dir => `**/${dir}`)
  }
  else {
    // 只删除该目录
    delDirs = delDirs.map(dir => `${dir}`)
  }

  return delDirs
}

/**
 * fairy-cli clean 项目清理
 * @param program
 */
export async function cleanUpMain(program: Command) {
  program
    .command(CliCommandEnum.CLEAN)
    .description('清除开发、构建等环境下的无用目录')
    .option('-n,--nuxt', '删除nuxt构建目录', false)
    .option('-d,--dist', '删除dist目录', false)
    .option('-m,--midway', '删除midway构建目录', false)
    .option('-f,--force', '强制删除，默认值：false', false)
    .option('--all', '深度删除所有', false)
    .option('--ignore-tips', '忽略提示，直接删除', false)
    .option('--dry-run', '试运行，不做实际删除操作', false)
    .option('--turbo', '删除turbo缓存目录', true)
    .option('--vite', '删除vite缓存目录', true)
    .action(async (args: CleanUpOptions) => {
      await execCleanUp(args)
    })
}
