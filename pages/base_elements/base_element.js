const EC = protractor.ExpectedConditions;

class Element {
  constructor(selector) {
    this.element = element(by.css(selector));
  }
  click() {
    return this.element.click();
  };
  async getText() {
    const elementText = await this.element.getText();
    return elementText;
  };
  async sendKeys(text) {
    return await this.element.sendKeys(text);
  };
  async check() {
    return await browser.executeScript('arguments[0].click()', this.element);
  }
  async mouseMove() {
    return await browser.actions().mouseMove(this.element).perform();
  }
  async waitToBeSelected() {
    return await browser.wait(EC.elementToBeSelected(this.element));
  }
  async waitVisibilityOf(waitInMilliseconds) {
    return await browser.wait(EC.visibilityOf(this.element), waitInMilliseconds);
  }
  async waitToBeClickable(waitInMilliseconds) {
    return await browser.wait(EC.elementToBeClickable(this.element), waitInMilliseconds);
  }
};

module.exports = Element;
