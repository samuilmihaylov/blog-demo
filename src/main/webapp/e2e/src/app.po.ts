import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  getParagraph() {
    return element(by.css('app-dashboard p'));
  }
}
