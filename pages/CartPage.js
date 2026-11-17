const { BasePage } = require('./BasePage');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.title = page.locator('[data-test="title"]');
    this.cartItems = page.locator('.cart_item');
    this.itemNames = page.locator('.inventory_item_name');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async removeBikeLight() {
    await this.page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
  }
}

module.exports = { CartPage };
