import {Injectable} from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, timer} from 'rxjs';
import {map, take, delayWhen, catchError} from 'rxjs/operators';

import {Course} from '../models/course';
import {YandeApiService} from './yande-api.service';
import {AppService} from '../../app.service';

@Injectable({
  providedIn: 'root'
})
export class CourseListResolveService implements Resolve<Course[]> {

  constructor(private appService: AppService,
              private apiService: YandeApiService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Course[]> {
    return this.getCourses();
  }

  async getCourses(): Promise<Course[]> {
    if (!this.apiService.isCoursesLoaded) {
      await this.apiService.loadCourses();
    }
    return this.apiService.courses$.pipe(
      take(1),
      map(courses => {
        // if (!courses || courses.length === 0) {
        //   throw new Error('Course Catalogue is Empty');
        // } else {
        //   courses = courses.map(course => {
        //     if (course.tags) {
        //       course.tagsArray = course.tags.split(',');
        //     }
        //     return course;
        //   });
          return courses;
        // }
      }),
      catchError(this.appService.handleFatalError<Course[]>(`get courses`))
    ).toPromise();
  }
}
