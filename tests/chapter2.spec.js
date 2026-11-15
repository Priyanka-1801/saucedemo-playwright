const{ test, expect } = require('@playwright/test');
test('find username by id', async ({page})=>
{
await page.goto('/');
await page.locator('#user-name').fill('standard_user');
});

test ('find username by placeholder', async({page})=>
{
    await page.goto('/');
    await page.getByPlaceholder('username').fill('standard_user');
});

test('find username by data-test', async({page})=>
{
    await page.goto('/');
    await page.locator('[data-test = "username"]').fill('standard_user');
});


test('find password by id', async ({page})=>
{
await page.goto('/');
await page.locator('#password').fill('secret_sauce');
});

test ('find password by placeholder', async({page})=>
{
    await page.goto('/');
    await page.getByPlaceholder('Password').fill('secret_sauce');
});

test('find password by data-test', async({page})=>
{
    await page.goto('/');
    await page.locator('[data-test = "password"]').fill('secret_sauce');
});

test('find login button by role', async({page})=>
{
    await page.goto('/');
    await page.getByRole('button', {name: 'login'}).click();

});

test('find login button by data-test', async({page})=>
{
    await page.goto('/');
 await page.locator('[data-test = "login-button"]').click();
});

test('find login button by id', async({page})=>
{
    await page.goto('/');
    await page.locator('#login-button').click();
});