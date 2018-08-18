import {Component, Input, OnInit, ViewChild } from '@angular/core';
import {Teacher} from '../../models/teacher';
import {Course} from '../../models/course';
import {YandeApiService} from '../../services/yande-api.service';
import {NgForm} from '@angular/forms';
import {AppService} from '../../../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {SnackBarService} from '../../../core/services/snack-bar.service';
import {FullNamePipe} from '../../../core/pipes/full-name.pipe';

@Component({
  selector: 'hccc-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  @Input() course: Course;
  @Input() action: string;
  @ViewChild('courseForm') courseForm: NgForm;
  model: Course;
  teachers: Teacher[];
  submitted = false;
  tags: string;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private appService: AppService,
              private snachBarService: SnackBarService,
              private apiService: YandeApiService,
              private router: Router,
              private route: ActivatedRoute) {


  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.model.tags.push(value);
    }
    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: string): void {
    const index = this.model.tags.indexOf(tag);

    if (index >= 0) {
      this.model.tags.splice(index, 1);
    }
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { teachers: Teacher[] }) => {
        this.teachers = data.teachers;
      });
    if (this.action === 'details') {
      this.model = this.course;
      this.model.tagsString = this.model.tags.join(', ');
      this.model.teachersString = this.model.teachers.map(t => new FullNamePipe().transform(t.account)).join(', ');
    } else if (this.action === 'edit') {
      this.model = Object.assign({}, this.course);
    } else {
      this.model = new Course();
      this.model.tags = [];
      this.model.teachers = [];
    }

  }

  onSubmit() {
    this.submitted = true;
    console.log('printing model', this.model);

    this.apiService.addCourse(this.model).subscribe(
      data => {
        this.snachBarService.showSuccessSnackBar('New Course Added Successfully');
        this.router.navigate(['../'], {relativeTo: this.route});
      },
      error => this.snachBarService.showFailureSnackBar('Error while adding new course')
    );
  }

  // reset functionality and clearing the course-create form.
  onReset() {
    this.model.tags = [];
    this.courseForm.reset();
  }

  onUpdate() {
    const updatedCourse = new Course();
    for (const key in Object.keys(this.model)) {
      if (this.model[key] === this.course[key]) {
        updatedCourse[key] = this.model[key];
      }
    }
    this.apiService.updateCourse(updatedCourse).subscribe(
      data => {
        this.snachBarService.showSuccessSnackBar('Course Updated Successfully');
        this.router.navigate(['../'], {relativeTo: this.route});
      },
      error => this.snachBarService.showFailureSnackBar('Error while updating course')
    );
  }
}
