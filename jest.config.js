const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const isCI = process.env.CI === 'true'
const isHuskyHook = !!process.env.HUSKY

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.d.ts',
    '!src/pages/_app.js',
    '!src/pages/_document.js',
  ],
  // Enforce coverage thresholds only in CI. Disable during local Husky hooks to avoid blocking commits.
  coverageThreshold: isCI && !isHuskyHook ? {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  } : undefined,
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx}',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
