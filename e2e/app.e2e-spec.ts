import { ProairV2Page } from './app.po';

describe('proair-v2 App', () => {
  let page: ProairV2Page;

  beforeEach(() => {
    page = new ProairV2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
