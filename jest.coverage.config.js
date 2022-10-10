/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx}',
    '!**/__tests__/**',
    '!**/__test__/**',
    '!src/constants/**',
    '!src/libs/**',
    '!src/types/**',
    '!**/jest*.config.js',
  ],
  coverageReporters: ['lcov'],
  projects: ['src/jest.fe.config.js', 'src/api/jest.be.config.js'],
};
