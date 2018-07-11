import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseIndemnityComponent } from './course-indemnity.component';

describe('CourseIndemnityComponent', () => {
  let component: CourseIndemnityComponent;
  let fixture: ComponentFixture<CourseIndemnityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseIndemnityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseIndemnityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
