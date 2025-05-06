import { test as base } from '@playwright/test';
import { HomePage } from '../page-objects/pages/home.page';
import { LoginPage } from '../page-objects/pages/login.page';

// Declare the types of fixtures
type Pages = {
  homePage: HomePage;
  loginPage: LoginPage;
};

// Extend the base test with our fixtures
export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';