module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**"],
  coverageDirectory: "__tests__/coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.test.js?(x)"
  ],
};
