module.exports = {
  rootDir: './',
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src$1',
  },
  modulePathIgnorePatterns: ['.next'],
  projects: [
    'src/jest.fe.config.js',
    'src/api/jest.be.config.js',
  ],
};
