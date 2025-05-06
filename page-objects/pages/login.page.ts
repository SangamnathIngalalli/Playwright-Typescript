import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

export class LoginPage extends BasePage {
  // Locators
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly errorAlert: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('#input-email');
    this.passwordInput = page.locator('#input-password');
    this.loginButton = page.locator('input[value="Login"]');
    this.forgotPasswordLink = page.locator('a:has-text("Forgotten Password")');
    this.errorAlert = page.locator('.alert-danger');
  }

  /**
   * Navigate to login page
   */
  async goto(): Promise<void> {
    await this.navigate('/index.php?route=account/login');
  }

  /**
   * Login with credentials
   * @param email - User email
   * @param password - User password
   */
  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.waitForNavigation();
  }

  /**
   * Check if login error is displayed
   */
  async isErrorDisplayed(): Promise<boolean> {
    return await this.elementExists(this.errorAlert);
  }

  /**
   * Get error message text
   */
  async getErrorMessage(): Promise<string> {
    return await this.errorAlert.innerText();
  }
}