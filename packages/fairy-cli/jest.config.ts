import { createDefaultPreset } from 'ts-jest'

const tsJestTransformCfg = createDefaultPreset().transform

/** @type {import("jest").Config} **/
export default {
  testEnvironment: 'node',
  moduleNameMapper: {
    // 与 `test/fixtures/commit-linter.fixture.cjs` 成对；见夹具文件头注释
    '^@142vip/eslint-config$': '<rootDir>/test/fixtures/eslint-config.fixture.cjs',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  transform: {
    ...tsJestTransformCfg,
  },
  testMatch: [
    // "**/__tests__/**/*.[jt]s?(x)",
    '**/test/**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 64,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
}
