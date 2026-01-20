/**
 * Cucumber configuration
 */
module.exports = {
  default: {
    require: ['stepDefs/**/*.js'],
    requireModule: ['@babel/register'],
    format: [
      'progress-bar',
      'html:cucumber-report.html',
      'json:cucumber-report.json',
      '@cucumber/pretty'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    }
  }
};
