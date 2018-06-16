import { TestBed, inject } from '@angular/core/testing';

import { YandeApiService } from './yande-api.service';

describe('YandeApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YandeApiService]
    });
  });

  it('should be created', inject([YandeApiService], (service: YandeApiService) => {
    expect(service).toBeTruthy();
  }));
});
