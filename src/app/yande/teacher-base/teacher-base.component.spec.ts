import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBaseComponent } from './teacher-base.component';

describe('TeacherBaseComponent', () => {
  let component: TeacherBaseComponent;
  let fixture: ComponentFixture<TeacherBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
