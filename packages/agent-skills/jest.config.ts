import { createDefaultPreset } from 'ts-jest'

const tsJestTransformCfg = createDefaultPreset().transform

/** @type {import("jest").Config} **/
export default {
  testEnvironment: 'node',
  transform: tsJestTransformCfg,
  testMatch: [
    '**/test/**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    // 纯 re-export；加载会连带编译 paths.ts 的 import.meta
    '!src/index.ts',
    // paths.ts 使用 import.meta，CJS 下的 ts-jest 无法插桩
    '!src/core/paths.ts',
  ],
}
