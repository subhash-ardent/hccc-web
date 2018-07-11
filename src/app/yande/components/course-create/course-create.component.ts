import {Component, OnInit} from '@angular/core';
import {Course} from '../../models/course';
import {YandeApiService} from '../../services/yande-api.service';
import {catchError} from 'rxjs/operators';
import {AppService} from '../../../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Teacher} from '../../models/teacher';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {
  model = new Course();
  teachers: Teacher[];
  submitted = false;

  constructor(private appService: AppService,
              private route: ActivatedRoute,
              private apiService: YandeApiService) {

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

}
