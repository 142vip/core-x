#!/usr/bin/env node

'use strict'

/**
 * CJS CLI 入口：下游项目与 monorepo 均可 `pnpm exec vip-agent-skills`。
 * 依赖 dist/cli.cjs，改源码后需先 build。
 */
const process = require('node:process')

try {
  const { runCli } = require('../dist/cli.cjs')
  runCli()
}
catch (err) {
  const message = err && err.message ? err.message : err
  console.error(
    'agent-skills: failed to load CLI. Run `pnpm --filter @142vip/agent-skills build` first.',
  )
  console.error(message)
  process.exit(1)
}
