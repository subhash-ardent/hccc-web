import { TestBed, inject } from '@angular/core/testing';

import { TeacherNameResolveService } from './teacher-name-resolve.service';

describe('TeacherNameResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherNameResolveService]
    });
  });

  it('should be created', inject([TeacherNameResolveService], (service: TeacherNameResolveService) => {
    expect(service).toBeTruthy();
  }));
});
