import { test, expect } from '../../fixtures/base.fixture';
import { config } from '../../config/config';
import { TestData } from '../../utils/test-data';
import { Logger } from '../../utils/logger';

const logger = Logger.getInstance();

test.describe('Authentication Tests', () => {
  test.beforeEach(async ({ homePage }) => {
    logger.info('Navigating to home page');
    await homePage.goto();
  });

  test('should login with valid credentials', async ({ homePage, loginPage }) => {
    logger.info('Starting login test with valid credentials');
    
    // Navigate to login page
    await homePage.goToLogin();
    
    // Login with valid credentials
    await loginPage.login(
      config.credentials.standard.email,
      config.credentials.standard.password
    );
    
    // Verify we're on the account page
    await expect(loginPage.page).toHaveURL(/account\/account/);
    logger.info('Successfully logged in with valid credentials');
  });

  test('should show error with invalid credentials', async ({ homePage, loginPage }) => {
    logger.info('Starting login test with invalid credentials');
    
    // Navigate to login page
    await homePage.goToLogin();
    
    // Login with invalid credentials
    const randomUser = TestData.generateUser();
    await loginPage.login(randomUser.email, randomUser.password);
    
    // Verify error is displayed
    await expect(loginPage.errorAlert).toBeVisible();
    expect(await loginPage.isErrorDisplayed()).toBeTruthy();
    logger.info('Error displayed for invalid credentials as expected');
  });
});