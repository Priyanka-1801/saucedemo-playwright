const { BasePage } = require('./BasePage');

class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.title = page.getByText('Products');
  }

  async addBikeLightToCart() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  }
}

module.exports = { InventoryPage };
