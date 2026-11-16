const { test, expect } = require('@playwright/test');

test('inventory shows 6 products', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('.inventory_item')).toHaveCount(6);
});