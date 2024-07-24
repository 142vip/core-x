export interface ChangelogOptions {
  packageName?: string
  packageDir?: string
  output: string
}

export function generateChangelog(args: ChangelogOptions) {
  // 指定目录下的模块，生成changelog文档
  if (args.packageDir != null && args.packageName != null) {
    console.log(args.output)
  }
  // 生成根目录下的changelog文档
  else {
    // execCommand(`npx changelog --output ${args.output}`)
  }
}
