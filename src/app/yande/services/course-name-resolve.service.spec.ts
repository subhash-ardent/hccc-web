import { TestBed, inject } from '@angular/core/testing';

import { CourseNameResolveService } from './course-name-resolve.service';

describe('CourseNameResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseNameResolveService]
    });
  });

  it('should be created', inject([CourseNameResolveService], (service: CourseNameResolveService) => {
    expect(service).toBeTruthy();
  }));
});
