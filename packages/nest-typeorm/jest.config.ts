import { createDefaultPreset } from 'ts-jest'

const tsJestTransformCfg = createDefaultPreset().transform

/** @type {import("jest").Config} **/
export default {
  testEnvironment: 'node',
  transform: {
    ...tsJestTransformCfg,
  },
  testMatch: [
    // "**/__tests__/**/*.[jt]s?(x)",
    '**/test/**/?(*.)+(spec|test).[tj]s?(x)',
  ],
}
