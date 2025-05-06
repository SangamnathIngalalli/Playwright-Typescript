import { test as base } from '@playwright/test';
import { LoginPage } from '../page-objects/pages/login.page';
import { config } from '../config/config';

// Extend the base test fixture with authenticated state
export const test = base.extend({
  authenticatedPage: async ({ page }, use) => {
    // Login before tests
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(config.users.standard.email, config.users.standard.password);
    
    // Use the authenticated page
    await use(page);
    
    // Optional: Logout after tests if needed
    // await page.click('a:has-text("Logout")');
  },
});

export { expect } from '@playwright/test';