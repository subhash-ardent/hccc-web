import {Component, OnInit, ViewChild} from '@angular/core';
import {Course} from '../../models/course';
import {YandeApiService} from '../../services/yande-api.service';
import {catchError} from 'rxjs/operators';
import {AppService} from '../../../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Teacher} from '../../models/teacher';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {
  @ViewChild('courseForm') courseForm: NgForm;
  model = new Course();
  teachers: Teacher[];
  submitted = false;
  tags: string;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private appService: AppService,
              private route: ActivatedRoute,
              private apiService: YandeApiService) {
    this.model.tags = [];
    this.model.teachers = [];
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
  }

  onSubmit() {
    this.submitted = true;
    console.log('printing model', this.model);

    this.apiService.addCourse(this.model).pipe(
      catchError(this.appService.handleFatalError<Course[]>(`submit to add course`))
    ).subscribe();
  }

  //reset functionality and clearing the course-create form.

  onReset(){
    this.model.tags = [];
    this.courseForm.reset();
  }

}
