import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDetailsUpdateComponent } from './teacher-details-update.component';

describe('TeacherDetailsUpdateComponent', () => {
  let component: TeacherDetailsUpdateComponent;
  let fixture: ComponentFixture<TeacherDetailsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDetailsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDetailsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
