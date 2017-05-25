import { WebdesignPage } from './app.po';

describe('webdesign App', () => {
  let page: WebdesignPage;

  beforeEach(() => {
    page = new WebdesignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
