import { YandeRoutingModule } from './yande-routing.module';

describe('YandeRoutingModule', () => {
  let yandeRoutingModule: YandeRoutingModule;

  beforeEach(() => {
    yandeRoutingModule = new YandeRoutingModule();
  });

  it('should create an instance', () => {
    expect(yandeRoutingModule).toBeTruthy();
  });
});
