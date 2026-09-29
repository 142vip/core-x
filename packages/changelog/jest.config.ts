import { createDefaultPreset } from 'ts-jest'

const tsJestTransformCfg = createDefaultPreset().transform

/** @type {import("jest").Config} **/
export default {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  transform: tsJestTransformCfg,
  testMatch: [
    '**/test/**/?(*.)+(spec|test).[tj]s?(x)',
  ],
}
