const expect = require('chai').expect;
const HomePage = require('./pages/home_page');
const SpanishBilingualPage = require('./pages/spanish-bilingual_page');
const SigninPage = require('./pages/signin_page');
const CartPage = require('./pages/cart_page');

describe('Scholastic App', function() {
  beforeEach(function() {
    browser.ignoreSychronization = true;
    browser.waitForAngularEnabled(false);
    return browser.manage().window().maximize();
  });
  afterEach(function() {
    browser.restart();
  });
  it('should add item to cart', async function() {
    await HomePage.open();
    await HomePage.Header.selectCategory('PROGRAMS, BOOKS & LIBRARIES');
    await HomePage.Header.selectSubcategory('English Learners');
    await SpanishBilingualPage.leftFilters.waitVisibilityOf(); // wait until filter section becomes visible
    await SpanishBilingualPage.filterBy('GRADE');
    await SpanishBilingualPage.checkOption();
    await SpanishBilingualPage.pumpkinCircle.click();
    await SpanishBilingualPage.itemAddedToCart.waitVisibilityOf(2000);// wait until popup with added to cart item becomes visible
    await SpanishBilingualPage.checkoutButton.click();
    await SigninPage.checkEmail('new_email@gmail.com');
    await SigninPage.close();
    await HomePage.Header.viewCart();
    expect(await CartPage.getCartBannerText()).to.equal('Shopping Cart');
  });
});
