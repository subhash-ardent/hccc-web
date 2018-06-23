import { YandeModule } from './yande.module';

describe('YandeModule', () => {
  let yandeModule: YandeModule;

  beforeEach(() => {
    yandeModule = new YandeModule();
  });

  it('should create an instance', () => {
    expect(yandeModule).toBeTruthy();
  });
});
