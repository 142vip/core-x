import * as execa from 'execa'

// export async function execCommand(cmd: string, args: string[], options?: Options) {
//   const { execa } = await import('execa')
//   const res = await execa(cmd, args, options)
//   return (res?.stdout as string)?.trim() || ''
// }

export async function execCommand(cmd: string) {
  const execResult = await execa.commandSync(cmd)

  // 非零退出
  if (execResult.exitCode !== 0) {
    process.exit(execResult.exitCode)
  }
  return (execResult?.stdout)?.trim() || ''
}
