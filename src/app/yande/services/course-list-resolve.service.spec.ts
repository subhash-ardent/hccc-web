import { TestBed, inject } from '@angular/core/testing';

import { CourseListResolveService } from './course-list-resolve.service';

describe('CourseListResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseListResolveService]
    });
  });

  it('should be created', inject([CourseListResolveService], (service: CourseListResolveService) => {
    expect(service).toBeTruthy();
  }));
});
