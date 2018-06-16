import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCatelogueComponent } from './course-catelogue.component';

describe('CourseCatelogueComponent', () => {
  let component: CourseCatelogueComponent;
  let fixture: ComponentFixture<CourseCatelogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCatelogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCatelogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
