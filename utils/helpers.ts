import { Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Generate a random string
 * @param length - Length of the string
 */
export function generateRandomString(length: number = 10): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

/**
 * Generate a random email
 */
export function generateRandomEmail(): string {
  return `test.${generateRandomString(8)}@example.com`;
}

/**
 * Wait for a specific amount of time
 * @param ms - Milliseconds to wait
 */
export async function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Save page content to file (useful for debugging)
 * @param page - Playwright page
 * @param filename - Name of the file
 */
export async function savePageContent(page: Page, filename: string): Promise<void> {
  const content = await page.content();
  const dir = './debug';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, filename), content);
}