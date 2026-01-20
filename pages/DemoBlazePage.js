const { BasePage } = require('./BasePage');

/**
 * DemoBlazeStore Page Object
 * Contains all selectors and methods related to demoblaze.com
 */
class DemoBlazePage extends BasePage {
  // Selectors
  LOGIN_BUTTON = '#login2';
  LOGOUT_BUTTON = '#logout2';
  LOGIN_USERNAME = '#loginusername';
  LOGIN_PASSWORD = '#loginpassword';
  LOGIN_SUBMIT = 'button:has-text("Log in")';
  WELCOME_MESSAGE = 'a:has-text("Welcome pavanol")';
  CATEGORY_LINK = (categoryName) => `a:has-text("${categoryName}")`;
  PRODUCT_LINK = (productName) => `a:has-text("${productName}")`;
  ADD_TO_CART_BUTTON = 'a:has-text("Add to cart")';
  CART_BUTTON = '#cartur';
  PRODUCT_IN_CART = (productName) => `td:has-text("${productName}")`;
  PLACE_ORDER_BUTTON = "button:has-text('Place Order')";
  
  // Form fields
  NAME_INPUT = '#name';
  COUNTRY_INPUT = '#country';
  CITY_INPUT = '#city';
  CARD_INPUT = '#card';
  MONTH_INPUT = '#month';
  YEAR_INPUT = '#year';
  PURCHASE_BUTTON = "button:has-text('Purchase')";
  
  // Confirmation
  CONFIRMATION_MESSAGE = '.sweet-alert > h2';

  /**
   * Navigate to DemoBlazeStore
   */
  async navigateToDemoBlazeStore() {
    await this.goto('https://www.demoblaze.com/');
  }

  /**
   * Perform login
   */
  async login(username, password) {
    await this.click(this.LOGIN_BUTTON);
    await this.fill(this.LOGIN_USERNAME, username);
    await this.fill(this.LOGIN_PASSWORD, password);
    await this.click(this.LOGIN_SUBMIT);
  }

  /**
   * Verify user is logged in
   */
  async verifyLoginSuccess() {
    return await this.isElementVisible(this.WELCOME_MESSAGE);
  }

  /**
   * Perform logout
   */
  async logout() {
    await this.click(this.LOGOUT_BUTTON);
  }

  /**
   * Verify logout success
   */
  async verifyLogoutSuccess() {
    return await this.isElementVisible(this.LOGIN_BUTTON);
  }

  /**
   * Navigate to category
   */
  async navigateToCategory(categoryName) {
    await this.click(this.CATEGORY_LINK(categoryName));
  }

  /**
   * Click on product
   */
  async selectProduct(productName) {
    await this.click(this.PRODUCT_LINK(productName));
  }

  /**
   * Add product to cart
   */
  async addProductToCart() {
    this.setupDialogHandler();
    await this.click(this.ADD_TO_CART_BUTTON);
    // Wait for dialog to be handled
    await this.page.waitForTimeout(1000);
  }

  /**
   * Go to cart
   */
  async goToCart() {
    await this.click(this.CART_BUTTON);
  }

  /**
   * Verify product in cart
   */
  async verifyProductInCart(productName) {
    return await this.isElementVisible(this.PRODUCT_IN_CART(productName));
  }

  /**
   * Click place order button
   */
  async clickPlaceOrder() {
    await this.click(this.PLACE_ORDER_BUTTON);
  }

  /**
   * Fill order details
   */
  async fillOrderDetails(name, country, city, cardNumber, month, year) {
    await this.fill(this.NAME_INPUT, name);
    await this.fill(this.COUNTRY_INPUT, country);
    await this.fill(this.CITY_INPUT, city);
    await this.fill(this.CARD_INPUT, cardNumber);
    await this.fill(this.MONTH_INPUT, month);
    await this.fill(this.YEAR_INPUT, year);
  }

  /**
   * Complete purchase
   */
  async completePurchase() {
    await this.click(this.PURCHASE_BUTTON);
  }

  /**
   * Get confirmation message
   */
  async getConfirmationMessage() {
    return await this.getTextContent(this.CONFIRMATION_MESSAGE);
  }
}

module.exports = { DemoBlazePage };
