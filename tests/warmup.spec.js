const { test, expect } = require('@playwright/test');

test('standard user login', async({page})=>
{
    await page.goto('/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page).toHaveURL(/inventory/);
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.getByText('Products')).toBeVisible();
});
