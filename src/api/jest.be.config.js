module.exports = {
  name: 'backend',
  displayName: 'backend',
  rootDir: '../../',
  globalSetup: '<rootDir>/setupTestEnvVars.ts',
  setupFilesAfterEnv: ['<rootDir>/src/api/__test__/setupTests.ts'],
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src$1',
  },
  testMatch: ['**/api/**/*.test.ts'],
};
