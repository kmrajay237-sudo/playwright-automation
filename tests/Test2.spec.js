const {test, expect} = require('@playwright/test');
const { PlaywrightDocsPage } = require('../pages/PlaywrightDocsPage');
const config = require('../config/config');

test.skip('Verify that user is able to navigate between pages in Playwright official website', async ({page}) => {
  const playwrightDocsPage = new PlaywrightDocsPage(page);
  
  await playwrightDocsPage.navigateToPlaywrightHome();
  await expect(page).toHaveTitle(config.titles.playwrightHome);
  
  await playwrightDocsPage.navigateToPlaywrightDocs();
  await expect(page).toHaveTitle(config.titles.playwrightDocs);
  
  await playwrightDocsPage.goBack();
  await expect(page).toHaveTitle(config.titles.playwrightHome);
  
  await playwrightDocsPage.goForward();
  await expect(page).toHaveTitle(config.titles.playwrightDocs);
  
  await playwrightDocsPage.reloadPage();
  await expect(page).toHaveTitle(config.titles.playwrightDocs);
});