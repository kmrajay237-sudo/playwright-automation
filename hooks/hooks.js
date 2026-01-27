/**
 * Common hooks for all step definitions
 * Handles browser setup and teardown
 */
const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const logger = require('../utils/logger');

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
Before(async function(scenario) {
  try {
    const scenarioName = scenario.pickle?.name || 'Unknown Scenario';
    const stepsCount = scenario.pickle?.steps?.length || 0;
    
    logger.section(`Starting Scenario: ${scenarioName}`);
    logger.info(`Total steps: ${stepsCount}`);
    
    logger.debug('Launching chromium browser...');
    testContext.browser = await chromium.launch();
    logger.success('Browser launched successfully');
    
    logger.debug('Creating new context...');
    testContext.context = await testContext.browser.newContext();
    logger.success('Context created successfully');
    
    logger.debug('Creating new page...');
    testContext.page = await testContext.context.newPage();
    logger.success('Page created successfully');
    
    // Attach to this context for step files to access
    this.browser = testContext.browser;
    this.context = testContext.context;
    this.page = testContext.page;
    
    logger.info('✓ Test environment ready');
  } catch (error) {
    logger.error('Failed to initialize test environment', error);
    throw error;
  }
});

/**
 * After Hook - Runs after each scenario
 * Cleans up browser and page context
 * Takes screenshots on failure and attaches them to report
 */
After(async function(scenario) {
  const path = require('path');
  const fs = require('fs');
  
  try {
    const scenarioName = scenario.pickle?.name || 'Unknown Scenario';
    const status = scenario.result?.status || 'unknown';
    
    logger.section(`Ending Scenario: ${scenarioName}`);
    logger.info(`Scenario status: ${status}`);
    
    // Take screenshot on failure
    if (status === 'FAILED' && testContext.page) {
      try {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        const sanitizedName = scenarioName.replace(/[^a-zA-Z0-9-_]/g, '_');
        const screenshotName = `${sanitizedName}_${timestamp}.png`;
        const screenshotPath = path.join(__dirname, '..', 'screenshots', screenshotName);
        
        logger.debug(`Taking screenshot for failed scenario: ${screenshotName}`);
        await testContext.page.screenshot({ path: screenshotPath });
        logger.success(`Screenshot saved: ${screenshotName}`);
        
        // Attach screenshot to Cucumber report
        try {
          const screenshotBuffer = fs.readFileSync(screenshotPath);
          this.attach(screenshotBuffer, 'image/png');
          logger.success(`Screenshot attached to report: ${screenshotName}`);
        } catch (attachError) {
          logger.error('Failed to attach screenshot to report', attachError);
        }
      } catch (screenshotError) {
        logger.error('Failed to take screenshot', screenshotError);
      }
    }
    
    if (testContext.context) {
      logger.debug('Closing context...');
      await testContext.context.close();
      logger.success('Context closed');
    }
    
    if (testContext.browser) {
      logger.debug('Closing browser...');
      await testContext.browser.close();
      logger.success('Browser closed');
    }
    
    // Reset context
    testContext.browser = null;
    testContext.context = null;
    testContext.page = null;
    
    logger.info('✓ Test cleanup completed\n');
  } catch (error) {
    logger.error('Error during test cleanup', error);
  }
});

module.exports = { testContext };
