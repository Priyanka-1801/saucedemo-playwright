class BasePage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = { BasePage };
