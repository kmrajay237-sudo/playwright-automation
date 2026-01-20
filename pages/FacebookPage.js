const { BasePage } = require('./BasePage');

/**
 * Facebook Page Object
 * Contains all selectors and methods related to facebook.com
 */
class FacebookPage extends BasePage {
  // Selectors for login
  EMAIL_INPUT = 'input[data-testid="royal_email"]';
  PASSWORD_INPUT = 'input[data-testid="royal_pass"]';
  LOGIN_BUTTON = 'button[data-testid="royal_login_button"]';
  
  // Selectors for navigation and logout
  USER_MENU_BUTTON = '[data-testid="user-menu-trigger"]';
  LOGOUT_OPTION = 'div[data-testid="logout_option"]';
  SETTINGS_MENU = '[data-testid="settings_dropdown_toggle"]';

  /**
   * Navigate to Facebook login page
   */
  async navigateToFacebook() {
    await this.goto('https://www.facebook.com/');
  }

  /**
   * Perform login with email and password
   */
  async loginWithEmailPassword(email, password) {
    await this.fill(this.EMAIL_INPUT, email);
    await this.fill(this.PASSWORD_INPUT, password);
    await this.click(this.LOGIN_BUTTON);
    // Wait for navigation after login
    await this.page.waitForNavigation({ waitUntil: 'networkidle', timeout: 10000 }).catch(() => {});
  }

  /**
   * Check if user is logged in by verifying user menu is visible
   */
  async isLoggedIn() {
    await this.page.waitForTimeout(2000); // Wait for page to fully load
    try {
      return await this.isElementVisible(this.USER_MENU_BUTTON);
    } catch {
      return false;
    }
  }

  /**
   * Perform logout
   */
  async logout() {
    try {
      // Click on user menu
      await this.click(this.USER_MENU_BUTTON);
      await this.page.waitForTimeout(1000);
      
      // Click logout option
      await this.click(this.LOGOUT_OPTION);
      await this.page.waitForNavigation({ waitUntil: 'networkidle', timeout: 10000 }).catch(() => {});
    } catch (error) {
      console.log('Logout error:', error.message);
      throw error;
    }
  }

  /**
   * Verify logout by checking login button is visible
   */
  async isLoggedOut() {
    try {
      return await this.isElementVisible(this.EMAIL_INPUT);
    } catch {
      return false;
    }
  }
}

module.exports = { FacebookPage };
