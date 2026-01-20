const {test, expect} = require('@playwright/test');

test('test', async ({page}) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});