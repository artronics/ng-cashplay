import { Cashplay2Page } from './app.po';

describe('cashplay2 App', () => {
  let page: Cashplay2Page;

  beforeEach(() => {
    page = new Cashplay2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
