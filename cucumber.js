/**
 * Cucumber configuration - compatible with CI/CD environments
 */
const isCI = !!process.env.CI;

module.exports = {
  default: {
    require: [
      'hooks/**/*.js',
      'stepDefs/**/*.js'
    ],
    format: [
      'progress-bar',
      'html:cucumber-report.html',
      'json:cucumber-report.json'
    ],
    strict: isCI,
    failFast: false,
    timeout: 60000,
    parallel: isCI ? 2 : 1
  }
};
