const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { FacebookPage } = require('../pages/FacebookPage');

// Import common hooks
require('../hooks/hooks');

let facebookPage;

Given('I navigate to Facebook', async function() {
  facebookPage = new FacebookPage(this.page);
  await facebookPage.navigateToFacebook();
});

When('I enter email {string}', async function(email) {
  await facebookPage.fill(facebookPage.EMAIL_INPUT, email);
});

When('I enter password {string}', async function(password) {
  await facebookPage.fill(facebookPage.PASSWORD_INPUT, password);
});

When('I click the Facebook login button', async function() {
  await facebookPage.click(facebookPage.LOGIN_BUTTON);
  await this.page.waitForTimeout(3000);
});

Then('I should be logged in to Facebook', async function() {
  const isLoggedIn = await facebookPage.isLoggedIn();
  expect(isLoggedIn).toBeTruthy();
});

When('I click the Facebook logout option', async function() {
  await facebookPage.logout();
});

Then('I should be logged out from Facebook', async function() {
  const isLoggedOut = await facebookPage.isLoggedOut();
  expect(isLoggedOut).toBeTruthy();
});
