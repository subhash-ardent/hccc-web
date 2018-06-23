import { TestBed, inject } from '@angular/core/testing';

import { RbacApiService } from './rbac-api.service';

describe('RbacApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RbacApiService]
    });
  });

  it('should be created', inject([RbacApiService], (service: RbacApiService) => {
    expect(service).toBeTruthy();
  }));
});
