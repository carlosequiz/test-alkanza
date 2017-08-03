import { TestAlkanzaPage } from './app.po';

describe('test-alkanza App', () => {
  let page: TestAlkanzaPage;

  beforeEach(() => {
    page = new TestAlkanzaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
