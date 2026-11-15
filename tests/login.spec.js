const {test, expect} = require('@playwright/test');
test.describe('Login', ()=>
{
    test.beforeEach(async({page})=>
    {
        await page.goto('/');
    });
test('standard user can login', async({page})=>
{

await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button', {name: "login"}).click();
await expect(page).toHaveURL(/inventory/);
await expect(page.getByText('products')).toBeVisible();
});

test('login button is visible', async({page})=>
{
    
    await expect(page.getByRole('button', {name: 'Login'})).toBeVisible();
});
});
