import { TestBed, inject } from '@angular/core/testing';

import { YandeChairGuardService } from './yande-chair-guard.service';

describe('YandeChairGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YandeChairGuardService]
    });
  });

  it('should be created', inject([YandeChairGuardService], (service: YandeChairGuardService) => {
    expect(service).toBeTruthy();
  }));
});
