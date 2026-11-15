const {test, expect } = require('../fixtures');
test('products page shows after login', async({LoggedInPage})=>
{
    await expect(LoggedInPage).toHaveURL(/inventory/);
    await expect(LoggedInPage.getByText('Products')).toBeVisible();

});
test('adding the bike light updates the cart count', async({LoggedInPage})=>
{

    await LoggedInPage.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await expect(LoggedInPage.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
});