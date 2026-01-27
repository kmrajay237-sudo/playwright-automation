const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { FacebookPage } = require('../pages/FacebookPage');
const logger = require('../utils/logger');

let facebookPage;

Given('I navigate to Facebook', async function() {
  logger.info('Navigating to Facebook...');
  facebookPage = new FacebookPage(this.page);
  await facebookPage.navigateToFacebook();
  logger.success('Successfully navigated to Facebook');
});

When('I enter email {string}', async function(email) {
  logger.debug(`Entering email: ${email}`);
  await facebookPage.fill(facebookPage.EMAIL_INPUT, email);
});

When('I enter password {string}', async function(password) {
  logger.debug('Entering password');
  await facebookPage.fill(facebookPage.PASSWORD_INPUT, password);
});

When('I click the Facebook login button', async function() {
  logger.info('Clicking Facebook login button');
  await facebookPage.click(facebookPage.LOGIN_BUTTON);
  await this.page.waitForTimeout(3000);
  logger.success('Login button clicked');
});

Then('I should be logged in to Facebook', async function() {
  logger.info('Verifying Facebook login status');
  const isLoggedIn = await facebookPage.isLoggedIn();
  expect(isLoggedIn).toBeTruthy();
  logger.success('Successfully logged in to Facebook');
});

When('I click the Facebook logout option', async function() {
  logger.info('Clicking Facebook logout option');
  await facebookPage.logout();
  logger.success('Logout option clicked');
});

Then('I should be logged out from Facebook', async function() {
  logger.info('Verifying Facebook logout status');
  const isLoggedOut = await facebookPage.isLoggedOut();
  expect(isLoggedOut).toBeTruthy();
  logger.success('Successfully logged out from Facebook');
});
