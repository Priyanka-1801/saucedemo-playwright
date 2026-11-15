const base = require('@playwright/test');
exports.test = base.test.extend(
    {
        LoggedInPage: async({page},use)=>
        {
             await page.goto('/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await use(page);

        },
    }
);

exports.expect = base.expect;


