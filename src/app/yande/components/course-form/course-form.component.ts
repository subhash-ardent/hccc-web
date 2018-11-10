import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Teacher} from '../../models/teacher';
import {Course} from '../../models/course';
import {YandeApiService} from '../../services/yande-api.service';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import {AppService} from '../../../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatChipInputEvent, MatAutocompleteSelectedEvent} from '@angular/material';
import {COMMA} from '@angular/cdk/keycodes';
import {SnackBarService} from '../../../core/services/snack-bar.service';
import {FullNamePipe} from '../../../core/pipes/full-name.pipe';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
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

  // readonly separatorKeysCodes: number[] = [COMMA];

  constructor(private appService: AppService,
              private snackBarService: SnackBarService,
              private apiService: YandeApiService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {
    this.courseForm = formBuilder.group(new Course());
    console.log(this.courseForm);
  }

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
        // this.model = this.course;
        // this.model.tagsString = this.model.tags;
        // if (this.model.teachers && this.model.teachers.length > 0) {
        //   this.model.teachersString = this.model.teachers.map(t => new FullNamePipe().transform(t.devotee)).join(', ');
        // } else {
        //   this.model.teachersString = '';
        // }
        break;

      case 'edit':
        // this.model = Object.assign({}, this.course);
        break;

      case 'create':
        break;
    }


  }

  onSubmit() {
    console.log('printing model', this.course);
    //
    // this.apiService.addCourse(this.model).subscribe(
    //   data => {
    //     this.snackBarService.showSuccessSnackBar('New Course Added Successfully');
    //     this.router.navigate(['../'], {relativeTo: this.route});
    //   },
    //   error => this.snackBarService.showFailureSnackBar('Error while adding new course')
    // );
  }

  // reset functionality and clearing the course-create form.
  // onReset() {
  //   this.model.tagsArray = [];
  //   this.courseForm.reset();
  // }

  // onUpdate() {
  //   const updatedCourse = new Course();
  //   for (const key in Object.keys(this.model)) {
  //     if (this.model[key] === this.course[key]) {
  //       updatedCourse[key] = this.model[key];
  //     }
  //   }
  //   this.apiService.updateCourse(updatedCourse).subscribe(
  //     data => {
  //       this.snackBarService.showSuccessSnackBar('Course Updated Successfully');
  //       this.router.navigate(['../'], {relativeTo: this.route});
  //     },
  //     error => this.snackBarService.showFailureSnackBar('Error while updating course')
  //   );
  // }
}
