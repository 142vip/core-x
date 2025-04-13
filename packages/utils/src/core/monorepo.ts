import { VipYaml } from '../pkgs'
import { VipNodeJS } from './nodejs'

/**
 * 获取monorepo下所有包的package.json，返回所有包的路径列表
 */
async function getPackageJSONPathList(): Promise<string[]> {
  const pnpmYamlFileName = 'pnpm-workspace.yaml'
  const pnpmWorkspace = VipNodeJS.existPath(pnpmYamlFileName)
  const packageJSONList: string[] = []

  // 存在pnpm monorepo
  if (pnpmWorkspace) {
    // read pnpm-workspace.yaml
    const pnpmWorkspace = VipNodeJS.readFileToStrByUTF8(pnpmYamlFileName)
    // parse yaml
    const workspaces = VipYaml.load(pnpmWorkspace) as { packages: string[] }
    // append package.json to each workspace string
    const workspacesWithPackageJson = workspaces.packages.map(workspace => `${workspace}/package.json`)

    // start with ! or already in files should be excluded
    packageJSONList.concat(workspacesWithPackageJson.filter(workspace => !workspace.startsWith('!')))
  }

  // 如果根目录下的package.json存在，则返回根目录下的package.json
  if (VipNodeJS.existPath('package.json')) {
    packageJSONList.push('package.json')
  }

  return packageJSONList
}

export const VipMonorepo = {
  getPackageJSONPathList,
}
