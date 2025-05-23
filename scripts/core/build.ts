import { VipExecutor, VipInquirer, VipInquirerSeparator, VipMonorepo, VipNodeJS } from '@142vip/utils'

/**
 * 构建、打包
 */
async function buildMain(): Promise<void> {
  const pkgNames = VipMonorepo.getPkgNames(['@142vip/*', '*-demo'])
  const pkg = await VipInquirer.promptSearch('输入需要build的应用：', (input) => {
    const filterNames = pkgNames.filter(pkg => input && pkg.includes(input))
    return [
      ...filterNames,
      new VipInquirerSeparator(),
      'docs',
      'docs-proxy',
    ]
  })

  if (pkg === 'docs') {
    await VipExecutor.commandStandardExecutor('npx vitepress build --minify')
    VipNodeJS.existSuccessProcess()
  }
  if (pkg === 'docs-proxy') {
    await VipExecutor.commandStandardExecutor('NEED_PROXY=true npx vitepress build')
    VipNodeJS.existSuccessProcess()
  }
  await VipExecutor.commandStandardExecutor(`npx turbo run build --filter '${pkg}' --color --only`)
}

void buildMain()
