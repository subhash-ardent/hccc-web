import { TestBed, inject } from '@angular/core/testing';

import { CourseDetailsResolveService } from './course-details-resolve.service';

describe('CourseDetailsResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseDetailsResolveService]
    });
  });

  it('should be created', inject([CourseDetailsResolveService], (service: CourseDetailsResolveService) => {
    expect(service).toBeTruthy();
  }));
});
