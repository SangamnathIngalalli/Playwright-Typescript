import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

export class HomePage extends BasePage {
  // Locators
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly cartButton: Locator;
  readonly myAccountDropdown: Locator;
  readonly loginLink: Locator;
  readonly featuredProducts: Locator;

  constructor(page: Page) {
    super(page);
    this.searchInput = page.locator('input[name="search"]');
    this.searchButton = page.locator('button.btn-default');
    this.cartButton = page.locator('#cart');
    this.myAccountDropdown = page.locator('.dropdown:has-text("My Account")');
    this.loginLink = page.locator('a:has-text("Login")');
    this.featuredProducts = page.locator('.product-layout');
  }

  /**
   * Navigate to home page
   */
  async goto(): Promise<void> {
    await this.navigate('/');
  }

  /**
   * Search for a product
   * @param searchTerm - The term to search for
   */
  async searchProduct(searchTerm: string): Promise<void> {
    await this.searchInput.fill(searchTerm);
    await this.searchButton.click();
    await this.waitForNavigation();
  }

  /**
   * Navigate to login page
   */
  async goToLogin(): Promise<void> {
    await this.myAccountDropdown.click();
    await this.loginLink.click();
    await this.waitForNavigation();
  }

  /**
   * Get number of featured products
   */
  async getFeaturedProductsCount(): Promise<number> {
    return await this.featuredProducts.count();
  }
}