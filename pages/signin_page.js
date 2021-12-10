const BasePage = require('./base_pages/base_page');
const Element = require('./base_elements/base_element');

class SigninPage extends BasePage {
  constructor() {
    super();
    this.emailField = new Element('#user-text-field');
    this.continueButton = new Element('#signin-email-submit-button');
    this.emailErrorMsg = new Element('.EmailField_errorMessage__2Go2g');
    this.closeButton = new Element('#registration-close');
  };
  async checkEmail(email) {
    await browser.switchTo().frame(await element(by.css('.loginframe')).getWebElement());
    await browser.switchTo().frame(await element(by.id('loginIframe')).getWebElement());
    this.emailField.sendKeys(email);
    this.continueButton.waitToBeClickable(3000);
    return this.continueButton.check();
  };
  async close() {
    browser.switchTo().defaultContent();
    await this.closeButton.waitVisibilityOf(1000);
    await this.closeButton.click();
  }
};

module.exports = new SigninPage();
