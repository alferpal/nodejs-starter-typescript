'use strict'

const { name } = require('./package')

module.exports = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageReporters: ["clover", "json", "lcov", "text", "text-summary" ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    },
  },
  displayName: name,
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig-test.json'
    }
  },
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  name,
  preset: 'ts-jest',
  projects: [
    'packages/*'
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/test/**/*.test.(ts|tsx)'
  ],
  verbose: true
}
