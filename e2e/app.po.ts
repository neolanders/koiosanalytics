import { browser, element, by } from 'protractor';

export class MyAngularAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('koios-root h1')).getText();
  }
}
