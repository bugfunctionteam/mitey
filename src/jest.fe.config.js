module.exports = {
  name: 'frontend',
  displayName: 'frontend',
  rootDir: '../',
  preset: 'jest-preset-preact',
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/src/api', '<rootDir>/.next'],
};