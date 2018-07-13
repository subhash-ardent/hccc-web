import { TestBed, inject } from '@angular/core/testing';

import { TeacherListResolveService } from './teacher-list-resolve.service';

describe('TeacherListResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeacherListResolveService]
    });
  });

  it('should be created', inject([TeacherListResolveService], (service: TeacherListResolveService) => {
    expect(service).toBeTruthy();
  }));
});
