const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { PlaywrightDocsPage } = require('../pages/PlaywrightDocsPage');
const config = require('../config/config');

// Import common hooks
require('../hooks/hooks');

let playwrightDocsPage;

Given('I navigate to Playwright home page', async function() {
  playwrightDocsPage = new PlaywrightDocsPage(this.page);
  await playwrightDocsPage.navigateToPlaywrightHome();
});

When('I navigate to Playwright docs page', async function() {
  await playwrightDocsPage.navigateToPlaywrightDocs();
});

When('I go back to previous page', async function() {
  await playwrightDocsPage.goBack();
});

When('I go forward to next page', async function() {
  await playwrightDocsPage.goForward();
});

When('I reload the page', async function() {
  await playwrightDocsPage.reloadPage();
});

Then('the page title should be {string}', async function(expectedTitle) {
  const title = await this.page.title();
  expect(title).toBe(expectedTitle);
});
