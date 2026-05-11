import type { VipPackageJSON } from '../core/vip'
import { indexWorkspacePackageJsonGlob } from './glob-package-json'

export { indexWorkspacePackageJsonGlob, normalizeGlobPackageJsonModule } from './glob-package-json'

export interface WorkspacePackageMaps {
  packagesByDir: Record<string, VipPackageJSON>
  appsByDir: Record<string, VipPackageJSON>
}

/**
 * 合并 packages / apps 两处 glob 结果；glob 调用须留在站点主题侧（路径字面量由 Vite 解析）。
 */
export function resolveWorkspacePackageMaps(
  packagesGlob: Record<string, unknown>,
  appsGlob: Record<string, unknown>,
): WorkspacePackageMaps {
  return {
    packagesByDir: indexWorkspacePackageJsonGlob<VipPackageJSON>(packagesGlob),
    appsByDir: indexWorkspacePackageJsonGlob<VipPackageJSON>(appsGlob),
  }
}
