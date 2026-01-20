const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('@playwright/test');
const { PlaywrightDocsPage } = require('../pages/PlaywrightDocsPage');
const config = require('../config/config');

let browser;
let context;
let page;
let playwrightDocsPage;

Before(async function() {
  browser = await chromium.launch();
  context = await browser.createContext();
  page = await context.newPage();
  playwrightDocsPage = new PlaywrightDocsPage(page);
});

After(async function() {
  await context.close();
  await browser.close();
});

Given('I navigate to Playwright home page', async function() {
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
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});
