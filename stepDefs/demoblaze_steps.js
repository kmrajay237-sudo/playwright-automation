const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('@playwright/test');
const { DemoBlazePage } = require('../pages/DemoBlazePage');
const config = require('../config/config');

let browser;
let context;
let page;
let demoBlazePage;

Before(async function() {
  browser = await chromium.launch();
  context = await browser.createContext();
  page = await context.newPage();
  demoBlazePage = new DemoBlazePage(page);
});

After(async function() {
  await context.close();
  await browser.close();
});

// Background steps
Given('I navigate to DemoBlazeStore website', async function() {
  await demoBlazePage.navigateToDemoBlazeStore();
});

// Login steps
When('I enter username {string}', async function(username) {
  await demoBlazePage.fill(demoBlazePage.LOGIN_USERNAME, username);
});

When('I enter password {string}', async function(password) {
  await demoBlazePage.fill(demoBlazePage.LOGIN_PASSWORD, password);
});

When('I click the login button', async function() {
  await demoBlazePage.click(demoBlazePage.LOGIN_SUBMIT);
});

Then('I should see the welcome message {string}', async function(message) {
  const welcomeElement = page.locator(`a:has-text("${message}")`);
  await expect(welcomeElement).toBeVisible();
});

// Login with credentials (for background)
Given('I am logged in to DemoBlazeStore with username {string} and password {string}', async function(username, password) {
  await demoBlazePage.login(username, password);
  await page.waitForTimeout(1000);
});

// Logout steps
When('I click the logout button', async function() {
  await demoBlazePage.logout();
});

Then('I should see the login button', async function() {
  const loginButton = page.locator('#login2');
  await expect(loginButton).toBeVisible();
});

// Shopping steps
When('I navigate to category {string}', async function(category) {
  await demoBlazePage.navigateToCategory(category);
});

When('I select product {string}', async function(productName) {
  await demoBlazePage.selectProduct(productName);
});

When('I click add to cart button', async function() {
  await demoBlazePage.addProductToCart();
});

When('I navigate to cart', async function() {
  await demoBlazePage.goToCart();
});

Then('I should see product {string} in cart', async function(productName) {
  const isVisible = await demoBlazePage.verifyProductInCart(productName);
  expect(isVisible).toBeTruthy();
});

When('I click place order button', async function() {
  await demoBlazePage.clickPlaceOrder();
});

When('I fill order details with:', async function(dataTable) {
  const data = dataTable.rowsHash();
  await demoBlazePage.fillOrderDetails(
    data.name,
    data.country,
    data.city,
    data.card,
    data.month,
    data.year
  );
});

When('I click purchase button', async function() {
  await demoBlazePage.completePurchase();
});

Then('I should see confirmation message {string}', async function(message) {
  const confirmationElement = page.locator('.sweet-alert > h2');
  await expect(confirmationElement).toHaveText(message);
});
