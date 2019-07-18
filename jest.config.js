module.exports = {
  collectCoverageFrom: ['src/**/*.js', '!src/**/*.spec.js'],
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10,
    },
  },
  testRegex: '.spec\\.js$',
};
