/**
 * Base Page class containing common methods and properties
 */
class BasePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to a URL
   */
  async goto(url) {
    await this.page.goto(url);
  }

  /**
   * Get page title
   */
  async getTitle() {
    return await this.page.title();
  }

  /**
   * Click on an element
   */
  async click(selector) {
    await this.page.click(selector);
  }

  /**
   * Fill text in an input field
   */
  async fill(selector, text) {
    await this.page.fill(selector, text);
  }

  /**
   * Get text content of an element
   */
  async getTextContent(selector) {
    return await this.page.locator(selector).textContent();
  }

  /**
   * Wait for element visibility
   */
  async waitForElement(selector) {
    await this.page.waitForSelector(selector);
  }

  /**
   * Check if element is visible
   */
  async isElementVisible(selector) {
    return await this.page.locator(selector).isVisible();
  }

  /**
   * Accept dialogs
   */
  setupDialogHandler() {
    this.page.on('dialog', async dialog => {
      console.log(dialog.message());
      await dialog.accept();
    });
  }
}

module.exports = { BasePage };
