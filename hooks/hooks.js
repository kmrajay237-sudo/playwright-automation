/**
 * Common hooks for all step definitions
 * Handles browser setup and teardown
 */
const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

// Set timeout for all steps (60 seconds)
setDefaultTimeout(60 * 1000);

// Global context object for sharing data between steps
const testContext = {
  browser: null,
  context: null,
  page: null,
};

/**
 * Before Hook - Runs before each scenario
 * Initializes browser and page context
 */
Before(async function() {
  testContext.browser = await chromium.launch();
  testContext.context = await testContext.browser.createContext();
  testContext.page = await testContext.context.newPage();
  
  // Attach to this context for step files to access
  this.browser = testContext.browser;
  this.context = testContext.context;
  this.page = testContext.page;
});

/**
 * After Hook - Runs after each scenario
 * Cleans up browser and page context
 */
After(async function() {
  if (testContext.context) {
    await testContext.context.close();
  }
  if (testContext.browser) {
    await testContext.browser.close();
  }
  
  // Reset context
  testContext.browser = null;
  testContext.context = null;
  testContext.page = null;
});

module.exports = { testContext };
