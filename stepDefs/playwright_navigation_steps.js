const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { PlaywrightDocsPage } = require('../pages/PlaywrightDocsPage');
const config = require('../config/config');
const logger = require('../utils/logger');

let playwrightDocsPage;

Given('I navigate to Playwright home page', async function() {
  logger.info('Navigating to Playwright home page...');
  playwrightDocsPage = new PlaywrightDocsPage(this.page);
  await playwrightDocsPage.navigateToPlaywrightHome();
  logger.success('Successfully navigated to Playwright home page');
});

When('I navigate to Playwright docs page', async function() {
  logger.info('Navigating to Playwright docs page...');
  await playwrightDocsPage.navigateToPlaywrightDocs();
  logger.success('Successfully navigated to Playwright docs page');
});

When('I go back to previous page', async function() {
  logger.info('Going back to previous page...');
  await playwrightDocsPage.goBack();
  logger.success('Navigated to previous page');
});

When('I go forward to next page', async function() {
  logger.info('Going forward to next page...');
  await playwrightDocsPage.goForward();
  logger.success('Navigated to next page');
});

When('I reload the page', async function() {
  logger.info('Reloading the page...');
  await playwrightDocsPage.reloadPage();
  logger.success('Page reloaded');
});

Then('the page title should be {string}', async function(expectedTitle) {
  logger.info(`Verifying page title: ${expectedTitle}`);
  const title = await this.page.title();
  expect(title).toBe(expectedTitle);
  logger.success(`Page title verified: ${title}`);
});
