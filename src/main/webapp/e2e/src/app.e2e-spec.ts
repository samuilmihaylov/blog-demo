import { AppPage } from './app.po';

describe('app-dashboard component', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should exist', () => {
    page.navigateTo();
    expect(page.getParagraph().isPresent()).toBe(true);
  });
});
