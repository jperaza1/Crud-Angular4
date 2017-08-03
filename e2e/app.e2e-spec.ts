import { CrudAngular4Page } from './app.po';

describe('crud-angular4 App', () => {
  let page: CrudAngular4Page;

  beforeEach(() => {
    page = new CrudAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
