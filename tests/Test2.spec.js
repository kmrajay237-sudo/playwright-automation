const {test, expect} = require('@playwright/test');

test('Verify that user is able to navigate between pages in Playwright official website', async ({page}) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
  await page.goto('https://playwright.dev/docs/intro');
  await expect(page).toHaveTitle('Installation | Playwright');
  await page.goBack();
  await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
  await page.goForward();
  await expect(page).toHaveTitle('Installation | Playwright');
  await page.reload();
  await expect(page).toHaveTitle('Installation | Playwright');
});