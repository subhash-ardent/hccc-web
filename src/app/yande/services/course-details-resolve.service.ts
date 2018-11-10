import {Injectable} from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, timer} from 'rxjs';
import {map, take, delayWhen, catchError} from 'rxjs/operators';

import {Course} from '../models/course';
import {NotFoundError} from '../../core/models/not-found-error';
import {YandeApiService} from './yande-api.service';
import {AppService} from '../../app.service';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsResolveService {

  constructor(private appService: AppService,
              private apiService: YandeApiService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Course> {
    return this.getCourse(route);
  }

  async getCourse(route: ActivatedRouteSnapshot): Promise<Course> {
    if (!this.apiService.isCoursesLoaded) {
      await this.apiService.loadCourses();
    }
    return this.apiService.courses$.pipe(
      take(1),
      map(courses => {

        if (!courses || courses.length === 0) {
          throw new Error('Course Catalogue is Empty');
        } else {
          const course = courses.find(c => {
            return c.courseId === parseInt(route.params['id'], 10);
          });
          if (!course) {
            throw new Error('Course not found');
          }
          return course;
        }
      }),
      catchError(this.appService.handleFatalError<Course>(`get courses`))
    ).toPromise();
  }
}
