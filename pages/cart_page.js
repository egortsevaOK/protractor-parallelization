const BasePage = require('./base_pages/base_page');
const Element = require('./base_elements/base_element');

class CartPage extends BasePage {
  constructor() {
    super();
    this.cartBanner = new Element('.welcomeBannerText');
  };
  getCartBannerText() {
    return this.cartBanner.getText();
  }
};
module.exports = CartPage;
