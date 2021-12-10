const BasePage = require('./base_pages/base_page');
const Collection = require('./base_elements/base_collection');
const Element = require('./base_elements/base_element');

class SpanishBilingualPage extends BasePage {
  constructor() {
    super();
    this.leftFilters = new Element('.cio-search-filters');
    this.leftFilterItems = new Collection('.cio-search-filters .cio-search-facet-closed div.facet-header');
    this.gradeTwelve = new Element('.cio-search-filters #grade-grade-12');
    this.pumpkinCircle = new Element('[title="Pumpkin Circle"] .cio-btn-red.cio-add-to-cart');
    this.itemAddedToCart = new Element('.notification-wrapper.shadow');
    this.checkoutButton = new Element('[id="add-cart-msg"] .checkoutCartButton');
  };
  open() {
    return super.open(this.url);
  };
  filterBy(parameter) {
    this.leftFilters.waitVisibilityOf(3000);
    return this.leftFilterItems.clickElementByText(parameter);
  }
  checkOption() {
    this.gradeTwelve.check();
    return this.gradeTwelve.waitToBeSelected();
  }
};
module.exports = new SpanishBilingualPage();
