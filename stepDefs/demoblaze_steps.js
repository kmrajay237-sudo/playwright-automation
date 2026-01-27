const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { DemoBlazePage } = require('../pages/DemoBlazePage');
const config = require('../config/config');
const logger = require('../utils/logger');

let demoBlazePage;

// Initialize page object in each scenario
Given('I navigate to DemoBlazeStore website', async function() {
  logger.info('Navigating to DemoBlazeStore website...');
  demoBlazePage = new DemoBlazePage(this.page);
  await demoBlazePage.navigateToDemoBlazeStore();
  logger.success('Successfully navigated to DemoBlazeStore');
});

// Login steps
When('I enter username {string}', async function(username) {
  logger.debug(`Entering username: ${username}`);
  await demoBlazePage.fill(demoBlazePage.LOGIN_USERNAME, username);
});

When('I enter password {string}', async function(password) {
  logger.debug('Entering password');
  await demoBlazePage.fill(demoBlazePage.LOGIN_PASSWORD, password);
});

When('I click the login button', async function() {
  logger.info('Clicking login button');
  await demoBlazePage.click(demoBlazePage.LOGIN_SUBMIT);
  logger.success('Login button clicked');
});

Then('I should see the welcome message {string}', async function(message) {
  logger.info(`Verifying welcome message: ${message}`);
  const welcomeElement = this.page.locator(`a:has-text("${message}")`);
  await expect(welcomeElement).toBeVisible();
  logger.success(`Welcome message verified: ${message}`);
});

// Login with credentials (for background)
Given('I am logged in to DemoBlazeStore with username {string} and password {string}', async function(username, password) {
  logger.info(`Logging in to DemoBlazeStore with username: ${username}`);
  demoBlazePage = new DemoBlazePage(this.page);
  await demoBlazePage.login(username, password);
  await this.page.waitForTimeout(1000);
  logger.success('Successfully logged in to DemoBlazeStore');
});

// Logout steps
When('I click the logout button', async function() {
  logger.info('Clicking logout button');
  await demoBlazePage.logout();
  logger.success('Logout button clicked');
});

Then('I should see the login button', async function() {
  logger.info('Verifying login button is visible');
  const loginButton = this.page.locator('#login2');
  await expect(loginButton).toBeVisible();
  logger.success('Login button is visible - logout verified');
});

// Shopping steps
When('I navigate to category {string}', async function(category) {
  logger.info(`Navigating to category: ${category}`);
  await demoBlazePage.navigateToCategory(category);
  logger.success(`Navigated to category: ${category}`);
});

When('I select product {string}', async function(productName) {
  logger.info(`Selecting product: ${productName}`);
  await demoBlazePage.selectProduct(productName);
  logger.success(`Product selected: ${productName}`);
});

When('I click add to cart button', async function() {
  logger.info('Clicking add to cart button');
  await demoBlazePage.addProductToCart();
  logger.success('Product added to cart');
});

When('I navigate to cart', async function() {
  logger.info('Navigating to cart');
  await demoBlazePage.goToCart();
  logger.success('Cart page opened');
});

Then('I should see product {string} in cart', async function(productName) {
  logger.info(`Verifying product in cart: ${productName}`);
  const isVisible = await demoBlazePage.verifyProductInCart(productName);
  expect(isVisible).toBeTruthy();
  logger.success(`Product verified in cart: ${productName}`);
});

When('I click place order button', async function() {
  logger.info('Clicking place order button');
  await demoBlazePage.clickPlaceOrder();
  logger.success('Order form opened');
});

When('I fill order details with:', async function(dataTable) {
  logger.info('Filling order details');
  const data = dataTable.rowsHash();
  await demoBlazePage.fillOrderDetails(
    data.name,
    data.country,
    data.city,
    data.card,
    data.month,
    data.year
  );
  logger.success('Order details filled');
});

When('I click purchase button', async function() {
  logger.info('Clicking purchase button');
  await demoBlazePage.completePurchase();
  logger.success('Purchase button clicked');
});

Then('I should see confirmation message {string}', async function(message) {
  logger.info(`Verifying confirmation message: ${message}`);
  const confirmationElement = this.page.locator('.sweet-alert > h2');
  await expect(confirmationElement).toHaveText(message);
  logger.success(`Confirmation message verified: ${message}`);
});
