import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Teacher} from '../../models/teacher';
import {Course} from '../../models/course';
import {YandeApiService} from '../../services/yande-api.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AppService} from '../../../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatChipInputEvent, MatAutocompleteSelectedEvent} from '@angular/material';
import {COMMA} from '@angular/cdk/keycodes';
import {SnackBarService} from '../../../core/services/snack-bar.service';
import {FullNamePipe} from '../../../core/pipes/full-name.pipe';

import {IndemnityForm} from '../../models/indemnity-forms';

@Component({
  selector: 'hccc-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})

export class CourseFormComponent implements OnInit {
  @Input() course: Course;
  @Input() action: string;

  teachers: Teacher[];
  indemnityForms: IndemnityForm[];

  courseForm: FormGroup;

  courseTeachersDisplay: string;
  courseIFDisplay: string;

  public readOnly = false;


  static constructPostPayload(course) {
    return {
      courseName: course.courseName,
      ageRestrictions: course.ageRestrictions,
      courseImageURL: course.courseImageURL,
      courseRemarks: course.courseRemarks,
      isArchived: course.isArchived,
      isRegistrationOpen: course.isRegistrationOpen,
      courseStartTime: course.courseStartTime,
      courseEndTime: course.courseEndTime,
      courseStartDate: course.courseStartDate.toString(),
      courseEndDate: course.courseEndDate.toString(),
      courseDays: course.courseDays,
      courseVenue: course.courseVenue,
      flyerURL: course.flyerURL,
      slots: course.slots,
      tags: course.tags,
      transientTeacherIds: course.teachers,
      transientIndemnityFormIds: course.indemnityForms
    };
  }
  constructor(private appService: AppService,
              private snackBarService: SnackBarService,
              private apiService: YandeApiService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    // Getting the list of teachers from backend to render dropdown options
    this.route.data
      .subscribe(data => {
        this.teachers = data.teachers;
        this.indemnityForms = data.indemnityForms;
      });

    // Prepare for 3 different actions
    switch (this.action) {
      case 'details':
        this.readOnly = true;
        this.courseForm = this.createForm(this.course);
        break;

      case 'edit':
        this.readOnly = false;
        this.courseForm = this.createForm(this.course);
        this.configureChangeListeners(this.courseForm);
        break;

      case 'create':
        this.readOnly = false;
        this.courseForm = this.createForm(new Course());
        break;
    }
  }

  createForm(c: Course): FormGroup {

    let teachersString = '';
    if (c.teachers) {
      teachersString = c.teachers.map(t => new FullNamePipe().transform(t.devotee)).join(', ');
    }

    let indemnityFormsString = '';
    if (c.teachers) {
      indemnityFormsString = c.indemnityForms.map(t => t.indemnityFormTitle).join(', ');
    }

    return this.formBuilder.group({
      courseId: [c.courseId],
      courseName: [c.courseName, {updateOn: 'blur'}],
      courseImageURL: [c.courseImageURL, {updateOn: 'blur'}],
      courseEndTime: [c.courseEndTime, {updateOn: 'blur'}],
      courseStartTime: [c.courseStartTime, {updateOn: 'blur'}],
      courseStartDate: [c.courseStartDate, {updateOn: 'blur'}],
      courseEndDate: [c.courseEndDate, {updateOn: 'blur'}],
      slots: [c.slots, {updateOn: 'blur'}],
      courseVenue: [c.courseVenue, {updateOn: 'blur'}],
      flyerURL: [c.flyerURL, {updateOn: 'blur'}],
      isArchived: [{value: c.isArchived, disabled: this.readOnly}, {updateOn: 'blur'}],
      isRegistrationOpen: [{value: c.isRegistrationOpen, disabled: this.readOnly}, {updateOn: 'blur'}],
      courseDays: [c.courseDays, {updateOn: 'blur'}],
      courseRemarks: [c.courseRemarks, {updateOn: 'blur'}],
      ageRestrictions: [c.ageRestrictions, {updateOn: 'blur'}],
      tags: [c.tags, {updateOn: 'blur'}],
      teachers: [c.teachers, {updateOn: 'blur'}],
      teachersString: [teachersString],
      indemnityForms: [c.indemnityForms, {updateOn: 'blur'}],
      indemnityFormsString: [indemnityFormsString]
    });
  }

  configureChangeListeners(cf: FormGroup) {
    const self = this;
    cf.controls['courseName'].valueChanges.subscribe(c => self.updateCourse({courseName: c}));
    cf.controls['courseImageURL'].valueChanges.subscribe(c => self.updateCourse({courseImageURL: c}));
    cf.controls['courseEndTime'].valueChanges.subscribe(c => self.updateCourse({courseEndTime: c}));
    cf.controls['courseStartTime'].valueChanges.subscribe(c => self.updateCourse({courseStartTime: c}));
    cf.controls['courseStartDate'].valueChanges.subscribe(c => self.updateCourse({courseStartDate: c}));
    cf.controls['courseEndDate'].valueChanges.subscribe(c => self.updateCourse({courseEndDate: c}));
    cf.controls['slots'].valueChanges.subscribe(c => self.updateCourse({slots: c}));
    cf.controls['courseVenue'].valueChanges.subscribe(c => self.updateCourse({courseVenue: c}));
    cf.controls['flyerURL'].valueChanges.subscribe(c => self.updateCourse({flyerURL: c}));
    cf.controls['isArchived'].valueChanges.subscribe(c => self.updateCourse({isArchived: c}));
    cf.controls['isRegistrationOpen'].valueChanges.subscribe(c => self.updateCourse({isRegistrationOpen: c}));
    cf.controls['courseDays'].valueChanges.subscribe(c => self.updateCourse({courseDays: c}));
    cf.controls['courseRemarks'].valueChanges.subscribe(c => self.updateCourse({courseRemarks: c}));
    cf.controls['ageRestrictions'].valueChanges.subscribe(c => self.updateCourse({ageRestrictions: c}));
    cf.controls['tags'].valueChanges.subscribe(c => self.updateCourse({tags: c}));
    cf.controls['teachers'].valueChanges.subscribe(c => self.updateCourse({transientTeacherIds: c}));
    cf.controls['indemnityForms'].valueChanges.subscribe(c => self.updateCourse({transientIndemnityFormIds: c}));
  }

  onSubmit() {
    this.appService.loading = true;
    this.apiService.addCourse(CourseFormComponent.constructPostPayload(this.courseForm.value)).subscribe(
      data => {
        this.snackBarService.showSuccessSnackBar('New Course Added Successfully');
        this.router.navigate(['../'], {relativeTo: this.route});
        this.appService.loading = false;
      },
      error => {
        this.snackBarService.showFailureSnackBar('Error while adding new course');
        this.appService.loading = false;
      }
    );
  }

  updateCourse(updates) {
    if (updates) {
      this.appService.loading = true;
      this.apiService.updateCourse(updates, this.course.courseId).subscribe(
        data => {
          this.snackBarService.showSuccessSnackBar(Object.keys(updates).join(', ') + ' updated Successfully');
          this.appService.loading = false;
        },
        error => {
          this.snackBarService.showFailureSnackBar('Error while updating course');
          this.appService.loading = false;
        }
      );
    }
  }

  // reset functionality and clearing the course-create form.
  onReset() {
    this.courseForm.reset();
  }

  // readonly separatorKeysCodes: number[] = [COMMA];
  // addTag(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;
  //   if ((value || '').trim()) {
  //     this.model.tagsArray.push(value.toLowerCase());
  //   }
  //   if (input) {
  //     input.value = '';
  //   }
  // }
  //
  // removeTag(tag: string): void {
  //   const index = this.model.tags.indexOf(tag);
  //
  //   if (index >= 0) {
  //     this.model.tagsArray.splice(index, 1);
  //   }
  // }

}
