class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.getByText('Products');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addBikeLightToCart() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  }
}

module.exports = { InventoryPage };