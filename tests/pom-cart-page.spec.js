const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');

test.describe('Cart page using POM', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addBikeLightToCart();
    await inventoryPage.openCart();
  });

  test('cart shows the item that was added', async ({ page }) => {
    const cartPage = new CartPage(page);
    await expect(cartPage.cartItems).toHaveCount(1);
    await expect(cartPage.itemNames).toHaveText(['Sauce Labs Bike Light']);
  });

  test('removing the item empties the cart', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.removeBikeLight();
    await expect(cartPage.cartItems).toHaveCount(0);
  });
});
