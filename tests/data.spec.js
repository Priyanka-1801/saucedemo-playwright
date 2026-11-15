const {test, expect } = require('@playwright/test');
const users = [
{username: 'standard_user', password: 'secret_sauce'},
{ username: 'problem_user', password: 'secret_sauce'},
{ username: 'performance_glitch_user', password: 'secret_sauce'},
];
for(const user of users) {
    test(`${user.username} can login`, async({page})=>
    {
     await page.goto('/');
     await page.getByPlaceholder('username').fill(user.username);
     await page.getByPlaceholder('password').fill(user.password);
     await page.getByRole('button', {name:'login'}).click();
     await expect(page).toHaveURL(/inventory/);

    });
}

const badLogins =[
{ username: 'locked_out_user', password: 'secret_sauce', message:'locked out'},
  { username: 'standard_user', password: 'wrong_password' , message: 'do not match any user' },
];

for(const user of badLogins){
    test(`${user.username} with ${user.password} cannot Login`, async({page})=>
    {
        await page.goto('/');
        await page.getByPlaceholder('username').fill(user.username);
        await page.getByPlaceholder('password').fill(user.password);
        await page.getByRole('button', {name:'login'}).click();
    await expect(page.getByRole('alert')).toContainText(user.message);
        await expect(page).not.toHaveURL(/inventory/);
    });
}