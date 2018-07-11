import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsUpdateComponent } from './course-details-update.component';

describe('CourseDetailsUpdateComponent', () => {
  let component: CourseDetailsUpdateComponent;
  let fixture: ComponentFixture<CourseDetailsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
