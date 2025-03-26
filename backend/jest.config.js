module.exports = {
  testEnvironment: "node", // Use Node.js environment for backend tests
  testMatch: ["**/src/**/*.test.js"], // Match test files in the `src` directory
  verbose: true, // Show detailed test results
  collectCoverage: true, // Enable coverage reporting
  collectCoverageFrom: ["src/**/*.js"], // Include all JS files in coverage
  coverageDirectory: "coverage", // Output coverage reports to the `coverage` folder
};
