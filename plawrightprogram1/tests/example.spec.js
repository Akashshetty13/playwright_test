import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  await page.locator('[data-test="username"]').fill('standard_user');
  
  await page.waitForTimeout(3000);
  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.waitForTimeout(3000);
  await page.locator('[data-test="login-button"]').click();

  await page.waitForTimeout(3000);
  
  


});