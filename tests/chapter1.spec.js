const{test, expect } = require('@playwright/test');
test ('open the login page', async({page})=>
{
    await page.goto('/');
});