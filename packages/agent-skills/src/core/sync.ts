/**
 * 将包内通用 skills 同步到下游项目 `.agents/skills/`。
 * 永不创建 / 覆盖 / 删除 business-map；check 模式只比对、不写盘。
 *
 * 对外类型命名前缀 `VipAgentSkill*`，便于 core-x 等下游继承 / 扩展。
 */
import {
  VipColor,
  VipConsole,
  vipDayjs,
  VipJSON,
  VipNodeJS,
  VipPackageJSON,
} from '@142vip/utils'
import {
  AGENT_SKILLS_BASELINE_FILE_NAME,
  AGENT_SKILLS_BASELINE_NOTE,
  BUSINESS_MAP_SKILL_NAME,
  CORE_SKILL_NAMES,
  DOWNSTREAM_SKILLS_SEGMENTS,
} from './constants'
import {
  copyFile,
  ensureDir,
  filesEqual,
  readdirWithTypes,
  writeTextFile,
} from './fs'
import {
  getPackageName,
  getPackageRoot,
  getSkillsRoot,
  getVersion,
} from './paths'

/**
 * `syncAgentSkills` 入参。
 * 可选布尔在边界用默认参数收口为 `false`，调用方勿再包一层 `Boolean()`。
 */
export interface VipAgentSkillSyncOptions {
  /** 下游项目根目录（绝对或相对路径，内部会 pathResolve） */
  target: string
  /** 只打印将执行的动作，不写盘；默认 false */
  dryRun?: boolean
  /** 目标无 package.json 时仍继续；默认 false */
  force?: boolean
  /**
   * 只比对包内 skills 与目标 `.agents/skills`，不写盘。
   * 不一致时 `ok === false`（由 CLI 以非 0 退出）；默认 false
   */
  check?: boolean
}

/**
 * `syncAgentSkills` 返回值。
 * check 模式下看 `ok` / `drifts`；sync 模式 `ok` 恒为 true。
 */
export interface VipAgentSkillSyncResult {
  /** 本包 npm name（来自 package.json） */
  package: string
  /** 本包 version */
  version: string
  /** 解析后的下游项目根 */
  target: string
  /** 实际写入 / 比对的 skills 目录 */
  dest: string
  /** 本轮处理的 skill 目录名 */
  synced: string[]
  dryRun: boolean
  check: boolean
  /** check 模式下是否一致；sync 模式恒为 true */
  ok: boolean
  /** 不一致的相对路径（相对 dest），如 `code-dev/SKILL.md` */
  drifts: string[]
}

/** 递归列出目录下全部文件的相对路径（posix `/`） */
function listRelativeFilePaths(rootDir: string): string[] {
  const relativeFilePaths: string[] = []
  if (!VipNodeJS.existPath(rootDir))
    return relativeFilePaths

  const walk = (dir: string, prefix: string): void => {
    for (const entry of readdirWithTypes(dir)) {
      const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name
      const absolutePath = VipNodeJS.pathJoin(dir, entry.name)
      if (entry.isDirectory())
        walk(absolutePath, relativePath)
      else if (entry.isFile())
        relativeFilePaths.push(relativePath)
    }
  }
  walk(rootDir, '')
  return relativeFilePaths.sort()
}

function copyDirRecursive(srcDir: string, destDir: string, dryRun: boolean): void {
  if (!VipNodeJS.existPath(srcDir))
    throw new Error(`Source missing: ${srcDir}`)

  const entries = readdirWithTypes(srcDir)
  if (!dryRun)
    ensureDir(destDir)

  for (const entry of entries) {
    const fromPath = VipNodeJS.pathJoin(srcDir, entry.name)
    const toPath = VipNodeJS.pathJoin(destDir, entry.name)
    if (entry.isDirectory()) {
      copyDirRecursive(fromPath, toPath, dryRun)
      continue
    }
    if (!entry.isFile())
      continue
    if (dryRun) {
      VipConsole.log(`  ${VipColor.dim(`copy ${fromPath} -> ${toPath}`)}`)
      continue
    }
    copyFile(fromPath, toPath)
  }
}

/**
 * 比对单个 skill 目录；返回形如 `code-dev/SKILL.md` 的漂移路径。
 */
function collectSkillDrifts(skillName: string, srcDir: string, destDir: string): string[] {
  const driftPaths: string[] = []
  const srcRelativePaths = listRelativeFilePaths(srcDir)

  if (!VipNodeJS.existPath(destDir)) {
    for (const relativeFile of srcRelativePaths)
      driftPaths.push(`${skillName}/${relativeFile}`)
    return driftPaths
  }

  const destRelativePaths = new Set(listRelativeFilePaths(destDir))
  for (const relativeFile of srcRelativePaths) {
    const driftKey = `${skillName}/${relativeFile}`
    const fromPath = VipNodeJS.pathJoin(srcDir, relativeFile)
    const toPath = VipNodeJS.pathJoin(destDir, relativeFile)
    if (!destRelativePaths.has(relativeFile) || !VipNodeJS.existPath(toPath)) {
      driftPaths.push(driftKey)
      continue
    }
    if (!filesEqual(fromPath, toPath))
      driftPaths.push(driftKey)
  }
  return driftPaths
}

/**
 * 同步或校验下游项目的通用 skills。
 */
