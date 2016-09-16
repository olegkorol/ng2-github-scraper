import { Angular2Rc6GithubToolPage } from './app.po';

describe('angular2-rc6-github-tool App', function() {
  let page: Angular2Rc6GithubToolPage;

  beforeEach(() => {
    page = new Angular2Rc6GithubToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
