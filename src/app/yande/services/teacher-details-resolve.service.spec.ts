import { TestBed, inject } from '@angular/core/testing';

import { TeacherDetailsResolveService } from './teacher-details-resolve.service';

describe('TeacherDetailsResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherDetailsResolveService]
    });
  });

  it('should be created', inject([TeacherDetailsResolveService], (service: TeacherDetailsResolveService) => {
    expect(service).toBeTruthy();
  }));
});
