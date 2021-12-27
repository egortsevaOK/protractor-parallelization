const expect = require('chai').expect;
const PageFactory = require('../pages/pageFactory');


describe('Scholastic App', function() {

  beforeEach(function() {
    browser.ignoreSychronization = true;
    browser.waitForAngularEnabled(false);
    return browser.manage().window().maximize();
  });

  afterEach(function() {
    return browser.restart();
  });
  
  it('should add item to cart', async function() {
    await PageFactory.getPage('Home').open();
    await PageFactory.getPage('Home').Header.selectCategory('PROGRAMS, BOOKS & LIBRARIES');
    await PageFactory.getPage('Home').Header.selectSubcategory('English Learners');
    await PageFactory.getPage('SpanishBilingual').leftFilters.waitVisibilityOf(); // wait until filter section becomes visible
    await PageFactory.getPage('SpanishBilingual').filterBy('GRADE');
    await PageFactory.getPage('SpanishBilingual').checkOption();
    await PageFactory.getPage('SpanishBilingual').pumpkinCircle.click();
    await PageFactory.getPage('SpanishBilingual').itemAddedToCart.waitVisibilityOf(2000);// wait until popup with added to cart item becomes visible
    await PageFactory.getPage('SpanishBilingual').checkoutButton.click();
    await PageFactory.getPage('Signin').checkEmail('new_email@gmail.com');
    await PageFactory.getPage('Signin').close();
    await PageFactory.getPage('Home').Header.viewCart();
    const cartBanner = await PageFactory.getPage('Cart').getCartBannerText();
    expect(cartBanner).to.equal('Shopping Cart');
  });
});
