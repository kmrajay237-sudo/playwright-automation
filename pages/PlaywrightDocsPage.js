const { BasePage } = require('./BasePage');

/**
 * PlaywrightDocsPage Object
 * Contains all selectors and methods related to playwright.dev
 */
class PlaywrightDocsPage extends BasePage {
  /**
   * Navigate to Playwright homepage
   */
  async navigateToPlaywrightHome() {
    await this.goto('https://playwright.dev/');
  }

  /**
   * Navigate to Playwright docs intro
   */
  async navigateToPlaywrightDocs() {
    await this.goto('https://playwright.dev/docs/intro');
  }

  /**
   * Go back to previous page
   */
  async goBack() {
    await this.page.goBack();
  }

  /**
   * Go forward to next page
   */
  async goForward() {
    await this.page.goForward();
  }

  /**
   * Reload page
   */
  async reloadPage() {
    await this.page.reload();
  }
}

module.exports = { PlaywrightDocsPage };
