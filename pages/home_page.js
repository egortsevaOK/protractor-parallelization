const BasePage = require('./base_pages/base_page');

class HomePage extends BasePage {
  constructor() {
    super();
    this.url = 'https://shop.scholastic.com/teachers-ecommerce/teacher/tsohomepage.html';
  };
  open() {
    return super.open(this.url);
  };
}
module.exports = new HomePage();
