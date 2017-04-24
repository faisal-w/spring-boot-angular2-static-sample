import { SpringBootAngular2StaticSampleBkpPage } from './app.po';

describe('spring-boot-angular2-static-sample-bkp App', () => {
  let page: SpringBootAngular2StaticSampleBkpPage;

  beforeEach(() => {
    page = new SpringBootAngular2StaticSampleBkpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