export function syncAgentSkills(options: VipAgentSkillSyncOptions): VipAgentSkillSyncResult {
  // 可选布尔在解构默认值收口，禁止再 Boolean(...)
  const {
    dryRun = false,
    check = false,
    force = false,
  } = options
  const targetRoot = VipNodeJS.pathResolve(options.target)
  const version = getVersion()
  const packageName = getPackageName()
  const packageRoot = getPackageRoot()
  const skillsRoot = getSkillsRoot()
  const destSkillsDir = VipNodeJS.pathJoin(targetRoot, ...DOWNSTREAM_SKILLS_SEGMENTS)

  // 日志格式：`${包名}:` 着色前缀 + 正文；二级明细缩进 dim
  VipConsole.log(`${VipColor.cyanBright(`${packageName}:`)} ${packageName}@${version}`)
  VipConsole.log(`  ${VipColor.dim(`package ${packageRoot}`)}`)
  VipConsole.log(`  ${VipColor.dim(`target  ${targetRoot}`)}`)
  VipConsole.log(`  ${VipColor.dim(`dest    ${destSkillsDir}`)}`)
  if (check)
    VipConsole.log(`${VipColor.cyanBright(`${packageName}:`)} mode: check`)
  else if (dryRun)
    VipConsole.log(`${VipColor.cyanBright(`${packageName}:`)} mode: dry-run`)

  if (!VipPackageJSON.isExistPackageJSON(targetRoot) && !force) {
    VipConsole.log(
      `${VipColor.yellowBright(`${packageName}:`)} ${VipColor.yellow('target has no package.json — pass --force if intentional')}`,
    )
  }

  const driftPaths: string[] = []
  const syncedSkillNames: string[] = []
  const businessMapPath = VipNodeJS.pathJoin(destSkillsDir, BUSINESS_MAP_SKILL_NAME)

  if (check) {
    for (const skillName of CORE_SKILL_NAMES) {
      const srcDir = VipNodeJS.pathJoin(skillsRoot, skillName)
      const destDir = VipNodeJS.pathJoin(destSkillsDir, skillName)
      if (!VipNodeJS.existPath(srcDir))
        throw new Error(`missing skill in package: ${skillName}`)

      const skillDriftPaths = collectSkillDrifts(skillName, srcDir, destDir)
      if (skillDriftPaths.length) {
        VipConsole.log(
          `${VipColor.yellowBright(`${packageName}:`)} ${VipColor.yellow(`drift ${skillName}: ${skillDriftPaths.length} file(s)`)}`,
        )
        driftPaths.push(...skillDriftPaths)
      }
      else {
        VipConsole.log(`${VipColor.greenBright(`${packageName}:`)} ok ${skillName}`)
      }
      syncedSkillNames.push(skillName)
    }

    if (VipNodeJS.existPath(businessMapPath))
      VipConsole.log(`  ${VipColor.dim(`keep local ${BUSINESS_MAP_SKILL_NAME} (not compared)`)}`)

    if (driftPaths.length) {
      VipConsole.log(
        `${VipColor.yellowBright(`${packageName}:`)} ${VipColor.yellow(`check failed: ${driftPaths.length} drift(s)`)}`,
      )
      VipConsole.log(`  ${VipColor.dim('fix: update package skills, then run vip-agent-skills --target .')}`)
    }
    else {
      VipConsole.log(`${VipColor.greenBright(`${packageName}:`)} check passed: downstream mirrors package skills`)
    }

    return {
      package: packageName,
      version,
      target: targetRoot,
      dest: destSkillsDir,
      synced: syncedSkillNames,
      dryRun: false,
      check: true,
      ok: driftPaths.length === 0,
      drifts: driftPaths,
    }
  }

  if (!dryRun)
    ensureDir(destSkillsDir)

  for (const skillName of CORE_SKILL_NAMES) {
    const srcDir = VipNodeJS.pathJoin(skillsRoot, skillName)
    const destDir = VipNodeJS.pathJoin(destSkillsDir, skillName)
    if (!VipNodeJS.existPath(srcDir))
      throw new Error(`missing skill in package: ${skillName}`)
    VipConsole.log(`${VipColor.cyanBright(`${packageName}:`)} sync ${skillName}`)
    copyDirRecursive(srcDir, destDir, dryRun)
    syncedSkillNames.push(skillName)
  }

  if (VipNodeJS.existPath(businessMapPath))
    VipConsole.log(`  ${VipColor.dim(`keep local ${BUSINESS_MAP_SKILL_NAME} (not touched)`)}`)

  const baseline = {
    package: packageName,
    version,
    // 禁止 new Date()；持久化时间戳用 vipDayjs.formatToISOStr
    syncedAt: vipDayjs.formatToISOStr(),
    skills: syncedSkillNames,
    note: AGENT_SKILLS_BASELINE_NOTE,
  }
  const baselinePath = VipNodeJS.pathJoin(destSkillsDir, AGENT_SKILLS_BASELINE_FILE_NAME)
  if (dryRun) {
    VipConsole.log(`  ${VipColor.dim(`would write ${baselinePath}`)}`)
  }
  else {
    writeTextFile(baselinePath, `${VipJSON.stringify(baseline, undefined, 2)}\n`)
  }

  VipConsole.log(`${VipColor.greenBright(`${packageName}:`)} done: ${syncedSkillNames.length} skill(s)`)

  return {
    package: packageName,
    version,
    target: targetRoot,
    dest: destSkillsDir,
    synced: syncedSkillNames,
    dryRun,
    check: false,
    ok: true,
    drifts: [],
  }
}
