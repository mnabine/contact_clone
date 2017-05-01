import { AppnamePage } from './app.po';

describe('appname App', () => {
  let page: AppnamePage;

  beforeEach(() => {
    page = new AppnamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
