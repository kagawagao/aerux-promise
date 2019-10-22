module.exports = {
  collectCoverage: true,

  coverageDirectory: 'coverage',

  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest'
  }
}
