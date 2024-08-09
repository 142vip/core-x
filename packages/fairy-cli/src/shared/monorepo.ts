import fsSync from 'node:fs'
import fs from 'node:fs/promises'
import yaml from 'js-yaml'

const pnpmYamlFileName = 'pnpm-workspace.yaml'

/**
 * pnpm-workspace.yaml 存在时
 * 获取monorepo下所有包的package.json
 */
export async function getPackageListInMonorepo() {
  const pnpmWorkspace = fsSync.existsSync(pnpmYamlFileName)
  const packageJSONList: string[] = []

  if (pnpmWorkspace) {
    // read pnpm-workspace.yaml
    const pnpmWorkspace = await fs.readFile(pnpmYamlFileName, 'utf8')
    // parse yaml
    const workspaces = yaml.load(pnpmWorkspace) as { packages: string[] }
    // append package.json to each workspace string
    const workspacesWithPackageJson = workspaces.packages.map(workspace => `${workspace}/package.json`)

    // start with ! or already in files should be excluded
    packageJSONList.concat(workspacesWithPackageJson.filter(workspace => !workspace.startsWith('!')))
  }

  // 如果根目录下的package.json存在，则返回根目录下的package.json
  if (fsSync.existsSync(pnpmYamlFileName)) {
    packageJSONList.push('package.json')
  }
  return packageJSONList
}
