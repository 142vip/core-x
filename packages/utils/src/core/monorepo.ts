import type { PackageJSONWithPath } from './package-json'
import { VipYaml } from '../pkgs'
import { VipNodeJS } from './nodejs'
import { VipNpm } from './npm'
import { VipPackageJSON } from './package-json'

/** 单包仓库：用根 package.json 构造与 `pnpm ls --json` 一致的结构 */
function getRootPackageJSONWithPath(): PackageJSONWithPath[] {
  if (!VipNodeJS.existPath('package.json')) {
    return []
  }
  const manifest = VipPackageJSON.getPackageJSON<PackageJSONWithPath>()
  return [{
    name: manifest.name,
    version: manifest.version ?? '',
    private: Boolean(manifest.private),
    path: VipNodeJS.getProcessCwd(),
  }]
}

/**
 * 获取monorepo下所有包的package.json，返回所有包的路径列表
 */
function getPackageJSONPathList(): string[] {
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

export interface VipMonorepoPkgQueryOptions {
  /**
   * 单包仓且 `pnpm ls` 无命中时是否回退根 `package.json`。
   * `fa release` 等默认 `true`；`fa commit` scope 扫描为 `false`，避免把根包名误并入白名单。
   */
  rootFallback?: boolean
}

/**
 * 获取发布的包名
 * 参考：
 * - pnpm 命令： https://pnpm.io/cli/list
 * - filter参数： https://pnpm.io/filtering
 */
function getReleasePkgJSON(
  filter?: string | string[],
  options?: VipMonorepoPkgQueryOptions,
): PackageJSONWithPath[] {
  // 格式： --filter ./packages/*
  let filterRgx = ''
  if (filter == null || filter.length === 0) {
    return []
  }
  else {
    if (Array.isArray(filter)) {
      for (const f of filter) {
        filterRgx += `--filter "${f}" `
      }
    }
    else {
      filterRgx = `--filter "${filter}"`
    }
  }
  const command = `pnpm ls --json --only-projects ${filterRgx} --depth -1`
  const packages = VipNpm.getPackageJSONByPnpm(command)
  if (packages.length > 0) {
    return packages
  }
  const allowRootFallback = options?.rootFallback !== false
  // filter 未命中且 cwd 下无 pnpm-workspace.yaml：单包文档站等，回退根 package.json（`fa release --vip` 等）
  if (allowRootFallback && !VipNodeJS.existPath('pnpm-workspace.yaml')) {
    return getRootPackageJSONWithPath()
  }
  return []
}

/**
 * 获取某个包的PkgJSON信息
 */
function getPkgJSONPath(
  pkgName: string,
  filter?: string | string[],
  options?: VipMonorepoPkgQueryOptions,
): PackageJSONWithPath | undefined {
  const pkgJSON = getReleasePkgJSON(filter, options)

  return pkgJSON.find(pkg => pkg.name === pkgName)
}

/**
 * 获取所有包名
 * - 仅仅支持pnpm
 * 参考命令：`pnpm ls --json --only-projects ${filter} --depth -1`
 */
function getPkgNames(filter?: string | string[], options?: VipMonorepoPkgQueryOptions): string[] {
  return getReleasePkgJSON(filter, options).map(pkg => pkg.name)
}

export const VipMonorepo = {
  getPackageJSONPathList,
  getPkgNames,
  getReleasePkgJSON,
  getPkgJSONPath,
}
