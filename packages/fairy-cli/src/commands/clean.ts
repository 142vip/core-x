import * as process from 'node:process'
import confirm from '@inquirer/confirm'
import { deleteAsync } from 'del'

/**
 * 删除配置
 */
export interface DelOptions {
  dryRun?: boolean
  force?: boolean
  all?: boolean
}

export interface CleanUpOptions extends DelOptions {
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
export async function execCleanUp(args: CleanUpOptions) {
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
