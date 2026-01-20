/**
 * Configuration file for URLs and environment-specific settings
 */
const config = {
  // Base URLs
  urls: {
    demoBlazeStore: 'https://www.demoblaze.com/',
    playwrightHome: 'https://playwright.dev/',
    playwrightDocs: 'https://playwright.dev/docs/intro',
  },

  // Default credentials
  credentials: {
    username: 'pavanol',
    password: 'test@123',
  },

  // Page titles
  titles: {
    demoBlaze: 'STORE',
    playwrightHome: 'Fast and reliable end-to-end testing for modern web apps | Playwright',
    playwrightDocs: 'Installation | Playwright',
  },

  // Timeouts (in milliseconds)
  timeouts: {
    dialogWait: 1000,
    elementWait: 5000,
    pageWait: 10000,
  },
};

module.exports = config;
