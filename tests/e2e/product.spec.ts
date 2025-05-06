import { test, expect } from '../../fixtures/base.fixture';
import { Logger } from '../../utils/logger';
import { TestData } from '../../utils/test-data';

const logger = Logger.getInstance();

test.describe('Product Tests', () => {
  test.beforeEach(async ({ homePage }) => {
    logger.info('Navigating to home page');
    await homePage.goto();
  });

  test('should display featured products on home page', async ({ homePage }) => {
    logger.info('Checking featured products');
    
    // Verify featured products are displayed
    const productCount = await homePage.getFeaturedProductsCount();
    expect(productCount).toBeGreaterThan(0);
    logger.info(`Found ${productCount} featured products`);
  });

  test('should search for a product', async ({ homePage }) => {
    logger.info('Testing product search');
    
    // Get a test product
    const testProduct = TestData.getTestProducts()[0];
    
    // Search for the product
    await homePage.searchProduct(testProduct.name);
    
    // Verify search results page contains the product
    const searchResultsTitle = await homePage.page.locator('h1').innerText();
    expect(searchResultsTitle.toLowerCase()).toContain('search');
    
    // Check if product is in search results
    const productElement = homePage.page.locator(`.product-layout:has-text("${testProduct.name}")`);
    await expect(productElement).toBeVisible();
    logger.info(`Successfully found product: ${testProduct.name}`);
  });
});