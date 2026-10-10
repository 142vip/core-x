#!/usr/bin/env node
'use strict'

/**
 * `@142vip/fairy-cli` 的 npm `postinstall`。根项目不必再写 `package.json` → `postinstall`。
 *
 * 何时运行：下游或本仓执行 `pnpm i` / `npm i` 且未 `--ignore-scripts` 时，由包管理器调用。
 *
 * 行为：
 * 1. `FAIRY_SKIP_POSTINSTALL=1` → 直接返回。
 * 2. 从本包目录向上找 `fairy.config.ts|js|mjs|cjs`。找不到则返回（装进无 fairy 配置的项目时无副作用）。
 * 3. 本包路径含 `node_modules`（npm 发布物，`files` 已含 `dist`）→ 不编译。
 *    本包是仓库源码（如 core-x 的 `packages/fairy-cli`）→ 先 `pnpm --filter @142vip/fairy-cli... build`，生成 `dist` 后才能跑 `fa`。
 * 4. `node bin/fa.cjs install --hook-only postinstall`：执行项目 `fairy.config` → `hooks.postinstall`，并写入 git hooks（`CI=true` 时跳过写钩子）。
 *
 * 与 `fa i` / `fa ci` 的关系：未 `--ignore-scripts` 时安装过程已触发本脚本，命令本身不再重复跑 postinstall hook。
 * 克隆仓库后的安装入口：`pnpm i`、`npx fa ci`、`npx fa i -f`。三者都会装依赖；本仓源码还会在此脚本里编译 fa 并执行 `hooks.postinstall`。
 */
const { execSync, spawnSync } = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')
const process = require('node:process')

const FAIRY_CONFIG_NAMES = ['fairy.config.ts', 'fairy.config.js', 'fairy.config.mjs', 'fairy.config.cjs']

function findFairyProjectRoot(startDir) {
  let dir = path.resolve(startDir)
  const { root } = path.parse(dir)
  while (true) {
    for (const name of FAIRY_CONFIG_NAMES) {
      if (fs.existsSync(path.join(dir, name)))
        return dir
    }
    if (dir === root)
      break
    dir = path.dirname(dir)
  }
  return null
}

/** 发布到 npm 后落在依赖目录里；dist 已随包发布，禁止再按 workspace 包名编译 */
function isPublishedInstall(fairyPkgRoot) {
  return fairyPkgRoot.split(path.sep).includes('node_modules')
}

function main() {
  if (process.env.FAIRY_SKIP_POSTINSTALL === '1')
    return

  const fairyPkgRoot = path.resolve(__dirname, '..')
  const projectRoot = findFairyProjectRoot(fairyPkgRoot) ?? findFairyProjectRoot(process.cwd())
  if (projectRoot == null)
    return

  if (!isPublishedInstall(fairyPkgRoot)) {
    execSync('pnpm --filter @142vip/fairy-cli... build', {
      cwd: projectRoot,
      stdio: 'inherit',
      env: process.env,
    })
  }

  const distEntry = path.join(fairyPkgRoot, 'dist', 'fairy-cli.cjs')
  if (!fs.existsSync(distEntry)) {
    console.warn('[@142vip/fairy-cli] 跳过 hooks.postinstall：缺少 dist/fairy-cli.cjs')
    return
  }

  const result = spawnSync(process.execPath, [
    path.join(fairyPkgRoot, 'bin', 'fa.cjs'),
    'install',
    '--hook-only',
    'postinstall',
  ], {
    cwd: projectRoot,
    stdio: 'inherit',
    env: process.env,
  })
  if (result.status !== 0)
    process.exit(result.status ?? 1)
}

main()
