import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSearchNavbarComponent } from './course-search-navbar.component';

describe('CourseSearchNavbarComponent', () => {
  let component: CourseSearchNavbarComponent;
  let fixture: ComponentFixture<CourseSearchNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSearchNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSearchNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
