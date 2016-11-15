import { JsakademiPage } from './app.po';

describe('jsakademi App', function() {
  let page: JsakademiPage;

  beforeEach(() => {
    page = new JsakademiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
